import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 8. cvičení</h1>

<h2 id="stream">Stream</h2>
<p>Představte si, že chcete společné rozhraní pro vstupně-výstupní komunikaci (pro jednoduchost pouze textovou) – tedy pro objekty, ze kterých jde číst (metoda <code>read</code>) a jde do nich zapisovat (metoda <code>write</code>). Příklady takových objektů jsou třeba soubory (čtení/psaní z/do souboru) nebo síťová komunikace přes TCP/IP (přijímání/posílání zpráv po síti). Společné rozhraní nazveme <code>Stream</code>.</p>
<p>Zkuste tento příklad zapsat v Pythonu za pomoci abstraktní třídy <code>Stream</code> s metodami <code>read</code> (přečte a vrátí textový řetězec) a <code>write</code> (dostane textový řetězec a zapíše ho). Vytvořte několik tříd dědících od <code>Stream</code>, například:</p>
<ul>
<li><code>MemoryStream</code> – stream uložený v paměti,</li>
<li><code>FileStream</code> – čte/píše z/do souboru (cestu nastavíme v konstruktoru),</li>
<li><code>NetworkStream</code> – přijímá/posílá zprávy po síti.</li>
</ul>
<p><strong>Cílem příkladu je jen vyzkoušet si zapsat definice tříd a dědičnosti. Místo skutečné implementace metod <code>read</code> a <code>write</code> v nich jen udělejte <code>print</code> (a vraťte hodnotu správného typu).</strong></p>
<p>Výhodou společného rozhraní pro streamy je, že zbytek programu nemusí vůbec řešit, jestli data dostává od uživatele nebo ze souboru nebo po síti. Zkuste si pak zavolat následující metodu s různými streamy:</p>
<pre className="py"><code dangerouslySetInnerHTML={{__html: `write_data(stream: Stream):
    stream.write(&quot;data&quot;)`}}></code></pre>
<p>Struktura tříd je znázorněna také na následujícím UML diagramu:</p>
<img src="../inheritance_stream.drawio.png" alt="Struktura tříd pro Stream" className='mb-3' height="300px" />
<p><em>Pozn.: Příklad vychází ze třídy <a href="https://learn.microsoft.com/en-us/dotnet/api/system.io.stream"><code>Stream</code></a> v implementaci .NET.</em></p>

  </>)
}
