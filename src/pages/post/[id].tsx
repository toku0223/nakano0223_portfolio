import { getAPIDataIds, getUserDataById } from '@/lib/getAPIData';
import { useEffect, useState } from 'react';


export async function getStaticPaths() {
  const paths = await getAPIDataIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const userData = await getUserDataById(params.id);
  return {
    props: {
      userData,
    },
  };
}

export default function Post({ userData }: { userData: any }) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setUser(JSON.parse(userData));
  }, []);
  return user ? (
    <div>
      <h1>{user.username}</h1>
      <p>{user.email}</p>
    </div>
  ) : null;
}