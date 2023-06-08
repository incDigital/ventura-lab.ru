import Hamburger from "@/components/hamburger/hamburger";
import AnimationLogo from "@/components/logo/animation-logo";
import LocationNavigation from "@/components/navigations/location-navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <Hamburger />
    <header className={styles["hero"]}>
      <div className={styles["hero__inner"]}>
        <div className="hero__logo">
          <AnimationLogo />
        </div>
        <div className={styles["hero__sep"]}></div>
        <div className={styles["hero__navigation"]}>
          <LocationNavigation />
        </div>
      </div>
    </header>
    </>
  );
}
