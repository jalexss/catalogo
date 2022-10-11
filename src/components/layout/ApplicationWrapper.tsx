import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

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
        <title>{title ||'Champion-LoL App'}</title>
        <meta name="author" content="Jesus Soledad" />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, champion, League Of Legends`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${origin }/img/banner.jpg`} />
      </Head>
      <Navbar />
      <main 
        style={{
          padding: '0px 20px',
        }} 
      >
        {children}
      </main>
      <footer>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="">Rootstack</span>
        </a>
      </footer>
    </>
  )
}