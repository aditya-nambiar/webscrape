


var casper = require('casper').create({
	verbose: true,
	userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36',
    logging:'debug'
});
	


var x = require('casper').selectXPath;

casper.userAgent('Mozilla4.0 (comptible MSIE 6.0; Windows NT 5.1)');
casper.start('https://www.facebook.com/');
var friends = [];
var tp=["aa","bb"];
casper.wait(3000,function(){

	casper.then(function(){
		this.sendKeys(x('//*[@id="email"]'),'aditya.nambiar007@gmail.com');
		this.sendKeys(x('//*[@id="pass"]'),'csemaxxx007');	
		// casper.this.test.assertExists(x('//*[@id="u_0_4"]'), 'the element exists');
		casper.then(function(){
			if(this.exists('#u_0_n'))
			this.click('#u_0_n');
			else if(this.exists('#u_0_4'))
			this.click('#u_0_4');
			else if(this.exists('#u_0_h'))
			this.click('#u_0_h');
		});
		casper.then(function(){
			this.echo(this.getCurrentUrl());
		});
		casper.wait(3000,function(){this.capture('login.png');});
	});
	
});


casper.wait(6000,function(){
 	
	casper.then(function(){
		this.capture('hi.png');
		
		casper.thenOpen('https://www.facebook.com/aditya.nambiar.97/friends_all',function(){

            for(var i=0; i<40; i++){
                this.scrollToBottom();
                this.wait(1000);
            }

        });




        casper.wait(3000,function(){
			this.capture('friends.png');
			this.echo(this.getCurrentUrl());
				
		});

		casper.echo("p"+this.getTitle());


            this.evaluate(function(){

            });
        //this.echo(this.getHTML('')); // => 'Plop'
       /* casper.then(function() {
            this.echo(this.getPageContent());
        });*/
		casper.then(function(){
			casper.capture('wow.png')
		});

		casper.wait(2000,function(){

			this.echo("FGFDG");
            casper.on("remote.message", function(message) {
                this.echo("remote console.log: " + message);
            });
			this.evaluate(function(){

                console.log("aa");
                var t = document.querySelectorAll('._698>div>a');
                console.log("Total items "+ t.length);
                for(var j=0; j<19; j++){
                    console.log(t[j]+"\n");
                   // friends.push(t[j]);
                }
                for(var j=0; j<19; j++){
                    console.log(t[j]+"\n");
                     friends.push(t[j]);
                }

                console.log("Total items "+document.querySelectorAll('._698>div>a').length );
				[].forEach.call(
					document.querySelectorAll('._698>div>a'),
					function(el){
						var e=el.getAttribute("href");

                        console.log(e);

					}
				);


			});
		});
	});
});

casper.then(function(){

    this.echo("here");
    for(var i=0; i<friends.length; i++){
        this.echo(friends[i]);
    }
    for(var i=0; i<tp.length; i++){
        this.echo(tp[i]);
    }

});
casper.then(function(){
    casper.exit();
});

casper.run();
	