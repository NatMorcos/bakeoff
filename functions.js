var sqlite3 = require('sqlite3').verbose();
var cookies = {};

function initCookie(cookieName, bakerName){
    return { 
        "cookieName": cookieName,
        "bakerName": bakerName,
        "votes": {
            "taste": 0,
            "texture": 0,
            "presentation": 0,
            "nameCreativity": 0
        }
    }
}


exports.addCookie = function(cookieInfo){
    cookies[cookieInfo.cookieName] = initCookie(cookieInfo.cookieName, cookieInfo.bakerName);
    console.log("%s cookie registered on nom nom nom", cookieInfo.cookieName)
}


exports.listCookies = function(){
    return cookies
}

exports.vote = function(req, res){
    for(cookie in req.params.cookies){
        for(vote in cookie.votes){
        cookies[cookie.cookieName].votes += cookie.votes[vote];
      }
    }
    console.log(cookies);
}