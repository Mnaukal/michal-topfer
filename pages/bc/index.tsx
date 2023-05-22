import Head from 'next/head'
import Link from "next/link";

export default function Bc() {
  return (<div lang="en">
    <Head>
      <title>IVIS – Michal Töpfer</title>
    </Head>

    <h1>Components for visualization of correlations for IVIS framework</h1>
    <p><i>Michal Töpfer</i></p>
    <p>Bachelor thesis: <Link href="/bc/thesis.pdf">PDF</Link></p>
    <h4>Abstract:</h4>
    <p>
      As the number of IoT devices connected to the internet grows, the amounts of data
      which need to be analysed and visualized also increase. One of the frameworks for
      creating complex configurable visualizations is IVIS, a web-based open-source framework
      developed at D3S, MFF UK.
    </p>
    <p>
      In this thesis, we develop and implement components for scatter plot, bubble plot,
      heatmap chart and histogram chart, which did not exist previously in the framework.
      These components can be used to visualize correlations among data and to display properties
      of data distribution.
    </p>
    <p>
      Special emphasis is given to interactivity and configurability of components and a
      detailed description of the configuration options is provided. We also create a set of
      examples to show how to use the newly added components together with existing parts
      of the framework. Existing charts in the framework are also enhanced with the newly
      introduced concepts.
    </p>
  </div>)
}
