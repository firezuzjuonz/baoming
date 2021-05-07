<?php
/**
 * 前段模板配置文件.
 *
 * 可以使用下面命令检查配置是否正确 ：
 * #php TmpConfig.php  test
 *
 * @author zhangjiaao <zhangjiaao@wesai.com>
 */
namespace Config\LotWeb;

class TmpConfig
{
   public static $pageConfig = <<<EOT
    {
	"app": {
		"css": [
			"css/common.css",
			"css/app.css"
		],
		"js": [
			"js/common.js",
			"js/app.js"
		]
	}
}
EOT;
}


if(PHP_SAPI == 'cli' && isset($argv[1]) && $argv[1] == 'test')
{
    $str =  TmpConfig::$pageConfig;
    $config = json_decode($str, true);
    if (is_array($config) && $config) {
        echo "config test success!" . PHP_EOL;
    } else {
        echo "config test fail!" . PHP_EOL;
    }
}