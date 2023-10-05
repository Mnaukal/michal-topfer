import Head from 'next/head'
import Link from "next/link";
import { CardBorderDanger, CardBorderPrimary } from "@/components/cards";
import { Card } from 'react-bootstrap';

export default function CourseIndex() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG062 &ndash; Algoritmizace (ZS 2023/24)</h1>

    <p className="lead">Úterý 9:00, N8</p>

    <CardBorderPrimary>
      Cvičení probíhá v jednom bloku s cvičením z Programování 1 (do 11:20). Předměty Algoritmizace a Programování 1 jsou úzce spojené, takže je reálně budeme chápat jako jedno dlouhé cvičení. Další podrobnosti a přehled probrané látky najdete na stránce <Link href="NPRG030">Cvičení NPRG030 &ndash; Programování 1</Link>.
    </CardBorderPrimary>

    <h2>Co jsme dělali</h2>

    <p>Podívejte se na stránku <Link href="NPRG030/#co-bylo">Cvičení NPRG030 &ndash; Programování 1</Link>.</p>

    <h2>Přednáška</h2>

    <p>Cvičení je vypsáno k přednášce <a href="https://ksvi.mff.cuni.cz/~dvorak/vyuka/NPRG062/">doc. Tomáše Dvořáka</a> (středa 12:20).</p>

    <h2>Podmínky na zápočet</h2>

    {/*/}
    <CardBorderDanger>Předběžná verze, požadavky se ještě můžou měnit.</CardBorderDanger>
    {/**/}

    <p>Pro získání zápočtu z algoritmizace je potřeba</p>
    <ul>
      <li>získat alespoň <i>70 % bodů</i> za <b>domácí úkoly</b> (za účast na cvičeních získáte bonusové body),</li>
      <li><b>aktivně se účastnit cvičení</b> &ndash; prezentovat řešení domácího úkolu (případně úlohy ze cvičení).</li>
    </ul>

    <p>Zápočet budete potřebovat k tomu, abyste se mohli přihlásit na zkoušku. Navíc se úkoly budou postupně ztěžovat, proto doporučuji je řešit hned od začátku semestru.</p>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat 8 úkolů, každý za <i>8 bodů</i>. Celkem tedy za domácí úkoly budete moct získat až <i>64 bodů</i>, takže na zápočet bude potřeba <i>45 bodů</i>.</p>

    <p>Za účast na cvičení můžete získat bonusové body, konkrétně <i>1 bod</i> za každé cvičení. V průběhu semestru bude 11 cvičení (a jedno navíc na zápočtový test z programování), takže můžete získat až <i>11 bonusových bodů</i>.</p>

    <p>
      Některé úkoly budou spíše programovací, jiné spíše teoretické.
      Pro odevzdávání budeme používat systém <a href="../NPRG030/#recodex">ReCodEx</a>.
      Na každý úkol budete mít <b>dva týdny</b> a v&nbsp;tomto čase ho můžete odevzdat i víckrát.
    </p>

    <h3>Aktivní účast na cvičeních &ndash; prezentace řešení úlohy</h3>

    <p>
      Účast na cvičeních není povinná, ale je <b>silně doporučná</b>.
      Nicméně pro získání zápočtu musíte alespoň jednou za semestr <b>prezentovat řešení úlohy</b> (buď domácího úkolu nebo úlohy ze cvičení) pro ostatní studenty na cvičení. Vždy na začátku cvičení dostane několik studentů prostor ukázat své řešení zrovna končícího domácího úkolu. Kromě domácích úkolů můžete také prezentovat řešení některých vybraných úloh zadaných na cvičení.
    </p>

    <p>Od vámi prezentovaného řešení očekávám, že bude správně a že bude pochopitelné pro ostatní studenty na cvičení (případně budete schopni odpovídat na jejich otázky k řešení).</p>

    <h2>Užitečné informace</h2>

    <p>Podívejte se na stránku <Link href="NPRG030/#uzitecne-info">Cvičení NPRG030 &ndash; Programování 1</Link>.</p>
  </>)
}
