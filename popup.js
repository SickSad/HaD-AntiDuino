window.onload = function(){
    var storage = chrome.storage.local;

    storage.get('seenoevil', function(result){
        var seenoevil = result['seenoevil'];
        if (seenoevil === undefined){
            seenoevil = false;
            storage.set({'seenoevil': seenoevil});
        }
        var cb = document.getElementById('seenoevil');
        cb.checked = seenoevil;
    });
    var sne_cb = document.getElementById('seenoevil');
    sne_cb.onclick=function(){
        if (sne_cb.checked){
            storage.set({'seenoevil': true});
        }else{
            storage.set({'seenoevil': false});
        }
    }



    storage.get('hearnoevil', function(result){
        var hearnoevil = result['hearnoevil'];
        if (hearnoevil === undefined){
            hearnoevil = false;
            storage.set({'hearnoevil': hearnoevil});
            storage.set({'substitute': 'doo-hickey'});
        }
        var cb = document.getElementById('hearnoevil');
        cb.checked = hearnoevil;
    });
    var hne_cb = document.getElementById('hearnoevil');
    hne_cb.onclick=function(){
        if (hne_cb.checked){
            storage.set({'hearnoevil': true});
        }else{
            storage.set({'hearnoevil': false});
        }
    }


    storage.get('speaknoevil', function(result){
        var speaknoevil = result['speaknoevil'];
        if (speaknoevil === undefined){
            speaknoevil = false;
            storage.set({'speaknoevil': speaknoevil});
        }
        var cb = document.getElementById('speaknoevil');
        cb.checked = speaknoevil;
    });
    var spne_cb = document.getElementById('speaknoevil');
    spne_cb.onclick=function(){
        if (spne_cb.checked){
            storage.set({'speaknoevil': true});
        }else{
            storage.set({'speaknoevil': false});
        }
    }

    storage.get('substitute', function(result){
        var word = result['substitute'];
        var word_box = document.getElementById('word');
        word_box.value = word;
    });


    var word_box = document.getElementById('word');
    word_box.onchange = function(){
        storage.set({'substitute': word_box.value});
    }
}
