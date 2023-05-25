import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG031 – Programování 2 – Michal Töpfer</title>
    </Head>

    <h1>Programování 2 &ndash; 1. cvičení</h1>

    <p>Úlohy k procvičení. Doporučuju zkusit si minimálně úlohy 6, 8 a 12.</p>

    <h2 id="vstup-a-výstup">Vstup a výstup</h2>

    <ol>
      <li>Napište program, který se uživatele zeptá na jméno a pak ho pozdraví s oslovením (nemusíte skloňovat, stačí <code>Hello, Michal!</code> nebo <code>Ahoj, Michal!</code>).</li>
      <li>Napište program, který prohodí hodnoty ve dvou proměnných.</li>
    </ol>

    <h2 id="cykly">Cykly</h2>
    <ol start={3}>
      <li>Vypište čísla od 1 do <code>N</code>, která nejsou dělitelná 3.</li>
      <li>Sečtěte čísla od 1 do <code>N</code>.</li>
      <li>Upravte program, aby sčítal jen násobky 3 a 5. Např. pro <code>N=17</code> je správný výsledek <code>60</code>.</li>
      <li><b>Spočtěte aritmetický průměr čísel zadaných<ol type="a">
        <li>na jednotlivých řádcích, ukončených prázdným řádkem;</li>
        <li>na jednom řádku (oddělených mezerou).</li>
      </ol></b></li>
      <li>Najděte maximum z pole čísel.</li>
      <li><b>Najděte pozice všech největších prvků v poli.</b></li>
      <li>Najděte druhé největší číslo v poli.</li>
      <li>Vypište příštích 20 přestupných let.</li>
    </ol>

    <h2 id="funkce">Funkce</h2>
    <ol start={11}>
      <li>Napište funkci, která vrací maximum ze svých dvou celočíselných argumentů.</li>
      <li><b>Napište funkci <code>Compare</code>, která dostane dvě čísla <code>a</code>, <code>b</code> a vrací <code>1</code> pro <code>a &gt; b</code>, <code>0</code> pro <code>a == b</code> a <code>-1</code> pro <code>a &lt; b</code>.</b> <em>Místo <code>1</code> a <code>-1</code> se dají použít libovolná kladná a záporná čísla. To je standardní způsob, jak se v C# udává výsledek porovnání (více <a href="https://docs.microsoft.com/en-us/dotnet/api/system.comparison-1?view=net-6.0#return-value">zde</a>).</em></li>
      <li>Napište funkci <code>IsEven(n)</code>, která přijme celé číslo jako argument a vrací <code>true</code>, je-li číslo sudé, a <code>false</code>, je-li liché.</li>
      <li>Nyní napište funkci <code>IsOdd(n)</code>, která vrací <code>true</code>, je-li <code>n</code> liché a <code>false</code>, je-li sudé. Využijte funkci <code>IsEven</code>.</li>
      <li>Napište funkci, která počítá ciferný součet čísla.</li>
      <li>Napište funkci, která dostane číslo (v desítkové soustavě) a vypíše ho ve dvojkové soustavě.</li>
    </ol>

  </>)
}
