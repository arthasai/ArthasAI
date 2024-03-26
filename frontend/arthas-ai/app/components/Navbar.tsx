import { BoxIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavBar = () => {
        setisClick(!isClick);
    };

    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-white">
                                    <BoxIcon></BoxIcon>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-grow ">
                            <div className="ml-4 flex items-center justify-end space-x-20 flex-grow">
                                <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Home
                                </Link>
                                <Link href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    About Us
                                </Link>
                                <Link href="/teampage" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Our Team
                                </Link>
                                <Link href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Try Arthas!
                                </Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavBar}>
                                {isClick ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-x-20 sm:px-3">
                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                About Us
                            </Link>
                            <Link href="/teampage" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Our Team
                            </Link>
                            <Link href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Try Arthas!
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
