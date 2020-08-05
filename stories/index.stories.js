import "../dist/styles/main.css";

export default {
  title: "Firefox",
};

export const HdlPrimary = () =>
  '<h1 class="hdl-primary">Example Headline Level 1</h1>';

export const InputRange = () => '<input class="range" type="range" />';

export const Button = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Hello Button";
  btn.addEventListener("click", (e) => console.log(e));
  return btn;
};

export const Subscription = () => `<div>
<form class="subscription" action="" method="post">
  <label class="subscription__hdl" for="subscription"
    >Zapisz się do spamu</label
  >
  <input type="text" class="subscription__input" id="subscription" />
  <button class="subscription__submit btn-default" type="submit">
    Wyślij
  </button>
</form>
</div>`;

export const SubscriptionVertical = () => `<div>
<form class="subscription--vertical" action="" method="post">
  <label class="subscription__hdl" for="subscription"
    >Zapisz się do spamu</label
  >
  <input type="text" class="subscription__input" id="subscription" />
  <button class="subscription__submit btn-default" type="submit">
    Wyślij
  </button>
</form>
</div>`;
