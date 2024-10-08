import Email from "@/components/email";
import Link from "next/link";
import profilovka from "@/public/profilovka_c_s.jpg"
import { Badge, BadgeType } from "@/components/badges";

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

      <h3>2024</h3>
      <ul>
        <li>
        <a href="https://d3s.mff.cuni.cz/projects/extremexp/">ExtremeXP</a> &ndash; EXPerimentation driven and user eXPerience oriented analytics for eXtremely Precise outcomes and decisions
        </li>
        <li>
          <Badge type={BadgeType.Paper}/>
          <a href="https://d3s.mff.cuni.cz/publications/michaltopfer/" /* TODO: link */>M. Töpfer, D. Khalyeyev, T. Bureš, P. Hnětynka, F. Plášil: How Well Do LLMs Understand DEECo Ensemble-based Component Architectures</a>
        </li>
        <li>
          <Badge type={BadgeType.Paper}/>
          <a href="https://d3s.mff.cuni.cz/publications/michaltopfer/" /* TODO: link */>M. Abdullah, M. Töpfer, T. Bureš: Robin: A Systematic Literature Mapping Management Tool</a>
        </li>
      </ul>

      <h3>2023</h3>
      <ul>
        <li>
          <Badge type={BadgeType.Paper}/>
          <a href="https://d3s.mff.cuni.cz/publications/topfer_machinelearning_2023/">M. Töpfer, M. Abdullah, T. Bureš, P. Hnětynka, M. Kruliš: Machine-learning abstractions for component-based self-optimizing systems</a>
        </li>
        <li>
          <Badge type={BadgeType.Paper}/>
          <a href="https://d3s.mff.cuni.cz/publications/topfer_online_2023/">M. Töpfer, F. Plášil, T. Bureš, P. Hnětynka, M. Kruliš, D. Weyns: Online ML Self-adaptation in Face of Traps</a>
        </li>
        <li>
          <Badge type={BadgeType.Web}/>
          <a href="http://michal.topfer.matfyz.cz">michal.topfer.matfyz.cz</a> &ndash; moje webové stránky (tyto stránky) vytvořené pomocí <a href="https://nextjs.org/">Next.js</a>, <a href="https://react.dev/">React</a>, <a href="https://www.typescriptlang.org/">TypeScript</a> a <a href="https://getbootstrap.com/">Bootstrap</a> (téma <a href="https://bootswatch.com/lux/">Lux</a> z <a href="https://bootswatch.com/">Bootswatch</a>); <a href="https://gitlab.mff.cuni.cz/topfermi/michal-topfer/">zdrojový kód</a> je na MFF GitLabu
        </li>
        <li>
          <Badge type={BadgeType.Game}/>
          <a href="https://mnaukal.itch.io/janitor-exorcist">Janitor Exorcist</a> &ndash; hra vytvořená za 48 hodin během <a href="https://itch.io/jam/spring-game-jam-cuni-mff">Spring Game Jam @ Matfyz 2023</a>
        </li>
        <li>
          <Badge type={BadgeType.Game}/>
          <a href="https://ldjam.com/events/ludum-dare/52/corn-run">Corn Run</a> &ndash; hra vytvořená za 72 hodin během <a href="https://ldjam.com/events/ludum-dare/52/">Ludum Dare 52</a>
        </li>
        <li>
          <Badge type={BadgeType.Paper}/>
          <a href="https://doi.org/10.5220/0011693300003402">P. Hnětynka, M. Kruliš, M. Töpfer, T. Bureš: Modeling Machine Learning Concerns in Collective Adaptive Systems.</a>
        </li>
      </ul>

      <h3>2022</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ml-deeco">ML-DEECo</a> &ndash; a machine-learning-enabled component model for adaptive component architectures
          <ul>
            <li>
              <Badge type={BadgeType.Paper}/>
              <Link href="/mgr">M. Töpfer: Machine-learning-based self-adaptation of component ensembles</Link> (diplomová práce)
            </li>
            <li>
              <Badge type={BadgeType.Paper}/>
              <a href="https://d3s.mff.cuni.cz/publications/topfer_ensemblebased_2022/">M. Töpfer, M. Abdullah, T. Bureš, P. Hnětynka, M. Kruliš: Ensemble-Based Modeling Abstractions for Modern Self-optimizing Systems</a>
            </li>
            <li>
              <Badge type={BadgeType.Paper}/>
              <a href="https://d3s.mff.cuni.cz/publications/topfer_mldeeco_2022/">M. Töpfer, M. Abdullah, M. Kruliš, T. Bureš, P. Hnětynka: ML-DEECo: a Machine-Learning-Enabled Framework for Self-organizing Components</a>
            </li>
            <li>
              <Badge type={BadgeType.Paper}/>
              <a href="https://d3s.mff.cuni.cz/publications/abdullah_introducing_2023/">M. Abdullah, M. Töpfer, T. Bureš, P. Hnětynka, M. Kruliš, F. Plášil: Introducing Estimators&mdash;Abstraction for Easy ML Employment in Self-adaptive Architectures</a>
            </li>
          </ul>
        </li>
      </ul>

      <h3>2021</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ivis-core">IVIS</a> &ndash; vizualizační framework vyvíjený na <a href="https://d3s.mff.cuni.cz/">D3S MFF UK</a>. Podílím se na využití frameworku IVIS v projektech
          <ul>
            <li>
              <a href="https://d3s.mff.cuni.cz/projects/afarcloud/">AFarCloud</a> &ndash; Aggregate Farming in the Cloud,
            </li>
            <li>
              <a href="https://d3s.mff.cuni.cz/projects/fitoptivis/">FitOptiVis</a> &ndash; From the cloud to the edge.
            </li>
          </ul>
        </li>
        <li>
          <Badge type={BadgeType.Game}/>
          <a href="https://emilyrook.itch.io/your-ordinary-life-or">Your Ordinary Life, Or?</a> &ndash; hra vytvořená za 48 hodin během <a href="https://itch.io/jam/gamehighed-jam-2021">GAMEHIGHED Jam 2021</a>
        </li>
        <li>
          <Badge type={BadgeType.Game}/>
          <a href="https://semantic-gap.itch.io/essence-of-wine">Essence of Wine</a> &ndash; hra vytvořená za 72 hodin během <a href="https://itch.io/jam/lostcartridgejam3">Lost Cartridge Jam 3</a>
        </li>
      </ul>

      <h3>2020</h3>
      <ul>
        <li>
          <a href="https://github.com/smartarch/ivis-core">IVIS</a> &ndash; vizualizační framework vyvíjený na <a
          href="https://d3s.mff.cuni.cz/">D3S MFF UK</a>
          <ul>
            <li>
              <Badge type={BadgeType.Paper}/>
              <a href="https://d3s.mff.cuni.cz/publications/bulej_ivis_2020/">L. Bulej, T. Bureš, P. Hnětynka, V. Čamra, P. Siegl, M. Töpfer: IVIS: Highly customizable framework for visualization and processing of IoT data</a>
            </li>
            <li>
              <Badge type={BadgeType.Paper}/>
              <Link href="/bc">M. Töpfer: Components for visualization of correlations for IVIS framework</Link> (bakalářská práce)
            </li>
          </ul>
        </li>
        <li>
          <Badge type={BadgeType.Game}/>
          <a href="https://onesosi.itch.io/fix-the-game">Fix the Game</a> &ndash; hra vytvořená za 48 hodin během <a href="https://itch.io/jam/gds-jam-2020">GDS jam 2020</a>
        </li>
      </ul>

      <h3>2019</h3>
      <ul>
        <li>
          <Badge type={BadgeType.Web}/>
          <a href="https://www.oamb.cz/">Obchodní akademie Mladá Boleslav</a> &ndash; redesign webových stránek
        </li>
      </ul>

      <h3>2018</h3>
      <ul>
        <li>
          <Badge type={BadgeType.Web}/>
          <a href="http://www.pekargmb.cz/">Gymnázium Dr. Josefa Pekaře</a> &ndash; redesign webových stránek
        </li>
      </ul>

      <p>Další projekty najdete také na mém <a href="https://github.com/mnaukal/">GitHubu</a>.</p>
    </section>

  </>)
}
