import {
  db
} from "@/plugins/firebase";
import axios from 'axios';
self.addEventListener('message', (message) => {
  //表示用のステータスをその他待にする
  db.collection("whichNotionSt")
    .doc(message.data)
    .set({
      st: 11
    });

  setTimeout(() => {
    //ボタン表示用のステータスをその他表示用にする
    db.collection("whichNotionSt")
      .doc(message.data)
      .set({
        st: 1
      });
    // 通知本体
    let argObj = {
      // 受信者のトークンIDと通知内容
      to: `/topics/${message.data}`,
      priority: "high",
      content_available: true,
      notification: {
        title: "おやつ・なでる・スナップショットを実行してください",
        body: "完了後このアプリを起動して完了",
        badge: "1"
      }
    };
    let optionObj = {
      //送信者のサーバーキー
      headers: {
        "Content-Type": "application/json",
        Authorization: "key=" +
          "AAAAjWorfCQ:APA91bFMCTFdpQYQThdfQnzK8Xu8JkAUrzbl0pRpxXDzrMftz12oirt7SxwKQsF0E1zpq0CO-ig7WgB6gI2FuZhP49A_fI5c_kYMQttEPLAzhFgB4cnNZuncY5OHbzVgvV6hJac9WDnr"
      }
    };
    axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);



  }, 960000);

});