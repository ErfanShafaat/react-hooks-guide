# useOptimistic

---

## English Explanation
<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useOptimistic?

`useOptimistic` is a React Hook for **optimistic UI updates**, often used in server-driven state management (like React Server Actions or Remix).  

It allows you to **update the UI immediately** as if the change succeeded, while the actual server update happens asynchronously.  

In simple terms:  
`useOptimistic` lets your UI react instantly without waiting for the server response, improving perceived performance.

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useOptimistic?

- To make UI feel **faster and more responsive**.  
- To handle **temporary state** while awaiting server confirmation.  
- To reduce visual lag in applications with slow network requests.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

1. You provide an initial state value.  
2. You provide a **reducer function** that defines how the optimistic state updates.  
3. React:  
   - Updates the UI immediately when you trigger a change.  
   - Later, reconciles with the server result.  

This allows your UI to be **reactive and smooth**, even if the server response is delayed.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- `useOptimistic` returns an array: `[state, updateFunction]`.  
- The **update function** applies the optimistic change using the reducer.  
- Useful for actions like **liking a post, toggling a switch, adding/removing items**.  
- Can be combined with normal server state to **rollback if the operation fails**.  
- Optimistic updates **improve UX**, but do not replace actual server validation.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useOptimistic

- For static data that doesn’t change.  
- When the server update is **instant and reliable**.  
- For critical actions where **optimistic failures are unacceptable**.  

</div>

---

## توضیح فارسی
<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

### useOptimistic چیست؟

`useOptimistic` یک **هوک React برای بروزرسانی UI به صورت خوش‌بینانه (optimistic)** است که معمولاً در مدیریت state سمت سرور (مثل React Server Actions یا Remix) استفاده می‌شود.  

این هوک اجازه می‌دهد **UI فوراً تغییر کند** گویی که عملیات موفقیت‌آمیز بوده، در حالی که بروزرسانی واقعی سرور به صورت ناهمزمان انجام می‌شود.  

به زبان ساده:  
`useOptimistic` باعث می‌شود UI بدون انتظار برای پاسخ سرور سریع و واکنش‌گرا باشد.

<hr style="border: 1px solid #f0c27b;"/>

### چرا از useOptimistic استفاده کنیم؟

- برای اینکه UI **سریع‌تر و پاسخگوتر** به نظر برسد.  
- برای مدیریت **state موقت** در هنگام انتظار برای تایید سرور.  
- برای کاهش لگ و تاخیر در اپلیکیشن‌هایی با شبکه کند.

<hr style="border: 1px solid #f0c27b;"/>

### عملکرد useOptimistic (به طور مفهومی)

1. یک مقدار اولیه برای state مشخص می‌کنید.  
2. یک **تابع reducer** تعریف می‌کنید که نحوه بروزرسانی state خوش‌بینانه را مشخص می‌کند.  
3. React:  
   - وقتی تغییر را اجرا می‌کنید، UI فوراً آپدیت می‌شود.  
   - بعداً، نتیجه واقعی سرور با UI **هماهنگ می‌شود**.  

این باعث می‌شود UI **روان و واکنش‌گرا** باشد، حتی اگر پاسخ سرور با تأخیر بیاید.

<hr style="border: 1px solid #f0c27b;"/>

### نکات کلیدی

- `useOptimistic` یک آرایه برمی‌گرداند: `[state, updateFunction]`.  
- **تابع بروزرسانی** تغییر خوش‌بینانه را با reducer اعمال می‌کند.  
- برای عملیاتی مثل **لایک کردن پست، تغییر سوئیچ، افزودن/حذف آیتم** کاربرد دارد.  
- می‌توان با state واقعی سرور ترکیب کرد تا **در صورت شکست عملیات rollback شود**.  
- بروزرسانی‌های خوش‌بینانه UX را بهبود می‌بخشند، اما جایگزین **اعتبارسنجی سرور** نیستند.

<hr style="border: 1px solid #f0c27b;"/>

### چه زمانی useOptimistic مناسب نیست؟

- برای داده‌های **ساکن و تغییرناپذیر**.  
- وقتی بروزرسانی سرور **فوری و مطمئن** است.  
- برای عملیاتی که شکست آن **قابل قبول نیست**.

</div>
