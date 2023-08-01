


function nuevoProyecto(id,nombre,link,fondoimagen,descripcion){
    document.querySelector("#galeria").appendChild(document.createElement("div")).innerHTML = `
    <div id = ${id} class="proyecto ${fondoimagen}">
                <a href=${link}>
                <div  class="textos">
                    <h3>${nombre}</h3>
                    <p>${descripcion}</p>       
                </div>
                </a>  
            </div>
    `
}


nuevoProyecto("Javascript","JavaScript","paginas/proyecto1.html","javascript","experimentando y practicando javascript")
nuevoProyecto("arenaPeleas","Arena de peleas","file:///C:/Users/Aurelio/Documents/Programacion/pruebas%20y%20ejercicios/platzi/Juego-ArenaDePeleas/peleas.html","arena_peleas","Arena de peleas es un juego que crado a partir de las tecnologias de css, html y javaScript, este juego fue el ejercicio de un curso de platzi, el cual luego modifique y mejore a mi gusto")
nuevoProyecto("arenaPeleas","Arena de peleas","file:///C:/Users/Aurelio/Documents/Programacion/pruebas%20y%20ejercicios/platzi/Juego-ArenaDePeleas/peleas.html","arena_peleas","Arena de peleas es un juego que crado a partir de las tecnologias de css, html y javaScript, este juego fue el ejercicio de un curso de platzi, el cual luego modifique y mejore a mi gusto")
nuevoProyecto("arenaPeleas","Arena de peleas","file:///C:/Users/Aurelio/Documents/Programacion/pruebas%20y%20ejercicios/platzi/Juego-ArenaDePeleas/peleas.html","arena_peleas","Arena de peleas es un juego que crado a partir de las tecnologias de css, html y javaScript, este juego fue el ejercicio de un curso de platzi, el cual luego modifique y mejore a mi gusto")
