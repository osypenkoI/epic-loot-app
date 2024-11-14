import { FunctionComponent } from 'react';
import styles from './SideBarComponent.module.css';


const SideBarComponent = () => {
  	return (
    		<div className={styles.frameParent}>
      			<div className={styles.parent}>
        				<div className={styles.div}>Пригоди</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Екшн-пригоди</div>
          					<div className={styles.mmorpg}>Фантастичні світи</div>
          					<div className={styles.mmorpg}>Виживання</div>
          					<div className={styles.mmorpg}>Квести та головоломки</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Рольові ігри (RPG)</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Фентезі та магія</div>
          					<div className={styles.mmorpg}>Наукова фантастика</div>
          					<div className={styles.mmorpg}>Постапокаліптичні світи</div>
          					<div className={styles.mmorpg}>Класичні RPG</div>
          					<div className={styles.mmorpg}>MMORPG</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Стратегії</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Покрокові стратегії</div>
          					<div className={styles.mmorpg}>Реального часу (RTS)</div>
          					<div className={styles.mmorpg}>
            						<p className={styles.p}>Економічні та симулятори</p>
            						<p className={styles.p}>будівництва</p>
          					</div>
          					<div className={styles.mmorpg}>Тактичні бойові ігри</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Шутери</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Від першої особи (FPS)</div>
          					<div className={styles.mmorpg}>Від третьої особи (TPS)</div>
          					<div className={styles.mmorpg}>Тактичні шутери</div>
          					<div className={styles.mmorpg}>Кооперативні шутери</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Симулятори</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Симулятори життя</div>
          					<div className={styles.mmorpg}>Автомобільні симулятори</div>
          					<div className={styles.mmorpg}>Спортивні симулятори</div>
          					<div className={styles.mmorpg}>Політні симулятори</div>
          					<div className={styles.mmorpg}>Симулятори космосу</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>
          					<p className={styles.p}>Головоломки</p>
          					<p className={styles.p}>та логічні ігри</p>
        				</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Класичні головоломки</div>
          					<div className={styles.mmorpg}>Ігри на збір комбінацій</div>
          					<div className={styles.mmorpg}>Математичні головоломки</div>
          					<div className={styles.mmorpg}>Ігри на реакцію</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Хоррор</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Виживання в стилі хоррор</div>
          					<div className={styles.mmorpg}>Психологічні хоррори</div>
          					<div className={styles.mmorpg}>Хоррори з елементами квесту</div>
          					<div className={styles.mmorpg}>Зомбі-апокаліпсис</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Аркади</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Класичні аркади</div>
          					<div className={styles.mmorpg}>Ритмічні ігри</div>
          					<div className={styles.mmorpg}>Платформери</div>
          					<div className={styles.mmorpg}>Ігри на реакцію та швидкість</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>Інді-ігри</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Артхаусні проєкти</div>
          					<div className={styles.mmorpg}>Незалежні RPG</div>
          					<div className={styles.mmorpg}>Містичні історії</div>
          					<div className={styles.mmorpg}>Ігри з інноваційною механікою</div>
        				</div>
      			</div>
      			<div className={styles.parent}>
        				<div className={styles.div}>VR/AR-ігри</div>
        				<div className={styles.group}>
          					<div className={styles.mmorpg}>Пригоди у VR</div>
          					<div className={styles.mmorpg}>Шутери для VR</div>
          					<div className={styles.mmorpg}>Спортивні симулятори у VR</div>
          					<div className={styles.mmorpg}>
            						<p className={styles.p}>Психологічні та хоррор ігри</p>
            						<p className={styles.p}>для VR</p>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default SideBarComponent;
