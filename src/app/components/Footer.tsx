import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo and About Section */}
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <Image
                            src="/images/parenting-logo.png" // Replace this with your actual logo path
                            alt="Parenting World Logo"
                            width={50} // Set the width of your logo
                            height={50} // Set the height of your logo
                            className="rounded-sm"
                        />
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Parenting World
                        </h2>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg">
                        Empowering parents with resources, advice, and tools to navigate the journey of raising children. Stay connected for helpful tips and support.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-gray-200 transition text-sm md:text-base lg:text-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-200 transition text-sm md:text-base lg:text-lg">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-gray-200 transition text-sm md:text-base lg:text-lg">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-200 transition text-sm md:text-base lg:text-lg">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link
                            href="#!"
                            className="bg-white text-pink-500 rounded-full p-3 hover:bg-gray-200 transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-blue-400 rounded-full p-3 hover:bg-gray-200 transition"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-pink-600 rounded-full p-3 hover:bg-gray-200 transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href="#!"
                            className="bg-white text-blue-700 rounded-full p-3 hover:bg-gray-200 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 text-center text-xs md:text-sm lg:text-base text-gray-100 border-t border-gray-200 pt-5">
                © {new Date().getFullYear()} Parenting World. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
