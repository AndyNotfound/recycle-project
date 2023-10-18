import blogs from "@/data/blogs";
import styles from "@/styles/blogDetail.module.css";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import NavbarLogin from "@/components/navbarLogin";
import Footer from "@/components/footer";

const poppins = Poppins({
  style: "normal",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const blog = blogs.find((blog) => blog.id === Number(id));
  const { title, thumbnail, content } = blog;
  
  const { data: session } = useSession();
  return (
    <>
      {session ? <NavbarLogin /> : <Navbar />}
      <div className={styles.articleDetailContainer}>
        <div className={styles.headerContainer}>
          <button onClick={() => router.back()}>
            <Image src="/assets/back.png" alt="" width="30" height="30" />
          </button>
          <h1 className={[poppins.className, styles.header].join(" ")}>
            {title}
          </h1>
        </div>
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          alt=""
          width="1112"
          height="455"
        />
        <p className={[poppins.className, styles.article].join(" ")}>
          {content}
        </p>
      </div>
      <Footer />
    </>
  );
}
