import Media from './media';

class Movie {
	constructor(title, year, duration) {
		super(title, duration)
		this._year = year
	}
}

Movie.prototype.toHtml = function(){
    return `<div class="row py-3 ${this._isPlaying ? 'current': ''}">
    <div class="col-sm-9">${this._title} - ${this._year}</div>
    <div class="col-sm-3">${this._duration}</div>
</div>`
}

export default Movie;