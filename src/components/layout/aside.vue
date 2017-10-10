<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar" style="height: auto;">
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/static/img/stock/user1-128x128.jpg" class="img-circle" alt="User Image"></div>
                <div class="pull-left info">
                    <p>admin</p>
                    <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
                </div>
            </div>
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="搜索...">
                <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
                </div>
            </form>
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
                <li class="header">操作面板</li>
                <li :class="{active:$route.path=='/'}">
                    <router-link to="/">
                        <i class="fa fa-home"></i>
                        <span>我的面板</span>
                    </router-link>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-bookmark"></i>
                        <span>云书签</span>
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu" :class="{active:$route.path=='/bookmark'}">
                        <li :class="{active:$route.path=='/bookmark-category'}">
                            <router-link to="/bookmark-category"><i class="fa fa-circle-o"></i> 分类</a></router-link>
                        <li :class="{active:$route.path=='/bookmark'}">
                            <router-link to="/bookmark"><i class="fa fa-circle-o"></i> 列表</router-link>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-file-text"></i>
                        <span>云文章</span>
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu" :class="{active:$route.path=='/article'}">
                        <li><a href="#"><i class="fa fa-circle-o"></i> 分类</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> 标签</a></li>
                        <li :class="{active:$route.path=='/article'}">
                            <router-link to="/article"><i class="fa fa-circle-o"></i> 列表</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
