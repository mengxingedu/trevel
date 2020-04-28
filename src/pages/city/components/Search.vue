<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市地址">
    </div>
</template>

<script>
export default{
    name : 'CitySearch'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        text-align center
        color #666
        border-radius .06rem
</style>