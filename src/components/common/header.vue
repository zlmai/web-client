<template>
  <nav id="nav-container" class="navbar navbar-default no-border-radius navbar-fixed-top" role="navigation">
    <div class="navbar-header">
      <ul id="header-layout" class="nav navbar-nav">
        <li id="user-header-img-layout">
          <a herf="#" data-toggle="dropdown">
            <img id="user-head-img" :src="avatar">
            <span id="user-name">{{currentUser}}</span>
          </a>
          <ul class="dropdown-menu">
            <li><a @click="go('logout')" id="logout">注销</a></li>
            <li class="divider"></li>
            <li><a id="nebulaTimeAxis">时光轴</a></li>
            <li><a id="aboutNebula">关于</a></li>
          </ul>
        </li>
        <li id="todo-layout" style="position: absolute">
          <a id="todo-task" href="javascript:void(0)" @mouseover="showTodoTaskList = true" @mouseleave="showTodoTaskList = false">
            <span id='todo-task-icon' class="glyphicon glyphicon-envelope"></span>
            <span id="todo-task-count" :class="['badge',{'has-todo':!isNaN(todoAmount) && todoAmount > 0}]" v-html="todoAmount"></span>
          </a>
          <ul v-show="showTodoTaskList" class="nav"></ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse-1">
      <ul id='navIconList' class="nav navbar-nav">
          <li><a href=""><i class="glyphicon glyphicon-th-large glyphicon-large"></i> <span>工作台</span></a></li>
          <li><a href=""><i class="icon-cogs icon-large"></i> <span>需求流程</span></a></li>
          <li><a href=""><i class="icon-cogs icon-large"></i> <span>合同管理</span></a></li>
          <li><a href=""><i class="icon-cogs icon-large"></i> <span>资源报表</span></a></li>
          <li><a href=""><i class="icon-cogs icon-large"></i> <span>客户账单</span></a></li>
          <li><a href=""><i class="icon-cogs icon-large"></i> <span>费用报表</span></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="RTXLite.HotLink://UserName=idchelper" style="color: #211DD8;">
          <span class="darkBlue" title="使用中如有任何问题，请联系helper">技术支持:</span><span style="margin: 0 2px;">helper</span></a>
        </li>
        <li>
          <a id="logo" href="/" title="XX平台">
            <img src="/static/common/images/logo/logo-nebula-color.png" style="width: 100px;height: 30px;">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import avatar from '../../assets/images/avatar/guest.png'
import loading from '../../assets/images/loading/icon_loading.gif'
import http from '../../utils/http'

export default {
  created () {
    let that = this
    that.todoAmount = 10
    // http.post('/web/todo/tasklist/getTodoTotal',{},function(ret){
    //   if(ret.code !== 0){
    //     that.$router.push({path: 'noauth'})
    //   }else{
    //     if(ret.data.total >= 100){
    //       that.todoAmount = '99+'
    //     }else{
    //       that.todoAmount = ret.data.total
    //     }
    //   }
    // })
  },
  data () {
    return {
      currentUser: 'zlmai',
      avatar: avatar,
      todoAmount: '<img src="'+loading+'" style="width: 14px;height:14px;">',
      showTodoTaskList:false
    }
  }
}
</script>

<style>
  #nav-container{
    margin-bottom: 0;
    border:none;
    z-index: 2;
    height:50px;
  }
  #header-layout{
   background: #fefefe;
   height:50px;
   margin:0;
   padding:0;
   width:200px;
   position:relative;
  }
  #header-layout.open a{
    background-color:white
  }
  .nav .open>a, .nav .open>a {
    background-color: white !important;
    border-color: #337ab7;
  }
  #user-header-img-layout{
    background-color:transparent;
  }
  #user-header-img-layout > ul.dropdown-menu{
    position: fixed;
    top:50px;
    left:2px;
    border-top:#11C0FA 1px solid;
  }
  #user-header-img-layout > a{
    padding:5px;
    margin: 0;
    cursor: pointer;
  }
  #user-header-img-layout:hover #user-name{
    color:#666;
  }
  #user-head-img{
    width:40px;
    height:40px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius:20px;
    display: inline-block;
    border:1px solid #ddd;
  }
  #user-name{
    font-weight: bold;
    color:#111111;
    display: inline-block;
  }
  #todo-layout{
    position: absolute;
    right: 0px;
    padding:0px 4px 0px 0px;
  }
  #todo-task{
    cursor: pointer;
    display:block;
    height:50px;
    line-height: 50px;
    padding: 0px;
  }
  #todo-task-icon{
    color:#1069cd;
    font-size:1.3em;
    position: relative;
    top:4px;
  }
  #todo-task-count{
    position: relative;
    top: -10px;
    left: -10px;
  }
  #todo-task-count.has-todo{
    background: #EB5945;
  }
  #navbar-collapse-1{
      background-color: white;
  }


  /*                    
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover, .navbar-default .navbar-nav>.active>a:focus{
    background-color: #f8f8f8 !important;
} */

</style>