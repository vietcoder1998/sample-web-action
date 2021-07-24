import styles from './BarItem.module.scss';
import dog from './dog.png'
import cln from 'classname'

function SimpleDoc ({cls}) {
    return <div className={styles.subDoc}>
        <div className={cln( styles.chopstick, styles[`i${cls}`])}></div>
    </div>
}

function MainDoc() {
    return <div className={styles.mainDoc}>
        <div className={cln(styles.chopstick, styles.im)} style={{ width: 2, borderRadius: 1}} ></div>
    </div>
}

function BarItem() {
  return (
        <div className={styles.barItem}>
            <div className={styles.imageContent}>
                <img styles={styles.contentImg} src={dog} alt='dog' />
                <div className={styles.describe}>
                    <div className={styles.title}>imply dummy text of the printing and typesetting industry </div>
                    <div className={styles.content}>imply dummy setting industry </div> 
                </div>
            </div>
            <div className={styles.barControl}>
                <div className={styles.doc}>
                     {[ -7, -6, -5, -4, -3, -2, -1, 1,2,3,4,5,7,8,9,10].map(item => <SimpleDoc cls={item} />)}
                    <MainDoc />
                    {[11,12,13,14,15,16,17,18,19, 20, 21, 22].map(item => <SimpleDoc cls={item}/>)}
                </div>
            </div>
        </div>
  );
}


export default BarItem;
