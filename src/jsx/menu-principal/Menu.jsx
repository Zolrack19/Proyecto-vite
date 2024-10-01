import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Barra = lazy(() => import('./Barra'));
const Cuerpo = lazy(() => import('./Cuerpo'));
const Plan = lazy(() => import('./Plan'));
const NuevaEncuesta = lazy(() => import('./NuevaEncuesta'));
const Perfil = lazy(() => import('./perfil-usuario/Perfil'));
const Cuenta = lazy(() => import('./perfil-usuario/Cuenta'));
const Transacciones = lazy(() => import('./perfil-usuario/Transacciones'))


const estilo = {
    minHeight: '80vh'
}

const nos = {
    minHeight: "30vh"
}

export default function Menu() {
    return (
      <Router>
        <header>
          <Suspense fallback={<div>Cargando barra...</div>} >
            <Barra />
          </Suspense>
        </header>
        <div id="cuerpo" style={estilo}>
          <Suspense fallback={<div>Cargando contenido...</div>} >
            <Routes>
              <Route path="*" element={<Navigate to="/home" replace/>} /> {/*esto debería ser una página de error*/}
              <Route path="/home" element={<Cuerpo />} />
              <Route path="/planes" element={<Plan />} />
              <Route path="/nueva-encuesta" element={<NuevaEncuesta />} />
              
              {/*Anidamiento de otras rutas para el componente perfil*/}
              <Route path="/perfil/" element={<Perfil />}>
                <Route path="" element={<Navigate to="cuenta" replace />} />
                <Route path="cuenta" element={<Cuenta />} />
                <Route path="transacciones" element={<Transacciones />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
        <footer style={nos}>
          <h1>yo soy footer</h1>
        </footer>
    </Router>
    )
}


