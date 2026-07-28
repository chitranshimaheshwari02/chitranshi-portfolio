// EmailJS configuration.
// Create a free account at https://www.emailjs.com, then fill these values
// in a `.env` file at the project root (see `.env.example`).
export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

export const isEmailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
);
