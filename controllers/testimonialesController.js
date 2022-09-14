import { Testimoniales } from '../models/Testimoniales.js'

const guardarTestimonial = async(request,response)=>{
    const { nombre, correo, mensaje} = request.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: "El nombre esta vacio"})
    }

    if(correo.trim() === ''){
        errores.push({mensaje: "El correo esta vacio"})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: "El mensaje esta vacio"})
    }

    if(errores.length > 0){

        const testimoniales = await Testimoniales.findAll();

        response.render('testimoniales',{
            pagina : "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        // Create a new testimonial

        try {
            await Testimoniales.create({ nombre, correo, mensaje });
            response.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }
} 


export{
    guardarTestimonial
}