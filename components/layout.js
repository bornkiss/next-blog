import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Bornkiss';
export const siteTitle = 'Next.js Blog Starter Template';
export const siteDescription = 'A simple blog starter template using Next.js and Tailwind CSS.';

export default function Layout({ children, home }) {
  return (
    <div className="max-w-2xl mt-12 mb-24 mx-auto px-4 ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteDescription}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={80}
              width={80}
              alt={name}
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold my-4 tracking-tight">{name}</h1>
          </>
        ) : (
          <div className="flex items-center justify-start w-full mb-4">
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full size-10"
                height={100}
                width={100}
                alt={name}
              />
            </Link>
            <h2 className="text-lg font-bold my-4 ml-4">
              <Link href="/" className="text-inherit hover:underline">
                {name}
              </Link>
            </h2>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}