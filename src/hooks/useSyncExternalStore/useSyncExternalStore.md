# useSyncExternalStore

English Explanation
<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">
What is useSyncExternalStore?

<code>useSyncExternalStore</code> is a React Hook introduced in React 18 for subscribing to external stores in a way that works with concurrent rendering.

It ensures that your component always reads the most up-to-date state from the store, avoiding tearing (reading partially updated state) during concurrent updates.

In simple terms:
<code>useSyncExternalStore</code> safely connects your component to an external source of state and re-renders when it changes.

<hr style="border: 1px solid #a0c4ff;"/>
Why use useSyncExternalStore?

To read state from an external store (like Redux, Zustand, or custom stores) safely in React 18+.

To ensure your component stays consistent with the store even during concurrent rendering.

To avoid subtle bugs related to outdated or partially updated state.

<hr style="border: 1px solid #a0c4ff;"/>
How it works (Conceptually)

You provide three things:
1. A subscribe function (how to listen for store updates)
2. A getSnapshot function (how to read the current store value)
3. An optional getServerSnapshot function (for server-side rendering)

React:
- Calls getSnapshot during render to get the current value
- Subscribes to store updates using the subscribe function
- Re-renders the component whenever the store changes

<hr style="border: 1px solid #a0c4ff;"/>
Key Points

- Designed for external stores, not internal component state.
- Guarantees consistent state during concurrent rendering.
- Works seamlessly with server-side rendering (SSR) if getServerSnapshot is provided.
- Helps avoid “tearing” issues that could happen with normal subscriptions.
- Provides a stable API for libraries like Redux, Zustand, or custom global stores.

<hr style="border: 1px solid #a0c4ff;"/>
When Not to Use useSyncExternalStore

- For local component state (useState/useReducer are sufficient)
- For simple props or state that do not involve external stores
- If your app does not use React 18 concurrent features
</div>

توضیح فارسی
<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">
<h3 style="color: #b36b00;">useSyncExternalStore چیست؟</h3>
<p><code>useSyncExternalStore</code> یک <strong>هوک React</strong> است که در React 18 معرفی شده و برای <strong>مشترک شدن به فروشگاه‌های خارجی (external stores)</strong> به صورت امن و سازگار با concurrent rendering استفاده می‌شود.</p>
<p>این هوک تضمین می‌کند که کامپوننت شما همیشه <strong>جدیدترین مقدار state</strong> را از فروشگاه بخواند و از مشکلاتی مثل <strong>خواندن state نیمه‌به‌روز شده (tearing)</strong> جلوگیری کند.</p>
<p>به زبان ساده: <strong>useSyncExternalStore کامپوننت را به یک منبع خارجی state متصل می‌کند و وقتی تغییر کرد، رندر می‌شود.</strong></p>

<hr style="border: 1px solid #f0c27b;"/>
<h3 style="color: #b36b00;">چرا از useSyncExternalStore استفاده کنیم؟</h3>
<ul>
<li>برای خواندن state از فروشگاه خارجی (مثل Redux، Zustand یا فروشگاه‌های سفارشی) به صورت امن در React 18+</li>
<li>برای اطمینان از هماهنگی کامپوننت با فروشگاه حتی در concurrent rendering</li>
<li>برای جلوگیری از باگ‌های ظریف ناشی از state قدیمی یا نیمه‌به‌روز</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>
<h3 style="color: #b36b00;">عملکرد useSyncExternalStore (به طور مفهومی)</h3>
<ol>
<li>شما سه چیز ارائه می‌دهید:
  <ul>
    <li>تابع subscribe (چگونگی گوش دادن به تغییرات فروشگاه)</li>
    <li>تابع getSnapshot (چگونگی خواندن مقدار فعلی فروشگاه)</li>
    <li>تابع getServerSnapshot اختیاری (برای SSR)</li>
  </ul>
</li>
<li>React:
  <ul>
    <li>در render مقدار فعلی را با getSnapshot می‌خواند</li>
    <li>با subscribe به تغییرات فروشگاه گوش می‌دهد</li>
    <li>هر زمان که فروشگاه تغییر کند، کامپوننت را رندر مجدد می‌کند</li>
  </ul>
</li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>
<h3 style="color: #b36b00;">نکات کلیدی</h3>
<ul>
<li>برای فروشگاه‌های خارجی طراحی شده، نه state داخلی کامپوننت.</li>
<li>تضمین می‌کند که state در concurrent rendering سازگار باشد.</li>
<li>با SSR به خوبی کار می‌کند اگر getServerSnapshot ارائه شود.</li>
<li>به جلوگیری از مشکلات “tearing” کمک می‌کند.</li>
<li>API پایدار برای کتابخانه‌هایی مثل Redux، Zustand یا فروشگاه‌های سفارشی فراهم می‌کند.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>
<h3 style="color: #b36b00;">چه زمانی useSyncExternalStore مناسب نیست؟</h3>
<ul>
<li>برای state داخلی کامپوننت (useState یا useReducer کافی است)</li>
<li>برای props یا state ساده که فروشگاه خارجی ندارند</li>
<li>اگر برنامه شما از ویژگی‌های concurrent React 18 استفاده نمی‌کند</li>
</ul>
</div>
