require("./common.scss");

var regular=require("../common/regular");

FastClick.attach(document.body);

window.goPage = function(target,url){
   if(!target || !url ) return;
   target.props.history.pushState(null, url);
};

window.getImageUrl = function(imgUrl){
  if(!imgUrl) return;
  return "http://phptest.jiangtao.com/upload/qukeji/" + imgUrl;
};
