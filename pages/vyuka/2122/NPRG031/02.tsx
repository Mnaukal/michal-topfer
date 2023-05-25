import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG031 – Programování 2 – Michal Töpfer</title>
    </Head>

    <h1>Programování 2 &ndash; 2. cvičení</h1>

    <p>Úlohy k procvičení.</p>

    <ol>
      <li>Napište funkci <code>Contains</code>, která dostane pole a prvek a má rozhodnout, jestli prvek v poli je.</li>
      <li>Napište funkci <code>IndexOf</code>, která dostane pole a prvek a vrací pozici prvku v poli (případně <code>-1</code>, pokud tam není).</li>
      <li>Napište funkci, která vytvoří nové pole/list s prvky pouze ze sudých pozic zadaného pole.</li>
      <li>Napište funkci, která spočítá prefixové součty pro zadané pole.</li>
      <li>Napište funkci, která ověří, že textový řetězec je palindrom (čte se stejně zepředu i zezadu).</li>
      <li>Napište funkci, která připojí (concatenate) dvě pole za sebe (tedy vyrobí nové pole, jehož délka je součet délek zadaných polí a prvky jsou nejprve z prvního a pak z druhého pole).</li>
      <li>Napište funkci, která udělá merge dvou setřízených polí (tedy v lineárním čase vyrobí setřízené pole s prvky z obou vstupních polí).</li>
      <li>Napište funkci, která udělá rotaci pole o <code>k</code> pozic. To znamená, že prvních <code>k</code> prvků se přesune na konec pole. Např. rotace <code>[1,2,3,4,5,6]</code> o 2 je <code>[3,4,5,6,1,2]</code>. Zkuste to bez vytvoření nového pole (tzv. &quot;in place&quot;).</li>
      <li>Napište program, který vypíše seznam slov s obdélníkovým rámečkem. Např. pro slova <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;]</code> máte vypsat
        <code><pre>{`    *********
    * Hello *
    * World *
    * in    *
    * a     *
    * frame *
    *********`}</pre></code>
      </li>
      <li>Implementujte libovolný sort (např. select, insert, nebo bubble).</li>
    </ol>
  </>)
}
