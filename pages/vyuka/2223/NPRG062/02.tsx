import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 2. cvičení</h1>

<h2 id="cesty-věží-na-šachovnici">Cesty věží na šachovnici</h2>
<p>Máme šachovnici <span className="math inline">8 \times 8</span> a jedno startovní políčko. Hledáme cestu věží ze
  startovního políčka, která projde všemi políčky šachovnice právě jednou a je uzavřená (skončí na sousedním políčku
  startovního políčka).</p>
<p>Až cestu najdeme, tak zkusíme určit, jestli cesta existuje i když odebereme jedno rohové políčko šachovnice
  (např. černé).</p>

<h2 id="známky">Známky</h2>
<p>Mějme poštovní známky o hodnotách <strong>čtyři</strong> a <strong>pět</strong> korun. Dopis stojí v závislosti
  na jeho váze 12 a více korun (zaokrouhleno na celá čísla). Můžeme pomocí těchto poštovních známek zaplatit dopis o
  libovolné váze?</p>

<h2 id="vážení-kuliček">Vážení kuliček</h2>
<p>Máme 7 stejně vypadajících zlatých koulí, ale jedna z nich je vadná. Je totiž vyrobená z kočičího zlata a tedy je
  lehčí než ty ostatní. Naším úkolem je tuto vadnou kouli najít.</p>
<p>Máme k dispozici rovnoramenné váhy, kde na každou misku můžeme dát několik koulí najednou a váhy nám řeknou,
  která miska je lehčí. Pokud jsou obě misky stejně těžké, váhy zůstanou stát.</p>
<p>Jelikož nechceme váhy zbytečně opotřebit, tak <strong>hledáme způsob jak najít vadnou kouli na co nejmenší počet
  vážení</strong>.</p>

  </>)
}
