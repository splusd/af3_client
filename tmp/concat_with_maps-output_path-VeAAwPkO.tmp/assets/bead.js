"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('bead/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'bead/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('bead/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'bead/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('bead/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('bead/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('bead/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bead/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('bead/initializers/export-application-global', ['exports', 'ember', 'bead/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('bead/pods/about/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bead/pods/about/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bead/pods/about/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Rólunk");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[2,0],[2,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://bead2-rest-leviouss.c9users.io',
        namespace: ''
    });

});
define('bead/pods/components/edit-todo-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        todos: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    what: this.$('#what').val(),
                    where: this.$('#where').val()
                });
            }
        },

        validate: function validate() {
            var what = this.$('#what').val();
            var where = this.$('#where').val();

            this.set('todos.what', what === '' ? 'Mit? kötelező' : '');
            this.set('todos.where', where === '' ? 'Helszín kötelező' : '');

            return this.get('todos.what') === '' && this.get('todos.where') === '';
        }
    });

});
define('bead/pods/components/edit-todo-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "bead/pods/components/edit-todo-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","form-horizontal");
        dom.setAttribute(el1,"method","post");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","what");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Mit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"rows","3");
        dom.setAttribute(el5,"id","what");
        dom.setAttribute(el5,"placeholder","pl. kivinni a szemetet");
        dom.setAttribute(el5,"name","what");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a tennivalót.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","where");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Hol");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"id","where");
        dom.setAttribute(el5,"name","where");
        dom.setAttribute(el5,"type","text");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a helyet.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10 col-lg-offset-2");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","reset");
        dom.setAttribute(el5,"class","btn btn-default");
        var el6 = dom.createTextNode("Cancel");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Submit");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("        \n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element2, [3, 1]);
        var element4 = dom.childAt(element0, [5, 1, 3]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3, 1]),0,0);
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createAttrMorph(element3, 'value');
        morphs[4] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","todos.what",["loc",[null,[3,36],[3,46]]]],"has-error"],[],["loc",[null,[3,31],[3,60]]]]]]],
        ["content","data.what",["loc",[null,[6,116],[6,129]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","todos.where",["loc",[null,[11,36],[11,47]]]],"has-error"],[],["loc",[null,[11,31],[11,61]]]]]]],
        ["attribute","value",["concat",[["get","data.where",["loc",[null,[14,89],[14,99]]]]]]],
        ["element","action",["submit"],[],["loc",[null,[22,24],[22,43]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/components/new-todo-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        todos: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    what: this.$('#what').val(),
                    where: this.$('#where').val(),
                    user: this.$('#user').val()
                });
            }
        },

        validate: function validate() {
            var what = this.$('#what').val();
            var where = this.$('#where').val();
            var user = this.$('#user').val();

            this.set('todos.what', what === '' ? 'Mit? kötelező' : '');
            this.set('todos.where', where === '' ? 'Helszín kötelező' : '');
            this.set('todos.user', where === '' ? 'Felhasználó kötelező' : '');

            return this.get('todos.what') === '' && this.get('todos.where') === '' && this.get('todos.user') === '';
        }
    });

});
define('bead/pods/components/new-todo-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 20
            },
            "end": {
              "line": 25,
              "column": 20
            }
          },
          "moduleName": "bead/pods/components/new-todo-form/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","value",["get","username",["loc",[null,[24,40],[24,48]]]]],
          ["content","username",["loc",[null,[24,51],[24,63]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "bead/pods/components/new-todo-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","form-horizontal");
        dom.setAttribute(el1,"method","post");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","what");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Mit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"rows","3");
        dom.setAttribute(el5,"id","what");
        dom.setAttribute(el5,"placeholder","pl. kivinni a szemetet");
        dom.setAttribute(el5,"name","what");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a tennivalót.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","where");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Hol");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"id","where");
        dom.setAttribute(el5,"name","where");
        dom.setAttribute(el5,"type","text");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a helyet.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","user");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Felhasználó");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("select");
        dom.setAttribute(el5,"id","user");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a felhasználót.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10 col-lg-offset-2");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","reset");
        dom.setAttribute(el5,"class","btn btn-default");
        var el6 = dom.createTextNode("Cancel");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Submit");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("        \n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element3, [3, 1]);
        var element5 = dom.childAt(element1, [5]);
        var element6 = dom.childAt(element1, [7, 1, 3]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element2, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3, 1]),0,0);
        morphs[2] = dom.createAttrMorph(element3, 'class');
        morphs[3] = dom.createAttrMorph(element4, 'value');
        morphs[4] = dom.createAttrMorph(element5, 'class');
        morphs[5] = dom.createMorphAt(dom.childAt(element5, [3, 1]),1,1);
        morphs[6] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","todos.what",["loc",[null,[3,36],[3,46]]]],"has-error"],[],["loc",[null,[3,31],[3,60]]]]]]],
        ["content","data.what",["loc",[null,[6,116],[6,129]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","todos.where",["loc",[null,[11,36],[11,47]]]],"has-error"],[],["loc",[null,[11,31],[11,61]]]]]]],
        ["attribute","value",["concat",[["get","data.where",["loc",[null,[14,89],[14,99]]]]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","todos.user",["loc",[null,[19,36],[19,46]]]],"has-error"],[],["loc",[null,[19,31],[19,60]]]]]]],
        ["block","each",[["get","users",["loc",[null,[23,28],[23,33]]]]],[],0,null,["loc",[null,[23,20],[25,29]]]],
        ["element","action",["submit"],[],["loc",[null,[34,24],[34,43]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('bead/pods/components/register-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        users: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    surname: this.$('#surname').val(),
                    forename: this.$('#forename').val(),
                    username: this.$('#username').val()
                });
            }
        },

        validate: function validate() {
            var surname = this.$('#surname').val();
            var forename = this.$('#forename').val();
            var username = this.$('#username').val();

            this.set('users.surname', surname === '' ? 'Név kötelező' : '');
            this.set('users.forename', forename === '' ? 'Név kötelező' : '');
            this.set('users.username', username === '' ? 'Felhasználó név kötelező' : '');

            return this.get('users.surname') === '' && this.get('users.forename') === '' && this.get('users.username') === '';
        }
    });

});
define('bead/pods/components/register-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 7
          }
        },
        "moduleName": "bead/pods/components/register-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","form-horizontal");
        dom.setAttribute(el1,"method","post");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","surname");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Vezetéknév");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"type","text");
        dom.setAttribute(el5,"id","surname");
        dom.setAttribute(el5,"name","surname");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","forename");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Keresztnév");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"type","text");
        dom.setAttribute(el5,"id","forename");
        dom.setAttribute(el5,"name","forename");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","username");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Felhasználó név");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"type","text");
        dom.setAttribute(el5,"id","username");
        dom.setAttribute(el5,"name","username");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10 col-lg-offset-2");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Ok");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1, 3, 1]);
        var element2 = dom.childAt(element0, [3, 3, 1]);
        var element3 = dom.childAt(element0, [5, 3, 1]);
        var element4 = dom.childAt(element0, [7, 1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'value');
        morphs[1] = dom.createAttrMorph(element2, 'value');
        morphs[2] = dom.createAttrMorph(element3, 'value');
        morphs[3] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","data.surname",["loc",[null,[6,93],[6,105]]]]]]],
        ["attribute","value",["concat",[["get","data.forename",["loc",[null,[13,95],[13,108]]]]]]],
        ["attribute","value",["concat",[["get","data.username",["loc",[null,[20,95],[20,108]]]]]]],
        ["element","action",["submit"],[],["loc",[null,[26,24],[26,43]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/components/todo-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteTodo: function deleteTodo(todo) {
                todo.deleteRecord();
                todo.save();
            }
        }
    });

});
define('bead/pods/components/todo-list/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "bead/pods/components/todo-list/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","btn btn-default btn-sm");
          var el4 = dom.createTextNode("Töröl");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [8]);
          var element2 = dom.childAt(element1, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [2]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [4]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [6]),0,0);
          morphs[3] = dom.createMorphAt(element1,1,1);
          morphs[4] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [
          ["content","what",["loc",[null,[15,16],[15,24]]]],
          ["content","where",["loc",[null,[16,16],[16,25]]]],
          ["content","user.username",["loc",[null,[17,16],[17,33]]]],
          ["inline","link-to",["Szerkeszt","todos.edit",["get","this",["loc",[null,[19,51],[19,55]]]]],["class","btn btn-default btn-sm"],["loc",[null,[19,16],[19,88]]]],
          ["element","action",["deleteTodo",["get","this",["loc",[null,[20,46],[20,50]]]]],[],["loc",[null,[20,24],[20,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 8
          }
        },
        "moduleName": "bead/pods/components/todo-list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table table-striped table-hover ");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Mit");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Hol");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Felhasználó");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Funkciók");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("   \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","todos",["loc",[null,[12,16],[12,21]]]]],[],0,null,["loc",[null,[12,8],[23,17]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('bead/pods/index/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bead/pods/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "bead/pods/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode(" Ez itt egy ember.js web app ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[2,0],[2,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/signup/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newUser: function newUser(formData) {
                var user = this.store.createRecord('user', Object.assign(formData));
                user.save();
                this.transitionToRoute('todos.list');
            }
        }
    });

});
define('bead/pods/signup/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bead/pods/signup/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 43
          }
        },
        "moduleName": "bead/pods/signup/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Regisztráció");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","register-form",[],["onSave",["subexpr","action",["newUser"],[],["loc",[null,[5,23],[5,41]]]]],["loc",[null,[5,0],[5,43]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/todo/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var TodoModel = DS['default'].Model.extend({
    what: DS['default'].attr('string'),
    where: DS['default'].attr('string'),

    user: DS['default'].belongsTo('user', { async: true })
  });

  exports['default'] = TodoModel;

});
define('bead/pods/todos/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            modifyTodo: function modifyTodo(formData) {
                var _this = this;

                var todo = this.get('model');
                todo.setProperties(formData);
                return todo.save().then(function () {
                    _this.transitionToRoute('todos.list');
                });
            }
        }
    });

});
define('bead/pods/todos/edit/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('bead/pods/todos/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 70
          }
        },
        "moduleName": "bead/pods/todos/edit/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Tennivaló módosítása");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","edit-todo-form",[],["data",["subexpr","@mut",[["get","model",["loc",[null,[5,22],[5,27]]]]],[],[]],"users",["subexpr","@mut",[["get","model",["loc",[null,[5,34],[5,39]]]]],[],[]],"onSave",["subexpr","action",["modifyTodo"],[],["loc",[null,[5,47],[5,68]]]]],["loc",[null,[5,0],[5,70]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/todos/list/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('todo');
        }
    });

});
define('bead/pods/todos/list/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 79
          }
        },
        "moduleName": "bead/pods/todos/list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Tennivalóim");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        return morphs;
      },
      statements: [
        ["inline","todo-list",[],["todos",["subexpr","@mut",[["get","model",["loc",[null,[5,18],[5,23]]]]],[],[]]],["loc",[null,[5,0],[5,25]]]],
        ["inline","link-to",["Új tennivaló felvitele","todos.new"],["class","btn btn-default"],["loc",[null,[7,3],[7,75]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/todos/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newTodo: function newTodo(formData) {
                var thiss = this;
                var todo = this.store.createRecord('todo', {
                    what: formData.what,
                    where: formData.where
                });

                this.store.queryRecord('user', { filter: { username: formData.user } }).then(function (found) {
                    todo.set('user', found[0]);
                    todo.save();
                    thiss.transitionToRoute('todos.list');
                });
            }
        }
    });

});
define('bead/pods/todos/new/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('user');
        }
    });

});
define('bead/pods/todos/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 55
          }
        },
        "moduleName": "bead/pods/todos/new/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Új tennivaló felvétele");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","new-todo-form",[],["users",["subexpr","@mut",[["get","model",["loc",[null,[5,22],[5,27]]]]],[],[]],"onSave",["subexpr","action",["newTodo"],[],["loc",[null,[5,35],[5,53]]]]],["loc",[null,[5,0],[5,55]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/pods/user/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        surname: DS['default'].attr('string'),
        forename: DS['default'].attr('string'),
        username: DS['default'].attr('string'),

        todos: DS['default'].hasMany('todo', { async: true })
    });

});
define('bead/router', ['exports', 'ember', 'bead/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('about', { path: '/about' });

    this.route('todos', function () {
      this.route('list');
      this.route('new');
      this.route('edit', { path: '/edit/:todo_id' });
    });

    this.route('signup');
  });

  exports['default'] = Router;

});
define('bead/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 0
          }
        },
        "moduleName": "bead/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4,"class","navbar navbar-default");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","container-fluid");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","navbar-header");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7,"type","button");
        dom.setAttribute(el7,"class","navbar-toggle collapsed");
        dom.setAttribute(el7,"data-toggle","collapse");
        dom.setAttribute(el7,"data-target","#bs-example-navbar-collapse-1");
        dom.setAttribute(el7,"aria-expanded","false");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","navbar-brand");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Todos");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapse navbar-collapse");
        dom.setAttribute(el6,"id","bs-example-navbar-collapse-1");
        var el7 = dom.createTextNode("\n                  \n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","nav navbar-nav navbar-right");
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/about");
        var el10 = dom.createTextNode("About");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/todos/list");
        var el10 = dom.createTextNode("Tennivalók");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/signup");
        var el10 = dom.createTextNode("Regisztráció");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            \n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"id","bodyContent");
        var el5 = dom.createTextNode("\n                \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 3]),1,1);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[32,12],[32,22]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('bead/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('bead/tests/helpers/resolver', ['exports', 'ember/resolver', 'bead/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('bead/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('bead/tests/helpers/start-app', ['exports', 'ember', 'bead/app', 'bead/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('bead/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('bead/tests/integration/pods/components/edit-todo-form/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('edit-todo-form', 'Integration | Component | edit todo form', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'edit-todo-form', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'edit-todo-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('bead/tests/integration/pods/components/edit-todo-form/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/pods/components/edit-todo-form');
  QUnit.test('integration/pods/components/edit-todo-form/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/pods/components/edit-todo-form/component-test.js should pass jshint.'); 
  });

});
define('bead/tests/integration/pods/components/new-todo-form/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('new-todo-form', 'Integration | Component | new todo from', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'new-todo-form', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'new-todo-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('bead/tests/integration/pods/components/new-todo-form/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/pods/components/new-todo-form');
  QUnit.test('integration/pods/components/new-todo-form/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/pods/components/new-todo-form/component-test.js should pass jshint.'); 
  });

});
define('bead/tests/integration/pods/components/register-form/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('register-form', 'Integration | Component | register form', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'register-form', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'register-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('bead/tests/integration/pods/components/register-form/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/pods/components/register-form');
  QUnit.test('integration/pods/components/register-form/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/pods/components/register-form/component-test.js should pass jshint.'); 
  });

});
define('bead/tests/integration/pods/components/todo-list/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('todo-list', 'Integration | Component | todo list', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'todo-list', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'todo-list', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('bead/tests/integration/pods/components/todo-list/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/pods/components/todo-list');
  QUnit.test('integration/pods/components/todo-list/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/pods/components/todo-list/component-test.js should pass jshint.'); 
  });

});
define('bead/tests/pods/about/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/about');
  QUnit.test('pods/about/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/about/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/application/adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/application');
  QUnit.test('pods/application/adapter.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/application/adapter.js should pass jshint.'); 
  });

});
define('bead/tests/pods/components/edit-todo-form/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/components/edit-todo-form');
  QUnit.test('pods/components/edit-todo-form/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/components/edit-todo-form/component.js should pass jshint.'); 
  });

});
define('bead/tests/pods/components/new-todo-form/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/components/new-todo-form');
  QUnit.test('pods/components/new-todo-form/component.js should pass jshint', function(assert) { 
    assert.ok(false, 'pods/components/new-todo-form/component.js should pass jshint.\npods/components/new-todo-form/component.js: line 23, col 13, \'user\' is defined but never used.\n\n1 error'); 
  });

});
define('bead/tests/pods/components/register-form/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/components/register-form');
  QUnit.test('pods/components/register-form/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/components/register-form/component.js should pass jshint.'); 
  });

});
define('bead/tests/pods/components/todo-list/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/components/todo-list');
  QUnit.test('pods/components/todo-list/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/components/todo-list/component.js should pass jshint.'); 
  });

});
define('bead/tests/pods/index/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/index');
  QUnit.test('pods/index/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/index/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/signup/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/signup');
  QUnit.test('pods/signup/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/signup/controller.js should pass jshint.'); 
  });

});
define('bead/tests/pods/signup/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/signup');
  QUnit.test('pods/signup/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/signup/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todo/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todo');
  QUnit.test('pods/todo/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todo/model.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todos/edit/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todos/edit');
  QUnit.test('pods/todos/edit/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todos/edit/controller.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todos/edit/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todos/edit');
  QUnit.test('pods/todos/edit/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todos/edit/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todos/list/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todos/list');
  QUnit.test('pods/todos/list/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todos/list/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todos/new/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todos/new');
  QUnit.test('pods/todos/new/controller.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todos/new/controller.js should pass jshint.'); 
  });

});
define('bead/tests/pods/todos/new/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/todos/new');
  QUnit.test('pods/todos/new/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/todos/new/route.js should pass jshint.'); 
  });

});
define('bead/tests/pods/user/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/user');
  QUnit.test('pods/user/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'pods/user/model.js should pass jshint.'); 
  });

});
define('bead/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('bead/tests/test-helper', ['bead/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('bead/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/about/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('bead/tests/unit/pods/about/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/about');
  QUnit.test('unit/pods/about/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/about/route-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/index/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('bead/tests/unit/pods/index/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/index');
  QUnit.test('unit/pods/index/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/index/route-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/todo/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('todo', 'Unit | Model | todo', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bead/tests/unit/pods/todo/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/todo');
  QUnit.test('unit/pods/todo/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/todo/model-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/todos/edit/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:todos/edit', 'Unit | Route | todos/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('bead/tests/unit/pods/todos/edit/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/todos/edit');
  QUnit.test('unit/pods/todos/edit/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/todos/edit/route-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/todos/list/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:todos/list', 'Unit | Route | todos/list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('bead/tests/unit/pods/todos/list/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/todos/list');
  QUnit.test('unit/pods/todos/list/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/todos/list/route-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/todos/new/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:todos/new', 'Unit | Route | todos/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('bead/tests/unit/pods/todos/new/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/todos/new');
  QUnit.test('unit/pods/todos/new/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/todos/new/route-test.js should pass jshint.'); 
  });

});
define('bead/tests/unit/pods/user/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('bead/tests/unit/pods/user/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/pods/user');
  QUnit.test('unit/pods/user/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/pods/user/model-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('bead/config/environment', ['ember'], function(Ember) {
  var prefix = 'bead';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("bead/tests/test-helper");
} else {
  require("bead/app")["default"].create({"name":"bead","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=bead.map