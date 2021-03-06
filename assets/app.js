function init(){
    if (window.baffle) {
        function textNodesUnder(node){
            var all = [];
            for (node=node.firstChild;node;node=node.nextSibling){
                if (node.nodeType==3) all.push(node);
                else all = all.concat(textNodesUnder(node));
            }
            return all;
        }
        for (
            var i = 0, 
            els = textNodesUnder(document.body),
            options = {speed: 50, characters: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz" },
            delay = 0; 
            i < els.length; 
            i++, delay += 10
        ) {
            if (els[i].nodeValue.trim()) {
                baffle(els[i]).set(options).reveal(50 + delay)
            }
        }
    }
    
    /*if (window.baffle) for (
        var i = 0, 
        els = document.getElementsByTagName("SPAN"),
        options = {speed: 50, characters: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz" },
        delay = 0; 
        i < els.length; 
        i++, delay += 40
    ) baffle(els[i]).set(options).reveal(500 + delay)*/
    
    for (
        var i = 0,
        els = document.getElementsByTagName("A");
        i < els.length; 
        i++
    ) els[i].setAttribute("target","_blank")
    var test = document.createElement("div")
    test.style['mix-blend-mode'] = "overlay"
    test.style['pointer-events'] = "none"
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (test.style['mix-blend-mode'] === 'overlay' && test.style['pointer-events'] === 'none' && (isChrome || isFirefox || isOpera)){
        document.documentElement.classList.add("with-effects")
    }
    // linux gets stuck with black color
    setTimeout(function(){
        document.documentElement.style.color = "#000"
        document.documentElement.style.color = "#0f0"
    },50)
}
