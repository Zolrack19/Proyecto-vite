import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Tarjeta.jsx'

createRoot(document.getElementById("react-tarjeta")).render(
	<StrictMode>
		<Tarjeta titulo = "nose"/>
		<Tarjeta titulo = "nose"/>
		<Tarjeta titulo = "nose"/>
	</StrictMode>
)
