import Link from "next/link"

import type { Metadata } from "next"

import { documents } from "./_data/documents"

import { Card } from "@/components/ui/card"
import { DocumentHeader } from "./_components/document-header"

export const metadata: Metadata = {
  title: "مستندات پروژه",
}

export default function DocumentsPage() {
  return (
    <>
      <DocumentHeader
        title="مستندات پروژه"
        description="شناسنامه کامل پروژه، تحلیل‌های کسب‌وکار، مدل درآمدی و جزئیات فنی."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <Link key={doc.slug} href={`/documents/${doc.slug}`}>
            <Card className="h-full p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{doc.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {doc.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
