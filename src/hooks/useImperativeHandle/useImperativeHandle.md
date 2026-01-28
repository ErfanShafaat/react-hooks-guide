# useImperativeHandle Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useImperativeHandle?

useImperativeHandle is a React Hook that allows a child component to customize the instance value that is exposed to its parent when using refs.

It lets you control **what methods or properties a parent component can access** through a ref.

In simple terms:  
useImperativeHandle lets a child component **explicitly expose specific functions or values** to its parent.

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useImperativeHandle?

- To prevent parents from accessing the entire DOM or component instance.
- To expose only specific methods (like focus, reset, open, close).
- To create cleaner and safer component APIs.
- To follow better encapsulation principles.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

- A parent creates a ref and passes it to a child.
- The child uses `forwardRef` to receive the ref.
- Inside the child, `useImperativeHandle` defines what the ref exposes.
- The parent can then call only those exposed methods.

React:
- Ignores the default ref behavior.
- Uses the object returned by `useImperativeHandle`.
- Keeps the child in full control of its public API.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- Must be used with `forwardRef`.
- It exposes an object, not JSX or DOM directly.
- Helps enforce component encapsulation.
- Commonly used in reusable UI components.
- Should be used sparingly and intentionally.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useImperativeHandle

- When props can solve the problem.
- For normal parent-child communication.
- As a replacement for state or props.
- When exposing internals is unnecessary.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useImperativeHandle چیست؟</h3>

<p>
<code>useImperativeHandle</code> یک <strong>هوک پیشرفته در React</strong> است که به کامپوننت فرزند اجازه می‌دهد مشخص کند <strong>دقیقاً چه چیزهایی از طریق ref در اختیار کامپوننت والد قرار بگیرد</strong>.
</p>

<p>
این هوک به شما کمک می‌کند دسترسی والد به فرزند را <strong>محدود و کنترل‌شده</strong> نگه دارید.
</p>

<p>
به زبان ساده:  
<strong>useImperativeHandle تعیین می‌کند parent از child فقط به چه متدها یا مقادیری دسترسی داشته باشد.</strong>
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useImperativeHandle استفاده کنیم؟</h3>

<ul>
  <li>برای جلوگیری از دسترسی مستقیم والد به کل DOM فرزند.</li>
  <li>برای اکسپوز کردن متدهای خاص مثل <code>focus</code>، <code>reset</code>، <code>open</code>.</li>
  <li>برای طراحی API تمیز و قابل کنترل برای کامپوننت‌ها.</li>
  <li>برای رعایت اصل encapsulation.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نحوه عملکرد useImperativeHandle (مفهومی)</h3>

<ol>
  <li>کامپوننت والد یک ref می‌سازد.</li>
  <li>ref به کامپوننت فرزند ارسال می‌شود.</li>
  <li>فرزند با <code>forwardRef</code> ref را دریافت می‌کند.</li>
  <li>با <code>useImperativeHandle</code> مشخص می‌کند ref چه چیزی را برگرداند.</li>
  <li>والد فقط به همان متدها دسترسی دارد.</li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نکات کلیدی</h3>

<ul>
  <li>فقط همراه با <code>forwardRef</code> کار می‌کند.</li>
  <li>کنترل کامل API عمومی کامپوننت را به فرزند می‌دهد.</li>
  <li>باعث افزایش امنیت و خوانایی کد می‌شود.</li>
  <li>معمولاً در کامپوننت‌های reusable استفاده می‌شود.</li>
  <li>استفاده بیش از حد از آن توصیه نمی‌شود.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useImperativeHandle مناسب نیست؟</h3>

<ul>
  <li>وقتی props به‌تنهایی کافی هستند.</li>
  <li>برای ارتباط معمول والد و فرزند.</li>
  <li>به‌عنوان جایگزین state یا props.</li>
  <li>وقتی نیازی به اکسپوز کردن متد خاصی نیست.</li>
</ul>

</div>
