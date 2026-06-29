"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { getAdjacentDocuments } from "../_data/documents"

import { Card, CardContent } from "@/components/ui/card"

export function DocumentFooterNavigation({
  currentSlug,
}: {
  currentSlug: string
}) {
  const params = useParams()
  const lang = params.lang as string
  const { prev, next } = getAdjacentDocuments(currentSlug)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {prev ? (
        <Link href={`/${lang}/documents/${prev.slug}`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">قبلی</p>
                <p className="font-medium leading-none">{prev.title}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/${lang}/documents/${next.slug}`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4 flex-row-reverse text-right">
              <ArrowLeft className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">بعدی</p>
                <p className="font-medium leading-none">{next.title}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
