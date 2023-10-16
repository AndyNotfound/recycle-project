import styles from "@/styles/components/accumulatedPoints.module.css";
import { ABeeZee } from "@next/font/google";

const abeezee = ABeeZee({
  weight: "400",
  styles: "italic",
  subsets: ["latin"],
});

export default function AccumulatedPoints({ additionalStyles }) {
  return (
    <div className={[additionalStyles, styles.accumPointsContainer].join(" ")}>
      <p className={[abeezee.className, styles.accumPoints].join(" ")}>
        Your accumulate points{" "}
        <span className={styles.accumPointsValue}>792</span>
      </p>
    </div>
  );
}
