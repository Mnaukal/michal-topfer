import Head from 'next/head'

export default function CourseLab() {
  return (<>
    <Head>
      <title>Cvičení NPRG030 – Programování 1 – Michal Töpfer</title>
    </Head>

    <h1>Programování 1 &ndash; 1. cvičení</h1>

<h2 id="úlohy-na-procvičení">Úlohy na procvičení</h2>
<h3 id="v-recodexu">V ReCodExu</h3>
<ul>
<li><a href="https://recodex.mff.cuni.cz/app/assignment/6f1d27c6-5426-4b00-b309-02348e9e84c6">Sečti dvě čísla</a></li>
<li><a href="https://recodex.mff.cuni.cz/app/assignment/6c49ec29-f73d-4043-a7c3-60acd348ed25">Oblíbené jídlo</a></li>
</ul>
<p><em>Poznámka:</em> Pozor na to, že ReCodEx vyhodnocuje správnost vašeho řešení tak, že ho porovná se vzorovým výsledkem. Porovnávání probíhá znak po znaku, takže text, který váš program vypíše, musí úplně přesně odpovídat vzorovému výstupu (nesmí v něm být ani žádný znak navíc).</p>
<h3 id="další-nápady-na-vyzkoušení">Další nápady na vyzkoušení</h3>
<ul>
<li>Jak se chová <code>//</code> (celočíselné dělení) a <code>%</code> (modulo) k záporným číslům?</li>
<li>Napište program, který spočítá věk uživatele. Uživatel zadá rok narození a program vypíše jeho věk. Pro jednoduchost ignorujte datum narození a věk počítejte jen jako <code>aktuální_rok - rok_narození</code>. Až to budete mít, můžete zkusit doplnit a práci s datem narození (uživatel zadá den, měsíc a rok narození a program spočítá jeho věk).</li>
</ul>


  </>)
}
