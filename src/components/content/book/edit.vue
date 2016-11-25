<template>
    <div>
        <section class="content-header">
            <h1>
                编辑书签
                <small>edit book</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li>
                    <route-link to="/book"><i class="fa fa-bookmark"></i> 云书签</route-link>
                </li>
                <li class="active">编辑书签</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">编辑书签</h3>
                        </div>
                        <!-- /.box-header -->
                        <!-- form start -->
                        <form role="form">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="name">书签名称</label>
                                    <input type="text" class="form-control" id="name"
                                           placeholder="自定义书签名称" value="laravel中文社区">
                                    <p class="help-block">为空则系统自动填写</p>
                                </div>
                                <div class="form-group">
                                    <label for="url">书签路径</label>
                                    <input type="text" class="form-control" id="url"
                                           placeholder="网站路径" value="https://laravel-china.org/">
                                    <p class="help-block">如：http://www.example.com</p>
                                </div>
                                <div class="form-group">
                                    <label for="categories">分类</label>
                                    <select class="form-control" id="categories">
                                        <option value="0">论坛社区</option>
                                        <option value="0">客户网站</option>
                                        <option value="0">开发工具</option>
                                    </select>
                                </div>
                            </div>
                            <!-- /.box-body -->

                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary">提交</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
            </div>
        </section>
    </div>
</template>