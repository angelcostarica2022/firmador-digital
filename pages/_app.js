import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Layout2 from "../components/Layout2";
import "../styles/embla.css";
import Head from "next/head";
const layouts = {
  L1: Layout,
  L2: Layout2,
};

function MyApp({ Component, pageProps }) {
  let Layout = layouts["L1"];

  if (Component.layout == "L2") {
    Layout = layouts["L2"];
  }

  {
    /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
    EJEMPLO: 
    
    Para seleccionar el segundo Layout en Example, antes del export default se debe poner: 
    Example.layout = "L2"

    Para seleccionar el primer layout en Example, no sé declara nada.
*/
  }
  return (
    <Layout>
      <Head>
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
