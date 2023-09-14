import { getQiitaDataIds, getQiitaPagesDataByIds } from '@/lib/getAPIData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export async function getStaticPaths() {
  const paths = await getQiitaDataIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string[] } }) {
  const userData = await getQiitaPagesDataByIds(params.id);
  return {
    props: {
      userData,
    },
  };
}

export default function Quiita({ userData }: { userData: any }) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setUser(JSON.parse(userData));
  }, []);
  return user ? (
    <div>
      <h1>{user.title}</h1>
      <Link href={user.url}>
        <p>{user.url}</p>
      </Link>
    </div>
  ) : null;
}
