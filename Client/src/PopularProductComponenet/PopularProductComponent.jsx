import { FunctionComponent } from 'react';
import styles from './PopularProductComponent.module.css'


const PopularProductComponent = () => {
  	return (
    		<div className={styles.parent}>
      			<div className={styles.div}>Популярні ігри</div>
      			<div className={styles.frameParent}>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.frameChild} alt="" src="Frame 1831.png" />
            						<div className={styles.callOfDutyBlackOps6Parent}>
              							<div className={styles.callOfDuty}>Call of Duty®: Black Ops 6</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>2 999₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.frameChild} alt="" src="Frame 1831.png" />
            						<div className={styles.callOfDutyBlackOps6Parent}>
              							<div className={styles.callOfDuty}>HELLDIVERS™ 2</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>1 199₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.frameChild} alt="" src="Frame 1831.png" />
            						<div className={styles.callOfDutyBlackOps6Parent}>
              							<div className={styles.callOfDuty}>Cyberpunk 2077</div>
              							<div className={styles.group}>
                								<div className={styles.div1}>1 648₴</div>
                								<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameGroup}>
          					<img className={styles.frameChild} alt="" src="Frame 1831.png" />
          					<div className={styles.callOfDutyBlackOps6Parent}>
            						<div className={styles.callOfDuty}>Resident Evil 4</div>
            						<div className={styles.group}>
              							<div className={styles.div1}>1 699₴</div>
              							<img className={styles.linearShoppingEcommerce} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.buttondefaulttextButtonlar}>
        				<div className={styles.callOfDuty}>Показати більше</div>
        				<div className={styles.vectorWrapper}>
          					<img className={styles.vectorIcon} alt="" src="Vector.svg" />
        				</div>
      			</div>
    		</div>);
};

export default PopularProductComponent;
