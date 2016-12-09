<template>
    <div class="modal" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <router-link to="/bookmark/create" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span></button>
                    </router-link>
                    <h4 class="modal-title">新增云书签</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">书签名称</label>
                        <input type="text" class="form-control" id="name"
                               placeholder="自定义书签名称">
                        <p class="help-block">为空则系统自动填写</p>
                    </div>
                    <div class="form-group">
                        <label for="url">书签路径</label>
                        <input type="text" class="form-control" id="url"
                               placeholder="网站路径">
                        <p class="help-block">如：http://www.example.com</p>
                    </div>
                    <div class="form-group">
                        <label for="category_id">分类</label>
                        <select class="form-control" id="category_id">
                            <option value="1">论坛社区</option>
                            <option value="2">客户网站</option>
                            <option value="3">开发工具</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <router-link to="/bookmark" class="btn btn-default pull-left" data-dismiss="modal">取消</router-link>
                    <button type="button" class="btn btn-primary">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>