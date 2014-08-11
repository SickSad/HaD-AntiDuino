console.log("HackADay-AntiDuino");

function getPostsByCatagory(cat){
    var posts = document.getElementsByClassName('post');
    var round = [];
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var tagged = false;
        var categories = post.getElementsByClassName('categories');
        for (var j = 0; j < categories.length; j++) {
            if (categories[j].innerHTML.indexOf(cat) > -1){
                tagged = true;
            }
        };
        if (tagged){
            round.push(post);
        }
    };
    return round;
}

function removeArduinoHacks(){
    var toRemove = getPostsByCatagory('Arduino Hacks');
    for (var i = 0; i < toRemove.length; i++) {
        var post = toRemove[i];
        post.parentElement.removeChild(post);
        post.remove();
    };    
}

function textNodesUnder(el){
    //http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    return a;
}

function replaceArduinoWithX(text){
    var nodes = textNodesUnder(document);
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        node.textContent = node.textContent.replace(/arduino/gi, text);
    };

}

function replaceArduinoImages(){
    var posts = getPostsByCatagory("Arduino Hacks");
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var imgs = post.getElementsByTagName('img');
        for (var j = 0; j < imgs.length; j++) {
            var img = imgs[j];
            if (parseInt(img.width) > 10 && parseInt(img.height)>10){
                img.src = "http://lorempixel.com/g/"+img.width+"/"+img.height+"/business";
            }
        };
    };
}


chrome.storage.local.get(['hearnoevil', 'seenoevil', 'speaknoevil', 'substitute'], function(results){
    console.log("LOADED");
    if (results['speaknoevil']){
        console.log('removing posts');
        removeArduinoHacks();
    }

    if (results['seenoevil']){
        console.log('removing images');
        replaceArduinoImages();
    }

    if (results['hearnoevil']){

        console.log('replaceing word');
        var word = results['substitute'];
        if (word === undefined){
            word = '';
        };
        replaceArduinoWithX(word);
    }
});
