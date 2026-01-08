React useMemo Hook
English Explanation
<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">
What is useMemo?

useMemo is a performance optimization Hook in React that allows you to memoize the result of a calculation.

It prevents expensive computations from running again on every render unless their dependencies change.

In simple terms:
useMemo remembers a computed value and reuses it when possible.

<hr style="border: 1px solid #a0c4ff;"/>
Why use useMemo?

To avoid running heavy or expensive calculations on every render.

To improve performance in components that re-render frequently.

To ensure calculations only run when their required data changes.

<hr style="border: 1px solid #a0c4ff;"/>
How it works (Conceptually)

You provide a function that returns a computed value.

You provide a dependency array.

React:

Runs the function on the first render.

Stores (memoizes) the result.

Re-runs the function only if one of the dependencies changes.

Otherwise, returns the cached value.

<hr style="border: 1px solid #a0c4ff;"/>
Key Points

useMemo returns a value, not a function.

It should be used for expensive computations, not simple calculations.

Dependencies must include all values used inside the memoized function.

Overusing useMemo can make code harder to read without real benefits.

It helps optimize performance, not fix logical issues.

<hr style="border: 1px solid #a0c4ff;"/>
When Not to Use useMemo

For simple calculations (e.g. a + b).

When performance is not an issue.

When the computation is cheap and fast.

As a replacement for correct state management.

</div>
توضیح فارسی
<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;"> <h3 style="color: #b36b00;">useMemo چیست؟</h3> <p> <code>useMemo</code> یک <strong>هوک بهینه‌سازی عملکرد در React</strong> است که برای <strong>ذخیره (memoize) نتیجه یک محاسبه</strong> استفاده می‌شود. </p> <p> این هوک باعث می‌شود محاسبات سنگین <strong>در هر render دوباره اجرا نشوند</strong>، مگر اینکه وابستگی‌های آن تغییر کرده باشند. </p> <p> به زبان ساده: <strong>useMemo مقدار محاسبه‌شده را به خاطر می‌سپارد و در صورت امکان دوباره از آن استفاده می‌کند.</strong> </p> <hr style="border: 1px solid #f0c27b;"/> <h3 style="color: #b36b00;">چرا از useMemo استفاده کنیم؟</h3> <ul> <li>برای جلوگیری از اجرای دوباره محاسبات سنگین در هر render.</li> <li>برای افزایش performance کامپوننت‌هایی که زیاد re-render می‌شوند.</li> <li>برای اجرای محاسبه فقط زمانی که داده‌های وابسته تغییر کرده‌اند.</li> </ul> <hr style="border: 1px solid #f0c27b;"/> <h3 style="color: #b36b00;">عملکرد useMemo (به طور مفهومی)</h3> <ol> <li>یک تابع می‌دهید که یک مقدار را محاسبه می‌کند.</li> <li>یک آرایه وابستگی (dependency array) مشخص می‌کنید.</li> <li>React: <ul> <li>در اولین render تابع را اجرا می‌کند</li> <li>نتیجه را ذخیره می‌کند</li> <li>فقط زمانی دوباره تابع را اجرا می‌کند که یکی از وابستگی‌ها تغییر کند</li> <li>در غیر این صورت، مقدار ذخیره‌شده را برمی‌گرداند</li> </ul> </li> </ol> <hr style="border: 1px solid #f0c27b;"/> <h3 style="color: #b36b00;">نکات کلیدی</h3> <ul> <li><code>useMemo</code> یک <strong>مقدار</strong> برمی‌گرداند، نه تابع.</li> <li>باید برای <strong>محاسبات سنگین</strong> استفاده شود، نه عملیات ساده.</li> <li>تمام متغیرهای استفاده‌شده داخل تابع باید در dependency array باشند.</li> <li>استفاده بیش از حد از آن می‌تواند خوانایی کد را کاهش دهد.</li> <li><code>useMemo</code> فقط برای بهینه‌سازی performance است، نه رفع باگ منطقی.</li> </ul> <hr style="border: 1px solid #f0c27b;"/> <h3 style="color: #b36b00;">چه زمانی useMemo مناسب نیست؟</h3> <ul> <li>برای محاسبات ساده مثل جمع دو عدد.</li> <li>وقتی مشکل performance ندارید.</li> <li>برای کدهایی که اجرای آن‌ها سریع و ارزان است.</li> <li>به عنوان جایگزین مدیریت درست state.</li> </ul> </div>