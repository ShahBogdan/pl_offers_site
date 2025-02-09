import MainPageShowcase from "./components/offers/MainPageShowcase";
export default function Home() {
  return (
    <div className="  flex flex-col gap-4">
      <div className="container my-5 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-600">Szybka<span className=" mx-2 text-indigo-600">Pożyczka Online</span>2025</h1>
        <p className=" text-xl text-gray-700">Złożenie kilku wniosków zwiększa Twoją szansę na otrzymanie pożyczki</p>
        <MainPageShowcase />
        <div className=" mt-5 text-gray-700 border border-gray-200 p-5 rounded-md bg-gray-50">
          <h3 className=" text-xl my-3">Wymagania dla pożyczkobiorców:</h3>
          <ul>
            <li>Wiek: od 18 do 75 lat</li>
            <li>Stałe miejsce zamieszkania na terenie Polski</li>
          </ul>
          <h3>Warunki uzyskania pożyczki:</h3>
          <p>
            Mikrokredyt można otrzymać na okres od 90 dni do maksymalnie 2 lat (730 dni). Oprocentowanie roczne może wynosić od 0% do maksymalnie 365%. Minimalna kwota pożyczki to 100 zł, natomiast maksymalna sięga 30 000 zł.
          </p>
          <p>
            W przypadku opóźnień w spłacie pożyczki naliczane są kary – około 0,1% wartości pożyczki za każdy dzień zwłoki, przy czym maksymalna kara nie przekracza 10% całkowitej wartości kredytu. Jeśli zaległość nie zostanie uregulowana, informacje o pożyczkobiorcy mogą zostać przekazane do SCB.
          </p>
          <h3 className=" text-xl my-3">Skutki nieterminowej spłaty pożyczki:</h3>
          <p>
            Brak uregulowania należności w uzgodnionym terminie skutkuje naliczeniem kary za opóźnienie. Wierzyciele często przewidują 3 dodatkowe dni robocze na wpłatę, np. w przypadku opóźnień w bankowym przelewie. Jeśli zaległość nie zostanie uregulowana w tym okresie, zacznie obowiązywać kara w wysokości 0,1% pierwotnej kwoty mikropożyczki za każdy dzień zwłoki.
          </p>
          <p>
            Dług może zostać przekazany do rejestru dłużników oraz firmy windykacyjnej. Pożyczkodawca regularnie przypomina o terminach spłaty poprzez SMS lub e-mail. Terminowe regulowanie należności poprawia historię kredytową i zwiększa szanse na uzyskanie pożyczki na korzystniejszych warunkach w przyszłości
          </p>
          <h3 className=" text-xl my-3">Przykład obliczenia całkowitego kosztu mikrokredytu (APR):</h3>
          <p>Załóżmy, że pożyczkobiorca zaciąga mikrokredyt w wysokości 10 000 zł na 90 dni. Oprocentowanie dzienne wynosi 1%, co oznacza, że:</p>
          <ul>
            <li>Roczna stopa procentowa (APR) wynosi 365%.
            </li>
            <li>Koszt odsetek po roku: 36 500 zł (10 000 zł × 365%).
            </li>
            <li>Koszt odsetek za 1 dzień: 100 zł (36 500 zł / 365).
            </li>
            <li>Koszt odsetek za 90 dni: 9 000 zł (100 zł × 90).
            </li>
            <li>Łączna kwota do spłaty po 90 dniach: 19 000 zł (10 000 zł kapitału + 9 000 zł odsetek).
            </li>
          </ul>
          <p>Brak dodatkowych opłat za przelew środków czy przedłużenie terminu kredytowania.</p>
          <h3 className=" text-xl my-3">Minimalny i maksymalny okres spłaty:</h3>
          <ul>
            <li>Minimalny okres: 65 dni.</li>
            <li>Maksymalny okres: 1080 dni.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
