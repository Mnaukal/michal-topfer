import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 7. cvičení</h1>

<h2 id="spojové-seznamy">Spojové seznamy</h2>
<p>Cílem všech úkolů je procvičit si práci se spojovými seznamy. Pro jejich vyřešení tedy nepoužívejte jiné datové struktury (seznamy, apod.). Můžete úpravy provádět destruktivně, tedy přímo měnit prvky původního seznamu.</p>
<p>Pokud není uvedeno jinak, jako jeden ze vstupních parametrů dostanete první prvek seznamu a máte vrátit první prvek upraveného seznamu.</p>
<h3 id="vkládání-do-setřízeného-seznamu">Vkládání do setřízeného seznamu</h3>
<p>Do setřízeného seznamu vložte prvek s hodnotou <InlineMath math="x"/>.</p>
<h3 id="otočení-seznamu">Otočení seznamu</h3>
<p>Otočte spojový seznam.</p>
<h3 id="mazání-prvního-výskytu">Mazání prvního výskytu</h3>
<p>Ze seznamu vymaže prvek s hodnotou <InlineMath math="x"/> (první výskyt), pokud tam je.</p>
<h3 id="mazání-všech-výskytů">Mazání všech výskytů</h3>
<p>Ze seznamu vymaže všechny prvky s hodnotou <InlineMath math="x"/>.</p>
<h3 id="slévání-merge">Slévání (merge)</h3>
<p>Dostanete dva setřízené spojové seznamy. Vraťte seznam, kde jsou všechny prvky obou seznamů a jsou setřízené. (Jako operace <em>merge</em> v merge sortu.)</p>
<h3 id="sudé-a-liché">Sudé a liché</h3>
<p>Rozdělte seznam na dva seznamy. V prvním budou pouze sudé prvky, v druhém pouze liché.</p>
<h3 id="deque">Deque</h3>
<p>Implementujte oboustrannou frontu (deque) pomocí obousměrného spojového seznamu. Operace na oboustranné frontě jsou</p>
<ul>
<li><code>push_back</code> - přidání prvku na konec,</li>
<li><code>push_front</code> - přidání prvku na začátek,</li>
<li><code>pop_back</code> - odebrání prvku z konce,</li>
<li><code>pop_front</code> - odebrání prvku ze začátku,</li>
</ul>
<p>a všechny chceme provádět s konstantní časovou složitostí.</p>
<p><em>K zamyšlení: Proč nám nestačí jednosměrný seznam?</em></p>

<h3 id="reseni">Řešení některých úloh</h3>

<p>Řešení: <a href="../linked_lists.py"><code>linked_lists.py</code></a>.</p>

  </>)
}
