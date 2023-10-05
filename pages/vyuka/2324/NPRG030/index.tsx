import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from 'react-katex';
import { CardBorderDanger, CardBorderPrimary, CardDark } from "@/components/cards";
import Lab from "@/components/vyuka/Lab";
import LabLink from "@/components/vyuka/LabLink";
import LabPrograms from "@/components/vyuka/LabPrograms";
import { Card } from 'react-bootstrap';


export default function CourseIndex() {
  const labs = [
    <Lab key="1" order="1" date="3.10.">
      <p>Algoritmizace: <Link href="NPRG062/01">úložky</Link> &ndash; Kuličky, Hra s mincemi, Známky.</p>
      <p>Programování: základy &ndash; operátory, proměnné, vstup, výstup, podmínky (<LabPrograms source="lab" order="1"/>), <Link href="NPRG030/01">úlohy na procvičení</Link>.</p>
    </Lab>,
    <Lab key="2" order="2" date="10.10." plan>
      <p>Algoritmizace: <Link href="NPRG062/02">úložky</Link> &ndash; Cesty věží na šachovnici, Vážení kuliček.</p>
      <p>Programování: cykly (<LabPrograms source="lab" order="2"/>).</p>
    </Lab>,
    <Lab key="3" order="3" date="17.10." future>
      <p>Algoritmizace: <Link href="NPRG062/03"><InlineMath math="\mathcal{O}"/> (složitost)</Link>.</p>
      <p>Programování: <Link href="NPRG030/03">funkce, seznamy, textové řetězce</Link> (<LabPrograms source="lab" order="3"/>).</p>
    </Lab>,
    <Lab key="4" order="4" date="24.10." future>
      <p>Algoritmizace: pokračování <InlineMath math="\mathcal{O}"/> (složitost), binární vyhledávání (<Link href="NPRG062/04">Házení vajíček</Link>).</p>
      <p>Programování: seznamy (comprehensions), keř, strom a les v ReCodExu (<LabPrograms source="lab" order="4"/>).</p>
    </Lab>,
    <Lab key="5" order="5" date="31.10." future>
      <p>Algoritmizace: <Link href="NPRG062/05">úlohy s posloupnostmi</Link>.</p>
      <p>Programování: slovník (<code>dict</code>), práce se soubory (<LabPrograms source="lab" order="5"/>).</p>
    </Lab>,
    <Lab key="6" order="6" date="7.11." future>
      <p>Algoritmizace: zásobník.</p>
      <p>Programování: soubory (pokračování), objekty (<LabPrograms source="lab" order="6"/>).</p>
    </Lab>,
    <Lab key="7" order="7" date="14.11." future>
      <p>Algoritmizace + Programování: <Link href="NPRG030/07">spojové seznamy</Link> (<LabPrograms source="lab" order="7"/>).</p>
    </Lab>,
    <Lab key="21.11." date="21.11." title=" CVIČENÍ NEBUDE" future>
      <p className="text-danger">Cvičení nebude z důvodu konání Dne otevřených dveří.</p>
    </Lab>,
    <Lab key="8" order="8" date="28.11." future>
      <p>Algoritmizace: rekurze.</p>
      <p>Programování: generátory (<LabPrograms source="lab" order="8"/>).</p>
    </Lab>,
    <Lab key="9" order="9" date="5.12." future>
      <p>Algoritmizace: <Link href="NPRG062/09">zkoušková úloha na stromy</Link>.</p>
      <p>Programování: přetěžování operátorů, dokumentace (<a href="https://numpydoc.readthedocs.io/en/latest/format.html"><code>numpydoc</code></a>) (<LabPrograms source="lab" order="9"/>).</p>
    </Lab>,
    <Lab key="10" order="10" date="12.12." future>
      <p>Algoritmizace: <i>nic, jen programování</i>.</p>
      <p>Programování: <code>random</code>, <code>argparse</code>, <code>json</code>, <code>csv</code>, <code>pygame</code>, dědičnost (<LabPrograms source="lab" order="10"/>).</p>
    </Lab>,
    <Lab key="11" order="11" date="19.12." future>
      <p>Programování: <span className="text-danger">zápočtový test</span>.</p>
    </Lab>,
    <Lab key="12" order="12" date="9.1." future>
      <p>Algoritmizace + programování: základní grafové algoritmy &ndash; BFS, DFS, (navíc Dijkstra, A*), Cesta králem po šachovnici (<LabPrograms source="lab" order="12"/>).</p>
    </Lab>,
  ]

  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG030 &ndash; Programování 1 (ZS 2023/24)</h1>

    <p className="lead">Úterý 9:50, N8</p>

    <CardBorderPrimary>
      Cvičení probíhá v jednom bloku s cvičením z Algoritmizace od <b>9:00</b>. Předměty Algoritmizace a Programování 1 jsou úzce spojené, takže je reálně budeme chápat jako jedno dlouhé cvičení. Další podrobnosti najdete také na stránce <Link href="NPRG062">Cvičení NPRG062 &ndash; Algoritmizace</Link>.
    </CardBorderPrimary>

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

    <p>Cvičení je vypsáno k přednášce <a href="https://kam.mff.cuni.cz/~perm/programovani/NNPRG030/index.html">Martina Pergela</a> (středa 14:00){/*, ale klidně choďte i na přednášky <a href="https://ksvi.mff.cuni.cz/~holan/">Tomáše Holana</a>*/}.</p>

    <h2 id="zapocet">Podmínky na zápočet</h2>

    {/*/}
    <CardBorderDanger>Předběžná verze, požadavky se ještě můžou měnit.</CardBorderDanger>
    {/**/}

    <p>Pro získání zápočtu z programování je potřeba</p>
    <ul>
      <li>získat alespoň <i>75 % bodů</i> za <b>domácí úkoly</b> (za aktivní účast na cvičeních získáte bonusové body),</li>
      <li>napsat <b>zápočtový test</b> (bude nejspíš 19. 12.),</li>
      <li>naprogramovat <b>zápočtový program</b> (viz <a href="#zapoctak">níže</a>).</li>
    </ul>

    <p>Zkouška bude až v letním semestru, takže zápočet je to jediné, co musíte získat.</p>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat celkem 10 úkolů po <i>10 bodech</i>. Celkem tedy za domácí úkoly budete moct získat až <i>100 bodů</i>, takže na zápočet bude potřeba <i>75 bodů</i>.</p>

    <p>Za aktivní účast na cvičeních můžete získat bonusové body, konkrétně až <i>2 bod</i> za každé cvičení. V průběhu semestru bude 11 cvičení (a jedno navíc na zápočtový test), takže můžete získat až <i>22 bonusových bodů</i>. Účast na cvičeních tedy není povinná, ale je <b>silně doporučná</b>.</p>
    
    <p>U domácích úkolů se bude hodnotit jak <b>funkčnost</b> (jeslti program dělá to, co má), tak <b>kvalita kódu</b> (čitelnost, atd.). Zpravidla bude <i>6 bodů</i> za funkčnost a <i>4 body</i> za kvalitu, ale u některých úloh může být poměr bodů jiný.</p>

    <p>
      Na každý úkol budete mít <b>dva týdny</b> a v&nbsp;tomto čase ho můžete odevzdat víckrát.
      Pokud stihnete úkol odevzdat během <b>prvního týdne</b> od zadání, dám vám zpětnou vazbu ohledně kvality kódu a vy budete mít šanci váš program během druhého týdne vylepšit a odevzdat znovu.
      Pokud úkol v prvním týdnu odevzdat nestihnete, ničemu to nevadí, akorát se tím připravíte o moji zpětnou vazbu a možnost kvalitu kódu vylepšit.
      Pro odevzdávání budeme používat systém <a href="#recodex">ReCodEx</a>.
    </p>

    <p>Jako řešení domácích úkolů odevzdávejte pouze vaše výtvory, nikoli kód napsaný někým jiným (opsaný od spolužáka/spolužačky, zkopírovaný z internetu, vygenerovaný pomocí ChatGPT, &hellip;). Rozhodně není zakázáno hledat na internetu nebo konzultovat se spolužáky, jak se naprogramuje nějaká dílčí část úkolu, ale je zakázáno kopírovat řešení celé úlohy. Podobně pro LLMs (ChatGPT a další) &ndash; můžete se ptát, jak se udělá nějaká konkrétní věc v Pythonu, ale nevydávejte vygenerovaný kód za své řešení (v tomto kontextu bych zmínil <a href='https://www.mff.cuni.cz/cs/verejnost/aktuality/stanovisko-mff-uk-k-vyuzivani-umele-inteligence-ve-vyuce'>Stanovisko MFF UK k využívání umělé inteligence ve výuce</a>, zejména bod <i>Buďte transparentní</i>).</p>

    <h3>Zápočtový test</h3>

    <p>Test se bude psát nejspíš na cvičení 19. 12. Test je praktický &ndash; vaším úkolem bude naprogramovat a odladit řešení úlohy &ndash; a bude zadán přes ReCodEx (takže ho budete řešit jako domácí úkoly, akorát s časem omezeným délkou cvičení). Další termíny budou vypsány podle potřeby během zkouškového období &ndash; celkem máte na test tři pokusy.</p>

    <h3 id="zapoctak">Zápočtový program</h3>

    <p>Zápočtový program je větší kus software, který budete programovat doma během semestru. <b>Nejpozději do konce výuky v ZS (12. 1. 2024) si vyberete téma a zašlete mi ho ke kontrole.</b> Doporučuji vybrat si téma už před Vánoci, protože vánoční prázdniny můžou být dobrý termín, kdy na programu pracovat. Až bude program hotový (včetně uživatelské a programátorské dokumentace), zašlete mi ho ke kontrole takovým způsobem, abych mohl program spustit a vyzkoušet, ale také abych se mohl podívat na jeho zdrojový kód.</p>

    {/**/}
    <p><em>Pokud budete mít během čtení zbytku této sekce pocit, že zatím neumíte programovat dost dobře na to, abyste vyrobili větší funkční software, nelekejte se. Je to úplně normální. Každý větší projekt vypadá zezačátku děsivě. Možná je lepší to zatím nečíst a vrátit se k tomu třeba začátkem listopadu, až budete mít víc zkušeností s programováním.</em></p>
    <div className="text-muted">
    {/**/}

    <p>Zápočtový program může a nemusí být napsaný v Pythonu &ndash; použijte jazyk, který umíte nebo který nejlépe sedí na doménu problému. Na druhou stranu, já bych měl být schopný kód vašeho programu přečíst a pochopit, takže pokud chcete použít nějaký jiný jazyk než Python, domluvte se na tom se mnou už ve specifikaci programu.</p>

    <p>Zápočtový program byste měli <b>odevzdat nejpozději do konce zkouškového (18. 2. 2024)</b>, poté už za něj zápočet neudělím. Součástí odevzdání je i osobní předvedení programu. Až budete mít program hotový, pošlete mi ho mailem (včetně dokumentace a zdrojových kódů) a domluvíme se na termínu předvedení. Předvedení programu bude spočívat v tom, že mi ukážete, že program jde spustit a že dělá to, na čem jsme se domluvili ve specifikaci. Kromě toho od vás budu chtít shrnutí návrhu programu &ndash; high-level rozdělení do tříd/funkcí a jejich účet, prostě takové rychlé shrnutí toho, co dělá která část zdrojového kódu. Pokud chcete, můžete si na předvedení připravit krátkou prezentaci.</p>

    <p>K zápočtovému programu napište jeho <b>dokumentaci</b>. Ta by měla mít tři hlavní části:</p>
    <ul>
      <li>uživatelská dokumentace (jak se program používá),</li>
      <li>programátorská dokumentace (jak program funguje uvnitř),</li>
      <li>ukázky použití.</li>
    </ul>

    <p>
      <b>Povinnou součástí uživatelské dokumentace je informace o tom, jak program spustit</b> (pokud má víc <code>.py</code> souborů, tak který se má spouštět), jak specifikovat jeho parametry, vstupní soubory, atd. a jak program ovládat (např. pokud programujete hru, tak jaké klávesy slouží k čemu). Pokud váš program pracuje s nějakými vstupními soubory, popište jejich formát. Pokud je pro spuštění programu potřeba nainstalovat nějaké knihovny nebo nástroje (např. programujete hru v Pygame), napište jaké a v jaké verzi (a ideálně doplňte i jak je nainstalovat).
    </p>
    <p>
      V programátorské části dokumentace byste měli vysvětlit hlavní strukturu a koncepty vašeho programu. Když si projekt otevřu já nebo váš spolužák, měli bychom být podle dokumentace schopní program rozšířit a případně vědět, kde v kódu hledat, kdybychom měli opravovat nějakou chybu. Je vhodné jako součást programátorské dokumentace mít popis abstraktního návrhu programu (rozdělení do tříd a co má která třída za úkol) a stručné shrnutí zdrojových souborů (hlavně když jich bude hodně a budou strukturované složek).
    </p>
    <p>
      Součástí dokumentace by také měly být příklady použití. Když program vyžaduje nějaké netriviální vstupy k tomu, aby šel spustit, přidejte příklady takových vstupů do dokumentace. Například pokud váš program kreslí graf na základě dat ze vstupního souboru, dejte do dokumentace ukázkový soubor s daty. Pokud programujete hru nebo jiný interaktivní program, pak nejspíš příklady použití nejsou potřeba.
    </p>
    <p>
      Výrazně doporučuji dokumentaci psát anglicky, ale pokud si na to nevěříte, můžete ji napsat česky (příp. slovensky).
    </p>

    <p>Program by měl být rozumně odladěný. Především by měl jít zkompilovat bez chyb a spustit. Když program budu normálně používat, tak by neměl spadnout. Pokud například program očekává vstup v souboru, tak by neměl spadnout, pokud soubor neexistuje. Měl by místo toho vypsat rozumnou chybovou hlášku pro uživatele.</p>

    <p>Vhodným přístupem, jak vyvíjet software je používat nástroj git pro správu verzí zdrojového kódu. Pokud si během vývoje zápočtového programu chcete git vyzkoušet, můžete si vytvořit repozitář na GitLabu (pro ten máme <a href="https://gitlab.mff.cuni.cz/">fakultní instanci</a>), na GitHubu či na jiné podobné službě. Jestli s gitem neumíte, pak máte ideální příležitost se ho naučit, budete ho beztak jednou potřebovat (<a href="https://www.youtube.com/watch?v=hwP7WQkmECE">Git ve 100 sekundách, ale nám stačí prvních 60</a> a potom <a href="https://www.youtube.com/watch?v=HkdAHXoRtos">to samé, ale detailněji</a>). Pokud git zatím používat nechcete, nemusíte. Stačí, když mi při odevzdávání pošlete i zdrojový kód programu.</p>

    <p>Spoustu užitečných informací o zápočťácích už sepsali jiní, tak nemá smysl je znovu psát. Tady je pár odkazů: Martin Mareš má na <a href="http://mj.ucw.cz/vyuka/2324/p1x/pravidla.html">webu svého cvičení</a> hezky sepsané informace o zápočťácích. Navíc poskytuje i <a href="http://mj.ucw.cz/vyuka/zap/">seznam témat</a> pro inspiraci, takže doporučuji přečíst. Detailní informace včetně nápadů na témata sepsal taky <a href="https://github.com/Jirka-Mayer/NPRG030-062/blob/master/prg/zapoctaky.md">Jirka Mayer</a>. Nakonec, Rudolf Kryl má na webu <a href="https://ksvi.mff.cuni.cz/~kryl/dokumentace.htm">návod na psaní dokumentace k zápočťáku</a>, také doporučuji přečíst. Náležitosti tam popsané budu vyžadovat. Dokumentaci můžete psát česky, slovensky, nebo anglicky.</p>

    {/* konec "text-muted" */}
    </div>
    {/**/}

    <h2 id="uzitecne-info">Užitečné informace</h2>

    <h3>Dotazy a konzultace</h3>

    <p>Pokud vám něco, co říkám, nebude jasné, ptejte se. Ideálně hned, dokud je to aktuální. Je velmi pravděpodobné, že v učebně sedí několik dalších lidí s úplně stejným dotazem, ale bojí se zeptat. Nebojte se. Cvičení je pro vás. Cílem je, abyste látku pochopili, ne abych ji já jen zbytečně odvykládal.</p>

    <p>Pokud se stydíte zeptat, nebo je váš dotaz moc dlouhý či kontroverzní, můžete se zeptat po skončení cvičení. V tomto čase většina ostatních studentů už odejde a zůstanou jen ti, kteří se mnou chtějí něco řešit.</p>

    <p>Pokud by někdo chtěl něco dovysvětlit nebo se mu nedařilo a chtěl by probrat cokoliv jiného, napište mi email a domluvíme se na termínu konzultace.</p>

    <h4>MFF Discord</h4>

    <p>Kanál pro tohle cvičení: <a href="https://discord.com/channels/625428723302137876/893480125016981514">#alg-prg-cv-mtopfer</a>. Není povinné tam být, ale je to další místo, kde se můžete ptát na otázky a bavit se se mnou i se spolužáky.</p>

    <h3>V čem budeme programovat a jak to nainstaluju</h3>

    <p>Na první přednášce bude ukázka použití interpretu Pythonu z příkazové řádky, potom jednoduché prostředí IDLE, které se instaluje společně s Pythonem a nakonec <a href="https://visualstudio.microsoft.com/vs/">Visual Studio</a>, ve kterém bude probíhat zbytek přednášek. <b>Já budu na cvičení používat <a href="https://code.visualstudio.com/">Visual Studio Code</a></b>, což je textový editor inspirovaný Visual Studiem, ale podstatně menší a hlavně běží i na Linuxu a macOS. Taky si nejspíš ukážeme <a href="https://www.jetbrains.com/pycharm/">PyCharm</a> od JetBrains, který můžete jako studenti <a href="https://www.jetbrains.com/community/education/#students">používat zdarma</a>. <b>Pokud už máte nainstalovaný nebo oblíbený jiný editor (Atom, Sublime, ...), problém s tím nemám.</b></p>

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
      <li>V menu vlevo dole je položka <em>SIS Integrace</em>. Tam se přidejte do skupin <em>Algoritmizace</em> a <em>Programování 1</em> (programování má dvě skupiny &ndash; jednu na domácí úkoly a jednu na práci na cvičeních).</li>
    </ul>

    <h3>Řešil(a) jsem KSPčko</h3>

    <p>Pokud jste už zdatnější a myslíte si, že by vás cvičení nebavilo, můžete se zapsat na <a href="https://mj.ucw.cz/vyuka/2324/p1x/">cvičení Martina Mareše pro pokročilé</a>. Můžete také chodit i na obě cvičení současně (v takovém případě si v SISu nechte zapsané moje cvičení).</p>

    <h3>Chci se procvičovat doma a nevím jak</h3>

    <p>Středoškolská soutěž <a href="https://kasiopea.matfyz.cz/">Kasiopea</a> má archiv domácích kol, kde se obtížnost úloh stupňuje od velmi lehkých k velmi náročným.</p>

    <p><a href="https://ksp.mff.cuni.cz/">Korespondenční seminář z programování</a> má online k dispozici nejen úlohy, ale i kuchařky vysvětlující nejrůznější oblasti algoritmizace, diskrétní matematiky a spousty dalších užitečných oblastí. Lehčí úlohy najdete v <a href="https://ksp.mff.cuni.cz/z/">začátečnické kategorii</a>.</p>

    <p><a href="https://pruvodce.ucw.cz/">Průvodce labyrintem algoritmů</a> je kniha (dostupná online) shrnující látku předmětů Algoritmizace, Algoritmy a datové struktury I a Algoritmy a datové struktury II. Její úvodní kapitoly rozebírají paměťovou a časovou složitost, binární vyhledávání, Euklidův algoritmus, třídění, haldy apod.</p>

    <p className="text-muted mt-3"><small>Část textu na této stránce jsem opsal od <a href="https://github.com/Jirka-Mayer/NPRG030-062/">Jirky Mayera</a>. Díky, Jirko!</small></p>
  </>)
}
