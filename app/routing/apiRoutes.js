var friendsList = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/firends", function (req, res) {
        res.json(freindsList);
    });

    app.post("/api/firends", function (req, res) {
        var userScore = req.body.scores;
        var scoresArray = [];
        var bestFriend = 0;

        for (var i = 0; i < friendsList.length; i++) {
            var scoreResults = 0

            for (var j = 0; j < userScore.length; j++) {
                scoreResults += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(userScore[j])));
            }

            scoresArray.push(scoreResults);
        }

        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestFriend]) {
                bestFriend = i;
            }
        }

        res.json(friendsList[bestFriend]);

        freindsList.push(req.body);
    });
};