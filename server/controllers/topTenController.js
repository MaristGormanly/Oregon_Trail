var topTen = require('../models/topTen');

exports.currentTopTen = [];
exports.currentTopTen.push(topTen.getNewTopScore("NickLax24", 100));
exports.currentTopTen.push(topTen.getNewTopScore("BubbaDog", 110));
exports.currentTopTen.push(topTen.getNewTopScore("SoupMyeon", 350));
exports.currentTopTen.push(topTen.getNewTopScore("Sneevik", 30));
exports.currentTopTen.push(topTen.getNewTopScore("Akimbro", 30));


exports.getTopScores = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(exports.currentTopTen);
}

exports.saveTopScore = function(req, res) {
	var newTopScore = topTen.getNewTopScore(req.body.playerName, req.body.playerScore);
	exports.currentTopTen.push(newTopScore);

	res.setHeader('Content-Type', 'application/json');
	res.send(exports.currentTopTen);
}