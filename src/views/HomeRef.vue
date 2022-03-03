<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>{{ data.body_msg }}</h3>
    <div v-for="(funt,index) in funds">
      <h5 v-if="funt.isFirst">XXX</h5>
      <h4>{{ `${index}_funt_${funt} ${funt.key}` }}</h4>
    </div>
    <button @click="load()">刷新数据</button>
    <HelloWorldRef ref="helloWorld"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorldRef from '@/components/HelloWorldRef.vue';

@Component({
  components: {
    HelloWorldRef,
  },
})
export default class HomeRef extends Vue {

  public data: { msg: string, body_msg: string } = {
    msg: 'Welcome to Your Vue.js + TypeScript App',
    body_msg: '',
  };
  public funds: [] = [];
  public fundCategories: string[] = ['A', 'B', 'C', 'D', 'E'];
  public fundDisplayModel: any = {
    A: [{}, {}, {}, {}],
    B: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    C: [{}, {}, {}, {}, {}, {}, {}, {}],
    D: [{}, {}],
    E: [{}, {}, {}, {}, {}],
  };

  public needExpandBtn: boolean = false;
  public pauseAt: number = -1;

  public load() {
    this.$http.get('/api/test2').then(({data}) => {
      this.data.body_msg = data.body_msg;
      this.$refs.helloWorld.initData(data);
    });

    Object.keys(this.fundDisplayModel).forEach((key: string) => {
      this.funds.push(...this.buildFundDisplayList(key));
    });

    this.insertFundPlace();
  }

  private buildFundDisplayList(key: string): [] {
    return this.fundDisplayModel[key].map((fund: any, index: number) => this.buildFund(fund, index, key));
  }

  private buildFund(fund: any, index: number, key: string) {
    if (index === 0) {
      fund.isFirst = true;
    }
    fund.key = key;
    return fund;
  }

  private insertFundPlace() {
    let placeIndex = 1;
    this.fundCategories.forEach((category, index) => {
      const length = this.fundDisplayModel[category].length;
      for (let i = 0; i < length; i++) {
        this.fundDisplayModel[category][i].place = placeIndex;
        placeIndex++;
        if (placeIndex >= 7 && this.pauseAt < 0) {
          this.pauseAt = index;
        }
      }
    });
    this.needExpandBtn = placeIndex >= 7;
  }

}
</script>
