/**
 * IT RECRUITMENT & ATS CONTROLLER
 * Maintained by: IT Recruitment Lead (User)
 * Responsibility: Sourcing APIs, ATS integration, candidate matching, job requisitions
 */

export const getRecruitmentOverview = (req, res) => {
  res.json({
    status: 'success',
    domain: 'IT Recruitment & ATS Platform',
    lead: 'IT Talent Acquisition Team',
    stats: {
      averageTimeToHireDays: 12,
      retentionGuaranteeRate: '98.2%',
      placedCandidatesCount: 1200,
      activeTalentPoolSize: '45,000+'
    },
    services: [
      'Specialized SAP & Enterprise Talent Sourcing',
      'Full-Lifecycle RPO (Recruiting Process Outsourcing)',
      'Executive Search for Tech Leadership',
      'Clyptus Proprietary AI-Powered ATS Integration',
      'On-Demand Contract & Permanent IT Staffing',
      'Global Offshoring & Staff Augmentation'
    ]
  });
};

export const getRecruitmentProjects = (req, res) => {
  res.json({
    status: 'success',
    projects: [
      {
        id: "rec-proj-1",
        title: "FinTech Scale-Up Engineering Team Expansion",
        client: "PayVelocity Systems",
        metric: "65 Senior Hires Placed",
        timeToHireDays: 12,
        retentionRate: "100%",
        techStack: ["React", "Node.js", "Kubernetes", "AWS Security", "Go"]
      },
      {
        id: "rec-proj-2",
        title: "SAP Center of Excellence Staffing Initiative",
        client: "Global Energy Alliance",
        metric: "42 Certified SAP Experts",
        timeToHireDays: 14,
        retentionRate: "98.5%",
        techStack: ["SAP S/4HANA", "SAP ABAP", "SAP BRIM", "SAP Fiori", "Basis"]
      }
    ]
  });
};

export const submitJobRequisition = (req, res) => {
  const { companyName, roleTitle, requiredSkills, targetPositionsCount, timelineDays } = req.body;
  
  if (!companyName || !roleTitle) {
    return res.status(400).json({ error: 'Company Name and Role Title are required' });
  }

  res.status(201).json({
    status: 'success',
    message: 'IT Recruitment Requisition received successfully.',
    requisitionId: `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
    data: {
      companyName,
      roleTitle,
      requiredSkills: requiredSkills || [],
      targetPositionsCount: targetPositionsCount || 1,
      estimatedPlacementTimeline: `${timelineDays || 14} Days SLA`
    }
  });
};
