"use client"

import * as React from "react"
import { ChartContainer as RechartsChartContainer } from "recharts"

import { cn } from "@/lib/utils"

const ChartRoot = React.forwardRef<
  React.ElementRef<typeof RechartsChartContainer>,
  React.ComponentPropsWithoutRef<typeof RechartsChartContainer>
>(({ className, children, ...props }, ref) => (
  <RechartsChartContainer ref={ref} className={cn("", className)} {...props}>
    {children}
  </RechartsChartContainer>
))
ChartRoot.displayName = "ChartRoot"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config?: Record<string, { label: string; color?: string }>
  }
>(({ className, children, config, ...props }, ref) => {
  const colorVars = React.useMemo(() => {
    if (!config) return {}
    return Object.entries(config).reduce(
      (vars, [key, value]) => {
        if (value.color) {
          vars[`--color-${key}`] = value.color
        }
        return vars
      },
      {} as Record<string, string>,
    )
  }, [config])

  return (
    <div ref={ref} className={cn("w-full h-full", className)} style={colorVars} {...props}>
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("border bg-background p-2 shadow-sm rounded-lg outline-none", className)} {...props} />
)
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = ({
  className,
  payload,
  active,
  label,
  formatter,
  labelFormatter,
  hideLabel = false,
  ...props
}: React.ComponentProps<"div"> & {
  payload?: Array<{ name: string; value: number; color: string }>
  active?: boolean
  label?: string
  formatter?: (value: number, name: string) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  hideLabel?: boolean
}) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      className={cn("flex flex-col gap-0.5 border bg-background p-2 shadow-sm rounded-lg outline-none", className)}
      {...props}
    >
      {!hideLabel && (
        <p className="text-xs text-muted-foreground">{labelFormatter ? labelFormatter(label as string) : label}</p>
      )}
      <div className="flex flex-col gap-px">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-1 text-sm">
            <div className="h-1 w-1 rounded-full" style={{ background: item.color }} />
            <span className="font-medium">{item.name}:</span>
            <span>{formatter ? formatter(item.value, item.name) : item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
ChartTooltipContent.displayName = "ChartTooltipContent"

// Add the missing exports
const ChartGrid = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("grid", className)} {...props} />
)
ChartGrid.displayName = "ChartGrid"

const ChartLine = ({ className, ...props }: React.ComponentProps<"path">) => (
  <path className={cn("", className)} {...props} />
)
ChartLine.displayName = "ChartLine"

const ChartArea = ({ className, ...props }: React.ComponentProps<"path">) => (
  <path className={cn("", className)} {...props} />
)
ChartArea.displayName = "ChartArea"

const ChartLinearScale = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("", className)} {...props} />
)
ChartLinearScale.displayName = "ChartLinearScale"

const ChartTimeScale = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("", className)} {...props} />
)
ChartTimeScale.displayName = "ChartTimeScale"

const ChartCrosshair = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("", className)} {...props} />
)
ChartCrosshair.displayName = "ChartCrosshair"

export {
  ChartRoot,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartGrid,
  ChartLine,
  ChartArea,
  ChartLinearScale,
  ChartTimeScale,
  ChartCrosshair,
}

