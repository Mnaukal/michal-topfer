import Head from 'next/head'
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 3. cvičení</h1>

<h2 id="složitost-mathcalo">Složitost (<InlineMath math="\mathcal{O}"/>)</h2>
<h3 id="definice">Definice</h3>
<p>Nechť <InlineMath math="f, g: \mathbb{N} \to \mathbb{R}^+"/>.</p>
<ul>
<li><InlineMath math="f \in \mathcal{O}(g) \iff \exists c &gt; 0, \exists n_0 \in \mathbb{N}: \forall n &gt; n_0: f(n) \leq c \cdot g(n)"/>.</li>
<li><InlineMath math="f \in \mathcal{\Omega}(g) \iff \exists d &gt; 0, \exists m_0 \in \mathbb{N}: \forall m &gt; m_0: f(m) \geq d \cdot g(m)"/>.</li>
<li><InlineMath math="f \in \mathcal{\Theta}(g) \iff f \in \mathcal{O}(g) \wedge f \in \mathcal{\Omega}(g)"/>.</li>
</ul>
<h3 id="úlohy">Úlohy</h3>
<p>Nechť <InlineMath math="f, g: \mathbb{N} \to \mathbb{R}^+"/>. Dokažte nebo vyvraťte tato tvrzení:</p>
<ol style={{listStyleType: "decimal"}}>
<li><InlineMath math="n^2 \in \mathcal{O}(n^3)"/>,</li>
<li><InlineMath math="n^3 \in \mathcal{O}(n^2)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies g \in \mathcal{O}(f)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \implies g \in \mathcal{\Omega}(f)"/>,</li>
<li><InlineMath math="f \in \mathcal{O}(g) \vee g \in \mathcal{O}(f)"/>.</li>
</ol>

<p><a href="../slozitost.pdf">Vzorová řešení</a>.</p>

  </>)
}
