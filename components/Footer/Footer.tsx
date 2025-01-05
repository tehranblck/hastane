import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { CONTACT_INFO } from '@/utils/constants'
import { navLinks, NavLink } from '@/lib/navlinks'

interface FooterProps {
    navItems?: NavLink[];
}

const Footer = ({ navItems = navLinks }: FooterProps) => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
                    {/* Hakkımızda */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Hakkımızda</h3>
                        <p className="text-gray-400 mb-4">
                            Modern sağlık hizmetleri ile hastalarımızın yanında olmaktan gurur duyuyoruz.
                            Sağlığınız bizim önceliğimiz.
                        </p>
                        <div className="flex space-x-4 justify-center lg:justify-start">
                            <Link href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebookF />
                            </Link>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Hızlı Linkler</h3>
                        <ul className="space-y-2 flex flex-col items-center lg:items-start">
                            {navItems.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.path}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hizmetler */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Hizmetler</h3>
                        <ul className="space-y-2 flex flex-col items-center lg:items-start">
                            <li className="text-gray-400">Acil Servis</li>
                            <li className="text-gray-400">Check-up</li>
                            <li className="text-gray-400">Kardiyoloji</li>
                            <li className="text-gray-400">Online Konsültasyon</li>
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">İletişim</h3>
                        <div className="space-y-4 flex flex-col items-center lg:items-start">
                            <p className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                                <span className="text-gray-400">
                                    {CONTACT_INFO.addresses.main.full}
                                </span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-blue-400" />
                                <span className="text-gray-400">
                                    {CONTACT_INFO.phones.main}
                                </span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <FaEnvelope className="text-blue-400" />
                                <span className="text-gray-400">
                                    {CONTACT_INFO.email}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Sağlık Merkezi. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 