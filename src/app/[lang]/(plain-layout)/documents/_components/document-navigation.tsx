"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import { documents } from "../_data/documents"

import { cn } from "@/lib/utils"

import { Separator } from "@/components/ui/separator"

export function DocumentNavigation() {
  const pathname = usePathname()
  const params = useParams()
  const lang = params.lang as string

  const currentSlug = pathname.split("/documents/")[1] || ""

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <Link
              href={`/${lang}`}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
                currentSlug
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              خانه
            </Link>
            <Link
              href={`/${lang}/documents/`}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
                !currentSlug
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              مستندات
            </Link>
            <Separator orientation="vertical" className="h-4 mx-1" />
            {documents.map((doc) => {
              const href = `/${lang}/documents/${doc.slug}`
              const isActive = currentSlug === doc.slug

              return (
                <Link
                  key={doc.slug}
                  href={href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {doc.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
