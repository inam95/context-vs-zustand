# React State Management Comparison: Context API vs Zustand

In this repo, there are two apps:

- [Context App](./apps/context-app): A simple app that uses the Context API to manage the state.
- [Zustand App](./apps/zustand-app): A simple app that uses Zustand to manage the state.

Both app has functionality with a **theme toggle**, and a **tasks list** to demonstrate the state management.

Both app have two routes:
Context App:

- [Home](./apps/context-app/src/app/page.tsx)
- [Tasks](./apps/context-app/src/app/tasks/page.tsx)

Zustand App:

- [Home](./apps/zustand-app/src/app/page.tsx)
- [Tasks](./apps/zustand-app/src/app/tasks/page.tsx)

To run the apps, run the following command:

```bash
pnpm dev:all
```
