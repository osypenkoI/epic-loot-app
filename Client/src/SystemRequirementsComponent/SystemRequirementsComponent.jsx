import { FunctionComponent } from 'react';
import styles from './SystemRequirementsComponent.module.css';

// Моковые данные для тестирования
const mockRequirementsData = {
  minimum: {
    os: 'Windows 10 64-bit',
    processor: 'Intel i5-4670k or AMD Ryzen 3 1200',
    ram: '8 GB',
    gpu: 'NVIDIA GTX 1060 (6GB) or AMD RX 5500 XT (8GB) or Intel Arc A750',
    directX: 'версія 12',
    storage: '190 GB',
    additional: ['Windows version 2004 2020-05-27 19041.', '6GB GPU is required'],
  },
  recommended: {
    os: 'Windows 10 64-bit',
    processor: 'Intel i5-4670k or AMD Ryzen 3 1200',
    ram: '16 GB',
    gpu: 'NVIDIA RTX 2060 Super or AMD RX 5700 or Intel Arc A770',
    directX: 'версія 12',
    storage: '190 GB',
    additional: ['Windows version 2004 2020-05-27 19041.', '6GB GPU is required'],
  },
};

const SystemRequirementsComponent = () => {
  const renderRequirements = (title, data) => (
    <div className={styles.group}>
      <div className={styles.div1}>{title}:</div>
      <div className={styles.frameGroup}>
        <div className={styles.container}>
          <div className={styles.directx}>ОС:</div>
          <div className={styles.windows1064Bit}>{data.os}</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.directx}>Процесор:</div>
          <div className={styles.windows1064Bit}>{data.processor}</div>
        </div>
        <div className={styles.parent1}>
          <div className={styles.directx}>Оперативна пам’ять:</div>
          <div className={styles.windows1064Bit}>{data.ram}</div>
        </div>
        <div className={styles.parent2}>
          <div className={styles.directx}>Відеокарта:</div>
          <div className={styles.windows1064Bit}>
            {data.gpu.split(', ').map((line, index) => (
              <p key={index} className={styles.orIntelArc}>{line}</p>
            ))}
          </div>
        </div>
        <div className={styles.directxParent}>
          <div className={styles.directx}>DirectX:</div>
          <div className={styles.windows1064Bit}>{data.directX}</div>
        </div>
        <div className={styles.parent3}>
          <div className={styles.directx}>Місце на диску:</div>
          <div className={styles.windows1064Bit}>{data.storage}</div>
        </div>
        <div className={styles.parent4}>
          <div className={styles.directx}>Додатково:</div>
          <div className={styles.windows1064Bit}>
            {data.additional.map((line, index) => (
              <p key={index} className={styles.orIntelArc}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.parent}>
      <div className={styles.div}>Системні вимоги</div>
      <div className={styles.frameParent}>
        {renderRequirements('Мінімальні', mockRequirementsData.minimum)}
        {renderRequirements('Рекомендовані', mockRequirementsData.recommended)}
      </div>
    </div>
  );
};

export default SystemRequirementsComponent;
