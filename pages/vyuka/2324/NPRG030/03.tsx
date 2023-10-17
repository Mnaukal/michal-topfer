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

    </>
  );
}
