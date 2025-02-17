import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t border-gray-200 h-20 relative'>
            <div className='container mx-auto p-5'>
                <div className='' />

                <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
                    <div className='text-center md:text-left pb-2 md:pb-0'>
                        <p className='text-sm text-muted-foreground'>
                            &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-8'>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Terms
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;