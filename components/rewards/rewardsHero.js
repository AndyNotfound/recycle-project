import Image from "next/image";
import styles from "@/styles/components/rewards/rewardsHero.module.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  style: "normal",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function RewardsHero() {
  return (
    <div className={styles.rewardsHero}>
      <h1 className={[roboto.className, styles.rewardsHeroHeader].join(" ")}>
        Tukar Poinmu Jadi Pulsa, Token Listrik, Dan{" "}
        <pre className={styles.rewardsHeroHeader}>Saldo Google Play. </pre>
      </h1>
      <Image
        className={styles.rewardsHeroIllus}
        src="/assets/rewards-illustration.png"
        alt=""
        width="438"
        height="353"
      />
      <button
        className={[roboto.className, styles.rewardsHeroAction].join(" ")}
      >
        Tukar Sekarang...!!!!
      </button>
    </div>
  );
}
