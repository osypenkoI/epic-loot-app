import { FunctionComponent } from 'react';
import styles from './ProductPageComponent.module.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent'
import SystemRequirementsComponent from '../SystemRequirementsComponent/SystemRequirementsComponent';


const ProductPageComponent = () => {
  	return (
    		<div className={styles.desktop1}>
      			 <HeaderComponent/>
      			<div className={styles.frameGroup}>
        				<div className={styles.frameContainer}>
          					<img className={styles.frameChild} alt="" src="HogwartsLegacy.png" />
          					<div className={styles.frameDiv}>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image120Icon} alt="" src="image 120.png" />
              							<img className={styles.image123Icon} alt="" src="image.png" />
            						</div>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image120Icon} alt="" src="image 120.png" />
              							<img className={styles.image123Icon} alt="" src="image 123.png" />
              							<img className={styles.image124Icon} alt="" src="image 124.png" />
            						</div>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image120Icon} alt="" src="image 120.png" />
              							<img className={styles.image123Icon} alt="" src="image 123.png" />
              							<img className={styles.image124Icon1} alt="" src="image 124.png" />
              							<img className={styles.imageIcon4} alt="" src="image.png" />
            						</div>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image120Icon} alt="" src="image 120.png" />
              							<img className={styles.image123Icon} alt="" src="image 123.png" />
              							<img className={styles.image125Icon} alt="" src="image 125.png" />
              							<img className={styles.image127Icon} alt="" src="image 127.png" />
            						</div>
            						<div className={styles.imageParent}>
              							<img className={styles.imageIcon} alt="" src="image.png" />
              							<img className={styles.image120Icon} alt="" src="image 120.png" />
              							<img className={styles.image123Icon} alt="" src="image 123.png" />
              							<img className={styles.image126Icon} alt="" src="image 126.png" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent1}>
          					<div className={styles.frameParent2}>
            						<div className={styles.frameDiv}>
              							<div className={styles.godOfWar}>God of War: Ragnarok</div>
              							<img className={styles.linearLikeHeart} alt="" src="Heart .svg" />
            						</div>
            						<div className={styles.santaMonicaParent}>
              							<div className={styles.santaMonica}>Студія Santa Monica підготувала продовження знаменитої гри God of War (2018 рік). Фімбулвінтер вже близько. Кратос і Атрей повинні подорожувати усіма дев'ятьма королівства і знайти відповіді, поки війська Асґарду готуються до передбачуваної битви, яка покладе край світобудові.</div>
                								<div className={styles.santaMonica}>
                  									<p className={styles.p}>Їм належить побувати в міфічних краях</p>
                  									<p className={styles.p}>і зійтись у бою з безстрашними ворогами від скандинавських богів і чудовиськ. Рагнарок ще ніколи не був такий близький. Доля поставить Кратоса та Атрея перед вибором між власною безпекою та безпекою всіх королівств.</p>
                								</div>
              							</div>
              							<div className={styles.frameParent3}>
                								<div className={styles.wrapper}>
                  									<div className={styles.div1}>#Екшен</div>
                								</div>
                								<div className={styles.wrapper}>
                  									<div className={styles.div1}>#Пригоди</div>
                								</div>
                								<div className={styles.wrapper}>
                  									<div className={styles.div1}>#Пригодницький екшен</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent4}>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Для одного гравця</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Досягнення Steam</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Steam Cloud</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Підримка HDR</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>{`Сімейний доступ `}</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Контролери Xbox</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>Контролери PlayStation</div>
              							</div>
              							<div className={styles.linearEssentionalUiCheParent}>
                								<img className={styles.linearEssentionalUiChe} alt="" src="Check Square.svg" />
                								<div className={styles.steam}>{`API системи вводу Steam `}</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent5}>
            						<div className={styles.godOfWarRagnarokGroup}>
              							<div className={styles.godOfWar}>God of War: Ragnarok</div>
              							<div className={styles.parent}>
                								<div className={styles.godOfWar}>1 699₴</div>
                								<div className={styles.wrapper1}>
                  									<div className={styles.div1}>Купити</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent6}>
              							<div className={styles.godOfWarRagnarokContainer}>
                								<div className={styles.godOfWar}>
                  									<p className={styles.p}>God of War: Ragnarok - цифрове розширене</p>
                  									<p className={styles.p}>видання</p>
                								</div>
                								<div className={styles.groupParent}>
                  									<div className={styles.imageParent3}>
                    										<img className={styles.imageIcon} alt="" src="image.png" />
                    										<img className={styles.image120Icon} alt="" src="image 120.png" />
                    										<img className={styles.image123Icon} alt="" src="image.png" />
                    										<img className={styles.imageIcon9} alt="" src="image.png" />
                    										<img className={styles.image135Icon} alt="" src="image 135.png" />
                  									</div>
                  									<div className={styles.imageParent3}>
                    										<img className={styles.imageIcon} alt="" src="image.png" />
                    										<img className={styles.image120Icon} alt="" src="image 120.png" />
                    										<img className={styles.image123Icon} alt="" src="image.png" />
                    										<img className={styles.imageIcon9} alt="" src="image.png" />
                    										<img className={styles.imageIcon13} alt="" src="image.png" />
                  									</div>
                  									<div className={styles.imageParent3}>
                    										<img className={styles.imageIcon} alt="" src="image.png" />
                    										<img className={styles.image120Icon} alt="" src="image 120.png" />
                    										<img className={styles.image123Icon} alt="" src="image.png" />
                    										<img className={styles.imageIcon9} alt="" src="image.png" />
                    										<img className={styles.image132Icon} alt="" src="image 132.png" />
                  									</div>
                  									<div className={styles.imageParent3}>
                    										<img className={styles.imageIcon} alt="" src="image.png" />
                    										<img className={styles.image120Icon} alt="" src="image 120.png" />
                    										<img className={styles.image123Icon} alt="" src="image.png" />
                    										<img className={styles.imageIcon9} alt="" src="image.png" />
                    										<img className={styles.image134Icon} alt="" src="image 134.png" />
                  									</div>
                								</div>
              							</div>
              							<div className={styles.parent}>
                								<div className={styles.godOfWar}>1 999₴</div>
                								<div className={styles.wrapper1}>
                  									<div className={styles.div1}>Купити</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.parent1}>
            						
            						<SystemRequirementsComponent/>
          					</div>
          					<div className={styles.frameParent11}>
            						<div className={styles.frameDiv}>
              							<div className={styles.div27}>Відгуки</div>
              							<div className={styles.wrapper3}>
                								<div className={styles.div1}>Написати відгук</div>
              							</div>
            						</div>
            						<div className={styles.frameParent12}>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameParent13}>
                  									<div className={styles.frameWrapper1}>
                    										<div className={styles.frameParent14}>
                      											<div className={styles.frameParent15}>
                        												<div className={styles.groupParent}>
                          													<img className={styles.imageIcon20} alt="" src="image.png" />
                          													<div className={styles.cityAirportAddress}>ShadowStrike</div>
                        												</div>
                        												<img className={styles.boldLikeLike} alt="" src="Bold / Like / Like.svg" />
                      											</div>
                      											<div className={styles.div29}>4 листопада 2024</div>
                    										</div>
                  									</div>
                  									<div className={styles.parent17}>
                    										<div className={styles.div30}>{`Гра просто неймовірна! Вона має захопливий сюжет, чудову графіку та ретельно продуману механіку. Кожна деталь виглядає настільки реалістично, що здається, наче ти сам опинився у цьому світі. Персонажі дуже харизматичні, а кожен рівень дарує нові емоції та виклики. `}</div>
                    										<div className={styles.div30}>
                      											<p className={styles.p}>Окремо хочеться відзначити звуковий супровід — музика та ефекти додають грі особливого шарму. Раджу всім, хто любить занурюватися</p>
                      											<p className={styles.p}>в якісні та захопливі ігри.</p>
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameParent13}>
                  									<div className={styles.frameWrapper1}>
                    										<div className={styles.frameParent14}>
                      											<div className={styles.frameParent15}>
                        												<div className={styles.groupParent}>
                          													<img className={styles.imageIcon20} alt="" src="image.png" />
                          													<div className={styles.cityAirportAddress}>NovaHunter</div>
                        												</div>
                        												<img className={styles.boldLikeLike} alt="" src="Bold / Like / Like.svg" />
                      											</div>
                      											<div className={styles.div29}>14 жовтня 2024</div>
                    										</div>
                  									</div>
                  									<div className={styles.parent17}>
                    										<div className={styles.div33}>{`Гра просто чудова! Вона захоплює з перших хвилин завдяки своїй атмосфері та продуманим деталям.  Графіка і музика просто вражають – все створено для того, щоб повністю занурити гравця у світ гри. `}</div>
                    										<div className={styles.div30}>Важко відірватися, постійно хочеться проходити ще і ще. Однозначно рекомендую!</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper}>
                								<div className={styles.frameParent13}>
                  									<div className={styles.frameWrapper1}>
                    										<div className={styles.frameParent14}>
                      											<div className={styles.frameParent15}>
                        												<div className={styles.groupParent}>
                          													<img className={styles.imageIcon20} alt="" src="image.png" />
                          													<div className={styles.cityAirportAddress}>EmberKnight</div>
                        												</div>
                        												<img className={styles.boldLikeLike} alt="" src="Bold / Like / Dislike.svg" />
                      											</div>
                      											<div className={styles.div29}>30 вересня 2024</div>
                    										</div>
                  									</div>
                  									<div className={styles.div36}>Гра має цікавий потенціал, але реалізація підвела. Управління незручне і часто викликає роздратування. Графіка виглядає застарілою, а звукові ефекти часом навіть дратують. Дуже сподіваюся на майбутні оновлення, які виправлять ці недоліки, адже ідея гри хороша.</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.div37}>Заватажити ще</div>
          					</div>
          					<div className={styles.parent19}>
            						<div className={styles.div38}>Схожі ігри</div>
            						<div className={styles.parent13}>
              							<div className={styles.frameWrapper6}>
                								<div className={styles.parent2}>
                  									<div className={styles.image109Parent}>
                    										<img className={styles.imageIcon23} alt="" src="image.png" />
                    										<img className={styles.image111Icon} alt="" src="image 111.png" />
                    										<img className={styles.imageIcon24} alt="" src="image.png" />
                    										<img className={styles.image138Icon} alt="" src="image 138.png" />
                  									</div>
                  									<div className={styles.blackMythWukongParent}>
                    										<div className={styles.cityAirportAddress}>Black Myth: Wukong</div>
                    										<div className={styles.parent20}>
                      											<div className={styles.div39}>1 699₴</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper6}>
                								<div className={styles.parent2}>
                  									<div className={styles.image109Parent}>
                    										<img className={styles.imageIcon25} alt="" src="image.png" />
                    										<img className={styles.image139Icon} alt="" src="image 139.png" />
                    										<img className={styles.image140Icon} alt="" src="image 140.png" />
                  									</div>
                  									<div className={styles.blackMythWukongParent}>
                    										<div className={styles.cityAirportAddress}>Space Marine 2</div>
                    										<div className={styles.parent20}>
                      											<div className={styles.div39}>1 299₴</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper6}>
                								<div className={styles.parent2}>
                  									<div className={styles.image109Parent}>
                    										<img className={styles.imageIcon26} alt="" src="image.png" />
                    										<img className={styles.image141Icon} alt="" src="image 141.png" />
                  									</div>
                  									<div className={styles.blackMythWukongParent}>
                    										<div className={styles.cityAirportAddress}>Hogwarts Legacy</div>
                    										<div className={styles.parent20}>
                      											<div className={styles.div39}>1 599₴</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper6}>
                								<div className={styles.parent2}>
                  									<div className={styles.image109Parent}>
                    										<img className={styles.imageIcon23} alt="" src="image.png" />
                    										<img className={styles.image111Icon} alt="" src="image 111.png" />
                  									</div>
                  									<div className={styles.blackMythWukongParent}>
                    										<div className={styles.cityAirportAddress}>The Witcher 3: Wild Hunt</div>
                    										<div className={styles.parent20}>
                      											<div className={styles.div39}>729₴</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper10}>
                								<div className={styles.frameParent13}>
                  									<div className={styles.image109Parent}>
                    										<img className={styles.image109Icon} alt="" src="image 109.png" />
                    										<img className={styles.imageIcon28} alt="" src="image.png" />
                  									</div>
                  									<div className={styles.theLastOfUsPartIParent}>
                    										<div className={styles.theLastOf}>The Last of Us Part I</div>
                    										<div className={styles.frameParent28}>
                      											<div className={styles.frameWrapper11}>
                        												<div className={styles.groupParent}>
                          													<div className={styles.vectorParent}>
                            														<img className={styles.groupChild} alt="" src="Vector 1.svg" />
                            														<div className={styles.div43}>1 699₴</div>
                          													</div>
                          													<div className={styles.div44}>1000₴</div>
                        												</div>
                      											</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.frameWrapper6}>
                								<div className={styles.parent2}>
                  									<img className={styles.frameItem} alt="" src="Frame 1831.png" />
                  									<div className={styles.blackMythWukongParent}>
                    										<div className={styles.cityAirportAddress}>ELDEN RING</div>
                    										<div className={styles.parent20}>
                      											<div className={styles.div39}>1 648₴</div>
                      											<img className={styles.linearUsersUser} alt="" src="Linear / Shopping, Ecommerce / Cart Large Minimalistic.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.buttondefaulttextButtonlar}>
              							<div className={styles.cityAirportAddress}>Показати більше</div>
              							<div className={styles.vectorWrapper}>
                								<img className={styles.vectorIcon} alt="" src="Vector.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.desktop1Inner}>
          					
            						<FooterComponent/>

        				</div>
      			</div>);
      			};
      			
export default ProductPageComponent;
      			