import type { ReactNode } from "react"

import { DocumentFooterNavigation } from "./document-footer-nav"
import { DocumentHeader } from "./document-header"

interface Props {
  title: string
  description: string
  currentSlug: string
  children: ReactNode
}

export function DocumentTemplate({
  title,
  description,
  currentSlug,
  children,
}: Props) {
  return (
    <>
      <DocumentHeader
        title={title}
        description={description}
        breadcrumb={[{ label: title }]}
      />

      <div className="container py-10">
        <div className="mx-auto max-w-5xl space-y-10">{children}</div>
      </div>

      <DocumentFooterNavigation currentSlug={currentSlug} />
    </>
  )
}
