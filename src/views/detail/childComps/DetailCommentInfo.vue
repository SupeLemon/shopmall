<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="coment-header">
          <div class="header-title">用户评价</div>
          <div class="more">
              <span>更多</span>
              <img src="~assets/img/detail/more.png" alt="">
          </div>
      </div>
      <div class="comment-content">
          <div class="comment-author">
              <img :src="commentInfo.author.avatar" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{{commentInfo.author.uname}}</span>
          </div>
          <div class="content">
              <p>{{commentInfo.content}}</p><br>
              <p>
                  <span v-for="item in commentInfo.extraInfo">{{item}}  </span>
              </p>
              <br>
              <span>{{commentInfo.created | showDate}}</span>&nbsp;&nbsp;&nbsp;
              <span>{{commentInfo.style}}</span>
          </div>
          <br>
          <div v-if="commentInfo.images.length !== 0" class="image-comment">
              <img :src="item" alt="" v-for="item in commentInfo.images">
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from "common/formatDate.js"
export default {
  name: "DetailCommentInfo",
  props: {
      commentInfo: {
          type: Object,
          default() {
            return {}
          }
      }
  },
  filters: {
      showDate(value) {
          let date = new Date(value * 1000)
          return formatDate(date, "yyyy-MM-dd")
      }
  }
}
</script>

<style scoped>
    .comment-info {
        padding: 20px 10px;
    }
    .coment-header {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(100, 100, 100, .6);
    }
    .header-title {
        font-size: 18px;
        color: #333;
    }
    .more span {
        font-size: 14px;
    }
    .more img {
        width: 17px;
        height: 17px;
        vertical-align: middle;
    }
    .comment-author img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .content p, span {
        font-size: 15px;
    }
    .image-comment img {
        width: 77px;
        height: 77px;
        margin-left: 10px;
    }
</style>