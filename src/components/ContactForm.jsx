import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit'
const WEB3FORMS_API_KEY = '4e87fc6a-57b0-4dc7-aba8-cc3aa7bb4ab6' // Web3Forms API key

const Bubble = ({ size, duration, delay }) => (
  <motion.div
    className="absolute rounded-full bg-blue-500 opacity-10"
    style={{
      width: size,
      height: size,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -1000],
      opacity: [0.1, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
    }}
  />
)

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalType, setModalType] = useState('success')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, access_key: WEB3FORMS_API_KEY }),
      })

      if (response.ok) {
        setModalType('success')
        setModalMessage('Thank you for your message!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setModalType('error')
        setModalMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setModalType('error')
      setModalMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
      setModalVisible(true)
    }
  }

  const closeModal = () => setModalVisible(false)

  if (!mounted) return null

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Bubble key={i} size={Math.random() * 100 + 20} duration={Math.random() * 20 + 10} delay={Math.random() * 10} />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 w-full max-w-lg rounded-2xl border border-gray-700 shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field) => (
            <motion.div
              key={field}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className={`w-full p-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400 ${
                  field === 'message' ? 'h-32 resize-none' : ''
                }`}
              />
              <motion.span
                className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none opacity-0"
                animate={{
                  opacity: formData[field] ? 1 : 0,
                  scale: formData[field] ? 1 : 0.95,
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-4 rounded-lg shadow-lg font-semibold text-lg transition duration-200 ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>

      <AnimatePresence>
        {modalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`p-6 rounded-lg text-center ${
                modalType === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
              } shadow-lg bg-opacity-90 backdrop-filter backdrop-blur-lg`}
            >
              <p className="text-lg font-semibold mb-4">{modalMessage}</p>
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 text-lg font-semibold"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
