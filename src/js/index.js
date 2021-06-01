/**
 * Created by jiangtao on 16/6/17.
 */
define(function(require, exports, module) {
    var homePage = {
        init: function(){
            var use  = ["render","setVm","VueInit"];
            use.forEach(function(name){
               for(var key in this) {
                  if(key == name) {
                      this[key]();
                  };
               };
            }.bind(this));
        },
        element: document.getElementById('app'),
        indexTemplate: require("TEMPLATE/index.tpl"),
        render: function(){
            this.element.innerHTML = this.indexTemplate;
        },
        Vm:null,
        setVm: function(){
          if(!this.Vm) this.Vm = new Vue({
              el: this.element,
              data: {
                 list:[]
              }
          });
        },
        VueInit: function(){
            var vm = this.Vm;
            vm.list = [
                {
                    name:"李云",
                    age:23,
                    image:"../images/head.jpg",
                    link:"http://www.baidu.com"
                },
                {
                    name:"李云",
                    age:23,
                    image:"../images/head.jpg",
                    link:"http://www.baidu.com"
                },
                {
                    name:"李云",
                    age:23,
                    image:"../images/head.jpg",
                    link:"http://www.baidu.com"
                }
            ]
        }
    };
    homePage.init();
});