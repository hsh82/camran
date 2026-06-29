import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="value-chain"
      title="تحلیل واسطه‌گری و زنجیره ارزش"
      description="بررسی نقش واسطه‌ها، ارزش ایجادشده توسط پلتفرم و تأثیر آن بر زنجیره ارزش صنعت."
    >
      <DocumentSection
        title="ماهیت واسطه‌گری کسب‌وکار"
        description="آیا این ایده ذاتاً یک واسطه است؟"
      >
        <p className="leading-8">
          بله. «بازار وفاداری» ذاتاً یک کسب‌وکار واسطه‌ای (Platform Business)
          محسوب می‌شود. این پلتفرم هیچ کالایی تولید یا مستقیماً به مشتری عرضه
          نمی‌کند؛ بلکه میان فروشگاه‌های مستقل و مشتریان ارتباط ایجاد کرده و
          امکان استفاده از یک شبکه مشترک کش‌بک را فراهم می‌سازد.
        </p>

        <p className="leading-8 mt-4">
          ارزش اصلی این کسب‌وکار در ایجاد یک شبکه همکاری بین فروشگاه‌هایی است که
          پیش از این ارتباطی با یکدیگر نداشتند. هر فروشگاه با عضویت در شبکه،
          علاوه بر حفظ مشتریان فعلی، به مشتریان سایر فروشگاه‌های عضو نیز دسترسی
          پیدا می‌کند.
        </p>

        <QuoteBox author="ماهیت کسب‌وکار">
          این پلتفرم محصول نمی‌فروشد؛ بلکه ارتباط، اعتماد و ارزش مشترک بین اعضای
          شبکه ایجاد می‌کند.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection
        title="گروه‌های اصلی واسطه‌گری"
        description="پلتفرم بین چه گروه‌هایی ارتباط برقرار می‌کند؟"
      >
        <p className="leading-8">
          بازار وفاداری یک پلتفرم چندوجهی (Multi-sided Platform) است و هم‌زمان
          میان چند گروه مختلف ارتباط برقرار می‌کند.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">گروه اول</th>
                <th className="border p-3 text-right">گروه دوم</th>
                <th className="border p-3 text-right">نوع ارتباط</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">مشتریان</td>
                <td className="border p-3">فروشگاه‌ها</td>
                <td className="border p-3">خرید، دریافت کش‌بک و مصرف اعتبار</td>
              </tr>

              <tr>
                <td className="border p-3">فروشگاه‌ها</td>
                <td className="border p-3">فروشگاه‌های دیگر</td>
                <td className="border p-3">
                  اشتراک‌گذاری شبکه وفاداری مشتریان
                </td>
              </tr>

              <tr>
                <td className="border p-3">فروشگاه‌ها</td>
                <td className="border p-3">پلتفرم</td>
                <td className="border p-3">مدیریت تراکنش، گزارش و کمپین‌ها</td>
              </tr>

              <tr>
                <td className="border p-3">مشتریان</td>
                <td className="border p-3">کیف پول دیجیتال</td>
                <td className="border p-3">مدیریت اعتبار و تاریخچه کش‌بک</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection
        title="کاهش ارتباطات تجاری"
        description="پلتفرم چه پیچیدگی‌هایی را حذف می‌کند؟"
      >
        <p className="leading-8">
          اگر هر فروشگاه بخواهد با تمام فروشگاه‌های دیگر قرارداد همکاری منعقد
          کند، تعداد بسیار زیادی ارتباط مستقیم ایجاد خواهد شد که مدیریت، تسویه،
          پشتیبانی و هماهنگی آن بسیار پرهزینه خواهد بود.
        </p>

        <p className="leading-8 mt-4">
          در مدل پیشنهادی، هر فروشگاه تنها یک قرارداد با پلتفرم منعقد می‌کند و
          تمامی تعاملات میان اعضای شبکه توسط سامانه مدیریت می‌شود. در نتیجه
          هزینه‌های مذاکره، هماهنگی و نگهداری ارتباطات به شکل چشمگیری کاهش
          می‌یابد.
        </p>

        <InfoBox type="info" title="مزیت اصلی">
          به جای ایجاد ده‌ها یا صدها قرارداد دوجانبه بین فروشگاه‌ها، تنها یک
          ارتباط با پلتفرم برقرار می‌شود.
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="مقیاس‌پذیری شبکه"
        description="اثر شبکه چگونه ارزش ایجاد می‌کند؟"
      >
        <p className="leading-8">
          هرچه تعداد فروشگاه‌های عضو بیشتر شود، ارزش شبکه برای تمامی اعضا نیز
          افزایش می‌یابد. مشتریان گزینه‌های بیشتری برای خرج کردن کش‌بک خواهند
          داشت و فروشگاه‌ها نیز به جامعه بزرگ‌تری از مشتریان دسترسی پیدا
          می‌کنند.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>افزایش جذابیت کیف پول کش‌بک</li>
          <li>کاهش هزینه جذب مشتری برای فروشگاه‌ها</li>
          <li>تقویت وفاداری مشتریان</li>
          <li>تقسیم هزینه‌های زیرساخت بین اعضای بیشتر</li>
          <li>افزایش ارزش کل شبکه با ورود هر عضو جدید</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="ارزش ناشی از تخصص و تجربه"
        description="پلتفرم چه دانشی را در اختیار اعضا قرار می‌دهد؟"
      >
        <p className="leading-8">
          بسیاری از فروشگاه‌های کوچک توانایی طراحی یک سیستم کش‌بک، کیف پول
          دیجیتال، مدیریت تراکنش یا تحلیل رفتار مشتری را ندارند. بازار وفاداری
          این زیرساخت تخصصی را به صورت آماده در اختیار آن‌ها قرار می‌دهد.
        </p>

        <InfoBox type="tip" title="تخصص‌های ارائه‌شده">
          <ul className="list-disc list-inside space-y-2">
            <li>مدیریت کیف پول دیجیتال</li>
            <li>محاسبه خودکار کش‌بک</li>
            <li>داشبورد تحلیلی فروشگاه</li>
            <li>مدیریت کمپین‌های وفاداری</li>
            <li>مدیریت کاربران و احراز هویت</li>
            <li>گزارش‌های مدیریتی و مالی</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="کاهش ریسک"
        description="پلتفرم چه ریسک‌هایی را کاهش می‌دهد؟"
      >
        <p className="leading-8">
          یکی از مهم‌ترین وظایف واسطه‌ها، کاهش ریسک میان طرفین معامله است. این
          پلتفرم نیز با ایجاد قوانین مشترک، ثبت دقیق تراکنش‌ها و مدیریت اعتبار
          کش‌بک، ریسک‌های مختلف را برای مشتریان و فروشگاه‌ها کاهش می‌دهد.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">نوع ریسک</th>
                <th className="border p-3 text-right">راهکار پلتفرم</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">ریسک تقلب</td>
                <td className="border p-3">
                  ثبت تراکنش‌ها و کنترل هوشمند عملیات
                </td>
              </tr>

              <tr>
                <td className="border p-3">ریسک اعتماد</td>
                <td className="border p-3">
                  شفافیت موجودی کیف پول و سوابق مالی
                </td>
              </tr>

              <tr>
                <td className="border p-3">ریسک فنی</td>
                <td className="border p-3">
                  زیرساخت متمرکز، پشتیبان‌گیری و امنیت سامانه
                </td>
              </tr>

              <tr>
                <td className="border p-3">ریسک مدیریتی</td>
                <td className="border p-3">
                  گزارش‌های تحلیلی و داشبورد مدیریتی
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection
        title="واسطه‌های حذف‌شده"
        description="چه واسطه‌هایی اهمیت کمتری پیدا می‌کنند؟"
      >
        <p className="leading-8">
          هدف پروژه حذف کامل پلتفرم‌های موجود نیست؛ بلکه ایجاد یک مسیر جایگزین
          برای افزایش وفاداری مشتریان است. با استفاده از بازار وفاداری،
          فروشگاه‌ها وابستگی کمتری به تخفیف‌های مداوم یا کمپین‌های پرهزینه
          خواهند داشت.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>کاهش وابستگی به کمپین‌های تخفیفی سنتی</li>
          <li>کاهش وابستگی به باشگاه مشتریان اختصاصی هر فروشگاه</li>
          <li>کاهش هزینه‌های بازاریابی تکراری</li>
          <li>کاهش نیاز به قراردادهای متعدد میان فروشگاه‌ها</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="واسطه‌های جدید ایجادشده"
        description="پلتفرم چه نقش‌های جدیدی ایجاد می‌کند؟"
      >
        <p className="leading-8">
          این کسب‌وکار علاوه بر ایفای نقش واسطه، خدمات جدیدی نیز به زنجیره ارزش
          اضافه می‌کند که پیش از این میان فروشگاه‌های مستقل وجود نداشت.
        </p>

        <InfoBox type="info" title="نقش‌های جدید پلتفرم">
          <ul className="list-disc list-inside space-y-2">
            <li>مدیر شبکه وفاداری مشترک</li>
            <li>مدیر کیف پول دیجیتال</li>
            <li>مدیر کمپین‌های کش‌بک</li>
            <li>مرکز تحلیل رفتار مشتریان</li>
            <li>واسطه تسویه مالی بین فروشگاه‌ها</li>
            <li>ارائه‌دهنده خدمات گزارش‌گیری و تصمیم‌یار</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="تحلیل زنجیره ارزش"
        description="پلتفرم در کدام بخش زنجیره ارزش قرار می‌گیرد؟"
      >
        <p className="leading-8">
          بازار وفاداری میان مرحله فروش و بازگشت مجدد مشتری قرار می‌گیرد. برخلاف
          بسیاری از سامانه‌های فروش که تنها بر انجام تراکنش تمرکز دارند، این
          پلتفرم چرخه پس از خرید را مدیریت می‌کند و تلاش می‌کند مشتری را دوباره
          به شبکه بازگرداند. به همین دلیل ارزش اصلی آن در افزایش نرخ وفاداری،
          افزایش خریدهای تکراری و ایجاد اثر شبکه‌ای میان فروشگاه‌ها شکل می‌گیرد.
        </p>

        <QuoteBox author="ارزش نهایی">
          هرچه تعداد اعضای شبکه بیشتر شود، ارزش ایجادشده برای تمام ذی‌نفعان نیز
          افزایش پیدا می‌کند؛ این همان مزیت اصلی یک پلتفرم واسطه‌ای موفق است.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          بازار وفاداری نمونه‌ای از یک پلتفرم واسطه‌ای شبکه‌محور است که با کاهش
          پیچیدگی ارتباطات تجاری، ایجاد زیرساخت مشترک وفاداری، کاهش ریسک، ارائه
          خدمات تخصصی و ایجاد اثر شبکه‌ای، برای مشتریان و فروشگاه‌ها ارزش ایجاد
          می‌کند. این مدل نه‌تنها هزینه تعامل میان اعضا را کاهش می‌دهد، بلکه با
          رشد تعداد فروشگاه‌ها، مزیت رقابتی آن نیز به مرور افزایش خواهد یافت.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
