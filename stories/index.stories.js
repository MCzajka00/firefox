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

export const Header = () => `<div class="container">
<header class="box box--header">
  <a href="/" class="logo">
    <img src="./dist/images/logo.svg" alt="Mozilla logo" />
  </a>
  <nav class="nav">
    <a href="#" class="nav__item">Firefox</a>
    <a href="#" class="nav__item">Projekty</a>
    <a href="#" class="nav__item">Deweloperzy</a>
    <a href="#" class="nav__item">O nas</a>
  </nav>
  <a href="" class="download">Pobierz&nbsp;Firefoxa</a>
</header>
</div>`;

export const MainHeader = () => `<main class="main__header">
<section class="box__firefox">
  <div class="firefox">
    <section class="firefox__place">
      <img
        class="firefox__logo"
        src="./dist/images/firefox.svg"
        alt="Firefox logo"
      />
    </section>
    <a href="#" class="title">Szybki, już na dobre.</a><br />
    <a href="#" class="desc"
      >Dwa razy szybszy, z wbudowaną ochroną prywatności i Mozillą go
      wspierającą, nowy Firefox to lepszy sposób na przeglądanie.</a
    ><br />
    <a href="#" class="firefox__download">Pobierz&nbsp;Firefoxa</a
    ><br />
    <a href="#" class="privacy">Zasady ochrony prywatności Firefoxa</a>
  </div>
  <!-- <div class="screen__img">
    <img src="./dist/images/screen.png" alt="Screen image" />
  </div> -->
</section>
</main>`;

export const SafetyBox = () => `<main class="box__main box--main">
<section class="safe__net">
  <div class="dino">
    <img src="./dist/images/dino.svg" alt="Dinosaur image" />
  </div>
  <div class="safe__text">
    <span class="hdl"
      >Sprawiamy, że Internet jest bezpieczniejszy, zdrowszy i szybszy
      już na dobre.</span
    ><br />
    <span class="txt"
      >Mozilla to organizacja non-profit wspierająca Firefoxa,
      oryginalną alternatywną przeglądarkę. Tworzymy produkty i zasady
      służące użytkownikom Internetu, nie zyskom.</span
    ><br />
  </div>
</section>
</main>`;

export const TextBox = () => `<main class="box__main box--main">
<section class="box__text">
  <div class="box__goals">
    <h2 class="box__ttl">Nasze cele</h2>
    <p class="box__desc">
      Kiedy używasz Firefoksa, pomagasz Mozilli walczyć z dezinformacją
      w Internecie, promować umiejętności cyfrowe i budować szacunek w
      komentarzach. Zobacz, co pomaga tworzyć zdrowszy Internet.
    </p>
    <ul>
      <li>
        <a href="#" class="box__link"
          >Inicjatywa budowania zaufania do informacji</a
        >
      </li>
      <li>
        <a href="#" class="box__link"
          >Wzmacnianie pozycji kobiet w Internecie</a
        >
      </li>
      <li>
        <a href="#" class="box__link">Projekt Coral</a>
      </li>
      <li>
        <a href="#" class="box__link"
          >Przeczytaj „Raport o zdrowiu Internetu”</a
        >
      </li>
    </ul>
  </div>
  <div class="box__innov">
    <h2 class="box__ttl">Nasze innowacje</h2>
    <p class="box__desc">
      Używając Internetu jako platformy, budujemy otwarte, innowacyjne
      technologie umożliwiające deweloperom pracę bez zamkniętych,
      firmowych systemów i tworzenie szybszych, bezpieczniejszych stron
      dla nas wszystkich.
    </p>
    <ul>
      <li>
        <a href="#" class="box__link">Common Voice</a>
      </li>
      <li>
        <a href="#" class="box__link"
          >Platforma rzeczywistości wirtualnej</a
        >
      </li>
      <li>
        <a href="#" class="box__link">Servo</a>
      </li>
      <li>
        <a href="#" class="box__link">Rust</a>
      </li>
    </ul>
  </div>
</section>
</main>`;

export const PictoBox = () => `<main class="box__main box--main">
<section class="box__picto">
<div class="box__piece">
  <img
    class="picto__enlarg"
    src="./dist/images/picto.png"
    alt="Enlargement picture"
  />
  <a href="#" class="picto__title">
    <h2>Rozszerzenia</h2>
  </a>
  <span class="picto__desc"
    >Dostosuj Firefoksa do własnych upodobań za pomocą swoich
    ulubionych dodatków, takich jak menedżery haseł, blokowanie reklam
    i nie tylko.</span
  >
</div>
<div class="box__piece">
  <img
    class="picto__work"
    src="./dist/images/picto.png"
    alt="Work picture"
  />
  <a href="#" class="picto__title">
    <h2>Praca</h2>
  </a>
  <span class="picto__desc"
    >Dowiedz się więcej o korzyściach płynących z pracy w Mozilli i
    zapoznaj się z aktualnymi ofertami pracy z całego świata.</span
  >
</div>
<div class="box__piece">
  <img
    class="picto__help"
    src="./dist/images/picto.png"
    alt="Help picture"
  />
  <a href="#" class="picto__title">
    <h2>Potrzebujesz pomocy?</h2>
  </a>
  <span class="picto__desc"
    >Odpowiedzi na pytania dotyczące Firefoksa i wszystkich produktów
    Mozilli znajdziesz w naszym centrum wsparcia.</span
  >
</div>
</section>
</main>`;

export const FormBox = () => `<main class="box__main box--main">
<section class="box__form">
<div class="form__place place__img">
  <img
    class="form__img"
    src="./dist/images/newsletter.png"
    alt="Newsletter image"
  />
</div>
<div class="form__place place__newsletter">
  <h3 class="form__title">Otrzymuj wiadomości o&nbsp;Firefoksie</h3>
  <br />
  <label for="email" class="form__email">Adres e-mail</label><br />
  <input
    class="form__input"
    type="text"
    placeholder="e-mail@example.com"
  /><br />
  <a href="#" class="form__btn">Sign up now</a><br />
  <span class="form__note">
    Przesyłane będą wyłącznie informacje związane z Firefoksem.</span
  ><br />
</div>
</section>
</main>`;
