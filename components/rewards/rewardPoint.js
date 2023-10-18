import Image from "next/image";
import styles from "@/styles/components/rewards/rewardPoint.module.css";
import { Poppins } from "@next/font/google";
import PopupReward from "../popupReward";

const poppins = Poppins({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
});

export default function RewardPoint({ props }) {
  const { voucherType, price, url } = props;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageContainer}>
        <Image
          className={styles.imageContainer}
          src={url}
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
        <PopupReward />
      </div>
    </div>
  );
}
