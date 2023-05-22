import Head from 'next/head'
import Link from "next/link";

export default function Mgr() {
  return (<div lang="en">
    <Head>
      <title>ML-DEECo – Michal Töpfer</title>
    </Head>

    <h1>Machine-learning-based self-adaptation of component ensembles</h1>
    <p><i>Michal Töpfer</i></p>
    <p>Master thesis: <Link href="/mgr/thesis.pdf">PDF</Link></p>
    <h4>Abstract:</h4>
    <p>
      In the area of distributed self-adaptive smart systems (such as applications of Internet of Things and Cyber-Physical Systems), machine learning has been successfully used in several applications including the prediction of metrics regarding the components in the system (e.g., battery consumption), and pruning of the space of possible adaptations. It is clear that machine learning can be a useful tool in self-adaptive systems. Most of the research works focus on using the machine learning algorithms for a specific task, yet they are (at least partially) lacking in providing a systematic approach to the introduction of machine learning into the architecture of the system.
    </p>
    <p>
      In this thesis, we propose ML-DEECo &ndash; a machine-learning-enabled component model for adaptive component architectures. It is based on the concepts of autonomous components and their ensembles (coalitions) from the DEECo component model. We enrich DEECo with abstractions for specifying machine-learning-based estimates directly in the architecture of the system. The architect can thus focus on the business logic of the application while all the tasks necessary to provide the estimates (such as collecting the data and training the model) are provided by our runtime framework.
      We provide an implementation of the ML-DEECo runtime in Python and evaluate it by constructing simulations of self-adaptive systems from the areas of smart farming and Industry 4.0.
    </p>
  </div>)
}
