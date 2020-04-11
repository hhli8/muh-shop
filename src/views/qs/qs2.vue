<template>
  <div>
    <p class="title">this is logs print</p>
    <button class="btn" @click="print">点我输出</button>
    <div class="text">显示：<p v-html="out"></p></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      log: '',
      out: ''
    }
  },
  created () {
    this.log = `
      
      2020-03-13T03:53:43.405Z user2 [order] ecs.c5.xlarge[x40] jn61xw47x3g
      2020-03-13T04:21:19.267Z user3 [order] ecs.g5.16xlarge[x28] hmom8xr848v
      2020-03-13T15:46:58.815Z user0 [order] ecs.d1ne.14xlarge[x21] xxqpsdux8sa
      2020-03-13T16:28:20.720Z user0 [order] ecs.r5.large[x45] sokwhnb97xh
      2020-03-13T22:29:32.813Z user3 [order] ecs.g5.16xlarge[x7] b8jkovlxtm4
      2020-03-12T17:49:38.501Z user0 [order] ecs.se1.large[x16] cmaqmfterkm
      2020-03-12T17:49:38.501Z user0 [order] ecs.se1.large[x15] cmaqmfterkm
      2020-03-14T01:39:21.517Z user2 [order] ecs.se1ne.large[x31] 7niyma7zm42
      2020-03-14T07:11:55.465Z user2 [order] ecs.c5.xlarge[x6] dkwe4n96ra7
      2020-03-14T08:16:30.776Z user3 [order] ecs.se1.large[x1] u2wij78wo
      2020-03-14T15:28:08.484Z user4 [order] ecs.i2.2xlarge[x11] i62beynee4g
      2020-03-14T19:37:30.512Z user4 [order] ecs.r5.large[x39] z2xmsberqv
      2020-03-14T20:22:10.379Z user3 [order] ecs.se1.large[x17] y9ny3u9y86e
      2020-03-15T08:23:43.760Z user0 [order] ecs.d1ne.14xlarge[x16] 1h6b7oycyn7
      2020-03-15T10:31:55.513Z user3 [order] ecs.se1ne.large[x36] 1pm951rlg52
      2020-03-15T12:03:35.578Z user2 [order] ecs.c5.xlarge[x14] udzsmws386
      2020-03-15T15:35:55.672Z user0 [order] ecs.d1ne.14xlarge[x8] ip6ciiofpw
      2020-03-15T18:46:27.013Z user0 [order] ecs.c5.xlarge[x39] 9xiyxd6tuh
      2020-03-15T19:57:51.400Z user2 [order] ecs.se1.large[x29] 1z9nlq8x8gx
      2020-03-15T23:46:59.898Z user4 [order] ecs.se1.large[x27] qvwym9482xe
      2020-03-15T23:58:25.324Z user1 [order] ecs.se1ne.large[x46] qrgmndzalfr
      2020-03-16T03:50:59.340Z user4 [order] ecs.g5.16xlarge[x9] d9nz8w7ex4u
      2020-03-16T05:09:02.493Z user4 [order] ecs.d1ne.14xlarge[x38] cyg4z81y1v
      2020-03-16T08:55:55.642Z user2 [order] ecs.c5.xlarge[x30] brunilviwzt
      2020-03-16T16:38:27.480Z user0 [order] ecs.se1.large[x38] y8gh3jpayd
      2020-03-16T22:07:11.532Z user1 [order] ecs.d1ne.14xlarge[x16] x33wl71qirs
      2020-03-17T00:41:09.917Z user3 [order] ecs.se1.large[x25] jauwcsfbob
      2020-03-17T01:22:27.291Z user1 [order] ecs.se1.large[x10] e9qcg8xmsln
      2020-03-17T04:53:10.383Z user4 [order] ecs.se1ne.large[x19] irxqnw3y2to
      2020-03-17T08:41:38.519Z user3 [order] ecs.d1ne.14xlarge[x16] omnc06colo
      2020-03-17T09:36:22.984Z user2 [order] ecs.i2.2xlarge[x7] t0qyf44tctd
    `
  },
  methods: {
    print (timeStr) {
      timeStr = '2020-03-'
      let str = this.log.replace(/(^\s*)/g, '')
      let arr = str.split(timeStr)
      let outArr = []
      let tagObj = {}
      arr.forEach((item, index) => {
        if (item) {
          let sonarr = item.split(' ')
          // console.log(sonarr)
          let time = Number(sonarr[0].slice(0, 2))
          let ecsArr = sonarr[3].replace(/(\[x)/g, ' ').slice(0, -1).split(' ')
          let ecs = ecsArr[0]
          let count = Number(ecsArr[1])
          let obj = {
            time,
            user: sonarr[1],
            ecs,
            count
          }
          let tag = time + obj.user + ecs
          if (!tagObj[tag]) {
            tagObj[tag] = obj
          } else {
            obj.count += tagObj[tag].count
            tagObj[tag] = obj
          }
        }
      })
      let htmlStr = ''
      for (var key in tagObj) {
        outArr.push(tagObj[key])
      }
      outArr.sort(function (a, b) {
        return a.time - b.time
      })
      outArr.sort(function (a, b) {
        if (a.time === b.time) return a.count - b.count
      })
      outArr.forEach((item) => {
        htmlStr += `${timeStr}${item.time},${item.user}购买了${item.count}台${item.ecs}实例<br/>`
      })
      this.out = htmlStr
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.title {
  padding: 20px 0;
  text-align: center;
}
.btn {
  margin: 20px;
}
.text {
  padding: 20px;
}
</style>
