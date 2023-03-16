import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";

import { IoCloud, IoContext } from "@qwikest/icons/ionicons";

export default component$(() => {
  const { menu } = useContent();
  const loc = useLocation();

  useContextProvider(IoContext, { variant: "outline" });

  return (
    <div class="flex w-full flex-row">
      <div class="sticky top-0 h-screen w-64 shrink-0 self-start overflow-auto">
        <div class="px-8 py-6">
          <h2 class="text-2xl font-semibold">{menu?.text}</h2>
        </div>
        <div class="space-y-4">
          {menu?.items?.map((sub, index) => (
            <div class="nav" key={index}>
              <h3 class="nav-title">{sub.text}</h3>
              <div class="space-y-1">
                {sub.items?.map((item, index) => (
                  <Link
                    class={[
                      "nav-item",
                      { active: loc.url.pathname === item.href },
                    ]}
                    href={item.href}
                    key={index}
                  >
                    <IoCloud class="h-4 w-4" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <article class="prose flex-1 shrink p-8">
        <Slot />
      </article>
    </div>
  );
});
