# React useState Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useState?

`useState` is a fundamental **React Hook** that allows **functional components** to have internal state. Before Hooks, only class components could maintain state.

**State** is data that **can change over time**, and when it changes, React re-renders the component to reflect the new state.

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useState?

- To store dynamic values like counters, input fields, or toggle states.
- To trigger re-render when the stored value changes.
- To manage local component data in a clean and predictable way.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

1. You declare a state variable with an initial value.
2. React gives you a function to update that value.
3. When you call the updater function, React:
    - Changes the stored value
    - Re-renders the component to reflect the new value

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- Always use the updater function provided by React to change state.
- You can store numbers, strings, booleans, objects, or arrays in state.
- State updates are asynchronous.
- Avoid directly modifying state objects; always create a new copy when updating objects or arrays.
- If the new state depends on the previous state, use the functional update form.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useState

- For complex state logic → consider `useReducer`.
- For state shared across multiple components → consider `useContext`.
- For data coming from props that doesn’t change → no need for state.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useState چیست؟</h3>

<p>
`useState` یک <strong>هوک اساسی در React</strong> است که به کامپوننت‌های فانکشنی اجازه می‌دهد <strong>حالت داخلی (state)</strong> داشته باشند. قبل از معرفی هوک‌ها، فقط کامپوننت‌های کلاس می‌توانستند state داشته باشند.
</p>

<p>
<strong>State</strong> یعنی داده‌ای که <em>ممکن است در طول زمان تغییر کند</em> و با تغییر آن، React کامپوننت را دوباره render می‌کند تا تغییرات روی صفحه نمایش داده شود.
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useState استفاده کنیم؟</h3>

<ul>
  <li>برای ذخیره مقادیر پویا مانند شمارنده‌ها، ورودی‌ها یا وضعیت نمایش/عدم نمایش اجزا.</li>
  <li>برای trigger کردن render مجدد وقتی مقدار تغییر می‌کند.</li>
  <li>مدیریت داده‌های محلی کامپوننت به شکل ساده و قابل پیش‌بینی.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">عملکرد useState (به طور مفهومی)</h3>

<ol>
  <li>یک متغیر state با مقدار اولیه تعریف می‌کنیم.</li>
  <li>React یک تابع برای تغییر آن مقدار به ما می‌دهد.</li>
  <li>وقتی این تابع را صدا می‌زنیم، React:
    <ul>
      <li>مقدار ذخیره شده را تغییر می‌دهد</li>
      <li>کامپوننت را دوباره render می‌کند تا مقدار جدید نشان داده شود</li>
    </ul>
  </li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نکات کلیدی</h3>

<ul>
  <li>همیشه برای تغییر state از <strong>تابع به‌روزرسانی</strong> که React ارائه داده استفاده کنید.</li>
  <li>می‌توانید اعداد، رشته‌ها، boolean، object یا array در state ذخیره کنید.</li>
  <li>به‌روزرسانی state به صورت <strong>غیرهمزمان</strong> است.</li>
  <li>از تغییر مستقیم object یا array در state خودداری کنید؛ همیشه یک کپی جدید بسازید.</li>
  <li>اگر مقدار جدید به مقدار قبلی وابسته است، از <strong>Functional Update</strong> استفاده کنید.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useState مناسب نیست؟</h3>

<ul>
  <li>برای منطق پیچیده state → از <code>useReducer</code> استفاده کنید.</li>
  <li>برای state مشترک بین چند کامپوننت → از <code>useContext</code> استفاده کنید.</li>
  <li>برای داده‌هایی که از props می‌آیند و تغییر نمی‌کنند → نیازی به state نیست.</li>
</ul>

</div>
