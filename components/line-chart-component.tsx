"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, registerables } from "chart.js"

// Register Chart.js components
Chart.register(...registerables)

interface LineChartProps {
  data: number[]
  labels: string[]
  title: string
  showPoints?: boolean
  smoothCurve?: boolean
}

export function LineChartComponent({ data, labels, title, showPoints = true, smoothCurve = false }: LineChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    try {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d")
      if (!ctx) {
        setError("Could not get canvas context")
        return
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data,
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              borderColor: "rgba(34, 197, 94, 1)",
              borderWidth: 2,
              pointRadius: showPoints ? 4 : 0,
              pointBackgroundColor: "rgba(34, 197, 94, 1)",
              tension: smoothCurve ? 0.4 : 0,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: title,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })

      setError(null)
    } catch (err) {
      console.error("Error creating chart:", err)
      setError("Failed to create chart. Please try refreshing the page.")
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, labels, title, showPoints, smoothCurve])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg p-4">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}

