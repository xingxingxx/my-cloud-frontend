<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">云书签分类列表</h3>
            <div class="box-tools">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control pull-right"
                       placeholder="输入分类名称">

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
                <th style="width: 140px">操作</th>
              </tr>
              <tr v-for="(category, index) in categories">
                <td>{{ index+1 }}.</td>
                <td>{{ category.name }}</td>
                <td>
                  <button class="btn btn-primary btn-xs" v-on:click="editData(category)">
                    <i class="fa fa-edit"></i> 编辑
                  </button>
                  <button class="btn btn-danger btn-xs">
                    <i class="fa fa-trash"></i> 删除
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
          <div class="box-footer" style="border:none;">
            <div class="row">
              <div class="col-sm-5">
                <button class="btn btn-primary btn-sm">
                  <i class="fa fa-plus"></i> 添加
                </button>
                <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
                <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
    </div>
    <form id="edit" style="display: none;" role="form">
      <div class="box-body">
        <div class="form-group">
          <label>分类名称</label>
          <input type="text" class="form-control" v-model="origin_category.name">
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
          <button type="button" class="btn btn-primary do-save pull-right">保存</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    data: function (router) {
      return {
        categories: null,
        radio: 1,
        origin_category: {}
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        var store = this.$store
        store.commit('TOGGLE_LOADING')
        this.$http.get(store.state.apiHost + '/bookmark/category').then(function (response) {
          store.commit('TOGGLE_LOADING')
          this.categories = response.data.data
        }, function (response) {
          store.commit('TOGGLE_LOADING')
          if (response.status === 401) {
            this.$store.commit('SET_USER', null)
            this.$store.commit('SET_TOKEN', null)
            if (window.localStorage) {
              window.localStorage.setItem('user', null)
              window.localStorage.setItem('token', null)
            }
            this.$router.push('/login')
          }
        })
      },
      editData (category) {
        this.origin_category = category
      }
    }
  }
</script>
