import Image from "next/image";
import styles from "../../styles/Page.module.scss";
import Link from "next/link";

export default function Filmography() {
    return (
        <div>
            <div className={styles.tableOfContents}>/ Videography</div>
            <div className={styles.writingLinks}>
                <div>
                    <Link className={styles.link} href="https://vimeo.com/1112659131">To Harvest,</Link>
                    March 2025.
                    <Image src="/videos/to-harvest.png" height={500} width={500} />
                </div>
                <div>
                    <Link className={styles.link} href="https://vimeo.com/931935668">Water Bodies,</Link>
                    August 2022.
                    <Image src="/videos/water-bodies.png" height={500} width={500} />
                </div>
                <div>
                    <Link className={styles.link} href="https://vimeo.com/843754617">Annie & Sang Jun,</Link>
                    May 2022 (please email for password).
                    <Image src="/videos/annie-sang-jun.png" height={500} width={500} />
                </div>
                <div>
                    <Link className={styles.link} href="https://vimeo.com/931837921">Desire for Motion,</Link> 
                    September 2019.
                    <Image src="/videos/desire-for-motion.png" height={500} width={500} />
                </div>
            </div>
        </div>
    )
}