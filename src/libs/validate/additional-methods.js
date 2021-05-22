(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery", "./jquery.validate"], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {
    $.validator.addMethod("phone", function(value, element, params) {
        return   (new RegExp('^(\\+86)?(1[0-9]{10})$')).test(value);
    }, $.validator.format("输入合法的手机号"));

    $.validator.addMethod("tel", function(value, element, params) {
        return   (new RegExp('[0-9-()（）]{7,18}')).test(value);
    }, $.validator.format("输入合法的座机号码"));

    $.validator.addMethod("bigger", function(value, element, params) {
        return (new RegExp('[A-Z]')).test(value);
    }, $.validator.format("至少包含一个大写字母"));

    $.validator.addMethod("smaller", function(value, element, params) {
        return (new RegExp('[a-z]')).test(value);
    }, $.validator.format("至少包含一个小写字母"));

    $.validator.addMethod("number", function(value, element, params) {
        return (new RegExp('^[0-9]*[1-9][0-9]*$')).test(value);
    }, $.validator.format("请输入正确的整数"));

    $.validator.addMethod("float",function(value){
       return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
    }, $.validator.format("请输入正确的整数或者小数"));

    $.validator.addMethod("idcard",function(value,ele,params){
        if(!value){
            return true;
        }
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
    }, $.validator.format("请输入正确的身份证号码"));

    $.validator.addMethod("postcode",function(value,ele,params){
        return /^[1-9]\d{5}$/.test(value);
    }, $.validator.format("请输入正确的邮政编码"));

    $.validator.addMethod("tel", function(value, element, params) {
        return   /^0\d{2,3}-?\d{7,8}$/.test(value) || (new RegExp('^(\\+86)?(1[0-9]{10})$')).test(value);
    }, $.validator.format("输入合法的电话号码"));
}));
