import Head from 'next/head'
import Link from "next/link";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 10. cvičení</h1>

<h2 id="buďte-lepší-než-spotify">Buďte lepší než Spotify</h2>
<p>Napište program pro generování playlistů na Spotify. Pomocí argumentů na příkazové řádce se specifikuje zdrojový soubor s údaji o historii přehrávání ve formátu CSV (jako poziční argument) a způsob generování playlistu. Program by měl umět generovat minimálně</p>
<ul>
<li>&quot;top-k&quot; playlist, který obsahuje k nejvíce přehrávaných skladeb,</li>
<li>náhodně generovaný playlist (ideální by bylo, aby pravděpodobnost každé skladby záležela na počtu přehrání).</li>
</ul>
<p>Příklad historie přehrání, na základě kterého můžete generovat, najdete v souboru <a href="http://www.ms.mff.cuni.cz/~topfermi/vyuka/2122/NPRG030/10/scrobbles-mtopfer-2021.csv"><code>scrobbles-mtopfer-2021.csv</code></a> (vygenerováno pomocí <a href="https://www.last.fm/home">Last.fm</a>).</p>
<p>Doporučuji použít knihovny <code>argparse</code>, <code>csv</code>, <code>random</code>.</p>
<p>Příklad vygenerované nápovědy ke skriptu:</p>
<pre className="txt"><code>{`usage: spotify.py [-h] [-t {top,random}] [-s SONGS] [-w] file

Spotify playlist generator.

positional arguments:
  file                  Input CSV file name.

optional arguments:
  -h, --help            show this help message and exit
  -t {top,random}, --type {top,random}
                        Choose "top" for playlist with the most plays or
                        "random" for playlist with random songs.
  -s SONGS, --songs SONGS
                        Number of songs in the playlist.
  -w, --weighted        Use play counts as weights in the random generator.`}</code></pre>
<p><em>Poznámka:</em> Pokud byste při načítání souboru narazili na chybu</p>
<pre className="txt"><code>{`Exception has occurred: UnicodeDecodeError
'charmap' codec can't decode byte 0x98 in position 3539: character maps to <undefined>,`}</code></pre>
<p>zkuste přidat <code>encoding=&quot;utf8&quot;</code> do funkce pro otevření souboru:</p>
<div className="sourceCode"><pre className="sourceCode py"><code className="sourceCode python"><span className="cf">with</span> <span className="bu">open</span>(file_path, encoding<span className="op">=</span><span className="st">&quot;utf8&quot;</span>) <span className="im">as</span> <span className="bu">file</span>:</code></pre></div>

  </>)
}
