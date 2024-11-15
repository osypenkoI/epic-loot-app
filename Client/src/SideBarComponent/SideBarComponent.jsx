import { useEffect, useState } from 'react';
import styles from './SideBarComponent.module.css';

const SideBarComponent = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		// JSON заглушка для імітації запиту з сервера
		const fetchData = async () => {
			const data = [
				{
					category: "Пригоди",
					subcategories: ["Екшн-пригоди", "Фантастичні світи", "Виживання", "Квести та головоломки"]
				},
				{
					category: "Рольові ігри (RPG)",
					subcategories: ["Фентезі та магія", "Наукова фантастика", "Постапокаліптичні світи", "Класичні RPG", "MMORPG"]
				},
				{
					category: "Стратегії",
					subcategories: ["Покрокові стратегії", "Реального часу (RTS)", "Економічні та симулятори будівництва", "Тактичні бойові ігри"]
				},
				{
					category: "Шутери",
					subcategories: ["Від першої особи (FPS)", "Від третьої особи (TPS)", "Тактичні шутери", "Кооперативні шутери"]
				},
				{
					category: "Симулятори",
					subcategories: ["Симулятори життя", "Автомобільні симулятори", "Спортивні симулятори", "Політні симулятори", "Симулятори космосу"]
				},
				{
					category: "Головоломки та логічні ігри",
					subcategories: ["Класичні головоломки", "Ігри на збір комбінацій", "Математичні головоломки", "Ігри на реакцію"]
				},
				{
					category: "Хоррор",
					subcategories: ["Виживання в стилі хоррор", "Психологічні хоррори", "Хоррори з елементами квесту", "Зомбі-апокаліпсис"]
				},
				{
					category: "Аркади",
					subcategories: ["Класичні аркади", "Ритмічні ігри", "Платформери", "Ігри на реакцію та швидкість"]
				},
				{
					category: "Інді-ігри",
					subcategories: ["Артхаусні проєкти", "Незалежні RPG", "Містичні історії", "Ігри з інноваційною механікою"]
				},
				{
					category: "VR/AR-ігри",
					subcategories: ["Пригоди у VR", "Шутери для VR", "Спортивні симулятори у VR", "Психологічні та хоррор ігри для VR"]
				}
			];
			setCategories(data);
		};

		fetchData();
	}, []);

	return (
		<div className={styles.frameParent}>
			{categories.map((categoryItem, index) => (
				<div key={index} className={styles.parent}>
					<div className={styles.div}>{categoryItem.category}</div>
					<div className={styles.group}>
						{categoryItem.subcategories.map((subcategory, subIndex) => (
							<div key={subIndex} className={styles.mmorpg}>{subcategory}</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SideBarComponent;