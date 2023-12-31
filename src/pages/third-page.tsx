import { getQiitaData } from '@/lib/getAPIData';
import Link from 'next/link';

export async function getStaticProps() {
  const allData = await getQiitaData();
  return {
    props: {
      allData,
    },
  };
}

export default function ThirdPage({ allData }: { allData: any }) {
  const renderUsers = allData.map((data: any, index: number) => (
    <div key={index}>
      <Link href={`/Qiita/${data.id}`}>{data.title}</Link>
    </div>
  ));

  console.log(renderUsers);
  return (
    <>
      <h1>Third Page</h1>
      {renderUsers}
      <br />
      <Link href="/post/blog-page">blog-pageへ移動</Link>
    </>
  );
}
