# useDebugValue Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useDebugValue?

useDebugValue is a React Hook that helps you **display custom labels for custom Hooks in React DevTools**.

It is mainly used inside **custom Hooks** to make debugging easier and clearer.

In simple terms:  
useDebugValue lets you show meaningful information about a custom Hook while debugging.

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useDebugValue?

To improve the debugging experience in React DevTools.

To make custom Hooks easier to understand while inspecting components.

To show readable and meaningful state instead of raw values.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

You call useDebugValue inside a custom Hook.

You pass a value (or formatted value) to it.

React DevTools:

Displays this value next to the custom Hook name.

Only shows it in development mode.

It has no effect on rendering or performance in production.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

useDebugValue is only for debugging purposes.

It does not affect UI, logic, or rendering.

It is ignored in production builds.

It is mostly useful in custom Hooks, not components.

You can pass a formatter function for expensive formatting.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useDebugValue

Inside normal components instead of custom Hooks.

For application logic or state management.

If you don’t use React DevTools.

When the displayed value provides no meaningful insight.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useDebugValue چیست؟</h3>

<p>
<code>useDebugValue</code> یک <strong>هوک مخصوص دیباگ در React</strong> است که برای
<strong>نمایش اطلاعات خوانا از هوک‌های سفارشی در React DevTools</strong> استفاده می‌شود.
</p>

<p>
این هوک معمولاً داخل <strong>Custom Hook</strong>ها استفاده می‌شود و هیچ تأثیری روی UI یا منطق برنامه ندارد.
</p>

<p>
به زبان ساده:
<strong>useDebugValue کمک می‌کند هنگام دیباگ بفهمیم یک هوک سفارشی دقیقاً چه وضعیتی دارد.</strong>
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useDebugValue استفاده کنیم؟</h3>

<ul>
  <li>برای خواناتر شدن اطلاعات در React DevTools</li>
  <li>برای درک بهتر وضعیت هوک‌های سفارشی</li>
  <li>برای نمایش مقادیر معنادار به جای stateهای خام</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نحوه عملکرد useDebugValue (مفهومی)</h3>

<ol>
  <li>داخل یک Custom Hook فراخوانی می‌شود.</li>
  <li>یک مقدار (یا مقدار فرمت‌شده) به آن داده می‌شود.</li>
  <li>React DevTools:
    <ul>
      <li>این مقدار را کنار نام هوک نمایش می‌دهد</li>
      <li>فقط در حالت development فعال است</li>
      <li>در production کاملاً نادیده گرفته می‌شود</li>
    </ul>
  </li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نکات کلیدی</h3>

<ul>
  <li>useDebugValue فقط برای دیباگ است.</li>
  <li>هیچ تأثیری روی render یا performance ندارد.</li>
  <li>در نسخه production اجرا نمی‌شود.</li>
  <li>بیشتر برای <strong>Custom Hook</strong>ها کاربرد دارد.</li>
  <li>می‌توان از formatter function برای محاسبات سنگین استفاده کرد.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useDebugValue مناسب نیست؟</h3>

<ul>
  <li>داخل کامپوننت‌های معمولی</li>
  <li>برای پیاده‌سازی منطق برنامه</li>
  <li>وقتی از React DevTools استفاده نمی‌کنید</li>
  <li>وقتی مقدار نمایش‌داده‌شده کمکی به دیباگ نمی‌کند</li>
</ul>

</div>
