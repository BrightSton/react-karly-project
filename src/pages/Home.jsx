import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper';
import mainBannerPrice from '@/assets/main/banner05.png';
import mainBannerFruit from '@/assets/main/banner01.png';
import mainBannerCard from '@/assets/main/banner02.png';
import mainBannerPurple from '@/assets/main/banner03.png';
import jjolmyeon from '@/assets/main/product01.png';
import sunCushion from '@/assets/main/product02.png';
import hyeonmi from '@/assets/main/product03.png';
import frosch from '@/assets/main/product04.png';
import cartIcon from '@/assets/icons/Icon/Cart.svg';
import ArrowRight from '@/assets/main/icon/Arrow.png';
import ArrowLeft from '@/assets/main/icon/Arrow.svg';
import { SwiperComponent } from '../components/Swiper/SwiperComponent';
import { MainPopup } from '../components/Popup/MainPopup';
import { useReadData } from '../firebase/firestore/useReadData';

function Home() {
  // firebase에서 데이터를 받아오는 방법

  const { readData, data, isLoading, error } = useReadData('products');

  async function handleReadData() {
    // 모든 데이터를 가져옵니다.
    readData();

    // 특정 도큐멘트 데이터만 가져옵니다.
    // await readData('demo');
  }
  useEffect(() => {
    handleReadData();
  }, []);

  const bannerMockData = [
    {
      id: 1,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerPrice,
      href: '/',
    },
    {
      id: 2,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerFruit,
      href: '/',
    },
    {
      id: 3,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerPurple,
      href: '/',
    },
    {
      id: 4,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: mainBannerCard,
      href: '/',
    },
  ];
  const productMockData = [
    {
      id: 1,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: jjolmyeon,
      href: '/',
    },
    {
      id: 2,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: sunCushion,
      href: '/',
    },
    {
      id: 3,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: hyeonmi,
      href: '/',
    },
    {
      id: 4,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: frosch,
      href: '/',
    },
    {
      id: 5,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: jjolmyeon,
      href: '/',
    },
    {
      id: 6,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: sunCushion,
      href: '/',
    },
    {
      id: 7,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: hyeonmi,
      href: '/',
    },
    {
      id: 8,
      title: '제목입니다.',
      desc: '설명입니다',
      price: '가격입니다',
      src: frosch,
      href: '/',
    },
  ];
  return (
    <div>
      {/* <MainPopup /> */}

      <section className={styles['main-banner']}>
        <h2 className={styles['a11y-hidden']}>메인베너</h2>
        {/* 메인베너 */}
        <SwiperComponent
          isbanner="true"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
          modules={[Pagination, Navigation, Autoplay]}
          data={bannerMockData}
        />
      </section>

      <main className={styles.main}>
        <section className={styles['recommend-products']}>
          <h2 className={styles['recommend-products-title']}>
            이 상품 어때요?
          </h2>
          {/* 배너 테스트 */}
          <SwiperComponent
            isbanner="false"
            spaceBetween={19}
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{ clickable: true, type: 'false' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            data={data ? data : []}
          />
        </section>
        {/* 퍼플 위크 */}

        <section className={styles['line-banner']}>
          <h2 className={styles['a11y-hidden']}>퍼플 위크</h2>
          <a href="/">
            <img
              className={styles['line-banner-image']}
              src={mainBannerPurple}
              alt="더 풍성해진 10월의 퍼플위크"
            />
          </a>
        </section>

        {/* 놓치면 후회할 가격 */}
        <section className={styles['sale-products']}>
          <h2 className={styles['sale-products-title']}> 놓치면 후회할 가격</h2>

          <Swiper
            className={styles['sale-products-swiper']}
            navigation={true}
            spaceBetween={19}
            slidesPerView={4}
            slidesPerGroup={4}
            autoHeight={true}
            pagination={{ clickable: true, type: 'false' }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={jjolmyeon}
                  alt="풀무원 탱탱쫄면 4개입"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [풀무원] 탱탱쫄면 (4개입)
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    4,980원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={sunCushion}
                  alt="온더바디 죠르디 시카 자석 선쿠션"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [온더바디] 죠르디 시카 자석 선쿠션
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    32,500원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={hyeonmi}
                  alt="유기농 밀키퀸 현미 4kg"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    유기농 밀키퀸 현미 4kg
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    25,000원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={frosch}
                  alt="프로쉬 베이비 세탁세"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [프로쉬] 베이비 세탁세
                  </h3>
                  <span className={styles['recommend-products-item__discount']}>
                    24%
                  </span>
                  <span className={styles['recommend-products-item__price']}>
                    18,900원
                  </span>
                  (
                  <span
                    className={styles['recommend-products-item__originalPrice']}
                  >
                    24,900원
                  </span>
                  )
                </div>
                <button
                  className={styles['sale-products-item___cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={jjolmyeon}
                  alt="풀무원 탱탱쫄면 4개입"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [풀무원] 탱탱쫄면 (4개입)
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    4,980원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={sunCushion}
                  alt="온더바디 죠르디 시카 자석 선쿠션"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [온더바디] 죠르디 시카 자석 선쿠션
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    32,500원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={hyeonmi}
                  alt="유기농 밀키퀸 현미 4kg"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    유기농 밀키퀸 현미 4kg
                  </h3>
                  <span className={styles['sale-products-item__price']}>
                    25,000원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item__cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>

            <SwiperSlide className={styles['sale-products-item']}>
              <a href="/">
                <img
                  className={styles['sale-products-item__image']}
                  src={frosch}
                  alt="프로쉬 베이비 세탁세"
                />
                <div className={styles['sale-products-item__info']}>
                  <h3 className={styles['sale-products-item__name']}>
                    [프로쉬] 베이비 세탁세
                  </h3>
                  <span className={styles['recommend-products-item__discount']}>
                    24%
                  </span>
                  <span className={styles['recommend-products-item__price']}>
                    18,900원
                  </span>
                  <span
                    className={styles['recommend-products-item__originalPrice']}
                  >
                    24,900원
                  </span>
                </div>
                <button
                  className={styles['sale-products-item___cartIconBtn']}
                  type="button"
                >
                  <img
                    className={styles['sale-products-item__cartIcon']}
                    src={cartIcon}
                    alt="장바구니 아이콘"
                  />
                </button>
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>

      <footer className={styles.footer}>
        <h1>푸터 영역</h1>
      </footer>
    </div>
  );
}

export default Home;
