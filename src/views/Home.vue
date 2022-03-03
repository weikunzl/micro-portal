<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{data.body_msg}}</h3>
    <button @click="load()">刷新数据</button>
    <HelloWorld :data="data"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  public data: {msg: string, body_msg?: string} = {
    msg: 'Welcome to Your Vue.js + TypeScript App',
  };

  public load() {
    this.$http.get('/api/test2').then(({data}) => {
      this.data = data;
    });
  }

}
</script>
