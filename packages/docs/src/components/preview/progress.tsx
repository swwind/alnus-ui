export default () => (
  <div
    class="progress"
    style="--value:30"
    onClick$={(_, elem) => {
      elem.setAttribute("style", `--value:${Math.random() * 100}`);
    }}
  />
);
