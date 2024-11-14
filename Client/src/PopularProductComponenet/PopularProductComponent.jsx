import { useState, useEffect } from 'react';
import styles from './PopularProductComponent.module.css';

const PopularProductComponent = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Заглушка данных
        const mockData = [
            {
                id: 1,
                name: "Call of Duty®: Black Ops 6",
                price: "2 999₴",
                imageUrl: "CoDBO6.png"
            },
            {
                id: 2,
                name: "HELLDIVERS™ 2",
                price: "1 199₴",
                imageUrl: "helldivers2.png"
            },
            {
                id: 3,
                name: "Cyberpunk 2077",
                price: "1 648₴",
                imageUrl: "CyberPunk2077.png"
            },
            {
                id: 4,
                name: "Resident Evil 4",
                price: "1 699₴",
                imageUrl: "ResidentEvil.png"
            }
        ];

        // Имитация задержки для загрузки данных
        setTimeout(() => {
            setGames(mockData);
        }, 1000); // Задержка в 1 секунду для демонстрации

    }, []);

    return (
        <div className={styles.parent}>
            <div className={styles.div}>Популярні ігри</div>
            <div className={styles.frameParent}>
                {games.map(game => (
                    <div key={game.id} className={styles.frameWrapper}>
                        <div className={styles.frameGroup}>
                            <img className={styles.frameChild} alt="" src={game.imageUrl} />
                            <div className={styles.callOfDutyBlackOps6Parent}>
                                <div className={styles.callOfDuty}>{game.name}</div>
                                <div className={styles.group}>
                                    <div className={styles.div1}>{game.price}</div>
                                    <img className={styles.linearShoppingEcommerce} alt="" src="Cart Large Minimalistic.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttondefaulttextButtonlar}>
                <div className={styles.callOfDuty}>Показати більше</div>
                <div className={styles.vectorWrapper}>
                    <img className={styles.vectorIcon} alt="" src="Vector.svg" />
                </div>
            </div>
        </div>
    );
};

export default PopularProductComponent;
