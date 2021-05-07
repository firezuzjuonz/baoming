/**
 * Created by iwangx on 16/5/11.
 * 正则表达式
 */

module.exports={
    //电话
    tel:/\d{3}-\d{8}|\d{4}-\d{7}/,
    //QQ
    qq:/[1-9][0-9]{4,}/,
    //邮箱
    postCode:/[1-9]\d{5}(?!\d)/,
    //身份证简单验证
    easyIdCard:/\d{15}|\d{18}/,
    //email
    email:/^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/,
    //number
    number:/^\d+$/,
    //int
    int:/^[-\+]?\d+$/,
    //url
    url:/(?:https|http|ftp|rtsp|mms):\/\/.+/
};
