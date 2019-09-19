<template>
  <scroll-view scroll-y>
    <div class="content">
      <div class="comment-top">
        <div class="contop-left">
          <div class="left-cont">
            <div class="left-math">{{evalList.commentgrade}}</div>
            <div class="left-goal">平均得分</div>
            <div class="left-com">
              （评论数
              <span v-if="JSON.stringify(evalList)!='{}'">{{evalList.tag_num[0].num}}</span>条）
            </div>
          </div>
        </div>
        <div class="contop-right" v-if="JSON.stringify(evalList)!='{}'">
          <div v-for="(item,index) in 5" :key="index" class="contright-cont">
            <div class="conright-xing">
              <ul>
                <li v-for="(it,dex) in 5" :key="dex">
                  <img
                    :src="(5-dex)>index?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNjcwNTRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzREREU5RDRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0U2NzA1MkU1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0U2NzA1M0U1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoT3sSwAAAHVSURBVHjaYvy/V4eBDMACxAeAWBSITRmcLn8i1QAmBvJAGhBbA7EaENeSYwAjGT7mAeI7QCwO5f8GYg2gr+/R2sdlSJaCACsQt9I6qKWAuBiLeATDPl0TWlrcDMRcOOS6aGWxLhAn4pF3BPramxYWd4ASIwE17UDLmahpsT0QexEZKtHEFgQ4sxo4mzAwWAJxCQkh0wL0NT+QPg/El4DZ7DOhfCwNxGZAbIJECzBQBv5D8/w5IL4AdcxZoGPegCzOBHJqoFmFHgDkmEaQxb8JBDktwG9Q4trPQH9whwlc6jAw3KKjpaCaLBhk8Tsg9oHStAb/wB51unwdlo9vA3EAtKahJSgGWrodvQA5DMQpNLR0FtDSCbhKrkXkVHFEAFACziFUZIJaFCupmYKBOATo29+ELAZl8CIqWlwDtPQdsZWEChUtFiKldlKnosXypFisQUWLZUmxmJpBLUeKxcpUtFiGWIsZibD4IxC3QVP/C4IWY2kOMeFwIQcOQz6A6lIgVgDiaiDuB2IlIC7E4wAWtHY4Tou/AfFfNLG3QFwJTSgNUAdAgNPl79CiEJcD/mOrA7BZDLIkFYhfAfEDaANeAdrK/IIzQDEd8BSqvgDU1EFXDhBgABBobUmTnS8hAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZBNzAxRDlFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZBNzAxREFFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkE3MDFEN0U1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkE3MDFEOEU1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGsiF0AAAHySURBVHjavJbPK0RRFMffjJEfKaJBfocYCzuULOxloVgoKyVSNiIWWEgiFPmxsbTzB8iSsvV7o5CFUjTIr2xG+BxdNSYz896b+96pT+fN+3G/99y595zjMWxYMBj04XbBD/V+v//F6hhew571QhNUwYSdATw2os3AXUKeuhWCAFFfOR3xSJioWDJMOxox0RbgLiD9n8fyX+87FfFUFFGxOUciJtpa3Emcb1qJekt3xLMmJjrDBL3ahBmsGddi4lVZla6ElhoxeRaARhiGGpMrcw3zcASnLP1rTGGECnENUBfms4zE7Eud+UM4VpM5YDL3HgT7+TEOBYY7JpOZFGHJPD7DXQvJ5tox3LdLEe6EcxdFpZK1e/mjH+Xgw6MLop8SKJpnP+eYC8m/barSOGlDaG3/SSDc2MP1OCi6jsbSv5mLBxt2SpwJkw08EC9lSkexqXMHQwdBheKmTFV3bzQJy2baNFskKjVGnG2lOlVrFC61IhzQKFxsRVjnUpdYEa7QKFxkqhFQDcA7pMYY7BnW4F61u/kx3v2AFHb2Z7yIi2KIPkkthTIGGoNFrsthEG6jfOOL6MOjRpyDu4OksNsPsACriL1FOftpuD4YjVgBKfy50nWYSSDdqquUJV9RefbNZGP4OwHp0zJBVmY58r1vAQYAXg1++91XSEMAAAAASUVORK5CYII='"
                    alt
                  />
                </li>
              </ul>
            </div>
            <div class="conright-shu">{{evalList.commentgradePeople["grade_"+(5-index)]}}</div>
          </div>
        </div>
      </div>
      <div class="comment-middle">
        <div class="middle-cont">
          <span
            v-for="(item,index) in evalList.tag_num"
            :key="index"
            :class="{'cont-item':true,'cont-select':select==index}"
            @click="tag(index)"
          >{{item.name+"("+item.num+")"}}</span>
        </div>
      </div>
      <div class="comment-bottom">
        <div class="bottom-cont">
          <ul>
            <li v-for="(item,index) in infoList.comments" :key="index">
              <p class="botCont-name">
                {{item.lewaimai_customer_id}}
                <span>
                  <ul>
                    <li v-for="(it,dex) in 5" :key="dex">
                      <img
                        :src="dex<item.grade?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNjcwNTRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzREREU5RDRFNUYzMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0U2NzA1MkU1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0U2NzA1M0U1RjMxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoT3sSwAAAHVSURBVHjaYvy/V4eBDMACxAeAWBSITRmcLn8i1QAmBvJAGhBbA7EaENeSYwAjGT7mAeI7QCwO5f8GYg2gr+/R2sdlSJaCACsQt9I6qKWAuBiLeATDPl0TWlrcDMRcOOS6aGWxLhAn4pF3BPramxYWd4ASIwE17UDLmahpsT0QexEZKtHEFgQ4sxo4mzAwWAJxCQkh0wL0NT+QPg/El4DZ7DOhfCwNxGZAbIJECzBQBv5D8/w5IL4AdcxZoGPegCzOBHJqoFmFHgDkmEaQxb8JBDktwG9Q4trPQH9whwlc6jAw3KKjpaCaLBhk8Tsg9oHStAb/wB51unwdlo9vA3EAtKahJSgGWrodvQA5DMQpNLR0FtDSCbhKrkXkVHFEAFACziFUZIJaFCupmYKBOATo29+ELAZl8CIqWlwDtPQdsZWEChUtFiKldlKnosXypFisQUWLZUmxmJpBLUeKxcpUtFiGWIsZibD4IxC3QVP/C4IWY2kOMeFwIQcOQz6A6lIgVgDiaiDuB2IlIC7E4wAWtHY4Tou/AfFfNLG3QFwJTSgNUAdAgNPl79CiEJcD/mOrA7BZDLIkFYhfAfEDaANeAdrK/IIzQDEd8BSqvgDU1EFXDhBgABBobUmTnS8hAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZBNzAxRDlFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZBNzAxREFFNUYyMTFFNjg0OERDM0NGRDUzOUE0MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkE3MDFEN0U1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkE3MDFEOEU1RjIxMUU2ODQ4REMzQ0ZENTM5QTQyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGsiF0AAAHySURBVHjavJbPK0RRFMffjJEfKaJBfocYCzuULOxloVgoKyVSNiIWWEgiFPmxsbTzB8iSsvV7o5CFUjTIr2xG+BxdNSYz896b+96pT+fN+3G/99y595zjMWxYMBj04XbBD/V+v//F6hhew571QhNUwYSdATw2os3AXUKeuhWCAFFfOR3xSJioWDJMOxox0RbgLiD9n8fyX+87FfFUFFGxOUciJtpa3Emcb1qJekt3xLMmJjrDBL3ahBmsGddi4lVZla6ElhoxeRaARhiGGpMrcw3zcASnLP1rTGGECnENUBfms4zE7Eud+UM4VpM5YDL3HgT7+TEOBYY7JpOZFGHJPD7DXQvJ5tox3LdLEe6EcxdFpZK1e/mjH+Xgw6MLop8SKJpnP+eYC8m/barSOGlDaG3/SSDc2MP1OCi6jsbSv5mLBxt2SpwJkw08EC9lSkexqXMHQwdBheKmTFV3bzQJy2baNFskKjVGnG2lOlVrFC61IhzQKFxsRVjnUpdYEa7QKFxkqhFQDcA7pMYY7BnW4F61u/kx3v2AFHb2Z7yIi2KIPkkthTIGGoNFrsthEG6jfOOL6MOjRpyDu4OksNsPsACriL1FOftpuD4YjVgBKfy50nWYSSDdqquUJV9RefbNZGP4OwHp0zJBVmY58r1vAQYAXg1++91XSEMAAAAASUVORK5CYII='"
                        alt
                      />
                    </li>
                  </ul>
                </span>
              </p>
              <p class="botCont-text">{{item.content}}</p>
              <div class="botCont-img" v-if="item.imgurl.length>0">
                <img :src="'https://img.zhipuzi.com'+item.imgurl[0]" />
              </div>
              <div class="botCont-data">{{item.time}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pos" v-if="blne">
        <div class="img">
          <img
            src="data:image/png;base64,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"
            alt
          />
        </div>
        <div class="xia"></div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      blne: true,
      evalList: {},
      infoList: {},
      select: 0
    };
  },
  components: {},
  mounted() {
    this.getData();
  },
  methods: {
    //初始化
    getData() {
      //评价详情
      this.$apis.geteval().then(res => {
        this.evalList = res.data;
        //评价列表
        this.$apis.getlist(0).then(res => {
          this.infoList = res.data;
          setTimeout(() => {
            this.blne = false;
          }, 80);
        });
      });
    },
    tag(index) {
      this.select = index;
      this.$apis.getlist(index).then(res => {
        this.infoList = res.data;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  width: 375px;
  height: 460px;
  .comment-top {
    height: 145px;

    .contop-left {
      width: 150px;
      padding-bottom: 21px;
      float: left;
      .left-cont {
        border-right: 1px solid #ebebeb;
        .left-math {
          margin-top: 25px;
          padding-bottom: 15px;
          text-align: center;
          font-size: 23px;
          color: #df5458;
        }
        .left-goal {
          color: #676767;
          text-align: center;
          font-size: 14px;
        }
        .left-com {
          color: #676767;
          text-align: center;
          font-size: 14px;
          span {
            color: #df5458;
          }
        }
      }
    }
    .contop-right {
      width: 188px;
      float: left;
      padding-top: 18px;
      padding-left: 34px;
      .contright-cont {
        .conright-xing {
          ul {
            li {
              width: 14px;
              height: 14px;
              margin-right: 6px;
              float: left;
              img {
                width: 14px;
                height: 14px;
              }
            }
          }
        }
        .conright-shu {
          margin-left: 130px;
          color: #fdbc3f;
        }
      }
    }
  }
  .comment-middle {
    border-top: 10px solid #ebebeb;
    border-bottom: 10px solid #ebebeb;
    .middle-cont {
      padding: 10px 0;
      padding-left: 15px;
      .cont-item {
        margin-left: 5px;
        margin-right: 5px;
        display: inline-block;
        height: 29px;
        padding: 0 10px;
        line-height: 29px;
        text-align: center;
        color: #c2c2c2;
        border: 1px solid #c2c2c2;
        border-radius: 15px;
        font-size: 13px;
      }
      .cont-select {
        border-color: #f87a7c !important;
        color: #f87a7c !important;
        background-color: #ffe7e7;
      }
    }
  }
  .comment-bottom {
    padding: 0 18px 18px;
    background: #fff;
    .bottom-cont {
      > ul {
        > li {
          margin-top: 18px;
          > .botCont-name {
            height: 18px;
            font-size: 14px;
            line-height: 18px;
            font-weight: bold;
            color: #373737;
            > span {
              float: right;
              > ul {
                > li {
                  float: left;
                  width: 14px;
                  height: 14px;
                  margin-right: 6px;
                  > img {
                    width: 14px;
                    height: 14px;
                  }
                }
              }
            }
          }
          .botCont-text {
            margin-top: 12px;
            color: #373737;
            font-size: 12px;
          }
          .botCont-img {
            margin-top: 8px;
            img {
              width: 175px;
              height: 175px;
            }
          }
          .botCont-data {
            margin-top: 10px;
            color: #676767;
            font-size: 12px;
            text-align: right;
            height: 20px;
            line-height: 20px;
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
}
</style>
