import React from 'react';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { EventsContext } from '../../Context/EventsProvider';
import { SliderBtnIcon } from '../Icons/SliderBtnIcon';
import classNames from 'classnames';
import styles from './slider.scss';

export function Slider() {
  const { data, currentEventsCount } = React.useContext(EventsContext);
  const slides = data[currentEventsCount].list;

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.mySwiper}
        wrapperClass={styles.wrapper}
        spaceBetween={25}
        initialSlide={0}
        grabCursor
        slidesPerView={2}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prew}`
        }}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet
        }}
        breakpoints={{
          1070: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}>
        {slides.map((item) => {
          return (
            <SwiperSlide className={styles.mySlide} key={nanoid()}>
              <h2 className={styles.title}>{item.year}</h2>
              <p className={styles.description}>{item.event}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.pagination}></div>

      <button className={classNames(styles.control, styles.prew)}>
        <SliderBtnIcon />
      </button>
      <button className={classNames(styles.control, styles.next)}>
        <SliderBtnIcon />
      </button>
    </div>
  );
}
