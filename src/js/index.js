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
                    industy:"移动互联网",
                    company:"成都阿商信息技术有限公司",
                    position:"web前端",
                    image:"../images/head.jpg",
                    skills:[{index:1,text:"行业知识"},{index:2,text:"简历制作"},{index:3,text:"面试技巧"},{index:4,text:"笔试技巧"}],
                    remainQuestion:"11",
                    link:"http://www.baidu.com"
                },
                {
                    name:"李云",
                    age:23,
                    industy:"移动互联网",
                    company:"成都阿商信息技术有限公司",
                    position:"web前端",
                    isCharge:"T",
                    image:"../images/head2.jpg",
                    skills:[{index:1,text:"行业知识"},{index:2,text:"简历制作"},{index:3,text:"面试技巧"},{index:4,text:"笔试技巧"}],
                    remainQuestion:"11",
                    link:"http://www.baidu.com"
                },
                {
                    name:"李云",
                    age:23,
                    industy:"移动互联网",
                    company:"成都阿商信息技术有限公司",
                    position:"web前端",
                    image:"../images/head.jpg",
                    skills:[{index:1,text:"行业知识"},{index:2,text:"简历制作"},{index:3,text:"面试技巧"},{index:4,text:"笔试技巧"}],
                    remainQuestion:"11",
                    link:"http://www.baidu.com"
                }
            ]
        }
    };
    homePage.init();
});