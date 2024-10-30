/* eslint-disable react/no-unknown-property */
import { useState } from 'react';

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_API_KEY = '4e87fc6a-57b0-4dc7-aba8-cc3aa7bb4ab6'; // Web3Forms API key
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_API_KEY,
        }),
      });

      if (response.ok) {
        setModalType('success');
        setModalMessage('Thank you for your message!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setModalType('error');
        setModalMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setModalType('error');
      setModalMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setModalVisible(true); // Show the modal after submission
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 shadow-lg p-8 w-full max-w-lg rounded-lg custom-shadow">

        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4 text-center transition-colors duration-500">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500 hover:text-teal-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:focus:border-teal-400 dark:bg-gray-700 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500 hover:text-teal-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:focus:border-teal-400 dark:bg-gray-700 transition-transform duration-300 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500 hover:text-teal-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:focus:border-teal-400 dark:bg-gray-700 transition-transform duration-300 ease-in-out"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-1 block w-full p-3 border rounded-lg shadow-sm transition-transform duration-300 ease-in-out focus:ring-blue-500 focus:border-blue-500 
              dark:bg-blue-700 dark:border-blue-600 dark:focus:border-blue-500 dark:text-white
              ${isSubmitting
                ? 'bg-gray-500 border-gray-500 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-gray-400 to-gray-600 border-transparent text-white hover:scale-105 hover:shadow-lg'
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className={`p-6 rounded-lg text-center ${modalType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} shadow-lg`}>
            <p className="text-lg font-semibold">{modalMessage}</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add CSS for blue shadow effect */}
      <style jsx>{`
        .custom-shadow {
          box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3), 0 8px 16px rgba(0, 0, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
