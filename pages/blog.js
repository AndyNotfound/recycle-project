import ArticleCard from "@/components/blog/articleCard";
import Navbar from "@/components/navbar";
import { Poppins } from "@next/font/google";
import styles from "@/styles/blog.module.css";

const poppins = Poppins({
  style: "normal",
  weight: "700",
  subsets: ["latin"],
});
export default function Blog() {
  return (
    <main>
      <Navbar />
      <h1 className={[poppins.className, styles.header].join(" ")}>Berbagai Informasi menarik</h1>
      <ArticleCard
        props={{
          thumbnail: "/assets/hand.jpeg",
          title: "Seni dan Kreativitas dalam Daur Ulang",
          desc: "Melalui blog ini, kita akan menjelajahi seni daur ulang dan kreativitas yang tak terbatas. Menginspirasi pembaca untuk menciptakan barang-barang unik dari bahan bekas, menjadikan daur ulang sebagai bentuk ekspresi seni, dan mempromosikan gaya hidup ramah lingkungan.",
          actionLink: "/",
        }}
      />
    </main>
  );
}
