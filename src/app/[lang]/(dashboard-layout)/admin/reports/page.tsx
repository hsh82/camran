import type { Metadata } from "next"

import { ReportsTabs } from "./_components/reports-tabs"

export const metadata: Metadata = {
  title: "Reports",
}

export default function AdminReportsPage() {
  return (
    <section className="container grid gap-4 p-4">
      <ReportsTabs />
    </section>
  )
}
