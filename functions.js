// var currentInstrument = 0
//     , currentRank = 0
//     , numInstruments= 5;


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


// function moveToNextPosition(){
//     if(currentInstrument == numInstruments - 1){
//         currentInstrument = 0;
//         currentRank++;
//     } else {
//         currentInstrument++;
//     }
// }

// exports.assign = function(req, res){
//     var newPosition = {
//         "instrument": currentInstrument,
//         "number": currentRank
//     };
//     moveToNextPosition();
//     res.json(newPosition);
// }

// exports.canPlayNow =  function(rank){
//     var cycleProgress = Date.now() % (5 * 30000)
//         , interval = Math.floor(cycleProgress / 30000);

//     //enable for building fun stuff!
//     return true;
//     // return (rank == interval);
// }


exports.addCookie = function(cookieInfo){
    cookies[cookieInfo.cookieName] = initCookie(cookieInfo.cookieName, cookieInfo.bakerName);
    console.log("cookie created!")
}


exports.listCookies = function(req, res){
    res.json(cookies);
}

exports.vote = function(req, res){
    for(cookie in req.params.cookies){
        for(vote in cookie.votes){
        cookies[cookie.cookieName].votes += cookie.votes[vote];
      }
    }
    console.log(cookies);
}