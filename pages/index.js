import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import Article from '../components/article';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Article>
        <ul className="list-none p-0 m-0 !mt-6">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-xl mb-6" key={id}>
              <Link className="font-normal" href={`/posts/${id}`} >
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Article>
    </Layout>
  );
}
