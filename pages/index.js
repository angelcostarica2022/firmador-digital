import Head from "next/head";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-hidden">
      <Head>
        <title>Actualizacion firma digital</title>
        <link rel="icon" href="/favicon.ico" />
        <Head>
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Head>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1  text-center">
        <h1 className="text-10xl font-bold">INICIO</h1>
        <img className="w-screen" src="/index1.jpg" />
        <img className="w-screen" src="/index2.jpg" />
        <img className="w-screen" src="/index3.jpg" />
        <h1 className="text-8xl font-bold capitalize">
          actualización de <br /> firma digital
        </h1>
        <a
          href="/firma-digital?firma=true"
          className="px-8 py-2 bg-indigo-800 text-white rounded-3xl my-10 text-3xl capitalize"
        >
          INFORMACIÓN
        </a>
        <img className="my-10 w-11/12 mx-auto" src="/10-1.jpg"/>
        <img className="w-screen" src="/index4.jpg" />
        <p className="w-10/12 mx-auto text-left my-10 text-blue-900 leading-7">
          Al actualizar tu DNI electrónico, podrás realizar una firma digital y
          también autenticar tu identidad en medios virtuales preparados para
          tal fin mediante los certificados digitales que se activan con este
          documento (uno para firma digital y otro para autentificación). Estos
          certificados tienen una vigencia de 4 años, por lo cual es importante
          que los renueves al finalizar este periodo. Este trámite puede
          realizarse de manera digital.
          <p className="text-center my-5">
            <a
              href="/firma-digital?firma=true"
              className="bg-indigo-600 text-white px-8 py-2 rounded"
            >
              Actualizar la Firma Digital
            </a>
          </p>
          Para solicitar la actualización de su Firma Digital debe solicitarlo a
          la entidad financiera de su gusto. Es totalmente gratuito.
        </p>

        <img className="w-screen" src="/index5.jpg" />
      </main>
    </div>
  );
};

Home.layout = "L2";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/
}
export default Home;
