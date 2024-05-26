'use client';

import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineBell } from 'react-icons/hi2';
import { CiMail } from 'react-icons/ci';
import { BsPeople } from 'react-icons/bs';

const NavBar = () => (
  <nav className="fixed bottom-0 left-0 z-50 w-full">
    <div className="grid grid-cols-5 h-14 max-h-[16dvh] max-w-screen-2xl">
      <Link href="/" className="flex justify-center items-center">
        <GoHomeFill className="w-7 h-7" />
      </Link>
      <Link href="/search" className="flex justify-center items-center">
        <FiSearch className="w-7 h-7" />
      </Link>
      <Link href="/notifications" className="flex justify-center items-center">
        <HiOutlineBell className="w-7 h-7" />
      </Link>
      <Link href="/messages" className="flex justify-center items-center">
        <CiMail className="w-7 h-7" />
      </Link>
      <Link href="/communities" className="flex justify-center items-center">
        <BsPeople className="w-7 h-7" />
      </Link>
    </div>
  </nav>
);

export { NavBar };
