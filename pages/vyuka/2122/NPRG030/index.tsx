import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from 'react-katex';
import { CardBorderPrimary, CardDark } from "@/components/cards";
import Lab from "@/components/vyuka/Lab";
import LabLink from "@/components/vyuka/LabLink";
import LabPrograms from "@/components/vyuka/LabPrograms";


export default function CourseIndex() {
  const labs = [
    <Lab key="1" order="1" date="4.10.">
      <p>Algoritmizace: <Link href="NPRG062/01">úložky</Link> &ndash; Největší číslo, Kuličky, Cesty věží na šachovnici, Známky.</p>
      <p>Programování: základy &ndash; operátory, proměnné, vstup, výstup, podmínky (<LabPrograms source="web" order="1"/>).</p>
    </Lab>,
    <Lab key="2" order="2" date="11.10.">
      <p>Algoritmizace: <Link href="NPRG062/02">úložky, <InlineMath math="\mathcal{O}"/> (složitost)</Link>.</p>
      <p>Programování: <i>celou hodinu jsme dělali algoritmizaci</i>.</p>
    </Lab>,
    <Lab key="3" order="3" date="18.10.">
      <p>Algoritmizace: <Link href="NPRG062/03">Vážení kuliček</Link>.</p>
      <p>Programování: cykly, funkce, seznamy, textové řetězce (<LabPrograms source="web" order="3"/>).</p>
    </Lab>,
    <Lab key="4" order="4" date="25.10.">
      <p>Algoritmizace: binární vyhledávání (<Link href="NPRG062/04">Házení vajíček</Link>), zásobník.</p>
      <p>Programování: seznamy (comprehensions), slovník (dict), objekty (<LabPrograms source="web" order="4"/>).</p>
    </Lab>,
    <Lab key="5" order="5" date="1.11.">
      <p>Algoritmizace: halda (str. 84 v <a href="https://pruvodce.ucw.cz/">Průvodci labyrintem algoritmů</a>).</p>
      <p>Programování: dodělávky z minula, práce se soubory (<LabPrograms source="web" order="5"/>).</p>
    </Lab>,
    <Lab key="6" order="6" date="8.11.">
      <p>Algoritmizace: <Link href="NPRG062/06">úlohy s posloupnostmi</Link>.</p>
      <p>Programování: spojové seznamy (<LabPrograms source="web" order="6"/>).</p>
    </Lab>,
    <Lab key="7" order="7" date="15.11.">
      <p>Algoritmizace: rekurze (<LabPrograms source="web" order="7"/>).</p>
      <p>Programování: <Link href="NPRG030/07">spojové seznamy</Link> (<a href="07/linked_lists.py">moje řešení</a>).</p>{/*TODO*/}
    </Lab>,
    <Lab key="8" order="8" date="22.11.">
      <p>Algoritmizace: binární vyhledávací stromy.</p>
      <p>Programování: PyGame (instalace: <code>py -3 -m pip install -U pygame --user</code>, <LabPrograms source="web" order="8"/>).</p>
    </Lab>,
    <Lab key="9" order="9" date="29.11.">
      <p>Algoritmizace: <Link href="NPRG062/09">zkoušková úloha na stromy</Link>.</p>
      <p>Programování: dokumentace (<a href="https://numpydoc.readthedocs.io/en/latest/format.html"><code>numpydoc</code></a>, <code>doctest</code>), operátory (<LabPrograms source="web" order="9"/>).</p>
    </Lab>,
    <Lab key="10" order="10" date="6.12.">
      <p>Algoritmizace: <i>nic, jen programování</i>.</p>
      <p>Programování: dědičnost, <code>random</code>, <code>argparse</code>, <code>json</code>, <code>csv</code>, <Link href="NPRG030/10">Buďte lepší než Spotify</Link> (<LabPrograms source="web" order="10"/>).</p>
    </Lab>,
    <Lab key="11" order="11" date="13.12.">
      <p>Algoritmizace: dynamické programování.</p>
      <p>Programování: <a href="https://jupyter.org/"><code>Jupyter</code></a>, <a href="https://numpy.org/"><code>NumPy</code></a>, <a href="https://matplotlib.org/"><code>Matplotlib</code></a>, <a href="https://pandas.pydata.org/"><code>Pandas</code></a> (<LabPrograms source="web" order="11"/>).</p>
    </Lab>,
    <Lab key="12" order="12" date="20.12.">
      <p>Algoritmizace + programování: základní grafové algoritmy &ndash; BFS, DFS, (navíc Dijkstra, A*), Cesta králem po šachovnici (<LabPrograms source="web" order="12"/>).</p>
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
        </li></ul>
      </li>
      <li><Link href="#prednaska">Přednáška</Link></li>
      <li><Link href="#zapocet">Podmínky na zápočet</Link></li>
      <li><Link href="#uzitecne-info">Užitečné informace</Link></li>
    </ul>

    <h2 id="co-bylo">Co jsme dělali</h2>

    {labs}

    <h2 id="prednaska">Přednáška</h2>

    <p>Cvičení je vypsáno k přednášce <a href="https://kam.mff.cuni.cz/~perm/programovani/NNPRG030/index.html">Martina Pergela</a>, ale klidně choďte i na přednášky <a href="https://ksvi.mff.cuni.cz/~holan/">Tomáše Holana</a>.</p>

    <h2 id="zapocet">Podmínky na zápočet</h2>

    {/*
    <p className="text-danger">Předběžná verze, požadavky se ještě můžou měnit.</p>
    */}

    <p>Na zápočet je potřeba</p>
    <ul>
      <li>získat alespoň 2/3 bodů za domácí úkoly (7 úkolů z 10),</li>
      <li>napsat zápočtový test (bude na posledním cvičení),</li>
      <li>naprogramovat zápočtový program (viz <a href="#zapoctak">níže</a>).</li>
    </ul>

    <p>Zkouška bude až v letním semestru, takže zápočet je to jediné, co musíte získat.</p>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat 10 úkolů po 10 bodech. Celkem tedy budete moct získat 100 bodů. Na zápočet potřebujete aspoň 67 bodů, tedy 7 splněných úkolů. Na každý úkol budete mít dva týdny na odevzdání a v tomto čase můžete úkol odevzdat i víckrát. Pro odevzdávání budeme používat systém <a href="#recodex">ReCodEx</a>.</p>

    <h3>Zápočtový test</h3>

    <p>Test se bude psát na posledním cvičení a bude zadán přes ReCodEx (takže ho budete řešit jako domácí úkoly, akorát s časem omezeným délkou cvičení).</p>

    <h3 id="zapoctak">Zápočtový program</h3>

    <p>Zápočtový program je větší kus software, který budete programovat doma během semestru. <b>Do konce listopadu si vyberete téma a zašlete mi ho ke kontrole.</b> Na programu pak budete pracovat, dokud nebude hotový (včetně uživatelské a programátorské dokumentace). Výsledek práce mi zašlete ke kontrole takovým způsobem, abych mohl program spustit a vyzkoušet, ale také abych se mohl podívat na jeho zdrojový kód (pokud je to problematické, můžeme se domluvit na osobním předvedení).</p>

    {/*
    <p><em>Pokud budete mít během čtení zbytku této sekce pocit, že zatím neumíte programovat dost dobře na to, abyste vyrobili větší funkční software, nelekejte se. Je to úplně normální. Každý větší projekt vypadá zezačátku děsivě. Možná je lepší to zatím nečíst a vrátit se k tomu třeba začátkem listopadu, až budete mít víc zkušeností s programováním.</em></p>
    <div className="text-muted">
    */}

    <p>Zápočtový program má výjimku, že nemusí být v Pythonu &ndash; použijte jazyk, který umíte nebo který nejlépe sedí na doménu problému. Na druhou stranu, já bych měl být schopný kód vašeho programu přečíst a pochopit, takže pokud chcete použít nějaký jiný jazyk než Python, domluvte se na tom se mnou už ve specifikaci programu.</p>

    <p>Zápočtový program byste měli <b>odevzdat nejpozději do konce zkouškového (13. 2. 2022)</b>, poté už za něj zápočet neudělím.</p>

    <p>Byl bych rád, kdybyste program vyvíjeli v repozitáři na GitHubu nebo GitLabu (pro ten máme <a href="https://gitlab.mff.cuni.cz/">fakultní instanci</a>), případně podobné službě. Ušetří to práci oběma stranám. Pokud s gitem neumíte, pak máte ideální příležitost se ho naučit, budete ho beztak jednou potřebovat (<a href="https://www.youtube.com/watch?v=hwP7WQkmECE">Git ve 100 sekundách, ale nám stačí prvních 60</a> a potom <a href="https://www.youtube.com/watch?v=HkdAHXoRtos">to samé, ale detailněji</a>).</p>

    <p>Spoustu užitečných informací o zápočťácích už sepsali jiní, tak nemá smysl je znovu psát. Tady je pár odkazů: Martin Mareš má na <a href="http://mj.ucw.cz/vyuka/2122/p1x/pravidla.html">webu svého cvičení</a> hezky sepsané informace o zápočťácích. Navíc poskytuje i <a href="http://mj.ucw.cz/vyuka/zap/">seznam témat</a> pro inspiraci, takže doporučuji přečíst. Detailní informace včetně nápadů na témata sepsal taky <a href="https://github.com/Jirka-Mayer/NPRG030-062/blob/master/prg/zapoctaky.md">Jirka Mayer</a>. Nakonec, Rudolf Kryl má na webu <a href="https://ksvi.mff.cuni.cz/~kryl/dokumentace.htm">návod na psaní dokumentace k zápočťáku</a>, také doporučuji přečíst. Náležitosti tam popsané budu vyžadovat. Dokumentaci můžete psát česky, slovensky, nebo anglicky.</p>

    {/* konec "text-muted"
    </div>
      */}

    <h2 id="uzitecne-info">Užitečné informace</h2>

    <h3>Dotazy a konzultace</h3>

    <p>Pokud vám něco, co říkám, nebude jasné, ptejte se. Ideálně hned, dokud je to aktuální. Je velmi pravděpodobné, že v učebně sedí několik dalších lidí s úplně stejným dotazem, ale bojí se zeptat. Nebojte se. Cvičení je pro vás. Cílem je, abyste látku pochopili, ne abych ji já jen zbytečně odvykládal.</p>

    <p>Pokud se stydíte zeptat, nebo je váš dotaz moc dlouhý či kontroverzní, můžete se zeptat po skončení cvičení. V tomto čase většina ostatních studentů už odejde a zůstanou jen ti, kteří se mnou chtějí něco řešit.</p>

    <p>Pokud by někdo chtěl něco dovysvětlit nebo se mu nedařilo a chtěl by probrat cokoliv jiného, napište mi email a domluvíme se na termínu konzultace.</p>

    <h4>MFF Discord</h4>

    <p>Kanál pro tohle cvičení: <a href="https://discord.com/channels/625428723302137876/893480125016981514">#alg-prg1-cv-mtopfer</a>. Není povinné tam být, ale je to další místo, kde se můžete ptát na otázky a bavit se se mnou i se spolužáky.</p>

    <h3>V čem budeme programovat a jak to nainstaluju</h3>

    <p>Na první přednášce bude ukázka použití interpretu Pythonu z příkazové řádky, potom jednoduché prostředí IDLE, které se instaluje společně s Pythonem a nakonec <a href="https://visualstudio.microsoft.com/vs/">Visual Studio</a>, ve kterém bude probíhat zbytek přednášek. <b>Já budu na cvičení používat <a href="https://code.visualstudio.com/">Visual Studio Code</a></b>, což je textový editor inspirovaný Visual Studiem, ale podstatně menší a hlavně běží i na Linuxu a macOS. Taky si nejspíš ukážeme <a href="https://www.jetbrains.com/pycharm/">PyCharm</a> od JetBrains, který můžete jako studenti <a href="https://www.jetbrains.com/community/education/#students">používat zdarma</a>.  <b>Pokud už máte nainstalovaný nebo oblíbený jiný editor (Atom, Sublime, ...), problém s tím nemám.</b></p>

    <p>Na počítačích v učebně jsou všechny potřebné nástroje už nainstalované.</p>

    <h4>Instalace VS Code</h4>

    <ol>
      <li>Nainstalujte si <a href="https://www.python.org/downloads/">Python 3</a>.</li>
      <li>Nainstalujte si <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</li>
      <li>Přidejte si do VS Code <a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">rozšíření pro Python</a> (rozšíření se do VS Code přidávají v levém panelu v ikoně <em>Extensions</em> nebo přes odkaz z webového prohlížeče).</li>
    </ol>

    Stejné pokyny v angličtině najdete taky v <a href="https://code.visualstudio.com/docs/python/python-tutorial">dokumentaci</a> VS Code.

    <h3 id="recodex">ReCodEx</h3>

    <p>Domácí úkoly z obou cvičení budou zadávány a odevzdávány pomocí systému ReCodEx.</p>

    <p>Jak rozchodit ReCodEx:</p>
    <ul>
      <li>Jděte na <a href="https://recodex.mff.cuni.cz/login">https://recodex.mff.cuni.cz/login</a>.</li>
      <li>V sekci <em>Přihlásit se pomocí externí služby</em> klikněte na <em>Ověřit uživatele</em>.</li>
      <li>Přihlaste se pomocí Centrální Autentizační Služby (CAS CUNI). Jméno a heslo jsou stejné jako do SISu.</li>
      <li>V menu vlevo dole je položka <em>SIS Integrace</em>. Tam se přidejte do skupin <em>Algoritmizace</em> a <em>Programování 1</em>.</li>
    </ul>

    <h3>Řešil jsem KSPčko</h3>

    <p>Pokud jste už zdatnější a myslíte si, že by vás cvičení nebavilo, můžete se zapsat na <a href="https://mj.ucw.cz/vyuka/2122/p1x/">cvičení Martina Mareše pro pokročilé</a>. Můžete také chodit i na obě cvičení současně (v takovém případě si v SISu nechte zapsané moje cvičení).</p>

    <h3>Chci se procvičovat doma a nevím jak</h3>

    <p>Středoškolská soutěž <a href="https://kasiopea.matfyz.cz/">Kasiopea</a> má archiv domácích kol, kde se obtížnost úloh stupňuje od velmi lehkých k velmi náročným.</p>

    <p><a href="https://ksp.mff.cuni.cz/">Korespondenční seminář z programování</a> má online k dispozici nejen úlohy, ale i kuchařky vysvětlující nejrůznější oblasti algoritmizace, diskrétní matematiky a spousty dalších užitečných oblastí. Lehčí úlohy najdete v <a href="https://ksp.mff.cuni.cz/z/">začátečnické kategorii</a>.</p>

    <p><a href="https://pruvodce.ucw.cz/">Průvodce labyrintem algoritmů</a> je kniha (dostupná online) shrnující látku předmětů Algoritmizace, Algoritmy a datové struktury I a Algoritmy a datové struktury II. Její úvodní kapitoly rozebírají paměťovou a časovou složitost, binární vyhledávání, Euklidův algoritmus, třídění, haldy apod.</p>

    <p className="text-muted mt-3"><small>Část textu na této stránce jsem opsal od <a href="https://github.com/Jirka-Mayer/NPRG030-062/">Jirky Mayera</a>. Díky, Jirko!</small></p>
  </>)
}
