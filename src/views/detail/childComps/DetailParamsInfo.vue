<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-info">
      <table class="info-size" v-for="table in paramsInfo.sizes">
          <tr v-for="tr in table">
              <td v-for="td in tr">{{td}}</td>
          </tr>
      </table>
      <table class="info-param">
          <tr v-for="info in paramsInfo.infos">
              <td class="param-key">{{info.key}}</td>
              <td class="param-value">{{info.value}}</td>
          </tr>
      </table>
      <!-- {{paramsInfo}} -->
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
      paramsInfo: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style scoped>
    .params-info {
        padding: 20px 15px;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-size {
        width: 100%;
        border-collapse: collapse;
        
    }
    .info-size tr {
        height: 42px;
        width: 100%;
    }
    .param-info table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .param-key {
        width: 95px;
        height: 42px;
    }
    .param-value {
        color: var(--color-high-text);
    }
</style>