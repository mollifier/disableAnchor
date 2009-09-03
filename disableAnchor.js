(function() {
  jetpack.statusBar.append({
    html: "disA",
    width: 60,
    onReady: function(widget) {
      $(widget).click(function() {
        $(jetpack.tabs.focused.contentDocument).
          find("a").each(function() {
            $(this).replaceWith($(this).html());
          });
      });
    }
  });
})();

// vim:set ts=2 sw=2:
