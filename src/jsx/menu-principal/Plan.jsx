import "/src/estilos/planes.css"

export default function Plan() {
	return (
		<div>
			<h2 className="text-center mt-4 mb-5 fs-1">Elige un plan que te resulte conveniente</h2>
			<div className="container border d-block p-0 justify-content-center gap-4 d-md-flex px-lg-5">
				<div className="text-center border border-2 pt-3 mb-3">
					<h4>Premier anual</h4>
					<h3>209 PEN /mes</h3>
					<p>2508 PEN, se paga una vez al año</p>
					<button className="rounded border-0 my-3 py-1 fw-bold" id="btn-premier"
						style={{
							minWidth: "80%",
							color: "white",
					    backgroundColor: "rgb(0, 0, 144)"
						}}
					>seleccionar</button>
					<ul class="listado">
						<li>Cantidad ilimitada de encuestas</li>
						<li>Preguntas ilimitadas por encuesta</li>
						<li>40 000 respuestas al año</li>
						<li>Atención al cliente 24/7 por correo electrónico</li>
					</ul>
				</div>

				<div className="text-center border border-2 pt-3 mb-3">
					<h4>Avanzado anual</h4>
					<h3>85 PEN /mes</h3>
					<p>1020 PEN, se paga una vez al año</p>
					<button className="rounded border-0 my-3 py-1 fw-bold" id="btn-avanzado"
						style={{
							minWidth: "80%",
							color: "white",
					    backgroundColor: "rgb(0, 196, 0)"
						}}
					>seleccionar</button>
					<ul class="listado">
						<li>Cantidad ilimitada de encuestas</li>
						<li>Preguntas ilimitadas por encuesta</li>
						<li>40 000 respuestas al año</li>
						<li>Atención al cliente 24/7 por correo electrónico</li>
					</ul>
				</div>
				
				<div className="text-center border border-2 pt-3 mb-3">
					<h4>Estándar anual</h4>
					<h3>89 PEN /mes</h3>
					<button className="rounded border-0 my-3 py-1 fw-bold" id="btn-estandar" 
						style={{
							minWidth: "80%",
							color: "white",
					    backgroundColor: "rgb(0, 208, 208)"
						}}
					>seleccionar</button>
					<ul class="listado">
						<li>Cantidad ilimitada de encuestas</li>
						<li>Preguntas ilimitadas por encuesta</li>
						<li>40 000 respuestas al año</li>
						<li>Atención al cliente 24/7 por correo electrónico</li>
					</ul>
				</div>
			</div>
		</div >
	)
}