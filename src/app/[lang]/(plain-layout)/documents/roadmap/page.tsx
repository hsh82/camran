import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="roadmap"
      title="نقشه راه توسعه کسب‌وکار"
      description="برنامه توسعه محصول از نسخه اولیه تا تبدیل شدن به یک پلتفرم کش‌بک در مقیاس ملی."
    >
      <DocumentSection title="چشم‌انداز توسعه" description="هدف بلندمدت پروژه">
        <p className="leading-8">
          بازار وفاداری با هدف ایجاد یک شبکه مشترک کش‌بک میان فروشگاه‌های مستقل
          شکل گرفته است. چشم‌انداز این پروژه، تبدیل شدن به زیرساخت وفاداری
          فروشگاه‌های کوچک و متوسط کشور است؛ به گونه‌ای که مشتری بتواند با یک
          کیف پول واحد، اعتبار خود را در هزاران فروشگاه مختلف استفاده کند.
        </p>

        <QuoteBox author="چشم‌انداز پروژه">
          ایجاد بزرگ‌ترین شبکه وفاداری و کش‌بک بین‌فروشگاهی برای کسب‌وکارهای
          مستقل ایران.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection title="مرحله اول" description="توسعه نمونه اولیه (MVP)">
        <p className="leading-8">
          نخستین مرحله توسعه بر اعتبارسنجی ایده و بررسی نیاز واقعی بازار تمرکز
          دارد. در این مرحله تنها قابلیت‌های اصلی موردنیاز برای نمایش منطق سیستم
          پیاده‌سازی می‌شوند.
        </p>

        <InfoBox type="info" title="اهداف مرحله اول">
          <ul className="list-disc list-inside space-y-2">
            <li>طراحی رابط کاربری اولیه</li>
            <li>ثبت‌نام کاربران و فروشندگان</li>
            <li>مدیریت محصولات فروشگاه‌ها</li>
            <li>پیاده‌سازی کیف پول دیجیتال</li>
            <li>محاسبه و ثبت کش‌بک</li>
            <li>داشبورد اولیه مشتری و فروشنده</li>
            <li>انجام تست اولیه با تعداد محدودی فروشگاه</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="مرحله دوم" description="آغاز بهره‌برداری واقعی">
        <p className="leading-8">
          پس از اعتبارسنجی نسخه اولیه، سامانه وارد فاز عملیاتی می‌شود و تعدادی
          فروشگاه واقعی به شبکه اضافه خواهند شد. تمرکز این مرحله بر افزایش کیفیت
          خدمات و ایجاد اعتماد میان اعضای شبکه است.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>اتصال به درگاه پرداخت واقعی</li>
          <li>احراز هویت کاربران و فروشندگان</li>
          <li>پیاده‌سازی سیستم تسویه مالی</li>
          <li>مدیریت کمپین‌های کش‌بک</li>
          <li>راه‌اندازی پنل مدیریت</li>
          <li>بهبود امنیت و ثبت گزارش‌های مالی</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="مرحله سوم" description="گسترش شبکه فروشگاه‌ها">
        <p className="leading-8">
          در این مرحله تمرکز اصلی بر توسعه شبکه و افزایش اثر شبکه‌ای خواهد بود.
          هرچه تعداد فروشگاه‌های عضو بیشتر شود، ارزش پلتفرم برای تمامی کاربران
          نیز افزایش خواهد یافت.
        </p>

        <InfoBox type="tip" title="برنامه توسعه">
          <ul className="list-disc list-inside space-y-2">
            <li>همکاری با صدها فروشگاه در چند شهر</li>
            <li>راه‌اندازی سیستم معرفی کاربران (Referral)</li>
            <li>اپلیکیشن اندروید و iOS</li>
            <li>باشگاه مشتریان چندسطحی</li>
            <li>کمپین‌های مناسبتی و منطقه‌ای</li>
            <li>یکپارچه‌سازی با سیستم‌های فروش فروشگاه‌ها</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="مرحله چهارم"
        description="تحلیل داده و هوشمندسازی"
      >
        <p className="leading-8">
          پس از شکل‌گیری شبکه بزرگ کاربران، داده‌های تراکنش‌ها به یکی از
          ارزشمندترین دارایی‌های پلتفرم تبدیل می‌شوند. در این مرحله از تحلیل
          داده برای افزایش فروش و بهبود تجربه کاربران استفاده خواهد شد.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>تحلیل رفتار مشتریان</li>
          <li>پیشنهادهای شخصی‌سازی‌شده</li>
          <li>کمپین‌های هوشمند کش‌بک</li>
          <li>داشبوردهای تحلیلی پیشرفته</li>
          <li>پیش‌بینی رفتار خرید مشتریان</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="مرحله پنجم" description="توسعه در مقیاس ملی">
        <p className="leading-8">
          در بلندمدت، بازار وفاداری می‌تواند به یک زیرساخت ملی برای مدیریت
          برنامه‌های وفاداری فروشگاه‌ها تبدیل شود و خدمات خود را در صنایع مختلف
          گسترش دهد.
        </p>

        <InfoBox type="info" title="اهداف بلندمدت">
          <ul className="list-disc list-inside space-y-2">
            <li>چند هزار فروشگاه عضو</li>
            <li>میلیون‌ها کاربر فعال</li>
            <li>پوشش فروشگاه‌های حضوری و آنلاین</li>
            <li>همکاری با بانک‌ها و شرکت‌های پرداخت</li>
            <li>ارائه API برای سایر کسب‌وکارها</li>
            <li>گسترش خدمات به حوزه‌های گردشگری، سلامت و آموزش</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="ریسک‌ها و چالش‌های توسعه"
        description="مهم‌ترین موانع مسیر رشد"
      >
        <p className="leading-8">
          توسعه چنین پلتفرمی علاوه بر فرصت‌های فراوان، با چالش‌هایی نیز همراه
          است که باید از همان ابتدا برای آن‌ها برنامه‌ریزی شود.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>جذب فروشگاه‌های کافی برای ایجاد اثر شبکه‌ای</li>
          <li>رقابت با پلتفرم‌های بزرگ بازار</li>
          <li>تغییر قوانین حوزه پرداخت و کیف پول دیجیتال</li>
          <li>مدیریت امنیت اطلاعات و جلوگیری از تقلب</li>
          <li>تأمین سرمایه برای توسعه زیرساخت‌ها</li>
          <li>فرهنگ‌سازی برای استفاده از کش‌بک بین‌فروشگاهی</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="شاخص‌های موفقیت"
        description="معیارهای ارزیابی پیشرفت پروژه"
      >
        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">شاخص</th>
                <th className="border p-3 text-right">هدف</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">تعداد فروشگاه‌های عضو</td>
                <td className="border p-3">رشد مستمر شبکه</td>
              </tr>

              <tr>
                <td className="border p-3">کاربران فعال ماهانه</td>
                <td className="border p-3">افزایش نرخ استفاده</td>
              </tr>

              <tr>
                <td className="border p-3">حجم تراکنش‌ها</td>
                <td className="border p-3">رشد ماهانه</td>
              </tr>

              <tr>
                <td className="border p-3">نرخ بازگشت مشتری</td>
                <td className="border p-3">افزایش وفاداری کاربران</td>
              </tr>

              <tr>
                <td className="border p-3">رضایت فروشگاه‌ها</td>
                <td className="border p-3">تمدید همکاری و کاهش ریزش</td>
              </tr>

              <tr>
                <td className="border p-3">درآمد ماهانه</td>
                <td className="border p-3">رسیدن به سودآوری پایدار</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          نقشه راه بازار وفاداری بر پایه توسعه تدریجی، اعتبارسنجی مداوم و ایجاد
          اثر شبکه‌ای طراحی شده است. پروژه از یک نمونه اولیه دانشگاهی آغاز
          می‌شود و در صورت موفقیت، می‌تواند با جذب فروشگاه‌های بیشتر، توسعه
          زیرساخت‌های فنی، ارائه خدمات هوشمند و همکاری با بازیگران بزرگ صنعت، به
          یک پلتفرم جامع وفاداری و کش‌بک در سطح کشور تبدیل شود. تمرکز بر ایجاد
          ارزش برای هر دو گروه مشتریان و فروشگاه‌ها، مهم‌ترین عامل موفقیت این
          مسیر خواهد بود.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
