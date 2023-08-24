import { formatDateToKanji } from '@/utils';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ConstCard = () => {
  const [mapdata, setMapdata] = useState([]);
  const [addressdata, setAddressdata] = useState([]);
  console.log('🚀 ~ file: example.tsx:10 ~ example ~ setMapdata:', setMapdata);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx:8 ~ useEffect ~ useEffect:', '***');
    handleClick();
  }, []);

  const handleClick = async () => {
    const res = await axios.get('/api/hello');
    console.log(res.data.data.results);
    setMapdata(res.data.data.results);
  };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg px-4 md:px-1">
        <div className="Example_grid">
          {mapdata.length !== 0 &&
            mapdata.map((md: any, index: number) => {
              return md.properties.address.rich_text.length !== 0 &&
                md.properties.date.date &&
                md.properties.image.files.length !== 0 ? (
                <div key={index}>
                  <div>
                    <a
                      href="#"
                      className="group mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                      <Image
                        src={
                          md.properties.image.files.length !== 0
                            ? md.properties.image.files[0].file.url
                            : ''
                        }
                        alt="Photo"
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        width={500}
                        height={300}
                      />
                    </a>

                    <div className="flex flex-col text-center">
                      <span className="text-lg font-bold text-gray-500">
                        {formatDateToKanji(md.properties.date.date.start)}
                      </span>
                      <a
                        href="#"
                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                      >
                        {md.properties.address.rich_text[0].plain_text}
                      </a>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default ConstCard;
