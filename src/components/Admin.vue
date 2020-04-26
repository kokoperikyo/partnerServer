<template>
  <div>
    <v-btn @click="test">aa</v-btn>
    admin
    {{notionRepetition}}
    {{notionOnceEach}}
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import Worker from "worker-loader!../worker";
import WorkerCompleOther from "worker-loader!../WorkerCompleOther";
import WorkerCompleBattle from "worker-loader!../WorkerCompleBattle";

export default {
  data() {
    return {
      notionRepetition: null,
      notionOnceEach: null
    };
  },
  methods: {
    test() {
      // const worker = new WorkerOnceEach("workerOnceEach.js");
      // worker.postMessage("こんにちは！");
    }
  },
  watch: {
    notionRepetition() {
      const now = new Date();
      const timeDate =
        now.getTime() - this.notionRepetition[0].createdAt.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate < 0.5) {
        // ここでサービスワーカーを呼び出す
        const worker = new Worker("worker.js");
        worker.postMessage(this.notionRepetition[0].ref);
      }
    },
    notionOnceEach() {
      const now = new Date();
      const timeDate =
        now.getTime() - this.notionOnceEach[0].createdAt.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate < 0.5) {
        if (this.notionOnceEach[0].whichNotion == 1) {
          //なでる、おやつ、写真完了
          // ここでサービスワーカーを呼び出す
          const worker = new WorkerCompleOther("workerCompleOther.js");
          worker.postMessage(this.notionOnceEach[0].ref);
        } else if (this.notionOnceEach[0].whichNotion == 2) {
          //バトル完了
          // ここでサービスワーカーを呼び出す
          const worker = new WorkerCompleBattle("WorkerCompleBattle.js");
          worker.postMessage(this.notionOnceEach[0].ref);
        }
      }
    }
  },
  firestore() {
    return {
      notionRepetition: db
        .collection("notionRepetition")
        .orderBy("createdAt", "desc")
        .limit(1),
      notionOnceEach: db
        .collection("notionOnceEach")
        .orderBy("createdAt", "desc")
        .limit(1)
    };
  }
};
</script>