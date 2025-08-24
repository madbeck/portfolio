import Image from "next/image";
import styles from "../../styles/Page.module.scss";
import Link from "next/link";

export default function Writing() {
    return (
        <div>
            <div className={styles.tableOfContents}>/ About me</div>
            <div className={styles.bio}>
                <div className={styles.bioText}>
                        Madeleine Becker is a freelance artist based between Tokyo and San Francisco, CA.
                        <div>Email for inquiries: mgobecker123@gmail.com</div>
                </div>
            </div>
            <div className={styles.bioImage}>
                <Image src="/about-me/me.jpg" width={200} height={500} alt={""} draggable={false}/>
            </div>
        </div>
    )
}