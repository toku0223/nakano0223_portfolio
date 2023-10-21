import Layout from '@/components/Layout';
import SeoHead from '@/components/SeoHead';
import { testFunc } from '@/utils/notion';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const allData = await testFunc({});
  return {
    props: {
      pages: allData ? allData.results : [],
    },
  };
};

const inter = Inter({ subsets: ['latin'] });

export default function Home({ pages }: { pages: any }) {
  const [mapdata, setMapdata] = useState([]);
  const [addressdata, setAddressdata] = useState([]);

  // console.log('🚀 ~ file: example.tsx:10 ~ example ~ setMapdata:', setMapdata);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx:8 ~ useEffect ~ useEffect:', pages);
    handleClick();
  }, []);

  const handleClick = async () => {
    setMapdata(pages);
  };

  return (
    <Layout>
      <SeoHead title="nakano Web制作Portfolio" />

      <div className="loop_wrap relative">
        <ul className="flex flex-row">
          <li>
            <div className="slide_img">
              {mapdata.length !== 0 &&
                mapdata
                  .filter((md: any, index: number) => index < 3)
                  .map((md: any, index: number) => {
                    return md.properties.name.title[0].plain_text.length !==
                      0 ? (
                      <div key={index}>
                        <div>
                          <Image
                            src={
                              md.properties.image.files.length !== 0
                                ? md.properties.image.files[0].file.url
                                : ''
                            }
                            alt={md.properties.name.title[0].plain_text}
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            width={400}
                            height={300}
                          />
                        </div>
                      </div>
                    ) : null;
                  })}
            </div>
          </li>
        </ul>
        <div className="slide_logo absolute mt-28">
          <h2 className="t_color_g text-center pt-12 text-5xl font-bold animate-fade-in-top_text">
            Nakano Web Portfolio
          </h2>
        </div>
      </div>

      <h2 className="title_h2 mt-8">WORKS</h2>
      {/* ↓ポートフォリオ↓ */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg px-4 md:px-1">
          <div className="Example_grid">
            {mapdata.length !== 0 &&
              mapdata
                .filter((md: any, index: number) => index < 3)
                .map((md: any, index: number) => {
                  return md.properties.name.title[0].plain_text.length !== 0 ? (
                    <div key={index}>
                      <div>
                        <a
                          href={md.properties.URL.url}
                          className="group mb-2 block h-60 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                        >
                          <Image
                            src={
                              md.properties.image.files.length !== 0
                                ? md.properties.image.files[0].file.url
                                : ''
                            }
                            alt={md.properties.name.title[0].plain_text}
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                  ) : null;
                })}
          </div>
        </div>
      </div>
      {/* ↑ポートフォリオ↑ */}
    </Layout>
  );
}
