import Image from "next/image";
import styles from "../../styles/Page.module.scss";

export default function Photography() {
    return (
        <div>
        <div className={styles.tableOfContents}>/ Photography</div>
        <div className={styles.photos}>
            <div className={styles.photoSet}>
                <div className={`${styles.imageBorder}`}>
                    <Image src="/south-africa/1.png" width={500} height={100} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/south-africa/2.png" width={500} height={500} alt={""}/>
                </div>
            </div>

            <div className={styles.photoSet}>
                <div className={styles.imageBorder}>
                    <Image src="/south-africa/3.png" width={500} height={500} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/south-africa/4.png" width={500} height={500} alt={""}/>
                </div>
            </div>

            <div className={styles.photoSet}>
                <div className={styles.imageBorder}>
                    <Image src="/south-africa/5.png" width={500} height={500} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/south-africa/6.png" width={500} height={500} alt={""}/>
                </div>
            </div>

            <div className={styles.photoSet}>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/3.jpg" width={500} height={500} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/4.jpg" width={500} height={500} alt={""}/>
                </div>
            </div>

            <div className={styles.photoSet}>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/5.jpg" width={500} height={500} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/6.jpg" width={500} height={500} alt={""}/>
                </div>
            </div>

            <div className={styles.photoSet}>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/7.jpg" width={500} height={500} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/8.jpg" width={500} height={500} alt={""}/>
                </div>
            </div>


            <div className={styles.photoSet}>
                <div className={`${styles.imageBorder}`}>
                    <Image src="/mexico/9.jpg" width={500} height={100} alt={""}/>
                </div>
                <div className={styles.imageBorder}>
                    <Image src="/mexico/2.jpg" width={500} height={500} alt={""}/>
                </div>
            </div>

        </div>
        </div>
    )
}