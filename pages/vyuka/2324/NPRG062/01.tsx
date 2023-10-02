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

<h2 id="hra-s-mincemi">Hra s mincemi</h2>
<p>Na stole leží 15 mincí. Dva hráči se střídají, každý vždy může ze stolu odebrat <strong>jednu</strong>, <strong>dvě</strong>, nebo <strong>tři</strong> mince. Vyhrává ten, kdo odebere poslední minci.</p>
<ol style={{listStyleType: "decimal"}}>
<li><p>Kolik mincí musí v prvním kole odebrat první hráč, aby vždy vyhrál, bez ohledu na strategii protihráče.</p></li>
<li><p>Určete, při jakém počtu mincí na stole vždy vyhraje druhý hráč (v případě, že oba hráči hrají optimální strategii).</p></li>
</ol>

<h2 id="známky">Známky</h2>
<p>Mějme poštovní známky o hodnotách <strong>čtyři</strong> a <strong>pět</strong> korun. Dopis stojí v závislosti
  na jeho váze 12 a více korun (zaokrouhleno na celá čísla). Můžeme pomocí těchto poštovních známek zaplatit dopis o
  libovolné váze?</p>

  </>)
}
