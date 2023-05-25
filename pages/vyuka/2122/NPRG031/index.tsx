import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from 'react-katex';
import { CardBorderPrimary, CardDark } from "@/components/cards";
import Lab from "@/components/vyuka/Lab";
import LabLink from "@/components/vyuka/LabLink";
import LabPrograms from "@/components/vyuka/LabPrograms";


export default function CourseIndex() {
  const labs = [
    <Lab key="1" order="1" date="17.2.">
       <p>Základy C#: proměnné, podmínky, cykly &ndash; <Link href="NPRG031/01">úlohy na procvičení</Link> (<LabPrograms order="1"/>).</p>
    </Lab>,
    <Lab key="2" order="2" date="24.2.">
      <p>Základní datové struktury v C# (<code>List</code>, <code>Dictionary</code>, <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples"><code>tuple</code></a>, ...), <a href="https://github.com/ReCodEx/utils/blob/master/runners/cs/Reader.cs">ReCodEx Reader</a> &ndash; <Link href="NPRG031/02">úlohy na procvičení</Link> (<LabPrograms order="2"/>).</p>
    </Lab>,
    <Lab key="3" order="3" date="3.3.">
      <p>Třídy (<code>class</code>) a rozhraní (<code>interface</code>) (<LabPrograms order="3"/> &ndash; <InlineMath math="\mathbb{Z}_7"/>).</p>
    </Lab>,
    <Lab key="4" order="4" date="10.3.">
      <p>Třídy a rozhraní &ndash; <code>IEquitable</code>, <code>IComparable</code> (<a href="04/">programy ze
        cvičení</a> &ndash; <InlineMath math="\mathbb{Z}_7"/>).</p>
    </Lab>,
    <Lab key="5" order="5" date="17.3.">
      <p>Dědičnost (<LabPrograms order="5"/> &ndash; Strom aritmetických výrazů).</p>
    </Lab>,
    <Lab key="6" order="6" date="24.3.">
      <p>Soubory (<LabPrograms order="6"/> &ndash; Synchronizace titulků).</p>
    </Lab>,
    <Lab key="7" order="7" date="31.3.">
      <p>Diskrétní simulace (<LabPrograms order="7"/> &ndash; Pošta).</p>
    </Lab>,
    <Lab key="8" order="8" date="7.4.">
      <p>Dynamické programování (<LabPrograms order="8"/>).</p>
      <ul>
          <li>Počet cest v DAGu</li>
          <li>Nejdelší rostoucí podposloupnost</li>
          <li><a href="https://kasiopea.matfyz.cz/archiv/2016/doma/D/">Lampy na ulici</a></li>
      </ul>
    </Lab>,
    <Lab key="9" order="9" date="14.4.">
      <p>Generické programování, funkcionální programování, enumerátory &ndash; <Link href="NPRG031/09">úlohy na procvičení</Link> (<LabPrograms order="9"/>).</p>
    </Lab>,
    <Lab key="10" order="10" date="21.4.">
      <p>Testy (<LabPrograms order="10"/> &ndash; <code>List&lt;T&gt;</code>).</p>
    </Lab>,
    <Lab key="11" order="11" date="28.4.">{/*TODO: &ndash; suploval David Šosvald*/}
      <p>WinForms (<LabPrograms order="11"/>).</p>
    </Lab>,
    <Lab key="12" order="12" date="5.5.">
      <p>Ukázková zkoušková úloha <a href="210614_zk_koncerty.pdf">Koncerty</a>.</p>
    </Lab>,
    <Lab key="13" order="13" date="12.5.">
      <p>Vývoj her v <a href="https://unity.com/">Unity</a> (<LabPrograms order="13"/>).</p>
    </Lab>,
    <Lab key="14" order="14" date="19.5">
      <p>Zápočtový test.</p>
    </Lab>
  ]

  return (<>
    <Head>
      <title>Cvičení NPRG031 – Programování 2 – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG031 &ndash; Programování 2 (LS 2021/22)</h1>

    <p className="lead">Čtvrtek 10:40, N8</p>

    <CardDark>
      Termín odevzdání zápočtového programu je 31. 8. 2022.
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

    <p>Cvičení je vypsáno k přednášce <a href="https://ksvi.mff.cuni.cz/~holan/">Tomáše Holana</a>.</p>

    <h2 id="zapocet">Podmínky na zápočet</h2>

    {/*
    <p className="text-danger">Předběžná verze, požadavky se ještě můžou měnit.</p>
    */}

    <CardBorderPrimary>
      Podmínky na zápočet jsou prakticky stejné jako v ZS. Téma zápočtového programu si vyberte do konce výuky v LS (22. 5. 2022). Termín odevzdání zápočtového programu je 31. 8. 2022.
    </CardBorderPrimary>

    <p>Na zápočet je potřeba</p>
    <ul>
      <li>získat alespoň 67 bodů za domácí úkoly (2/3 z maxima),</li>
      <li>napsat zápočtový test (bude na posledním cvičení),</li>
      <li>naprogramovat zápočtový program (viz <a href="#zapoctak">níže</a>).</li>
    </ul>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat domácí úkoly za celkem alespoň 100 bodů. Na zápočet potřebujete aspoň 67 bodů (tedy dvě třetiny z maxima). Na každý úkol budete mít dva týdny na odevzdání a v tomto čase můžete úkol odevzdat i víckrát. Pro odevzdávání budeme používat systém <a href="#recodex">ReCodEx</a>.</p>

    <h3>Zápočtový test</h3>

    <p>Test se bude psát nejspíš na posledním cvičení a bude zadán přes ReCodEx (takže ho budete řešit jako domácí úkoly, akorát s časem omezeným délkou cvičení). Další termíny budou vypsány podle potřeby během zkouškového období &ndash; celkem máte na test tři pokusy.</p>

    <h3 id="zapoctak">Zápočtový program</h3>

    <p>Zápočtový program je větší kus software, který budete programovat doma během semestru. <b>Do konce výuky v LS (22. 5. 2022) si vyberete téma a zašlete mi ho ke kontrole.</b> Na programu pak budete pracovat, dokud nebude hotový (včetně uživatelské a programátorské dokumentace). Výsledek práce mi zašlete ke kontrole takovým způsobem, abych mohl program spustit a vyzkoušet, ale také abych se mohl podívat na jeho zdrojový kód (pokud je to problematické, můžeme se domluvit na osobním předvedení).</p>

    {/*
    <p><em>Pokud budete mít během čtení zbytku této sekce pocit, že zatím neumíte programovat dost dobře na to, abyste vyrobili větší funkční software, nelekejte se. Je to úplně normální. Každý větší projekt vypadá zezačátku děsivě. Možná je lepší to zatím nečíst a vrátit se k tomu třeba začátkem listopadu, až budete mít víc zkušeností s programováním.</em></p>
    <div className="text-muted">
    */}

    <p>Zápočtový program má výjimku, že nemusí být v C# &ndash; použijte jazyk, který umíte nebo který nejlépe sedí na doménu problému. Na druhou stranu, já bych měl být schopný kód vašeho programu přečíst a pochopit, takže pokud chcete použít nějaký jiný jazyk než C#, domluvte se na tom se mnou už ve specifikaci programu.</p>

    <p>Zápočtový program <b>odevzdávejte nejpozději do 31. 8. 2022</b>, abych měl dost času se na něj podívat a vy jste případně měli možnost program doplnit nebo opravit podle mých připomínek před koncem akademického roku (30. 9. 2022 &ndash; po tomto datu už nejde udělovat zápočty v SISu).</p>

    <p>Byl bych rád, kdybyste program vyvíjeli v repozitáři na GitHubu nebo GitLabu (pro ten máme <a href="https://gitlab.mff.cuni.cz/">fakultní instanci</a>), případně podobné službě. Ušetří to práci oběma stranám. Pokud s gitem neumíte, pak máte ideální příležitost se ho naučit, budete ho beztak jednou potřebovat (<a href="https://www.youtube.com/watch?v=hwP7WQkmECE">Git ve 100 sekundách, ale nám stačí prvních 60</a> a potom <a href="https://www.youtube.com/watch?v=HkdAHXoRtos">to samé, ale detailněji</a>).</p>

    <p>Spoustu užitečných informací o zápočťácích už sepsali jiní, tak nemá smysl je znovu psát. Tady je pár odkazů: Martin Mareš má na <a href="https://mj.ucw.cz/vyuka/2021/p2x/pravidla.html">webu svého cvičení</a> hezky sepsané informace o zápočťácích. Navíc poskytuje i <a href="https://mj.ucw.cz/vyuka/zap/">seznam témat</a> pro inspiraci, takže doporučuji přečíst. Detailní informace včetně nápadů na témata sepsal taky <a href="https://github.com/Jirka-Mayer/NPRG030-062/blob/master/prg/zapoctaky.md">Jirka Mayer</a>. Nakonec, Rudolf Kryl má na webu <a href="https://ksvi.mff.cuni.cz/~kryl/dokumentace.htm">návod na psaní dokumentace k zápočťáku</a>, také doporučuji přečíst. Náležitosti tam popsané budu vyžadovat. Doporučuji dokumentaci psát anglicky, ale pokud si nejste jistí, klidně ji napište česky (příp. slovensky).</p>

    {/* konec "text-muted"
    </div>
      */}

    <h2 id="uzitecne-info">Užitečné informace</h2>

    <h3>Dotazy a konzultace</h3>

    <p>Pokud vám něco, co říkám, nebude jasné, ptejte se. Ideálně hned, dokud je to aktuální. Je velmi pravděpodobné, že v učebně sedí několik dalších lidí s úplně stejným dotazem, ale bojí se zeptat. Nebojte se. Cvičení je pro vás. Cílem je, abyste látku pochopili, ne abych ji já jen zbytečně odvykládal.</p>

    <p>Pokud se stydíte zeptat, nebo je váš dotaz moc dlouhý či kontroverzní, můžete se zeptat po skončení cvičení. V tomto čase většina ostatních studentů už odejde a zůstanou jen ti, kteří se mnou chtějí něco řešit.</p>

    <p>Pokud by někdo chtěl něco dovysvětlit nebo se mu nedařilo a chtěl by probrat cokoliv jiného, napište mi email a domluvíme se na termínu konzultace.</p>

    <h4>MFF Discord</h4>

    <p>Kanál pro tohle cvičení: <a href="https://discord.com/channels/625428723302137876/893480125016981514">#alg-prg-cv-mtopfer</a>. Není povinné tam být, ale je to další místo, kde se můžete ptát na otázky a bavit se se mnou i se spolužáky.</p>

    <h3>V čem budeme programovat a jak to nainstaluju</h3>

    <p>Já budu na cvičení používat <a href="https://visualstudio.microsoft.com/vs/">Visual Studio</a>, které znáte z přednášek. Také si ukážeme, jak použít <a href="https://code.visualstudio.com/">Visual Studio Code</a>, které jsme používali v zimním semestru, což se hodí těm, kteří nemají Windows. Taky nesmím zapomenout na prostředí <a href="https://www.jetbrains.com/rider/">Rider</a> od JetBrains, které můžete jako studenti <a href="https://www.jetbrains.com/community/education/#students">používat zdarma</a>, nicméně není v labu nainstalované. <b>Pokud už máte nainstalovaný nebo oblíbený jiný editor (Atom, Sublime, ...), problém s tím nemám.</b></p>

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

    <p>Ve Visual Studiu je to snadné, stačí kliknout na <i>File</i> &rarr; <i>New</i> &rarr; <i>Project...</i> a vybrat <i>Console App</i>. Pak už se jen nastaví jméno a umístění projektu a je to. Pro naše projekty doporučuji zaškrtnout <i>Place solution and project in the same directory</i>, protože budeme pracovat vždy jen s jedním projektem současně, takže nepotřebujeme vytvářet pro projekt podsložku.</p>

    <p>Ve VS Code ovšem tlačítko pro vytvoření nového projektu není. Pomůžeme si příkazem <code>dotnet</code> na příkazové řádce.</p>
    <ol>
      <li>Vytvořte složku, ve které chcete projekt mít a přejděte do ní v terminálu.</li>
      <li>
        Spusťte <code>dotnet new console</code>. To vám vyrobí <code>Program.cs</code>, který můžete editovat a spustit.
        <ul>
          <li>
            Pokud máte .NET 6 a novější, vyrobí se program s tzv. top-level statements (tedy bez <code>Main</code> metody), což nebude fungovat v ReCodExu.
            Projekt bez top-level statements se dá vyrobit pomocí <code>dotnet new console --framework net5.0</code> (více <a href="https://docs.microsoft.com/en-us/dotnet/core/tutorials/top-level-templates#use-the-old-program-style">zde</a>).
          </li>
          <li>
            Ještě jedna poznámka k .NET 6: ve výchozím nastavení používá implicitní importy (takže na začátku programu nemusíte mít napsané <code>using System;</code> a některé další), které v ReCodExu nejsou zapnuté. Může se vám stát, že vám kód lokálně půjde zkompilovat, ale v ReCodExu to neprojde. Řešení je vypnout si implicitní importy i u sebe &ndash; z <code>.csproj</code> souboru odstraňte řádek <code>&lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;</code>.
          </li>
        </ul>
      </li>
      <li>Hodí se mít VS Code otevřený ve složce projektu, to se udělá snadno spuštěním <code>code .</code>.</li>
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
