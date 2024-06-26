import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardAvatar,
  CardDisplayName,
  // CardFooter,
  CardUsername,
  CardDate,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { getDataURL } from '@/libs';

const samplePost = {
  id: '1',
  user: {
    username: 'notlega',
    displayName: 'lega',
    // components 8 x 8
    blurhashAvatar:
      ':0TI,a~qfQ~qfQ~qfQ~q~qj[fQj[fQj[fQj[00ayfQayfQayfQay~qj[fQj[fQj[fQj[00ayfQayfQayfQay~qj[fQj[fQj[fQj[00ayfQayfQayfQay~qj[fQj[fQj[fQj[',
    avatar: 'https://github.com/notlega.png',
    checkmark: false,
  },
  content: 'Hello, world!',
  likes: 0,
  retweets: 0,
  comments: 0,
  analytics: 0,
  date: new Date(),
};

const Home = () => {
  return (
    <>
      <header className="grid grid-cols-3 px-4 h-14 ">
        <button className="flex justify-start items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/notlega.png"
              alt="@notlega"
              width={32}
              height={32}
            />
          </Avatar>
        </button>
        <Link href="/" className="flex justify-center items-center">
          <FaTwitter className="w-7 h-7" />
        </Link>
        <Link
          href="/pinned/edit"
          className="flex justify-end items-center px-1"
        >
          <GoGear className="w-5 h-5" />
        </Link>
      </header>
      <Tabs defaultValue="forYou">
        <TabsList className="flex justify-center items-center h-14 p-0">
          <TabsTrigger value="forYou" className="w-full h-full">
            For You
          </TabsTrigger>
          <TabsTrigger value="following" className="w-full h-full">
            Following
          </TabsTrigger>
        </TabsList>
        <hr />
        <TabsContent value="forYou">
          <Card>
            <CardAvatar href={`/${samplePost.user.username}`}>
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={samplePost.user.avatar}
                  alt={samplePost.user.username}
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL={getDataURL(
                    samplePost.user.blurhashAvatar,
                    40,
                    40,
                  )}
                />
              </Avatar>
            </CardAvatar>
            <div className="w-full pb-3 space-y-1">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 leading-none">
                  <CardDisplayName href={`/${samplePost.user.username}`}>
                    {samplePost.user.displayName}
                  </CardDisplayName>
                  <CardUsername href={`/${samplePost.user.username}`}>
                    @{samplePost.user.username}
                  </CardUsername>
                  <CardDate>&middot; {samplePost.date.getTime()}</CardDate>
                </div>
                <button className="flex items-center">
                  <BsThreeDots className="w-4 h-4" />
                </button>
              </div>
              <div>{samplePost.content}</div>
              {/* <CardFooter>
                <button>Reply</button>
                <button>Retweet</button>
                <button>Like</button>
                <button>Analytics</button>
              </CardFooter> */}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="following">Following</TabsContent>
      </Tabs>
    </>
  );
};

export default Home;
