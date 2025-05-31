import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/components/date';
import Article from '@/components/article';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Article>
        <h1>{postData.title}</h1>
        <div className="text-gray-500 mb-8">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="mt-12">
          <Link className="text-blue-600 hover:underline" href="/">← Back to home</Link>
        </div>
      </Article>
    </Layout>
  )
}