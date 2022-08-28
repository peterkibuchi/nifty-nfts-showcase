import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h2 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h2>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using React Native, a cross-platform
            technology that enables it to run on both Android and iOS devices.
          </p>
        </div>

        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaDcript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
