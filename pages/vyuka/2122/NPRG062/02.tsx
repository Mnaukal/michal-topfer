import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 2. cvičení</h1>

<h2 id="hra-s-mincemi">Hra s mincemi</h2>
<p>Na stole leží 15 mincí. Dva hráči se střídají, každý vždy může ze stolu odebrat <strong>jednu</strong>, <strong>dvě</strong>, nebo <strong>tři</strong> mince. Vyhrává ten, kdo odebere poslední minci.</p>
<ol style={{listStyleType: "decimal"}}>
<li><p>Kolik mincí musí v prvním kole odebrat první hráč, aby vždy vyhrál, bez ohledu na strategii protihráče.</p></li>
<li><p>Určete, při jakém počtu mincí na stole vždy vyhraje druhý hráč (v případě, že oba hráči hrají optimální strategii).</p></li>
</ol>

<h2 id="složitost-mathcalo">Složitost (<InlineMath math="\mathcal{O}"/>)</h2>
<h3 id="definice">Definice</h3>
<p>Nechť <InlineMath math="f, g: \mathbb{N} \to \mathbb{R}^+"/>.</p>
<ul>
<li><InlineMath math="f \in \mathcal{O}(g) \iff \exists c &gt; 0, \exists n_0: \forall n &gt; n_0: f(n) \leq c \cdot g(n)"/>.</li>
<li><InlineMath math="f \in \mathcal{\Omega}(g) \iff \exists c &gt; 0, \exists n_0: \forall n &gt; n_0: f(n) \geq c \cdot g(n)"/>.</li>
<li><InlineMath math="f \in \mathcal{\Theta}(g) \iff f \in \mathcal{O}(g) \wedge f \in \mathcal{\Omega}(g)"/>.</li>
</ul>
<h3 id="úlohy">Úlohy</h3>
<p>Nechť <InlineMath math="f, g: \mathbb{N} \to \mathbb{R}^+"/>. Dokažte nebo vyvraťte tato tvrzení:</p>
<ol style={{listStyleType: "decimal"}}>
<li><InlineMath math="n^2 \in \mathcal{O}(n^3)"/>,</li>
<li><InlineMath math="n^3 \in \mathcal{O}(n^2)"/></li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies g \in \mathcal{O}(f)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies g \in \mathcal{\Omega}(f)"/>,</li>
<li><InlineMath math="f \in \mathcal{\Theta}(g) \implies g \in \mathcal{O}(f)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies \frac1f \in \mathcal{O}(g)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies \frac1f \in \mathcal{O}\left(\frac1g\right)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \vee g \in \mathcal{O}(f)"/>,</li>
<li><InlineMath math="f_1 \in \mathcal{O}(g) \wedge f_2 \in \mathcal{O}(g) \implies f_1 + f_2 \in \mathcal{O}(g)"/>.</li>
</ol>

<p><a href="02-Složitost.pdf">Moje poznámky</a> (ne úplně vzorové řešení, ale všechny hlavní myšlenky by tam měly být).</p>

  </>)
}
