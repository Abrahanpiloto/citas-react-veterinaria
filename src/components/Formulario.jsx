import { useState, useEffect } from "react";

function Formulario() {
	const [nombre, setNombre] = useState("");
	const [dueño, setDueño] = useState("");
	const [email, setEmail] = useState("");
	const [celular, SetCelular] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	return (
		<div className="md:w-1/2 lg:w-2/5 bg-white mb-10 rounded-md bg-opacity-90">
			<h2 className="mt-10 mb-10 font-extrabold text-3xl text-center">
				Seguimiento Pacientes
			</h2>
			<p className="text-lg mt-5 text-center mb-5">
				<span className=" text-cyan-700 font-bold">Añade</span> Pacientes y
				Administralos
			</p>
			<form className=" bg-opacity-50 shadow-lg rounded-lg  px-5">
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
						onChange={(e) => SetCelular(e.target.value)}
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
					className="font-bold p-2 transition-all bg-cyan-700 uppercase hover:bg-cyan-900 w-full text-white rounded-sm cursor-pointer"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
}

export default Formulario;
