import styles from "@/styles/components/highlightedArticle.module.css";
import Link from "next/link";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  style: "normal",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function HighlightedArticle({ props }) {
  const { id, datePosted, writer,title, description } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <p className={[poppins.className, styles.cardDate].join(" ")}>
          {`${writer}, ${datePosted}`}
        </p>
        <h4 className={[poppins.className, styles.cardTitle].join(" ")}>
          {title}
        </h4>
        <p className={[poppins.className, styles.cardDesc].join(" ")}>{description}</p>
        <Link
          href={`/blog/details/${id}`}
          className={[styles.cardAction, poppins.className].join(" ")}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}
