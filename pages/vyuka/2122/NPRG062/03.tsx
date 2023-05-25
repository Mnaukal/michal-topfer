import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 3. cvičení</h1>

<h2 id="vážení-kuliček">Vážení kuliček</h2>
<p>Máme 7 stejně vypadajících zlatých koulí, ale jedna z nich je vadná. Je totiž vyrobená z kočičího zlata a tedy je lehčí než ty ostatní. Naším úkolem je tuto vadnou kouli najít.</p>
<p>Máme k dispozici rovnoramenné váhy, kde na každou misku můžeme dát několik koulí najednou a váhy nám řeknou, která miska je lehčí. Pokud jsou obě misky stejně těžké, váhy zůstanou stát.</p>
<p>Jelikož nechceme váhy zbytečně opotřebit, tak <strong>hledáme způsob jak najít vadnou kouli na co nejmenší počet vážení</strong>.</p>

  </>)
}
