<template>
  <div class="content">
    <!-- 左侧导航栏 -->
    <ul class="left">
      <li>
        <i-icon type="search" size="28" color="#80848f" />
      </li>
      <li
        v-for="(item,index) in foodList"
        :key="index"
        @click="sel(index)"
        :class="sele==index?'sele':''"
      >{{item.typeName}}</li>
    </ul>
    <!-- 右侧内容 -->
    <scroll-view scroll-y :scroll-into-view="scllo" @scroll="scr" @scrolltolower="scrtol">
      <ul class="right">
        <li v-for="(item,index) in foodList" :key="index" class="pest">
          <span :id="'po'+index">{{item.typeName}}</span>
          <ul class="rightCont">
            <li v-for="(it,dex) in item.typelist" :key="dex">
              <div class="typeImg" @click="detail(it.id)">
                <img :src="it.img" alt />
              </div>
              <div class="typeInfo">
                <p class="infohead">{{it.name}}</p>
                <p class="infomate">{{it.descript}}</p>
                <p class="infopic">
                  <span class="pic">￥{{it.price}}</span>
                  <span class="piccla" v-if="it.unit!=''">{{"/"+it.unit}}</span>
                  <span class="forprc" v-if="it.formerprice!='0.00'">{{"￥"+it.formerprice}}</span>
                </p>
                <p class="infocart">
                  <span class="infojie" v-if="food[it.id]>0?true:false" @click="jie(it.id)">-</span>
                  <span
                    class="infonum"
                    v-if="food[it.id]>0?true:false"
                  >{{JSON.stringify(food)!='{}'?food[it.id]:0}}</span>
                  <span class="infoadd" @click="add(it)">+</span>
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </scroll-view>
    <!-- 购物车列表 -->
    <div class="list" v-if="listbln" @click.stop="listbln=!listbln">
      <div class="listcont">
        <ul>
          <li v-for="(item,index) in cartlist" :key="index">
            <div class="listcont-img">
              <img :src="item.img" alt />
            </div>
            <div class="listcont-name">
              <p>{{item.name}}</p>
              <p>
                <span class="pic">￥{{item.price}}</span>
                <span class="piccla">{{"/"+item.unit}}</span>
                <span class="forprc">{{"￥"+item.formerprice}}</span>
              </p>
            </div>
            <div class="listcont-math">
              <span
                class="infojie"
                v-if="JSON.stringify(food)!='{}'?food[item.id]:0"
                @click.stop="jie(item.id)"
              >-</span>
              <span
                class="infonum"
                v-if="JSON.stringify(food)!='{}'?food[item.id]:0"
              >{{JSON.stringify(food)!='{}'?food[item.id]:0}}</span>
              <span class="infoadd" @click.stop="add(item)">+</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 正在加载 -->
    <div class="pos" v-if="bln">
      <div class="img">
        <img
          src="data:image/png;base64,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"
          alt
        />
      </div>
      <div class="xia"></div>
    </div>
    <!-- 详情 -->
    <div class="det" v-if="detbln">
      <div class="detCont">
        <div class="detCont-img">
          <div class="ico" @click="show">
            <i-icon type="close" size="24" color="#fff" />
          </div>

          <img :src="detaillist[0].img" alt />
        </div>
        <div class="detCont-title">{{detaillist[0].name}}</div>
        <div class="detCont-pre">
          ￥{{detaillist[0].price}}
          <span v-if="detaillist[0].unit">/{{detaillist[0].unit}}</span>
        </div>
        <div class="shopcart">
          <span class="jie">-</span>
          {{num}}
          <span class="add">+</span>
        </div>
      </div>
    </div>
    <!-- 结算 -->
    <div class="cart">
      <div class="cartimg" @click.stop="listbln=!listbln">
        <i-icon type="publishgoods_fill" size="68" color="#f0b660" />
      </div>
      <div class="cartpic">￥{{tol|| "0.00"}}</div>
      <div class="cartjs">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodList: [],
      scllo: "",
      sele: 0,
      heis: [],
      bln: true,
      detaillist: [],
      detbln: false,
      food: {},
      listbln: false,
      cartlist: [],
      tol: 0
    };
  },
  methods: {
    sel(index) {
      this.scllo = "po" + index;
    },
    //左右联动
    scr(e) {
      for (var i = 0; i < this.heis.length; i++) {
        if (
          e.target.scrollTop + 160 > this.heis[i] &&
          e.target.scrollTop + 160 < this.heis[i + 1]
        ) {
          this.sele = i;
        }
      }
    },
    getData() {
      var hei = [];
      let query = wx.createSelectorQuery();
      query
        .selectAll(".pest")
        .boundingClientRect(rect => {
          rect.forEach(element => {
            hei.push(element.top);
          });
        })
        .exec();
      this.heis = hei;
    },
    scrtol() {
      setTimeout(() => {
        this.sele = this.heis.length - 1;
      }, 80);
    },
    //获取详情
    detail(id) {
      this.$apis.getdet(id).then(res => {
        this.detaillist = res.data;
        this.detbln = true;
      });
    },
    show() {
      this.detbln = false;
    },
    //数量加
    add(item, e) {
      this.$store.commit("add", item);
      this.$store.state.foodlist.forEach(it => {
        if (it.id == item.id) {
          this.$set(this.food, it.id, it.num);
        }
      });
      this.tol=this.$store.state.totals
    },
    //数量减
    jie(id) {
      this.$store.commit("jie", id);
      this.$store.state.foodlist.forEach((it, index) => {
        if (it.id == id) {
          this.$set(this.food, it.id, it.num);
        }
        if (it.num == 0) {
          this.$store.state.foodlist.splice(index, 1);
        }
      });
      this.cartlist.forEach((item, index) => {
        if (item.num == 0) {
          this.cartlist.splice(index, 1);
        }
      });
       this.tol=this.$store.state.totals
    }
  },
  mounted() {
    //重组数据
    var foodlist = [];
    this.$apis.getfood().then(res => {
      for (var i = 0; i < res.data.foodtype.length; i++) {
        foodlist.push({
          typeName: res.data.foodtype[i].name,
          typeId: res.data.foodtype[i].id,
          typelist: []
        });
        for (var n = 0; n < res.data.foodlist.length; n++) {
          if (res.data.foodtype[i].id == res.data.foodlist[n].type_id) {
            foodlist[i].typelist.push(res.data.foodlist[n]);
          }
        }
      }
    });
    this.foodList = foodlist;
    setTimeout(() => {
      this.bln = false;
      this.getData();
    }, 800);
    this.$store.state.foodlist.forEach(it => {
      if (it.num > 0) {
        this.$set(this.food, it.id, it.num);
        this.cartlist.push(it);
      }
    });
  },
  computed: {
    tal() {
      var arr = [];
      this.$store.state.foodlist.forEach(it => {
        if (it.num > 0) {
          arr.push(it);
        }
      });
      return arr;
    }
  },
  watch: {
    tal(newtotal, oldtotal) {
      if (newtotal.length == 0) {
        this.listbln = false;
      }

      this.cartlist = newtotal;
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  width: 750px;
  height: 410px;
  display: flex;
  .left {
    background-color: #f2f2f2;
    width: 80px;
    > li {
      width: 68px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #676767;
      font-size: 13px;
    }
    .sele {
      color: #f87a7c;
      background: #fff;
      border-left: 2px solid #f87a7c;
    }
  }
  .right {
    flex: 1;
    > li {
      > span {
        padding-left: 12px;
        font-size: 14px;
        border-left: 2px solid #f87a7c;
        color: black;
      }
      > .rightCont {
        > li {
          padding: 13px 0;
          border-bottom: 1px solid #ccc;
          .typeImg {
            float: left;
            width: 62px;
            height: 62px;
            img {
              width: 62px;
              height: 62px;
            }
          }
          .typeInfo {
            margin-left: 71px;
            height: 85px;
            width: 200px;
            position: relative;
            .infohead {
              line-height: 18px;
              font-size: 15px;
              color: #2f2f2f;
              margin-bottom: 5px;
              word-wrap: break-word;
              word-break: normal;
            }
            .infomate {
              color: #a9a9a9;
              font-size: 12px;
              margin-bottom: 2.5px;
            }
            .infopic {
              margin-top: 25px;
              .pic {
                color: #f87a7c;
              }
              .piccla {
                color: #a9a9a9;
                font-size: 13px;
              }
              .forprc {
                font-size: 12px;
                color: #a9a9a9;
                text-decoration: line-through;
              }
            }
            .infocart {
              position: absolute;
              bottom: 0;
              right: 5px;
              .infojie,
              .infoadd {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #f0b660;
                font-size: 17px;
                text-align: center;
                line-height: 20px;
                border-radius: 10px;
              }
              .infonum {
                display: inline-block;
                width: 25px;
                height: 25px;
                text-align: center;
                line-height: 25px;
              }
            }
          }
        }
      }
    }
  }
  .pos {
    position: fixed;
    width: 375px;
    height: 460px;
    background: #fff;
    top: 140px;
    left: 0;
    .img {
      top: 170px;
      left: 170px;
      width: 27px;
      height: 37px;
      position: absolute;
      animation: shaking 1.5s linear infinite;
      img {
        width: 27px;
        height: 37px;
      }
    }

    @keyframes shaking {
      25% {
        margin-top: -10px;
      }
      50% {
        margin-top: 0px;
      }
      75% {
        margin-top: 20px;
      }
      100% {
        margin-top: 0px;
      }
    }
    .xia {
      position: absolute;
      top: 225px;
      left: 182px;
      width: 3px;
      height: 1px;
      /* border-radius: 1px; */
      background: #676767;
      animation: shak 2.8s linear infinite;
    }
    @keyframes shak {
      0% {
        transform: scale(1); /*开始为原始大小*/
      }
      25% {
        transform: scale(5); /*放大1.1倍*/
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(5);
      }
    }
  }
  .det {
    width: 375px;
    height: 667px;
    position: fixed;
    top: 0;
    background: rgba($color: #000000, $alpha: 0.6);
    .detCont {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      width: 320px;
      height: 450px;
      border-radius: 10px;
      .detCont-img {
        border-radius: 10px;
        width: 320px;
        height: 320px;
        .ico {
          width: 28px;
          height: 28px;
          position: absolute;
          right: 10px;
          top: 10px;
          border-radius: 14px;
          background: rgba($color: #000000, $alpha: 0.5);
          text-align: center;
          line-height: 24px;
        }
        img {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 320px;
          height: 320px;
        }
      }
      .detCont-title {
        padding: 10px;
      }
      .detCont-pre {
        padding: 10px;
        margin-top: 20px;
        color: #df5458;
        span {
          color: #a9a9a9;
          font-size: 13px;
        }
      }
    }
  }
  .list {
    width: 375px;
    height: 667px;
    position: fixed;
    top: 0;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
    .listcont {
      z-index: 5;
      width: 375px;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      background: #fff;
      ul {
        padding: 0 15px;
        li {
          padding: 15px 0;
          border-bottom: 1px solid #ccc;
          height: 55px;
          .listcont-img {
            float: left;
            width: 52px;
            height: 52px;
            img {
              width: 52px;
              height: 52px;
            }
          }
          .listcont-name {
            margin-left: 10px;
            float: left;
            width: 200px;
            p {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;

              &:last-child {
                margin-top: 10px;
                .pic {
                  color: #f87a7c;
                }
                .piccla {
                  color: #a9a9a9;
                  font-size: 13px;
                }
                .forprc {
                  font-size: 12px;
                  color: #a9a9a9;
                  text-decoration: line-through;
                }
              }
            }
          }
          .listcont-math {
            float: right;
            margin-top: 30px;
            .infojie,
            .infoadd {
              display: inline-block;
              width: 20px;
              height: 20px;
              background: rgb(240, 182, 96);
              font-size: 17px;
              text-align: center;
              line-height: 20px;
              border-radius: 10px;
            }
            .infonum {
              display: inline-block;
              width: 25px;
              height: 25px;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }
    }
  }
  .cart {
    background: #363333;
    height: 50px;
    width: 375px;
    position: fixed;
    bottom: 0;
    color: #fff;
    .cartimg {
      position: fixed;
      bottom: 25px;
      left: 15px;
      width: 50px;
      height: 50px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .cartpic {
      float: left;
      margin-top: 15px;
      margin-left: 100px;
    }
    .cartjs {
      float: right;
      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 100px;
      background: rgb(231, 145, 15);
    }
  }
}
</style>
