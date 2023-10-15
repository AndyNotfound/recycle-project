import blogs from "@/data/blogs";
import styles from "@/styles/blog.module.css";
import { Poppins } from "@next/font/google";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import NavbarLogin from "@/components/navbarLogin";
import ArticleCard from "@/components/blogs/articleCard";
import HighlightedArticle from "@/components/blogs/highlightedArticle";

const poppins = Poppins({
  style: "normal",
  weight: "700",
  subsets: ["latin"],
});

const articleRendered = blogs.map((item, index) => {
  if (index === 0) {
    return (
      <HighlightedArticle
        className={styles.highlighted}
        key={index}
        props={item}
      />
    );
  } else {
    return <ArticleCard key={index} props={item} />;
  }
});

export default function Blogs() {
  const { data: session } = useSession();
  return (
    <main>
      {session ? <NavbarLogin /> : <Navbar />}
      <h1 className={[poppins.className, styles.header].join(" ")}>
        Berbagai Informasi menarik
      </h1>
      <div className={styles.articleWrapper}>{articleRendered}</div>
    </main>
  );
}
