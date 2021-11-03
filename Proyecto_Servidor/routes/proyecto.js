const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send({ success: true, proyectos_listado: proyectos_listado });
});

router.get("/top", (req, res, next) => {
    res.send({ success: true, proyectos_top: proyectos_top });
});

router.get("/:id", (req, res, next) => {
    const idProyecto = parseInt(req.params.id, 10);

    const ProyIndex = proyectos_listado.findIndex((i) => i.id === idProyecto);

    if (ProyIndex >= 0) {

        return res.send({ success: true, proyecto: proyectos_listado[ProyIndex] });

    } else {

        return res.send({ success: false, message: "No se encontró el Proyecto" });

    }
});

router.post("/comentario/add", async(req, res) => {

    const idProyecto = req.body.idProyecto;

    const ProyIndex = proyectos_listado.findIndex((i) => i.id === idProyecto);

    let nuevoComentario = {
        contenido: req.body.contenido,
        usuario: req.body.usuario,
        fecha: req.body.fecha,
    };

    proyectos_listado[ProyIndex].comentarios.push(nuevoComentario);

    return res.json({ success: true, nuevoComentario });

});

module.exports = router;

//**** LISTADO TOP */

const proyectos_top = [{
        id: 1,
        titulo: "PROYECTO ESTRELLA",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
        comentarios: [{}],
    },
    {
        id: 2,
        titulo: "PROYECTO ESTRELLA 2",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [{}],
    },
    {
        id: 3,
        titulo: "PROYECTO ESTRELLA 3",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
        comentarios: [{}],
    }
];

//**** LISTADO COMPLETO */

const proyectos_listado = [{
        id: 1,
        titulo: "PROYECTO LISTADO 1",
        imagen: "img/mini_item.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
        comentarios: [{
                contenido: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            },
            {
                contenido: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            },
            {
                contenido: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            }
        ],
        usuarios_like: [],
    },
    {
        id: 2,
        titulo: "PROYECTO LISTADO 2",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 3,
        titulo: "PROYECTO LISTADO 3",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 4,
        titulo: "PROYECTO LISTADO 4",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 5,
        titulo: "PROYECTO LISTADO 5",
        imagen: "img/mini_item.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
        comentarios: [],
        usuarios_like: [],
    }
];