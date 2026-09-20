import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import type { ContactFormData } from '../../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending client-side
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 rounded-2xl bg-white dark:bg-[#111D32] border border-[#FF8500]/30 shadow-lg text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#FF8500]/10 text-[#FF8500] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Received!</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-[#A8B0C0] max-w-md">
              Thank you for reaching out. Your message has been sent successfully (demo mode).
              I will get back to you as soon as possible!
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsSubmitted(false)}
              className="mt-6"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-firstName"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="contact-firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none bg-white dark:bg-[#111D32] border ${
                    errors.firstName
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-gray-200 dark:border-white/10 focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500]'
                  } text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-lastName"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="contact-lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none bg-white dark:bg-[#111D32] border ${
                    errors.lastName
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-gray-200 dark:border-white/10 focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500]'
                  } text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email Address */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none bg-white dark:bg-[#111D32] border ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-200 dark:border-white/10 focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500]'
                } text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Row 3: Phone Number */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none bg-white dark:bg-[#111D32] border ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-200 dark:border-white/10 focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500]'
                } text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Row 4: Your Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none bg-white dark:bg-[#111D32] border ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-200 dark:border-white/10 focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500]'
                } text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                icon={<Send className="w-4 h-4" />}
                id="contact-send-message-btn"
                className="w-full py-3.5 text-sm font-bold tracking-wide shadow-md shadow-[#FF8500]/25"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
