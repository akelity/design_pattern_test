var WelcomeController = function (Greeter) {
  console.log(Greeter.greet());
};

var Injector = {
  dependencies: {},
  process: function(target) {
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var text = target.toString();
    var args = text.match(FN_ARGS)[1].split(',');

    target.apply(target, this.getDependencies(args));
  },

  getDependencies: function(arr) {
    var self = this;
    return arr.map(function(value) {

      return self.dependencies[value];
    });
  },

  register: function(name, dependency) {
    this.dependencies[name] = dependency;
  }
};

var RobotGreeter = {
  greet: function() { return 'Domo Arigato'; }
};

var OtherGreeter = {
  greet: function() { return 'That will do pig.'; }
};

Injector.register('Greeter', RobotGreeter);
Injector.process(WelcomeController); //Domo Arigato

Injector.register('Greeter', OtherGreeter);
Injector.process(WelcomeController); //That will do pig.
