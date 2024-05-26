import { FaTwitter } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Home = () => {
  return (
    <header className="grid grid-rows-2 h-[6.625rem] w-full">
      <div className="grid grid-cols-3 px-4">
        <div className="flex justify-start items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/notlega.png" alt="@notlega" />
            <AvatarFallback>NL</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center items-center">
          <FaTwitter className="w-7 h-7" />
        </div>
        <div className="flex justify-end items-center px-1">
          <GoGear className="w-5 h-5" />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Home;
