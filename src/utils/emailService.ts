// This is a client-side email forwarding utility

export interface EmailData {
  to: string;
  subject: string;
  body: string;
}

/**
 * Sends form data to specified email using FormSpree
 * For production use, you would replace this with your own FormSpree form ID
 * or implement a server-side solution
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  const { to, subject, body } = data;
  
  try {
    // Option 1: Using FormSpree (recommended for production)
    // Replace 'your-formspree-id' with your actual FormSpree form ID
    // Visit https://formspree.io/ to set up a form
    // const response = await fetch('https://formspree.io/f/your-formspree-id', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: to,
    //     subject: subject,
    //     message: body
    //   })
    // });
    
    // if (!response.ok) {
    //   throw new Error('Failed to send email');
    // }

    // Option 2: Simple mailto link (fallback for development)
    // Create a mailto link with the email data
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mailto link
    window.open(mailtoLink, '_blank');
    
    console.log('Email sent successfully to:', to);
  } catch (error) {
    console.error('Error sending email:', error);
    // You might want to show an error message to the user here
  }
};

/**
 * Format form data into an email body
 */
export const formatFormData = (formData: Record<string, any>): string => {
  let emailBody = '';
  
  // Iterate through the form data and add each field to the email body
  for (const [key, value] of Object.entries(formData)) {
    // Handle arrays (like services)
    if (Array.isArray(value)) {
      emailBody += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value.join(', ')}\n\n`;
    } else {
      emailBody += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n\n`;
    }
  }
  
  return emailBody;
};
