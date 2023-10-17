import Head from 'next/head'
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 4. cvičení</h1>

<h2 id="složitost-mathcalo">Složitost (<InlineMath math="\mathcal{O}"/>)</h2>
<p>Nechť <InlineMath math="f, f_1, f_2, g: \mathbb{N} \to \mathbb{R}^+"/>. Dokažte nebo vyvraťte tato tvrzení:</p>
<ol type="1">
<li><InlineMath math="f \in \mathcal{O}(g) \implies \frac1f \in \mathcal{O}\left(\frac1g\right)"/>,</li>
<li><InlineMath math="f_1 \in \mathcal{O}(g) \wedge f_2 \in \mathcal{O}(g) \implies f_1 + f_2 \in \mathcal{O}(g)"/>.</li>
</ol>

  </>)
}
