(function() {
    jetpack.statusBar.append({
        html: "disableA",
        width: 45,
        onReady: function(widget){
            $(widget).click(function() {
                console.log(jetpack.tabs);
            });
        }
    });
})();

