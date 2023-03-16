import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="not-prose mt-6 mb-4 flex flex-wrap items-center justify-center gap-4 rounded-md border border-slate-200 p-8 dark:border-slate-700 dark:bg-slate-800">
      <Slot />
    </div>
  );
});
