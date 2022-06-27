class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        
        this.newMoviesApi = new MovieApi('./data/new-movie-data.json')
        this.externalMovieApi = new MovieApi('./data/external-movie-data.json')
    }

    async main() {
        const newMoviesData = await this.newMoviesApi.getMovies()
        const externalMoviesData = await this.externalMovieApi.getMovies()

        const NewMovies = newMoviesData
            .map(movie => new MoviesFactory(movie, 'newApi'))

        const ExternalMovies = externalMoviesData
            .map(movie => new MoviesFactory(movie, 'externalApi'))

        const FullMovies = NewMovies.concat(ExternalMovies)
        
        FullMovies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
