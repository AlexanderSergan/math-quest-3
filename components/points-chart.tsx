import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartGrid,
  ChartLine,
  ChartArea,
  ChartLinearScale,
  ChartTimeScale,
  ChartCrosshair,
} from "@/components/ui/chart"

interface PointsChartProps {
  data: {
    date: string
    points: number
  }[]
  title?: string
}

export function PointsChart({ data, title = "Points History" }: PointsChartProps) {
  // Format data for the chart
  const chartData = data.map((item) => ({
    x: new Date(item.date).getTime(),
    y: item.points,
  }))

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ChartContainer data={chartData} xScale={{ type: "time" }} yScale={{ type: "linear", min: 0 }}>
            <ChartGrid vertical horizontal />
            <ChartArea data={chartData} fill="url(#gradient)" opacity={0.2} />
            <ChartLine data={chartData} strokeWidth={2} stroke="#3b82f6" />
            <ChartTimeScale />
            <ChartLinearScale />
            <ChartCrosshair>
              <ChartTooltip>
                <ChartTooltipContent className="bg-white p-2 rounded shadow-md border border-gray-200">
                  {({ value }) => (
                    <div className="text-sm">
                      <div className="font-medium">{new Date(value.x).toLocaleDateString()}</div>
                      <div className="text-blue-600">{value.y} points</div>
                    </div>
                  )}
                </ChartTooltipContent>
              </ChartTooltip>
            </ChartCrosshair>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

