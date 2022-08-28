import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own Store of Nifty NFTs. Start Selling & Growing."
        description="Buy, store & collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace today."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace."
        description="Experience the beautiful UI of ProNef NFT Marketplace."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="Pronef is built using Expo which runs natively on all users' devices. It makes it extremely easy to get apps into people's hands."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store."
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <footer className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Peter Kibuchi</span>
        </p>
      </footer>
    </>
  );
}

export default App;
