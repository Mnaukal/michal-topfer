import Head from 'next/head'
import Link from "next/link";
import { CardBorderPrimary, CardDark } from "@/components/cards";
import Lab, { LabProps } from "@/components/vyuka/Lab";


function LabLink(lab: JSX.Element) {
  const props: LabProps = lab.props;
  const [day, month] = Lab.splitDate(props.date);
  const id = Lab.id(day, month);
  return <Link key={props.order} href={`#${props.date}`} scroll={false} className="me-2">
    {day}. {month}. ({props.order})
  </Link>;
}

export default function CourseIndex() {
  const labs = [
    <Lab key="1" order="1" date="4.10.">
      <p>Algoritmizace: <a href="NPRG062/01.php">úložky</a> &ndash; Největší číslo, Kuličky, Cesty věží na šachovnici, Známky.</p>
      <p>Programování: základy &ndash; operátory, proměnné, vstup, výstup, podmínky (<a href="01/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="2" order="2" date="11.10.">
      <p>Algoritmizace: <a href="NPRG062/02.php">úložky, {"$\\mathcal{O}$"} (složitost)</a>.</p>
      <p>Programování: <i>celou hodinu jsme dělali algoritmizaci</i>.</p>
    </Lab>,
    <Lab key="3" order="3" date="18.10.">
      <p>Algoritmizace: <a href="NPRG062/03.php">Vážení kuliček</a>.</p>
      <p>Programování: cykly, funkce, seznamy, textové řetězce (<a href="03/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="4" order="4" date="25.10.">
      <p>Algoritmizace: binární vyhledávání (<a href="NPRG062/04.php">Házení vajíček</a>), zásobník.</p>
      <p>Programování: seznamy (comprehensions), slovník (dict), objekty (<a href="04/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="5" order="5" date="1.11.">
      <p>Algoritmizace: halda (str. 84 v <a href="https://pruvodce.ucw.cz/">Průvodci labyrintem algoritmů</a>).</p>
      <p>Programování: dodělávky z minula, práce se soubory (<a href="05/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="6" order="6" date="8.11.">
      <p>Algoritmizace: <a href="NPRG062/06.php">úlohy s posloupnostmi</a>.</p>
      <p>Programování: spojové seznamy (<a href="06/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="7" order="7" date="15.11.">
      <p>Algoritmizace: rekurze (<a href="07/">programy ze cvičení</a>).</p>
      <p>Programování: <a href="./07.php">spojové seznamy</a> (<a href="07/linked_lists.py">moje řešení</a>).</p>
    </Lab>,
    <Lab key="8" order="8" date="22.11.">
      <p>Algoritmizace: binární vyhledávací stromy.</p>
      <p>Programování: PyGame (instalace: <code>py -3 -m pip install -U pygame --user</code>, <a href="08/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="9" order="9" date="29.11.">
      <p>Algoritmizace: <a href="NPRG062/09.php">zkoušková úloha na stromy</a>.</p>
      <p>Programování: dokumentace (<a href="https://numpydoc.readthedocs.io/en/latest/format.html"><code>numpydoc</code></a>, <code>doctest</code>), operátory (<a href="09/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="10" order="10" date="6.12.">
      <p>Algoritmizace: <i>nic, jen programování</i>.</p>
      <p>Programování: dědičnost, <code>random</code>, <code>argparse</code>, <code>json</code>, <code>csv</code>, <a href="./10.php">Buďte lepší než Spotify</a> (<a href="10/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="11" order="11" date="13.12.">
      <p>Algoritmizace: dynamické programování.</p>
      <p>Programování: <a href="https://jupyter.org/"><code>Jupyter</code></a>, <a href="https://numpy.org/"><code>NumPy</code></a>, <a href="https://matplotlib.org/"><code>Matplotlib</code></a>, <a href="https://pandas.pydata.org/"><code>Pandas</code></a> (<a href="11/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="12" order="12" date="20.12.">
      <p>Algoritmizace + programování: základní grafové algoritmy &ndash; BFS, DFS, (navíc Dijkstra, A*), Cesta králem po šachovnici (<a href="12/">programy ze cvičení</a>).</p>
    </Lab>,
    <Lab key="13" order="13" date="3.1.">
      <p>Programování: zápočtový test.</p>
    </Lab>
  ]

  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG030 &ndash; Programování 1 (ZS 2021/22)</h1>

    <p className="lead">Pondělí 16:30, N8</p>

    <CardBorderPrimary>
      Cvičení probíhá v jednom bloku s cvičením z Algoritmizace od <b>15:40</b>. Předměty Algoritmizace a Programování 1 jsou úzce spojené, takže je reálně budeme chápat jako jedno dlouhé cvičení. Další podrobnosti najdete také na stránce <Link href="NPRG062">Cvičení NPRG062 &ndash; Algoritmizace</Link>.
    </CardBorderPrimary>

    <CardDark>
      Druhý termín zápočtového testu je ve čtvrtek 13. 1. 2022 v 17:30 na Teams (odkaz v SISu). <b>Pokud chcete další termín, ozvěte se mi.</b>
    </CardDark>

    <h2>Obsah stránky</h2>

    <ul className="text-secondary">
      <li>
        <Link href="#co-bylo" scroll={false}>Co jsme dělali</Link>
        <ul><li>
          {labs.map(LabLink)}
          <span className="text-muted">
          </span>
        </li></ul>
      </li>
      <li><Link href="#prednaska">Přednáška</Link></li>
      <li><Link href="#zapocet">Podmínky na zápočet</Link></li>
      <li><Link href="#uzitecne-info">Užitečné informace</Link></li>
    </ul>

    <h2 id="co-bylo">Co jsme dělali</h2>

    {labs}

  </>)
}
