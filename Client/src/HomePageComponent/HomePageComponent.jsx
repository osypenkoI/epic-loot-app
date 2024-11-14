
import React from 'react';

import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import PopularProductComponent from '../PopularProductComponenet/PopularProductComponent';
import styles from './HomePageComponent.module.css';
import DiscountProductComponent from '../DiscountProductComponent/DiscountProductComponent';
import RecommendationProductComponent from '../RecommendationProductComponent/RecommendationProductComponent';


const HomePageComponent = () => {
  return (
   
            <div className={styles.div}>
                <div className={styles.inner}>
                    <div className={styles.frameParent}>
                        <img className={styles.frameChild} alt="" src="Frame 3946.svg" />
                           <SideBarComponent/>
                    </div>
                </div>
                <div className={styles.frameContainer}>
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
                    </div>
                    <div className={styles.frameParent1}>
                        <img className={styles.frameItem} alt="" src="image 114.png" />
                        <div className={styles.frameParent2}>
                            <PopularProductComponent/>
                            <DiscountProductComponent/>
                            <RecommendationProductComponent/>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.child}>
                        <FooterComponent/>
                </div>
            </div>
    
  );
};

export default HomePageComponent;
