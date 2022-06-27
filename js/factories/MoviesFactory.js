class MoviesFactory {
  constructor(data, type) {
    // Si le type correspond à l'ancienne API, alors retourne moi l'ancien formattage
    if (type === 'oldApi') {
        return new OldMovie(data)
      // sinon on retourne le nouveau formattage
    } else if (type === 'newApi') {
        return new Movie(data)
    } else {
        throw "Unknow format type"
    }
  }
}