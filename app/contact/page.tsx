'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { CONTACT_INFO } from '@/utils/constants'
import Link from 'next/link'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form gönderme işlemi
        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10 dark:from-blue-900/30 dark:to-teal-800/30" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            İletişim
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Sizlere daha iyi hizmet verebilmek için her zaman yanınızdayız.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Bize Ulaşın</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Ad Soyad
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Mesajınız
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Gönder
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Address */}
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Adres</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {CONTACT_INFO.addresses.main.full}
                                    </p>
                                </div>

                                {/* Phone */}
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Telefon</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.phones.main}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">Randevu: {CONTACT_INFO.phones.appointment}</p>
                                </div>

                                {/* Email */}
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">E-posta</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.email}</p>
                                </div>

                                {/* WhatsApp */}
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                    <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">WhatsApp</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.phones.whatsapp}</p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Sosyal Medya</h3>
                                <div className="flex space-x-4">
                                    <Link
                                        href={CONTACT_INFO.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                                    >
                                        <FaFacebookF className="text-xl" />
                                    </Link>
                                    <a
                                        href={CONTACT_INFO.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                                    >
                                        <FaTwitter className="text-xl" />
                                    </a>
                                    <a
                                        href={CONTACT_INFO.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                    <a
                                        href={CONTACT_INFO.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                                    >
                                        <FaLinkedinIn className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage 