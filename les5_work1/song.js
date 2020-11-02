import Media from './media';

class Song {
	constructor(title, artist, duration){
		super(title, duration)
		this.artist = artist;
	}
}

Song.prototype.toHtml = function(){
    return `<div class="row py-3 ${this._isPlaying ? 'current': ''}">
    <div class="col-sm-9">${this._title} - ${this._artist}</div>
    <div class="col-sm-3">${this._duration}</div>
</div>`
}

export default Song;