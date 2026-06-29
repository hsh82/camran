import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="marketing-plan"
      title="طرح بازاریابی"
      description="استراتژی جذب مشتری، ایجاد اعتماد، توسعه شبکه فروشگاه‌ها و افزایش وفاداری کاربران."
    >
      <DocumentSection
        title="هدف بازاریابی اولیه"
        description="در شروع فعالیت به دنبال چه چیزی هستیم؟"
      >
        <p className="leading-8">
          مهم‌ترین هدف بازاریابی در مرحله آغازین، افزایش آگاهی نسبت به مفهوم
          «کش‌بک شبکه‌ای» و جذب اولین گروه از فروشگاه‌های عضو است. بدون حضور
          فروشگاه‌های کافی، ارزش اصلی پلتفرم برای مشتری ایجاد نخواهد شد؛
          بنابراین تمرکز اولیه بیشتر بر جذب کسب‌وکارها است و پس از ایجاد یک شبکه
          اولیه، جذب مشتریان نهایی با سرعت بیشتری انجام می‌شود.
        </p>

        <InfoBox type="info" title="هدف شش ماه نخست">
          جذب حداقل ۵۰ فروشگاه فعال، ثبت‌نام ۵٬۰۰۰ کاربر و ایجاد یک شبکه محلی که
          مشتری بتواند اعتبار کش‌بک خود را در چندین فروشگاه مختلف استفاده کند.
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="پیام اصلی بازاریابی"
        description="ارزش پیشنهادی که به مخاطب منتقل می‌شود"
      >
        <QuoteBox author="پیام برند">
          هر خرید فقط یک خرید نیست؛ اعتبار آن را در تمام فروشگاه‌های عضو دوباره
          خرج کنید.
        </QuoteBox>

        <p className="leading-8 mt-5">
          پیام اصلی پروژه بر این نکته تأکید دارد که کش‌بک تنها یک تخفیف لحظه‌ای
          نیست، بلکه اعتباری است که ارزش آن در کل شبکه حفظ می‌شود. برای
          فروشندگان نیز پیام اصلی کاهش هزینه جذب مشتری و افزایش نرخ بازگشت
          مشتریان است.
        </p>
      </DocumentSection>

      <DocumentSection
        title="کانال‌های جذب مشتری"
        description="چگونه اولین کاربران را جذب می‌کنیم؟"
      >
        <p className="leading-8">
          استراتژی جذب مشتری بر ترکیبی از بازاریابی دیجیتال، فروش مستقیم و
          همکاری با کسب‌وکارهای محلی استوار است.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-3 leading-8">
          <li>مذاکره مستقیم با فروشگاه‌های محلی</li>
          <li>همکاری با اتحادیه‌ها و انجمن‌های صنفی</li>
          <li>تبلیغات هدفمند در شبکه‌های اجتماعی</li>
          <li>کمپین‌های معرفی اولیه با کش‌بک بیشتر</li>
          <li>دعوت کاربران توسط فروشگاه‌های عضو</li>
          <li>همکاری با اینفلوئنسرهای محلی</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="استراتژی تولید محتوا"
        description="چه محتوایی تولید خواهد شد؟"
      >
        <p className="leading-8">
          یکی از چالش‌های پروژه، آشنا نبودن بسیاری از کاربران با مفهوم کش‌بک
          شبکه‌ای است. بنابراین بخش مهمی از فعالیت‌های بازاریابی بر آموزش و
          تولید محتوای کاربردی تمرکز خواهد داشت.
        </p>

        <InfoBox type="tip" title="انواع محتوا">
          <ul className="list-disc list-inside space-y-2">
            <li>آموزش نحوه دریافت و استفاده از کش‌بک</li>
            <li>معرفی فروشگاه‌های عضو</li>
            <li>داستان موفقیت فروشگاه‌ها</li>
            <li>آموزش مدیریت وفاداری مشتری برای کسب‌وکارها</li>
            <li>مقایسه کش‌بک با تخفیف‌های سنتی</li>
            <li>آموزش استفاده از کیف پول دیجیتال</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="تبلیغات دیجیتال"
        description="کانال‌های تبلیغاتی آنلاین"
      >
        <p className="leading-8">
          تبلیغات آنلاین با هدف افزایش آگاهی از برند و جذب کاربران جدید انجام
          خواهد شد. در مراحل اولیه، تبلیغات به صورت منطقه‌ای اجرا می‌شود تا
          کاربران فروشگاه‌های عضو در یک محدوده جغرافیایی مشخص جذب شوند.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>تبلیغات کلیکی (Google Ads)</li>
          <li>تبلیغات در اینستاگرام</li>
          <li>تبلیغات در تلگرام</li>
          <li>تبلیغات همسان در رسانه‌های آنلاین</li>
          <li>ارسال پیامک هدفمند برای کاربران جدید</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="شبکه‌های اجتماعی"
        description="نقش شبکه‌های اجتماعی در رشد پروژه"
      >
        <p className="leading-8">
          شبکه‌های اجتماعی نقش مهمی در معرفی فروشگاه‌های عضو، اطلاع‌رسانی
          کمپین‌های کش‌بک و افزایش تعامل کاربران خواهند داشت. علاوه بر معرفی
          امکانات سامانه، تجربه کاربران و داستان موفقیت فروشگاه‌ها نیز منتشر
          خواهد شد تا اعتماد مخاطبان افزایش یابد.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>اینستاگرام برای معرفی فروشگاه‌ها و کمپین‌ها</li>
          <li>تلگرام برای اطلاع‌رسانی سریع</li>
          <li>لینکدین برای جذب شرکای تجاری</li>
          <li>آپارات برای آموزش و معرفی قابلیت‌های سامانه</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="سئو و بازاریابی محتوایی"
        description="جذب کاربران از موتورهای جستجو"
      >
        <p className="leading-8">
          یکی از کانال‌های جذب کاربر، تولید محتوای آموزشی و بهینه‌سازی صفحات
          سایت برای موتورهای جستجو است. هدف این بخش، جذب کاربرانی است که به
          دنبال موضوعاتی مانند کش‌بک، باشگاه مشتریان، تخفیف، کیف پول دیجیتال و
          وفاداری مشتری هستند.
        </p>

        <InfoBox type="info" title="نمونه کلیدواژه‌ها">
          کش‌بک چیست، باشگاه مشتریان، کیف پول دیجیتال، افزایش فروش فروشگاه،
          وفادارسازی مشتری، برنامه وفاداری، تخفیف یا کش‌بک
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="بازاریابی ارجاعی"
        description="Referral Marketing"
      >
        <p className="leading-8">
          یکی از مؤثرترین روش‌های رشد این پلتفرم، استفاده از معرفی کاربران فعلی
          است. هر کاربر یا فروشگاهی که عضو جدیدی معرفی کند، پاداش یا کش‌بک اضافی
          دریافت خواهد کرد. این روش علاوه بر کاهش هزینه جذب مشتری، موجب رشد
          طبیعی شبکه نیز می‌شود.
        </p>

        <QuoteBox author="استراتژی رشد">
          هر کاربر راضی می‌تواند به یک کانال بازاریابی کم‌هزینه و مؤثر برای
          توسعه شبکه تبدیل شود.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection
        title="قیف بازاریابی"
        description="مسیر تبدیل بازدیدکننده به مشتری وفادار"
      >
        <div className="space-y-5">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۱. آگاهی (Awareness)</h3>
            <p className="leading-8">
              تبلیغات، شبکه‌های اجتماعی، تولید محتوا و معرفی توسط فروشگاه‌ها.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۲. علاقه‌مندی (Interest)</h3>
            <p className="leading-8">
              مطالعه مزایا، مشاهده فروشگاه‌های عضو و آشنایی با نحوه دریافت
              کش‌بک.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۳. ارزیابی (Evaluation)</h3>
            <p className="leading-8">
              مقایسه با روش‌های سنتی، مشاهده تجربه سایر کاربران و بررسی
              فروشگاه‌های عضو.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۴. ثبت‌نام و اولین خرید</h3>
            <p className="leading-8">
              ایجاد حساب کاربری، انجام اولین خرید و دریافت کش‌بک.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۵. استفاده مجدد</h3>
            <p className="leading-8">
              استفاده از اعتبار در فروشگاه دیگر و افزایش نرخ بازگشت مشتری.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-2">۶. معرفی به دیگران</h3>
            <p className="leading-8">دعوت دوستان و دریافت پاداش معرفی.</p>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection
        title="شاخص‌های سنجش موفقیت"
        description="KPI های بازاریابی"
      >
        <p className="leading-8">
          برای ارزیابی عملکرد فعالیت‌های بازاریابی، مجموعه‌ای از شاخص‌های کمی
          تعریف می‌شود تا اثربخشی کمپین‌ها به صورت مستمر اندازه‌گیری شود.
        </p>

        <InfoBox type="tip" title="شاخص‌های کلیدی عملکرد">
          <ul className="list-disc list-inside space-y-2">
            <li>تعداد فروشگاه‌های عضو</li>
            <li>تعداد کاربران ثبت‌نام‌شده</li>
            <li>هزینه جذب هر مشتری (CAC)</li>
            <li>نرخ تبدیل بازدیدکننده به کاربر</li>
            <li>نرخ بازگشت مشتری (Retention Rate)</li>
            <li>تعداد تراکنش‌های ماهانه</li>
            <li>میانگین کش‌بک مصرف‌شده</li>
            <li>نرخ معرفی کاربران (Referral Rate)</li>
            <li>ارزش طول عمر مشتری (LTV)</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          موفقیت بازار وفاداری بیش از هر چیز به ایجاد یک اثر شبکه‌ای پایدار
          وابسته است. به همین دلیل، استراتژی بازاریابی ابتدا بر جذب فروشگاه‌های
          عضو و سپس بر توسعه جامعه کاربران تمرکز دارد. استفاده هم‌زمان از
          بازاریابی محتوایی، تبلیغات دیجیتال، معرفی کاربران و همکاری با
          فروشگاه‌های محلی، می‌تواند با هزینه‌ای منطقی شبکه اولیه را شکل دهد و
          زمینه رشد پایدار کسب‌وکار را فراهم کند.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
