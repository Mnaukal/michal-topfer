import Head from "next/head";
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (
    <>
      <Head>
        <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
      </Head>

      <h1>Programování 1 &ndash; 4. cvičení</h1>

<h2 id="refaktoring">Refaktoring</h2>
<p>Soubor <a href="../refaktoring.py"><code>refaktoring.py</code></a> obsahuje kód funkce, která provádí několik operací.
Vaším úkolem je refaktorovat (upravit) tento kód tak, aby byl lépe čitelný a organizovaný.</p>
<ul>
<li>Vhodně pojmenujte proměnné.</li>
<li>Rozdělte program na funkce, abyste dodrželi princip jedné odpovědnosti (funkce by měla dělat jen jednu věc).</li>
<li>Doplňte type hints.</li>
<li>Doplňte vhodný dokumentační komentář.</li>
</ul>
<p>Dále zobecněte kód tak, aby pracoval s libovolnou velikostí vstupního argumentu</p>

<h2 id="funkce-pro-textové-řetězce">Funkce pro textové řetězce</h2>
<ol type="1">
<li><p>Napište funkci <code>contains</code>, která pro zadaný text <code>text</code> a znak <code>char</code> zjistí, jestli <code>text</code> obsahuje znak <code>char</code>.<br />
<em>Ručně napište cyklus, který bude procházet přes znaky textu, nepoužívejte operátor <code>in</code> (pokud ho znáte).</em></p>
<pre className="python"><code dangerouslySetInnerHTML={{__html: `&gt;&gt;&gt; contains(&quot;banana&quot;, &quot;n&quot;)
True
&gt;&gt;&gt; contains(&quot;banana&quot;, &quot;z&quot;)
False`}}></code></pre></li>
<li><p>Napište funkci <code>count</code>, která pro zadaný text <code>text</code> a znak <code>char</code> spočítá, kolikrát se znak <code>char</code> vyskytuje v <code>text</code>u.<br />
<em>Nepoužívejte metodu <a href="https://docs.python.org/3/library/stdtypes.html#str.count"><code>str.count</code></a> ze standardní knihovny.</em></p>
<pre className="python"><code dangerouslySetInnerHTML={{__html: `&gt;&gt;&gt; count(&quot;banana&quot;, &quot;n&quot;)
2`}}></code></pre></li>
<li><p>Napište funkci <code>find</code>, která pro zadaný text <code>text</code> a znak <code>char</code> zjistí, na jaké pozici se znak <code>char</code> poprvé vyskytuje v <code>text</code>u. Pokud se <code>char</code> v <code>text</code>u nevyskytuje, vraťte <code>-1</code>.<br />
<em>Nepoužívejte metodu <a href="https://docs.python.org/3/library/stdtypes.html#str.find"><code>str.find</code></a> ani <a href="https://docs.python.org/3/library/stdtypes.html#str.index"><code>str.index</code></a> ze standardní knihovny.</em></p>
<pre className="python"><code dangerouslySetInnerHTML={{__html: `&gt;&gt;&gt; find(&quot;banana&quot;, &quot;b&quot;)
0
&gt;&gt;&gt; find(&quot;banana&quot;, &quot;n&quot;)
2
&gt;&gt;&gt; find(&quot;banana&quot;, &quot;z&quot;)
-1`}}></code></pre></li>
</ol>

<h2 id="cvičení-na-seznamy">Cvičení na seznamy</h2>
<p>Je dána posloupnost čísel…</p>
<ol type="1">
<li>zjistěte, jestli jsou všechna navzájem různá.</li>
<li>vypište všechna opakující se čísla (ale každé jen jednou).</li>
<li>najděte dvojici s co nejmenším rozdílem.</li>
</ol>
<p>Umíte předchozí úkoly vyřešit efektivněji, pokud víte, ze všechna zadaná čísla leží od <InlineMath math="1"/> do <InlineMath math="100"/>?</p>

<h2 id="bludiste">Bludiště</h2>

V souboru <a href="../maze_broken.py"><code>maze_broken.py</code></a> je kód jednoduché hry, ve které se hráč pohybuje bludištěm. Kód ale obsahuje celou řadu chyb. Najděte je a opravte.

    </>
  );
}
