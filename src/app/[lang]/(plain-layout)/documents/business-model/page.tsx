import { DocumentSection } from "../_components/document-section"
import { DocumentTemplate } from "../_components/document-template"
import { InfoBox } from "../_components/info-box"

export default function Page() {
  return (
    <DocumentTemplate
      currentSlug="business-model"
      title="مدل کسب‌وکار و بوم کسب‌وکار"
      description="بررسی نحوه ایجاد، ارائه و کسب ارزش در پلتفرم بازار وفاداری بر اساس بوم مدل کسب‌وکار (Business Model Canvas)."
    >
      <DocumentSection
        title="معرفی مدل کسب‌وکار"
        description="کسب‌وکار چگونه ارزش ایجاد و درآمد کسب می‌کند؟"
      >
        <p className="leading-8">
          بازار وفاداری یک{" "}
          <strong>پلتفرم چندوجهی (Multi-sided Platform)</strong>
          است که میان سه گروه اصلی شامل مشتریان، فروشگاه‌ها و مدیر سامانه ارتباط
          برقرار می‌کند. مشتریان با انجام خرید، اعتبار کش‌بک دریافت می‌کنند و
          فروشندگان نیز از طریق ارائه این اعتبار، مشتریان وفادارتری به دست
          می‌آورند. نقش اصلی پلتفرم مدیریت تراکنش‌ها، توزیع کش‌بک، مدیریت کیف
          پول و ایجاد ارتباط میان اعضای شبکه است.
        </p>

        <p className="leading-8 mt-4">
          مدل درآمدی پروژه بر پایه همکاری با فروشگاه‌ها طراحی شده است؛ به این
          معنا که مشتری برای عضویت یا استفاده از سامانه هزینه‌ای پرداخت نمی‌کند،
          بلکه درآمد از طریق کمیسیون تراکنش‌ها، اشتراک فروشندگان و خدمات ارزش
          افزوده ایجاد می‌شود.
        </p>

        <InfoBox type="info" title="نوع مدل کسب‌وکار">
          Marketplace + Loyalty Platform + Cashback Network
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="بخش‌های مشتریان (Customer Segments)"
        description="مشتریان اصلی چه کسانی هستند؟"
      >
        <p className="leading-8">
          این پلتفرم برای چند گروه از کاربران ارزش ایجاد می‌کند و هر گروه نقش
          متفاوتی در اکوسیستم دارند.
        </p>

        <ul className="list-disc list-inside mt-5 space-y-3 leading-8">
          <li>فروشگاه‌های اینترنتی کوچک و متوسط</li>
          <li>فروشگاه‌های فیزیکی دارای فروش آنلاین</li>
          <li>رستوران‌ها، کافه‌ها و کسب‌وکارهای خدماتی</li>
          <li>خریداران آنلاین و کاربران وفادار</li>
          <li>مدیران کمپین‌های بازاریابی و برندها (در آینده)</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="ارزش پیشنهادی (Value Proposition)"
        description="چه ارزشی برای هر گروه ایجاد می‌شود؟"
      >
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg mb-2">برای مشتریان</h3>
            <ul className="list-disc list-inside space-y-2 leading-8">
              <li>دریافت کش‌بک بدون پرداخت هزینه عضویت</li>
              <li>امکان استفاده از اعتبار در چندین فروشگاه</li>
              <li>کیف پول دیجیتال یکپارچه</li>
              <li>کمپین‌های تشویقی و پیشنهادهای شخصی‌سازی‌شده</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">برای فروشندگان</h3>
            <ul className="list-disc list-inside space-y-2 leading-8">
              <li>افزایش نرخ بازگشت مشتری</li>
              <li>کاهش هزینه جذب مشتری</li>
              <li>باشگاه مشتریان مشترک</li>
              <li>دسترسی به داده‌های تحلیلی فروش</li>
              <li>کاهش وابستگی به تخفیف‌های مستقیم</li>
            </ul>
          </div>
        </div>
      </DocumentSection>

      <DocumentSection
        title="کانال‌های ارتباطی و توزیع (Channels)"
        description="چگونه به مشتریان دسترسی پیدا می‌کنیم؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>وب‌سایت اصلی پلتفرم</li>
          <li>پنل اختصاصی فروشندگان</li>
          <li>داشبورد مشتریان</li>
          <li>پیامک و ایمیل اطلاع‌رسانی</li>
          <li>شبکه‌های اجتماعی</li>
          <li>همکاری مستقیم با فروشگاه‌های عضو</li>
          <li>اپلیکیشن موبایل (در نسخه‌های آینده)</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="ارتباط با مشتری (Customer Relationships)"
        description="چگونه ارتباط با مشتری حفظ می‌شود؟"
      >
        <p className="leading-8">
          ارتباط با مشتریان بر پایه تعامل مستمر و ایجاد انگیزه برای خرید مجدد
          شکل می‌گیرد. مهم‌ترین ابزارهای حفظ ارتباط عبارت‌اند از:
        </p>

        <ul className="list-disc list-inside mt-5 space-y-3 leading-8">
          <li>کیف پول دیجیتال و نمایش موجودی کش‌بک</li>
          <li>اعلان دریافت کش‌بک پس از هر خرید</li>
          <li>کمپین‌های مناسبتی و شخصی‌سازی‌شده</li>
          <li>سیستم امتیاز و باشگاه مشتریان</li>
          <li>پشتیبانی آنلاین</li>
          <li>ارسال گزارش فعالیت و پیشنهادهای ویژه</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="جریان‌های درآمدی (Revenue Streams)"
        description="پلتفرم چگونه درآمد کسب می‌کند؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>کمیسیون از تراکنش‌های انجام‌شده</li>
          <li>اشتراک ماهانه فروشندگان</li>
          <li>فروش امکانات حرفه‌ای (Premium)</li>
          <li>گزارش‌ها و داشبوردهای تحلیلی</li>
          <li>اجرای کمپین‌های تبلیغاتی مشترک</li>
          <li>همکاری تجاری با برندها و سازمان‌ها</li>
        </ul>

        <InfoBox type="tip" title="نکته مهم">
          مشتری نهایی هیچ هزینه‌ای برای عضویت پرداخت نمی‌کند و درآمد اصلی از
          فروشگاه‌های عضو تأمین می‌شود.
        </InfoBox>
      </DocumentSection>

      <DocumentSection
        title="منابع کلیدی (Key Resources)"
        description="برای فعالیت کسب‌وکار به چه منابعی نیاز است؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>پلتفرم نرم‌افزاری مبتنی بر WordPress و WooCommerce</li>
          <li>زیرساخت چندفروشندگی (Dokan)</li>
          <li>سیستم کیف پول دیجیتال</li>
          <li>پایگاه داده تراکنش‌ها</li>
          <li>سرور و زیرساخت ابری</li>
          <li>برند و شبکه فروشندگان</li>
          <li>تیم توسعه و پشتیبانی</li>
          <li>داده‌های تحلیلی رفتار کاربران</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="فعالیت‌های کلیدی (Key Activities)"
        description="مهم‌ترین فعالیت‌های روزانه کسب‌وکار"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>مدیریت تراکنش‌های کش‌بک</li>
          <li>توسعه و نگهداری سامانه</li>
          <li>مدیریت کیف پول کاربران</li>
          <li>جذب فروشگاه‌های جدید</li>
          <li>پشتیبانی کاربران</li>
          <li>تحلیل داده‌ها و گزارش‌گیری</li>
          <li>اجرای کمپین‌های بازاریابی</li>
          <li>مدیریت امنیت و جلوگیری از تقلب</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="شرکای کلیدی (Key Partners)"
        description="چه سازمان‌ها و شرکت‌هایی در موفقیت پروژه نقش دارند؟"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>درگاه‌های پرداخت اینترنتی</li>
          <li>ارائه‌دهندگان خدمات پیامکی</li>
          <li>شرکت‌های هاستینگ و زیرساخت ابری</li>
          <li>فروشگاه‌های عضو شبکه</li>
          <li>شرکت‌های بازاریابی دیجیتال</li>
          <li>تأمین‌کنندگان خدمات احراز هویت</li>
          <li>توسعه‌دهندگان افزونه‌های مورد استفاده</li>
        </ul>
      </DocumentSection>

      <DocumentSection
        title="ساختار هزینه (Cost Structure)"
        description="مهم‌ترین هزینه‌های کسب‌وکار"
      >
        <ul className="list-disc list-inside space-y-3 leading-8">
          <li>توسعه و نگهداری نرم‌افزار</li>
          <li>هزینه سرورها و زیرساخت</li>
          <li>پیامک و اعلان‌ها</li>
          <li>پشتیبانی فنی</li>
          <li>بازاریابی و جذب فروشندگان</li>
          <li>کارمزدهای بانکی و پرداخت</li>
          <li>هزینه امنیت و مانیتورینگ سامانه</li>
          <li>هزینه‌های اداری و منابع انسانی</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="جمع‌بندی" description="نتیجه‌گیری">
        <p className="leading-8">
          مدل کسب‌وکار بازار وفاداری بر پایه ایجاد ارزش هم‌زمان برای مشتریان و
          فروشندگان طراحی شده است. مشتری با دریافت کش‌بک و امکان استفاده از آن
          در شبکه‌ای از فروشگاه‌ها تجربه خرید بهتری خواهد داشت و فروشندگان نیز
          با افزایش وفاداری مشتریان، کاهش هزینه جذب مشتری و دسترسی به داده‌های
          تحلیلی، ارزش اقتصادی بیشتری کسب می‌کنند. این مدل به دلیل ماهیت پلتفرمی
          خود، با افزایش تعداد اعضا ارزش بیشتری ایجاد کرده و از اثر شبکه‌ای برای
          رشد پایدار بهره می‌برد.
        </p>
      </DocumentSection>
    </DocumentTemplate>
  )
}
