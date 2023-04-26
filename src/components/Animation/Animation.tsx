

import React, { useState, useEffect } from 'react'

type ShapeType = 'red-circle' | 'yellow-triangle' | 'blue-rectangle'

interface Shape {
  type: ShapeType
  x: number
  y: number
  speed: number
  rotation: number
  color: string
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

function Shape({ type, x, y, speed, rotation, color }: Shape): JSX.Element {
  let shapeStyle: React.CSSProperties
  if (type === 'red-circle') {
    shapeStyle = {
      width: 20,
      height: 20,
      border: `2px solid ${color}`,
      borderRadius:'50%',
      transform: `rotate(${rotation}deg)`,
    }
  } else if (type === 'yellow-triangle') {
    shapeStyle = {
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '20px solid yellow',
      transform: `rotate(${rotation}deg)`,
    }
  } else {
    shapeStyle = {
      width: 20,
      height: 20,
      border: `2px solid ${color}`,
      transform: `rotate(${rotation}deg)`,
    }
  }

  return (
    <div style={{ ...shapeStyle, position: 'absolute', top: y, left: x }} />
  )
}

function Animation(): JSX.Element {
  const [shapes, setShapes] = useState<any[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = [
      
        '#FF2E00',
        '#FFB400',
        '#05FF00',
        '#0047FF',
      ]
      const newShape = {
        type: ['red-circle', 'yellow-triangle', 'blue-rectangle'][
          getRandomInt(7)
        ],
        x: getRandomInt(window.innerWidth - 20),
        y: -10,
        speed: getRandomInt(4) + 1,
        rotation: getRandomInt(360),
        color: colors[getRandomInt(colors.length)],
      }
      setShapes((shapes) => [...shapes, newShape])
    }, 500)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const animationId = requestAnimationFrame(() => {
      setShapes((shapes) =>
        shapes
          .map((shape) => {
            return { ...shape, y: shape.y + shape.speed }
          })
          .filter((shape) => shape.y < window.innerHeight)
      )
    })

    return () => cancelAnimationFrame(animationId)
  }, [shapes])

  return (
    <div style={{ height: '0px', position: 'relative' }}>
      {shapes.map((shape, i) => (
        <Shape
          key={i}
          type={shape.type}
          x={shape.x}
          y={shape.y}
          speed={shape.speed}
          rotation={shape.rotation}
          color={shape.color}
        />
      ))}
    </div>
  )
}

export default Animation