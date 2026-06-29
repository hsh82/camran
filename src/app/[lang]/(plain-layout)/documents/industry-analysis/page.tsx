import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="industry-analysis"
      title="تحلیل صنعت و رقبا"
      description="بررسی صنعت، روندهای بازار، رقبا، جایگاه رقابتی و مزیت‌های بازار وفاداری."
    >
      <DocumentSection
        title="معرفی صنعت"
        description="پروژه در چه صنعتی فعالیت می‌کند؟"
      >
        <p className="leading-8">
          بازار وفاداری در تقاطع چند صنعت مختلف قرار می‌گیرد؛ تجارت الکترونیکی،
          فناوری مالی (FinTech)، باشگاه مشتریان (Loyalty Program) و بازاریابی
          دیجیتال. این پلتفرم محصول یا خدمت مستقلی تولید نمی‌کند، بلکه زیرساختی
          فراهم می‌کند که فروشگاه‌ها بتوانند مشتریان خود را حفظ کرده و از طریق
          یک شبکه مشترک، ارزش بیشتری برای کاربران ایجاد کنند.
        </p>

        <p className="leading-8 mt-4">
          طی سال‌های اخیر، با رشد فروشگاه‌های اینترنتی و افزایش رقابت، هزینه جذب
          مشتری به شکل قابل توجهی افزایش یافته است. به همین دلیل بسیاری از
          کسب‌وکارها به جای تمرکز بر جذب مشتری جدید، به سمت ایجاد باشگاه مشتریان
          و افزایش نرخ بازگشت مشتری حرکت کرده‌اند. بازار وفاداری دقیقاً با هدف
          پاسخ به همین نیاز طراحی شده است.
        </p>

        <InfoBox type="info" title="حوزه فعالیت">
          تجارت الکترونیکی + باشگاه مشتریان + کیف پول دیجیتال + شبکه کش‌بک
          چندفروشگاهی
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="روندهای مهم بازار"
        description="چه تغییراتی در بازار مشاهده می‌شود؟"
      >
        <p className="leading-8">
          بررسی روندهای بازار نشان می‌دهد که رفتار مشتریان و فروشگاه‌ها در
          سال‌های اخیر به سمت استفاده از سیستم‌های وفاداری دیجیتال حرکت کرده
          است. مهم‌ترین روندهای این حوزه عبارت‌اند از:
        </p>

        <ul className="list-disc list-inside mt-5 space-y-3 leading-8">
          <li>افزایش استفاده از کیف پول‌های دیجیتال</li>
          <li>رشد خرید اینترنتی و پرداخت آنلاین</li>
          <li>افزایش هزینه جذب مشتری برای فروشگاه‌ها</li>
          <li>تمرکز کسب‌وکارها بر حفظ مشتری به جای جذب مشتری جدید</li>
          <li>گسترش برنامه‌های کش‌بک و باشگاه مشتریان</li>
          <li>استفاده از تحلیل داده برای شخصی‌سازی پیشنهادها</li>
        </ul>

        <QuoteBox author="روند اصلی بازار">
          آینده رقابت فروشگاه‌ها تنها بر سر قیمت نیست؛ بلکه بر سر ایجاد تجربه
          خرید بهتر و حفظ مشتریان خواهد بود.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection
        title="رقبای مستقیم"
        description="کسب‌وکارهایی که خدمات مشابه ارائه می‌کنند"
      >
        <p className="leading-8">
          رقبای مستقیم، سامانه‌هایی هستند که نوعی کش‌بک، کیف پول یا باشگاه
          مشتریان ارائه می‌کنند. هرچند اغلب آن‌ها این خدمات را فقط در اکوسیستم
          خود ارائه می‌دهند و امکان استفاده از اعتبار در سایر فروشگاه‌ها را
          فراهم نمی‌کنند.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>دیجی‌پی</li>
          <li>اسنپ‌پی و اسنپ‌کلاب</li>
          <li>باشگاه مشتریان فروشگاه‌های زنجیره‌ای</li>
          <li>سامانه‌های اختصاصی وفاداری سازمانی</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="رقبای غیرمستقیم"
        description="راهکارهایی که همان مسئله را به شکل دیگری حل می‌کنند"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>کدهای تخفیف مناسبتی</li>
          <li>کمپین‌های تبلیغاتی فروشگاه‌ها</li>
          <li>کارت‌های هدیه</li>
          <li>کارت‌های امتیازی سنتی</li>
          <li>تخفیف مستقیم روی محصولات</li>
        </ul>

        <p className="leading-8 mt-5">
          اگرچه این روش‌ها باعث افزایش فروش کوتاه‌مدت می‌شوند، اما معمولاً
          وفاداری بلندمدت ایجاد نمی‌کنند و پس از پایان کمپین، مشتری نیز از بین
          می‌رود.
        </p>
      </DocumentSection>

      <DocumentSection
        title="جایگزین‌های سنتی"
        description="قبل از این ایده چه راهکارهایی وجود داشت؟"
      >
        <p className="leading-8">
          پیش از شکل‌گیری چنین شبکه‌ای، فروشگاه‌ها برای حفظ مشتری از روش‌های
          سنتی مانند تخفیف مستقیم، کارت‌های پانچ، کارت عضویت، کارت هدیه یا
          امتیازدهی داخلی استفاده می‌کردند. این روش‌ها معمولاً محدود به همان
          فروشگاه بوده و امکان انتقال ارزش بین کسب‌وکارهای مختلف را فراهم
          نمی‌کنند.
        </p>
      </DocumentSection>

      <DocumentSection
        title="مقایسه رقبا"
        description="جایگاه بازار وفاداری نسبت به سایر گزینه‌ها"
      >
        <div className="overflow-x-auto">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">رقیب</th>
                <th className="border p-3 text-right">نوع خدمت</th>
                <th className="border p-3 text-right">مشتری هدف</th>
                <th className="border p-3 text-right">مدل درآمدی</th>
                <th className="border p-3 text-right">نقاط قوت</th>
                <th className="border p-3 text-right">نقاط ضعف</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">دیجی‌پی</td>
                <td className="border p-3">کش‌بک و پرداخت</td>
                <td className="border p-3">کاربران دیجی‌کالا</td>
                <td className="border p-3">کارمزد و خدمات مالی</td>
                <td className="border p-3">جامعه کاربری بزرگ</td>
                <td className="border p-3">
                  کش‌بک محدود به اکوسیستم دیجی‌کالا
                </td>
              </tr>

              <tr>
                <td className="border p-3">اسنپ‌کلاب</td>
                <td className="border p-3">باشگاه مشتریان</td>
                <td className="border p-3">کاربران اسنپ</td>
                <td className="border p-3">کارمزد خدمات</td>
                <td className="border p-3">یکپارچگی با سوپراپ</td>
                <td className="border p-3">محدود بودن به خدمات اسنپ</td>
              </tr>

              <tr>
                <td className="border p-3">باشگاه مشتریان اختصاصی</td>
                <td className="border p-3">وفادارسازی داخلی</td>
                <td className="border p-3">مشتریان همان فروشگاه</td>
                <td className="border p-3">هزینه داخلی</td>
                <td className="border p-3">کنترل کامل فروشگاه</td>
                <td className="border p-3">نبود اثر شبکه‌ای</td>
              </tr>

              <tr className="bg-primary/5 font-medium">
                <td className="border p-3">بازار وفاداری</td>
                <td className="border p-3">شبکه کش‌بک مشترک</td>
                <td className="border p-3">فروشگاه‌ها و مشتریان مستقل</td>
                <td className="border p-3">کمیسیون و اشتراک</td>
                <td className="border p-3">
                  قابلیت استفاده کش‌بک بین فروشگاه‌ها، اثر شبکه‌ای، افزایش
                  وفاداری
                </td>
                <td className="border p-3">نیاز به جذب تعداد کافی فروشگاه</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection
        title="مزیت رقابتی"
        description="چه چیزی این ایده را متمایز می‌کند؟"
      >
        <p className="leading-8">
          مهم‌ترین مزیت رقابتی بازار وفاداری، ایجاد یک شبکه مشترک بین فروشگاه‌ها
          است. برخلاف اغلب باشگاه‌های مشتریان که تنها در یک فروشگاه کاربرد
          دارند، اعتبار کش‌بک در این سامانه می‌تواند بین فروشگاه‌های عضو جابه‌جا
          شود و همین موضوع ارزش واقعی کش‌بک را برای مشتری افزایش می‌دهد.
        </p>

        <InfoBox type="tip" title="مزیت‌های کلیدی">
          <ul className="list-disc list-inside space-y-2">
            <li>اثر شبکه‌ای بین فروشگاه‌ها</li>
            <li>افزایش نرخ بازگشت مشتری</li>
            <li>کاهش هزینه جذب مشتری</li>
            <li>عدم وابستگی به یک برند خاص</li>
            <li>قابلیت توسعه به شهرها و صنایع مختلف</li>
            <li>امکان تحلیل رفتار خرید مشتریان</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="تهدیدهای اصلی بازار"
        description="چه عواملی می‌توانند موفقیت پروژه را تهدید کنند؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>ورود شرکت‌های بزرگ با سرمایه بیشتر</li>
          <li>کپی‌برداری از مدل کسب‌وکار توسط رقبا</li>
          <li>تغییر قوانین پرداخت یا کیف پول دیجیتال</li>
          <li>عدم استقبال اولیه فروشگاه‌ها</li>
          <li>ایجاد اثر شبکه‌ای با سرعت پایین</li>
          <li>بی‌اعتمادی کاربران نسبت به پلتفرم‌های جدید</li>
        </ul>

        <InfoBox type="warning" title="مهم‌ترین چالش">
          بزرگ‌ترین چالش این کسب‌وکار رسیدن به «اثر شبکه‌ای» است؛ زیرا تا زمانی
          که تعداد کافی فروشگاه عضو نشوند، ارزش پیشنهادی برای مشتری نیز به طور
          کامل ایجاد نخواهد شد.
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          بازار وفاداری در صنعتی فعالیت می‌کند که رشد آن با توسعه تجارت
          الکترونیکی و خدمات مالی دیجیتال همسو است. اگرچه رقبای قدرتمندی در حوزه
          کش‌بک و باشگاه مشتریان وجود دارند، اما اغلب آن‌ها خدمات خود را در یک
          اکوسیستم محدود ارائه می‌کنند. مزیت اصلی این پروژه ایجاد یک شبکه
          وفاداری مشترک میان فروشگاه‌های مستقل است که می‌تواند هم‌زمان برای
          مشتریان، فروشندگان و کل بازار ارزش ایجاد کند. در صورت دستیابی به مقیاس
          مناسب، اثر شبکه‌ای به مهم‌ترین مزیت رقابتی و مانع ورود رقبا تبدیل
          خواهد شد.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
