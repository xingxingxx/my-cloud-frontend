<template>
    <div>
        <section class="content-header">
            <h1>
                阅读文章
                <small>create post</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li>
                    <route-link to="/book"><i class="fa fa-paper-plane"></i> 云文章</route-link>
                </li>
                <li class="active">阅读文章</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">文章内容</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <h3>怎样用通俗的语言解释什么叫 REST，以及什么是 RESTfull</h3>
                            <p>作者：谭超 &nbsp; &nbsp; &nbsp; &nbsp;时间：2016-11-24 11:11:11</p>
                            <p style="line-height:24px;">
先说REST名称 REST -- REpresentational State Transfer
首先，之所以晦涩是因为前面主语被去掉了，全称是 Resource Representational State Transfer：通俗来讲就是：资源在网络中以某种表现形式进行状态转移。分解开来：
Resource：资源，即数据（前面说过网络的核心）。比如 newsfeed，friends等；
Representational：某种表现形式，比如用JSON，XML，JPEG等；
State Transfer：状态变化。通过HTTP动词实现。
REST的出处
Roy Fielding的毕业论文。这哥们参与设计HTTP协议，也是Apache Web Server项目（可惜现在已经是 nginx 的天下）的co-founder。PhD的毕业学校是 UC Irvine，Irvine在加州，有着充裕的阳光和美丽的海滩，是著名的富人区。Oculus VR 的总部就坐落于此（虚拟现实眼镜，被FB收购，CTO为Quake和Doom的作者 John Carmack）。
众说周知，论文都是晦涩难懂的。当年在CMU读书的时候，很多课程都会安排每周两篇的Paper review。现在回想起来每次写Paper review都是我最为痛苦的时候。REST这篇博士论文毫无疑问更甚。
论文地址：Architectural Styles and the Design of Network-based Software Architectures
REST章节：Fielding Dissertation: CHAPTER 5: Representational State Transfer (REST)
REST那章我初读了，整个论文没有读完 =_=
                            </p>
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer clearfix">
                            <a href="#">上一篇：web 研发这路</a>
                            <a href="#" class="pull-right">下一篇：什么是RESTFull</a>
                        </div>
                    </div>
                </div>
        </section>
    </div>
</template>