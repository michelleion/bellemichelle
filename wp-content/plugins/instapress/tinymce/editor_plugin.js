(function(){tinymce.PluginManager.requireLangPack('Instapress');tinymce.create('tinymce.plugins.Instapress',{init:function(ed,url){ed.addCommand('mceInstapress',function(){ed.windowManager.open({file:ajaxurl+'?action=instapress_tinymce',width:320+ed.getLang('Instapress.delta_width',0),height:350+ed.getLang('Instapress.delta_height',0),inline:1},{plugin_url:url})});ed.addButton('Instapress',{title:'Instapress.desc',cmd:'mceInstapress',image:url+'/img/instapress.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('Instapress',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'Instapress',author:'Thomas Krammer',authorurl:'http://liechtenecker.at',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/instapress',version:"1.0"}}});tinymce.PluginManager.add('Instapress',tinymce.plugins.Instapress)})();