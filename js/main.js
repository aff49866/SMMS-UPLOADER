/*
Plugin Name: SM.MS图床外链小工具
Plugin URI: https://www.qcgzxw.cn/2555.html
Description: 小文博客独自开发的图床插件，用于WordPress博客添加图床上传小工具。
Author: 小文博客
Author URI: https://www.qcgzxw.cn/
Version: 2.0
License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/
$('#image').change(function() {
			for(var i=0; i< this.files.length; i++){
				var f=this.files[i];
				if(!/image\/\w+/.test(f.type)){
					alert('请选择图片文件(png | jpg | gif)');
					return;
				}
				var formData=new FormData();
				formData.append('smfile',f);
				$.ajax({
				url:'https://sm.ms/api/upload',
				type : 'POST',
				processData : false,
				contentType : false,
				data:formData,
				beforeSend: function (xhr) {
				},
				success:function(res){
					$('#mul-image').append('<a target = "_blank" href = "'+res.data.url+'"><img class = "img-responsive" src="'+res.data.url+'"/></a>');
					$('#urls').append('<p class = "text-justify" id = "url">'+res.data.url+'</p>');
				}
		});
	}
});