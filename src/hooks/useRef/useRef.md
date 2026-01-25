# React useRef Hook  
## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useRef?

useRef is a Hook in React that allows you to create a **mutable reference** that persists across renders.

It is commonly used to:
- Access DOM elements directly
- Store mutable values that do not cause re-renders when changed

In simple terms:  
**useRef gives you a box that can hold a value without triggering a re-render.**

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useRef?

- To access and interact with DOM elements (e.g. inputs, buttons).
- To store values that should persist between renders.
- To avoid unnecessary re-renders when updating a value.
- To keep previous values or instance-like variables.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

- You call `useRef(initialValue)`.
- React returns an object with a single property: `current`.
- The value of `current`:
  - Persists across renders
  - Can be mutated directly
  - Does NOT trigger a re-render when changed

<hr style="border: 1px solid #a0c4ff;"/>

### useRef and Controlled vs Uncontrolled Components

In React, form elements can be either **controlled** or **uncontrolled**.

#### Controlled Components
- Form data is managed by React state (`useState`).
- Every change causes a re-render.
- Suitable when you need validation, live UI updates, or strict control.

#### Uncontrolled Components
- Form data is managed by the DOM itself.
- Values are accessed using `useRef`.
- No re-render on input change.

**useRef is commonly used with uncontrolled components** to read values directly from the DOM when needed.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- `useRef` returns an object with a `.current` property.
- Updating `.current` does **not** cause a re-render.
- It is ideal for DOM access and mutable values.
- The same ref object is kept between renders.
- It is different from `useState`.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useRef

- When changes should update the UI.
- As a replacement for state.
- When you need reactive rendering behavior.
- For values that affect what the user sees.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

### useRef چیست؟

<code>useRef</code> یکی از هوک‌های React است که به شما اجازه می‌دهد یک **مرجع (reference) قابل تغییر** بسازید که بین renderها حفظ می‌شود.

این هوک معمولاً برای:
- دسترسی مستقیم به DOM
- ذخیره مقادیری که تغییرشان نباید باعث re-render شود

استفاده می‌شود.

به زبان ساده:  
**useRef مثل یک جعبه است که مقدار داخلش عوض می‌شود ولی کامپوننت دوباره render نمی‌شود.**

<hr style="border: 1px solid #f0c27b;"/>

### چرا از useRef استفاده کنیم؟

<ul>
  <li>برای دسترسی مستقیم به المنت‌های DOM مثل input یا button.</li>
  <li>برای نگه‌داری مقادیر بین renderها.</li>
  <li>برای جلوگیری از re-render غیرضروری.</li>
  <li>برای ذخیره مقدار قبلی یا متغیرهای شبیه instance.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

### ارتباط useRef با Controlled و Uncontrolled Components

در React دو نوع کامپوننت فرمی داریم:

#### 🟢 Controlled Component
- مقدار input توسط state مدیریت می‌شود (`useState`)
- با هر تغییر، کامپوننت re-render می‌شود
- مناسب اعتبارسنجی و کنترل کامل UI

#### 🔵 Uncontrolled Component
- مقدار input توسط خود DOM مدیریت می‌شود
- برای دسترسی به مقدار از `useRef` استفاده می‌کنیم
- تغییر مقدار باعث re-render نمی‌شود

✅ **useRef ابزار اصلی کار با Uncontrolled Components است**

<hr style="border: 1px solid #f0c27b;"/>

### عملکرد useRef (به طور مفهومی)

<ol>
  <li>با <code>useRef(initialValue)</code> یک ref می‌سازید.</li>
  <li>React یک آبجکت با پراپرتی <code>current</code> برمی‌گرداند.</li>
  <li>مقدار <code>current</code>:
    <ul>
      <li>بین renderها حفظ می‌شود</li>
      <li>می‌تواند مستقیماً تغییر کند</li>
      <li>باعث re-render نمی‌شود</li>
    </ul>
  </li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

### نکات کلیدی

<ul>
  <li><code>useRef</code> یک آبجکت با پراپرتی <code>current</code> برمی‌گرداند.</li>
  <li>تغییر <code>current</code> باعث re-render نمی‌شود.</li>
  <li>برای Uncontrolled Component و DOM بسیار مناسب است.</li>
  <li>در هر render همان ref قبلی حفظ می‌شود.</li>
  <li>برای UI reactive بهتر است از <code>useState</code> استفاده شود.</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

### چه زمانی useRef مناسب نیست؟

<ul>
  <li>وقتی تغییر مقدار باید UI را به‌روز کند.</li>
  <li>به عنوان جایگزین state.</li>
  <li>برای داده‌هایی که باید reactive باشند.</li>
  <li>برای مدیریت منطق اصلی اپلیکیشن.</li>
</ul>

</div>
