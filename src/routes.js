import React from "react"
import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom'
import { Home } from "./views/Home"
import { Sobre } from "./views/Sobre"
import { Franqueado } from "./views/Franqueado"
import { Galeria } from "./views/Galeria"

function Rotas (){
    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/galeria" element={<Galeria />}/>
                <Route path="/franqueado" element={<Franqueado/>}></Route>
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Rotas