import styles from "../../styles/Page.module.scss";
import Link from "next/link";

export default function Writing() {
    return (
        <div>
            <div className={styles.tableOfContents}>/ Writing</div>
            <div className={styles.writingLinks}>
                <div>
                    <Link className={styles.link} href="https://monrowemagazine.com/2020/12/09/ty-hodges/">“Ty Hodges: In Truth,”</Link>
                    <span className={styles.italicize}>Monrowe Magazine, </span>
                    December 2020.
                </div>
                <div>
                    <Link className={styles.link} href="https://fashionxfilm.com/birth-of-an-empire-decoding-apocalypse-now/">“Birth of an Empire: Decoding Apocalypse Now,”</Link> 
                    <span className={styles.italicize}>Fashion X Film, </span>August	2020.
                </div>
            </div>
        </div>
    )
}