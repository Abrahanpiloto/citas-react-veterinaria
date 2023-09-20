import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes }) {
	const [nombre, setNombre] = useState('');
	const [dueño, setDueño] = useState('');
	const [email, setEmail] = useState('');
	const [celular, setCelular] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//Validacion de formulario:
		if ([nombre, dueño, email, celular, fecha, sintomas].includes('')) {
			setError(true);
			return;
		}
		setError(false);

		//Objeto paciente:
		const objetoPaciente = {
			nombre,
			dueño,
			email,
			celular,
			fecha,
			sintomas,
			id: generarId(),
		};

		setPacientes([...pacientes, objetoPaciente]);
		//nota: en este proyecto se necesita un objeto por cada paciente ingresado, para q un nuevo paciente no borre y reescriba el anterior se usa un spreed operator.

		//Reinicia el form:
		setNombre('');
		setDueño('');
		setEmail('');
		setCelular('');
		setFecha('');
		setSintomas('');
	};

	return (
		<div className="mx-5 md:w-1/2 lg:w-2/5 bg-white mb-10 rounded-lg  bg-opacity-90 ">
			<h2 className="mt-10 mb-10 border-2 font-extrabold text-3xl text-center">
				Seguimiento Pacientes
			</h2>
			<p className="text-lg mt-5 text-center mb-5">
				<span className=" text-cyan-700 font-bold">Añade</span> Pacientes y
				Administralos.
			</p>
			<form
				onSubmit={handleSubmit}
				className="h-full shadow-lg rounded-lg px-5"
			>
				{/* aviso de alerta de campos vacios */}
				{error && <Error />}

				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="text-cyan-700 font-bold block uppercase"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="texto"
						placeholder="nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="text-cyan-700 font-bold block uppercase"
					>
						Nombre Dueño
					</label>
					<input
						id="propietario"
						type="texto"
						placeholder="nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={dueño}
						onChange={(e) => setDueño(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="text-cyan-700 font-bold block uppercase"
					>
						Em@il
					</label>
					<input
						id="email"
						type="texto"
						placeholder="email contacto propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="celular"
						className="text-cyan-700 font-bold block uppercase"
					>
						Celular
					</label>
					<input
						id="celular"
						type="tel"
						placeholder="numero contacto propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={celular}
						onChange={(e) => setCelular(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="text-cyan-700 font-bold block uppercase"
					>
						Fecha de Alta
					</label>
					<input
						id="alta"
						type="date"
						placeholder="nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="text-cyan-700 font-bold block uppercase"
					>
						Sintomas de la mascota
					</label>
					<textarea
						id="sintomas"
						placeholder="describa los sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className="mb-7 font-bold p-2 transition-all bg-cyan-700 uppercase hover:bg-cyan-900 w-full text-white rounded-sm cursor-pointer"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
}

export default Formulario;
