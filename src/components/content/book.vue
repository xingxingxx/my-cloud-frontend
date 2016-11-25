<template>
    <div>
        <section class="content-header">
            <h1>
                云书签
                <small>book</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li class="active">云书签</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">云书签列表</h3>
                            <div class="box-tools">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control pull-right"
                                           placeholder="输入书签名称">

                                    <div class="input-group-btn">
                                        <button type="submit" class="btn btn-default"><i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table class="table table-bordered table-hover">
                                <tbody>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>名称</th>
                                    <th>分类</th>
                                    <th>创建时间</th>
                                    <th style="width: 140px">操作</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td><a href="https://laravel-china.org/" target="_blank">laravel中文社区</a></td>
                                    <td>论坛社区</td>
                                    <td>2016-11-15 11:30:22</td>
                                    <td>
                                        <router-link to="/book/edit" class="btn btn-primary btn-xs">
                                            <i class="fa fa-edit"></i> 编辑
                                        </router-link>
                                        <a href="#" class="btn btn-danger btn-xs"><i
                                                class="fa fa-trash"></i> 删除</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td><a href="https://github.com/" target="_blank">github</a></td>
                                    <td>开发工具</td>
                                    <td>2016-11-15 11:30:22</td>
                                    <td>
                                        <router-link to="/book/edit" class="btn btn-primary btn-xs">
                                            <i class="fa fa-edit"></i> 编辑
                                        </router-link>
                                        <a href="#" class="btn btn-danger btn-xs"><i
                                                class="fa fa-trash"></i> 删除</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer" style="border:none;">
                            <div class="row">
                                <div class="col-sm-5">
                                    <router-link to="/book/create" class="btn btn-primary btn-sm">
                                        <i class="fa fa-plus"></i> 添加
                                    </router-link>
                                    <router-link to="/book/create" class="btn btn-primary btn-sm">
                                        <i class="fa fa-upload"></i> 导入
                                    </router-link>
                                    <router-link to="/book/create" class="btn btn-primary btn-sm">
                                        <i class="fa fa-download"></i> 导出
                                    </router-link>
                                </div>
                                <div class="col-sm-7 clearfix">
                                    <ul class="pagination pagination-sm no-margin pull-right">
                                        <li><a href="#">«</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
    </div>
    </section>
    </div>
</template>
