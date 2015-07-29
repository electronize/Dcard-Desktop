var request = require('request');

module.exports = {

  forumRequest: function(ForumName) {
    request('https://www.dcard.tw/api/forum/' + ForumName + '/1/popular', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var postsJson = JSON.parse(body);

        // console.log(postsJson);
        var domName = '#' + ForumName + 'posts';

        for (var i = 0, postsCount = postsJson.length; i < postsCount; i++) {

          var postThread = '<tr><td>' + postsJson[i].likeCount + '</td><td>' + postsJson[i].comment + '</td><td>' + postsJson[i].version[0].title + '</td><td>' + postsJson[i].member.gender + ' ' +  postsJson[i].member.school  + '</td></tr>';

          $(domName).append(postThread);
        }
      }
    });
  },

};
