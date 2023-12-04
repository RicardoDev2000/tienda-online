import Head from "next/head"
import { FC, ReactNode } from "react";
import { Navbar, SideMenu } from "../ui";


interface Props {
  title: string;
  pageDescription: string;
  imageFullURL?: string;
  children:ReactNode;
}

export const ShopLayouts: FC<Props> = ({ children,title, pageDescription, imageFullURL }) => {
  return (
    <> 
       <Head>
        <title>{title}</title>
        <meta name="description" content="pageDescription"/>
        <meta name="og:title" content={title}/>
        <meta name="og:description" content={pageDescription}/>

      { imageFullURL &&( 
        <meta name="og:image" content={imageFullURL}/>
      )}
       </Head>


       <nav>
        <Navbar/>
       </nav>
       
        <SideMenu/>

       {/* Main */}
        <main style={{
          margin: '80px auto',
          maxWidth:'1440px',
          padding: '0px 30px',
        }}>
          {children}
        </main>

        {/*FOOTER*/}
        <footer>
            {/*Todo:FOOTER */}
        </footer>
        
    </>

  )
}



