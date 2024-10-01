export default function Cuenta() {
	return (
		<div>
			<h3 className="mt-5 mb-3 ps-2">Detalles de cuenta</h3>
			<div className="ps-4">
				<h6>Plan</h6>
				<h5>Cuenta BASIC (gratuita)</h5>
				<p>Almacenamiento de datos de encuestas: <br />
					Perú
				</p>
			</div>

			<h3 className="mt-5 mb-3 ps-2">Perfil</h3>
			<div className="ps-4">
				<div className="row">
					<div className="col-6">
						<h6>Nombre</h6>
						<p>
							Esto sería el nombre que quiera
						</p>
						<p>editar</p>
					</div>

					<div className="col-6">
						<h6>Nombre de usuario</h6>
						<p>
							Esto sería el nombre de usuario
						</p>
						<p>editar</p>
					</div>
				</div>
				
				<div className="row">
					<div className="col-6">
						<h6>Contraseña</h6>
						<p>
							************
						</p>
						<p>editar</p>
					</div>

					<div className="col-6">
						<h6>Correo electrónico</h6>
						<p>
							Esto sería el correo
						</p>
						<p>editar</p>
					</div>
				</div>
			</div>

			<h3 className="mt-5 mb-3 ps-2">Apariencia</h3>
			<div className="ps-4">
				<h6>Apariencia</h6>
				<span>Escoge la apariencia que encaje mejor contigo </span>
				<select name="apariencia" id="apariencia">
					<option value="claro">claro</option>
					<option value="oscuro">oscuro</option>
				</select>
			</div>

		</div>
	)

}
