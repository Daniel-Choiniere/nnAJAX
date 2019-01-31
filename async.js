/*global $*/
window.onload = function() {
    // example of a JS generator, use the * to declare a generator
    // function* gen(){
    //     let x = yield 10;
    //     console.log(x);
    // }
    
    //     // first time myGen is fired it yields the result from the function - result is 10 and done property id FALSE
    // let myGen = gen();
    // console.log(myGen.next());
    //     // second time myGen is fired there is nothing to yield - result is undefined and done property is TRUE
    // console.log(myGen.next());
    //     // can pass a value back to the generator by including value in parentheses
    // console.log(myGen.next(10));
    
    
    genWrap(function* (){
        var tweets = yield $.get("tweets.json");
        console.log(tweets);
        var friends = yield $.get("friends.json");
        console.log(friends);
        var videos = yield $.get("videos.json");
        console.log(videos);
    });
    
    function genWrap(generator) {
        
        let gen = generator();
        
        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(function(data){
                    return handle(gen.next(data));
                })
            }
        }
        
        return handle(gen.next());
    }
};            

