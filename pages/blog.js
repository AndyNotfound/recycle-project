import ArticleCard from "@/components/blog/articleCard";
import Navbar from "@/components/navbar";
import { Poppins } from "@next/font/google";
import styles from "@/styles/blog.module.css";
import HighlightedArticle from "@/components/blog/highlightedArticle";

const articles = [
  {
    id: 1,
    writer: "Dian Pratiwi",
    datePosted: "12 Oktober 2023",
    title: "Pentingnya Daur Ulang: Upaya Mengelola Limbah Secara Bijak",
    thumbnail: "/assets/0.jpeg",
    description:
      "Daur ulang adalah salah satu cara terbaik dalam mengelola sampah dan menjaga lingkungan. Artikel ini akan membahas pentingnya daur ulang dan bagaimana kita semua dapat berkontribusi.",
    content:
      "Daur ulang adalah suatu proses di mana bahan-bahan bekas atau limbah diubah menjadi produk yang baru. Ini adalah langkah penting dalam mengelola sampah dan melindungi lingkungan kita. Kita semua tahu bahwa sampah plastik dan limbah lainnya menjadi masalah serius di seluruh dunia. Dalam upaya menjaga bumi kita tetap hijau, daur ulang adalah kunci utama.\n\nKita bisa mendaur ulang berbagai macam material, mulai dari kertas, plastik, logam, hingga elektronik. Proses daur ulang mengurangi jumlah limbah yang masuk ke tempat pembuangan sampah. Selain itu, daur ulang juga membantu menghemat sumber daya alam, seperti pohon, minyak bumi, dan air.\n\nSelain manfaat lingkungan, daur ulang juga memiliki manfaat ekonomi. Ini menciptakan peluang pekerjaan di industri daur ulang dan mengurangi biaya pembuangan sampah. Kita semua dapat berkontribusi dengan cara mendaur ulang di rumah, di tempat kerja, dan di komunitas kita.\n\nIngatlah, daur ulang adalah langkah kecil yang dapat kita ambil untuk menjaga bumi kita tetap hijau. Mari bersama-sama berkontribusi dalam upaya mengelola sampah secara bijak dan berkelanjutan.",
  },
  {
    id: 2,
    writer: "Budi Santoso",
    datePosted: "18 November 2023",
    title: "Memahami Sistem Pengelolaan Sampah di Kota",
    thumbnail: "/assets/1.jpeg",
    description:
      "Sistem pengelolaan sampah di kota-kota besar memiliki peran penting dalam menjaga kebersihan dan kesehatan lingkungan. Artikel ini akan membahas bagaimana sistem ini berfungsi.",
    content:
      "Sampah merupakan masalah yang perlu ditangani dengan serius, terutama di kota-kota besar. Untuk menjaga kebersihan dan kesehatan lingkungan, sistem pengelolaan sampah yang efektif diperlukan. Sebagian besar kota memiliki sistem pengumpulan, pemrosesan, dan pembuangan sampah yang berfungsi dengan baik.\n\nSistem pengelolaan sampah di kota-kota besar biasanya dimulai dengan pengumpulan sampah dari rumah-rumah dan bisnis. Sampah ini kemudian dibawa ke pusat pemrosesan sampah. Di sana, sampah dipilah dan diproses. Barang-barang yang dapat didaur ulang akan dikirim ke fasilitas daur ulang, sedangkan sampah non-daur ulang akan dibuang dengan benar.\n\nPenting untuk memahami sistem ini dan berpartisipasi secara aktif dalam pengelolaan sampah. Ini termasuk memisahkan sampah di rumah, mendaur ulang barang-barang yang bisa didaur ulang, dan membuang sampah di tempat yang telah ditentukan. Dengan begitu, kita dapat membantu menjaga kebersihan kota kita dan mendukung praktik pengelolaan sampah yang berkelanjutan.",
  },
  {
    id: 3,
    writer: "Rina Susanto",
    datePosted: "3 Februari 2023",
    title:
      "Mengurangi Limbah Plastik: Langkah-Langkah Praktis untuk Lingkungan",
    thumbnail: "/assets/2.jpeg",
    description:
      "Mengurangi penggunaan plastik adalah langkah penting dalam menjaga lingkungan. Artikel ini akan membahas langkah-langkah praktis untuk mengurangi limbah plastik dalam kehidupan sehari-hari.",
    content:
      "Plastik adalah salah satu material yang paling umum digunakan di berbagai produk sehari-hari. Namun, penggunaan berlebihan plastik telah menciptakan masalah limbah plastik yang serius. Mengurangi penggunaan plastik adalah langkah penting dalam melindungi lingkungan kita.\n\nDalam artikel ini, kita akan membahas langkah-langkah praktis untuk mengurangi limbah plastik. Hal-hal sederhana seperti membawa tas belanja sendiri, menggunakan botol minum yang dapat diisi ulang, dan menghindari produk plastik sekali pakai dapat memiliki dampak besar. Selain itu, kita akan melihat alternatif produk ramah lingkungan yang dapat menggantikan produk plastik.\n\nKita semua memiliki peran dalam mengurangi limbah plastik. Dengan langkah-langkah praktis ini, kita dapat membantu mengatasi masalah limbah plastik dan menjaga lingkungan kita.",
  },
  {
    id: 4,
    writer: "Andi Pratama",
    datePosted: "20 April 2023",
    title: "Memanfaatkan Sampah Organik: Tips Membuat Kompos",
    thumbnail: "/assets/3.jpeg",
    description:
      "Memanfaatkan sampah organik menjadi kompos adalah cara yang ramah lingkungan. Artikel ini akan membahas langkah-langkah membuat kompos dari sampah organik di rumah.",
    content:
      "Sampah organik, seperti sisa makanan dan dedaunan, seringkali berakhir di tempat pembuangan sampah. Namun, kita dapat memanfaatkannya dengan cara membuat kompos. Kompos adalah pupuk alami yang berguna untuk pertanian dan kebun. Dalam artikel ini, kita akan membahas langkah-langkah sederhana untuk membuat kompos dari sampah organik di rumah.\n\nProses pembuatan kompos melibatkan pencampuran sampah organik, seperti sisa makanan, dengan dedaunan dan bahan alami lainnya. Kompos yang dihasilkan dapat digunakan untuk menyuburkan tanah di kebun atau tanaman hias. Langkah-langkah ini ramah lingkungan dan dapat membantu mengurangi jumlah sampah yang masuk ke tempat pembuangan sampah.\n\nDengan membuat kompos di rumah, kita dapat mendukung praktik daur ulang dan menghasilkan pupuk alami yang bermanfaat bagi tanaman kita.",
  },
  {
    id: 5,
    writer: "Dewi Lestari",
    datePosted: "9 Juni 2023",
    title: "Menyadari Dampak Sampah Elektronik: Mendaur Ulang Perangkat Lama",
    thumbnail: "/assets/4.jpeg",
    description:
      "Sampah elektronik, atau e-waste, memiliki dampak lingkungan serius. Artikel ini akan membahas pentingnya mendaur ulang perangkat elektronik lama untuk mengurangi dampak negatifnya.",
    content:
      "Perangkat elektronik, seperti ponsel lama, komputer, dan peralatan elektronik lainnya, seringkali menjadi sampah elektronik atau e-waste. Sampah ini dapat mengandung bahan berbahaya dan berdampak negatif pada lingkungan jika tidak dikelola dengan benar. Dalam artikel ini, kita akan membahas pentingnya mendaur ulang perangkat elektronik lama.\n\nMendaur ulang perangkat elektronik bukan hanya tentang mengurangi jumlah sampah elektronik yang masuk ke tempat pembuangan sampah. Ini juga berarti mendaur ulang material berharga yang terkandung dalam perangkat tersebut. Logam, plastik, dan komponen lainnya dapat didaur ulang dan digunakan kembali untuk memproduksi perangkat baru. Dengan mendaur ulang perangkat elektronik, kita dapat mengurangi penggalian sumber daya alam dan dampak lingkungan yang merugikan.\n\nPenting untuk mencari cara mendaur ulang perangkat elektronik lama dengan benar, seperti mengirimnya ke fasilitas daur ulang yang sesuai. Dengan begitu, kita dapat menjaga lingkungan dan mendukung praktik daur ulang yang berkelanjutan.",
  },
];

const poppins = Poppins({
  style: "normal",
  weight: "700",
  subsets: ["latin"],
});

const articleRendered = articles.map((item, index) => {
  if (index === 0) {
    return <HighlightedArticle className={styles.highlighted} key={index} props={item} />;
  } else {
    return <ArticleCard key={index} props={item} />;
  }
});

export default function Blog() {
  return (
    <main>
      <Navbar />
      <h1 className={[poppins.className, styles.header].join(" ")}>
        Berbagai Informasi menarik
      </h1>
      <div className={styles.articleWrapper}>{articleRendered}</div>
    </main>
  );
}
