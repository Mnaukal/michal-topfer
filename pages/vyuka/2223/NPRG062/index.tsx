import Head from 'next/head'
import Link from "next/link";
import { CardBorderPrimary } from "@/components/cards";

export default function CourseIndex() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Cvičení NPRG062 &ndash; Algoritmizace (ZS 2022/23)</h1>

    <p className="lead">Úterý 9:50, N8</p>

    <CardBorderPrimary>
      Cvičení probíhá v jednom bloku s cvičením z Programování 1 (do 12:10). Předměty Algoritmizace a Programování 1 jsou úzce spojené, takže je reálně budeme chápat jako jedno dlouhé cvičení. Další podrobnosti a přehled probrané látky najdete na stránce <Link href="NPRG030">Cvičení NPRG030 &ndash; Programování 1</Link>.
    </CardBorderPrimary>

    <h2>Co jsme dělali</h2>

    <p>Podívejte se na stránku <Link href="NPRG030/#co-bylo">Cvičení NPRG030 &ndash; Programování 1</Link>.</p>

    <h2>Přednáška</h2>

    <p>Cvičení je vypsáno k přednášce <a href="https://ksvi.mff.cuni.cz/~topfer/">doc. Pavla Töpfera</a> (středa 15:40).</p>

    <h2>Podmínky na zápočet</h2>


    {/*
    <p className="text-danger">Předběžná verze, požadavky se ještě můžou měnit.</p>
    */}

    <p>Pro získání zápočtu z algoritmizace budete muset plnit domácí úkoly. Plánuji zadat 10 úkolů po 10 bodech. Celkem tedy budete moct získat 100 bodů. <b>Zápočet vám udělím, když získáte alespoň 67 bodů (dvě třetiny maxima).</b> Na každý úkol budete mít dva týdny a v tomto čase ho můžete odevzdat i víckrát.</p>

    <p>Zápočet budete potřebovat k tomu, abyste se mohli přihlásit na zkoušku. Navíc se úkoly budou postupně ztěžovat, proto doporučuji je řešit hned od začátku semestru.</p>

    <p>Některé úkoly budou spíše programovací, jiné spíše teoretické. Pro odevzdávání budeme používat systém <a href="../NPRG030/#recodex">ReCodEx</a>.</p>

    <h2>Užitečné informace</h2>

    <p>Podívejte se na stránku <Link href="NPRG030/#uzitecne-info">Cvičení NPRG030 &ndash; Programování 1</Link>.</p>
  </>)
}
