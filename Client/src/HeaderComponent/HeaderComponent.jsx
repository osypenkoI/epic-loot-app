import React from 'react';
import styles from './HeaderComponent.module.css';


const HeaderComponent = () => {
  	return (
    		<div className={styles.instanceParent}>
      			<div className={styles.instanceGroup}>
        				<div className={styles.linearSearchMagniferWrapper}>
          					<img className={styles.linearSearchMagnifer} alt="" src="Magnifer.svg" />
        				</div>
        				<div className={styles.cityAirportAddress}>Пошук</div>
      			</div>
      			<div className={styles.linearLikeHeartParent}>
        				<img className={styles.linearLikeHeart} alt="" src="Heart.svg" />
        				<img className={styles.linearLikeHeart} alt="" src="Bell.svg" />
        				<img className={styles.linearUsersUser} alt="" src="User.svg" />
      			</div>
    		</div>);
};

export default HeaderComponent;
