import styles from "../../styles/Page.module.scss";
import Link from "next/link";

export default function Writing() {
    return (
        <div>
            <div className={styles.tableOfContents}>/ About me</div>
            <div className={styles.text}>
                Madeleine Becker is a freelance artist based in Brooklyn, NY.
                <div>Email for inquiries: mgobecker123@gmail.com</div>
            </div>
        </div>
    )
}