<template>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">文章列表</h3>
                        <div class="box-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control pull-right"
                                       placeholder="输入文章标题">

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
                                <th>标题</th>
                                <th>分类</th>
                                <th>标签</th>
                                <th>创建时间</th>
                                <th style="width: 140px">操作</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>
                                    <router-link to="/article/show">
                                        Web 研发模式演变
                                    </router-link>
                                </td>
                                <td>前端开发</td>
                                <td>
                                    <span class="label label-default">web</span>
                                    <span class="label label-default">架构</span>
                                </td>
                                <td>2016-11-15 11:30:22</td>
                                <td>
                                    <router-link to="/article/edit" class="btn btn-primary btn-xs">
                                        <i class="fa fa-edit"></i> 编辑
                                    </router-link>
                                    <a href="#" class="btn btn-danger btn-xs"><i
                                            class="fa fa-trash"></i> 删除</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>
                                    <router-link to="/article/show">
                                        什么是 RESTful?
                                    </router-link>
                                </td>
                                <td>设计模式</td>
                                <td>
                                    <span class="label label-default">php</span>
                                    <span class="label label-default">架构</span>
                                </td>
                                <td>2016-11-15 11:30:22</td>
                                <td>
                                    <router-link to="/article/edit" class="btn btn-primary btn-xs">
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
                                <router-link to="/article/create" class="btn btn-primary btn-sm">
                                    <i class="fa fa-plus"></i> 添加
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
</template>