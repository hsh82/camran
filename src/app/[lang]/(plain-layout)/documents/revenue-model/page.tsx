import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"
import { QuoteBox } from "../_components/quote-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="revenue-model"
      title="مدل درآمدی و ساختار هزینه"
      description="بررسی روش‌های درآمدزایی، ساختار هزینه‌ها، فرضیات مالی و امکان سودآوری پروژه."
    >
      <DocumentSection
        title="روش‌های درآمدزایی"
        description="پلتفرم چگونه درآمد کسب می‌کند؟"
      >
        <p className="leading-8">
          بازار وفاداری یک پلتفرم B2B2C است؛ بنابراین درآمد اصلی آن از
          فروشگاه‌های عضو تأمین می‌شود، نه از مشتریان نهایی. کاربران بدون پرداخت
          هزینه از سامانه استفاده می‌کنند و در مقابل فروشگاه‌ها برای دسترسی به
          شبکه وفاداری، خدمات تحلیلی و افزایش فروش، هزینه پرداخت خواهند کرد.
        </p>

        <InfoBox type="info" title="منابع اصلی درآمد">
          <ul className="list-disc list-inside space-y-2">
            <li>کمیسیون از تراکنش‌های انجام‌شده</li>
            <li>اشتراک ماهانه فروشگاه‌ها</li>
            <li>خدمات تبلیغاتی و کمپین‌های ویژه</li>
            <li>فروش گزارش‌ها و تحلیل‌های تجاری</li>
            <li>خدمات سفارشی برای فروشگاه‌های بزرگ</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="مدل قیمت‌گذاری"
        description="نحوه محاسبه هزینه استفاده از سامانه"
      >
        <p className="leading-8">
          در فاز اولیه، هدف اصلی توسعه شبکه فروشگاه‌ها است؛ بنابراین مدل
          قیمت‌گذاری به گونه‌ای طراحی می‌شود که مانع ورود کسب‌وکارهای کوچک
          نباشد. درآمد اصلی از رشد تعداد تراکنش‌ها حاصل خواهد شد، نه دریافت
          هزینه‌های سنگین در ابتدای همکاری.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-right">خدمت</th>
                <th className="border p-3 text-right">مدل قیمت‌گذاری</th>
                <th className="border p-3 text-right">توضیح</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">عضویت اولیه</td>
                <td className="border p-3">رایگان</td>
                <td className="border p-3">کاهش مانع ورود فروشگاه‌ها</td>
              </tr>

              <tr>
                <td className="border p-3">اشتراک ماهانه</td>
                <td className="border p-3">ثابت</td>
                <td className="border p-3">
                  دسترسی به امکانات مدیریتی و گزارش‌ها
                </td>
              </tr>

              <tr>
                <td className="border p-3">کارمزد تراکنش</td>
                <td className="border p-3">درصدی</td>
                <td className="border p-3">دریافت درصدی از هر تراکنش موفق</td>
              </tr>

              <tr>
                <td className="border p-3">کمپین تبلیغاتی</td>
                <td className="border p-3">سفارشی</td>
                <td className="border p-3">
                  تبلیغ فروشگاه یا افزایش نرخ کش‌بک
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocumentSection>

      <DocumentSection
        title="فرضیات مالی"
        description="برآورد ساده درآمد در فاز اولیه"
      >
        <p className="leading-8">
          با توجه به اینکه پروژه در مرحله دانشگاهی قرار دارد، اعداد زیر صرفاً
          فرضیات آموزشی هستند و برای نمایش منطق اقتصادی کسب‌وکار ارائه می‌شوند.
        </p>

        <InfoBox type="tip" title="سناریوی اولیه">
          <ul className="list-disc list-inside space-y-2">
            <li>۵۰ فروشگاه عضو در سال اول</li>
            <li>هر فروشگاه ۲۰۰ تراکنش در ماه</li>
            <li>میانگین مبلغ هر خرید: ۶۰۰ هزار تومان</li>
            <li>کارمزد پلتفرم: حدود ۲٪ مبلغ تراکنش</li>
            <li>اشتراک ماهانه فروشگاه‌ها برای خدمات مدیریتی</li>
          </ul>
        </InfoBox>

        <p className="leading-8 mt-5">
          با رشد تعداد فروشگاه‌ها، درآمد حاصل از کارمزد تراکنش‌ها نیز به صورت
          طبیعی افزایش پیدا می‌کند و بخش عمده درآمد آینده از همین مسیر ایجاد
          خواهد شد.
        </p>
      </DocumentSection>

      <DocumentSection
        title="هزینه‌های اصلی کسب‌وکار"
        description="مهم‌ترین هزینه‌های عملیاتی"
      >
        <p className="leading-8">
          بخش عمده هزینه‌های پروژه مربوط به توسعه و نگهداری زیرساخت نرم‌افزاری،
          بازاریابی و پشتیبانی از کاربران است. با افزایش تعداد فروشگاه‌ها،
          هزینه‌های ثابت بین اعضای بیشتری تقسیم شده و سودآوری افزایش می‌یابد.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-2 leading-8">
          <li>توسعه نرم‌افزار و زیرساخت فنی</li>
          <li>هزینه سرور و خدمات ابری</li>
          <li>پیامک و اعلان‌ها</li>
          <li>پشتیبانی کاربران و فروشگاه‌ها</li>
          <li>بازاریابی و تبلیغات</li>
          <li>درگاه پرداخت و کارمزدهای بانکی</li>
          <li>امنیت اطلاعات و نگهداری سامانه</li>
          <li>هزینه‌های اداری و حقوق نیروی انسانی</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="هزینه جذب مشتری (CAC)"
        description="Customer Acquisition Cost"
      >
        <p className="leading-8">
          در ابتدای فعالیت، هزینه جذب هر فروشگاه نسبتاً بالا خواهد بود؛ زیرا
          نیاز به مذاکره مستقیم، آموزش و فرهنگ‌سازی وجود دارد. با بزرگ‌تر شدن
          شبکه و افزایش معرفی کاربران، هزینه جذب هر مشتری به تدریج کاهش خواهد
          یافت.
        </p>

        <QuoteBox author="هدف بلندمدت">
          بهترین روش کاهش هزینه جذب مشتری، تبدیل کاربران و فروشگاه‌های فعلی به
          سفیران برند است.
        </QuoteBox>
      </DocumentSection>

      <DocumentSection
        title="درآمد احتمالی از هر مشتری"
        description="Lifetime Value"
      >
        <p className="leading-8">
          ارزش واقعی هر مشتری تنها به اولین خرید محدود نمی‌شود. هرچه مشتری دفعات
          بیشتری از شبکه استفاده کند، درآمد بیشتری از محل کارمزد تراکنش‌ها و
          همکاری فروشگاه‌ها ایجاد خواهد شد. به همین دلیل افزایش نرخ بازگشت مشتری
          (Retention) یکی از مهم‌ترین اهداف اقتصادی پروژه است.
        </p>

        <InfoBox type="info" title="منابع ایجاد ارزش">
          <ul className="list-disc list-inside space-y-2">
            <li>کارمزد تراکنش‌های تکرارشونده</li>
            <li>افزایش فروش فروشگاه‌ها</li>
            <li>تمدید اشتراک فروشگاه‌ها</li>
            <li>کمپین‌های تبلیغاتی اختصاصی</li>
          </ul>
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="نقطه سربه‌سر" description="Break-even Point">
        <p className="leading-8">
          نقطه سربه‌سر زمانی حاصل می‌شود که مجموع درآمد حاصل از اشتراک
          فروشگاه‌ها و کارمزد تراکنش‌ها، هزینه‌های ثابت و متغیر پلتفرم را پوشش
          دهد. در این مدل، هرچه تعداد فروشگاه‌های عضو و حجم تراکنش‌ها بیشتر شود،
          فاصله پروژه تا سودآوری کاهش پیدا می‌کند.
        </p>

        <InfoBox type="tip" title="فرض آموزشی">
          در صورتی که تعداد فروشگاه‌های فعال از حدود ۱۰۰ فروشگاه عبور کند و حجم
          تراکنش‌ها مطابق پیش‌بینی رشد کند، پروژه می‌تواند به نقطه سربه‌سر نزدیک
          شود.
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="ریسک‌های مالی"
        description="چه عواملی سودآوری پروژه را تهدید می‌کنند؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>رشد کند تعداد فروشگاه‌های عضو</li>
          <li>پایین بودن حجم تراکنش‌ها</li>
          <li>هزینه بالای جذب مشتری</li>
          <li>رقابت شرکت‌های بزرگ با سرمایه بیشتر</li>
          <li>تغییر قوانین پرداخت یا کیف پول دیجیتال</li>
          <li>افزایش هزینه زیرساخت و سرور</li>
          <li>تقلب در تراکنش‌های کش‌بک</li>
          <li>کاهش نرخ بازگشت مشتری</li>
        </ul>

        <InfoBox type="warning" title="مهم‌ترین ریسک">
          اگر تعداد فروشگاه‌های عضو به اندازه کافی افزایش پیدا نکند، اثر شبکه‌ای
          ایجاد نشده و درآمد حاصل از کارمزد تراکنش‌ها نیز به سطح اقتصادی مطلوب
          نخواهد رسید.
        </InfoBox>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          مدل درآمدی بازار وفاداری بر پایه ایجاد ارزش برای فروشگاه‌ها بنا شده
          است؛ به همین دلیل مشتریان نهایی بدون پرداخت هزینه از سامانه استفاده
          می‌کنند و درآمد اصلی از محل اشتراک فروشگاه‌ها، کارمزد تراکنش‌ها و
          خدمات تکمیلی تأمین می‌شود. با افزایش تعداد فروشگاه‌های عضو، اثر
          شبکه‌ای باعث رشد هم‌زمان درآمد، کاهش هزینه جذب مشتری و افزایش سودآوری
          خواهد شد. این مدل درآمدی قابلیت توسعه در مقیاس ملی را دارد و با رشد
          شبکه، پایداری اقتصادی آن نیز بیشتر می‌شود.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
