import { Router } from 'express';
import { submitConsultationRequest } from '../controllers/contact.controller.js';

const router = Router();

router.post('/', submitConsultationRequest);

export default router;
