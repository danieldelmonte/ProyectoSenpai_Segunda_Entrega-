/* VERSIÓN ENTREGA ANTERIOR */
/* Declaramos el Objeto con la info del Proyecto que estamos trabajando */

// const proyecto_seleccionado = {
//     titulo: "PROYECTO ESTRELLA",
//     imagen: "img/detalle_proyecto_1.jpg",
//     recaudado: 525,
//     objetivo: 3000,
//     descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium autem voluptatum quos commodi, nesciunt expedita a aliquam dolore consectetur asperiores minus natus aliquid nobis voluptates, dolores eligendi officia praesentium rerum?",
//     dias_restantes: 9,
// };


/* VERSIÓN ENTREGA ANTERIOR */
/* Declaramos un array con los comentarios ingresados para el Proyecto */

// const comentarios_proyecto = [{
//         contenido: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
//         usuario: "Daniel Delmonte",
//         fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
//     },
//     {
//         contenido: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
//         usuario: "Daniel Delmonte",
//         fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
//     },
//     {
//         contenido: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
//         usuario: "Daniel Delmonte",
//         fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
//     }
// ];


/* CAPTURA DE ELEMENTOS */

const botonMeGusta = document.getElementById("megusta_img");
const textoMeGusta = document.getElementById("megusta_OK");
const textoNoMeGusta = document.getElementById("megusta_NO_OK");
const botonAgregarComentario = document.getElementById("btnAgregarComentario");
const textoComentario = document.getElementById("txtComentario");


const div_img_detalle = document.getElementsByClassName("img_detalle")[0];
const div_side_detalle = document.getElementsByClassName("side_detalle")[0];
const div_acciones_detalle = document.getElementsByClassName("acciones_detalle")[0];
const div_descripcion_detalle = document.getElementsByClassName("descripcion_detalle")[0];
const div_titulo_detalle = document.getElementById("titulo_detalle");

const div_zona_comentarios = document.getElementById("zona_comentarios");


/* INICIALIZACIÓN DE VALORES */

const resultadoGlobal = [];
textoNoMeGusta.style.display = "block";
textoMeGusta.style.display = "none";


const cargarProyecto = (proyecto) => {

    /* Cargamos los elementos necesarios con la Info*/

    const imagenItem_Proyecto = document.createElement("img");
    imagenItem_Proyecto.setAttribute("src", proyecto.imagen);
    imagenItem_Proyecto.classList.add("img_item");
    div_img_detalle.appendChild(imagenItem_Proyecto);

    const recaudadoProyecto = document.createElement("div");
    recaudadoProyecto.classList.add("side_recaudado");
    recaudadoProyecto.textContent = `$${proyecto.recaudado} de $${proyecto.objetivo}`;
    div_side_detalle.appendChild(recaudadoProyecto);

    const porcentajeProyecto = document.createElement("div");
    porcentajeProyecto.classList.add("side_porcentaje");
    const porcentajeRecaudado = parseInt((proyecto.recaudado * 100) / proyecto.objetivo);
    porcentajeProyecto.textContent = porcentajeRecaudado.toString() + '% Recaudado';
    div_side_detalle.appendChild(porcentajeProyecto);

    const restanteProyecto = document.createElement("div");
    restanteProyecto.classList.add("side_dias");
    restanteProyecto.textContent = `${proyecto.dias_restantes} días restantes`;
    div_side_detalle.appendChild(restanteProyecto);

    div_titulo_detalle.textContent = proyecto.titulo;

    div_descripcion_detalle.textContent = proyecto.descripcion;

};


const cargarComentario = (comentario) => {

    /* Cargamos el comentario en el HTML*/

    const div_comentario = document.createElement("div");
    div_comentario.classList.add("item_comentario");

    const div_contenido_comentario = document.createElement("div");
    div_contenido_comentario.textContent = comentario.contenido;
    div_comentario.appendChild(div_contenido_comentario);

    const div_log_comentario = document.createElement("div");
    div_log_comentario.classList.add("item_comentario_log");
    div_comentario.appendChild(div_log_comentario);

    const div_user_comentario = document.createElement("div");
    div_user_comentario.textContent = `User: ${comentario.usuario}`;
    div_log_comentario.appendChild(div_user_comentario);

    const div_fecha_comentario = document.createElement("div");
    div_fecha_comentario.classList.add("item_date");
    div_fecha_comentario.textContent = `Fecha: ${comentario.fecha}`;
    div_log_comentario.appendChild(div_fecha_comentario);

    div_zona_comentarios.appendChild(div_comentario);

};


/* ASIGNACIÓN DE EVENTOS */

botonMeGusta.addEventListener("click", () => {

    let valorBoton = botonMeGusta.getAttribute('src');

    if (valorBoton === 'img/heart_rojo_16.png') {
        botonMeGusta.src = "img/heart_blanco_16.png"
        textoMeGusta.style.display = "none";
        textoNoMeGusta.style.display = "block";
    } else {
        botonMeGusta.src = "img/heart_rojo_16.png"
        textoMeGusta.style.display = "block";
        textoNoMeGusta.style.display = "none";

    }
});


botonAgregarComentario.addEventListener("click", () => {

    const nomUsuario = "Daniel Delmonte"; //Este valor luego lo obtendremos del Login....por ahora es fijo

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);


    if (textoComentario.value !== "") {

        let nuevoComentario = {
            contenido: textoComentario.value,
            usuario: nomUsuario,
            fecha: hoy.toUTCString(),
        };

        //resultadoGlobal[0].comentarios.push(nuevoComentario);
        guardarComentario(nuevoComentario);

        cargarComentario(nuevoComentario);

        textoComentario.value = "";

    } else {
        alert("No ha ingresado un comentario....");
    }

});

/* FUNCIÓN LLAMADA AL CARGAR LA PÁGINA */

const proyectoSeleccionado = obtenerIdProyecto();

const traerProyecto = async() => {
    try {
        const promesa = await fetch(
            `http://localhost:3000/proyecto/${proyectoSeleccionado}`, {
                method: "GET",
            }
        );

        const resultado = await promesa.json();

        if (resultado.success === true) {

            resultadoGlobal.push(resultado.proyecto);

            cargarProyecto(resultado.proyecto);

            for (let i = 0; i < resultado.proyecto.comentarios.length; i++) {
                const comentario = resultado.proyecto.comentarios[i];
                cargarComentario(comentario);
            }

        } else {
            alert("No existe el Proyecto seleccionado....");
        }

    } catch (error) {
        console.log(error);
    } finally {
        //loader.style = "display: none";
    }
};

traerProyecto();

// ACTUALIZAR PROYECTO

const guardarComentario = async(comentario) => {
    try {
        //console.log(comentario);
        //console.log(resultadoGlobal[0]);
        const promesa = await fetch(
            `http://localhost:3000/proyecto/comentario/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contenido: comentario.contenido,
                    fecha: comentario.fecha,
                    usuario: comentario.usuario,
                    idProyecto: resultadoGlobal[0].id,
                }),
            }
        );

        const resultado = await promesa.json();

        if (resultado.success === true) {

            console.log("OK!");

        } else {
            console.log("ERROR!");
        }

    } catch (error) {
        console.log(error);
    } finally {
        //loader.style = "display: none";
    }
};


//Función que obtiene el Id del Proyecto al que se accedio en Index.hmtl.
// De momento fue la "mejor manera" que encontré, supongo que esto va a cambiar con React....
const obtenerIdProyecto = () => {
    var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split("?");
    var params = {};

    for (var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    if (params['idProyecto']) {
        return params['idProyecto'];
    } else {
        return null;
    }
}

/* VERSIÓN ENTREGA ANTERIOR */
//cargarProyecto(proyecto_seleccionado);

/* Y CARGAMOS LOS COMENTARIOS.... */
// for (let i = 0; i < comentarios_proyecto.length; i++) {
//     const comentario = comentarios_proyecto[i];
//     cargarComentario(comentario);
// }