'use client'
import { motion } from 'framer-motion'
import { FaHospital, FaUserMd, FaAmbulance, FaLaptopMedical, FaHeartbeat, FaNotesMedical, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { CONTACT_INFO } from '@/utils/constants'

const services = [
    {
        icon: <FaHospital className="w-12 h-12" />,
        title: "Modern Tesisler",
        description: "En son teknoloji ile donatılmış modern sağlık tesislerimizde hizmetinizdeyiz.",
        features: ["24/7 Hizmet", "Modern Cihazlar", "Konforlu Odalar", "Tam Donanımlı Ameliyathaneler"]
    },
    {
        icon: <FaUserMd className="w-12 h-12" />,
        title: "Uzman Doktorlar",
        description: "Alanında uzman ve deneyimli doktor kadromuzla yanınızdayız.",
        features: ["Deneyimli Ekip", "Özel Konsültasyon", "Multidisipliner Yaklaşım", "Sürekli Eğitim"]
    },
    {
        icon: <FaAmbulance className="w-12 h-12" />,
        title: "Acil Servis",
        description: "7/24 acil servis hizmetimiz ile her an yanınızdayız.",
        features: ["Hızlı Müdahale", "Tam Donanımlı Ambulans", "Uzman Ekip", "Modern Ekipman"]
    },
    {
        icon: <FaLaptopMedical className="w-12 h-12" />,
        title: "Online Konsültasyon",
        description: "Uzaktan görüşme ile online sağlık danışmanlığı hizmeti sunuyoruz.",
        features: ["Video Görüşme", "Hızlı Randevu", "Uzman Görüşü", "7/24 Erişim"]
    },
    {
        icon: <FaHeartbeat className="w-12 h-12" />,
        title: "Kardiyoloji",
        description: "Kalp sağlığınız için kapsamlı teşhis ve tedavi hizmetleri.",
        features: ["EKG", "Eforlu EKG", "Ekokardiyografi", "Holter Monitörizasyonu"]
    },
    {
        icon: <FaNotesMedical className="w-12 h-12" />,
        title: "Check-up Hizmetleri",
        description: "Detaylı sağlık taraması ile hastalıkları erkenden teşhis ediyoruz.",
        features: ["Kapsamlı Tarama", "Laboratuvar Testleri", "Görüntüleme", "Danışmanlık"]
    }
]

const Services = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Modern tıp teknolojisi ve uzman kadromuzla size en iyi sağlık hizmetini sunmak için buradayız.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl 
                            transition-all duration-300 border border-gray-100 dark:border-gray-700
                            group hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl w-fit mb-6
                                group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                                <div className="text-blue-600 dark:text-blue-400">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`https://wa.me/${CONTACT_INFO.phones.whatsapp.replace(/[^0-9]/g, '')}?text=Merhaba, ${service.title} hakkında bilgi almak istiyorum.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 
                                text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl 
                                transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Randevu Al
                                <FaArrowRight className="text-sm" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Sağlığınız İçin Biz Buradayız
                    </h3>
                    <a
                        href="https://wa.me/+905321234567?text=Merhaba,%20bilgi%20almak%20istiyorum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 
                        text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
                        transition-all duration-300"
                    >
                        <FaUserMd className="text-xl" />
                        Randevu Alın
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Services 