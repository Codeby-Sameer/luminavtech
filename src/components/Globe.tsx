import { useEffect, useRef } from 'react'

export default function Globe() {
  const getThemeColor = (varName: string, defaultColor: string) => {
    if (typeof window === 'undefined') return defaultColor
    const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    return val || defaultColor
  }

  const hexToRgba = (hex: string, alpha: number) => {
    hex = hex.replace('#', '')
    if (hex.length === 3) {
      hex = hex.split('').map((char) => char + char).join('')
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0
    const g = parseInt(hex.substring(2, 4), 16) || 0
    const b = parseInt(hex.substring(4, 6), 16) || 0
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500)

    // Center of the canvas
    let cx = width / 2
    let cy = height / 2

    // Globe properties
    const radius = Math.min(width, height) * 0.4
    const dots: { x: number; y: number; z: number }[] = []
    
    // Create longitude and latitude dot coordinates
    const latCount = 18
    const lonCount = 26

    for (let i = 0; i <= latCount; i++) {
      const lat = (i / latCount) * Math.PI - Math.PI / 2
      const r = Math.cos(lat) * radius
      const y = Math.sin(lat) * radius

      for (let j = 0; j < lonCount; j++) {
        const lon = (j / lonCount) * 2 * Math.PI
        const x = Math.cos(lon) * r
        const z = Math.sin(lon) * r
        dots.push({ x, y, z })
      }
    }

    // Highlighted hubs (representing Global Capability Centers / Talent hubs)
    const hubs = [
      { lat: 0.7, lon: 4.8, name: 'North America', colorVar: '--primary', defaultColor: '#0B3B8C' },
      { lat: 0.9, lon: 1.2, name: 'Europe', colorVar: '--secondary', defaultColor: '#3E6FB6' },
      { lat: 0.2, lon: 2.5, name: 'India Hub', colorVar: '--accent', defaultColor: '#D4A017' },
      { lat: -0.4, lon: 3.1, name: 'APAC Talent', colorVar: '--secondary', defaultColor: '#3E6FB6' },
      { lat: -0.2, lon: 0.8, name: 'Nearshore LatAm', colorVar: '--primary', defaultColor: '#0B3B8C' },
    ]

    let angleX = 0.003
    let angleY = 0.005

    // Mouse control
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const dx = e.clientX - prevMouseX
      const dy = e.clientY - prevMouseY
      angleY += dx * 0.005
      angleX += dy * 0.005
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || 500
      height = canvas.height = canvas.parentElement?.clientHeight || 500
      cx = width / 2
      cy = height / 2
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)

    // Projection & Rotation functions
    const rotateY = (point: { x: number; y: number; z: number }, rad: number) => {
      const cos = Math.cos(rad)
      const sin = Math.sin(rad)
      return {
        x: point.x * cos - point.z * sin,
        y: point.y,
        z: point.x * sin + point.z * cos,
      }
    }

    const rotateX = (point: { x: number; y: number; z: number }, rad: number) => {
      const cos = Math.cos(rad)
      const sin = Math.sin(rad)
      return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos,
      }
    }

    // Animation Loop
    let currentRotationY = 0
    let currentRotationX = 0.3 // tilt

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Auto-rotation when not dragging
      if (!isDragging) {
        currentRotationY += 0.003
      } else {
        currentRotationY += angleY
        currentRotationX += angleX
        angleY *= 0.95
        angleX *= 0.95
      }

      // Draw background glow under globe
      const bgGlow = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.5)
      const primaryColor = getThemeColor('--primary', '#0B3B8C');
      const secondaryColor = getThemeColor('--secondary', '#3E6FB6');
      bgGlow.addColorStop(0, hexToRgba(primaryColor, 0.05))
      bgGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = bgGlow
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Sort dots by depth (Z) for proper 3D rendering (back to front)
      const projectedDots = dots.map((d) => {
        let p = rotateY(d, currentRotationY)
        p = rotateX(p, currentRotationX)
        return p
      })

      // Draw dots
      projectedDots.forEach((p) => {
        // Perspective factor
        const distance = radius * 2
        const scale = distance / (distance + p.z)
        const screenX = cx + p.x * scale
        const screenY = cy + p.y * scale

        // Skip rendering if point is behind the center of globe (optional, but drawing all dots with varying transparency creates grid transparent look)
        const alpha = Math.max(0.05, (p.z + radius) / (radius * 2)) * 0.5

        ctx.beginPath()
        ctx.arc(screenX, screenY, Math.max(0.5, scale * 1.2), 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(secondaryColor, alpha)
        ctx.fill()
      })

      // Draw connections (meridians and parallels)
      ctx.strokeStyle = hexToRgba(primaryColor, 0.06)
      ctx.lineWidth = 0.5
      
      // Draw latitude circles
      for (let i = 1; i < latCount; i++) {
        ctx.beginPath()
        for (let j = 0; j < lonCount; j++) {
          const idx = i * lonCount + j
          const p = projectedDots[idx]
          const distance = radius * 2
          const scale = distance / (distance + p.z)
          const screenX = cx + p.x * scale
          const screenY = cy + p.y * scale

          if (j === 0) {
            ctx.moveTo(screenX, screenY)
          } else {
            ctx.lineTo(screenX, screenY)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }

      // Draw hubs (glowing talent source indicators)
      hubs.forEach((hub) => {
        // Compute 3D coordinate of the hub
        const latRad = hub.lat
        const lonRad = hub.lon + currentRotationY
        
        let hX = Math.cos(latRad) * Math.cos(lonRad) * radius
        let hY = Math.sin(latRad) * radius
        let hZ = Math.cos(latRad) * Math.sin(lonRad) * radius

        let p = { x: hX, y: hY, z: hZ }
        p = rotateX(p, currentRotationX)

        const distance = radius * 2
        const scale = distance / (distance + p.z)
        const screenX = cx + p.x * scale
        const screenY = cy + p.y * scale

        // Only draw hub if it is on the facing side (z > -10)
        if (p.z > -radius * 0.2) {
          const pulse = (Math.sin(Date.now() * 0.005) + 1.2) * 4

          // Inner solid dot
          ctx.beginPath()
          ctx.arc(screenX, screenY, scale * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = getThemeColor(hub.colorVar, hub.defaultColor)
          ctx.shadowBlur = 10
          ctx.shadowColor = getThemeColor(hub.colorVar, hub.defaultColor)
          ctx.fill()
          ctx.shadowBlur = 0 // reset shadow

          // Outer pulsing ring
          ctx.beginPath()
          ctx.arc(screenX, screenY, scale * (3.5 + pulse), 0, Math.PI * 2)
          ctx.strokeStyle = getThemeColor(hub.colorVar, hub.defaultColor)
          ctx.lineWidth = 1
          ctx.stroke()

          // Text label
          ctx.font = '9px Outfit, sans-serif'
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fillText(hub.name, screenX + 10, screenY + 3)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="max-w-full max-h-full" />
    </div>
  )
}
