'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { CONTACT_INFO } from '@/utils/constants'

const Hero = () => {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-400/20 blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-teal-400/20 blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-blue-600 dark:text-blue-400 font-medium">
                                7/24 Sağlık Hizmeti
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Modern Sağlık
                            </span>
                            <br />
                            <span className="text-gray-800 dark:text-white">
                                Hizmetleri
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Uzman kadromuz ve son teknoloji ekipmanlarımızla sağlığınız için en iyi hizmeti sunuyoruz.
                            7/24 kesintisiz hizmet anlayışıyla yanınızdayız.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white 
                                px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
                                transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="text-xl" />
                                WhatsApp&apos;tan Randevu Al
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/about"
                                className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-white
                                px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
                                transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                Daha Fazla Bilgi
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="flex-1 w-full max-w-xl lg:max-w-none relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3]">
                                <Image
                                    src="/hospital_bg.jpg"
                                    alt="Modern Healthcare"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full rounded-2xl"
                                    priority
                                />
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl" />

                            {/* Floating Stats Card */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
                                        <FaWhatsapp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Bu Ay</p>
                                        <p className="text-xl font-bold text-gray-800 dark:text-white">2,500+</p>
                                        <p className="text-blue-600 dark:text-blue-400 text-sm">Mutlu Hasta</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    {[
                        { number: "15+", text: "Uzman Doktor" },
                        { number: "10K+", text: "Mutlu Hasta" },
                        { number: "24/7", text: "Hizmet" },
                        { number: "98%", text: "Memnuniyet" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl">
                            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Hero 