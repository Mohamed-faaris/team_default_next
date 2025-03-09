'use client';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Jane"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Smitherton"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="email@janesfakedomain.net"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your message
        </label>
        <textarea
          placeholder="Enter your question or message"
          rows={4}
          className="w-full px-4 py-2 border rounded-md resize-none"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
