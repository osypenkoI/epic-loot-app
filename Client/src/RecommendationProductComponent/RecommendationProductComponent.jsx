import { useEffect, useState } from 'react';
import styles from './RecommendationProductComponent.module.css';

// Моковые данные для тестирования компонента
const mockGameData = [
  {
    id: 1,
    title: 'The Witcher 3: Wild Hunt',
    price: '729₴',
    imageSrc: 'WildHunt.png',
  },
  {
    id: 2,
    title: 'Diablo® IV',
    price: '1 696₴',
    imageSrc: 'Diablo4.png',
  },
  {
    id: 3,
    title: 'ELDEN RING',
    price: '1 648₴',
    imageSrc: 'EldenRing.png',
  },
  {
    id: 4,
    title: 'God of War Ragnarök',
    price: '1 699₴',
    imageSrc: 'GodOfWarRagnarok.png',
  },
];

const RecommendationProductComponent = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Заглушка данных, чтобы проверить, как компонент работает с сервера
    setGames(mockGameData);
  }, []);

  return (
    <div className={styles.parent}>
      <div className={styles.div}>Ігри для вас</div>
      <div className={styles.frameParent}>
        {games.map((game) => (
          <div key={game.id} className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.imageParent}>
                <img className={styles.imageIcon} alt="" src={game.imageSrc} />
              </div>
              <div className={styles.theWitcher3WildHuntParent}>
                <div className={styles.diabloIv}>{game.title}</div>
                <div className={styles.group}>
                  <div className={styles.div1}>{game.price}</div>
                  <img
                    className={styles.linearShoppingEcommerce}
                    alt=""
                    src="Cart Large Minimalistic.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttondefaulttextButtonlar}>
        <div className={styles.diabloIv}>Показати більше</div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="Vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default RecommendationProductComponent;
