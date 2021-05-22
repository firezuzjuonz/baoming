/**
 * 表单验证辅助
 * 基于bootstrap
 */

;define(function(require, exports, module){
    require("./jquery.validate.js");
    require.async('./additional-methods.js');


    // change by wangx 直接不要在html里弄，语言直接替换成中文
    exports.ValidatePlugin=function(formid,opts){
        var me=this, _cacheCom={},_cacheComEr={},_cacheSucc={};
        //change by 王兴。默认放在下面，跟父级暂时不做关联
        /*me.parentEl='form-group';*/
        me.parentEl=null;
        me.errLabel='label';

        //取消验证效果，重置表单
        $.fn.resetForm=function(){
            var $this=$(this);
            $this.find(".error-warning").remove();
            $this.find(".error-warning-border").removeClass("error-warning-border");
            _cacheCom={};_cacheComEr={};_cacheSucc={};
        };

        me.formatElid=function(el){
            return (el.indexOf('#')>-1&&el)||(el.indexOf('.')>-1&&el)||('[name="'+el+'"]')
        };

        //获取控件
        me.components =function(elid) {
            return elid&&(_cacheCom[elid]||(_cacheCom[elid]=$(me.formatElid(elid))));
        };

        //获取错误label
        me.componentsErr=function(elid,errtag) {
            errtag=errtag||'err';
            if(elid&&_cacheComEr[elid]){
                return _cacheComEr[elid];
            }
            return elid&&(_cacheComEr[elid]||(_cacheComEr[elid]=me.makeErrLabel(me.formatElid(elid),errtag)));
        };

        //生成错误标签
        me.makeErrLabel=function(elid,errtag){
            errtag=errtag||'error';
            var element=$(elid),h=element.outerHeight(),w=element.width(),
                widget=$('<'+me.errLabel+' class="error-warning" data-tag="'+errtag+'"></'+me.errLabel+'>');
            var oneEle=element[0];
            //判断是不是ckeckbox，是不是样式优化过后的判断是不是ckeckbox
            if(oneEle.type=="checkbox" && oneEle.parentNode.classList.contains("ui-checkbox")){
                //如果是在组里面就跟随组
                if( oneEle.parentNode.parentNode.classList.contains("ui-checkbox-group")){
                    widget.insertAfter(oneEle.parentNode.parentNode);
                }else{
                    widget.insertAfter(oneEle.parentNode);
                }
            }
            //判断是不是radio，是不是样式优化过后的判断是不是radio
            else if(oneEle.type=="radio" && oneEle.parentNode.classList.contains("ui-radio")){
                //如果是在组里面就跟随组
                if( oneEle.parentNode.parentNode.classList.contains("ui-radio-group")){
                    widget.insertAfter(oneEle.parentNode.parentNode);
                }else{
                    widget.insertAfter(oneEle.parentNode);
                }
            }else{
                widget.insertAfter(element);
            }
            return widget;
        };



        me.showError=function(el,error,cls) {
            cls = cls || 'error-warning';
            var $el=me.componentsErr(el);
            error ? $el.text(error) && $el.addClass(cls) && me.components(el).addClass(cls + '-border') :
            $el.text('').addClass(cls)  &&  me.components(el).removeClass(cls + '-border');
        };

        me.showErrors=function(map,list){
            $.each(list, function(index, error) {
                var _n=error.element.name;
                _cacheSucc[_n]=false;
                me.showError(error.element.name,error.message);
            });
            for(var a in this.successList) {
               var _n=this.successList[a].name;
                if(!_cacheSucc[_n]){
                    me.showError(this.successList[a].name, null);
                    _cacheSucc[_n]=true;
                }
            }
        };

        me.validate=function(formid,opts){
            opts=opts||{};
            me.parentEl=opts.parentEl||me.parentEl;
            me.errLabel=opts.errLabel||me.errLabel;
            opts.showErrors=(typeof opts.showErrors)=="undefined"?me.showErrors: opts.showErrors;
            me.validator=$(formid).validate(opts);
            return me.validator;
        };
        return me.validate(formid,opts);
    }


    //exports.ValidatePlugin=ValidatePlugin;
});
