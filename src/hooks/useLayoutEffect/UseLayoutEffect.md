<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

What is useLayoutEffect?

useLayoutEffect is a React Hook that works similarly to useEffect, but it runs synchronously after all DOM mutations and before the browser paints the screen.

This means it allows you to read layout information from the DOM and make changes before the user sees anything.

In simple terms:
useLayoutEffect runs before the browser updates the screen.

<hr style="border: 1px solid #a0c4ff;"/>

Why use useLayoutEffect?

To measure DOM elements (width, height, position) accurately.

To make DOM updates that must happen before the screen is painted.

To prevent visual flickers or layout jumps.

To synchronously apply styles or calculations that affect layout.

<hr style="border: 1px solid #a0c4ff;"/>

How it works (Conceptually)

You provide a function (effect).

You provide a dependency array.

React:

Updates the DOM.

Runs useLayoutEffect synchronously.

Blocks the browser from painting.

Applies DOM reads or writes.

Then allows the browser to paint the updated UI.

<hr style="border: 1px solid #a0c4ff;"/>

Key Points

useLayoutEffect blocks painting until it finishes.

It runs before useEffect.

It should be used only when DOM measurements or layout changes are required.

Overusing it can hurt performance.

Most effects should use useEffect instead.

<hr style="border: 1px solid #a0c4ff;"/>

When Not to Use useLayoutEffect

For data fetching.

For non-visual side effects.

When DOM measurement is not required.

When useEffect works fine.

</div>
<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useLayoutEffect چیست؟</h3>

<p>
useLayoutEffect یک هوک در React است که بسیار شبیه useEffect عمل می‌کند،
اما <strong>به صورت همزمان (synchronous)</strong> بعد از تغییر DOM و
<strong>قبل از render شدن صفحه برای کاربر</strong> اجرا می‌شود.
</p>

<p>
این یعنی شما می‌توانید اندازه، موقعیت یا layout المان‌ها را
<strong>قبل از اینکه کاربر چیزی ببیند</strong> محاسبه یا اصلاح کنید.
</p>

<p>
به زبان ساده:
<strong>useLayoutEffect قبل از نمایش صفحه اجرا می‌شود.</strong>
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useLayoutEffect استفاده کنیم؟</h3>

<ul>
<li>برای اندازه‌گیری دقیق DOM (عرض، ارتفاع، موقعیت).</li>
<li>برای جلوگیری از پرش یا flicker در UI.</li>
<li>برای اعمال تغییرات layout قبل از نمایش صفحه.</li>
<li>برای محاسباتی که مستقیماً روی ظاهر صفحه تأثیر دارند.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">عملکرد useLayoutEffect (به طور مفهومی)</h3>

<ol>
<li>یک effect تعریف می‌کنید.</li>
<li>یک dependency array مشخص می‌کنید.</li>
<li>React:
<ul>
<li>اول DOM را به‌روزرسانی می‌کند</li>
<li>useLayoutEffect را <strong>بلافاصله</strong> اجرا می‌کند</li>
<li>رندر صفحه را متوقف می‌کند</li>
<li>محاسبات یا تغییرات DOM انجام می‌شود</li>
<li>سپس صفحه برای کاربر نمایش داده می‌شود</li>
</ul>
</li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نکات کلیدی</h3>

<ul>
<li>useLayoutEffect باعث <strong>block شدن paint مرورگر</strong> می‌شود.</li>
<li>قبل از useEffect اجرا می‌شود.</li>
<li>فقط زمانی استفاده شود که <strong>واقعاً به DOM نیاز دارید</strong>.</li>
<li>استفاده بیش از حد باعث افت performance می‌شود.</li>
<li>در اکثر مواقع useEffect انتخاب بهتری است.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useLayoutEffect مناسب نیست؟</h3>

<ul>
<li>برای گرفتن دیتا از API.</li>
<li>برای لاجیک‌های غیر بصری.</li>
<li>وقتی اندازه‌گیری DOM لازم نیست.</li>
<li>وقتی useEffectبه‌درستی کار می‌کند.</li>
</ul>

</div>
