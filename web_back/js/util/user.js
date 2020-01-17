class User {
    // constructor() {
    // }
    login(name, password) {
        return $.post(APILIST.login, {
            'user_name': name,
            'password': password
        })
    }
    logout() {
        return $.post(APILIST.logout)
    }
    getInfo() {
        return $.get(APILIST.getInfo)
    }
}