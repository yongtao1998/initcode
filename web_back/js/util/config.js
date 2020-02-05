// 根地址
var BASEURL = 'http://localhost:8000'

//用来保存所有的接口信息
var APILIST = {
    login: BASEURL + '/admin/login',
    logout: BASEURL + '/admin/logout',
    getInfo: BASEURL + '/admin/getuser',

    // 获取文章分类
    category_get: BASEURL + '/admin/category_search',
    // 添加文章分类
    category_add: BASEURL + '/admin/category_add',
    // 删除文章分类
    category_del: BASEURL + '/admin/category_delete',
    // 编辑文章分类
    category_edit: BASEURL + '/admin/category_edit',

    // 获取文章
    article_get: BASEURL + '/admin/search',
    // 删除文章
    article_del: BASEURL + '/admin/article_delete',
    // 添加文章
    article_add: BASEURL + '/admin/article_publish',
    // 保存文章的修改
    article_edit: BASEURL + '/admin/article_edit'
}