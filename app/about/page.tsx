'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaHeartbeat, FaUserMd, FaHospital, FaAward } from 'react-icons/fa'

const stats = [
    { number: "25+", text: "Yıllık Deneyim" },
    { number: "50K+", text: "Mutlu Hasta" },
    { number: "100+", text: "Uzman Doktor" },
    { number: "15+", text: "Branş" }
]

const values = [
    {
        icon: <FaHeartbeat className="w-8 h-8" />,
        title: "Hasta Odaklı Yaklaşım",
        description: "Her hastamızın özel olduğuna inanıyor ve kişiye özel tedavi planları sunuyoruz."
    },
    {
        icon: <FaUserMd className="w-8 h-8" />,
        title: "Uzman Kadro",
        description: "Alanında uzman ve deneyimli sağlık profesyonellerimizle en iyi hizmeti sunuyoruz."
    },
    {
        icon: <FaHospital className="w-8 h-8" />,
        title: "Modern Teknoloji",
        description: "En son teknoloji tıbbi cihazlarla teşhis ve tedavi hizmetleri sağlıyoruz."
    },
    {
        icon: <FaAward className="w-8 h-8" />,
        title: "Kalite Standartları",
        description: "Uluslararası kalite standartlarına uygun hizmet veriyoruz."
    }
]

const doctors = [
    {
        name: "Prof. Dr. Ahmet Yılmaz",
        position: "Başhekim / Kardiyoloji Uzmanı",
        image: "/doc2.jpg"
    },
    {
        name: "Prof. Dr. Ayşe Kaya",
        position: "Nöroloji Uzmanı",
        image: "/doc1.jpg"
    },
    {
        name: "Doç. Dr. Mehmet Demir",
        position: "Genel Cerrahi Uzmanı",
        image: "/doc3.JPG"
    },
    {
        name: "Uzm. Dr. Zeynep Ak",
        position: "Çocuk Sağlığı Uzmanı",
        image: "/doc_woman.jpg"
    }
]

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/1.png"
                        alt="Hakkımızda"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            Hakkımızda
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            25 yılı aşkın süredir sağlık sektöründe öncü ve yenilikçi yaklaşımımızla
                            hastalarımıza en iyi hizmeti sunuyoruz.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mt-16 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">{stat.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Misyonumuz</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Hastalarımıza en yüksek kalitede sağlık hizmeti sunmak, modern tıp teknolojisini
                                kullanarak teşhis ve tedavi süreçlerini en verimli şekilde yönetmek ve toplum
                                sağlığına katkıda bulunmak temel misyonumuzdur.
                            </p>
                        </motion.div>
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Vizyonumuz</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Sağlık sektöründe öncü ve yenilikçi yaklaşımlarla, uluslararası standartlarda
                                hizmet veren, tercih edilen ve güvenilir bir sağlık kurumu olmak için çalışıyoruz.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Değerlerimiz
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Yönetim Kadromuz
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {doctor.position}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage 