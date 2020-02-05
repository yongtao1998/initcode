class Category {

    //获取
    get() {
            return $.get(APILIST.category_get)
        }
        // 添加文章类型
    add(name, slug) {
            return $.post(APILIST.category_add, {
                'name': name,
                'slug': slug
            })
        }
        // 删除文章类型
    del(id) {
            return $.post(APILIST.category_del, {
                'id': id
            })
        }
        // 编辑文章类型
    edit(id, name, slug) {
        return $.post(APILIST.category_edit, {
            'id': id,
            'name': name,
            'slug': slug
        })
    }


}
var category = new Category()