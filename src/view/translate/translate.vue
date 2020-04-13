<template>
  <div class="hky-translate">
    <el-input placeholder="请输入需要翻译的内容" v-model="needTransText" clearable @keyup.enter.native="submit"></el-input>
    <el-select v-model="value" placeholder="请选择要翻译的语种">
      <el-option v-for="item in langBean" :key="item.value" :label="item.name" :value="item.value"></el-option>
    </el-select>
    <el-row>
      <el-button type="primary" plain @click="submit()">翻译</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'translate',
    data() {
      return {
        needTransText: '', // 需要翻译的文案,
        value:'en', // 被翻译成的语种 默认是英语
        langBean: [ // 可以被翻译的语种
          {value: 'zh', name: '中文'},
          {value: 'en', name: '英语'},
          {value: 'yue', name: '粤语'},
          {value: 'wyw', name: '文言文'},
          {value: 'jp', name: '日语'},
          {value: 'kor', name: '韩语'},
          {value: 'fra', name: '法语'},
          {value: 'spa', name: '西班牙语'},
          {value: 'th', name: '泰语'},
          {value: 'ara', name: '阿拉伯语'},
          {value: 'ru', name: '俄语'},
          {value: 'pt', name: '葡萄牙语'},
          {value: 'de', name: '德语'},
          {value: 'it', name: '意大利语'},
          {value: 'el', name: '希腊语'},
          {value: 'nl', name: '荷兰语'},	
	        {value: 'pl', name: '波兰语'},
          {value: 'bul', name: '保加利亚语'},
          {value: 'est', name: '爱沙尼亚语'},
          {value: 'dan', name: '丹麦语'},
          {value: 'fin', name: '芬兰语'},
          {value: 'cs', name: '捷克语'},
          {value: 'rom', name: '罗马尼亚语'},
          {value: 'slo', name: '斯洛文尼亚语'},
          {value: 'swe', name: '瑞典语'},
          {value: 'hu', name: '匈牙利语'},
          {value: 'cht', name: '繁体中文'},
          {value: 'vie', name: '越南语'},
        ]
      }
    },
    watch: {
       needTransText(n,o) {
        if(!n) {
          this.$emit('clear', n);
        }
      }
    },
    methods: {
      //提交翻译
      submit(){
        if(!this.needTransText) {
          this.msg.warning('请输入需要翻译的内容');
          return false;
        } else {
          this.$emit('translation',this.needTransText,this.value);
        }
      },
    }
  }
</script>