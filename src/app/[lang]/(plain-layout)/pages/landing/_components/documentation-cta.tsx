"use client"

import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DocumentationCTA() {
  return (
    <section className="container">
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
        <CardContent className="p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium">
                <BookOpen className="ml-2 h-4 w-4" />
                مستندات پروژه
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                مستندات کامل پروژه
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                برای آشنایی با ایده، مدل کسب‌وکار، تحلیل بازار و جزئیات فنی
                پروژه مستندات کامل را مشاهده کنید.
              </p>
              <Link
                href="/documents"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                مشاهده مستندات
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <BookOpen className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
