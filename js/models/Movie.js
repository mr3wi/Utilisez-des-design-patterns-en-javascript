class Movie {
  constructor(data) {
    this._title = data.title
    this._duration = data.duration
    this._synopsis = data.synopsis
    this._picture = data.picture
    this._released_in = data.released_in
  }

  get title() {
    if (this._title.hasOwnProperty('fr')) {
      return this._title.fr
    } else {
      return this._title.en
    }
  }

  get duration() {
    const hours = Math.floor(this._duration / 60)
    const minutes = this._duration % 60
    return `${hours}h${minutes}`
  }

  get synopsis() {
    return this._synopsis
  }

  get picture() {
    return `./assets/${this._picture}`
  }

  get thumbnail() {
    return `./assets/thumbnails/${this._picture}`
  }

  get released_in() {
    return this._released_in
  }
}
