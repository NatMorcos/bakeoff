var functions = require('./functions');

module.exports = function(primus){

	primus.on('connection', function(spark){
	  
		spark.on('voter join', function(callback){
      spark.join('votingRoom', function(){
				callback && callback();
				console.log('new voter registered!!')
			});
		});

		spark.on('results board join', function(callback){
			spark.join('votingRoom', function(){
				callback && callback();
				console.log('results board up and listening');
        spark.room('votingRoom').send('load results', functions.listCookies());
      });
    });

    spark.on('registrar join', function(callback){
      spark.join('votingRoom', function(){
        console.log('ready to register cookies (^.^)');
        callback && callback();
      });
    });

    spark.on('register cookie', function(data){
      console.log(data);
      functions.addCookie(data);
      console.log("========");
      console.log(functions.listCookies());
      console.log("========");
      spark.room('votingRoom').send('cookie registered', data);
    });
  });

	primus.on('disconnection', function(spark){
		spark.leave('votingRoom');
		console.log("somebody's gone! Hope it's not the noise maker.");
	});

}