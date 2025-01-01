'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStethoscope, FaHeartbeat, FaBrain, FaXRay, FaArrowRight } from 'react-icons/fa'

const services = [
    {
        icon: <FaStethoscope className="w-12 h-12" />,
        title: "Genel Sağlık Hizmetleri",
        description: "Uzman hekimlerimiz ile genel sağlık kontrolü ve tedavi hizmetleri sunuyoruz.",
        image: "/general.png",
        features: [
            "Kapsamlı sağlık taraması",
            "Kronik hastalık takibi",
            "Aşılama hizmetleri",
            "Laboratuvar testleri"
        ],
        details: "Genel sağlık hizmetlerimiz kapsamında, düzenli check-up programları, kronik hastalık takibi ve tedavisi, aşılama hizmetleri ve laboratuvar testleri sunuyoruz. Deneyimli hekimlerimiz ve modern tıbbi cihazlarımızla sağlığınızı korumak için yanınızdayız."
    },
    {
        icon: <FaHeartbeat className="w-12 h-12" />,
        title: "Kardiyoloji",
        description: "Modern cihazlarımız ve uzman kardiyologlarımız ile kalp sağlığınızı koruyoruz.",
        image: "/cardiology.png",
        features: [
            "EKG ve Eforlu EKG",
            "Ekokardiyografi",
            "Holter monitorizasyonu",
            "Kalp damar cerrahisi"
        ],
        details: "Kardiyoloji bölümümüzde, kalp hastalıklarının tanı ve tedavisinde en son teknoloji cihazları kullanıyoruz. Uzman kardiyologlarımız, kalp sağlığınızı korumak ve iyileştirmek için kişiye özel tedavi planları oluşturuyor."
    },
    {
        icon: <FaBrain className="w-12 h-12" />,
        title: "Nöroloji",
        description: "Beyin ve sinir sistemi hastalıklarının tanı ve tedavisinde yanınızdayız.",
        image: "/noro.png",
        features: [
            "EMG",
            "Beyin MR",
            "Uyku laboratuvarı",
            "Baş ağrısı kliniği"
        ]
    },
    {
        icon: <FaXRay className="w-12 h-12" />,
        title: "Radyoloji",
        description: "En son teknoloji görüntüleme sistemleri ile hizmetinizdeyiz.",
        image: "/radio.png",
        features: [
            "MR görüntüleme",
            "Tomografi",
            "Ultrasonografi",
            "Mamografi"
        ]
    }
]

const ServicesPage = () => {
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
                            Sağlık Hizmetlerimiz
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            Modern tıp teknolojisi ve uzman kadromuzla kapsamlı sağlık hizmetleri sunuyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-[300px] lg:h-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
                                    </div>
                                    <div className="p-8 lg:p-12">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                                                <div className="text-blue-600 dark:text-blue-400">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
                                                {service.title}
                                            </h2>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                            {service.details}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={`https://wa.me/+905321234567?text=Merhaba, ${service.title} hakkında bilgi almak istiyorum.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 
                                            text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl 
                                            transform hover:-translate-y-0.5 transition-all duration-300"
                                        >
                                            Randevu Al
                                            <FaArrowRight className="text-sm" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                        Size Nasıl Yardımcı Olabiliriz?
                    </h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">
                        Sağlık hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/+905321234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600
                            px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
                            transition-all duration-300"
                        >
                            WhatsApp&apos;tan Yazın
                        </a>
                        <a
                            href="tel:+902121234567"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-white
                            px-8 py-4 rounded-xl font-medium border-2 border-white hover:bg-white/10
                            transition-all duration-300"
                        >
                            Hemen Arayın
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage 