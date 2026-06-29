"use client"

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Card, CardContent } from "@/components/ui/card"

export function QuoteBox({
  author,
  children,
  className,
}: {
  author?: string
  children: ReactNode
  className?: string
}) {
  return (
    <Card className={cn("border-r-4 border-r-primary", className)}>
      <CardContent className="p-6">
        <blockquote className="text-lg leading-relaxed text-muted-foreground">
          {children}
        </blockquote>
        {author && (
          <cite className="block mt-4 text-sm font-medium not-italic">
            — {author}
          </cite>
        )}
      </CardContent>
    </Card>
  )
}
