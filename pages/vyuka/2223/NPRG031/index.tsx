import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from 'react-katex';
import { CardBorderPrimary, CardDark } from "@/components/cards";
import Lab from "@/components/vyuka/Lab";
import LabLink from "@/components/vyuka/LabLink";
import LabPrograms from "@/components/vyuka/LabPrograms";


export default function CourseIndex() {
  const labs = [
    <Lab key="1" order="1" date="13.2.">
       <p>Základy C#: proměnné, podmínky, cykly &ndash; <Link href="NPRG031/01">úlohy na procvičení</Link> (<LabPrograms afs order="1"/>).</p>
    </Lab>,
    <Lab key="2" order="2" date="20.2." title=" &ndash; suploval Jirka Mayer">
      <p>Základní datové struktury v C# (<code>List</code>, <code>Dictionary</code>, <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples"><code>tuple</code></a>, ...), <a href="https://github.com/ReCodEx/utils/blob/master/runners/cs/Reader.cs">ReCodEx Reader</a> &ndash; <Link href="NPRG031/02">úlohy na procvičení</Link> (<LabPrograms afs order="2"/>).</p>
    </Lab>,
    <Lab key="3" order="3" date="27.2.">
      <p>Třídy (<code>class</code>) a rozhraní (<code>interface</code>) (<LabPrograms afs order="3"/> &ndash; <code>Counter</code>, <code>Temperature</code>, <code>IGameObject</code>).</p>
    </Lab>,
    <Lab key="4" order="4" date="6.3.">
      <p>Třídy a rozhraní &ndash; <code>IEquitable</code>, <code>IComparable</code> (<LabPrograms afs order="4"/> &ndash; <InlineMath math="\mathbb{Z}_7"/>).</p>
    </Lab>,
    <Lab key="5" order="5" date="13.3." title=" &ndash; suploval Jirka Mayer">
      <p>Soubory, dědičnost (<LabPrograms afs order="5"/> &ndash; Strom aritmetických výrazů).</p>
    </Lab>,
    <Lab key="6" order="6" date="20.3." title=" &ndash; suploval David Šosvald">
      <p>Diskrétní simulace (<LabPrograms afs order="6"/> &ndash; Pošta).</p>
    </Lab>,
    <Lab key="7" order="7" date="27.3.">
      <p>Generické programování (typové parametry), funkcionální programování, enumerátory &ndash; <Link href="NPRG031/07">úlohy na procvičení</Link> (<LabPrograms afs order="7"/>).</p>
    </Lab>,
    <Lab key="8" order="8" date="3.4.">
      <p>Dynamické programování (<LabPrograms afs order="8"/>).</p>
      <ul>
          <li>Počet cest v DAGu</li>
          <li>Nejdelší rostoucí podposloupnost</li>
          <li><a href="https://kasiopea.matfyz.cz/archiv/2016/doma/D/">Lampy na ulici</a></li>
      </ul>
    </Lab>,
    <Lab key="10.4." date="10.4." title=" CVIČENÍ NEBUDE">
      <p className="text-danger">Cvičení nebude, protože je státní svátek.</p>
    </Lab>,
    <Lab key="9" order="9" date="17.4.">
      <p>WinForms (<LabPrograms afs order="9"/>).</p>
    </Lab>,
    <Lab key="10" order="10" date="24.4.">
      <p>Unit testy (<LabPrograms afs order="10"/> &ndash; <code>List&lt;T&gt;</code>).</p>
      <p>Jak založit projekt s testy:</p>
      <ol>
        <li>Vytvořit solution: <code>dotnet new sln</code></li>
        <li>Vytvořit projekt s implementací: <code>dotnet new classlib -o MyList</code></li>
        <li>Přidat implementaci do solution: <code>dotnet sln add MyList/MyList.csproj</code></li>
        <li>Vytvořit projekt s testy: <code>dotnet new xunit -o MyList.Tests</code></li>
        <li>Přidat testy do solution: <code>dotnet sln add MyList.Tests/MyList.Tests.csproj</code></li>
        <li>Přidat implementaci jako reference k testům: <code>dotnet add MyList.Tests/MyList.Tests.csproj reference MyList/MyList.csproj</code></li>
        <li>Přidat <code>using MyList;</code> do testů</li>
        <li>Spustit testy: <code>dotnet test</code></li>
      </ol>
    </Lab>,
    <Lab key="1.5." date="1.5." title=" CVIČENÍ NEBUDE">
      <p className="text-danger">Cvičení nebude, protože je státní svátek.</p>
    </Lab>,
    <Lab key="8.5." date="8.5." title=" CVIČENÍ NEBUDE">
      <p className="text-danger">Cvičení nebude, protože je státní svátek.</p>
    </Lab>,
    <Lab key="11" order="11" date="15.5." title=" &ndash; suploval Jirka Mayer">
      <p className="text-danger">Zápočtový test.</p>
    </Lab>,
    <Lab key="12" order="12" date="22.5.">
      <p>Ukázková zkoušková úloha <a href="210614_zk_koncerty.pdf">Koncerty</a>.</p>
    </Lab>,
  ]

  return (<>
    <Head>
      <title>Cvičení NPRG031 – Programování 2 – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG031 &ndash; Programování 2 (LS 2022/23)</h1>

    <p className="lead">Pondělí 9:00, N8</p>

    <CardDark>
      Termín odevzdání zápočtového programu je 31. 8. 2023.
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

    <h2 id="prednaska">Přednáška</h2>

     <p>Cvičení je vypsáno k přednášce <a href="https://kam.mff.cuni.cz/~perm/programovani/NNPRG031/index.html">Martina Pergela</a> (čtvrtek 12:20){/*, ale klidně choďte i na přednášky <a href="https://ksvi.mff.cuni.cz/~holan/">Tomáše Holana</a>*/}.</p>

    <h2 id="zapocet">Podmínky na zápočet</h2>

    {/*
    <p className="text-danger">Předběžná verze, požadavky se ještě můžou měnit.</p>
    */}

    <CardBorderPrimary>
      Podmínky na zápočet jsou prakticky stejné jako v ZS. Téma zápočtového programu si vyberte do konce výuky v LS (22. 5. 2023). Termín odevzdání zápočtového programu je 31. 8. 2023.
    </CardBorderPrimary>

    <p>Na zápočet je potřeba</p>
    <ul>
      <li>získat alespoň 67 bodů za domácí úkoly (2/3 z maxima),</li>
      <li>napsat zápočtový test (bude 15. 5.),</li>
      <li>naprogramovat zápočtový program (viz <a href="#zapoctak">níže</a>).</li>
    </ul>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat domácí úkoly za celkem alespoň 100 bodů. Na zápočet potřebujete aspoň 67 bodů (tedy dvě třetiny z maxima). Na každý úkol budete mít dva týdny na odevzdání a v tomto čase můžete úkol odevzdat i víckrát. Pro odevzdávání budeme používat systém <a href="#recodex">ReCodEx</a>.</p>

    <h3>Zápočtový test</h3>

    <p>Test se bude psát na předposledním cvičení (15. 5.) a bude zadán přes ReCodEx (takže ho budete řešit jako domácí úkoly, akorát s časem omezeným délkou cvičení). Další termíny budou vypsány podle potřeby během zkouškového období &ndash; celkem máte na test tři pokusy.</p>

    <h3 id="zapoctak">Zápočtový program</h3>

    <p>Zápočtový program je větší kus software, který budete programovat doma během semestru. <b>Nejpozději do konce výuky v LS (22. 5. 2023) si vyberete téma a zašlete mi ho ke kontrole.</b></p>

    <p>Zápočtový program může a nemusí být napsaný v C# &ndash; použijte jazyk, který umíte nebo který nejlépe sedí na doménu problému. Na druhou stranu, já bych měl být schopný kód vašeho programu přečíst a pochopit, takže pokud chcete použít nějaký jiný jazyk než C#, domluvte se na tom se mnou už ve specifikaci programu.</p>

    <p>Zápočtový program vyvíjejte v připraveném repozitáři na <a href="https://gitlab.mff.cuni.cz/">fakultním GitLabu</a> (<code>/teaching/nprg031/2023-summer/student-LOGIN_DO_SISU</code>), případně na podobné službě a pak ho na GitLab nahrajte (<a href="#nahrani-gitlab">návod</a>). S Gitem jste pracovali už na <a href="https://d3s.mff.cuni.cz/teaching/nswi177/">Úvodu do Linuxu (NSWI177)</a>, znalosti získané tam by pro tento účel měly stačit. Pokud si chcete Git připomenout, můžete využít <a href="https://www.youtube.com/watch?v=hwP7WQkmECE">Git ve 100 sekundách, ale nám stačí prvních 60</a> a <a href="https://www.youtube.com/watch?v=HkdAHXoRtos">to samé, ale detailněji</a>. Snažte se dělat commity průběžně (např. vždy když dokončíte nějakou ucelenou část práce), ať si u toho i vyzkoušíte, jak s Gitem pracovat.</p>

    <p>K zápočtovému programu napište jeho dokumentaci. Ta by měla mít tři hlavní části:</p>
    <ul>

      <li>uživatelská dokumentace (jak se program používá),</li>
      <li>programátorská dokumentace (jak program funguje uvnitř),</li>
      <li>ukázky použití.</li>
    </ul>

    <p>
      <b>Povinnou součástí uživatelské dokumentace je soubor <code>README.md</code>,</b> který by měl obsahovat informace o tom, jak program spustit (v případě C# to nejspíš bude příkaz <code>dotnet run</code>), jak specifikovat jeho parametry, vstupní soubory, atd. a jak program ovládat (např. pokud programujete hru, tak jaké klávesy slouží k čemu). Pokud váš program pracuje s nějakými vstupními soubory, popište v README.md jejich formát (nebo, pokud by takový popis byl příliš dlouhý, odkažte z README.md na soubory s popisem formátu). Pokud je pro spuštění programu potřeba nainstalovat nějaké knihovny nebo nástroje (např. programujete hru v Unity), napište jaké a v jaké verzi (a ideálně doplňte i jak je nainstalovat). Soubor README.md už ve vašem předpřipraveném repozitáři existuje, upravte ho do vhodné podoby.
    </p>
    <p>
        V programátorské části dokumentace byste měli vysvětlit hlavní strukturu a koncepty vašeho programu. Když si projekt otevřu já nebo váš spolužák, měli bychom být podle dokumentace schopní program rozšířit a případně vědět, kde v kódu hledat, kdybychom měli opravovat nějakou chybu. Je vhodné jako součást programátorské dokumentace mít popis abstraktního návrhu programu (rozdělení do tříd a co má která třída za úkol) a stručné shrnutí zdrojových souborů (hlavně když jich bude hodně a budou strukturované složek).
    </p>
    <p>
        Součástí dokumentace by také měly být příklady použití. Když program vyžaduje nějaké netriviální vstupy k tomu, aby šel spustit, přidejte příklady takových vstupů do dokumentace. Například pokud váš program kreslí graf na základě dat ze vstupního souboru, dejte do dokumentace ukázkový soubor s daty. Pokud programujete hru nebo jiný interaktivní program, pak nejspíš příklady použití nejsou potřeba.
    </p>
    <p>
        Dobrým způsobem, jak psát dokumentaci, je pořídit si složku <code>documentation</code> (nebo <code>docs</code>) ve vašem repozitáři a v ní mít několik Markdown (<code>.md</code>) souborů a rezcestník <code>README.md</code> s odkazy na ostatní soubory.
        Výrazně doporučuji dokumentaci psát anglicky, ale pokud si na to nevěříte, můžete ji napsat česky (příp. slovensky).
    </p>

    <p>Program by měl být rozumně odladěný. Především by měl jít zkompilovat bez chyb a spustit. Když program budu normálně používat, tak by neměl spadnout. Pokud například program očekává vstup v souboru, tak by neměl spadnout, pokud soubor neexistuje. Měl by místo toho vypsat rozumnou chybovou hlášku pro uživatele.</p>

    <p>Zápočtový program <b>odevzdávejte nejpozději do 31. 8. 2023</b>, abych měl dost času se na něj podívat a vy jste případně měli možnost program doplnit nebo opravit podle mých připomínek před koncem akademického roku (30. 9. 2023 &ndash; po tomto datu už nejde udělovat zápočty v SISu). Součástí odevzdání je i osobní předvedení programu. Až budete mít program hotový (včetně dokumentace), pošlete mi mailem odkaz na repozitář a domluvíme se na termínu předvedení. Předvedení programu bude spočívat v tom, že mi ukážete, že program jde spustit a že dělá to, na čem jsme se domluvili ve specifikaci. Kromě toho od vás budu chtít shrnutí návrhu programu &ndash; high-level rozdělení do tříd/funkcí a jejich účet, prostě takové rychlé shrnutí toho, co dělá která část zdrojového kódu. Pokud chcete, můžete si na předvedení připravit krátkou prezentaci.</p>

    <p>Spoustu užitečných informací o zápočťácích už sepsali jiní, tak nemá smysl je znovu psát. Tady je pár odkazů: Martin Mareš má na <a href="http://mj.ucw.cz/vyuka/2021/p2x/pravidla.html">webu svého cvičení</a> hezky sepsané informace o zápočťácích. Navíc poskytuje i <a href="http://mj.ucw.cz/vyuka/zap/">seznam témat</a> pro inspiraci, takže doporučuji přečíst. Detailní informace včetně nápadů na témata sepsal taky <a href="https://github.com/Jirka-Mayer/NPRG030-062/blob/master/prg/zapoctaky.md">Jirka Mayer</a>. Nakonec, Rudolf Kryl má na webu <a href="https://ksvi.mff.cuni.cz/~kryl/dokumentace.htm">návod na psaní dokumentace k zápočťáku</a>, také doporučuji přečíst.</p>

    <h4 id="nahrani-gitlab">Jak snadno nahrát program na GitLab</h4>

    <p>Pokud už program máte jako Gitový repozitář (třeba na GitHubu), je poměrně snadné nahrát ho na GitLab. Stačí si v naklonovaném repozitáři na vašem počítači přidat další <code>remote</code> a pak na něj pomocí <code>push</code> kód nahrát. Přidání remote pojmenovaného <code>gitlab</code> se dá udělat takto (více <a href="https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#adding-a-remote-repository">zde</a>): <code>git remote add gitlab https://gitlab.mff.cuni.cz/teaching/nprg031/2023-summer/student-LOGIN_DO_SISU.git</code>. A pak můžete pomocí <code>git push gitlab master</code> nahrát kód z větve <code>master</code> (výchozí jméno větve) na remote jménem <code>gitlab</code>.</p>

    <h2 id="uzitecne-info">Užitečné informace</h2>

    <h3>Dotazy a konzultace</h3>

    <p>Pokud vám něco, co říkám, nebude jasné, ptejte se. Ideálně hned, dokud je to aktuální. Je velmi pravděpodobné, že v učebně sedí několik dalších lidí s úplně stejným dotazem, ale bojí se zeptat. Nebojte se. Cvičení je pro vás. Cílem je, abyste látku pochopili, ne abych ji já jen zbytečně odvykládal.</p>

    <p>Pokud se stydíte zeptat, nebo je váš dotaz moc dlouhý či kontroverzní, můžete se zeptat po skončení cvičení. V tomto čase většina ostatních studentů už odejde a zůstanou jen ti, kteří se mnou chtějí něco řešit.</p>

    <p>Pokud by někdo chtěl něco dovysvětlit nebo se mu nedařilo a chtěl by probrat cokoliv jiného, napište mi email a domluvíme se na termínu konzultace.</p>

    <h4>MFF Discord</h4>

    <p>Kanál pro tohle cvičení: <a href="https://discord.com/channels/625428723302137876/893480125016981514">#alg-prg-cv-mtopfer</a>. Není povinné tam být, ale je to další místo, kde se můžete ptát na otázky a bavit se se mnou i se spolužáky.</p>

    <h3>V čem budeme programovat a jak to nainstaluju</h3>

    <p>Já budu na cvičení používat <a href="https://code.visualstudio.com/">Visual Studio Code</a>, které jsme používali v zimním semestru (a na rozdíl od <a href="https://visualstudio.microsoft.com/vs/">Visual Studia</a>, které se používá na přednáškách, jde spustit i na jiných platformách než Windows). Taky nesmím zapomenout na prostředí <a href="https://www.jetbrains.com/rider/">Rider</a> od JetBrains, které můžete jako studenti <a href="https://www.jetbrains.com/community/education/#students">používat zdarma</a>, nicméně není v labu nainstalované. <b>Pokud už máte nainstalovaný nebo oblíbený jiný editor (Atom, Sublime, ...), problém s tím nemám.</b></p>

    <p>Na počítačích v učebně jsou všechny potřebné nástroje už nainstalované.</p>

    <h4>API reference C#</h4>

    <p>V <a href="https://docs.microsoft.com/en-us/dotnet/api/?view=net-6.0">dokumentaci k C#</a> najdete popis tříd a metod ze standardní knihovny, které se vám při programování můžou hodit.</p>

    <h4>Instalace VS Code</h4>

    <ol>
      <li>Nainstalujte si <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</li>
      <li>Přidejte si do VS Code <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp">rozšíření pro C#</a> (rozšíření se do VS Code přidávají v levém panelu v ikoně <em>Extensions</em> nebo přes odkaz z webového prohlížeče).</li>
    </ol>

    <p>Stejné pokyny v angličtině najdete taky v <a href="https://code.visualstudio.com/docs/languages/csharp">dokumentaci</a> VS Code. Pro vývoj budeme používat .NET Core, postup vytvoření nového projektu si ukážeme na cvičení nebo ho najdete v <a href="https://code.visualstudio.com/docs/languages/dotnet">dokumentaci</a> VS Code.</p>

    <h4 id="csharp_project">Vytvoření nového projektu</h4>

    <p>Ve Visual Studiu je to snadné, stačí kliknout na <i>File</i> &rarr; <i>New</i> &rarr; <i>Project...</i> a vybrat <i>Console App</i>. Pak už se jen nastaví jméno a umístění projektu a je to. Pro naše projekty doporučuji zaškrtnout <i>Place solution and project in the same directory</i>, protože budeme pracovat vždy jen s jedním projektem současně, takže nepotřebujeme vytvářet pro projekt podsložku. Existuje také rozšíření <a href="https://marketplace.visualstudio.com/items?itemName=FilipKliber.RecodexTemplate">Recodex Template</a>, které vám dovolí místo <i>Console App</i> vybrat <i>Recodex</i>, čímž se automaticky nastaví některé vlastnosti zmíněné dále v textu, aby se řešení u vás chovalo stejně jako v ReCodExu.</p>

    <p>Ve VS Code ovšem tlačítko pro vytvoření nového projektu není. Pomůžeme si příkazem <code>dotnet</code> na příkazové řádce.</p>
    <ol>
      <li>Vytvořte složku, ve které chcete projekt mít a přejděte do ní v terminálu.</li>
      <li>
        Spusťte <code>dotnet new console</code>. To vám vyrobí <code>Program.cs</code>, který můžete editovat a spustit.
        <ul>
          <li>
            Pokud máte .NET 6 a novější, vyrobí se program s tzv. top-level statements (tedy bez <code>Main</code> metody), což nebude fungovat v ReCodExu.
            Projekt bez top-level statements se dá vyrobit pomocí <code>dotnet new console --use-program-main</code> (více <a href="https://docs.microsoft.com/en-us/dotnet/core/tutorials/top-level-templates#use-the-old-program-style">zde</a>).
          </li>
          <li>
            Ještě jedna poznámka k .NET 6: ve výchozím nastavení používá implicitní importy (takže na začátku programu nemusíte mít napsané <code>using System;</code> a některé další), které v ReCodExu nejsou zapnuté. Může se vám stát, že vám kód lokálně půjde zkompilovat, ale v ReCodExu to neprojde. Řešení je vypnout si implicitní importy i u sebe &ndash; z <code>.csproj</code> souboru odstraňte řádek <code>&lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;</code>.
          </li>
        </ul>
      </li>
      <li>Hodí se mít VS Code otevřený ve složce projektu, to se udělá snadno spuštěním <code>code .</code> (což otevře VS Code v aktuální složce).</li>
    </ol>

    <p>Když je VS Code otevřený přímo ve složce projektu, umí sám vygenerovat soubory potřebné pro spuštění projektu. Stačí na <i>Run and Debug</i> kartě kliknout na <i>.NET: Generate Assets for Build and Debug</i>. Aby ve VS Code správně fungovalo čtení vstupu, je potřeba ve vygenerovaném souboru <code>.vscode/launch.json</code> změnit řádek <i>console</i> na <code>&quot;console&quot;: &quot;integratedTerminal&quot;,</code>. Z příkazové řádky se projekt dá spustit pomocí <code>dotnet run</code>.</p>

    <h3 id="recodex">ReCodEx</h3>

    <p>Domácí úkoly z obou cvičení budou zadávány a odevzdávány pomocí systému ReCodEx.</p>

    <p>Jak rozchodit ReCodEx:</p>
    <ul>
      <li>Jděte na <a href="https://recodex.mff.cuni.cz/login">https://recodex.mff.cuni.cz/login</a>.</li>
      <li>V sekci <em>Přihlásit se pomocí externí služby</em> klikněte na <em>Ověřit uživatele</em>.</li>
      <li>Přihlaste se pomocí Centrální Autentizační Služby (CAS CUNI). Jméno a heslo jsou stejné jako do SISu.</li>
      <li>V menu vlevo dole je položka <em>SIS Integrace</em>. Tam se přidejte do skupiny <em>Programování 2</em>.</li>
    </ul>

    <h3>Řešil jsem KSPčko</h3>

    <p>Pokud jste už zdatnější a myslíte si, že by vás cvičení nebavilo, můžete se zapsat na <a
      href="https://mj.ucw.cz/vyuka/2021/p2x/">cvičení Martina Mareše pro pokročilé</a>. Můžete také chodit i na obě
      cvičení současně (v takovém případě si v SISu nechte zapsané moje cvičení).</p>

    <h3>Chci se procvičovat doma a nevím jak</h3>

    <p>Středoškolská soutěž <a href="https://kasiopea.matfyz.cz/">Kasiopea</a> má archiv domácích kol, kde se obtížnost
      úloh stupňuje od velmi lehkých k velmi náročným.</p>

    <p><a href="https://ksp.mff.cuni.cz/">Korespondenční seminář z programování</a> má online k dispozici nejen úlohy,
      ale i kuchařky vysvětlující nejrůznější oblasti algoritmizace, diskrétní matematiky a spousty dalších užitečných
      oblastí. Lehčí úlohy najdete v <a href="https://ksp.mff.cuni.cz/z/">začátečnické kategorii</a>.</p>

    <p><a href="https://pruvodce.ucw.cz/">Průvodce labyrintem algoritmů</a> je kniha (dostupná online) shrnující látku
      předmětů Algoritmizace, Algoritmy a datové struktury I a Algoritmy a datové struktury II. Její úvodní kapitoly
      rozebírají paměťovou a časovou složitost, binární vyhledávání, Euklidův algoritmus, třídění, haldy apod.</p>

    <p className="text-muted mt-3"><small>Část textu na této stránce jsem opsal od <a
      href="https://github.com/Jirka-Mayer/NPRG030-062/">Jirky Mayera</a>. Díky, Jirko!</small></p>

  </>)
}
