import "/src/estilos/principal1.css"

import { BrowserRouter as Router, Link, useNavigate, useLocation } from 'react-router-dom';

export default function Barra() {
	const navegacion = useNavigate(); // hook para manejar la navegación
	const ubicacion = useLocation(); // hook para ver la ruta actual

	const cambios = (event) => {
		const value = event.target.value;
		
		if (value === "usuario" && ubicacion.pathname !== "/perfil/cuenta") {
			navegacion("/perfil"); // Navegar a perfil
		} else if (value === "cerrar") {
			window.location.href = '/index.html';
		}

		event.target.value = ""
	};
	return (

		<nav className="navbar navbar-expand-md bg-body-tertiary p-0">
			<div className="container-fluid p-2 px-4"
				style={{ backgroundColor: "#770048" }}
			>
				<img className="navbar-brand logo" src="/src/assets/logo_transp.png" alt="EncuestaPe" />
				<Link to="/home" className='nav-link fw-bold text-light'>Home</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">

					<ul className="navbar-nav ms-auto">
						<li className="nav-item px-2">
							<Link to="/planes" className='nav-link'><button className="bg-warning fw-bold rounded border-0" id="btn-plan">Ampliar plan</button></Link>

						</li>
						<li className="nav-item px-2">
							<Link to="/nueva-encuesta" className='nav-link'><button className="fw-bold rounded border-0" id="btn-crear-encuesta">Crear encuesta</button></Link>
						</li>
						<li className="nav-item my-auto fw-bold">
							<select name="opciones" id="opciones" onChange={cambios}>
								<option value="" disabled selected>nombre de usuario</option>
								<option value="usuario">Información de cuenta</option>
								<option value="cerrar">Cerrar sesión</option>
							</select>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

