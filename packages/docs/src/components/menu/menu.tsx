import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { IoCode, IoCodeSlash, IoDownload } from "@qwikest/icons/ionicons";

const MENU = [
  {
    text: "Instructions",
    items: [
      {
        text: "Installation",
        icon: <IoDownload />,
        href: "/docs/instruction/install",
      },
    ],
  },
  {
    text: "Components",
    items: [
      {
        text: "Button",
        icon: <IoCodeSlash />,
        href: "/docs/components/button",
      },
      {
        text: "Checkbox",
        icon: <IoCodeSlash />,
        href: "/docs/components/checkbox",
      },
      {
        text: "Radio",
        icon: <IoCodeSlash />,
        href: "/docs/components/radio",
      },
      {
        text: "Input",
        icon: <IoCodeSlash />,
        href: "/docs/components/input",
      },
      {
        text: "Menu",
        icon: <IoCodeSlash />,
        href: "/docs/components/menu",
      },
      {
        text: "Switch",
        icon: <IoCodeSlash />,
        href: "/docs/components/switch",
      },
      {
        text: "Nav",
        icon: <IoCodeSlash />,
        href: "/docs/components/nav",
      },
      {
        text: "Progress",
        icon: <IoCodeSlash />,
        href: "/docs/components/progress",
      },
      {
        text: "Toggle",
        icon: <IoCodeSlash />,
        href: "/docs/components/toggle",
      },
      {
        text: "Tabs",
        icon: <IoCodeSlash />,
        href: "/docs/components/tabs",
      },
      {
        text: "Popover",
        icon: <IoCodeSlash />,
        href: "/docs/components/popover",
      },
      {
        text: "Modal",
        icon: <IoCodeSlash />,
        href: "/docs/components/modal",
      },
      {
        text: "Drawer",
        icon: <IoCodeSlash />,
        href: "/docs/components/drawer",
      },
    ],
  },
];

export const Menu = component$(() => {
  const loc = useLocation();

  return (
    <div class="space-y-4">
      {MENU.map((menu, index) => (
        <div class="nav" key={index}>
          <h3 class="nav-title">{menu.text}</h3>
          {menu.items.map((item, index) => (
            <div class="space-y-1">
              <Link
                class={["nav-item", { active: loc.url.pathname === item.href }]}
                href={item.href}
                key={index}
              >
                {item.icon}
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});
