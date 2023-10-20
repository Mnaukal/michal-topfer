import Head from 'next/head'
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 5. cvičení</h1>

<h2 id="rychlejší-eratosthenovo-síto">Rychlejší Eratosthenovo síto</h2>
<p>Vylepšete implementaci algoritmu <a href="../eratosthenes.py">Eratosthenova síta</a> tak, aby seznam <code>is_prime</code> neevidoval sudá čísla.</p>
<h2 id="číselné-soustavy">Číselné soustavy</h2>
<p>Zobecněte funkce <code>bin2int</code> a <code>int2bin</code> z přednášky (můžete využít <a href="../soustavy_bin.py">moji implementaci</a>, kde se jmenují <code>from_base2</code> a <code>to_base2</code>) tak, aby prováděly konverzi z a do libovolné číselné soustavy o základu <InlineMath math="b"/>, kde <InlineMath math="2 \le b \le 16"/>. Pro <InlineMath math="b &gt; 10"/> chybějící cifry reprezentujte písmeny <code>A</code>, <code>B</code>, …, <code>F</code>.</p>
<p>Až to budete mít, můžete váš kód využít pro řešení úlohy <a href="https://recodex.mff.cuni.cz/TODO">Soustavy</a></p>

  </>)
}
