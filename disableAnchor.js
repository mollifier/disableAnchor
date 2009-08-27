(function() {
  jetpack.statusBar.append({
    html: "disableA",
    width: 60,
    onReady: function(widget) {
      $(widget).click(function() {
        $(jetpack.tabs.focused.contentDocument).
          find("a").each(function() {
            $(this).replaceWith("<span>" + $(this).text() + "</span>");
          });
      });
    }
  });
})();

// vim:set ts=2 sw=2:
