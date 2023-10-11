import Head from "next/head";
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (
    <>
      <Head>
        <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
      </Head>

      <h1>Programování 1 &ndash; 3. cvičení</h1>

<h2 id="funkce-cvičení">Funkce – cvičení</h2>
<p>Napište následující funkce. Zkuste doplnit i typové anotace parametrů a návratové hodnoty.</p>
<ul>
<li>Napište funkci <code>compare(a, b)</code>, která vrací <code>1</code> pro <code>a &gt; b</code>, <code>0</code> pro <code>a == b</code> a <code>-1</code> pro <code>a &lt; b</code>.</li>
<li>Napište funkci <code>is_even(number)</code>, která přijme celé číslo jako argument a vrací <code>True</code>, je-li číslo sudé, a <code>False</code>, je-li liché.</li>
<li>Nyní napište funkci <code>is_odd(number)</code>, která vrací <code>True</code>, je-li <code>n</code> liché a <code>False</code>, je-li sudé. Využijte funkci <code>is_even</code>.</li>
<li>Napište funkci, která počítá ciferný součet čísla.</li>
</ul>


<h2 id="odhad-pi-metodou-monte-carlo">Odhad <span style={{textTransform: "none"}}><InlineMath math="\pi"/></span> Metodou Monte Carlo</h2>
<p>Vytvořte program, který odhadne hodnotu <InlineMath math="\pi"/> pomocí metody Monte Carlo.</p>
<p>Mějme čtverec s vrcholy <InlineMath math="(0, 0), (0, 1), (1, 1), (1, 0)"/> a v něm čtvrt kruhu se středem <InlineMath math="(0, 0)"/> a poloměrem <InlineMath math="1"/>.
Obsah čtvrtkruhu je <InlineMath math="S_1 = \frac{\pi \cdot 1^2}{4} = \frac{\pi}{4}"/>, obsah čtverce je <InlineMath math="S_2 = 1^2 = 1"/>.
Z poměru obsahů vyjádříme <InlineMath math="\pi = 4 \cdot \frac{S_1}{S_2}"/>.</p>
<p>Nyní využijeme metodu Monte Carlo k odhadu obsahů. Budeme náhodně generovat body ve čtverci a počítat, kolik z nich padne dovnitř čtvrtkruhu. Počet bodů ve čtvrtkruhu dělený celkovým počtem vygenerovaných bodů nám dá odhad poměru obsahů <InlineMath math="\frac{S_1}{S_2}"/>.</p>
<p><em>Nápovědy:</em></p>
<ul>
<li>Pro vygenerování náhodného čísla z rozsahu <InlineMath math="[0, 1]"/> použijte <code>random.uniform(0, 1)</code> (na začátek souboru musíte napsat <code>import random</code>, abyste knihovnu <code>random</code> mohli používat).</li>
<li>Pro výpočet vygenerujte <InlineMath math="100\,000"/> bodů.</li>
<li>Pro zjištění, jestli je bod uvnitř kruhu, můžete pomocí Pythagorovy věty spočítat jeho vzdálenost od středu kruhu a porovnat ji s poloměrem.</li>
</ul>
<p>Více o metodě Monte Carlo najdete třeba na <a href="https://cs.wikipedia.org/wiki/Metoda_Monte_Carlo#Buffonova_jehla_a_v%C3%BDpo%C4%8Det_hodnoty_%CF%80">Wikipedii</a> (je tam i řešení v Pythonu, tak na něj zkuste nekoukat a psát kód sami).</p>

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

    </>
  );
}
