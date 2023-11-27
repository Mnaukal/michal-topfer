import "bootswatch/dist/lux/bootstrap.min.css";
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/default.css';
import '@/styles/globals.css'
import '@/styles/collapse.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Navigation from "@/components/navigation";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <title>Michal Töpfer</title>
        <meta name="description" content="Osobní stránka Michala Töpfera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <main className="container-xl mb-4 mt-4">
        <Component {...pageProps} />
      </main>
    </SSRProvider>
  )
}
