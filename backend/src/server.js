import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import recruitmentRoutes from './routes/recruitment.routes.js';
import sapRoutes from './routes/sap.routes.js';
import aiRoutes from './routes/ai.routes.js';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Clyptus Enterprise Backend Platform API',
    domains: {
      recruitment: 'Active (Maintained by User)',
      sap: 'Active (Maintained by Friend 1 - SAP Lead)',
      ai: 'Active (Maintained by Friend 2 - AI Lead)'
    },
    timestamp: new Date().toISOString()
  });
});

// Domain-Specific Routers
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/sap', sapRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Clyptus Enterprise API Server running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`💼 IT Recruitment API: http://localhost:${PORT}/api/recruitment/overview`);
  console.log(`⚙️  SAP API: http://localhost:${PORT}/api/sap/overview`);
  console.log(`🧠 AI API: http://localhost:${PORT}/api/ai/overview`);
});
