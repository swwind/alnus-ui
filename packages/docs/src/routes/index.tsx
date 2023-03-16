import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h2>Hero</h2>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Lithe UI - Tailwind CSS Components",
  meta: [
    {
      name: "description",
      content: "Lithe UI is a lightweight tailwindcss component library.",
    },
  ],
};
