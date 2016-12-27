<template>
  <div>
    <section class="content-header">
      <h1>
        添加文章
        <small>create post</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="/"><i class="fa fa-dashboard"></i> 首页</a></li>
        <li>
          <route-link to="/article"><i class="fa fa-paper-plane"></i> 云文章</route-link>
        </li>
        <li class="active">添加文章</li>
      </ol>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">添加文章</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label for="name">标题</label>
                  <input type="text" class="form-control" id="name"
                         placeholder="未定义标题">
                </div>
                <div class="form-group">
                  <label for="categories">分类</label>
                  <select class="form-control" id="categories">
                    <option value="0">前端开发</option>
                    <option value="0">架构思想</option>
                    <option value="0">框架</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="sign">标签</label>
                  <input type="text" class="form-control" id="sign">
                </div>
                <div class="form-group">
                  <label for="content">内容</label>
                  <textarea class="form-control" id="content" rows="20"></textarea>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary">提交</button>
              </div>
            </form>
          </div>
        </div>
    </section>
  </div>
</template>