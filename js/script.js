$(document).ready(function() {    
    var searchValue = "emoji";
    // show example Search values as buttons
   const topics = ["Internet Cats", "Meme's", "Trump","Putin","emoji","ryan+gosling", "sunset","Typing", "Space", 
                   "Rick and Morty", "pope", "dogs", "cats", "cities", "corona", "trending", "random", "stickers"];
 
   function addSearchBtns() {
         $("#searchbtns").empty();
         for (i = 0; i < topics.length; i++) {
           var $button = $("<input type='button' style='border: blue 2px solid;' class='btn btn-sm btn-default search-btn' />");          
           $button.val(topics[i]);
           $("#searchbtns").append($button);
         }        
   }
   /*    detect key down even on all and perform search based on text entered in the search box        */
   $("*").keydown(function(event){ 
    switch(event.which){
      case 13:
      var event = jQuery.Event( "click" );      
        $( "#searchBtn" ).trigger( event );
        if ( event.isDefaultPrevented() ) {
           return event.preventDefault(); // stops any further actions           
        }         
         break;  
      case 27: 
         $("#searchtext").val("");
         $("#searchcount").val("");
         break;
      default: break;
     }
  });   
  function createMarkup(id) {
     return `       
         <div class="col-sm-12 col-md-6 col-lg-2">
              <figure id="picture" class="picture">
                <div class="picture-shadow gif-box"></div>
                   <img id="pictureImage${id}" class="picture-image" src="" alt="GIPHY Images">
              </figure>
           </div>          
     `
 }
 
 
 
 function addRowsAndColumns(rows) {
         $("#results").empty();
         for (i = 0; i < rows; i++) {
           let idd = `rowDiv${i}`;
           var $rowtag = $(`<div id='rowDiv${idd}' class='row'>`); 
           $("#results").append($rowtag);
             for (ii = 1; ii <= 6; ii++) {  
                 $(`#rowDiv${idd}`).append(createMarkup(ii+(i*6)));               
           }
     }
  }
 
  
 
 function wireupUpSearchTextBtnsClick() {
     $(".search-btn").on("click", function(e){          
       $("#searchtext").val($(this).val());
       if ($("#searchtext").val() == 'stickers'){              
         SearchStickers();
       }
       else{                      
         SearchGIPHY($("#searchtext").val()); 
       }        
     })
   }
 
  
   function wireupUpSearchBtnClick() {      
     $("#searchBtn").on("click", function(){
       let searchValue = $("#searchtext").val();                   
       if (searchValue.toLowerCase() === 'stickers'){              
         SearchStickers();
       }
       else{                  
         SearchGIPHY(searchValue);  
       } 
     })
   }
      
  function getData (searchstr){
     let maxcount = parseInt($("#searchcount").val());
     maxcount = isNaN(maxcount) ? 1 : maxcount;    
     if (maxcount > 6 ) {
         maxcount = 6;
     }
     let apiKey= 'pvDngRPumUCm81fZop5tnXvRN7YBWFM7'
     let searchvalue =  searchstr.length > 0 ? searchstr : 'emoji'
     let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=${apiKey}&limit=${maxcount*6}`;     
     return $.get(giphyAPI);
 }
 
  function SearchGIPHY(searchstr){            
   $.when(getData(searchstr)).done(function(json){                 
         let fullrows = Math.floor(json.data.length/6);               
         addRowsAndColumns(Math.round(fullrows)); 
         for(i = 0; i < json.data.length; i++){
           let id =  `pictureImage${i+1}`;                  
           document.getElementById(id).setAttribute("src", json.data[i].images.original.url);              
         }
       json = undefined;
   }).catch(err => alert(err));
  }
 
  function getStickers (){    
     let maxcount = parseInt($("#searchcount").val());
     maxcount = isNaN(maxcount) ? 1 : maxcount;        
     if (maxcount > 6 ) {
         maxcount = 6;
     }
     let apiKey= 'pvDngRPumUCm81fZop5tnXvRN7YBWFM7'
     let searchvalue = 'random'    
     let giphyAPI = `https://api.giphy.com/v1/stickers/search?q=${searchvalue}&api_key=${apiKey}&limit=${maxcount*6}`;    
     return $.get(giphyAPI);
 }
 
  function SearchStickers(){     
   $.when(getStickers()).done(function(json){          
         let fullrows = Math.round(json.data.length/6);         
         addRowsAndColumns(Math.round(fullrows));                                
         for(i = 0; i < json.data.length; i++){
           let id =  `pictureImage${i+1}`;                  
           document.getElementById(id).setAttribute("src", json.data[i].images.original.url);
         }
       
   }).catch(err => alert(err));
  }
  
 addSearchBtns();
 wireupUpSearchTextBtnsClick();
 wireupUpSearchBtnClick();
 
 })