import assets from "../assets";
import styles from "../styles/Global";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h2 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h2>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
        </div>

        <button className={`${styles.btnPrimary}`}>
          <a
            href="https://github.com/peterkibuchi/nifty-nfts"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </button>

        <div className={`${styles.flexCenter}`}>
          <img
            src={assets.scene}
            alt="download_png"
            className={`${styles.fullImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
