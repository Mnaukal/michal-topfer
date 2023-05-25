import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 1. cvičení</h1>

<h2 id="kuličky">Kuličky</h2>
<p>V nádobě jsou černé a bílé kuličky. Je tam <code>Č</code> černých a <code>B</code> bílých. Kuličky budu z nádoby odebírat následujícím způsobem: Vytáhnu dvě a místo nich jednu jinou vrátím do nádoby:</p>
<pre className="txt"><code>{`Bílá  + Bílá  --> Bílá
Černá + Bílá  --> Černá
Černá + Černá --> Bílá`}</code></pre>
<p>Jakou barvu bude mít poslední kulička co v nádobě zbyde?</p>

<h2 id="cesty-věží-na-šachovnici">Cesty věží na šachovnici</h2>
<p>Máme šachovnici <InlineMath math="8 \times 8"/> a jedno startovní políčko. Hledáme cestu věží ze startovního políčka, která projde všemi políčky šachovnice právě jednou a je uzavřená (skončí na sousedním políčku startovního políčka).</p>
<p>Až cestu najdeme, tak zkusíme určit, jestli cesta existuje i když odebereme jedno rohové políčko šachovnice (např. černé).</p>

<h2 id="známky">Známky</h2>
<p>Mějme poštovní známky o hodnotách <strong>čtyři</strong> a <strong>pět</strong> korun. Dopis stojí v závislosti na jeho váze 12 a více korun (zaokrouhleno na celá čísla). Můžeme pomocí těchto poštovních známek zaplatit dopis o libovolné váze?</p>

  </>)
}
