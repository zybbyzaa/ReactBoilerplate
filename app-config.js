'use strict';

module.exports = {
    app: "fund-yingmi",
    description: '盈米基金H5页面',
    platform: 'mobile',
    path: {
    	entry: __dirname + '/src/entry.js',
    	template: __dirname + '/lib/templates/default.template.html'
    },
    support: {
		autoprefixer: { // 自动前缀的配置
	      pc: [
	        'last 3 versions',
	        'Explorer >= 8',
	        'Chrome >= 21',
	        'Firefox >= 1',
	        'Edge 13'
	      ],
	      mobile: [
	        'Android >= 4',
	        'iOS >= 6'
	      ]
	    }
    }
}
