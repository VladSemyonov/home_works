class Media {
	constructor(title, duration){
	this._title = title;
	this._duration = duration;
	this._isPlaying = false;}
}

Media.prototype.play = function() {
	this._isPlaying = true;
}
Media.prototype.stop = function() {
	this._isPlaying = false;
}

export default Media;