import Head from 'next/head'
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG031 – Programování 2 – Michal Töpfer</title>
    </Head>

    <h1>Programování 2 &ndash; 9. cvičení</h1>

    <p>Úlohy k procvičení.</p>

    <ol>
      <li>Napište funkci <code>Count</code>, která spočítá, kolik prvků sekvence splňuje zadaný predikát. Funkci můžete
        otestovat třeba tak, že ze seznamu vyberete pouze sudá čísla. Zkuste si predikát napsat jako lambdu.
      </li>
      <li>Napište funkci <code>First</code>, která vrátí první prvek sekvence splňující zadaný predikát.</li>
      <li>Napište funkci <code>Any</code>, která ověří, že alespoň jeden prvek sekvence splňuje zadaný predikát.</li>
      <li>Napište funkci <code>All</code>, která ověří, že všechny prvky sekvence splňují zadaný predikát.</li>
      <li>Napište funkci <code>Compose</code>, která složí dvě funkce. Parametry jsou funkce <InlineMath math="f: A \to B"/> a <InlineMath math="g: B \to C"/> a výsledek je
        funkce <InlineMath math="(g \circ f)(x) = g(f(x))"/>.
      </li>
      <li>
        Napište funkci <code>Zip</code>, která vezme dvě sekvence a vyrobí sekvenci dvojic.
        Například kód:
        <code><pre style={{marginBottom: 0}}>{`    var numbers = new[] { 1, 2, 3 };
    var letters = new[] { "a", "b", "c" };
    foreach ((int number, string letter) in Zip(numbers, letters))
        Console.WriteLine($"{number}: {letter}");`}</pre>
        </code>má vypsat:
        <code><pre>{`    1: a
    2: b
    3: c`}</pre>
        </code>Hint: <span className="hint">Podívejte se, jak funguje metoda <a
        href="https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1.GetEnumerator?view=net-5.0#remarks"
        style={{fontFamily: "var(--bs-font-monospace)", color: "inherit"}}>GetEnumerator()</a>.</span>
      </li>
      <li>Ze seznamu vět vyrobte seznam dvojic (věta, počet mezer v dané větě). Například pro seznam <code>[&quot;Hello, how
        are you?&quot;, &quot;The quick brown fox jumps over a lazy dog.&quot;]</code> je řešením <code>[(&quot;Hello, how are you?&quot;, 3),
        (&quot;The quick brown fox jumps over a lazy dog.&quot;, 8)]</code>.
      </li>
    </ol>

    <img src="../functions_inside.jpg" alt="Functions inside functions meme"/>
  </>)
}
