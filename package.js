Package.describe({
  name: 'eighteenson:MeteorLiveScript',
  summary: "LiveScript, a CoffeeScript descendant with improvements and new features.",
  version: "1.0.0",
  git: "https://github.com/eighteenson/MeteorLiveScript.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileLiveScript",
  use: [],
  sources: [
    'plugin/compileLiveScript.js'
  ],
  npmDependencies: {
    "livescript": "1.6.0"
  }
});

Package.on_use(function(api, where) {
  api.export("prelude");
  api.add_files("prelude-browser-min.js", ["server", "client"]);
  api.add_files("requirePrelude.js", ["server", "client"]);
});
