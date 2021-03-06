import axios from 'axios';
self.addEventListener('message', (message) => {
  var counter = 0;
  var notionTitle;
  var id = setInterval(() => {
    if (counter % 2 == 0) {
      notionTitle = "バトルをしてください"
    } else {
      notionTitle = "おやつ、なでる、スナップショット"
    }

    // 通知本体
    let argObj = {
      // 受信者のトークンIDと通知内容
      to: `/topics/${message.data}`,
      priority: "high",
      content_available: true,
      notification: {
        title: `${notionTitle}`,
        body: "15のやつ",
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

    counter++
    if (counter == 13) {
      clearInterval(id)
    }
  }, 960000);
});