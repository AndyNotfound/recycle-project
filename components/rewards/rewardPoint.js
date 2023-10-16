import Image from "next/image";
import styles from "@/styles/components/rewards/rewardPoint.module.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
});

export default function RewardPoint({ props }) {
  const { voucherType, price } = props;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageContainer}>
        <Image
          className={styles.imageContainer}
          src="/assets/rewards.png"
          alt=""
          width="100"
          height="100"
        />
        <p className={[poppins.className, styles.voucher].join(" ")}>
          {voucherType}
        </p>
      </div>
      <div className={styles.voucherDetailContainer}>
        <p className={[poppins.className, styles.voucherPoint].join(" ")}>
          {price}
        </p>
        <button
          className={[poppins.className, styles.voucherExchange].join(" ")}
        >
          Tukar
        </button>
      </div>
    </div>
  );
}
