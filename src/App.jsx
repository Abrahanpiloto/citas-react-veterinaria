import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
	const [pacientes, setPacientes] = useState([]);

	const [paciente, setPaciente] = useState({});

	//Nota: no estaban persistiendo los pacientes en el LS motivado a que en el main.jsx estaba en <React.StrictMode></React.StrictMode> , se elimino eso y se sustituyo por un fragment <></>
	useEffect(() => {
		const obtenerLS = () => {
			const pacientesLS = JSON.parse(localStorage.getItem("pacientes"))?? [];
			setPacientes(pacientesLS)
			console.log(pacientesLS)
		}
		obtenerLS();
	}, [])

	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
	}, [pacientes])

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
		setPacientes(pacientesActualizados)
	}

	

	return (
		
		<div className="container mx-auto mt-20">
			<Header />

			<div className="mt-12 md:flex">
				<Formulario 
					setPacientes={setPacientes} 
					pacientes={pacientes} 
					paciente={paciente}
					setPaciente={setPaciente}
				/>

				<ListadoPacientes 
					pacientes={pacientes} 
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
					
				/>
			</div>
		</div>
	);
}

export default App;
