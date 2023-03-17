import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/header/header";

import { Menu } from "~/components/menu/menu";

export default component$(() => {
  return (
    <div class="flex w-full flex-row">
      <div class="sticky top-0 h-screen w-64 shrink-0 self-start overflow-auto border-r border-slate-200 dark:border-slate-700">
        <div class="px-8 py-6">
          <h2 class="text-2xl font-semibold">Alnus UI</h2>
        </div>
        <Menu />
      </div>
      <div class="min-w-0 flex-1">
        <Header />
        <article class="prose max-w-4xl p-8">
          <Slot />
        </article>
      </div>
    </div>
  );
});
