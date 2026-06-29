"use client"

import { AlertCircle, Info, Lightbulb } from "lucide-react"

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Card, CardContent } from "@/components/ui/card"

const variants = {
  info: {
    icon: Info,
    className:
      "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20",
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertCircle,
    className:
      "border-yellow-200 bg-yellow-50/50 dark:border-yellow-900 dark:bg-yellow-950/20",
    iconClassName: "text-yellow-600 dark:text-yellow-400",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20",
    iconClassName: "text-green-600 dark:text-green-400",
  },
  alert: {
    icon: AlertCircle,
    className:
      "border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20",
    iconClassName: "text-red-600 dark:text-red-400",
  },
}

export function InfoBox({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "tip" | "alert"
  title?: string
  children: ReactNode
}) {
  const config = variants[type]
  const Icon = config.icon

  return (
    <Card className={cn("border", config.className)}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Icon
            className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconClassName)}
          />
          <div className="space-y-1">
            {title && <p className="font-semibold text-sm">{title}</p>}
            <div className="text-sm text-muted-foreground">{children}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
