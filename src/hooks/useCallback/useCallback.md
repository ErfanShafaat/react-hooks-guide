React useCallback Hook
English Explanation
<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">
What is useCallback?

useCallback is a Hook in React that allows you to memoize a function, so that the same function reference is preserved between renders unless its dependencies change.

It is commonly used to:

Prevent unnecessary re-creation of functions

Optimize performance in React components

Avoid unwanted re-renders in child components

In simple terms:
useCallback remembers your function so React doesn’t recreate it on every render.

<hr style="border: 1px solid #a0c4ff;"/>
Why use useCallback?

To prevent unnecessary re-renders of child components.

To keep function references stable between renders.

To optimize performance in large or complex components.

To use functions safely inside useEffect, memo, or optimized components.

<hr style="border: 1px solid #a0c4ff;"/>
How it works (Conceptually)

You wrap a function with useCallback(fn, dependencies).

React returns the same function reference if dependencies don’t change.

If any dependency changes, a new function is created.

<hr style="border: 1px solid #a0c4ff;"/>
Key Points

useCallback memoizes functions, not values.

It returns the same function reference between renders.

It depends entirely on the dependency array.

Often used with React.memo.

Helps optimize performance, not logic.

<hr style="border: 1px solid #a0c4ff;"/>
useCallback and Controlled vs Uncontrolled Components

In Controlled Components, callbacks like onChange are recreated often.

Using useCallback helps keep handlers stable and prevents unnecessary re-renders.

In Uncontrolled Components, callbacks are usually less critical for performance.

useCallback is most useful when passing handlers to memoized child components.

<hr style="border: 1px solid #a0c4ff;"/>
When Not to Use useCallback

When performance is not an issue.

For simple components with no child optimization.

When overusing it makes code harder to read.

As a replacement for proper state management.

</div>
توضیح فارسی
<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">
useCallback چیست؟

<code>useCallback</code> یکی از هوک‌های React است که به شما اجازه می‌دهد یک تابع را memoize کنید تا در renderهای بعدی دوباره ساخته نشود، مگر اینکه وابستگی‌هایش تغییر کنند.

این هوک معمولاً برای:

جلوگیری از ساخته شدن مجدد توابع

بهینه‌سازی performance

کنترل re-render شدن کامپوننت‌های فرزند

استفاده می‌شود.

به زبان ساده:
useCallback باعث می‌شود React همان تابع قبلی را دوباره استفاده کند.

<hr style="border: 1px solid #f0c27b;"/>
چرا از useCallback استفاده کنیم؟
<ul> <li>برای جلوگیری از re-render غیرضروری کامپوننت‌های فرزند.</li> <li>برای ثابت نگه داشتن reference توابع.</li> <li>برای بهینه‌سازی اپلیکیشن‌های بزرگ.</li> <li>برای استفاده امن از توابع داخل <code>useEffect</code> یا <code>React.memo</code>.</li> </ul> <hr style="border: 1px solid #f0c27b;"/>
عملکرد useCallback (به طور مفهومی)
<ol> <li>تابع را داخل <code>useCallback</code> قرار می‌دهید.</li> <li>React آن تابع را ذخیره می‌کند.</li> <li>تا زمانی که dependencyها تغییر نکنند، همان تابع قبلی برگردانده می‌شود.</li> <li>با تغییر dependency، تابع جدید ساخته می‌شود.</li> </ol> <hr style="border: 1px solid #f0c27b;"/>
نکات کلیدی
<ul> <li><code>useCallback</code> فقط توابع را memoize می‌کند.</li> <li>برای بهینه‌سازی performance استفاده می‌شود.</li> <li>وابسته به dependency array است.</li> <li>اغلب همراه <code>React.memo</code> استفاده می‌شود.</li> <li>جایگزین منطق state یا effect نیست.</li> </ul> <hr style="border: 1px solid #f0c27b;"/>
useCallback و Controlled / Uncontrolled Components
<ul> <li>در <b>Controlled Components</b>، توابعی مثل <code>onChange</code> زیاد ساخته می‌شوند.</li> <li>استفاده از <code>useCallback</code> باعث می‌شود این توابع ثابت بمانند.</li> <li>این کار از re-render غیرضروری کامپوننت‌های فرزند جلوگیری می‌کند.</li> <li>در <b>Uncontrolled Components</b> معمولاً نیاز کمتری به <code>useCallback</code> وجود دارد.</li> </ul> <hr style="border: 1px solid #f0c27b;"/>
چه زمانی useCallback مناسب نیست؟
<ul> <li>وقتی performance مسئله مهمی نیست.</li> <li>در کامپوننت‌های ساده و کوچک.</li> <li>وقتی خوانایی کد را کاهش می‌دهد.</li> <li>به عنوان استفاده افراطی بدون نیاز واقعی.</li> </ul> </div>