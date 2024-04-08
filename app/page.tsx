import styles from "../styles/Page.module.scss";
import Link from "next/link";

// TODO: add a cool animation that hides the categories that were not clicked

export default function Home() {
  return (
    <main>
      <div className={styles.tableOfContents}>
        <Link href="/videography">/ Videography</Link>
        <Link href="/photography">/ Photography</Link>
        <Link href="/writing">/ Writing</Link>
        <Link href="/about-me">/ About me</Link>
      </div>
    </main>
  );
}
