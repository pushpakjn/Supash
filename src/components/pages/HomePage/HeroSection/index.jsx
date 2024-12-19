import { MediaContainer } from 'components/common';

import Video from 'assets/videos/supash-banner-video.mp4';
import LogoHero from 'assets/images/supash-logo.png';

import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        <MediaContainer
          video={Video}
          autoPlay
          loop
          muted
          containerClassName={styles.video_container}
          fillClassName={styles.video_fill}
          mediaClassName={styles.video}
        />
        <div className={styles.content}>
          <div className={styles.logo_wrapper}>
            {/* <img src={LogoHero} alt="Hero Logo" className={styles.logo} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
