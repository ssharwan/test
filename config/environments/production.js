var Environment = {
  getEnvironment: null,
  appConfig: {},
  LinkedIn: null
};

(function() {
  var env = {
    urls: {
      //  ************ URLs to configure ************//
      apiServerPath: 'http://www.bluegapebeta.com:3000',
      chatURI: 'http://chat.bluegapebeta.com',
      webURI: 'http://www.bluegapebeta.com/app',
      envName: "Development"
      //  ************ URLs to configure ************//
    }
  };

  Environment.name = env.urls.envName;
  Environment.appConfig = {
    webURI: env.urls.webURI,
  }

  Environment.getEnvironment = function(){
    return env;
  }
})();
