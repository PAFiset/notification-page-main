import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import markwebberimage from "../media/avatar-mark-webber.png"
import kimberlysmithimage from "../media/avatar-kimberly-smith.webp"
import angelagrayimage from "../media/avatar-angela-gray.webp"

export default function Home() {
  return (
    <div>

      <main>
        <div className="flex_container" >
          <div className={styles.flex_content}>
            <div className={styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={markwebberimage} alt="Mark-webber" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Mark Webber</b> reacted to your recent post <b>My first tournament today!</b></div>
                <div className={styles.time} >1m ago</div>
              </div>
            </div>
            <div className={styles.notification +" "+ styles.seen} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={angelagrayimage} alt="angela-gray" width="50px" height="50px"  />
              </div>
              <div>
                <div>Angela Gray followed you!</div>
                <div className={styles.time} >5m ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
