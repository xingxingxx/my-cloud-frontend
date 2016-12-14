<template>
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
                            <tr v-for="bookmark in bookmarks">
                                <td>{{ bookmark.id }}.</td>
                                <td><a v-bind:href="bookmark.url" target="_blank">{{ bookmark.title }}</a></td>
                                <td>{{ bookmark.category_id }}</td>
                                <td>{{ bookmark.created_at }}</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" v-on:click="editData(bookmark)">
                                        <i class="fa fa-edit"></i> 编辑
                                    </button>
                                    <button class="btn btn-danger btn-xs" v-on:click="deleteData(bookmark.id)">
                                        <i class="fa fa-trash"></i>删除
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
                                <button class="btn btn-primary btn-sm" v-on:click="createData">
                                    <i class="fa fa-plus"></i> 添加
                                </button>
                            </div>
                            <div class="col-sm-7 clearfix">
                                <pagebar :cur="cur" :all="all" v-on:page-change="fetchData"></pagebar>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- /.box -->
        </div>
        <!-- /.col -->
        </div>
        <create :showCreate="showCreate" v-on:save-data="fetchData"></create>
        <edit :showEdit="showEdit" :origin_bookmark="origin_bookmark" v-on:save-data="fetchData"></edit>
    </section>
</template>

<script>
  import pagebar from '../unit/pagebar'
  import create from './create.vue'
  import edit from './edit.vue'
  export default {
    data: function (router) {
      return {
        cur: 1,
        all: 0,
        bookmarks: null,
        origin_bookmark: {},
        showCreate: false,
        showEdit: false
      }
    },
    components: {
      pagebar,
      create,
      edit
    },
    created () {
      this.fetchData(this.cur)
    },
    methods: {
      fetchData (page) {
        this.cur = page
        this.showCreate = false
        this.showEdit = false
        var store = this.$store
        store.commit('TOGGLE_LOADING')
        this.$http.get(store.state.serverURI + '/bookmarks?page=' + page).then(function (response) {
          store.commit('TOGGLE_LOADING')
          this.all = response.data.last_page
          this.bookmarks = response.data.data
        }, function (response) {
          store.commit('TOGGLE_LOADING')
          if (response.data.status_code === 401) {
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
      createData () {
        this.showCreate = true
      },
      editData (bookmark) {
        this.showEdit = true
        this.origin_bookmark = bookmark
      },
      deleteData (id) {
        var store = this.$store
        store.commit('TOGGLE_LOADING')
        this.$http.delete(store.state.serverURI + '/bookmarks/' + id).then(function (response) {
          store.commit('TOGGLE_LOADING')
          this.fetchData(this.cur)
        }, function (response) {
          store.commit('TOGGLE_LOADING')
          if (response.data.status_code === 401) {
            this.$store.commit('SET_USER', null)
            this.$store.commit('SET_TOKEN', null)
            if (window.localStorage) {
              window.localStorage.setItem('user', null)
              window.localStorage.setItem('token', null)
            }
            this.$router.push('/login')
          }
        })
      }
    }
  }
</script>