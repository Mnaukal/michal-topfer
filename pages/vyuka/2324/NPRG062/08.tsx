import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 8. cvičení</h1>

<h2 id="cyklicka-fronta-v-poli">Cyklická fronta v poli</h2>
<p>Na přednášce jste viděli implementaci cyklické fronty v poli (<a href="../fronta.py"><code>fronta.py</code></a>).
Pokud dojde k přeplnění kapacity fronty, implementace z přednášky vyvolá výjimku.
Tento problém lze řešit alokací většího pole a (případným) kopírováním uložených hodnot.</p>
<p>Upravte odpovídajícím způsobem implementaci.</p>

<h2 id="operace-nad-haldou">Operace nad haldou</h2>
<p>Na přednášce jste viděli datovou strukturu <em>minimová binární halda</em>, která měla následující operace:</p>
<ul>
<li><code>insert</code> – přidat prvek do haldy,</li>
<li><code>min</code> – vrátit minimální prvek (ale nechat ho v haldě),</li>
<li><code>extract_min</code> – odebrat minimální prvek.</li>
</ul>
<p>Při implementaci v poli měly operace <code>insert</code> a <code>extract_min</code> časovou složitost <InlineMath math="\mathcal{O}(\log n)"/>, kde <InlineMath math="n"/> je počet prvků v haldě. Zjištění minima trvalo jen konstantní čas.</p>
<p>Rozmyslete, jak přidat ještě operace:</p>
<ul>
<li><code>decrase</code> – zmenšení hodnoty prvku v haldě,</li>
<li><code>delete</code> – odstranění libovolného prvku.</li>
</ul>
<p>U obou operací předpokládejte, že máte index daného prvku (tedy jeho pozici v poli, ve kterém je halda uložena) a nemusíte prvek hledat.</p>
<p>Zvládnete obě operace v čase <InlineMath math="\mathcal{O}(\log n)"/>?</p>
<h3 id="nápověda">Nápověda</h3>
<p>Vzpomeňte si, že při implementaci haldy v poli jsme používali ještě dvě pomocné operace. Při vkládání to bylo <code>bubble_up</code> (dokud daný prvek porušuje haldové uspořádání, prohazuj ho s jeho rodičem), při odebírání minima <code>bubble_down</code> (dokud daný prvek porušuje haldové uspořádání, prohazuj ho s menším z jeho synů).</p>


  </>)
}
