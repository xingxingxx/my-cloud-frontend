<template>
    <section class="content-header">
        <h1>
             {{ $route.name }}
            <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="/"><i class="fa fa-home"></i>home</a></li>
            <li class="active">{{ $route.name }}</li>
        </ol>
    </section>
</template>
