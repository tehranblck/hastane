'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled
                ? 'bg-white/10 dark:bg-black/10 shadow-lg backdrop-blur-lg'
                : 'bg-white/5 dark:bg-black/5 backdrop-blur-lg'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50">
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 to-teal-500 bg-clip-text text-transparent">
                            LOGO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <Link
                            href="/about"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-gradient-to-r after:from-rose-500 after:to-teal-500
                hover:after:w-full after:transition-all after:duration-300"
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-gradient-to-r after:from-rose-500 after:to-teal-500
                hover:after:w-full after:transition-all after:duration-300"
                        >
                            Hizmetler
                        </Link>
                        <Link
                            href="/hospitals"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-gradient-to-r after:from-rose-500 after:to-teal-500
                hover:after:w-full after:transition-all after:duration-300"
                        >
                            Hastanelerimiz
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                after:bg-gradient-to-r after:from-rose-500 after:to-teal-500
                hover:after:w-full after:transition-all after:duration-300"
                        >
                            İletişim
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <button className="hidden md:block bg-gradient-to-r from-rose-500 to-teal-500 
            text-white px-4 lg:px-6 py-2 rounded-full font-medium
            hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        Başlayalım
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300
              ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}>
                        </span>
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300
              ${isMobileMenuOpen ? 'opacity-0' : ''}`}>
                        </span>
                        <span className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300
              ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`md:hidden fixed w-full bg-white/95 dark:bg-black/95 backdrop-blur-lg
        transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="flex flex-col items-center space-y-4 py-6">
                    <Link
                        href="/about"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hakkımızda
                    </Link>
                    <Link
                        href="/services"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hizmetler
                    </Link>
                    <Link
                        href="/hospitals"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hastanelerimiz
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        İletişim
                    </Link>
                    <button className="bg-gradient-to-r from-rose-500 to-teal-500 
            text-white px-8 py-3 rounded-full font-medium mt-6
            hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300
            w-[200px]">
                        Başlayalım
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header; 