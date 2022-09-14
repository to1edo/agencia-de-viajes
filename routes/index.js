import express  from "express";
import { paginaInicio, paginaNosotros, paginaViajes,paginaViajeDetalles, paginaTestimoniales } from '../controllers/PaginasControllers.js'
import { guardarTestimonial } from "../controllers/testimonialesController.js";
const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaViajeDetalles)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)


export default router;