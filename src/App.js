import styles from './App.module.scss';
import BarItem from './BarItem';

function App() {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.itBar}>
          <BarItem />
        </div>
          <div className={styles.bar}>
            <div className={styles.btBar}></div>
          </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.thump}>
        </div>
      </div>
    </div>
  );
}

export default App;
