import styles from "@/styles/components/articleCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Rubik, Poppins } from "@next/font/google";

const rubik = Rubik({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
});

const poppins = Poppins({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
});

export default function ArticleCard({props}) {
  const { thumbnail, title, desc, actionLink } = props;
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={thumbnail}
        alt="recycle"
        width="439"
        height="270"
        className={styles.cardImage}
      />
      <div className={styles.cardInformation}>
        <h4 className={[styles.cardTitle, rubik.className].join(" ")}>
          {title}
        </h4>
        <p className={[styles.cardDescription, poppins.className].join(" ")}>
          {desc}{" "}
        </p>
        <Link
          href={actionLink}
          className={[styles.cardAction, poppins.className].join(" ")}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}
