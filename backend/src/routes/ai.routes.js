import { Router } from 'express';
import { getAiOverview, getAiProjects, processDocumentOcr } from '../controllers/ai.controller.js';

const router = Router();

// AI & Automation endpoints (Maintained by Friend 2 - AI Lead)
router.get('/overview', getAiOverview);
router.get('/projects', getAiProjects);
router.post('/ocr-process', processDocumentOcr);

export default router;
