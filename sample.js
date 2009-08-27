(function() {
    /* node に含まれるテキストを連結して返す */
    var getText = function(node) {
        var f =  function(n, strs) {
            if (n.nodeType == 3 /* Node.TEXT_NODE */) {
                strs.push(n.data);
            } else if(n.nodeType == 1 /* Node.ELEMENT_NODE */){
                /* テキストノードを再帰的に探す */
                for (var m = n.firstChild; m !== null; m = m.nextSibling) {
                    f(m, strs);
                }
            }
        };
        var strings = [];
        f(node, strings);
        return strings.join('');
    };

    /*
     * replace オブジェクト
     * 'a': HTMLAnchorElement
     * 't': TextNode, 'a' に含まれるテキストをdataとして持つ
     */
    var reps = [];

    var anchors = document.getElementsByTagName('a');
    for(var i = 0; i < anchors.length; i++) {
        var a = anchors[i];
        var text = getText(a);
        if (text) {
            reps.push({'a':a, 't':document.createTextNode(text)});
        }
    }

    /* a要素をTextNodeで置き換える */
    for (var j = 0; reps.length; j++) {
        reps[j]['a'].parentNode.replaceChild(
            reps[j]['t'], reps[j]['a']);
    }
})();

