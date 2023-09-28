import Layout from '@/components/Layout';
import SeoHead from '@/components/SeoHead';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <SeoHead title="nakano Web制作Portfolio" />
      <h1></h1>
    </Layout>
  );
}
