<template>
<div>
  <div class="header-cont">
    <div class="cont-a">
      <div class="a-hot">
        <img
          data-v-1f55f642
          src="http://img.zhipuzi.com/upload_files/image/20190525/cae29Soa7761JuMGuhL1GRrIKg1gN44g.jpg!max80"
          alt
        />
      </div>
      <div class="a-info">
        <div class="info-title">快来饭</div>
        <div class="info-ann">
          <div
            class="srcoll_view"
          >亲爱的饭粉！欢迎加入“快来饭”大家庭！“快来饭”将至始至终遵守好米、好油、好菜、好肉、好料的准则，更快、更好、更用心的为您做好每一餐！感同身受，❤️贴❤️的为您服务！愿“快来饭”伴随您度过美好的一天又一天！跟随您健康饮食的脚步往前迈进，永不止步……</div>
        </div>
      </div>
      <div class="a-collect">
        <p>
          <i-icon type="like" size="28" color="#fff" />
        </p>
        <p>收藏</p>
      </div>
    </div>

    <div class="cont-b"></div>
  </div>
  <div class="tab">
    <div :class="tabSel==0?'tabselect':''" @click="select(0)">选购</div>
    <div :class="tabSel==1?'tabselect':''" @click="select(1)">评价</div>
    <div :class="tabSel==2?'tabselect':''" @click="select(2)">商家</div>
  </div>
  <div v-if="tabSel==0">
    <body></body>
  </div>
  <div v-if="tabSel==1">
    <evaluate></evaluate>
  </div>
  <div v-if="tabSel==2">
    <merchant></merchant>
  </div>
</div>
</template>
<script>
import body from "@/components/body";
import evaluate from "@/components/evaluate";
import merchant from "@/components/merchant";
export default {
  data() {
    return {
      tabSel: 0,
      headtext: ""
    };
  },
  components: {
    body,
    evaluate,
    merchant
  },
  methods: {
    select(index) {
      this.tabSel = index;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.header-cont {
  height: 100px;
  background: #ada889;
  .cont-a {
    height: 51px;
    padding: 10px;
    padding-left: 18px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #fff;
    .a-hot {
      width: 51px;
      height: 51px;
      img {
        width: 51px;
        height: 51px;
      }
    }
    .a-info {
      width: 225px;
      color: #fff;
      border-right: 1px solid #fff;
      .info-title {
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        margin-bottom: 6px;
      }
      .info-ann {
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background: #ada889;
        height: 35px;
        line-height: 35px;
        position: relative;
        .srcoll_view {
          
        }
      }
    }
    .a-collect {
      width: 42px;
      color: #fff;
    }
  }
}

.tab {
  height: 40px;
  line-height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
  color: #676767;

  justify-content: space-around;
  div {
    padding: 0 11px;
  }
}
.tabselect {
  color: #373737;

  border-bottom: 2px solid #f87a7c;
}
</style>
