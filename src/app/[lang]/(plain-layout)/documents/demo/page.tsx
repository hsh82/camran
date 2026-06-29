import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="demo"
      title="دموی محصول"
      description="معرفی نسخه نمایشی سامانه، قابلیت‌های پیاده‌سازی‌شده و سناریوی استفاده از سیستم."
    >
      <DocumentSection
        title="هدف از نسخه نمایشی"
        description="این دمو چه چیزی را نشان می‌دهد؟"
      >
        <p className="leading-8">
          هدف این نسخه، پیاده‌سازی کامل یک سامانه تجاری نیست؛ بلکه نمایش منطق
          اصلی ایده «بازار وفاداری» است. در این نسخه، کاربر می‌تواند فرآیند
          عضویت، مشاهده فروشگاه‌ها، انجام یک خرید نمونه، دریافت کش‌بک و استفاده
          از اعتبار خود را در محیطی شبیه‌سازی‌شده مشاهده کند.
        </p>

        <p className="leading-8 mt-4">
          تلاش شده است مهم‌ترین بخش‌های تجربه کاربری و فرآیندهای اصلی سیستم به
          صورت قابل تعامل پیاده‌سازی شوند تا نحوه عملکرد ایده برای کاربران،
          سرمایه‌گذاران و ارزیابان پروژه به‌خوبی قابل درک باشد.
        </p>

        <QuoteBox author="هدف دمو">
          نمایش منطق کسب‌وکار مهم‌تر از پیاده‌سازی کامل تمامی امکانات است.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection
        title="امکانات پیاده‌سازی‌شده"
        description="ویژگی‌های موجود در نسخه نمایشی"
      >
        <p className="leading-8">
          نسخه فعلی بخش قابل توجهی از فرآیندهای اصلی سامانه را نمایش می‌دهد و
          تعامل واقعی میان مشتری، فروشنده و سیستم کش‌بک را شبیه‌سازی می‌کند.
        </p>

        <InfoBox type="info" title="قابلیت‌های دمو">
          <ul className="list-disc list-inside space-y-2">
            <li>ثبت‌نام و ورود کاربران</li>
            <li>ثبت و مدیریت فروشگاه‌ها</li>
            <li>نمایش محصولات فروشندگان</li>
            <li>سبد خرید و ثبت سفارش</li>
            <li>محاسبه خودکار کش‌بک</li>
            <li>کیف پول دیجیتال مشتری</li>
            <li>داشبورد مشتری</li>
            <li>داشبورد فروشنده</li>
            <li>نمایش تاریخچه تراکنش‌ها</li>
            <li>مدیریت کمپین‌های کش‌بک</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="سناریوی استفاده"
        description="کاربر چگونه با سیستم تعامل می‌کند؟"
      >
        <ol className="list-decimal list-inside space-y-3 leading-8 mt-4">
          <li>کاربر در سامانه ثبت‌نام می‌کند.</li>
          <li>وارد داشبورد شخصی خود می‌شود.</li>
          <li>یکی از فروشگاه‌های عضو را انتخاب می‌کند.</li>
          <li>محصول موردنظر را به سبد خرید اضافه می‌کند.</li>
          <li>سفارش خود را ثبت می‌کند.</li>
          <li>سامانه مبلغ کش‌بک را به صورت خودکار محاسبه می‌کند.</li>
          <li>اعتبار به کیف پول دیجیتال کاربر اضافه می‌شود.</li>
          <li>
            کاربر می‌تواند اعتبار دریافت‌شده را در خرید بعدی از همان فروشگاه یا
            سایر فروشگاه‌های عضو استفاده کند.
          </li>
        </ol>
      </DocumentSection>

      <DocumentSection
        title="بخش‌های اصلی رابط کاربری"
        description="صفحات مهم سیستم"
      >
        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">بخش</th>
                <th className="border p-3 text-right">کاربرد</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">صفحه اصلی</td>
                <td className="border p-3">معرفی پلتفرم و فروشگاه‌های عضو</td>
              </tr>

              <tr>
                <td className="border p-3">ثبت‌نام</td>
                <td className="border p-3">
                  ایجاد حساب کاربری مشتری یا فروشنده
                </td>
              </tr>

              <tr>
                <td className="border p-3">داشبورد مشتری</td>
                <td className="border p-3">مشاهده کیف پول، سفارش‌ها و کش‌بک</td>
              </tr>

              <tr>
                <td className="border p-3">داشبورد فروشنده</td>
                <td className="border p-3">
                  مدیریت محصولات، سفارش‌ها و کمپین‌ها
                </td>
              </tr>

              <tr>
                <td className="border p-3">سبد خرید</td>
                <td className="border p-3">ثبت سفارش و مشاهده کش‌بک دریافتی</td>
              </tr>

              <tr>
                <td className="border p-3">کیف پول</td>
                <td className="border p-3">مدیریت موجودی و سوابق تراکنش‌ها</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection title="تعامل واقعی کاربر" description="شرط اصلی دمو">
        <p className="leading-8">
          یکی از الزامات پروژه، امکان تعامل واقعی کاربر با سامانه است. در نسخه
          نمایشی، کاربر تنها مطالعه‌کننده صفحات نیست؛ بلکه می‌تواند اطلاعات وارد
          کند، فرآیند خرید را انجام دهد و نتیجه عملیات را مشاهده کند.
        </p>

        <InfoBox type="tip" title="نمونه تعاملات">
          <ul className="list-disc list-inside space-y-2">
            <li>ثبت اطلاعات در فرم ثبت‌نام</li>
            <li>انتخاب محصولات</li>
            <li>ثبت سفارش آزمایشی</li>
            <li>مشاهده مبلغ کش‌بک محاسبه‌شده</li>
            <li>مشاهده افزایش موجودی کیف پول</li>
            <li>بررسی داشبورد مشتری و فروشنده</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="فناوری‌های استفاده‌شده"
        description="زیرساخت توسعه نسخه نمایشی"
      >
        <p className="leading-8">
          برای توسعه نسخه نمایشی تلاش شده است از فناوری‌هایی استفاده شود که
          قابلیت توسعه به یک محصول واقعی را نیز داشته باشند. معماری سیستم به
          گونه‌ای طراحی شده که بتوان در آینده قابلیت‌های بیشتری به آن اضافه کرد.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>Next.js و React برای رابط کاربری</li>
          <li>TypeScript برای توسعه Front-end</li>
          <li>Tailwind CSS برای طراحی صفحات</li>
          <li>WordPress + WooCommerce + Dokan برای منطق فروشگاه‌ها</li>
          <li>کیف پول دیجیتال و سیستم کش‌بک سفارشی</li>
          <li>REST API برای ارتباط بخش‌های مختلف سامانه</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="محدودیت‌های نسخه نمایشی"
        description="قابلیت‌هایی که در آینده توسعه خواهند یافت"
      >
        <p className="leading-8">
          این پروژه با هدف نمایش مفهوم و منطق کسب‌وکار توسعه یافته است؛ بنابراین
          برخی امکانات تجاری در نسخه فعلی به صورت شبیه‌سازی‌شده ارائه شده‌اند و
          در نسخه نهایی می‌توان آن‌ها را تکمیل کرد.
        </p>

        <InfoBox type="warning" title="موارد قابل توسعه">
          <ul className="list-disc list-inside space-y-2">
            <li>اتصال به درگاه پرداخت واقعی</li>
            <li>احراز هویت کامل کاربران (KYC)</li>
            <li>ارسال پیامک و اعلان‌های واقعی</li>
            <li>اپلیکیشن موبایل</li>
            <li>پنل مدیریتی پیشرفته</li>
            <li>تحلیل هوشمند رفتار مشتریان</li>
            <li>سیستم پیشنهاددهنده مبتنی بر هوش مصنوعی</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          نسخه نمایشی پروژه، منطق اصلی بازار وفاداری را به صورت قابل تعامل نمایش
          می‌دهد و نشان می‌دهد چگونه مشتری، فروشنده و سامانه کش‌بک در کنار
          یکدیگر عمل می‌کنند. هرچند این نسخه تمامی امکانات یک محصول تجاری را در
          اختیار ندارد، اما ساختار آن به گونه‌ای طراحی شده است که بتواند مبنای
          توسعه یک سامانه عملیاتی در مقیاس واقعی قرار گیرد.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
