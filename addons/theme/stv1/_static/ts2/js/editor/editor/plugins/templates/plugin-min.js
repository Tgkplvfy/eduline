KISSY.Editor.add("templates",function(i){i.addPlugin("templates",function(){var c=KISSY,d=c.Editor,j=c.Node;c.DOM.addStyleSheet(".ke-tpl {    border: 2px solid #EEEEEE;    width: 95%;    margin: 20px auto;}.ke-tpl-list {    border: 1px solid #EEEEEE;    margin: 5px;    padding: 7px;    display: block;    text-decoration: none;    zoom: 1;}.ke-tpl-list:hover, .ke-tpl-selected {    background-color: #FFFACD;    text-decoration: none;    border: 1px solid #FF9933;}","ke-templates");var k=i.addButton("templates",
{contentCls:"ke-toolbar-template",title:"\u6a21\u677f",mode:d.WYSIWYG_MODE,offClick:function(){var a=this;d.use("overlay",function(){a.cfg._prepare.call(a)})},_prepare:function(){for(var a=this.editor,e=a.cfg.pluginConfig.templates||[],f="<div class='ke-tpl'>",g=0;g<e.length;g++)f+="<a href='javascript:void(0)' class='ke-tpl-list' tabIndex='-1'>"+e[g].demo+"</a>";f+="</div>";var h=new d.Dialog({width:500,mask:true,autoRender:true,headerContent:"\u5185\u5bb9\u6a21\u677f",bodyContent:f});h.get("el").all(".ke-tpl-list").on("click",
function(b){b.halt();b=(new j(b.target))._4e_index();b!=-1&&a.insertHtml(e[b].html);h.hide()});this.ui=h;this.cfg.show.call(this);this.cfg._prepare=this.cfg.show},show:function(){this.ui.show()}});this.destroy=function(){k.destroy()}})},{attach:false});