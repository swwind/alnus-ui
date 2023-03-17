import { component$ } from "@builder.io/qwik";
import { useServerTime } from "~/routes/layout";

export const Footer = component$(() => {
  const serverTime = useServerTime();

  return (
    <footer class="px-8 py-4 opacity-60">
      Last update: {serverTime.value.time.toLocaleString()}
    </footer>
  );
});
