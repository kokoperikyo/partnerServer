<template>
  <v-app>
    <v-content>
      <Admin />
    </v-content>
  </v-app>
</template>

<script>
import Admin from "./components/Admin";

export default {
  name: "App",

  components: {
    Admin
  },

  data: () => ({
    //
  })
};
</script>
