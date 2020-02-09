// 与文章分类相关的操作
class Category {
    // 获取
    get() {
        return $.get(APILIST.category_get)
    }
}
var category = new Category()