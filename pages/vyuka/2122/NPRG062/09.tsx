import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 9. cvičení</h1>

<h2 id="počet-jedniček">Úloha ze zkoušky: Určete průměrnou výšku stromu</h2>
<p>Navrhněte efektivní algoritmus, která zjistí průměrnou výšku stromu definovanou jako <code>součet délek všech cest z kořene do listu / počet listů</code>. Délka cesty je počet hran.</p>
<p>Můžete použít <a href="http://www.ms.mff.cuni.cz/~topfermi/vyuka/2122/NPRG030/09/binary_tree_avg_depth.py">šablonu</a>.</p>
<p><img src="09_prumerna_vyska_stromu.png" alt="Podrobnější zadání" className="img-fluid"/></p>

  </>)
}
