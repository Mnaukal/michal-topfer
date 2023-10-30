import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 5. cvičení</h1>

<h2 id="frekvenční-analýza">Frekvenční analýza</h2>
<p>Pro zadaný text spočtěte, kolikrát se v něm vyskytuje který znak. Počty výskytů uložte do slovníku (<code>dict</code>).</p>
<p>Až budete mít četnosti znaků spočítané, vypište znaky a jejich počty od toho nejčastějšího.</p>
<h3 id="příklad">Příklad</h3>
<p>Pro vstupní text <code>mississippi</code> vypište:</p>
<pre className="txt"><code dangerouslySetInnerHTML={{__html: `i: 4
s: 4
p: 2
m: 1`}}></code></pre>
<h3 id="bonus-frekvenční-analýza-na-slovech">🦉 <em>Bonus:</em> Frekvenční analýza na slovech</h3>
<p>Předělejte úlohu na frekvenční analýzu, aby místo znaků pracovala se slovy v textu.</p>
<p>Zamyslete se, jak je vhodné upravit vstupní text (velikost písmen, odstranění interpunkce, …).</p>

<h2 id="soubory">Soubory</h2>
<ul>
<li><a href="https://recodex.mff.cuni.cz/app/assignment/ec47ae2a-c3fd-42da-bb5a-5d496c8a3422">Kopie deseti řádků souboru</a></li>
<li><a href="https://recodex.mff.cuni.cz/app/assignment/c2496475-6f0e-4f06-8cc9-dd55c87c9bd6">Kopie souboru po 20 znacích</a></li>
<li><a href="https://recodex.mff.cuni.cz/app/assignment/e4cf6fd2-c071-4e43-ae8d-034f441767ca">Caesarova šifra textu – soubor</a></li>
</ul>

  </>)
}
