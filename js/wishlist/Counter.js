class WishListCounter {
    constructor() {
        this._count = 0
        this._wishCount = document.querySelector('.wish-count')
    }

    update(action) {
        if (action === 'INC') {
            this._count += 1
        } else if (action === 'DEC') {
            this._count -= 1
        } else {
            throw 'Unknow action'
        }

        this._wishCount.innerHTML = this._count
    }
}