export const documents = [
  {
    slug: "idea",
    title: "معرفی ایده",
    description: "خلاصه اولیه ایده و مسئله‌ای که پروژه می‌خواهد حل کند.",
  },
  {
    slug: "idea-maturity",
    title: "بلوغ ایده",
    description: "مراحل تکامل ایده از خام تا قابل اجرا.",
  },
  {
    slug: "value-analysis",
    title: "تحلیل ارزش‌آفرینی",
    description: "ارزشی که پلتفرم برای مشتریان و فروشندگان ایجاد می‌کند.",
  },
  {
    slug: "business-model",
    title: "مدل کسب‌وکار",
    description: "چگونگی درآمدزایی و هزینه‌های کلان.",
  },
  {
    slug: "market-analysis",
    title: "تحلیل بازار",
    description: "بررسی بازار هدف، اندازه و روندها.",
  },
  {
    slug: "industry-analysis",
    title: "تحلیل صنعت",
    description: "وضعیت کلی صنعت فینتک و وفاداری مشتری.",
  },
  {
    slug: "marketing-plan",
    title: "برنامه بازاریابی",
    description: "راهبردهای ورود به بازار و جذب کاربر.",
  },
  {
    slug: "revenue-model",
    title: "مدل درآمدی",
    description: "جریان‌های درآمد و ساختار قیمت‌گذاری.",
  },
  {
    slug: "value-chain",
    title: "تحلیل واسطه‌گری",
    description: "مراحل ارزش‌افزونه در زنجیره فرآیند.",
  },
  {
    slug: "demo",
    title: "دموی محصول",
    description: "راهنمای استفاده از نسخه نمایشی پلتفرم.",
  },
  {
    slug: "roadmap",
    title: "نقشه راه",
    description: "برنامه توسعه آینده و ویژگی‌های برنامه‌ریزی شده.",
  },
]

export function getDocumentBySlug(slug: string) {
  return documents.find((doc) => doc.slug === slug)
}

export function getAdjacentDocuments(slug: string) {
  const index = documents.findIndex((doc) => doc.slug === slug)

  if (index === -1) {
    return {
      prev: null,
      next: null,
    }
  }

  return {
    prev: index > 0 ? documents[index - 1] : null,
    next: index < documents.length - 1 ? documents[index + 1] : null,
  }
}
