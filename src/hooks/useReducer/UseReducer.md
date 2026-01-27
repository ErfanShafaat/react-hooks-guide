# useReducer Hook in React

---

## English Explanation

### What is useReducer?

`useReducer` is a state management Hook in React that is used to manage complex state logic in a predictable and structured way.

It is an alternative to `useState`, especially useful when state logic involves multiple sub-values or complex transitions.

**In simple terms:**  
`useReducer` manages state using actions and a reducer function, similar to Redux.

---

### Why use useReducer?

- To manage complex state transitions more clearly  
- To avoid deeply nested or confusing `useState` logic  
- To make state updates predictable and centralized  
- To follow a structured pattern (action → reducer → new state)

---

### How it works (Conceptually)

1. You define a **reducer function** that decides how state changes.
2. You define an **initial state**.
3. React provides:
   - The current state
   - A `dispatch` function to send actions
4. When you dispatch an action:
   - React sends the current state and action to the reducer
   - The reducer returns a new state
   - React updates the component with the new state

---

### Key Points

- `useReducer` returns an array: `[state, dispatch]`
- State updates are based on **actions**, not direct mutations
- The reducer function must be **pure** (no side effects)
- Ideal for state with multiple related values
- Improves readability and maintainability in complex components

---

### When Not to Use useReducer

- For simple state like toggles or basic counters
- When `useState` is enough and clearer
- For very small components with minimal logic
- If it adds unnecessary complexity

---

## توضیح فارسی

### useReducer چیست؟

`useReducer` یک **هوک مدیریت state در React** است که برای کنترل **stateهای پیچیده** استفاده می‌شود.

این هوک جایگزینی برای `useState` است، مخصوصاً زمانی که منطق تغییر state پیچیده، چندمرحله‌ای یا وابسته به actionهای مختلف باشد.

**به زبان ساده:**  
`useReducer` state را با استفاده از action و یک reducer مدیریت می‌کند، مشابه Redux.

---

### چرا از useReducer استفاده کنیم؟

- مدیریت واضح‌تر stateهای پیچیده
- جلوگیری از منطق شلوغ با چندین `useState`
- قابل پیش‌بینی بودن تغییرات state
- متمرکز شدن منطق تغییر state در یک مکان

---

### عملکرد useReducer (به طور مفهومی)

1. یک تابع **reducer** تعریف می‌کنید که مشخص می‌کند state چگونه تغییر کند.
2. یک **state اولیه (initialState)** مشخص می‌کنید.
3. React به شما می‌دهد:
   - state فعلی
   - تابع `dispatch` برای ارسال action
4. وقتی `dispatch` صدا زده می‌شود:
   - state فعلی و action به reducer ارسال می‌شود
   - reducer یک state جدید برمی‌گرداند
   - React کامپوننت را با state جدید render می‌کند

---

### نکات کلیدی

- `useReducer` یک آرایه شامل **state و dispatch** برمی‌گرداند
- تغییر state فقط از طریق **action** انجام می‌شود
- تابع reducer باید **pure** باشد (بدون side effect)
- برای stateهایی با چند مقدار مرتبط بسیار مناسب است
- خوانایی و نگهداری کد را در پروژه‌های بزرگ بهتر می‌کند

---

### چه زمانی useReducer مناسب نیست؟

- برای stateهای ساده مثل boolean یا counter ساده
- وقتی `useState` واضح‌تر و کافی است
- در کامپوننت‌های خیلی کوچک
- زمانی که فقط باعث پیچیده‌تر شدن کد می‌شود
