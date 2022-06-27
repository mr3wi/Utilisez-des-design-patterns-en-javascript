class MoviesFactory {
    constructor(data, type) {
        // Si le type correspond au nouveau API, alors retourne moi le nouveau formattage
        if (type === 'newApi') {
            return new Movie(data)
        // Sinon retourne moi le formattage Externe
        } else if (type === 'externalApi') {
            return new ExternalMovie(data)
        // Une bonne pratique est de throw une erreur si le format n'est pas reconnu
        } else {
            throw 'Unknown type format'
        }
    }
}
