import Head from "next/head";
import Link from "next/link";
import { InlineMath } from "react-katex";

export default function CourseLab() {
  return (
    <>
      <Head>
        <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
      </Head>

      <h1>Programování 1 &ndash; 3. cvičení</h1>

      <h2 id="funkce">Funkce</h2>
      <ul>
        <li>
          Napište funkci <code>compare(a, b)</code>, která vrací <code>1</code> pro <code>a &gt; b</code>, <code>0</code> pro <code>a == b</code> a <code>-1</code> pro <code>a &lt; b</code>.
        </li>
        <li>
          Napište funkci <code>is_even(n)</code>, která přijme celé číslo jako argument a vrací <code>True</code>, je-li číslo sudé, a <code>False</code>, je-li liché.
        </li>
        <li>
          Nyní napište funkci <code>is_odd(n)</code>, která vrací <code>True</code>, je-li <code>n</code> liché a <code>False</code>, je-li sudé. Využijte funkci <code>is_even</code>.
        </li>
        <li>Napište funkci, která počítá ciferný součet čísla.</li>
      </ul>

      <h2 id="textové-řetězce">Textové řetězce</h2>
      <ol style={{ listStyleType: "decimal" }}>
        <li>
          <p>
            Napište funkci <code>contains</code>, která pro zadaný text <code>t</code> a znak <code>z</code> zjistí, jestli <code>t</code> obsahuje znak <code>z</code>. <em>Ručně napište cyklus, který bude procházet přes znaky textu, nepoužívejte operátor <code>in</code> (pokud ho znáte).</em>
          </p>
          <div className="sourceCode">
            <pre className="sourceCode python">
              <code className="sourceCode python">
                <span className="op">&gt;&gt;&gt;</span> contains(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;n&quot;</span>){"\n"}
                <span className="va">True</span>{"\n"}
                <span className="op">&gt;&gt;&gt;</span> contains(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;z&quot;</span>){"\n"}
                <span className="va">False</span>
              </code>
            </pre>
          </div>
        </li>
        <li>
          <p>
            Napište funkci <code>count</code>, která pro zadaný text <code>t</code> a znak <code>z</code> spočítá, kolikrát se znak <code>z</code> vyskytuje v <code>t</code>. <em>Nepoužívejte metodu <a href="https://docs.python.org/3/library/stdtypes.html#str.count"><code>str.count</code></a> ze standardní knihovny.</em>
          </p>
          <div className="sourceCode">
            <pre className="sourceCode python">
              <code className="sourceCode python">
                <span className="op">&gt;&gt;&gt;</span> count(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;n&quot;</span>){"\n"}
                <span className="dv">2</span>
              </code>
            </pre>
          </div>
        </li>
        <li>
          <p>
            Napište funkci <code>find</code>, která pro zadaný text <code>t</code> a znak <code>z</code> zjistí, na jaké pozici se znak <code>z</code> poprvé vyskytuje v <code>t</code>. Pokud se <code>z</code> v <code>t</code> nevyskytuje, vraťte <code>-1</code>. <em>Nepoužívejte metodu <a href="https://docs.python.org/3/library/stdtypes.html#str.find"><code>str.find</code></a> ani <a href="https://docs.python.org/3/library/stdtypes.html#str.index"><code>str.index</code></a>ze standardní knihovny.</em>
          </p>
          <div className="sourceCode">
            <pre className="sourceCode python">
              <code className="sourceCode python">
                <span className="op">&gt;&gt;&gt;</span> find(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;b&quot;</span>){"\n"}
                <span className="dv">0</span>{"\n"}
                <span className="op">&gt;&gt;&gt;</span> find(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;n&quot;</span>){"\n"}
                <span className="dv">2</span>{"\n"}
                <span className="op">&gt;&gt;&gt;</span> find(<span className="st">&quot;banana&quot;</span>, <span className="st">&quot;z&quot;</span>){"\n"}
                <span className="dv">-1</span>{"\n"}
              </code>
            </pre>
          </div>
        </li>
      </ol>
      <h2 id="seznamy">Seznamy</h2>
      <p>Je dána posloupnost čísel...</p>
      <ol style={{ listStyleType: "decimal" }}>
        <li>zjistěte, jestli jsou všechna navzájem různá.</li>
        <li>vypište všechna opakující se čísla (ale každé jen jednou).</li>
        <li>najděte dvojici s co nejmenším rozdílem.</li>
      </ol>
      <p>
        Umíte předchozí úkoly vyřešit efektivněji, pokud víte, ze všechna zadaná čísla leží od <InlineMath math="1" /> do <InlineMath math="100" />?
      </p>
    </>
  );
}
