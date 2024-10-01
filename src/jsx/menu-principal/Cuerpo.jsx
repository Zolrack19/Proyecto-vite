import "/src/estilos/principal1.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Cuerpo(props) {
	return (
		<div>
			<h3 class="p-4">¡Te damos la bienvenida!</h3>

			<div class="container-propio ">

				<div class="izquieda">
					<div class="border border-2 p-0" id="sub-navbar">

						<ul class="navbar-nav ms-auto flex-row">
							<li class="nav-item px-0 pe-4">
								<div class="border-0 rounded" className='btn nav-link' id="carpeta">carpetas</div>
							</li>
							<li class="nav-item px-0 pe-2 d-none d-xl-block">
								<div class="border-0 rounded" className='btn nav-link'>flex</div>
							</li>
							<li class="nav-item px-0 pe-4 d-none d-xl-block">
								<div class="border-0 rounded" className='btn nav-link'>grid</div>
							</li>
							<li class="nav-item px-0 ms-auto ">
								<Link to="/nueva-encuesta" className='nav-link text-light'><button id="crear-encuesta">Crear encuesta</button></Link>
							</li>
						</ul>
					</div>

					<div id="react-tarjeta">
					</div>
				</div>

				<div class="derecha">
					<article class="sugerencias">
						<h2>Sugerencias</h2>
						<ul class="enlace-articulos">
							<li>Crea tu encuesta</li>
							<li>Envía tu encuesta</li>
							<li>Comparte resultados de tu encuesta</li>
						</ul>
					</article>
				</div>
				<script type="module" src="./prueba.jsx"></script>
			</div>
		</div>
	)
}