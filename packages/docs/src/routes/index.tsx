import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { IoDocument } from "@qwikest/icons/ionicons";
import { Header } from "~/components/header/header";
import { LogoGithub } from "~/components/icon/ionicons";

export default component$(() => {
  return (
    <div>
      <Header />
      <div class="px-8 py-48 md:px-16">
        <h1 class="text-6xl font-extrabold">
          Alnus UI
          <br />
          Designed for
          <br />
          Instant Development
        </h1>
        <p class="my-8 space-x-4">
          <Link class="btn" href="/docs">
            <IoDocument class="h-4 w-4" />
            Documents
          </Link>
          <Link
            class="btn btn-subtle"
            href="https://github.com/swwind/alnus-ui"
            target="_blank"
          >
            <LogoGithub class="h-4 w-4" />
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Alnus UI - Tailwind CSS Components",
  meta: [
    {
      name: "description",
      content: "Alnus UI is a lightweight tailwindcss component library.",
    },
  ],
};
