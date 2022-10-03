import { MainPage } from "../components/MainPage";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function NoviPage() {
  return (
    <MainPage pageTitle="Novi's Page">
      <div className={styles.header}>
        <h2>TO DO</h2>
        <Image loader={myLoader} src="https://2828691.fs1.hubspotusercontent-na1.net/hubfs/2828691/BA%202022%20-%20SD/Revamp/ic-achievement.svg" alt="Icon Check" width={20} height={20}/>
      </div>
    </MainPage>
  );
}
