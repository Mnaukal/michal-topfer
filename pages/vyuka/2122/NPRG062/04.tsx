import Head from 'next/head'
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG062 – Algoritmizace – Michal Töpfer</title>
    </Head>

    <h1>Algoritmizace &ndash; 4. cvičení</h1>

<h2 id="házení-vajíček-z-mrakodrapu">Házení vajíček z mrakodrapu</h2>
<p>Na kraji města stojí <InlineMath math="n"/>-patrový mrakodrap, jehož obyvatelé se baví házením vajíček na chodník před domem. Ideální vajíčko se při hodu z <InlineMath math="p"/>-tého nebo vyššího patra rozbije; pokud ho hodíme z nižšího patra, zůstane v původním stavu. Jak na co nejméně hodů zjistit, kolik je <InlineMath math="p"/>? A co když chceme rozbít co nejmíň vajíček?</p>

  </>)
}
