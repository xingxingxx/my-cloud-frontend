<template>
    <div class="modal" v-bind:style="'display:'+(showCategory?'block':'none')">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" v-on:click="close" aria-label="Close">
                        <span aria-hidden="true">×</span></button>
                    <h4 class="modal-title">新增书签</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>书签名称</label>
                        <input type="text" class="form-control" v-model="bookmark.title" placeholder="为空则系统自动提取">
                    </div>
                    <div class="form-group">
                        <label>书签路径</label>
                        <input type="text" class="form-control" v-model="bookmark.url" placeholder="请将链接粘贴到此处">
                    </div>
                    <div class="form-group">
                        <label>分类</label>
                        <select class="form-control" v-model="bookmark.category_id">
                            <option value="1">论坛社区</option>
                            <option value="2">客户网站</option>
                            <option value="3">开发工具</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" v-on:click="close">关闭</button>
                    <button type="button" class="btn btn-primary" v-on:click="saveData">提交</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>
