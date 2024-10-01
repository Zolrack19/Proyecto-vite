import { BrowserRouter as Router, Link, Outlet } from 'react-router-dom';

export default function Perfil() {

	return (
		<div className='container'>

			<div className="container-fluid p-0 m-0">
				<div className="navbar navbar-expand-md bg-body-tertiary py-0" style={{ height: "60px" }}>
					<div className="container-fluid p-0">
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav d-flex align-items-center" >
								<li className="nav-item px-2 d-flex align-items-center" style={{ height: "60px" }}>
									<Link to={"cuenta"} className="nav-link">Información general</Link>
								</li>
								<li className="nav-item px-2 d-flex align-items-center" style={{ height: "60px" }}>
									<Link to={"transacciones"} className="nav-link">Historial de transacciones</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div>
				<Outlet />
			</div>

		</div>
	)
}