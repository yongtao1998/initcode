// 与文章分类相关的操作
var category = {
    // 获取
    get: function() {
        return $.get(APILIST.category_get)
    }
}