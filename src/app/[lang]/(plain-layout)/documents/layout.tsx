import type { LocaleType } from "@/types"
import type { ReactNode } from "react"

import { DocumentNavigation } from "./_components/document-navigation"

export default async function DocumentsLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  const _params = await props.params

  return (
    <div className="min-h-screen bg-muted/40" dir="rtl">
      <DocumentNavigation />
      <main className="container py-8">
        <div className="max-w-3xl mx-auto">{props.children}</div>
      </main>
    </div>
  )
}
