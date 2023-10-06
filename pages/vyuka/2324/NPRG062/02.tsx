import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 2. cvičení</h1>

<h2 id="nejtěžší-mince">Nejtěžší mince</h2>
<p>Mějme <InlineMath math="N"/> různě těžkých mincí. K dispozici máme rovnoramenné váhy, na kterých můžeme porovnat dvě mince a zjistit, která z nich je těžší.</p>
<ol type="1">
<li>Navrhněte algoritmus, který na co nejméně vážení najde <strong>nejtěžší</strong> minci. Kolik vážení na to potřebujeme? Zdůvodněte, že na méně vážení to nejde.</li>
<li>Navrhněte algoritmus, který na co nejméně vážení najde <strong>nejtěžší</strong> i <strong>nejlehčí</strong> minci. Kolik vážení na to potřebujeme?</li>
<li>🦉 <em>Bonus:</em> Navrhněte algoritmus, který na co nejméně vážení najde <strong>druhou nejtěžší</strong> minci. Kolik vážení na to potřebujeme?</li>
</ol>

<h2 id="cesty-věží-na-šachovnici">Cesty věží na šachovnici</h2>
<p>Máme šachovnici <InlineMath math="8 \times 8"/> a jedno startovní políčko. Hledáme cestu věží ze startovního políčka, která projde všemi políčky šachovnice právě jednou a je uzavřená (skončí na sousedním políčku startovního políčka).</p>
<p>Až cestu najdeme, tak zkusíme určit, jestli cesta existuje i když odebereme jedno rohové políčko šachovnice (např. černé).</p>

<h2 id="vážení-kuliček">Vážení kuliček</h2>
<p>Máme 7 stejně vypadajících zlatých koulí, ale jedna z nich je vadná. Je totiž vyrobená z kočičího zlata a tedy je
  lehčí než ty ostatní. Naším úkolem je tuto vadnou kouli najít.</p>
<p>Máme k dispozici rovnoramenné váhy, kde na každou misku můžeme dát několik koulí najednou a váhy nám řeknou,
  která miska je lehčí. Pokud jsou obě misky stejně těžké, váhy zůstanou stát.</p>
<p>Jelikož nechceme váhy zbytečně opotřebit, tak <strong>hledáme způsob jak najít vadnou kouli na co nejmenší počet
  vážení</strong>.</p>

  </>)
}
