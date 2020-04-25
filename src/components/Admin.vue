<template>
  <div>
    <v-btn @click="test"></v-btn>
    admin
    {{notion}}
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import Worker from "worker-loader!../worker";

export default {
  data() {
    return {
      notion: null
    };
  },
  methods: {
    test() {
      const worker = new Worker("worker.js");
      worker.postMessage("こんにちは！");
    }
  },
  watch: {
    notion() {
      console.log(this.notion[0].ref);
      console.log(this.notion[0].createdAt);
      const now = new Date();
      const timeDate =
        now.getTime() - this.notion[0].createdAt.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate < 1) {
        // ここでサービスワーカーを呼び出す
        const worker = new Worker("worker.js");
        worker.postMessage("こんにちは！");
      }
    }
  },
  firestore() {
    return {
      notion: db
        .collection("notion")
        .orderBy("createdAt", "desc")
        .limit(1)
    };
  }
};
</script>