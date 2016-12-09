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
                            <tr v-for="article in articles">
                                <td>{{ article.id }}.</td>
                                <td>{{ article.title }}</td>
                                <td>{{ article.category_id }}</td>
                                <td><span class="label label-default">{{ article.abstract }}</span></td>
                                <td>{{ article.created_at }}</td>
                                <td>
                                    <router-link to="/bookmark/edit" class="btn btn-primary btn-xs">
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
                               <pagebar :cur.sync="cur" :all.sync="all" v-on:page-change="fetchData"></pagebar>
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

<script>
  import pagebar from '../unit/pagebar'
  export default {
    data: function (router) {
      return {
        cur: 1,
        all: 0,
        articles: null
      }
    },
    components: {
      pagebar
    },
    created () {
      this.fetchData(this.cur)
    },
    methods: {
      fetchData (page) {
        this.cur = page
        var store = this.$store
        store.commit('TOGGLE_LOADING')
        this.$http.get(store.state.serverURI + '/articles?page=' + page).then(function (response) {
          store.commit('TOGGLE_LOADING')
          this.all = response.data.last_page
          this.cur = response.data.current_page
          this.articles = response.data.data
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
