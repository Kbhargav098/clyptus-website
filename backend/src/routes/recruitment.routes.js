import { Router } from 'express';
import { getRecruitmentOverview, getRecruitmentProjects, submitJobRequisition } from '../controllers/recruitment.controller.js';

const router = Router();

// IT Recruitment & ATS endpoints (Maintained by User)
router.get('/overview', getRecruitmentOverview);
router.get('/projects', getRecruitmentProjects);
router.post('/requisition', submitJobRequisition);

export default router;
