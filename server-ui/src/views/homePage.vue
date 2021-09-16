<template>
  <div class="common-layout" id="bgcolor">
    <el-container>
      <el-header height="19%" style="text-align: left">
        <div class="flexdiv">
          <div style="width:10%">
          </div>
          <blog-header></blog-header>
        </div>
      </el-header>
      <el-container direction="horizontal">
        
        <el-main>
          <blog-main></blog-main>
        </el-main>
        <el-aside width="12%">
          <blog-aside></blog-aside>
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import BlogHeader from "../components/BlogHeader.vue";
import BlogMain from "../components/BlogMain.vue";
import BlogAside from "../components/BlogAside.vue";
export default {
  name: "homePage",
  components: {
    BlogHeader,
    BlogMain,
    BlogAside,
  },
};
</script>
<style>
.flexdiv{
  display: flex;
  flex-direction: row;
}
#bgcolor{
  background-color: rgba(211, 220, 230, 0.9);
  margin-right: 20px;
  margin-bottom: 0px;
  margin-left:20px;
}
.blog-header{
  margin-left: 20px;
}
.el-header {
  /* background-color: #b3c0d1; */
  /* background-color: rgba(211, 220, 230, 0.9); */
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 60px; */
  /* margin-top: 20px;
  margin-right: 20px; */
}
.el-footer {
  /* background-color: #b3c0d1; */
  /* background-color: rgba(211, 220, 230, 0.9); */
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  /* margin-bottom: 20px;
  margin-right: 20px; */
}
.el-aside {
  /* background-color: rgba(211, 220, 230, 0.9); #d3dce6; */
  color: var(--el-text-color-primary);
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  /* background-color: #e9eef3; */
  /* background-color: rgba(211, 220, 230, 0.9); */
  color: var(--el-text-color-primary);
  text-align: center;
  /* margin-right: 20px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

