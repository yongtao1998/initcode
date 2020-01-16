var user = {
    login: function(name, password) {
        // $.post()  返回的是一个对象 
        // 这个对象有then方法，then()的功能 是获取返回的数据
        return $.post(APILIST.login, {
            'user_name': name,
            'password': password
        })
    },
    logout: function() {
        return $.post(APILIST.logout)
    },
    getInfo: function() {
        return $.get(APILIST.getInfo)
    }
}