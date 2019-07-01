<template>
<div class="ui-layout">
    <el-container>
    <el-aside width="200px">
      <ul>
        <div><img src="../img/log.jpg"></div>
        <!-- <li v-for="(item,index) in goods" class="menu-item" @click="toggle(index);scrollToFoods(index)"
   :class="{'active':index ==checkindex }">
   </li> -->
        <li @click="tirggerRouter('directoryList')" :class="{'active': 'directoryList' === index}">
          <div class="el-icon-mobile">
            设备类型
          </div>
        </li>
        <li @click="tirggerRouter('directoryList1')" :class="{'active': 'directoryList1' === index}">
          <div class="el-icon-monitor">
            设备型号
          </div>
        </li>
        <li @click="tirggerRouter('directoryList2')" :class="{'active': 'directoryList2' === index}">
          <div class="el-icon-files">
            设备信息
          </div>
        </li>
        <li @click="tirggerRouter('directoryList3')" :class="{'active': 'directoryList3' === index}">
          <div class="el-icon-notebook-1">
            任务管理
          </div>
        </li>
        <li @click="tirggerRouter('directoryList4')" :class="{'active': 'directoryList4' === index}">
          <div class="el-icon-picture-outline">
            触发任务管理
          </div>
        </li>
        <li @click="tirggerRouter('directoryList5')" :class="{'active': 'directoryList5' === index}">
          <div class="el-icon-location-information">
            应用维护
          </div>
        </li>
      </ul>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>
  <!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
export default {
  data () {
    return {
      index: 'directoryList'
    }
  },
  mounted() { // 初始化展示页面
    this.$router.push({
      path: "/directoryList"
    });
  },
  methods: {
    // $('#tabs li').click(function (e) {
    //     var tabContent = $('.tab-container .content')
    //     var index = $(this).index()

    //   })
    tirggerRouter(val){
      // if ($(this).hasClass('active')) {
      //     return
      //   } else {
      //     $('#tabs li').removeClass('active')
      //     $(this).addClass('active')

      //     tabContent.hide().eq(index).fadeIn()
      //   }
      this.index = val;
      this.$router.push({
      path: "/"+val
    });
    }
  },
}
</script>

<style scoped>
.ui-layout,
.el-container,
.spin-container {
  height: 100vh;
  min-width: 100px;
}
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #001529;
  text-align: center;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
li{
  height: 35px;
  line-height: 35px;
  width: 100%;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor:pointer;
  text-align: left;
  padding-left: 20px;
}
li:hover{
  color:#fff;
  background-color: blue;
}
.active{
  background-color: blue;
}
</style>
