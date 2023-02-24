import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/popupWomen.module.css";

const Head = ({ color, title }) => {
    return <li className={styles.item} style={{ color, fontWeight: "bold", paddingTop: "20px" }}>{title}</li>;
};

const Popupwomen = ({ isVisible }) => {



    const [mouseOver, setMouseOver] = useState(false);

    return (
        <Box>
            <div className={(isVisible || mouseOver) ? styles.outerContainer : styles.displayNone}>
                <div onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} className={(isVisible || mouseOver) ? styles.innerContainer : styles.displayNone}>
                    <ul className={styles.list}>

                        <Head color="pink" title="Indian & Fusion Wear" />
                        <li className={styles.item}>Kurtas & Suits</li>
                        <li className={styles.item}>Kurtis, Tunics & Tops </li>
                        <li className={styles.item}>Ethnic Wear</li>
                        <li className={styles.item}>Sweatshirts</li>
                        <li className={styles.item}>Sweaters</li>
                        <li className={styles.item}>Jacktes</li>
                        <li className={styles.item}>Leggings, Salwars & Churidars</li>
                        <li className={styles.item}>Suits</li>
                        <li className={styles.item}>Skirts & Palazzos</li>


                        <Head color="pink" title="Bottomware" />
                        <li className={styles.item}>Jeans</li>
                        <li className={styles.item}>Casual Trousers</li>
                        <li className={styles.item}>Formal Trousers</li>
                    </ul>
                    <ul className={styles.list}>

                        <Head color="pink" title="Western Wear" />
                        <li className={styles.item}>Dresses</li>
                        <li className={styles.item}>Tops</li>
                        <li className={styles.item}>Tshirts</li>
                        <li className={styles.item}>Shorts & Skirts</li>
                        <li className={styles.item}>Trousers & Capris</li>


                        <Head color="pink" title="Innerwear & Sleeper" />
                        <li className={styles.item}>Briefs & Trunks</li>
                        <li className={styles.item}>Boxers</li>
                        <li className={styles.item}>Vests</li>
                        <li className={styles.item}>Sleepwear</li>
                        <li className={styles.item}>Sleeperwear & Loungerwear</li>
                        <Head color="pink" title="Plus Size" />

                    </ul>
                    <ul className={styles.list}>
                        <Head color="pink" title="Topware" />
                        <li className={styles.item}>T-Shirts</li>
                        <li className={styles.item}>Casual Shirts </li>
                        <li className={styles.item}>Formal Shirts</li>
                        <li className={styles.item}>Sweatshirts</li>
                        <li className={styles.item}>Sweaters</li>
                        <li className={styles.item}>Jacktes</li>
                        <li className={styles.item}>Blazers & Coats</li>
                        <li className={styles.item}>Suits</li>
                        <li className={styles.item}>Rain Jackets</li>
                    </ul>
                    <ul className={styles.list}>
                        <Head color="pink" title="Footware" />
                        <li className={styles.item}>Sports Shoes</li>
                        <li className={styles.item}>Casual Shoes</li>
                        <li className={styles.item}>Formal Shoes</li>
                        <li className={styles.item}>Sneakers</li>
                        <li className={styles.item}>Sandles</li>
                        <li className={styles.item}>Jacktes</li>
                        <Head color="pink" title="Personal Care & Grooming" />
                        <Head color="pink" title="Sunglasses & Frames" />
                        <Head color="pink" title="Watches  " />
                    </ul>
                    <ul className={styles.list}>
                        <Head color="pink" title="Fashion Accessorites" />
                        <li className={styles.item}>Wallets</li>
                        <li className={styles.item}>Belts</li>
                        <li className={styles.item}>Trimmers</li>
                        <li className={styles.item}>Deodorants</li>
                        <li className={styles.item}>Formal Shirts</li>
                        <li className={styles.item}>Sweatshirts</li>
                        <li className={styles.item}>Sweaters</li>
                        <li className={styles.item}>Jacktes</li>
                        <Head color="pink" title="Basg & Bagpacks" />
                        <Head color="pink" title="Luggages & Trolleys" />
                    </ul>

                </div>
            </div>
        </Box>
    );
};

export default Popupwomen;