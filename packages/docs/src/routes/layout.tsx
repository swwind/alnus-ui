import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { IoContext } from "@qwikest/icons/ionicons";

export default component$(() => {
  useContextProvider(IoContext, { variant: "outline" });

  return <Slot />;
});
