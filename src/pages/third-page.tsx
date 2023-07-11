import { getQuiitaData } from '@/lib/getAPIData';
import Link from 'next/link';

export async function getStaticProps() {
  const allData = await getQuiitaData();
  return {
    props: {
      allData,
    },
  };
}

export default function ThirdPage({ allData }: { allData: any }) {
  
  const renderUsers = allData.map((data: any, index: number) => (
    <div key={index}>
      {data.title}
    </div>
  ));
  return (
    <>
      <h1>Third Page</h1>
      {renderUsers}
      <Link href="/post/blog-page">
        blog-pageへ移動
      </Link>
    </>
  );
}