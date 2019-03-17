
//var url = https://openapi.etsy.com/v2/shops/fawnsoaps/listings/active.js?includes=MainImage',
    

//key = '754ofp3jjnqjjschipimydaq';
// 'https://openapi.etsy.com/v2/users/126850878/feedback/from-buyers?api_key=754ofp3jjnqjjschipimydaq'


    // etsy variables



    

     

    var url = 'https://openapi.etsy.com/v2/users/126850878/feedback/from-buyers.js?includes=image_feed_url'
   

        var set,
        page,
        limit = 15

        
           
    // get data
    function getData(page) {
        $.ajax({
            url: url,
            data: {
                api_key: config.key, 
                limit: limit,
                offset: page
            },
            dataType: 'jsonp',
            success: function (data) {
                console.log(data)
                console.log(data.count)
                if (data.ok) {
                        // for each listing... *
                        for (var i = 0; i < data.results.length; i++) {
                            // * assign listing variables
                            var item = data.results[i];         
                            var message = item.message;
                            var value = item.value;
                            var id = item.creation_tsz; 
                            
                                           
                           
                            // * build html structure for each listing
                            var listing = '<div class="item">\
                                <p class="item-message"> ' + message + '</p>\
                                </div>';              
                            

                                 $('.item-list').append(listing).css({
                                    'opacity': '1',
                                'transition': 'none'
                                })                     
                                           

                                const review = document.querySelectorAll('.item')  
                                 
                                   
                            
                            if(message === null){
      
                               review[i].style.display = 'none'
                            
                            }

                        }
                                             
                        
                    } else {
                        console.log('no results');
                    }
                }
            });


        
        
        
   }

   getData()

