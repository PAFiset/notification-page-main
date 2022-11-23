import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import markwebberimage from "../media/avatar-mark-webber.png"
import angelagrayimage from "../media/avatar-angela-gray.webp"
import jacobthompsonimage from "../media/avatar-jacob-thompson.webp"
import rizkyhasanuddinimage from "../media/avatar-rizky-hasanuddin.webp"
import kimberlysmithimage from "../media/avatar-kimberly-smith.webp"
import nathanpetersonimage from "../media/avatar-nathan-peterson.webp"
import annakimimage from "../media/avatar-anna-kim.webp" 
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
                <Image className={styles.profile_picture}  src={markwebberimage} alt="Mark webber" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Mark Webber</b> reacted to your recent post <b>My first tournament today!</b></div>
                <div className={styles.time} >1m ago</div>
              </div>
            </div>
            <div className={ messageArray[1] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={angelagrayimage} alt="angela gray" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Angela Gray</b> followed you!</div>
                <div className={styles.time} >5m ago</div>
              </div>
            </div>
            <div className={ messageArray[2] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={jacobthompsonimage} alt="jacob thompson" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Jacob thompson</b> has joined your group <b>Chess Club</b></div>
                <div className={styles.time} >1day ago</div>
              </div>
            </div>
            <div className={ messageArray[3] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={rizkyhasanuddinimage} alt="rizky hasanuddin" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Rizky Hasanuddin</b> sent you a private message</div>
                <div className={styles.time} >5days ago</div>
              </div>
            </div>
            <div className={ messageArray[4] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={kimberlysmithimage} alt="kimberly smith" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Kimberly Smith</b> Commented on your picture</div>
                <div className={styles.time} >1week ago</div>
              </div>
            </div>
            <div className={ messageArray[5] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={nathanpetersonimage} alt="nathan peterson" width="50px" height="50px"  />
              </div>
              <div>
                <div><b>Nathan Peterson</b> reacted to your recent post <b>5 end-game strategies to increase your win rate</b></div>
                <div className={styles.time} >2week ago</div>
              </div>
            </div>
            <div className={ messageArray[6] ? styles.notification + " " + styles.unseen : styles.notification} >
              <div className={styles.profile_picture_frame}>
                <Image className={styles.profile_picture}  src={angelagrayimage} alt="angela-gray" width="50px" height="50px"  />
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
