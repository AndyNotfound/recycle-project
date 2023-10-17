import RewardPoint from "@/components/rewards/rewardPoint";
import styles from "@/styles/rewards.module.css";
import NavbarLogin from "@/components/navbarLogin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Poppins } from "@next/font/google";
import RewardsHero from "@/components/rewards/rewardsHero";
import AccumulatedPoints from "@/components/accumulatedPoints";
import Anchor from "@/components/anchor";
import voucher from "@/data/voucher";

const poppins = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export default function RewardsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div>
        <NavbarLogin />
        <RewardsHero />
        <div className={styles.anchorContainer}>
          <AccumulatedPoints additionalStyles={styles.accumulatedPoints} />
          <Anchor additionalStyles={styles.anchor} />
        </div>
        <h4
          className={[poppins.className, styles.rewardPointsHeader].join(" ")}
        >
          Reward Poin
        </h4>
        <div className={styles.rewardPointsContainer}>
          {voucher.map((item, index) => {
            return <RewardPoint key={index} props={item} />;
          })}
        </div>
      </div>
    );
  } else {
    if (typeof window !== "undefined") {
      window.alert("You should login first!");
      router.push("/");
    }
    return null;
  }
}
