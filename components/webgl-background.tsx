"use client"

import { useEffect, useRef } from "react"

export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2", {
      antialias: true,
      powerPreference: "high-performance",
    })

    if (!gl) {
      console.warn("WebGL2 not available, falling back to CSS gradient")
      canvas.style.display = "none"
      canvas.parentElement!.style.background =
        "radial-gradient(1200px 600px at 50% 10%, rgba(124, 92, 255, 0.2), transparent 60%), linear-gradient(120deg, #0b0b12, #111127)"
      return
    }

    const vertexShaderSource = `#version 300 es
      in vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragmentShaderSource = `#version 300 es
      precision highp float;
      out vec4 outColor;
      uniform vec2 u_res;
      uniform float u_time;
      
      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }
      
      float noise(in vec2 p) {
        const float K1 = 0.366025404;
        const float K2 = 0.211324865;
        vec2 i = floor(p + (p.x + p.y) * K1);
        vec2 a = p - i + (i.x + i.y) * K2;
        vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec2 b = a - o + K2;
        vec2 c = a - 1.0 + 2.0 * K2;
        vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
        vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
        return dot(n, vec3(70.0));
      }
      
      float fbm(vec2 p) {
        float s = 0.0, a = 0.5;
        for(int i = 0; i < 5; i++) {
          s += a * noise(p);
          p *= 2.02;
          a *= 0.5;
        }
        return s;
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 st = uv * 2.0 - 1.0;
        st.x *= u_res.x / u_res.y;
        
        float t = u_time * 0.06;
        float n1 = fbm(st * 1.4 + vec2(t, -t));
        float n2 = fbm(st * 0.9 + vec2(-t * 0.6, t * 0.7));
        float n = smoothstep(0.2, 0.8, 0.55 * n1 + 0.45 * n2);
        
        vec3 c1 = vec3(0.07, 0.16, 0.36); // navy
        vec3 c2 = vec3(0.15, 0.39, 0.98); // blue
        vec3 c3 = vec3(0.03, 0.03, 0.06); // blackish bg
        vec3 col = mix(c1, c2, n);
        
        // subtle vignette for readability
        float v = smoothstep(1.2, 0.2, length(st));
        col = mix(c3, col, v);
        
        outColor = vec4(col, 1.0);
      }
    `

    function compileShader(type: number, source: string) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation failed")
      }

      return shader
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()!
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || "Program linking failed")
    }

    const quad = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, quad)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const timeLocation = gl.getUniformLocation(program, "u_time")
    const resolutionLocation = gl.getUniformLocation(program, "u_res")

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
    }

    const startTime = performance.now()

    function animate(now: number) {
      const seconds = (now - startTime) / 1000
      gl.uniform1f(timeLocation, seconds)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animationRef.current = requestAnimationFrame(animate)
    }

    gl.useProgram(program)

    resize()
    animate(performance.now())

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />
}
