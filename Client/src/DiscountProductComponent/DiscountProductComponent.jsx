import { useState, useEffect } from 'react';
import styles from './DiscountProductComponent.module.css';

const DiscountProductComponent = () => {
    const [discountedGames, setDiscountedGames] = useState([]);

    useEffect(() => {
        // Моковые данные со скидками
        const mockDiscountData = [
            {
                id: 1,
                name: "Hogwarts Legacy",
                originalPrice: "1 599₴",
                discountedPrice: "479₴",
                imageUrl: "HogwartsLegacy.png"
            },
            {
                id: 2,
                name: "Red Dead Redemption 2",
                originalPrice: "1 499₴",
                discountedPrice: "479₴",
                imageUrl: "RDR2.png"
            },
            {
                id: 3,
                name: "The Last of Us Part I",
                originalPrice: "1 699₴",
                discountedPrice: "1 000₴",
                imageUrl: "TLOU1.png"
            },
            {
                id: 4,
                name: "Stray",
                originalPrice: "599₴",
                discountedPrice: "359₴",
                imageUrl: "Stray.png"
            }
        ];

        // Имитация задержки загрузки данных
        setTimeout(() => {
            setDiscountedGames(mockDiscountData);
        }, 1000); // Задержка для демонстрации

    }, []);

    return (
        <div className={styles.parent}>
            <div className={styles.div}>Знижки</div>
            <div className={styles.frameParent}>
                {discountedGames.map(game => (
                    <div key={game.id} className={styles.frameWrapper}>
                        <div className={styles.frameGroup}>
                            <img className={styles.frameChild} alt="" src={game.imageUrl} />
                            <div className={styles.hogwartsLegacyParent}>
                                <div className={styles.hogwartsLegacy}>{game.name}</div>
                                <div className={styles.frameContainer}>
                                    <div className={styles.groupParent}>
                                        <div className={styles.vectorParent}>
                                            <img className={styles.groupChild} alt="" src="Vector 1.svg" />
                                            <div className={styles.div1}>{game.originalPrice}</div>
                                        </div>
                                        <div className={styles.div2}>{game.discountedPrice}</div>
                                    </div>
                                    <img className={styles.linearShoppingEcommerce} alt="" src="Cart Large Minimalistic.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttondefaulttextButtonlar}>
                <div className={styles.hogwartsLegacy}>Показати більше</div>
                <div className={styles.vectorWrapper}>
                    <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
                </div>
            </div>
        </div>
    );
};

export default DiscountProductComponent;
