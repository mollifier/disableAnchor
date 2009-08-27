(function() {
  jetpack.statusBar.append({
    html: "disableA",
    width: 60,
    onReady: function(widget) {
      $(widget).click(function() {
        $(jetpack.tabs.focused.contentDocument).
          find("a").
          css({ backgroundColor:"blue" });
      });
    }
  });
})();

// vim:set ts=2 sw=2:
