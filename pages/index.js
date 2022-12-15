import styles from '../styles/Home.module.scss'
import Image from 'next/image'


import { useState } from 'react'

export default function Home() {

  const [newMessages,setNewMessageNum] = useState(3); 
  const [messageArray,setMessageArray] = useState([true,true,true,false,false,false,false]);

  const clickHandler = () => {

    setMessageArray([false,false,false,false,false,false,false]);
    setNewMessageNum(0);
  }

  

  return (
    <div>
      <main>
        <div className="flex_container" >
          <div className={styles.flex_content}>
            <div className={styles.notification_display}>
              <div className={styles.title} >
                Notifications
              </div>
              <div className={styles.notification_number} >
                {newMessages}
              </div>
              <div className={styles.mark_all_as_read} onClick={clickHandler} >
                Mark all as read
              </div>
            </div>
            <div className={ messageArray[0] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-mark-webber.png" alt="Mark webber"   />
              </div>
              <div>
                <div><b>Mark Webber</b> reacted to your recent post <b>My first tournament today!</b></div>
                <div className={styles.time} >1m ago</div>
              </div>
            </div>
            <div className={ messageArray[1] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-angela-gray.webp" alt="angela gray"  />
              </div>
              <div>
                <div><b>Angela Gray</b> followed you!</div>
                <div className={styles.time} >5m ago</div>
              </div>
            </div>
            <div className={ messageArray[2] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-jacob-thompson.webp" alt="jacob thompson"  />
              </div>
              <div>
                <div><b>Jacob thompson</b> has joined your group <b>Chess Club</b></div>
                <div className={styles.time} >1day ago</div>
              </div>
            </div>
            <div className={ messageArray[3] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-rizky-hasanuddin.webp" alt="rizky hasanuddin"  />
              </div>
              <div>
                <div><b>Rizky Hasanuddin</b> sent you a private message</div>
                <div className={styles.time} >5days ago</div>
              </div>
            </div>
            <div className={ messageArray[4] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-kimberly-smith.webp" alt="kimberly smith"  />
              </div>
              <div>
                <div><b>Kimberly Smith</b> Commented on your picture</div>
                <div className={styles.time} >1week ago</div>
              </div>
            </div>
            <div className={ messageArray[5] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-nathan-peterson.webp" alt="nathan peterson"   />
              </div>
              <div>
                <div><b>Nathan Peterson</b> reacted to your recent post <b>5 end-game strategies to increase your win rate</b></div>
                <div className={styles.time} >2week ago</div>
              </div>
            </div>
            <div className={ messageArray[6] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <img className={styles.profile_picture}  src="./avatar-anna-kim.webp" alt="angela-gray"  />
              </div>
              <div>
                <div><b>Anna Kim</b> left the group <b>Chest Club</b></div>
                <div className={styles.time} >2week ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
