import { Testimoniales } from '../models/Testimoniales.js'
import {Viajes} from '../models/Viajes.js'

const paginaInicio = async(request,response)=>{

    try {
        const resultado = await Promise.all([Viajes.findAll({limit: 3}),Testimoniales.findAll({limit: 3})])
        
        response.render('inicio',{
            pagina : "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        })

    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (request,response)=>{
    response.render('nosotros',{
        pagina : "Nosotros"
    })
}

const paginaViajes = async (request,response)=>{

    //consultar DB
    try {
        const viajes = await Viajes.findAll();
        
        response.render('viajes',{
            pagina : "Viajes",
            viajes
        })

    } catch (error) {
        console.log(error)
    }
}

const paginaViajeDetalles = async (request,response)=>{
    
    //consultar DB
    try {
        const viaje = await Viajes.findAll({
            where: {
                slug: request.params.slug
            }
        });
        
        response.render('viajeDetalles',{
            pagina : viaje[0].titulo,
            viaje: viaje[0]
        })
    } catch (error) {
        console.log(error)
    }
    
}

const paginaTestimoniales = async(request,response)=>{

    //consultar tabla de testimoniales
    try {
        const testimoniales = await Testimoniales.findAll();
        
        response.render('testimoniales',{
            pagina : "Testimoniales",
            testimoniales
        })

    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaViajeDetalles,
    paginaTestimoniales
}