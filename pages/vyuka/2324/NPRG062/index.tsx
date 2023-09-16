import Head from 'next/head'
import Link from "next/link";
import { CardBorderPrimary } from "@/components/cards";
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

    {/**/}
    <p className="text-danger">Předběžná verze, požadavky se ještě můžou měnit.</p>
    {/**/}

    <p>Pro získání zápočtu z algoritmizace potřebujete získat alespoň <i>30 bodů</i>. Body dostanete za <b>aktivní účast na cvičeních</b> a plnění <b>domácích úkolů</b>.</p>

    <p>Zápočet budete potřebovat k tomu, abyste se mohli přihlásit na zkoušku. Navíc se úkoly budou postupně ztěžovat, proto doporučuji je řešit hned od začátku semestru.</p>

    <h3>Aktivní účast na cvičeních</h3>

    <p>
      Účast na cvičeních není povinná, ale je <b>silně doporučná</b>.
      Za každé cvičení, na kterém budete řešit úlohy a aktivně se zapojovat, dostanete <i>1 bod</i>.
      V průběhu semestru bude 11 cvičení, takže za aktivní účast můžete dostat až <i>11 bodů</i>.
    </p>

    <h3>Domácí úkoly</h3>

    <p>Plánuji zadat 10 úkolů, každý za <i>3 body</i>. Celkem tedy za domácí úkoly budete moct získat až <i>30 bodů</i>.</p>

    <p>
      Některé úkoly budou spíše programovací, jiné spíše teoretické.
      Pro odevzdávání budeme používat systém <a href="../NPRG030/#recodex">ReCodEx</a>.
      Na každý úkol budete mít <b>dva týdny</b> a v&nbsp;tomto čase ho můžete odevzdat i víckrát.
    </p>

    <Card border="secondary" className="mb-3">
      <Card.Header>
        Příklady, jak získat body na zápočet
      </Card.Header>
      <Card.Body>
        <ul className='card-text'>
          <li>Splnit všechny domácí úkoly bez chyby.</li>
          <li>Aktivní účast na 9 cvičeních (<i>9 bodů</i>) + splnit 7 z 10 domácích úkolů bez chyby (<i>21 bodů</i>).</li>
          <li>&hellip;</li>
        </ul>
      </Card.Body>
    </Card>

    <h2>Užitečné informace</h2>

    <p>Podívejte se na stránku <Link href="NPRG030/#uzitecne-info">Cvičení NPRG030 &ndash; Programování 1</Link>.</p>
  </>)
}
