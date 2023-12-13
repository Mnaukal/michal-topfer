import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 6. cvičení</h1>

    <h2 id="přehled-základních-knihoven-v-pythonu">Přehled základních knihoven v Pythonu</h2>
    <p>Přehled všech standardních knihoven je <a href="https://docs.python.org/3/library/index.html">v dokumentaci Pythonu</a>. My si ukážeme jen několik z nich:</p>
<ul>
<li><code>sys</code>
<ul>
<li>Přístup k interpretu Pythonu (např. čtení argumentů z příkazové řádky, vypisování na chybový výstup).</li>
<li><a href="https://docs.python.org/3/library/sys.html">dokumentace</a></li>
<li><a href="../sys_.py">příklad použití</a></li>
</ul></li>
<li><code>enum</code>
<ul>
<li>Definice výčtových datových typů – když máme nějakou předem známou množinu možných hodnot.</li>
<li><a href="https://docs.python.org/3/library/enum.html">dokumentace</a></li>
<li><a href="../enum_.py">příklad použití</a></li>
</ul></li>
<li><code>logging</code>
<ul>
<li>Informační a ladící výpisy.</li>
<li><a href="https://docs.python.org/3/library/logging.html">dokumentace</a></li>
<li><a href="../logging_.py">příklad použití</a></li>
</ul></li>
<li><code>argparse</code>
<ul>
<li>Zpracování argumentů z příkazové řádky.</li>
<li><a href="https://docs.python.org/3/library/argparse.html">dokumentace</a></li>
<li><a href="../argparse_.py">příklad použití</a></li>
</ul></li>
<li><code>os</code>
<ul>
<li>Rozhraní k operačnímu systému (např. vytváření složek, přesouvání souborů, spouštění příkazů).</li>
<li><a href="https://docs.python.org/3/library/os.html">dokumentace</a></li>
<li><a href="../os_.py">příklad použití</a></li>
</ul></li>
<li><code>pathlib</code>
<ul>
<li>Reprezentace cest k souborům a složkám a práce s nimi.</li>
<li><a href="https://docs.python.org/3/library/pathlib.html">dokumentace</a></li>
<li><a href="../pathlib_.py">příklad použití</a></li>
</ul></li>
<li><code>random</code>
<ul>
<li>Generování náhodných čísel.</li>
<li><a href="https://docs.python.org/3/library/random.html">dokumentace</a></li>
<li><a href="../random_.py">příklad použití</a></li>
</ul></li>
<li><code>csv</code>
<ul>
<li>Čtení a zápis formátu <a href="https://cs.wikipedia.org/wiki/CSV">CSV</a> (comma-separated values).</li>
<li><a href="https://docs.python.org/3/library/csv.html">dokumentace</a></li>
<li><a href="../csvread.py">příklad čtení</a> (stáhněte si taky <a href="../sample.csv"><code>sample.csv</code></a>)</li>
<li><a href="../csvwrite.py">příklad zápisu</a></li>
</ul></li>
<li><code>json</code>
<ul>
<li>Čtení a zápis formátu <a href="https://www.json.org/json-en.html">JSON</a> (JavaScript Object Notation).</li>
<li><a href="https://docs.python.org/3/library/json.html">dokumentace</a></li>
<li><a href="../jsonread.py">příklad čtení</a> (stáhněte si taky <a href="../sample.json"><code>sample.json</code></a>)</li>
<li><a href="../jsonwrite.py">příklad zápisu</a></li>
</ul></li>
</ul>


<h2 id="cvičení-na-použití-knihoven">Cvičení na použití knihoven</h2>
<h3 id="ladění-pomocí-logování">Ladění pomocí logování</h3>
<p>Program <a href="../average_grade.py"><code>average_grade.py</code></a> by měl počítat průměrnou známku několika studentů zaokrouhlenou na dvě desetinná místa. Bohužel, v programu je několik chyb. Vaším úkolem je chyby najít a odstranit. Využijte při tom záznamy z logování – když program spustíte, uloží se logy do souboru <code>average_grade.log</code>. Pak můžete logy v souboru projít a najít v nich chyby, které při běhu programu nastaly.</p>
<h3 id="existence-souboru">Existence souboru</h3>
<p>Pomocí knihoven <a href="https://docs.python.org/3/library/argparse.html"><code>argparse</code></a> a <a href="https://docs.python.org/3/library/pathlib.html"><code>pathlib</code></a> vytvořte program, který bude ověřovat existenci souboru.</p>
<p>Program dostane cestu k souboru jako svůj poziční argument na příkazové řádce. Výstupem by mělo být <code>True</code> nebo <code>False</code> podle toho, jestli daný soubor existuje.</p>
<h4 id="příklady">Příklady</h4>
<p>Předpokládejme, že váš program se jmenuje <code>file_exists.py</code> a že existuje soubor jménem <code>soubor</code>.</p>
<ul>
<li>Při spuštění příkazu <code>python file_exists.py soubor</code> by program měl vypsat <code>True</code> (soubor existuje).</li>
<li>Při spuštění příkazu <code>python file_exists.py neexistujici_soubor</code> by program měl vypsat <code>False</code> (soubor neexistuje).</li>
<li>Při spuštění příkazu <code>python file_exists.py</code> by program měl vypsat chybovou hlášku, že nebyla specifikována cesta k souboru (to <code>argparse</code> udělá za vás).</li>
</ul>
<h4 id="bonus-soubory-a-složky">🦉 <em>Bonus:</em> Soubory a složky</h4>
<p>Doplňte do programu další dva volitelné argumenty (options). Pokud je nastaven option <code>-f</code>, program ověřuje, že zadaná cesta existuje a je to soubor (ne složka). Pokud je nastaven option <code>-d</code>, program ověřuje, že zadaná cesta existuje a je to složka (ne soubor). Pokud jsou nastaveny oba optiony, program vypíše chybu, že nejde použít oba optiony najednou.</p>
<p>Předpokládejme, že váš program se jmenuje <code>file_exists.py</code> a že existuje soubor jménem <code>soubor</code> a složka jménem <code>slozka</code>.</p>
<ul>
<li>Při spuštění příkazu <code>python file_exists.py soubor</code> by program měl vypsat <code>True</code> (soubor existuje).</li>
<li>Při spuštění příkazu <code>python file_exists.py -f soubor</code> by program měl vypsat <code>True</code> (soubor existuje).</li>
<li>Při spuštění příkazu <code>python file_exists.py soubor -f</code> by program měl vypsat <code>True</code> (na pořadí argumentů nezáleží – to za vás řeší <code>argparse</code>).</li>
<li>Při spuštění příkazu <code>python file_exists.py -d soubor</code> by program měl vypsat <code>False</code> (soubor není složka).</li>
<li>Při spuštění příkazu <code>python file_exists.py -d slozka</code> by program měl vypsat <code>True</code> (složka existuje).</li>
<li>Při spuštění příkazu <code>python file_exists.py -f -d slozka</code> by program měl vypsat chybu (nejde použít oba optiony současně).</li>
</ul>
<h3 id="načtení-seznamu-osob-z-csv">Načtení seznamu osob z CSV</h3>
<p>V souboru <code>lide.csv</code> je seznam jmen, e-mailů a telefonů několika lidí ve formátu CSV. Pomocí knihovny <a href="https://docs.python.org/3/library/csv.html"><code>csv</code></a> načtěte data ze souboru a vypište je v následujícím formátu:</p>
<pre className="txt"><code dangerouslySetInnerHTML={{__html: `Osoba: &lt;name&gt; &lt;surname&gt;
  E-mail: &lt;email&gt;
  Telefon: &lt;phone&gt;`}}></code></pre>
<p>Například pro soubor <code>lide.csv</code>:</p>
<pre className="txt"><code dangerouslySetInnerHTML={{__html: `name,surname,email,phone
Michal,Töpfer,topfer@d3s.mff.cuni.cz,123456789
Tomáš,Holan,holan@ksvi.mff.cuni.cz,111222333`}}></code></pre>
<p>vypište</p>
<pre className="txt"><code dangerouslySetInnerHTML={{__html: `Osoba: Michal Töpfer
  E-mail: topfer@d3s.mff.cuni.cz
  Telefon: 123456789
Osoba: Tomáš Holan
  E-mail: holan@ksvi.mff.cuni.cz
  Telefon: 111222333`}}></code></pre>
<h3 id="caesarova-šifra">Caesarova šifra</h3>
<p>Doplňte řešení úlohy <a href="https://recodex.mff.cuni.cz/app/assignment/e4cf6fd2-c071-4e43-ae8d-034f441767ca">Caesarova šifra textu – soubor</a> o načítání argumentů z příkazové řádky (pomocí knihovny <a href="https://docs.python.org/3/library/argparse.html"><code>argparse</code></a>):</p>
<ul>
<li><code>-f</code> – vstupní soubor,</li>
<li><code>-o</code> – výstupní soubor,</li>
<li><code>-k</code> – hodnota klíče (posunu).</li>
</ul>
<p>Program se pak spustí třeba takto: <code>python caesar.py -f in.txt -o out.txt -k 3</code>.</p>
<h3 id="generování-náhodných-csv-souborů-podle-json-konfigurace">Generování náhodných CSV souborů podle JSON konfigurace</h3>
<p>Na základě konfigurace uložené v JSON souboru <code>config.json</code> vygenerujte CSV soubor <code>random.csvý</code> s náhodnými hodnotami. Použijte knihovny <a href="https://docs.python.org/3/library/json.html"><code>json</code></a>, <a href="https://docs.python.org/3/library/csv.html"><code>csv</code></a> a <a href="https://docs.python.org/3/library/random.html"><code>random</code></a>.</p>
<p>Konfigurace obsahuje položky <code>&quot;rows&quot;</code> a <code>&quot;columns&quot;</code>. Položka <code>&quot;rows&quot;</code> je celé číslo udávající, kolik řádků máte vygenerovat. Položka <code>&quot;columns&quot;</code> obsahuje seznam konfigurací sloupců. Každý sloupec má jméno (<code>&quot;name&quot;</code>) a typ (<code>&quot;type&quot;</code>). Pokud je typ <code>&quot;number&quot;</code>, obsahuje konfigurace sloupce navíc hodnoty <code>&quot;low&quot;</code> a <code>&quot;high&quot;</code> a vaším cílem je generovat náhodné číslo z tohoto rozsahu. Pokud je typ <code>&quot;choices&quot;</code>, obsahuje definice sloupce navíc seznam <code>&quot;choices&quot;</code> a vaším cílem je generovat náhodnou položku ze seznamu.</p>
<p><em>Příklad konfigurace:</em></p>
<pre className="json"><code dangerouslySetInnerHTML={{__html: `{
  &quot;rows&quot;: 5,
  &quot;columns&quot;: [{
    &quot;name&quot;: &quot;kostka&quot;,
    &quot;type&quot;: &quot;number&quot;,
    &quot;low&quot;: 1,
    &quot;high&quot;: 6
  },{
    &quot;name&quot;: &quot;mince&quot;,
    &quot;type&quot;: &quot;choices&quot;,
    &quot;choices&quot;: [&quot;panna&quot;, &quot;orel&quot;]
  }]
}`}}></code></pre>
<p>Vaším cílem je vygenerovat CSV soubor o daném počtu řádků, přičemž hodnota buňky je vždy náhodně vygenerovaná podle konfigurace daného sloupce. Nezapomeňte do CSV souboru napsat jména sloupců jako hlavičku.</p>
<p>Například pro konfiguraci výše (<code>config.json</code>) je možný výstup (<code>random.csv</code>) následovný:</p>
<pre className="csv"><code dangerouslySetInnerHTML={{__html: `kostka,mince
3,orel
1,orel
3,panna
5,orel
6,panna`}}></code></pre>


  </>)
}
