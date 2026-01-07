# React useEffect Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useEffect?

`useEffect` is a **React Hook** that allows you to perform **side effects** in functional components.

Side effects are operations that happen **outside the normal rendering flow**, such as:
- Fetching data
- Manipulating the DOM
- Subscribing to events
- Timers and intervals

Before Hooks, these behaviors were handled using lifecycle methods in class components.

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useEffect?

- To run logic after a component renders
- To synchronize a component with external systems
- To replace lifecycle methods like:
  - `componentDidMount`
  - `componentDidUpdate`
  - `componentWillUnmount`

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

1. React renders the component.
2. After rendering, React runs the effect function.
3. Depending on the dependency list:
   - The effect may run once
   - On every render
   - Or only when specific values change
4. If a cleanup function is provided, React runs it before the effect runs again or when the component unmounts.

<hr style="border: 1px solid #a0c4ff;"/>

### Dependency Array (Concept)

- No dependency array → effect runs after **every render**
- Empty dependency array → effect runs **once on mount**
- With dependencies → effect runs **only when dependencies change**

The dependency array allows React to control **when the effect should re-run**.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- Effects run **after rendering**, not during render.
- Side effects should never be placed directly inside the component body.
- Cleanup functions are essential for avoiding memory leaks.
- Effects should be focused and handle one responsibility.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useEffect

- For pure calculations → use regular JavaScript logic.
- For derived state → compute it during render.
- For complex state transitions → consider `useReducer`.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useEffect چیست؟</h3>

<p>
`useEffect` یک <strong>هوک در React</strong> است که برای انجام <strong>Side Effect</strong>‌ها در کامپوننت‌های فانکشنی استفاده می‌شود.
</p>

<p>
Side Effect به عملیاتی گفته می‌شود که خارج از فرآیند معمول render انجام می‌شود، مانند:
</p>

<ul>
  <li>دریافت داده از API</li>
  <li>کار با DOM</li>
  <li>ثبت event listener</li>
  <li>استفاده از timer یا interval</li>
</ul>

<p>
قبل از معرفی هوک‌ها، این رفتارها در کامپوننت‌های کلاس با lifecycle methodها مدیریت می‌شدند.
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useEffect استفاده می‌کنیم؟</h3>

<ul>
  <li>اجرای منطق بعد از render شدن کامپوننت</li>
  <li>همگام‌سازی کامپوننت با منابع خارجی</li>
  <li>جایگزین lifecycle methodهای کلاس مانند mount و update و unmount</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">عملکرد useEffect (به‌صورت مفهومی)</h3>

<ol>
  <li>React کامپوننت را render می‌کند.</li>
  <li>پس از render، تابع effect اجرا می‌شود.</li>
  <li>بسته به dependency array:
    <ul>
      <li>یا فقط یک بار اجرا می‌شود</li>
      <li>یا بعد از هر render</li>
      <li>یا فقط هنگام تغییر مقادیر مشخص</li>
    </ul>
  </li>
  <li>اگر cleanup تعریف شده باشد، قبل از اجرای مجدد یا هنگام unmount اجرا می‌شود.</li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">Dependency Array چیست؟</h3>

<ul>
  <li>بدون dependency → اجرا بعد از هر render</li>
  <li>dependency خالی → اجرا فقط یک بار (mount)</li>
  <li>با dependency → اجرا فقط هنگام تغییر مقادیر مشخص</li>
</ul>

<p>
Dependency array به React می‌گوید <strong>چه زمانی effect دوباره اجرا شود</strong>.
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #7c4b02ff;">نکات کلیدی</h3>

<ul>
  <li>Effectها بعد از render اجرا می‌شوند، نه هنگام render.</li>
  <li>Side Effect نباید مستقیماً داخل بدنه کامپوننت نوشته شود.</li>
  <li>Cleanup برای جلوگیری از memory leak بسیار مهم است.</li>
  <li>هر effect بهتر است فقط یک مسئولیت داشته باشد.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useEffect مناسب نیست؟</h3>

<ul>
  <li>برای محاسبات ساده → منطق معمول JavaScript کافی است.</li>
  <li>برای state مشتق‌شده → محاسبه در render بهتر است.</li>
  <li>برای منطق پیچیده state → از <code>useReducer</code> استفاده کنید.</li>
</ul>

</div>
