import Image from "next/image";
import styles from "../../styles/Page.module.scss";

export default function Photography() {
    return (
        <div>
        <div className={styles.tableOfContents}>/ Photography</div>
        <div className={styles.photos}>
            <div className={styles.photoSet}>
                <div>
                    <Image src="/south-africa/1.png" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/south-africa/2.png" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/south-africa/7.png" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/south-africa/6.png" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/mexico/1.jpg" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/mexico/2.jpg" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/mexico/3.jpg" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/mexico/4.jpg" width={800} height={500} alt={""} draggable={false}/>
                </div>
                <div>
                    <Image src="/us/1.jpg" width={800} height={500} alt={""} draggable={false}/>
                </div>
            </div>
        </div>
        </div>
    )
}