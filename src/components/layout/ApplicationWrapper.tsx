import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Footer, Navbar } from "../ui";

type TProps = {
  title: string,
  description: string,
}

//url -> example: http://localhost:3000
const origin = (typeof window !== 'undefined') ? window.location.origin : '';

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({children, title, description}) => {

  return (
    <>
      <Head>
        <title>{title ||'Campeones-LoL App'}</title>
        <meta name="author" content="Jesus Soledad" />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, campeones, League of Legends`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${origin }/img/banner.jpg`} />
      </Head>
      <div
        style={{ height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <Navbar />
        <main 
          style={{
            flex: '1 0 auto',
            padding: '1rem',
          }} 
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}