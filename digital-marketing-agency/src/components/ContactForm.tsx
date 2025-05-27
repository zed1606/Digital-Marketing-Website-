"use client"; // Required for useState, etc.

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CheckmarkIcon = () => (
  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      console.log('Form data submitted:', formData);
      // Simulate successful submission
      setErrors({});
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      // Hide success message after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000); 
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-black py-12 px-4 sm:px-8 text-center">
        <div className="animate-fadeIn"> {/* Simple fade-in animation class */}
          <CheckmarkIcon />
          <h3 className="text-2xl font-bold text-white font-montserrat mb-2">Thank You!</h3>
          <p className="text-gray-300 font-poppins">Your message has been sent successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12">
          Get In Touch - Your Digital Evolution Starts Here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 font-poppins mb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-poppins mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-poppins mb-1">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:ring-green-500 focus:border-green-500 transition-colors`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <div>
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold font-montserrat py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
