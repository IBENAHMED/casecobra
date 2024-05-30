import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {

    let { getUser } = getKindeServerSession();
    let user = await getUser();

    let isAdmin = user?.email === process.env.ADMIN_EMAIL;
    console.log(user?.email)

    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <div className='container mx-auto pr-5 pl-5'>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        case<span className='text-green-600'>cobra</span>
                    </Link>

                    <div className='h-full flex items-center space-x-4'>
                        {user ? (
                            <>
                                <Link
                                    href='/api/auth/logout'
                                    className="hover:bg-slate-200 duration-300 py-1 px-3 rounded">
                                    Sign out
                                </Link>
                                {isAdmin ? (
                                    <Link
                                        href='/dashboard'
                                        className="hover:bg-slate-200 duration-300 py-1 px-3 rounded">
                                        Dashboard ✨
                                    </Link>
                                ) : null}
                                <Link
                                    href='/configure/upload'
                                    className="flex items-center bg-green-600 text-white py-1 px-3 rounded hover:bg-green-400 duration-300">
                                    Create case
                                    <FaArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/api/auth/register'
                                    className="hover:bg-slate-200 duration-300 py-1 px-3 rounded">
                                    Sign up
                                </Link>

                                <Link
                                    href='/api/auth/login'
                                    className="hover:bg-slate-200 duration-300 py-1 px-3 rounded">
                                    Login
                                </Link>

                                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                                <Link
                                    href='/configure/upload'
                                    className="flex items-center bg-green-600 text-white py-1 px-3 rounded hover:bg-green-400 duration-300">
                                    <span>Create case</span>
                                    <FaArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
