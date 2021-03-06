// 配置文件
// 所有接口的基地址
const BASEURL = 'http://localhost:8000'
    // var BASEURL = 'http://39.99.130.177:8000'

// 保存所有的接口信息
let APILIST = {

    // 获取文章分类
    category_get: BASEURL + '/category',

    // 获取文章
    article_get: BASEURL + '/search',

    // 获取热门文章排行
    article_rank: BASEURL + '/rank',

    // 最新文章
    article_last: BASEURL + '/lastest',

    // 获取文章详情
    article_detail: BASEURL + '/article',

    // 添加评论
    comment_add: BASEURL + '/post_comment',
    // 获取评论
    comment_get: BASEURL + '/get_comments'
}