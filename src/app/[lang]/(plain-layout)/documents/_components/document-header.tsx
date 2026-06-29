"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Home } from "lucide-react"

export function DocumentHeader({
  title,
  description,
  breadcrumb,
}: {
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}) {
  const params = useParams()
  const lang = params.lang as string

  return (
    <div className="container py-8 space-y-4">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-1 hover:text-foreground"
        >
          <Home className="h-3 w-3" />
          صفحه اصلی
        </Link>
        <ChevronLeft className="h-3 w-3" />
        <Link href={`/${lang}/documents`} className="hover:text-foreground">
          مستندات
        </Link>
        {breadcrumb && breadcrumb.length > 0 && (
          <>
            <ChevronLeft className="h-3 w-3" />
            {breadcrumb.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </>
        )}
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
