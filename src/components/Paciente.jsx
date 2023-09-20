const Paciente = ({ paciente }) => {
	const { nombre, dueño, email, celular, fecha, sintomas } = paciente;

	return (
		<div className=" bg-slate-200 mt-5 m-5 px-5 py-8 rounded-md shadow-lg">
			<p className="font-bold uppercase mb-3">
				Nombre: {''}
				<span className="font-normal normal-case">{nombre}</span>
			</p>

			<p className="font-bold uppercase mb-3">
				Dueño: {''}
				<span className="font-normal normal-case">{dueño}</span>
			</p>

			<p className="font-bold uppercase mb-3">
				Em@il: {''}
				<span className="font-normal normal-case">{email}</span>
			</p>

			<p className="font-bold uppercase mb-3">
				Celular: {''}
				<span className="font-normal normal-case">{celular}</span>
			</p>

			<p className="font-bold uppercase mb-3">
				Fecha de alta: {''}
				<span className="font-normal normal-case">{fecha}</span>
			</p>

			<p className="font-bold uppercase mb-3">
				Sintomas: {''}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>
			<div className="">
				<button className="bg-blue-700 rounded-md uppercase text-white py-1 px-8 hover:bg-blue-500 hover:text-black font-bold transition-all">
					Editar
				</button>
				<button className="bg-red-600 rounded-md uppercase text-white py-1 px-6 ml-4 hover:bg-red-400 hover:text-black font-bold transition-all">
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
