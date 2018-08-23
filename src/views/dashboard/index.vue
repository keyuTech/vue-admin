<template>
  <header>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span class="icon-container">
              <i class="fas fa-address-book fa-fw"></i>
            </span>
            <span slot="title">个人中心</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-align-justify fa-fw"></i>
              </span>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-align-right fa-fw"></i>
              </span>
              <span>体验课订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-user fa-fw"></i>
              </span>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-building fa-fw"></i>
              </span>
              <span>机构管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">选项1</el-menu-item>
              <el-menu-item index="6-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-book fa-fw"></i>
              </span>
              <span>线上课程</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">选项1</el-menu-item>
              <el-menu-item index="7-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-cubes fa-fw"></i>
              </span>
              <span>首页活动</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1">选项1</el-menu-item>
              <el-menu-item index="8-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-bug fa-fw"></i>
              </span>
              <span>爬虫管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="9-1">选项1</el-menu-item>
              <el-menu-item index="9-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-image fa-fw"></i>
              </span>
              <span>banner管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="10-1">选项1</el-menu-item>
              <el-menu-item index="10-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-music fa-fw"></i>
              </span>
              <span>音频绘本管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="11-1">选项1</el-menu-item>
              <el-menu-item index="11-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="12">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-box-open fa-fw"></i>
              </span>
              <span>抽奖管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="12-1">选项1</el-menu-item>
              <el-menu-item index="12-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="13">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-box fa-fw"></i>
              </span>
              <span>绘本购买管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="13-1">选项1</el-menu-item>
              <el-menu-item index="13-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="14">
            <template slot="title">
              <span class="icon-container">
                <i class="fas fa-address-card fa-fw"></i>
              </span>
              <span>天使会员</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="14-1">选项1</el-menu-item>
              <el-menu-item index="14-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </header>

</template>

<script>
import Vue from "vue";
import Element from "element-ui";

Vue.use(Element);

export default {
  name: "app",
  data: function() {
    return {
      active: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
/* 头部导航 */
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.icon-container {
  font-size: 16px;
  margin-right: 5px;
}
</style>
