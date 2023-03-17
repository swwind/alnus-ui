import { Link } from "@builder.io/qwik-city";
import { IoApps } from "@qwikest/icons/ionicons";
import { LogoGithub } from "../icon/ionicons";

export const Header = () => {
  return (
    <header class="sticky top-0 z-[5] flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-8 py-4 dark:border-slate-700 dark:bg-slate-900">
      <div class="inline-flex gap-2">
        <form action="https://google.com/search" method="GET">
          <input class="input" name="q" type="text" placeholder="Search..." />
        </form>
      </div>
      <div class="inline-flex gap-2">
        <Link href="/docs" class="btn btn-ghost">
          <IoApps class="h-4 w-4" />
          Components
        </Link>
        <Link href="https://github.com/swwind/alnus-ui" class="btn btn-ghost">
          <LogoGithub class="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
};
