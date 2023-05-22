import Head from "next/head";
import Link from "next/link";

export default function Alge() {
  return (
    <>
      <Head>
        <title>AK2 &lt;&ndash;&gt; OPTIc3NET – Michal Töpfer</title>
      </Head>

      <h1>AK2 &lt;&ndash;&gt; OPTIc3NET</h1>

      <p>
        Skripty pro převod mezi formáty Atletické kanceláře (nastavení kamera Alge &ndash; formát pro starší verze OPTIc)
        a novou verzí OPTIc3NET.
      </p>
      <p>
        <i>Autor:</i> Michal Töpfer, AC Mladá Boleslav, z. s. (<a href="mailto:michal.topfer@matfyz.cz">michal.topfer@matfyz.cz</a>)
      </p>

      <h2>Stažení</h2>
      <p>
        <Link href="/alge/prihlasky_(kancl-kamera).py">prihlasky_(kancl-kamera).py</Link>
      </p>
      <p>
        <Link href="/alge/vysledky_(kamera-kancl).py">vysledky_(kamera-kancl).py</Link>
      </p>

      <h2>Instalace</h2>

      <p>
        Skripty vyžadují Python, který se dá stáhnout a nainstalovat z{" "}
        <a href="https://www.python.org/downloads/">https://www.python.org/downloads/</a>.
      </p>
      <p>
        V programu OPTIc3NET je potřeba povolit export do XML a nastavit DefaultFileName na <code>&#123;nr&#125;</code>:
        <br />
        <img src="/alge/alge_settings.png" />
      </p>

      <h2>Použití</h2>

      <p>
        Skripty uložte přímo do složky se soubory generovanými z AK2 (<code>C:\ProgramData\On line system\AthleticOffice\Camera\[ID závodu]</code>).
      </p>

      <h3>Přihlášky</h3>
      <p>
        Po vygenerování souborů pro kameru v AK2 spusťte <b>prihlasky_(kancl-kamera).py</b>. Ten vyrobí <b>[číslo].heatxml</b> soubory (ve stejné složce), které se dají importovat do OPTIc3NET (pravé tlačítko v okně Meet browser, Import heats).
      </p>

      <h3>Výsledky</h3>
      <p>
        V programu OPTIc3NET exportujte výsledky běhu (Export the result list <img src="/alge/alge_export.png" /> v okně Heat
        list) do složky atletické kanceláře. Spusťte <b>vysledky_(kamera-kancl).py</b>. Ten převede soubory <b>[číslo].heatresultxml</b> na <b>[číslo].txt</b>, které umí importovat AK2.
      </p>
    </>
  );
}
