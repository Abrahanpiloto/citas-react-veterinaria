import Pacientes from './Pacientes';
const ListadoPacientes = () => {
	return (
		<div className="mx-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll bg-white mb-10 rounded-md bg-opacity-90 ml-5">
			<h2 className="mt-10 mb-10 font-black text-center text-3xl">
				Listado Pacientes
			</h2>
			<p className="text-lg text-center mt-5 mb-10">
				<span className="text-cyan-700 font-bold">Administra</span> tus
				Pacientes y Citas
			</p>

			<Pacientes />
			<Pacientes />
			<Pacientes />
			<Pacientes />
			<Pacientes />
			<Pacientes />
		</div>
	);
};

export default ListadoPacientes;
