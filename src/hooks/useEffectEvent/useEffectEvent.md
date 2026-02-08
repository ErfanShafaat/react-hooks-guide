# useEffectEvent Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useEffectEvent?

`useEffectEvent` is an **experimental React Hook** designed to help you separate **event logic** from **effect logic**.

It allows you to create a stable event handler that:
- Always has access to the **latest props and state**
- Does **not** need to be added to the dependency array of `useEffect`

In simple terms:  
**useEffectEvent lets you read the latest values without re-running effects.**

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useEffectEvent?

- To avoid unnecessary re-runs of `useEffect`
- To fix common dependency problems in effects
- To prevent stale closures
- To write cleaner and more predictable effects

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

- You define an event function using `useEffectEvent`
- This function always sees the latest state and props
- You can safely call it inside `useEffect`
- The event function itself is **not reactive**
- Effects re-run only when *you explicitly want them to*

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- `useEffectEvent` returns a **function**
- The returned function is stable between renders
- It always uses the latest values
- It should NOT be included in dependency arrays
- It helps avoid over-declaring dependencies

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useEffectEvent

- For simple effects with no dependency issues
- As a replacement for state management
- Outside of React experimental versions
- When `useEffect` dependencies are already correct

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

<h3 style="color: #b36b00;">useEffectEvent چیست؟</h3>

<p>
useEffectEvent یک <strong>هوک آزمایشی (Experimental) در React</strong> است که برای جدا کردن
<strong>منطق رویداد (Event Logic)</strong> از
<strong>منطق Effect</strong> استفاده می‌شود.
</p>

<p>
این هوک به شما اجازه می‌دهد تابعی بسازید که:
</p>

<ul>
<li>همیشه به <strong>جدیدترین state و props</strong> دسترسی دارد</li>
<li>نیازی به اضافه شدن به dependency array ندارد</li>
</ul>

<p>
به زبان ساده:
<strong>useEffectEvent کمک می‌کند بدون اجرای دوباره effect، به مقادیر جدید دسترسی داشته باشید.</strong>
</p>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چرا از useEffectEvent استفاده کنیم؟</h3>

<ul>
<li>جلوگیری از اجرای غیرضروری useEffect</li>
<li>حل مشکل dependencyهای زیاد یا اشتباه</li>
<li>جلوگیری از stale closure</li>
<li>تمیزتر و قابل‌پیش‌بینی‌تر شدن کد</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نحوه عملکرد (مفهومی)</h3>

<ol>
<li>یک تابع با useEffectEvent تعریف می‌کنید</li>
<li>این تابع همیشه آخرین state و props را می‌بیند</li>
<li>می‌توانید آن را داخل useEffect صدا بزنید</li>
<li>خود تابع باعث re-run شدن effect نمی‌شود</li>
<li>effect فقط وقتی اجرا می‌شود که خودتان تعیین کرده‌اید</li>
</ol>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">نکات کلیدی</h3>

<ul>
<li>useEffectEvent یک <strong>تابع</strong> برمی‌گرداند</li>
<li>این تابع بین renderها پایدار است</li>
<li>همیشه جدیدترین مقادیر را استفاده می‌کند</li>
<li>نباید داخل dependency array قرار بگیرد</li>
<li>از over-dependency جلوگیری می‌کند</li>
</ul>

<hr style="border: 1px solid #f0c27b;"/>

<h3 style="color: #b36b00;">چه زمانی useEffectEvent مناسب نیست؟</h3>

<ul>
<li>برای effectهای ساده و بدون مشکل dependency</li>
<li>به‌عنوان جایگزین مدیریت state</li>
<li>در پروژه‌های production بدون نسخه experimental</li>
<li>وقتی useEffect شما dependency درست دارد</li>
</ul>

</div>
