import styles from "@/styles/components/anchor.module.css";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const anchorItem = [
  {
    thumbnail: "/assets/1.svg",
    title: "Pick Up",
    route: "/pickups",
  },
  {
    thumbnail: "/assets/2.svg",
    title: "Drop Off",
    route: "/dropoffs",
  },
  {
    thumbnail: "/assets/3.svg",
    title: "Reward",
    route: "/rewards",
  },
];

const poppins = Poppins({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
});

export default function Anchor({ additionalStyles }) {
  return (
    <div className={[additionalStyles, styles.anchorContainer].join(" ")}>
      {anchorItem.map((item, index) => {
        const { title, thumbnail, route } = item;
        return (
          <Link key={index} href={route} className={styles.anchorItem}>
            <Image
              className={styles.anchorThumbnail}
              src={thumbnail}
              alt=""
              width="80"
              height="80"
            />
            <p className={[poppins.className, styles.anchorLink].join(" ")}>
              {title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
