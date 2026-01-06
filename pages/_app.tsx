import '../styles/globals.css' // Le chemin doit pointer vers le nouveau dossier styles
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
