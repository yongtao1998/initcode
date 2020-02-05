// 所有接口的基地址
var BASEURL = 'http://localhost:8000'


// 用来保存所有的接口信息
var APILIST = {

    // 获取文章分类
    category_get: BASEURL + '/category',

    // 获取文章
    article_get: BASEURL + '/search',

    // 获取热门文章排行
    article_rank: BASEURL + '/rank',

    // 最新文章
    article_last: BASEURL + '/lastest'
}