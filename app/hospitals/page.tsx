'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaParking, FaWheelchair, FaCoffee, FaWifi } from 'react-icons/fa'
import { CONTACT_INFO } from '@/utils/constants'

const hospitals = [
    {
        name: "Merkez Hastanesi",
        location: CONTACT_INFO.addresses.main.district,
        image: "/hosp1.jpg",
        description: "Modern mimarisi ve son teknoloji ekipmanları ile hizmetinizdeyiz. 25.000 m² kapalı alanda 250 yatak kapasitesi ile 7/24 hizmet vermekteyiz.",
        address: CONTACT_INFO.addresses.main.full,
        phone: CONTACT_INFO.phones.main,
        email: CONTACT_INFO.email,
        features: [
            { icon: <FaParking />, text: "Ücretsiz Otopark" },
            { icon: <FaWheelchair />, text: "Engelli Dostu" },
            { icon: <FaCoffee />, text: "Kafeterya" },
            { icon: <FaWifi />, text: "Ücretsiz Wi-Fi" }
        ],
        departments: ["Kardiyoloji", "Nöroloji", "Ortopedi", "Genel Cerrahi", "Göz Hastalıkları"]
    },
    {
        name: "Anadolu Hastanesi",
        location: CONTACT_INFO.addresses.anadolu.district,
        image: "/hosp2.JPG",
        description: "Anadolu yakasının en donanımlı hastanesi olarak 20 yıldır hizmetinizdeyiz. Deneyimli kadromuz ve hasta odaklı yaklaşımımızla yanınızdayız.",
        address: CONTACT_INFO.addresses.anadolu.full,
        phone: CONTACT_INFO.phones.appointment,
        email: CONTACT_INFO.email,
        features: [
            { icon: <FaParking />, text: "Ücretsiz Otopark" },
            { icon: <FaWheelchair />, text: "Engelli Dostu" },
            { icon: <FaCoffee />, text: "Kafeterya" },
            { icon: <FaWifi />, text: "Ücretsiz Wi-Fi" }
        ],
        departments: ["Kadın Hastalıkları", "Çocuk Sağlığı", "Dahiliye", "Diş", "Fizik Tedavi"]
    },
    {
        name: "Avrupa Hastanesi",
        location: CONTACT_INFO.addresses.avrupa.district,
        image: "/hosp3.jpg",
        description: "Avrupa yakasının köklü sağlık kurumu olarak 30 yıldır hizmet vermekteyiz. Geniş uzman kadromuz ile tüm sağlık ihtiyaçlarınız için buradayız.",
        address: CONTACT_INFO.addresses.avrupa.full,
        phone: CONTACT_INFO.phones.main,
        email: "avrupa@saglik.com",
        features: [
            { icon: <FaParking />, text: "Ücretsiz Otopark" },
            { icon: <FaWheelchair />, text: "Engelli Dostu" },
            { icon: <FaCoffee />, text: "Kafeterya" },
            { icon: <FaWifi />, text: "Ücretsiz Wi-Fi" }
        ],
        departments: ["Onkoloji", "Kardiyoloji", "Beyin Cerrahisi", "Ortopedi", "Üroloji"]
    }
]

const HospitalsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/bg.jpg"
                        alt="Hastanelerimiz"
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
                            Hastanelerimiz
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            Türkiye&apos;nin farklı noktalarında modern tesislerimiz ile hizmetinizdeyiz.
                            En son teknoloji ve uzman kadromuzla sağlığınız için çalışıyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Hospitals List */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-12 md:space-y-20">
                        {hospitals.map((hospital, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-[200px] sm:h-[300px] lg:h-full">
                                        <Image
                                            src={hospital.image}
                                            alt={hospital.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
                                    </div>
                                    <div className="p-4 sm:p-6 lg:p-8">
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
                                            <FaMapMarkerAlt />
                                            <span>{hospital.location}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                                            {hospital.name}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            {hospital.description}
                                        </p>

                                        {/* Contact Info */}
                                        <div className="space-y-3 mb-6">
                                            <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                <FaMapMarkerAlt className="text-blue-500" />
                                                {hospital.address}
                                            </p>
                                            <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                <FaPhone className="text-blue-500" />
                                                {hospital.phone}
                                            </p>
                                            <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                <FaEnvelope className="text-blue-500" />
                                                {hospital.email}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                                            {hospital.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                    <span className="text-blue-500">{feature.icon}</span>
                                                    <span className="text-sm">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Departments */}
                                        <div>
                                            <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Bölümlerimiz:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {hospital.departments.map((dept, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 
                              px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {dept}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HospitalsPage 