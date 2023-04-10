import { useState } from 'react'

export default function Home() {

  const [newMessages,setNewMessageNum] = useState(3); 
  const [messageArray,setMessageArray] = useState([true,true,true,false,false,false,false]);

  const clickHandler = () => {
    setMessageArray([false,false,false,false,false,false,false]);
    setNewMessageNum(0);
  }

  return (
      <main>
        <div className="flex_container" >
          <div className="flex_content">
            <div className="notification_display">
              <div className="title" >
                Notifications
              </div>
              <div className="notification_number" >
                {newMessages}
              </div>
              <div className="mark_all_as_read" onClick={clickHandler} >
                Mark all as read
              </div>
            </div>

            <div className={ messageArray[0] ? "notification unseen" : "notification"} >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-mark-webber.png" alt="Mark webber"   />
              </div>
              <div>
                <div><b>Mark Webber</b> reacted to your recent post <b>My first tournament today!</b></div>
                <div className="time" >1m ago</div>
              </div>
            </div>
            <div className={ messageArray[1] ? "notification unseen" : "notification"} >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-angela-gray.webp" alt="angela gray"  />
              </div>
              <div>
                <div><b>Angela Gray</b> followed you!</div>
                <div className="time" >5m ago</div>
              </div>
            </div>
            <div className={ messageArray[2] ? "notification unseen" : "notification"} >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-jacob-thompson.webp" alt="jacob thompson"  />
              </div>
              <div>
                <div><b>Jacob thompson</b> has joined your group <b>Chess Club</b></div>
                <div className="time" >1day ago</div>
              </div>
            </div>
            <div className={ messageArray[3] ? "notification unseen" : "notification"} >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-rizky-hasanuddin.webp" alt="rizky hasanuddin"  />
              </div>
              <div>
                <div><b>Rizky Hasanuddin</b> sent you a private message</div>
                <div className="time" >5days ago</div>
                <p className="private_message" >
                  Hello, thanks for setting up the 
                  Chess Club. I've been a member 
                  for a few weeks now and i'm 
                  already having lots of fun and 
                  improving my game.
                </p>
              </div>
            </div>
            <div className={ messageArray[4] ? "notification unseen" : "notification"} >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-kimberly-smith.webp" alt="kimberly smith"  />
              </div>
              <div>
                <div><b>Kimberly Smith</b> Commented on your picture</div>
                <div className="time" >1week ago</div>
              </div>
              <div className="reacted_image" >
                <img src="./image-chess.webp" alt="girl playing chess" />
              </div>
            </div>
            <div className={ messageArray[5] ? "notification unseen" : "notification" } >
              <div className="profile_picture_frame">
                <img className="profile_picture"  src="./avatar-nathan-peterson.webp" alt="nathan peterson"   />
              </div>
              <div>
                <div><b>Nathan Peterson</b> reacted to your recent post <b>5 end-game strategies to increase your win rate</b></div>
                <div className="time" >2week ago</div>
              </div>
            </div>
            <div className={ messageArray[6] ? "notification unseen" : "notification" } >
              <div className="profile_picture_frame">
                <img className="profile_picture" src="./avatar-anna-kim.webp" alt="angela-gray"  />
              </div>
              <div>
                <div><b>Anna Kim</b> left the group <b>Chest Club</b></div>
                <div className="time" >2week ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
