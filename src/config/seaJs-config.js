(function(){
    if(window.seajs && typeof window.seajs != 'undefined' ) {
        seajs.seajsConfig = arguments[0];
    };
})(function(entry,staticUrl){
    var arg = arguments[1];
    function testThrow(){ if(!arg)throw new Error("请在页面中传入staticUrl"); } try{ testThrow(); }catch(e){ alert(e); return false};
    var config = {
        develop:true,
        hotLoad:true,
        config:function(){
            var vesion =  this.getVesion(); //版本号
            return {
                paths: {
                    'JS':  staticUrl + '/js',
                    'CSS': staticUrl + '/css',
                    "TEMPLATE": staticUrl + '/template',
                    "LIBS": staticUrl + '/libs'
                },//文件夹路径别名
                base: "./libs",
                alias: {
                    'common':'JS/common.js',
                    'vue':'LIBS/vue/vue.min.js',
                },//文件路径别名
                common:[
                    "vue"
                ],//每个页面都需要加载的文件添加在这里
                map: [
                    [/^([^.]+)$/i, '$1.js=' + vesion],
                    [/^(.+\.(?:html|js|css))$/i, '$1?v=' + vesion]
                ],
                charset: 'utf-8'
            };
        },
        init:function(){
            this.setConfig();
            this.setUse();
            this.hot();
        },
        getVesion:function(){
            return (this.develop ? this.getRandomStr() : 'master1');
        },
        getRandomStr:function(len){
            var len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            var maxPos = $chars.length;
            var pwd = '';
            for (var i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            };
            return pwd;
        },
        setConfig:function(){
            seajs.config(this.config());
        },
        getUse:function(){
            return this.config().common;
        },
        setUse:function(){
            seajs.use(this.getUse(),function(){
                seajs.use('JS/' + entry );
            });
        },
        hot:function(){
            if(this.hotLoad) document.write('<script src="http://' +
                (location.host || 'localhost').split(':')[0] +
                ':35729/livereload.js?snipver=1"></' + 'script>');
        }
    };
    config.init();
});

