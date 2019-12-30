<template>
  <div>
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translate @translation='getResult' @clear="clear"></translate>
    <result :result='translatedText'></result>
  </div>
</template>
<script>
import Translate from './translate';
import Result from './result';
import axios from 'axios';

  export default {
    name: 'home',
    data() {
      return {
        translatedText:'', //被翻译的结果
        appid:'20191106000353669', // appid
        salt:'1435660288', // salt
        key:'txiYZvYBcvxegS75KahM', // key
        sign:'' // 签名
      }
    },
    components: {
      translate: Translate, // 主要输入内容区域
      result: Result, // 结果区域
    },
    methods: {
      // 请求翻译的api get 方法
      // getResult(txt,lang) {
      //   this.sign = this.$md5(this.appid + txt + this.salt + this.key);
      //   this.$http.get('/api/trans/vip/translate?q='+ txt +'&from=auto&to='+ lang +'&appid='+this.appid+'&salt='+ this.salt +'&sign='+this.sign).then(res => {
      //     this.translatedText = res.data.trans_result[0].dst;
      //     this.$emit('result', this.translatedText)
      //   })
      // },
      // 请求翻译的api post 方法
      getResult(txt,lang) {
        console.log(this.$route)
        console.log(this.$store);
        this.sign = this.$md5(this.appid + txt + this.salt + this.key);
        let params = {
          q: txt,
          from: 'auto',
          to: lang,
          appid: this.appid,
          salt: this.salt,
          sign: this.sign
        }
        axios.post('/api/trans/vip/translate',params).then((res)=>{
          this.translatedText = res.data.trans_result[0].dst;
          this.$emit('result', this.translatedText)
        })
      },
      // 输入框内容清楚的时候翻译结果清除
      clear(value) {
        this.translatedText = value;
        this.$emit('result', this.translatedText)
      }
    }
  }
</script>