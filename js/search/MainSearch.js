class Search {
    constructor(movie) {
        this.movie = movie
    }

    search(query) {
        return this.filterMovie(query)
    }
}


class MovieNameSearch extends Search {
    constructor(movie) {
        super(movie)
    }

    filterMovie(query) {
        return this.movie.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
    }
}


class ActorNameSearch extends Search {
    constructor(movie) {
        super(movie)
    }

    filterMovie(query) {
        return this.movie.filter(movie => movie.actor.toLowerCase().includes(query.toLowerCase()))
    }
}