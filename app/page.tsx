import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import { FaUserMd, FaRegClock, FaAward, FaHospital } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_INFO } from '@/utils/constants'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Sağlık hizmetlerinde kalite ve güvenilirliğin adresi olarak, size en iyi hizmeti sunmak için çalışıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUserMd className="w-8 h-8" />,
                title: "Uzman Kadro",
                description: "Alanında uzman ve deneyimli doktorlarımızla hizmetinizdeyiz."
              },
              {
                icon: <FaRegClock className="w-8 h-8" />,
                title: "7/24 Hizmet",
                description: "Kesintisiz sağlık hizmeti ile her an yanınızdayız."
              },
              {
                icon: <FaAward className="w-8 h-8" />,
                title: "Kaliteli Hizmet",
                description: "Uluslararası   standartlarda sağlık hizmeti sunuyoruz."
              },
              {
                icon: <FaHospital className="w-8 h-8" />,
                title: "Modern Tesisler",
                description: "En son teknoloji ile donatılmış modern tesislerimiz."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl w-fit mx-auto mb-6">
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Uzman Doktorlarımız
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Alanında uzman ve deneyimli doktorlarımızla sağlığınız için buradayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Prof. Dr. Ahmet Yılmaz", position: "Kardiyoloji", image: "/doc2.JPG" },
              { name: "Prof. Dr. Ayşe Kaya", position: "Nöroloji", image: "/doc1.jpg" },
              { name: "Doç. Dr. Mehmet Demir", position: "Genel Cerrahi", image: "/doc3.JPG" },
              { name: "Uzm. Dr. Zeynep Ak", position: "Çocuk Sağlığı", image: "/doc_woman.jpg" }
            ].map((doctor, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{doctor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{doctor.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white
                px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
                transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              Tüm Ekibimizi Tanıyın
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Sağlığınız İçin Biz Buradayız
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Modern tıp teknolojisi ve uzman kadromuzla size en iyi sağlık hizmetini sunmak için hazırız.
          </p>
          <Link
            href={`https://wa.me/${CONTACT_INFO.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600
            px-8 py-4 rounded-xl font-medium hover:shadow-xl transform hover:-translate-y-0.5 
            transition-all duration-300"
          >
            <FaUserMd className="text-xl" />
            Hemen Randevu Alın
          </Link>
        </div>
      </section>
    </main>
  )
}
