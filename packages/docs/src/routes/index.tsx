import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h2>Hero</h2>
      <Link href="/docs/">Docs</Link>
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
