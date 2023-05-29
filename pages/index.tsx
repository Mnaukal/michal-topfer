import Email from "@/components/email";
import Link from "next/link";
import profilovka from "@/public/profilovka_c_s.jpg"

export default function Index() {
  return (<>
    <section className="clearfix">
      <img src={profilovka.src} className="rounded float-end profilovka" alt="Mgr. Michal Töpfer" />
      <p>
        Doktorand na <a href="https://d3s.mff.cuni.cz/">Katedře distribuovaných a spolehlivých systémů</a> na <a
        href="https://www.mff.cuni.cz/">Matematicko-fyzikální fakultě Univerzity Karlovy</a>
      </p>

      <p>
        Organizátor Matematického korespondenčního semináře <a href="https://prase.cz">PraSe</a>
      </p>
      <p>
        Organizátor <a href="https://www.facebook.com/tabor.mladych.matematiku">Tábora mladých matematiků</a>
      </p>
      <p>
        Organizátor programátorské soutěže <a href="https://kasiopea.matfyz.cz">Kasiopea</a>
      </p>
      <p><b>E-mail:</b> <Email/></p>
    </section>

    <section className="mt-4">
      <h2>Projekty, na kterých jsem pracoval</h2>

      <h3>2023</h3>
      <ul>
        <li>
          <a href="https://mnaukal.itch.io/janitor-exorcist">Janitor Exorcist</a> &ndash; hra vytvořená za 48 hodin během <a
          href="https://itch.io/jam/spring-game-jam-cuni-mff">Spring Game Jam @ Matfyz 2023</a>
        </li>
        <li>
          <a href="https://ldjam.com/events/ludum-dare/52/corn-run">Corn Run</a> &ndash; hra vytvořená za 72 hodin během <a
          href="https://ldjam.com/events/ludum-dare/52/">Ludum Dare 52</a>
        </li>
        <li>
          <a href="https://doi.org/10.5220/0011693300003402">P. Hnětynka, M. Kruliš, M. Töpfer, T. Bureš: Modeling Machine Learning
            Concerns in Collective Adaptive Systems.</a>
        </li>
      </ul>

      <h3>2022</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ml-deeco">ML-DEECo</a> &ndash; a machine-learning-enabled component model for
          adaptive component architectures
          <ul>
            <li>
              <Link href="/mgr">M. Töpfer: Machine-learning-based self-adaptation of component ensembles</Link> (diplomová práce)
            </li>
            <li>
              <a href="https://d3s.mff.cuni.cz/publications/topfer_ensemblebased_2022/">M. Töpfer, M. Abdullah, T. Bureš, P.
                Hnětynka, M. Kruliš: Ensemble-Based Modeling Abstractions for Modern Self-optimizing Systems</a>
            </li>
            <li>
              <a href="https://d3s.mff.cuni.cz/publications/topfer_mldeeco_2022/">M. Töpfer, M. Abdullah, M. Kruliš, T. Bureš, P.
                Hnětynka: ML-DEECo: a Machine-Learning-Enabled Framework for Self-organizing Components</a>
            </li>
          </ul>
        </li>
      </ul>

      <h3>2021</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ivis-core">IVIS</a> &ndash; vizualizační framework vyvíjený na <a
          href="https://d3s.mff.cuni.cz/">D3S MFF UK</a>. Podílím se na využití frameworku IVIS v projektech
          <ul>
            <li>
              <a href="https://d3s.mff.cuni.cz/projects/afarcloud/">AFarCloud</a> &ndash; Aggregate Farming in the Cloud,
            </li>
            <li>
              <a href="https://d3s.mff.cuni.cz/projects/fitoptivis/">FitOptiVis</a> &ndash; From the cloud to the edge.
            </li>
          </ul>
        </li>
        <li><a href="https://emilyrook.itch.io/your-ordinary-life-or">Your Ordinary Life, Or?</a> &ndash; hra vytvořená za 48 hodin
          během <a href="https://itch.io/jam/gamehighed-jam-2021">GAMEHIGHED Jam 2021</a></li>
        <li><a href="https://semantic-gap.itch.io/essence-of-wine">Essence of Wine</a> &ndash; hra vytvořená za 72 hodin během <a
          href="https://itch.io/jam/lostcartridgejam3">Lost Cartridge Jam 3</a></li>
      </ul>

      <h3>2020</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ivis-core">IVIS</a> &ndash; vizualizační framework vyvíjený na <a
          href="https://d3s.mff.cuni.cz/">D3S MFF UK</a>
          <ul>
            <li>
              <a href="https://d3s.mff.cuni.cz/publications/bulej_ivis_2020/">L. Bulej, T. Bureš, P. Hnětynka, V. Čamra, P. Siegl,
                M. Töpfer: IVIS: Highly customizable framework for visualization and processing of IoT data</a>
            </li>
            <li>
              <Link href="/bc">M. Töpfer: Components for visualization of correlations for IVIS framework</Link> (bakalářská práce)
            </li>
          </ul>
        </li>
        <li><a href="https://onesosi.itch.io/fix-the-game">Fix the Game</a> &ndash; hra vytvořená za 48 hodin během <a
          href="https://itch.io/jam/gds-jam-2020">GDS jam 2020</a></li>
      </ul>

      <h3>2019</h3>
      <ul>
        <li><a href="https://www.oamb.cz/">Obchodní akademie Mladá Boleslav</a> &ndash; redesign webových stránek</li>
      </ul>

      <h3>2018</h3>
      <ul>
        <li><a href="http://www.pekargmb.cz/">Gymnázium Dr. Josefa Pekaře</a> &ndash; redesign webových stránek</li>
      </ul>

      <p>Další projekty najdete také na mém <a href="https://github.com/mnaukal/">GitHubu</a>.</p>
    </section>

  </>)
}
