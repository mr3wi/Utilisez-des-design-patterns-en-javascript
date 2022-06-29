class UserConnectedState {
    constructor() {
        this.isConnected = true
        this.User = new User()
    }

    getUser() {
        return new User()
    }
}

class AnonymousUserState {
    constructor() {
        this.isConnected = false
        this.User = User
    }

    getUser() {
        return new User()
    }
}