# useActionState Hook

## English Explanation

<div style="font-family: 'Arial', sans-serif; background-color: #f0f8ff; padding: 20px; border-radius: 10px; line-height: 1.7; color: #333;">

### What is useActionState?

useActionState is a React Hook introduced for handling **state updates that are triggered by actions**, especially in **forms and server actions**.

It helps manage the state of an action (such as form submission), including the returned result and pending state.

In simple terms:  
**useActionState connects user actions to state updates in a structured and predictable way.**

<hr style="border: 1px solid #a0c4ff;"/>

### Why use useActionState?

- To manage form submission state more cleanly.
- To handle async actions without manually managing loading or result state.
- To integrate smoothly with React Server Actions.
- To reduce boilerplate when handling action-based state updates.

<hr style="border: 1px solid #a0c4ff;"/>

### How it works (Conceptually)

You provide:
- An action function.
- An initial state.

React:
- Calls the action when triggered.
- Passes the previous state to the action.
- Updates the state with the returned value.
- Tracks whether the action is currently pending.

<hr style="border: 1px solid #a0c4ff;"/>

### Key Points

- useActionState returns an array:  
  **[state, action, isPending]**
- The action can be async or sync.
- It is especially useful for form handling.
- It works naturally with server actions.
- It simplifies loading and result state management.

<hr style="border: 1px solid #a0c4ff;"/>

### When Not to Use useActionState

- For simple local state updates.
- When useState or useReducer is sufficient.
- When no action-based workflow exists.
- For purely UI-related state.

</div>

---

## توضیح فارسی

<div dir="rtl" style="font-family: 'Tahoma', sans-serif; background-color: #fdf6f0; padding: 20px; border-radius: 10px; line-height: 1.8; color: #333;">

### useActionState چیست؟

<code>useActionState</code> یک **هوک جدید در React** است که برای **مدیریت stateهایی که توسط یک action تغییر می‌کنند** استفاده می‌شود؛  
به‌خصوص در **ارسال فرم‌ها** و **Server Actions**.

این هوک کمک می‌کند نتیجه‌ی action، وضعیت در حال اجرا بودن (pending) و state نهایی را به شکل استاندارد مدیریت کنید.

به زبان ساده:  
**useActionState پلی بین action کاربر و state برنامه است.**

<hr style="border: 1px solid #f0c27b;"/>

### چرا از useActionState استفاده کنیم؟

- برای مدیریت تمیز state ارسال فرم.
- برای حذف stateهای اضافی مثل loading و result.
- برای هماهنگی بهتر با Server Actionها.
- برای کاهش boilerplate در کدهای async.

<hr style="border: 1px solid #f0c27b;"/>

### نحوه عملکرد useActionState (مفهومی)

1. یک تابع action تعریف می‌کنید.
2. یک state اولیه مشخص می‌کنید.
3. React:
   - action را هنگام اجرا صدا می‌زند
   - state قبلی را به آن می‌دهد
   - مقدار برگشتی را به‌عنوان state جدید ذخیره می‌کند
   - مشخص می‌کند action در حال اجرا هست یا نه

<hr style="border: 1px solid #f0c27b;"/>

### نکات کلیدی

- useActionState سه مقدار برمی‌گرداند:
  - state
  - action
  - isPending
- action می‌تواند async باشد.
- برای فرم‌ها و عملیات وابسته به کاربر بسیار مناسب است.
- جایگزین بهتری برای مدیریت دستی loading است.
- خوانایی و ساختار کد را بهتر می‌کند.

<hr style="border: 1px solid #f0c27b;"/>

### چه زمانی useActionState مناسب نیست؟

- برای stateهای ساده UI.
- وقتی useState کافی است.
- در نبود action مشخص.
- برای مدیریت layout یا animation.

</div>
