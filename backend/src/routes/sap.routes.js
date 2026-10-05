import { Router } from 'express';
import { getSapOverview, getSapProjects, calculateBrimBillingEstimate } from '../controllers/sap.controller.js';

const router = Router();

// SAP ERP endpoints (Maintained by Friend 1 - SAP Lead)
router.get('/overview', getSapOverview);
router.get('/projects', getSapProjects);
router.post('/brim-estimate', calculateBrimBillingEstimate);

export default router;
