import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  fullName: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formData: ContactForm = {
    fullName: '',
    company: '',
    address: '',
    phone: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  // EmailJS Configuration
  private readonly EMAIL_SERVICE_ID = 'service_dats874';
  private readonly EMAIL_TEMPLATE_ID = 'template_ywxcjcr';
  private readonly EMAIL_PUBLIC_KEY = 'oNHs8RtBpSxAWGz3t';

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.EMAIL_PUBLIC_KEY);
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: this.formData.fullName,
        from_email: this.formData.email,
        phone: this.formData.phone,
        company: this.formData.company || 'N/A',
        address: this.formData.address || 'N/A',
        message: this.formData.message,
        to_name: 'Forte Steel Team', // Your name/company
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully!', response);

      // Show success message
      this.submitSuccess = true;
      this.submitMessage = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';

      // Reset form
      this.resetForm();

    } catch (error) {
      console.error('Failed to send email:', error);

      // Show error message
      this.submitSuccess = false;
      this.submitMessage = 'Oops! Something went wrong. Please try again or contact us directly.';
    } finally {
      this.isSubmitting = false;

      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }
  }

  private resetForm() {
    this.formData = {
      fullName: '',
      company: '',
      address: '',
      phone: '',
      email: '',
      message: ''
    };
  }


}
