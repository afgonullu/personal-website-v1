import Head from "next/head"

const HeadData = (props) => (
  <div>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8CGQNFKP6M"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-8CGQNFKP6M');
          `,
        }}
      />
      <title>
        A Faruk Gonullu | Web Developer | I Design and Develop Modern Web Sites
        and Applications | JavaScript, React, Node, Next, Bootstrap, Responsive
      </title>
    </Head>
  </div>
)

export default HeadData
