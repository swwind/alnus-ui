import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { IoContext } from "@qwikest/icons/ionicons";

export const useServerTime = routeLoader$(() => {
  return { time: new Date() };
});

export default component$(() => {
  useContextProvider(IoContext, { variant: "outline" });

  return <Slot />;
});
