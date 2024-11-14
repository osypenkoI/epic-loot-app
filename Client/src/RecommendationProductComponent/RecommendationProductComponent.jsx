import { FunctionComponent } from 'react';
import styles from './RecommendationProductComponent.module.css';


const RecommendationProductComponent = () => {
  	return (
    		<div className={styles.parent}>
      			<div className={styles.div}>Ігри для вас</div>
      			<div className={styles.frameParent}>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image111Icon} alt="" src="image 111.png" />
            						</div>
            						<div className={styles.theWitcher3WildHuntParent}>
              							<div className={styles.diabloIv}>The Witcher 3: Wild Hunt</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>729₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.frameChild} alt="" src="Frame 1831.png" />
            						<div className={styles.theWitcher3WildHuntParent}>
              							<div className={styles.diabloIv}>Diablo® IV</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>1 696₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.frameChild} alt="" src="Frame 1831.png" />
            						<div className={styles.theWitcher3WildHuntParent}>
              							<div className={styles.diabloIv}>ELDEN RING</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>1 648₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.imageParent}>
            						<img className={styles.imageIcon} alt="" src="image.png" />
            						<img className={styles.image112Icon} alt="" src="image 112.png" />
          					</div>
          					<div className={styles.theWitcher3WildHuntParent}>
            						<div className={styles.diabloIv}>God of War Ragnarök</div>
            						<div className={styles.group}>
              							<div className={styles.div1}>1 699₴</div>
              							<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.buttondefaulttextButtonlar}>
        				<div className={styles.diabloIv}>Показати більше</div>
        				<div className={styles.vectorWrapper}>
          					<img className={styles.vectorIcon} alt="" src="Vector.svg" />
        				</div>
      			</div>
    		</div>);
};

export default RecommendationProductComponent;
