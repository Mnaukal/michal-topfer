import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 5. cvičení</h1>

<h2 id="počet-jedniček">Počet jedniček</h2>
<p>Mějme posloupnost <InlineMath math="x_1, \dots, x_n"/>, kde <InlineMath math="x_i \in \{ 0, 1 \}"/>. Dostaneme <InlineMath math="k"/> dotazů tvaru <InlineMath math="(a, b)"/> a máme odpovědět, kolik jedniček je v úseku <InlineMath math="x_a, \dots, x_b"/>.</p>

<h2 id="úsek-se-zadaným-součtem">Úsek se zadaným součtem</h2>
<p>Mějme posloupnost <InlineMath math="x_1, \dots, x_n"/>, kde <InlineMath math="x_i &gt; 0"/>. Najděte souvislý úsek se součtem přesně <InlineMath math="S"/>.</p>
<p><em>Příklad:</em></p>
<p><InlineMath math="5, 3, 6, 3, 1, 2, 4"/>.</p>
<p><InlineMath math="S = 10"/>.</p>
<p>Hledaný úsek může výt třeba <InlineMath math="6, 3, 1"/>.</p>

<h2 id="nejdelší-vyvážený-úsek">Nejdelší vyvážený úsek</h2>
<p>Mějme posloupnost <InlineMath math="x_1, \dots, x_n"/>, kde <InlineMath math="x_i \in \{ -1, 1 \}"/> (můžeme také používat značení <InlineMath math="-, +"/>). Hledáme nejdelší úsek se součtem <InlineMath math="0"/>.</p>
<p><em>Příklad:</em></p>
<p><InlineMath math="+, +, +, -, -, +, +, +, -, +, -, -, +"/>.</p>
<p>Hledaný úsek může výt třeba vše od prvního <InlineMath math="-"/> do konce.</p>

  </>)
}
