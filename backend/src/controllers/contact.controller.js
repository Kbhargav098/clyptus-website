/**
 * CONTACT & ENTERPRISE CONSULTATION CONTROLLER
 * Handles incoming quote requests & consultation bookings
 */

export const submitConsultationRequest = (req, res) => {
  const { name, email, company, serviceStream, message } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ error: 'Name, Email, and Company are required' });
  }

  res.status(201).json({
    status: 'success',
    message: 'Consultation request received. A Clyptus enterprise lead will contact you within 4 hours.',
    ticketId: `CLYPTUS-${Math.floor(10000 + Math.random() * 90000)}`,
    details: {
      name,
      email,
      company,
      serviceStream: serviceStream || 'general',
      receivedAt: new Date().toISOString()
    }
  });
};
