import Image from 'next/image';
import { useEffect, useState } from 'react';

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const Header = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 20) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return (): void => document.removeEventListener('scroll', onScroll);
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    maxWidth: '150px',
    minWidth: '100px',
    width: 150 - scrollY / 1 + 'px', // スクロールに応じてヘッダーの高さを変更
  };

  return (
    <div
      style={{
        background: '#2f4f4f',
      }}
      className={
        isTop
          ? 'md:bg-opacity-50 items-center justify-between font-semibold fixed w-full flex navbar navbar-expand-lg navbar-light z-20 '
          : 'items-center justify-between font-semibold fixed w-full flex navbar navbar-expand-lg navbar-light z-20 '
      }
    >
      <nav className="pcnav_hidden w-full">
        <header className="flex py-2">
          {/* <ul className="flex flex-row justify-end mt-6"
            style={{ color:"#004673" }}>
              <li>ホーム</li>
              <li>施工事例</li>
              <li>スタッフ募集</li>
              <li>会社概要</li>
              <li>お問い合わせ</li>
            </ul> */}
          <div className="w-full flex justify-center items-center mt-1 ">
            <ul className="headstyle">
              <li>
                <a
                  href="/"
                  className="font-semibold py-2 px-3 md:bg-transparent 
          md:p-0"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="font-semibold py-2 px-3 md:bg-transparent 
          md:p-0"
                  aria-current="page"
                >
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-semibold py-2 px-3 md:bg-transparent 
          md:p-0"
                  aria-current="page"
                >
                  CONTACT
                </a>
              </li>{' '}
            </ul>
          </div>
        </header>
      </nav>
      <div className="container mx-auto px-3 md:hidden">
        <header className="flex justify-between py-3">
          <a href="/">
            <Image
              style={headerStyle}
              src=""
              alt="K-tec"
              width={120}
              height={80}
            />
          </a>
          {/* humbergerbutton */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className="z-30 space-y-2"
          >
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45'
                  : 'w-8 h-0.5 bg-gray-600'
              }
            />
            <div className={openMenu ? 'opacity-0' : 'w-8 h-0.5 bg-gray-600'} />
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 -rotate-45'
                  : 'w-8 h-0.5 bg-gray-600'
              }
            />
          </button>

          {/* nav */}
          <nav
            className={
              openMenu
                ? 'text-left fixed bg-slate-50 right-0 top-0 w-6/12 h-screen flex flex-col justify-start pt-8 px-3'
                : 'fixed right-[-100%]'
            }
          >
            <ul className="mt-12">
              <li className="hover:bg-gray-200">
                <a href="/" style={{ color: '#fff' }} aria-current="page">
                  ホーム
                </a>
              </li>
              <li className="hover:bg-gray-200">
                <a
                  href="/contact"
                  style={{ color: '#fff' }}
                  aria-current="page"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
