/*global $*/
window.onload = function() {

    function handleError(jqXHR, textStatus, error){
        console.log(error);
    }
    
//  // CALLBACK FUNCTION "HELL" 
//     $.ajax({
//         type: "GET",
//         url: "tweets.json",
//         success: function(data){
//             console.log(data);
            
//             $.ajax({
//                 type: "GET",
//                 url: "friends.json",
//                     success: function(data){
//                         console.log(data);
                
//                 $.ajax({
//                     type: "GET",
//                     url: "videos.json",
//                         success: function(data){
//                             console.log(data);
//         },
//         error: handleError
//     });
//             },
//             error: handleError
//         });
//                 },
//                 error: handleError
//             });

// 
    // CLEANER WAY TO HANDLE MULTIPLE SEQUENTIAL CALLBACKS USING ASYNCHRNOUS FUNCTIONS 
    // (STILL NOT BEST WAY, PROMISES ARE AN EVEN BETTER WAY (WILL COVER IN NEXT VERSION)
    $.ajax({
        type: 'GET',
        url: "tweets.json",
        success: cbTweets,
        error: handleError
    });
    
    function cbTweets(data){
        console.log(data);
        $.ajax({
            type: 'GET',
            url: "friends.json",
            success: cbFriends,
            error: handleError
        });
        
    }
    
    function cbFriends(data) {
        console.log(data);
        $.ajax({
            type: 'GET',
            url: "videos.json",
            success: function(data){
                console.log(data);
            },
            error: handleError
        });
    }
};                                                                                                                                                                                                                                                                          