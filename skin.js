// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: ????-data-shem_e.ggsk
// Generated 2025-02-03T12:51:18

function pano2vrSkin(player,base) {
	player.addVariable('menu_open', 2, false);
	player.addVariable('menu_touch', 2, false);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_pred=document.createElement('div');
		el.ggId="Rectangle_pred";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100%  -  100px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_pred.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_pred.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_pred.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_pred.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_pred.style[domTransition]='background-color 500ms ease 0ms';
				if (me._rectangle_pred.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_pred.style.backgroundColor="rgba(0,0,0,0.313725)";
				}
				else {
					me._rectangle_pred.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rectangle_pred.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","$(cur)");
		}
		me._rectangle_pred.onmouseover=function (e) {
			me.elementMouseOver['rectangle_pred']=true;
			me._pred_white.logicBlock_alpha();
		}
		me._rectangle_pred.onmouseout=function (e) {
			me.elementMouseOver['rectangle_pred']=false;
			me._pred_white.logicBlock_alpha();
		}
		me._rectangle_pred.ontouchend=function (e) {
			me.elementMouseOver['rectangle_pred']=false;
			me._pred_white.logicBlock_alpha();
		}
		me._rectangle_pred.ggUpdatePosition=function (useTransition) {
		}
		el=me._pred_white=document.createElement('div');
		els=me._pred_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._pred_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pred_white";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 8px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._pred_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pred_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['rectangle_pred'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseOver['pred_white'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pred_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pred_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pred_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._pred_white.ggCurrentLogicStateAlpha == 0) {
					me._pred_white.style.visibility=me._pred_white.ggVisible?'inherit':'hidden';
					me._pred_white.style.opacity=1;
				}
				else if (me._pred_white.ggCurrentLogicStateAlpha == 1) {
					me._pred_white.style.visibility=me._pred_white.ggVisible?'inherit':'hidden';
					me._pred_white.style.opacity=1;
				}
				else {
					me._pred_white.style.visibility=me._pred_white.ggVisible?'inherit':'hidden';
					me._pred_white.style.opacity=0.4;
				}
			}
		}
		me._pred_white.onmouseover=function (e) {
			me.elementMouseOver['pred_white']=true;
			me._pred_white.logicBlock_alpha();
		}
		me._pred_white.onmouseout=function (e) {
			me.elementMouseOver['pred_white']=false;
			me._pred_white.logicBlock_alpha();
		}
		me._pred_white.ontouchend=function (e) {
			me.elementMouseOver['pred_white']=false;
			me._pred_white.logicBlock_alpha();
		}
		me._pred_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_pred.appendChild(me._pred_white);
		me.divSkin.appendChild(me._rectangle_pred);
		el=me._rectangle_sled=document.createElement('div');
		el.ggId="Rectangle_sled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100%  -  100px);';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_sled.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_sled.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_sled.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_sled.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_sled.style[domTransition]='background-color 500ms ease 0ms';
				if (me._rectangle_sled.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_sled.style.backgroundColor="rgba(0,0,0,0.313725)";
				}
				else {
					me._rectangle_sled.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._rectangle_sled.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(cur)");
		}
		me._rectangle_sled.onmouseover=function (e) {
			me.elementMouseOver['rectangle_sled']=true;
			me._sled_white.logicBlock_alpha();
		}
		me._rectangle_sled.onmouseout=function (e) {
			me.elementMouseOver['rectangle_sled']=false;
			me._sled_white.logicBlock_alpha();
		}
		me._rectangle_sled.ontouchend=function (e) {
			me.elementMouseOver['rectangle_sled']=false;
			me._sled_white.logicBlock_alpha();
		}
		me._rectangle_sled.ggUpdatePosition=function (useTransition) {
		}
		el=me._sled_white=document.createElement('div');
		els=me._sled_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._sled_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sled_white";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._sled_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sled_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['rectangle_sled'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseOver['sled_white'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sled_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sled_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sled_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._sled_white.ggCurrentLogicStateAlpha == 0) {
					me._sled_white.style.visibility=me._sled_white.ggVisible?'inherit':'hidden';
					me._sled_white.style.opacity=1;
				}
				else if (me._sled_white.ggCurrentLogicStateAlpha == 1) {
					me._sled_white.style.visibility=me._sled_white.ggVisible?'inherit':'hidden';
					me._sled_white.style.opacity=1;
				}
				else {
					me._sled_white.style.visibility=me._sled_white.ggVisible?'inherit':'hidden';
					me._sled_white.style.opacity=0.4;
				}
			}
		}
		me._sled_white.onmouseover=function (e) {
			me.elementMouseOver['sled_white']=true;
			me._sled_white.logicBlock_alpha();
		}
		me._sled_white.onmouseout=function (e) {
			me.elementMouseOver['sled_white']=false;
			me._sled_white.logicBlock_alpha();
		}
		me._sled_white.ontouchend=function (e) {
			me.elementMouseOver['sled_white']=false;
			me._sled_white.logicBlock_alpha();
		}
		me._sled_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_sled.appendChild(me._sled_white);
		me.divSkin.appendChild(me._rectangle_sled);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100%  -  100px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 498px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 498px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  98px);';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true)) && 
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._node_scroller.ggCurrentLogicStateAlpha == 0) {
					me._node_scroller.style.visibility=me._node_scroller.ggVisible?'inherit':'hidden';
					me._node_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._node_scroller.style.opacity == 0.0) { me._node_scroller.style.visibility="hidden"; } }, 505);
					me._node_scroller.style.opacity=0;
				}
			}
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 195;
		el.ggHeight = 40;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor();
					}
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor();
					}
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 194px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
				me._category_scroller__content.onpointerup = null;
				me._category_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
		}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
				me._category_scroller.ggDragInertiaX = -diffX;
				me._category_scroller.ggDragInertiaY = -diffY;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 218px; height: 15px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 218px; height: 15px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(30 * me._category_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 496px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 496px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(30 * me._category_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  98px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('node_visible') == true)) || 
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._category_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._category_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._category_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._category_scroller.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._category_scroller.style.opacity == 0.0) { me._category_scroller.style.visibility="hidden"; } }, 505);
					me._category_scroller.style.opacity=0;
				}
				else {
					me._category_scroller.style.visibility=me._category_scroller.ggVisible?'inherit':'hidden';
					me._category_scroller.style.opacity=1;
				}
			}
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = contentWidth != 0 ? me._category_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					if (me._category_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
						me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
						me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 190;
		el.ggHeight = 37;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category_text && me._category_cloner.ggInstances[i]._category_text.logicBlock_textcolor) {
						me._category_cloner.ggInstances[i]._category_text.logicBlock_textcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"1",title:"\u041e\u0444\u0438\u0441 \"\u0420\u0425\u0410\" \u0412\u0417\u0438\u0421 2.2"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid rgba(0,0,0,0.313725);';
		hs+='cursor : default;';
		hs+='height : 24%;';
		hs+='left : 50px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility="hidden";
					me._map.ggClearMap();
					me._map.ggVisible=false;
				}
				else {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
			}
		}
		me._map.ggCurrentLogicStateVisible = -1;
		me._map.ggUpdateConditionTimer=function () {
			me._map.ggRadar.update();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._map.ggNodeChange=function () {
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
		}
		el=me._marker=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 401px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._marker.onmouseover=function (e) {
			me.elementMouseOver['marker']=true;
			me._marker_title.logicBlock_visible();
		}
		me._marker.onmouseout=function (e) {
			me.elementMouseOver['marker']=false;
			me._marker_title.logicBlock_visible();
		}
		me._marker.ontouchend=function (e) {
			me.elementMouseOver['marker']=false;
			me._marker_title.logicBlock_visible();
		}
		me._marker.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title=document.createElement('div');
		els=me._marker_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title.style[domTransition]='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStatePosition == 0) {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='-25px';
				}
				else {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='35px';
				}
			}
		}
		me._marker_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title.style[domTransition]='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStateVisible == 0) {
					me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
					me._marker_title.ggVisible=true;
				}
				else {
					me._marker_title.style.visibility="hidden";
					me._marker_title.ggVisible=false;
				}
			}
		}
		me._marker_title.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker.appendChild(me._marker_title);
		me._map.appendChild(me._marker);
		me.divSkin.appendChild(me._map);
		el=me._map_mob=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #00aa00;';
		hs+='cursor : default;';
		hs+='height : 35%;';
		hs+='left : -2px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._map_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_mob.style[domTransition]='';
				if (me._map_mob.ggCurrentLogicStateVisible == 0) {
					me._map_mob.style.visibility=(Number(me._map_mob.style.opacity)>0||!me._map_mob.style.opacity)?'inherit':'hidden';
					if (me._map_mob.ggMapNotLoaded) {
						me._map_mob.ggInitMap(false);
						me._map_mob.ggInitMapMarkers(true);
					}
					me._map_mob.ggVisible=true;
				}
				else if (me._map_mob.ggCurrentLogicStateVisible == 1) {
					me._map_mob.style.visibility="hidden";
					me._map_mob.ggClearMap();
					me._map_mob.ggVisible=false;
				}
				else {
					me._map_mob.style.visibility="hidden";
					me._map_mob.ggClearMap();
					me._map_mob.ggVisible=false;
				}
			}
		}
		me._map_mob.ggCurrentLogicStateVisible = -1;
		me._map_mob.ggUpdateConditionTimer=function () {
			me._map_mob.ggRadar.update();
		}
		me._map_mob.ggUpdatePosition=function (useTransition) {
		}
		me._map_mob.ggNodeChange=function () {
			if (me._map_mob.ggLastActivMarker) {
				if (me._map_mob.ggLastActivMarker._div.ggDeactivate) me._map_mob.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_mob.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_mob.ggLastActivMarker=marker;
			}
			if (!me._map_mob.ggMapNotLoaded) {
				me._map_mob.ggCenterNode();
			}
			if (player.getMapType(me._map_mob.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_mob.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_mob.ggChangeMap(mapId);
					}
				}
			}
			me._map_mob.ggLastNodeId = id;
		}
		el=me._marker_mob=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 401px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_mob.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_mob.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._marker_mob.onmouseover=function (e) {
			me.elementMouseOver['marker_mob']=true;
			me._marker_title_mob.logicBlock_visible();
		}
		me._marker_mob.onmouseout=function (e) {
			me.elementMouseOver['marker_mob']=false;
			me._marker_title_mob.logicBlock_visible();
		}
		me._marker_mob.ontouchend=function (e) {
			me.elementMouseOver['marker_mob']=false;
			me._marker_title_mob.logicBlock_visible();
		}
		me._marker_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title_mob=document.createElement('div');
		els=me._marker_title_mob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._marker_title_mob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title_mob.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_mob.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_mob.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_mob.style[domTransition]='left 0s, top 0s';
				if (me._marker_title_mob.ggCurrentLogicStatePosition == 0) {
					me._marker_title_mob.style.left='-35px';
					me._marker_title_mob.style.top='-25px';
				}
				else {
					me._marker_title_mob.style.left='-35px';
					me._marker_title_mob.style.top='35px';
				}
			}
		}
		me._marker_title_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_mob'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_mob.style[domTransition]='left 0s, top 0s';
				if (me._marker_title_mob.ggCurrentLogicStateVisible == 0) {
					me._marker_title_mob.style.visibility=(Number(me._marker_title_mob.style.opacity)>0||!me._marker_title_mob.style.opacity)?'inherit':'hidden';
					me._marker_title_mob.ggVisible=true;
				}
				else {
					me._marker_title_mob.style.visibility="hidden";
					me._marker_title_mob.ggVisible=false;
				}
			}
		}
		me._marker_title_mob.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_mob.appendChild(me._marker_title_mob);
		me._map_mob.appendChild(me._marker_mob);
		me.divSkin.appendChild(me._map_mob);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style[domTransition]='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
				else {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_3);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.313725);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_4.style[domTransition]='';
				if (me._rectangle_4.ggCurrentLogicStateVisible == 0) {
					me._rectangle_4.style.visibility="hidden";
					me._rectangle_4.ggVisible=false;
				}
				else {
					me._rectangle_4.style.visibility=(Number(me._rectangle_4.style.opacity)>0||!me._rectangle_4.style.opacity)?'inherit':'hidden';
					me._rectangle_4.ggVisible=true;
				}
			}
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_4);
		el=me._controller_komp3=document.createElement('div');
		el.ggId="controller_komp3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_komp3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_komp3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_komp3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_komp3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_komp3.style[domTransition]='';
				if (me._controller_komp3.ggCurrentLogicStateVisible == 0) {
					me._controller_komp3.style.visibility="hidden";
					me._controller_komp3.ggVisible=false;
				}
				else {
					me._controller_komp3.style.visibility=(Number(me._controller_komp3.style.opacity)>0||!me._controller_komp3.style.opacity)?'inherit':'hidden';
					me._controller_komp3.ggVisible=true;
				}
			}
		}
		me._controller_komp3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_komp3=document.createElement('div');
		els=me._image_komp3__img=document.createElement('img');
		els.className='ggskin ggskin_image_komp3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_komp3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_komp3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_komp3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_komp3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_komp3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_komp3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_komp3.style[domTransition]='opacity 0s';
				if (me._image_komp3.ggCurrentLogicStateAlpha == 0) {
					me._image_komp3.style.visibility=me._image_komp3.ggVisible?'inherit':'hidden';
					me._image_komp3.style.opacity=1;
				}
				else {
					me._image_komp3.style.visibility=me._image_komp3.ggVisible?'inherit':'hidden';
					me._image_komp3.style.opacity=0.7;
				}
			}
		}
		me._image_komp3.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_komp3.onmouseover=function (e) {
			me.elementMouseOver['image_komp3']=true;
			me._image_komp3.logicBlock_alpha();
		}
		me._image_komp3.onmouseout=function (e) {
			me.elementMouseOver['image_komp3']=false;
			me._image_komp3.logicBlock_alpha();
		}
		me._image_komp3.ontouchend=function (e) {
			me.elementMouseOver['image_komp3']=false;
			me._image_komp3.logicBlock_alpha();
		}
		me._image_komp3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp3.appendChild(me._image_komp3);
		el=me._share_komp=document.createElement('div');
		els=me._share_komp__img=document.createElement('img');
		els.className='ggskin ggskin_share_komp';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share_komp";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share_komp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_komp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['share_komp'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._share_komp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._share_komp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._share_komp.style[domTransition]='opacity 0s';
				if (me._share_komp.ggCurrentLogicStateAlpha == 0) {
					me._share_komp.style.visibility=me._share_komp.ggVisible?'inherit':'hidden';
					me._share_komp.style.opacity=1;
				}
				else {
					me._share_komp.style.visibility=me._share_komp.ggVisible?'inherit':'hidden';
					me._share_komp.style.opacity=0.7;
				}
			}
		}
		me._share_komp.onclick=function (e) {
			text = location.href
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + pano.getCurrentNode() + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";

if (navigator.share) {
navigator.share({
        title: "",
        text: "",
        url: text,
      });
} else {
dummy = document.createElement('input');

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
}
		}
		me._share_komp.onmouseover=function (e) {
			me.elementMouseOver['share_komp']=true;
			me._share_komp.logicBlock_alpha();
		}
		me._share_komp.onmouseout=function (e) {
			me.elementMouseOver['share_komp']=false;
			me._share_komp.logicBlock_alpha();
		}
		me._share_komp.ontouchend=function (e) {
			me.elementMouseOver['share_komp']=false;
			me._share_komp.logicBlock_alpha();
		}
		me._share_komp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp3.appendChild(me._share_komp);
		me.divSkin.appendChild(me._controller_komp3);
		el=me._controller_komp2=document.createElement('div');
		el.ggId="controller_komp2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_komp2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_komp2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_komp2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_komp2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_komp2.style[domTransition]='';
				if (me._controller_komp2.ggCurrentLogicStateVisible == 0) {
					me._controller_komp2.style.visibility="hidden";
					me._controller_komp2.ggVisible=false;
				}
				else {
					me._controller_komp2.style.visibility=(Number(me._controller_komp2.style.opacity)>0||!me._controller_komp2.style.opacity)?'inherit':'hidden';
					me._controller_komp2.ggVisible=true;
				}
			}
		}
		me._controller_komp2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=126;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style[domTransition]='opacity 0s';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=0.7;
				}
			}
		}
		me._image_3.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._image_3.onmouseover=function (e) {
			me.elementMouseOver['image_3']=true;
			me._image_3.logicBlock_alpha();
		}
		me._image_3.onmouseout=function (e) {
			me.elementMouseOver['image_3']=false;
			me._image_3.logicBlock_alpha();
		}
		me._image_3.ontouchend=function (e) {
			me.elementMouseOver['image_3']=false;
			me._image_3.logicBlock_alpha();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._image_3);
		el=me._move_right=document.createElement('div');
		els=me._move_right__img=document.createElement('img');
		els.className='ggskin ggskin_move_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADl0lEQVRYhb3Yz2tdRRQH8E+uEBWbmNqNP7IotCIVUxNaXNpGgksl6MJF24huVCSx+ge4Vqm1WBAXWktTXfijCDULxRaz1Kq1AUE0IBilm7YmaYl14XExc83LIz/ufS/xwDBv7n1zvt97Zs6ZOacjItSUm/EwHsJObMet6MI8ZvELLuAMPsdCLYSIqNr6IuJ4RMxHPZnP8/qqYnVUsNRdeB2Po8jPvs0WOIefcSlbqQtbcDd2Z4vuynP+wUd4Eb+3Y6kDDZZZiIi3I6I/IrpqtP48b6HBcgdWw13pxQ0RcbRhCU5HxI6aZJrbvRHxWYPOoxmnEqmOiBjPE/+KiNE2yTS30Yi4nvWPZ7w199SbeB5X8QQm19p0LchevI9NGW+08WUzqX04gb/xGL7aAE'+
			'Kl7MHH6MR+jC9Hqhc/Sh70At7dQEKlPIU3JM/dIXtl0fCHQ5nQxP9ESMY5nXEPlQ9LS/XhPK5LcWWmgsJBPImRNon1SnHvRvRjqrTUS5LVxisSIi3xMD5FTxukZjJukXnoiIhbcFHyhAFMV1TWg+OSxc7jEfzZIrFt+F7y+NsLDGVC52oQkgk8ilOS2SextUVS0xl/E4YK6UtJJ3orMoJjmVA7xL7M/WCB+/Pg6xaVwRgOS0s6afFD68g3ud9ZSOsJP7VBCl7OrdxrwzXnl/jbCmzOg0ttkiJZa6xFYpdzv7kjFkN69zqQKmU4kyKRPFZx3hwpNlzNDzatE6EeKajCr5J3VpGu3M8XuJIHW9aJUBm7zuJB1WPXbbm/UliMTfesA6HS885KoaJOMC3xpwv8kAcPtEFoq8UYdUoKqnWje4l/oZC+ipQytSKN0fyw1g/o'+
			'odyfaT77dknZSVUZlPZQjxSjDrdIaDu+k+5VdxS4JqU+8EwNRaXb91iM6K3Ks7n/BNeWu0/txm8VFJXBcUR1t19OeiUrdWq6T03hQyklf62isjHJ5dshBK/ipow/xcp39IN4p02wKvK0tOwr3tFn8Fz+/YqUbWyk7Mk4pD31XypfNP1xHG9J6/uBlJ9thOzN+jtxBCeXvF0hZT+ZM9jrG5AhjzVkyCeWy5BXqiV0RMSRhrx/ItanljDRoPPIcoRWI1W2/RExl5WUVZeBmmQGYmnVZS4i9q2GW6U+dafkIavVpy5Ld6Fu6bRfrT51EH+siriGpRrbfRHxXkTMRj2ZzfPWtZLXLGXNc9DSmmd3tlZzzfMLNWue/wJJBIbcm1/jVAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_right";
		el.ggDx=84;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_right.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_right'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_right.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_right.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_right.style[domTransition]='opacity 0s';
				if (me._move_right.ggCurrentLogicStateAlpha == 0) {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=1;
				}
				else {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=0.7;
				}
			}
		}
		me._move_right.onmouseover=function (e) {
			me.elementMouseOver['move_right']=true;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmouseout=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmousedown=function (e) {
			me.elementMouseDown['move_right']=true;
		}
		me._move_right.onmouseup=function (e) {
			me.elementMouseDown['move_right']=false;
		}
		me._move_right.ontouchend=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._move_right);
		el=me._move_left=document.createElement('div');
		els=me._move_left__img=document.createElement('img');
		els.className='ggskin ggskin_move_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADh0lEQVRYhbXYy29VVRQG8F8vBENsEXBiRBOTSozEasHHEKyoQxOiIxUbdcYALP4FTAk+GpsYB2gbqg6EaAwyMIaqQ4NPBsYoSROfE6AvUnHgcrD3yT1eess5995+yc7OOffstb679t7r1RcRamIjHsMjuBd34iZswgLm8Qt+wAw+xXItDRFRdQxFxGREzEc9zOd191TV1VfBUrfiNTyFRn73dbbAOfyMS9lKm7AV2/EAHsf9ec2/OIkx/NGNpZ6NiIX8j5cj4q2I2BkRAzXGzrxuOctZiIj9q+lt90NfRIyXtuBMROyoSaZ13J3lFBjPeiqR6ouIE3nh1Yg41CWZ1nEwy42IeDci1rVyWOlMvY5DWMLT+Px6h64DPIz30I83caD8YyupZzCNf/Akvl'+
			'gDQgX24BQ2YH/Wew2pbfgRA9INOb6GhAq8KN3sRezAbzSvOLySCZ3uAaFhbK7w3XGcyXqPFS8LSw3hO2nbdhWMO8Q+TOFDjFb4/nbJ390g/ZnzhaVelqx2oktCz2dCc/io4ppfpfPUwGGSpW7En5IJd0lxqxOM4UgmNCrFvarYLkWJJdzSwN5M6JsuCB0pEXqiJiFSqDonuYhHG1K0h886JDQlWWkWu6Wz2QnO5nlkvZR+wFc1hWzOhEZKhOY6JFTWf18Dg/nhpw4JzfSAUFn/4HpsyQ+XahD6EndkQqM9IAQX87ylIR1ykletgn2ZEEz2iBDp5kF/o0RmoM3HrXhH0ylOSb6pF+jP81IDl/PD1hoCCm89h3Hp9nWLm/N8uYEL+eGumkLKxAo/1Q0K/RcaUtUBD3YgqHzzxiSrdYqH8vx9Q9P77u1Q2GwmNqsZ+zpB'+
			'4cRnitj3l3TQdmpuZ11sxsdSpK/rKgbxrVLsuyJlgLSkpTVRjnsj6lms0HsKV1rzqatSndZN+iITmlQtMN8mZQjX5FPn8YFUkh/tkhD1UpdjWe/JzKNtjv4S3u4BuevhBal6apuj/665t0elamMtsUdzVw4oHZlGy4fTeEMqe96X6rO1wO4sfwMmlMortK2Qp0sV8sE1qJD/zvKnVyrd2/US1kXERKnu/yR600s4XZI5sVLJvhqpYjwXEYtZSNF1Ga5JZjj+33VZzHK76k9tw6tW709dlG7QgBTtV+tPHZYuVXtcx1KtnbypkuWqYjGvG6qqq4qlWrExW6C15zmQrVXueZ7VQc/zP+hYjLDyeLAbAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_left";
		el.ggDx=42;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_left.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_left'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_left.style[domTransition]='opacity 0s';
				if (me._move_left.ggCurrentLogicStateAlpha == 0) {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=1;
				}
				else {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=0.7;
				}
			}
		}
		me._move_left.onmouseover=function (e) {
			me.elementMouseOver['move_left']=true;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmouseout=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmousedown=function (e) {
			me.elementMouseDown['move_left']=true;
		}
		me._move_left.onmouseup=function (e) {
			me.elementMouseDown['move_left']=false;
		}
		me._move_left.ontouchend=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._move_left);
		el=me._move_up=document.createElement('div');
		els=me._move_up__img=document.createElement('img');
		els.className='ggskin ggskin_move_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADeElEQVRYhcXYTWhdRRQH8F+uUCsmaa0boRUCVrRCv6K4tE1Ql35AXYgfpa6ULqK0+9Ktom3jx8KFbdr6AYoRRQXRRl2qldp2oVghUOtCaE0TbdCFx8XM5b0+38t7Ny8ffxjm3jtz5vzvmZkzZ05PRKiI63EvhrAJt+AG9GEGf+AXnMYJfIG/KmmIiE7Lxog4EhEzUQ3TWW5jp7p6OrDUWryIR1Dkb99lC3yLn3ApW6kPa3Ab7s4WHcwy/+Jd7MGFbiz1eP7TiIgrEfF6RGyJiL4KZWuWm62z3GNz6W3V0BMRo3VT8FFEbKhIprFsyOOUOJj1dETqmog4ngX/joiRLsk0lmfzuBERx5oRa7amXsFu/IlH8VW7RTcPbMPb6MUoRuobG0k9iTH8gx34ch'+
			'EIldiO97ACT+B4M1Jr8aPEfgSHF5FQiadwUNq5t+M3alscXsqEPlkiQvAGPpVcyYHyY2mpjTglTdudOL9EpOBmnJSmcQvOlJbaK1nt6BITkvUdzfr3kCx1HX6Xpm6rdG7NB7swjql5yK7H95jGTQXuz4ROdkHoYRzC11g9D/lzWX8/7iswnBs+64LQWH4eyM/zIVbqHy6k8IN0yFbFkGQh2ImJ/G2spURrlPo3FdJ8ws8VBxlQs8qItJ66IVbqX19gVX65WJFQuX72qfm1qUxsUprW/RXGvJTrVYXkuEhetROsxoe5PqDO6dURuycTey6XTjCd6/6ijkxfi87NCA1I1tnXot8UHsj1fsldtEN/Sa7A5fxyYweCY5LXHddwsjfBZB2xQ9J0zoU1ub5cSD4Cbu2A0JC0kHe26VviVO47pfZDrVDqP1dItw64q42CIxUJ'+
			'lZhQ252Tc/Qr9Z/uiYgH8YHkUYcqKlxITEjBwEMLefZ1g/+dfbN4Pzc+swyE4Olcj2O2WTw1iF+XkNA6yUorsBlny3jqjBQvr8QLS0iIdNFdmfWfZflj9F2SD2sZo1+QrlbwvHRULCa2q83K7pJQIylSWPoqrsU70v1sMbANb0nraBTHrmpd5hvym81uyHPlEl6uu/d/HN3nEu7I45R4LRug4wTHQmZdBrPclTzOdB63q/zUOmnb7nB1fuoEvpHyUxel3EOvFG2U+alhtTOtzE/t1c4PtrHUQmTyZiLicCxwJq8R9TnPzWo5z95srTLn+YN0yH6uYs7zP1AOiuX0JYOSAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_up.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_up'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_up.style[domTransition]='opacity 0s';
				if (me._move_up.ggCurrentLogicStateAlpha == 0) {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=1;
				}
				else {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=0.7;
				}
			}
		}
		me._move_up.onmouseover=function (e) {
			me.elementMouseOver['move_up']=true;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmouseout=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmousedown=function (e) {
			me.elementMouseDown['move_up']=true;
		}
		me._move_up.onmouseup=function (e) {
			me.elementMouseDown['move_up']=false;
		}
		me._move_up.ontouchend=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._move_up);
		el=me._move_down=document.createElement('div');
		els=me._move_down__img=document.createElement('img');
		els.className='ggskin ggskin_move_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADg0lEQVRYhcXYS4xURRQG4K9bgxoYGCFxoZiQiPERQUR0KQ8NSxMTXRg1hJ2vCET2hq0vHIwuXAiMqAtRo4SYGAPq0gDqsNGICQlq3IDDDEJk4XFx6jpNz/R03x5m+JPK7ep7T53//nXuqarTiAg1MR8PYT3uxi24HgtwDn/hV/yIw/gKf9fyEBG9thURsTsixqMexiNiT7HvyVejB6WW4lU8hmb57wgO4Tv8jNNFpQVYgttwPzZgTbH5F/vxIn6biVJPRsRYeePzEfFORKyOiIEabVWxO1/GGSvjdvTb6cZVEfF2yxQcjIg7a5Jpb3eUcSq8GRGNXkk1IuL9YvhPRGydIZn2tqWMGxGxrwjQNaaG8EKJkcfxTbeg6wNr8aGMwbfwfOvNdlJPYRgX8S'+
			'i+ngVCFR7Ax7gGm4rfSaRuxE8YwBbsnkVCFTbLmTmH2/E7E5847CyEvpgjQoqfg3IaX6/+rJS6S2bgi1itWx65vFiKY5iHVTheKbVdqjY8x4QUf8PF/3ZSqevwJxZKlU7MMSly/fxextYNTWwshI5eIULkAn5UxtbGplzt4ctpjAaxF4/04XAQn7X46YTK/4arsbJ0jkxjsKwQWo9RuSXpFXt7tKv8r2xieen8Mo3BDzLBVYqtqknocLGfDpX/5U0sKp0zXYw+lUl1EJ9L9abDkFS3eqFuOF2uixoxkdIX9mAI27ADJ+VSMTrFMzvKc9M9MxXGyNwwVpPUztKW4VupXDvpbYXIwzUIDZTreBNnS2dxj8bwkpzOZTJuKmKbpUqjUqGTNcZcUq5nmyZy0601BiDj5LAM5CpdDBVCm2oSavV/oomR0lnT4eE6xMiPoU7K'+
			'qFD5H2nKAwCZ2euiXZVNclr7QeX/0OVa+wbl9PW75Zm09l0w8XZP9zno6AwIwTPl+gkuVPupFTLJXcS9ODUDB3Vxs1yMJ+2njsuD4rXy4DmXeKX43V94dNyjb8W7c0Co6x79Dzxbfr+MdbNMaJ1UCZ6rCLWTgn3YJef3A3k+mw2sLePPk+e+4Uvudjghv3clT8idagmNiHij5dx/ILIWMNNawoGWMXdFjVpCa3siJqouFyKrJ/fUJFO76tJLfeomvObS+tQxWaGr6lNnMC6/3MWyPnUfHnRpfeojWZ/6P6inRBel2it5e1qU6xWzUslrx/yiwAZ56KhqngNFrarmOaLPmud/5A2NPRp0ajQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_down";
		el.ggDx=-42;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_down.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_down'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_down.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_down.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_down.style[domTransition]='opacity 0s';
				if (me._move_down.ggCurrentLogicStateAlpha == 0) {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=1;
				}
				else {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=0.7;
				}
			}
		}
		me._move_down.onmouseover=function (e) {
			me.elementMouseOver['move_down']=true;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmouseout=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmousedown=function (e) {
			me.elementMouseDown['move_down']=true;
		}
		me._move_down.onmouseup=function (e) {
			me.elementMouseDown['move_down']=false;
		}
		me._move_down.ontouchend=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._move_down);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_out';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADEklEQVRYhcXYy49URRQG8N9cDGYiPQbcGNHVSIzE0Rl8LMH3P6ArFRe6YwGK/wXxRZzEuNBoGHWh7JCFMaAuDSo6C2OUlc8NkJkeMuKC46Kq0tfLdE83TXd/SaVy7+065+tTr/OdqYgwIKbxBB7FvbgTN2MGq1jBr/gRp/E51gfyEBH9trmIeD8iVmIwrORx9/Tra6qPSN2GN/A0qvzu2xyBM/gFF3KUZrADu/AAnsT9ecwVfIqX8ecwkXouIlbzP16PiHciYiEiWgO0hTxuPdtZjYj9vfx2+zAVEUdrU3AyInYPSKbZ7s52Co5mP32RmoqIY3ng5Yg4NCSZZjuY7UZEfBgRW5ocNlpTb+IQ1vAMvtxs0V0DHsZH2Ia3caD+sUnqWSzhXzyFr0ZAqG'+
			'AfjmMr9me/V5HaiZ/QknbIuyMkVPCitLPb2I3f6WxxeC0TOjEmQrKfk9nvq+VlidQczkrTtkdmPCbcIZ13N2IeyyVSr0hROzZmQvCbtJ4qHCZF6ib8JYVwj3RvjRu7pFtiDbdWeCwT+m5ChEhX1RnpiHi8km57+GJChApO5f6RSko/4JsJkSko/u+rMJsffp4QmYLif7bC9vxwYUJkCs7nfvtUdI70mU0GzePrIZzulc7CXlglnQ3t/KI1hMPrgW25X7sBFyVCO3QIboSzNo/mMLgl9xcrnMsPd43QYT8o/s9VkuqABydEpuCh3P9QSTKIdLJPEuUQP13uvr+lhbagM53jxCy+V7v7LkkZII20dIwofo/jUjOfuizptHGmL7dLGcJV+dQyPpEk+ZExEiJlnNOSUF2me47+Et4bA6EXJPXUNUf/Q2duj0hqY5TYpzMr'+
			'B9SWTNX44RLekmTPx5I+GwX2Zvtbsagmr9BVIS/VFPLBESjkf7L9pY2ke7dawpaIWKzp/s/i+tQSTtRsLm4k2XuRKu35iGhnI6XqMj8gmfn4f9Wlne0OVZ/aidf1rk+dl3ZQS7rte9WnDkubqjs2iVSzkvdBLXL9op3HzfXrq59INTGdI9CsebZytOo1z1Ouoeb5H1FfY9pYgBzEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggDx=-84;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_out'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_out.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_out.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_out.style[domTransition]='opacity 0s';
				if (me._zoom_out.ggCurrentLogicStateAlpha == 0) {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=1;
				}
				else {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.7;
				}
			}
		}
		me._zoom_out.onmouseover=function (e) {
			me.elementMouseOver['zoom_out']=true;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._zoom_out);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_in';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADLklEQVRYhcXYzW9UVRgG8N9cEkxDpxrcWWVTjZFYLSguxe8/QFmpaKI7FqD4Bxi3REVCE3ShkVB1ocQNsjAEdGvUqF0Yg2z82im2HVJx4cvinJteL53hzpSZeZKT0zvnnvd9+p6P+z5vKyL0iQk8jkdwD27HjZjCMpbwM37AOXyO1b48RETTNhsR70fEUvSHpTzv7qa+Wg0idQsOYw+K/Ns3OQJf4zz+ylGawlbcgfvxBO7Lc/7DJ3gZf2wkUs9GxHL+j1cj4p2I2BER7T7ajjxvNdtZjoi9vfx2G2hFxJHKEpyOiO19kqm3u7KdEkeyn0akWhFxIk+8HBEHNkim3vZnuxERH0TEpjqH9fbUWziADp7GF9fadAPgIXyISRzDvupgndQzWMC/eApfDo'+
			'FQid04ic3Ym/1eRWoaP6ItnZB3h0ioxIvSyV7BdvzG2hGHNzKhUyMiJPs5nf2+Xv5YRmoW30nLtlNmPCLcJt13N2AOi2WkXpGidmJAQq9Jl+fxAeb+Ku2nAgflP7bgyfzCsQGMXg+8nfs92FLgUWlNv5U+pOPAeWkJJ/FYIX3t4cyYCJU4m/uHCyn9gK/GRKZE6f/eAjP54acxkSlR+p9pRcSytKempUusF37BTQM63Ya/e4xPSilNp8iENCA0bHRyP1lYI9Pu8nIV26RErt4O5/FPu4xP6R0lUqTIkbqYH7Y2IDVM3Jz7iwUu5Ic7x0SmROn/QiGpDtg1JjIlHsj994Ukg0g3+zhRXuLnCukm70jqY6brlOFiJvvv4EyBS1IGSC0t7QOvSifs+QHnl35P4lI9n7os6bRR5lO3SjryqnxqER9LkvzQCAmRMs4JSagu'+
			'0j1HfwnvjYDQC5J66pqj/25tbQ9JamOY2G1tVfapbJmi9uICjkqy5yNJnw0DD2b7mzGvIq/QVSEvVBTy/iEo5H+y/YX1pHu3WsKmiJiv6P7P4vrUEk5VbM6vJ9l7kSrbcxGxko2UVZe5PsnMxf+rLivZ7obqU9N4U+/61J/SCWpLX/te9amD0qHqjmtEql7JO16JXFOs5HmzTX01iVQdEzkC9ZpnO0erWvM8a4Ca5xVfQGHC9+5tQwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggDx=-126;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_in'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_in.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_in.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_in.style[domTransition]='opacity 0s';
				if (me._zoom_in.ggCurrentLogicStateAlpha == 0) {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=1;
				}
				else {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.7;
				}
			}
		}
		me._zoom_in.onmouseover=function (e) {
			me.elementMouseOver['zoom_in']=true;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp2.appendChild(me._zoom_in);
		me.divSkin.appendChild(me._controller_komp2);
		el=me._controller_komp1=document.createElement('div');
		el.ggId="controller__komp1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_komp1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_komp1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_komp1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_komp1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_komp1.style[domTransition]='';
				if (me._controller_komp1.ggCurrentLogicStateVisible == 0) {
					me._controller_komp1.style.visibility="hidden";
					me._controller_komp1.ggVisible=false;
				}
				else {
					me._controller_komp1.style.visibility=(Number(me._controller_komp1.style.opacity)>0||!me._controller_komp1.style.opacity)?'inherit':'hidden';
					me._controller_komp1.ggVisible=true;
				}
			}
		}
		me._controller_komp1.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjMycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy'+
			'53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 195px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='opacity 0s';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.8;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			if (
				(
					((player.getVariableValue('node_visible') == false))
				)
			) {
				player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
			}
			player.setVariableValue('node_visible', false);
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._menu_open);
		el=me._image_hotspot_2=document.createElement('div');
		els=me._image_hotspot_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_hotspot_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._image_hotspot_2__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._image_hotspot_2__img.ggDownSrc=hs;
		el.ggId="Image Hotspot 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_hotspot_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hotspot_2.onclick=function (e) {
			var list=me.findElements("Hotspot 1",true);
			if (list.length>0) {
				var e=list[0];
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
			}
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me._image_hotspot_2.onmouseover=function (e) {
			me._image_hotspot_2__img.src=me._image_hotspot_2__img.ggOverSrc;
		}
		me._image_hotspot_2.onmouseout=function (e) {
			me._image_hotspot_2__img.src=me._image_hotspot_2__img.ggNormalSrc;
		}
		me._image_hotspot_2.onmousedown=function (e) {
			me._image_hotspot_2__img.src=me._image_hotspot_2__img.ggDownSrc;
		}
		me._image_hotspot_2.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_hotspot_2__img.src = me._image_hotspot_2__img.ggNormalSrc;
			} else {
				me._image_hotspot_2__img.src = me._image_hotspot_2__img.ggOverSrc;
			}
		}
		me._image_hotspot_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_hotspot_2);
		el=me._image_mi_4=document.createElement('div');
		els=me._image_mi_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_mi_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABSElEQVRYhe2YbZKDIAyGH6jdXmdP0MPvCfY6XbX0B2SKDh/RSrc/eGeYakHzJEMgYpxzfJrsfwOk1KG06lBadSitOpRWg2KMiVr8X+oXwCXu4+t7aLuhDHBejUvBbdEM3EpgNagB+NppPKdTaFmo0pyyAepIIFHxnSWoAe/R0TLBbhYsB3WiXZRKdrOdFj+5Wy4XEq2k1h1xtrWKUmwrqXX2nUNLPfAN/LwAcQV+a0CwjJSlMgEPVtaOiWp0g4/cpfTAQXL4BXRMddrVwCm0d0i9oosH0tcqYnMJKpWWAjY3AroDfyw36ioUtAOTzbj43tICWfVog2S+3lDM2dqqPfE6mMNnmTrymiJv5Ln1iBEXXdeAJKPVjmmgxFOpGCaW1WPJmKv074YiAIw8PW'+
			'96KmI2nLoYGsOItpQnbzsz+shPrA6lVYfS6gHwVlAL9fBYDQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image mi_4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_mi_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_mi_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_mi_4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_mi_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_mi_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_mi_4.style[domTransition]='opacity 0s';
				if (me._image_mi_4.ggCurrentLogicStateAlpha == 0) {
					me._image_mi_4.style.visibility=me._image_mi_4.ggVisible?'inherit':'hidden';
					me._image_mi_4.style.opacity=1;
				}
				else {
					me._image_mi_4.style.visibility=me._image_mi_4.ggVisible?'inherit':'hidden';
					me._image_mi_4.style.opacity=0.8;
				}
			}
		}
		me._image_mi_4.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '20%';
			me._map.style.height = '24%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_pl_1.style[domTransition]='none';
			me._image_pl_1.style.visibility=(Number(me._image_pl_1.style.opacity)>0||!me._image_pl_1.style.opacity)?'inherit':'hidden';
			me._image_pl_1.ggVisible=true;
			me._image_mi_4.style[domTransition]='none';
			me._image_mi_4.style.visibility='hidden';
			me._image_mi_4.ggVisible=false;
		}
		me._image_mi_4.onmouseover=function (e) {
			me.elementMouseOver['image_mi_4']=true;
			me._image_mi_4.logicBlock_alpha();
		}
		me._image_mi_4.onmouseout=function (e) {
			me.elementMouseOver['image_mi_4']=false;
			me._image_mi_4.logicBlock_alpha();
		}
		me._image_mi_4.ontouchend=function (e) {
			me.elementMouseOver['image_mi_4']=false;
			me._image_mi_4.logicBlock_alpha();
		}
		me._image_mi_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_mi_4);
		el=me._image_mi_3=document.createElement('div');
		els=me._image_mi_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_mi_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABSElEQVRYhe2YbZKDIAyGH6jdXmdP0MPvCfY6XbX0B2SKDh/RSrc/eGeYakHzJEMgYpxzfJrsfwOk1KG06lBadSitOpRWg2KMiVr8X+oXwCXu4+t7aLuhDHBejUvBbdEM3EpgNagB+NppPKdTaFmo0pyyAepIIFHxnSWoAe/R0TLBbhYsB3WiXZRKdrOdFj+5Wy4XEq2k1h1xtrWKUmwrqXX2nUNLPfAN/LwAcQV+a0CwjJSlMgEPVtaOiWp0g4/cpfTAQXL4BXRMddrVwCm0d0i9oosH0tcqYnMJKpWWAjY3AroDfyw36ioUtAOTzbj43tICWfVog2S+3lDM2dqqPfE6mMNnmTrymiJv5Ln1iBEXXdeAJKPVjmmgxFOpGCaW1WPJmKv074YiAIw8PW'+
			'96KmI2nLoYGsOItpQnbzsz+shPrA6lVYfS6gHwVlAL9fBYDQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image mi_3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_mi_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_mi_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_mi_3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_mi_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_mi_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_mi_3.style[domTransition]='opacity 0s';
				if (me._image_mi_3.ggCurrentLogicStateAlpha == 0) {
					me._image_mi_3.style.visibility=me._image_mi_3.ggVisible?'inherit':'hidden';
					me._image_mi_3.style.opacity=1;
				}
				else {
					me._image_mi_3.style.visibility=me._image_mi_3.ggVisible?'inherit':'hidden';
					me._image_mi_3.style.opacity=0.8;
				}
			}
		}
		me._image_mi_3.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '30%';
			me._map.style.height = '36%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_mi_4.style[domTransition]='none';
			me._image_mi_4.style.visibility=(Number(me._image_mi_4.style.opacity)>0||!me._image_mi_4.style.opacity)?'inherit':'hidden';
			me._image_mi_4.ggVisible=true;
			me._image_mi_3.style[domTransition]='none';
			me._image_mi_3.style.visibility='hidden';
			me._image_mi_3.ggVisible=false;
		}
		me._image_mi_3.onmouseover=function (e) {
			me.elementMouseOver['image_mi_3']=true;
			me._image_mi_3.logicBlock_alpha();
		}
		me._image_mi_3.onmouseout=function (e) {
			me.elementMouseOver['image_mi_3']=false;
			me._image_mi_3.logicBlock_alpha();
		}
		me._image_mi_3.ontouchend=function (e) {
			me.elementMouseOver['image_mi_3']=false;
			me._image_mi_3.logicBlock_alpha();
		}
		me._image_mi_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_mi_3);
		el=me._image_mi_2=document.createElement('div');
		els=me._image_mi_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_mi_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABSElEQVRYhe2YbZKDIAyGH6jdXmdP0MPvCfY6XbX0B2SKDh/RSrc/eGeYakHzJEMgYpxzfJrsfwOk1KG06lBadSitOpRWg2KMiVr8X+oXwCXu4+t7aLuhDHBejUvBbdEM3EpgNagB+NppPKdTaFmo0pyyAepIIFHxnSWoAe/R0TLBbhYsB3WiXZRKdrOdFj+5Wy4XEq2k1h1xtrWKUmwrqXX2nUNLPfAN/LwAcQV+a0CwjJSlMgEPVtaOiWp0g4/cpfTAQXL4BXRMddrVwCm0d0i9oosH0tcqYnMJKpWWAjY3AroDfyw36ioUtAOTzbj43tICWfVog2S+3lDM2dqqPfE6mMNnmTrymiJv5Ln1iBEXXdeAJKPVjmmgxFOpGCaW1WPJmKv074YiAIw8PW'+
			'96KmI2nLoYGsOItpQnbzsz+shPrA6lVYfS6gHwVlAL9fBYDQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image mi_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_mi_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_mi_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_mi_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_mi_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_mi_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_mi_2.style[domTransition]='opacity 0s';
				if (me._image_mi_2.ggCurrentLogicStateAlpha == 0) {
					me._image_mi_2.style.visibility=me._image_mi_2.ggVisible?'inherit':'hidden';
					me._image_mi_2.style.opacity=1;
				}
				else {
					me._image_mi_2.style.visibility=me._image_mi_2.ggVisible?'inherit':'hidden';
					me._image_mi_2.style.opacity=0.8;
				}
			}
		}
		me._image_mi_2.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '45%';
			me._map.style.height = '60%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_mi_3.style[domTransition]='none';
			me._image_mi_3.style.visibility=(Number(me._image_mi_3.style.opacity)>0||!me._image_mi_3.style.opacity)?'inherit':'hidden';
			me._image_mi_3.ggVisible=true;
			me._image_mi_2.style[domTransition]='none';
			me._image_mi_2.style.visibility='hidden';
			me._image_mi_2.ggVisible=false;
		}
		me._image_mi_2.onmouseover=function (e) {
			me.elementMouseOver['image_mi_2']=true;
			me._image_mi_2.logicBlock_alpha();
		}
		me._image_mi_2.onmouseout=function (e) {
			me.elementMouseOver['image_mi_2']=false;
			me._image_mi_2.logicBlock_alpha();
		}
		me._image_mi_2.ontouchend=function (e) {
			me.elementMouseOver['image_mi_2']=false;
			me._image_mi_2.logicBlock_alpha();
		}
		me._image_mi_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_mi_2);
		el=me._image_mi_1=document.createElement('div');
		els=me._image_mi_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_mi_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABSElEQVRYhe2YbZKDIAyGH6jdXmdP0MPvCfY6XbX0B2SKDh/RSrc/eGeYakHzJEMgYpxzfJrsfwOk1KG06lBadSitOpRWg2KMiVr8X+oXwCXu4+t7aLuhDHBejUvBbdEM3EpgNagB+NppPKdTaFmo0pyyAepIIFHxnSWoAe/R0TLBbhYsB3WiXZRKdrOdFj+5Wy4XEq2k1h1xtrWKUmwrqXX2nUNLPfAN/LwAcQV+a0CwjJSlMgEPVtaOiWp0g4/cpfTAQXL4BXRMddrVwCm0d0i9oosH0tcqYnMJKpWWAjY3AroDfyw36ioUtAOTzbj43tICWfVog2S+3lDM2dqqPfE6mMNnmTrymiJv5Ln1iBEXXdeAJKPVjmmgxFOpGCaW1WPJmKv074YiAIw8PW'+
			'96KmI2nLoYGsOItpQnbzsz+shPrA6lVYfS6gHwVlAL9fBYDQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image mi_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.1,sy:1.1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_mi_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_mi_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_mi_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_mi_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_mi_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_mi_1.style[domTransition]='opacity 0s';
				if (me._image_mi_1.ggCurrentLogicStateAlpha == 0) {
					me._image_mi_1.style.visibility=me._image_mi_1.ggVisible?'inherit':'hidden';
					me._image_mi_1.style.opacity=1;
				}
				else {
					me._image_mi_1.style.visibility=me._image_mi_1.ggVisible?'inherit':'hidden';
					me._image_mi_1.style.opacity=0.8;
				}
			}
		}
		me._image_mi_1.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '45%';
			me._map.style.height = '85%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_mi_2.style[domTransition]='none';
			me._image_mi_2.style.visibility=(Number(me._image_mi_2.style.opacity)>0||!me._image_mi_2.style.opacity)?'inherit':'hidden';
			me._image_mi_2.ggVisible=true;
			me._image_mi_1.style[domTransition]='none';
			me._image_mi_1.style.visibility='hidden';
			me._image_mi_1.ggVisible=false;
		}
		me._image_mi_1.onmouseover=function (e) {
			me.elementMouseOver['image_mi_1']=true;
			me._image_mi_1.logicBlock_alpha();
		}
		me._image_mi_1.onmouseout=function (e) {
			me.elementMouseOver['image_mi_1']=false;
			me._image_mi_1.logicBlock_alpha();
		}
		me._image_mi_1.ontouchend=function (e) {
			me.elementMouseOver['image_mi_1']=false;
			me._image_mi_1.logicBlock_alpha();
		}
		me._image_mi_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_mi_1);
		el=me._image_pl_4=document.createElement('div');
		els=me._image_pl_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_pl_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABaklEQVRYhe2XW27DIBBFD47T9ivqCrLXrqBr6Aq6p64gylfbJKYfBtVGwIzxM1KuZBmZYTgMw8PGWsvWVK0NENMDSqt6gK0J3l3FEtME39XJq4UywB7Y0Y+uDd4maOO/X4GLFkwDVQFPzjYWJY0M0Dg4VYdS/fNIIO9H7SMH1Z2yMUBeO5TpkoOqHdQUQL4v1QBTUIPCPUDhQkl2Hqo7bVq9AWfgQ7AzGr8xKHWYC+Shsr5TUHPu9BUFUHPLSP2udfZtDkrMVRO55O1pd/FY4y/gtRDmCJxc+Rf4SRlu8uoyFOoIHCLPu6v/TNQf+I/S5FCL6G6glvi9yfYRg2qkRiMl+k5F6jY9S09NrjK2T0F7bXlhnkO5Ab7JDDyV6DeU9+kCWQpyyje8IIS5UM'+
			'VQ0EZL/Vs0QOJCkvapKy3cVGAWRfQlKEt7eE4xjX5Viys7tfp6Nu6pO+USoMYBiQPUQC2uuzn7VtcDSqs/MpFLYPNXYZMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image pl_4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.1,sy:1.1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_pl_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_pl_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_pl_4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_pl_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_pl_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_pl_4.style[domTransition]='opacity 0s';
				if (me._image_pl_4.ggCurrentLogicStateAlpha == 0) {
					me._image_pl_4.style.visibility=me._image_pl_4.ggVisible?'inherit':'hidden';
					me._image_pl_4.style.opacity=1;
				}
				else {
					me._image_pl_4.style.visibility=me._image_pl_4.ggVisible?'inherit':'hidden';
					me._image_pl_4.style.opacity=0.8;
				}
			}
		}
		me._image_pl_4.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '70%';
			me._map.style.height = '45%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_mi_1.style[domTransition]='none';
			me._image_mi_1.style.visibility=(Number(me._image_mi_1.style.opacity)>0||!me._image_mi_1.style.opacity)?'inherit':'hidden';
			me._image_mi_1.ggVisible=true;
			me._image_pl_4.style[domTransition]='none';
			me._image_pl_4.style.visibility='hidden';
			me._image_pl_4.ggVisible=false;
		}
		me._image_pl_4.onmouseover=function (e) {
			me.elementMouseOver['image_pl_4']=true;
			me._image_pl_4.logicBlock_alpha();
		}
		me._image_pl_4.onmouseout=function (e) {
			me.elementMouseOver['image_pl_4']=false;
			me._image_pl_4.logicBlock_alpha();
		}
		me._image_pl_4.ontouchend=function (e) {
			me.elementMouseOver['image_pl_4']=false;
			me._image_pl_4.logicBlock_alpha();
		}
		me._image_pl_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_pl_4);
		el=me._image_pl_3=document.createElement('div');
		els=me._image_pl_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_pl_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABaklEQVRYhe2XW27DIBBFD47T9ivqCrLXrqBr6Aq6p64gylfbJKYfBtVGwIzxM1KuZBmZYTgMw8PGWsvWVK0NENMDSqt6gK0J3l3FEtME39XJq4UywB7Y0Y+uDd4maOO/X4GLFkwDVQFPzjYWJY0M0Dg4VYdS/fNIIO9H7SMH1Z2yMUBeO5TpkoOqHdQUQL4v1QBTUIPCPUDhQkl2Hqo7bVq9AWfgQ7AzGr8xKHWYC+Shsr5TUHPu9BUFUHPLSP2udfZtDkrMVRO55O1pd/FY4y/gtRDmCJxc+Rf4SRlu8uoyFOoIHCLPu6v/TNQf+I/S5FCL6G6glvi9yfYRg2qkRiMl+k5F6jY9S09NrjK2T0F7bXlhnkO5Ab7JDDyV6DeU9+kCWQpyyje8IIS5UM'+
			'VQ0EZL/Vs0QOJCkvapKy3cVGAWRfQlKEt7eE4xjX5Viys7tfp6Nu6pO+USoMYBiQPUQC2uuzn7VtcDSqs/MpFLYPNXYZMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image pl_3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.1,sy:1.1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_pl_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_pl_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_pl_3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_pl_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_pl_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_pl_3.style[domTransition]='opacity 0s';
				if (me._image_pl_3.ggCurrentLogicStateAlpha == 0) {
					me._image_pl_3.style.visibility=me._image_pl_3.ggVisible?'inherit':'hidden';
					me._image_pl_3.style.opacity=1;
				}
				else {
					me._image_pl_3.style.visibility=me._image_pl_3.ggVisible?'inherit':'hidden';
					me._image_pl_3.style.opacity=0.8;
				}
			}
		}
		me._image_pl_3.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '45%';
			me._map.style.height = '85%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_pl_4.style[domTransition]='none';
			me._image_pl_4.style.visibility=(Number(me._image_pl_4.style.opacity)>0||!me._image_pl_4.style.opacity)?'inherit':'hidden';
			me._image_pl_4.ggVisible=true;
			me._image_pl_3.style[domTransition]='none';
			me._image_pl_3.style.visibility='hidden';
			me._image_pl_3.ggVisible=false;
		}
		me._image_pl_3.onmouseover=function (e) {
			me.elementMouseOver['image_pl_3']=true;
			me._image_pl_3.logicBlock_alpha();
		}
		me._image_pl_3.onmouseout=function (e) {
			me.elementMouseOver['image_pl_3']=false;
			me._image_pl_3.logicBlock_alpha();
		}
		me._image_pl_3.ontouchend=function (e) {
			me.elementMouseOver['image_pl_3']=false;
			me._image_pl_3.logicBlock_alpha();
		}
		me._image_pl_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_pl_3);
		el=me._image_pl_2=document.createElement('div');
		els=me._image_pl_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_pl_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABaklEQVRYhe2XW27DIBBFD47T9ivqCrLXrqBr6Aq6p64gylfbJKYfBtVGwIzxM1KuZBmZYTgMw8PGWsvWVK0NENMDSqt6gK0J3l3FEtME39XJq4UywB7Y0Y+uDd4maOO/X4GLFkwDVQFPzjYWJY0M0Dg4VYdS/fNIIO9H7SMH1Z2yMUBeO5TpkoOqHdQUQL4v1QBTUIPCPUDhQkl2Hqo7bVq9AWfgQ7AzGr8xKHWYC+Shsr5TUHPu9BUFUHPLSP2udfZtDkrMVRO55O1pd/FY4y/gtRDmCJxc+Rf4SRlu8uoyFOoIHCLPu6v/TNQf+I/S5FCL6G6glvi9yfYRg2qkRiMl+k5F6jY9S09NrjK2T0F7bXlhnkO5Ab7JDDyV6DeU9+kCWQpyyje8IIS5UM'+
			'VQ0EZL/Vs0QOJCkvapKy3cVGAWRfQlKEt7eE4xjX5Viys7tfp6Nu6pO+USoMYBiQPUQC2uuzn7VtcDSqs/MpFLYPNXYZMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image pl_2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.1,sy:1.1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_pl_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_pl_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_pl_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_pl_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_pl_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_pl_2.style[domTransition]='opacity 0s';
				if (me._image_pl_2.ggCurrentLogicStateAlpha == 0) {
					me._image_pl_2.style.visibility=me._image_pl_2.ggVisible?'inherit':'hidden';
					me._image_pl_2.style.opacity=1;
				}
				else {
					me._image_pl_2.style.visibility=me._image_pl_2.ggVisible?'inherit':'hidden';
					me._image_pl_2.style.opacity=0.8;
				}
			}
		}
		me._image_pl_2.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '45%';
			me._map.style.height = '60%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_pl_3.style[domTransition]='none';
			me._image_pl_3.style.visibility=(Number(me._image_pl_3.style.opacity)>0||!me._image_pl_3.style.opacity)?'inherit':'hidden';
			me._image_pl_3.ggVisible=true;
			me._image_pl_2.style[domTransition]='none';
			me._image_pl_2.style.visibility='hidden';
			me._image_pl_2.ggVisible=false;
		}
		me._image_pl_2.onmouseover=function (e) {
			me.elementMouseOver['image_pl_2']=true;
			me._image_pl_2.logicBlock_alpha();
		}
		me._image_pl_2.onmouseout=function (e) {
			me.elementMouseOver['image_pl_2']=false;
			me._image_pl_2.logicBlock_alpha();
		}
		me._image_pl_2.ontouchend=function (e) {
			me.elementMouseOver['image_pl_2']=false;
			me._image_pl_2.logicBlock_alpha();
		}
		me._image_pl_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_pl_2);
		el=me._image_pl_1=document.createElement('div');
		els=me._image_pl_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_pl_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAABaklEQVRYhe2XW27DIBBFD47T9ivqCrLXrqBr6Aq6p64gylfbJKYfBtVGwIzxM1KuZBmZYTgMw8PGWsvWVK0NENMDSqt6gK0J3l3FEtME39XJq4UywB7Y0Y+uDd4maOO/X4GLFkwDVQFPzjYWJY0M0Dg4VYdS/fNIIO9H7SMH1Z2yMUBeO5TpkoOqHdQUQL4v1QBTUIPCPUDhQkl2Hqo7bVq9AWfgQ7AzGr8xKHWYC+Shsr5TUHPu9BUFUHPLSP2udfZtDkrMVRO55O1pd/FY4y/gtRDmCJxc+Rf4SRlu8uoyFOoIHCLPu6v/TNQf+I/S5FCL6G6glvi9yfYRg2qkRiMl+k5F6jY9S09NrjK2T0F7bXlhnkO5Ab7JDDyV6DeU9+kCWQpyyje8IIS5UM'+
			'VQ0EZL/Vs0QOJCkvapKy3cVGAWRfQlKEt7eE4xjX5Viys7tfp6Nu6pO+USoMYBiQPUQC2uuzn7VtcDSqs/MpFLYPNXYZMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image pl_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 95px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_pl_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_pl_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_pl_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_pl_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_pl_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_pl_1.style[domTransition]='opacity 0s';
				if (me._image_pl_1.ggCurrentLogicStateAlpha == 0) {
					me._image_pl_1.style.visibility=me._image_pl_1.ggVisible?'inherit':'hidden';
					me._image_pl_1.style.opacity=1;
				}
				else {
					me._image_pl_1.style.visibility=me._image_pl_1.ggVisible?'inherit':'hidden';
					me._image_pl_1.style.opacity=0.8;
				}
			}
		}
		me._image_pl_1.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map.style.width = '30%';
			me._map.style.height = '36%';
			setTimeout(function() {skin.updateSize(me._map);}, 500);
			me._image_pl_2.style[domTransition]='none';
			me._image_pl_2.style.visibility=(Number(me._image_pl_2.style.opacity)>0||!me._image_pl_2.style.opacity)?'inherit':'hidden';
			me._image_pl_2.ggVisible=true;
			me._image_pl_1.style[domTransition]='none';
			me._image_pl_1.style.visibility='hidden';
			me._image_pl_1.ggVisible=false;
		}
		me._image_pl_1.onmouseover=function (e) {
			me.elementMouseOver['image_pl_1']=true;
			me._image_pl_1.logicBlock_alpha();
		}
		me._image_pl_1.onmouseout=function (e) {
			me.elementMouseOver['image_pl_1']=false;
			me._image_pl_1.logicBlock_alpha();
		}
		me._image_pl_1.ontouchend=function (e) {
			me.elementMouseOver['image_pl_1']=false;
			me._image_pl_1.logicBlock_alpha();
		}
		me._image_pl_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._image_pl_1);
		el=me._svg_map_1b=document.createElement('div');
		els=me._svg_map_1b__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_map_1b__img.setAttribute('src',basePath + 'images/svg_map_1b.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_map_1b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 50px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_map_1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_map_1b.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_map_1b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_map_1b.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_map_1b.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_map_1b.style[domTransition]='opacity 0s';
				if (me._svg_map_1b.ggCurrentLogicStateAlpha == 0) {
					me._svg_map_1b.style.visibility=me._svg_map_1b.ggVisible?'inherit':'hidden';
					me._svg_map_1b.style.opacity=1;
				}
				else {
					me._svg_map_1b.style.visibility=me._svg_map_1b.ggVisible?'inherit':'hidden';
					me._svg_map_1b.style.opacity=0.80001;
				}
			}
		}
		me._svg_map_1b.onclick=function (e) {
			me._map.style[domTransition]='none';
			me._map.style.opacity='0';
			me._map.style.visibility='hidden';
			me._svg_map_1.style[domTransition]='none';
			me._svg_map_1.style.visibility=(Number(me._svg_map_1.style.opacity)>0||!me._svg_map_1.style.opacity)?'inherit':'hidden';
			me._svg_map_1.ggVisible=true;
			me._svg_map_1b.style[domTransition]='none';
			me._svg_map_1b.style.visibility='hidden';
			me._svg_map_1b.ggVisible=false;
			me._image_mi_1.style[domTransition]='none';
			me._image_mi_1.style.opacity='0';
			me._image_mi_1.style.visibility='hidden';
			me._image_mi_2.style[domTransition]='none';
			me._image_mi_2.style.opacity='0';
			me._image_mi_2.style.visibility='hidden';
			me._image_mi_3.style[domTransition]='none';
			me._image_mi_3.style.opacity='0';
			me._image_mi_3.style.visibility='hidden';
			me._image_mi_4.style[domTransition]='none';
			me._image_mi_4.style.opacity='0';
			me._image_mi_4.style.visibility='hidden';
			me._image_pl_1.style[domTransition]='none';
			me._image_pl_1.style.opacity='0';
			me._image_pl_1.style.visibility='hidden';
			me._image_pl_2.style[domTransition]='none';
			me._image_pl_2.style.opacity='0';
			me._image_pl_2.style.visibility='hidden';
			me._image_pl_3.style[domTransition]='none';
			me._image_pl_3.style.opacity='0';
			me._image_pl_3.style.visibility='hidden';
			me._image_pl_4.style[domTransition]='none';
			me._image_pl_4.style.opacity='0';
			me._image_pl_4.style.visibility='hidden';
		}
		me._svg_map_1b.onmouseover=function (e) {
			me.elementMouseOver['svg_map_1b']=true;
			me._svg_map_1b.logicBlock_alpha();
		}
		me._svg_map_1b.onmouseout=function (e) {
			me.elementMouseOver['svg_map_1b']=false;
			me._svg_map_1b.logicBlock_alpha();
		}
		me._svg_map_1b.ontouchend=function (e) {
			me.elementMouseOver['svg_map_1b']=false;
			me._svg_map_1b.logicBlock_alpha();
		}
		me._svg_map_1b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._svg_map_1b);
		el=me._svg_map_1=document.createElement('div');
		els=me._svg_map_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB3aWR0aD0iNDA5Ni4wMDAwMDBwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDA5Ni4wMDAwMDAgNDA5Ni4wMDAwMDAiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSI0MDk2LjAwMDAwMHB0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KIDxnIHRyYW5zZm9ybT'+
			'0idHJhbnNsYXRlKDAuMDAwMDAwLDQwOTYuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0xNzM4MCAzNDE4NiBjMCAtOCAtMjEgLTM2IC00NyAtNjMgLTI3IC0yNyAtNzUgLTc5IC0xMDggLTExNiAtMzImI3hhOy0zNyAtNjcgLTY3IC03NyAtNjcgLTE3IDAgLTE4IC0xNTkgLTE4IC0zOTMwIGwwIC0zOTMwIC0xNDgwIC0zIC0xNDgwIC0yJiN4YTstMTI3IC0xMjcgYy03MSAtNzEgLTEzNCAtMTI4IC0xNDAgLTEyOCAtNyAwIC0xOSAtMTAgLTI3IC0yMiAtMTQgLTIwIC0xNiYjeGE7LTExNiAtMTYgLTg0MSAw'+
			'IC01NDUgMyAtODI1IDEwIC04MzggNiAtMTAgMTggLTE5IDI4IC0xOSA5IDAgNzYgLTYwIDE0NyAtMTMzJiN4YTtsMTMwIC0xMzIgMjk5MCAtNSBjMTY0NSAtMyAzMDA3IC0yIDMwMjcgMiAzMSA3IDYxIDMyIDE2NCAxMzggNzQgNzYgMTM1IDEzMCYjeGE7MTQ2IDEzMCAxMSAwIDIzIDExIDI4IDI2IDYgMTYgMTAgMzMxIDEwIDgzMCAwIDcwMiAtMiA4MDkgLTE1IDgzNCAtOSAxNyAtMjMmI3hhOzMwIC0zMiAzMCAtOSAwIC03MyA1NyAtMTQyIDEyOCBsLTEyNiAxMjcgLTQyMCAyIGMtMjMxIDIgLTQyMiAzIC00MjUgMyAtMyAwJiN4YTstNCAxMzI2IC0zIDI5NDcgbDMgMjk0OCA0NTE2IDMgNDUxNS'+
			'AyIDEzOCAxMzkgYzc2IDc2IDE0NCAxNDAgMTUyIDE0MyAxMiA0JiN4YTsxNCAxMjUgMTcgODE5IDEgNDQ4IDAgODI0IC0zIDgzNyAtMyAxMiAtMTEgMjIgLTE4IDIyIC0xOSAwIC0yMzcgMjIzIC0yMzcmI3hhOzI0MyAwIDE2IC0yOTAgMTcgLTU1NDAgMTcgLTQ3MzkgMCAtNTU0MCAtMiAtNTU0MCAtMTR6Ii8+CiAgPHBhdGggZD0iTTMxNTgwIDM0MTgzIGMtMSAtMjIgLTIxNCAtMjQzIC0yMzUgLTI0MyAtMTMgMCAtMTUgLTkzIC0xNSAtODQwIDAmI3hhOy02NTQgMyAtODQwIDEyIC04NDAgNyAwIDc0IC02MyAxNDkgLTE0MCBsMTM3IC0xNDAgMTEzNiAwIDExMzYgMCAwIC02NTE1IDAmI3hhOy02'+
			'NTE1IC0xMjUyIDAgLTEyNTMgMCAtMTI3IC0xMjUgYy03MCAtNjggLTEzOSAtMTI3IC0xNTMgLTEzMSAtMTQgLTMgLTI3IC0xNSYjeGE7LTMwIC0yOCAtMyAtMTEgLTQgLTM5NCAtMyAtODUxIGwzIC04MjkgMjIgLTYgYzEyIC0zIDg1IC02NyAxNjIgLTE0MyBsMTM5JiN4YTstMTM3IDEyNDYgMCAxMjQ2IDAgMCAtMTM2NCAwIC0xMzY1IDE1OCAtMTU1IDE1NyAtMTU1IDgwMiAtMSA4MDIgMCAxMjcgMTMwJiN4YTtjNzAgNzIgMTM4IDEzMyAxNTEgMTM2IGwyMyA2IDAgMTAwMDQgMCAxMDAwNCAtMjcgMCBjLTIwIDAgLTUzIDI3IC0xNDUgMTE3JiN4YTstNjUgNjQgLTExOCAxMjMgLTExOCAxMzAgMC'+
			'AxMSAtMzg1IDEzIC0yMTI1IDEzIC0yMDE3IDAgLTIxMjUgLTEgLTIxMjUgLTE3eiIvPgogIDxwYXRoIGQ9Ik01MDc4IDI2MDczIGMtMTAgLTIgLTE4IC0xMiAtMTggLTIxIDAgLTkgLTIzIC0zNyAtNTEgLTYyIC0yOCAtMjUmI3hhOy04MSAtNzMgLTExNyAtMTA3IC0zNyAtMzQgLTczIC02MyAtNzkgLTYzIC0xMCAwIC0xMyAtODM4IC0xMyAtNDE1NCBsMCAtNDE1NSYjeGE7MjMgLTYgYzI2IC04IDI0NyAtMjI0IDI0NyAtMjQyIDAgLTEwIDE2NyAtMTMgODMwIC0xMyA0NTcgMCA4MzAgNCA4MzAgOCAwIDEwJiN4YTs4MiA5NSAyMDMgMjExIGw4NyA4MyAwIDMxMzkgMCAzMTM5IDE5NjcgMCAxOTY2'+
			'IDAgMTM3IDEzNSBjNzUgNzQgMTQzIDEzNSAxNTImI3hhOzEzNSAxMSAwIDE5IDExIDIzIDMzIDMgMTcgNSAzOTggMyA4NDYgbC0zIDgxMyAtMjMgMTcgYy0xMiA5IC03OSA3MSAtMTQ5IDEzOCYjeGE7LTg1IDgyIC0xMzUgMTIzIC0xNTYgMTI3IC0zNCA3IC01ODMzIDYgLTU4NTkgLTF6Ii8+CiAgPHBhdGggZD0iTTIzNDUzIDI2MDczIGMtMTMgLTIgLTIzIC05IC0yMyAtMTQgMCAtNSAtMTcgLTI2IC0zOSAtNDYgLTE2NiAtMTYzJiN4YTstMjAwIC0xOTMgLTIxNCAtMTkzIC05IDAgLTIxIC05IC0yNyAtMTkgLTcgLTE0IC05IC0yOTEgLTggLTg1NyBsMyAtODM4IDIyJiN4YTstNiBjMjYgLTYgMj'+
			'UzIC0yMTkgMjUzIC0yMzcgMCAtMjggNDQgLTMzIDMxOSAtMzMgbDI4MSAwIDAgLTQzMjQgMCAtNDMyMyAyMyYjeGE7LTI0IGMxMyAtMTMgNTcgLTU2IDk4IC05NSA0MSAtMzggMTAyIC0xMDAgMTM2IC0xMzcgbDYxIC02NyA4MTIgMCA4MTEgMCAyMiYjeGE7MjMgYzEyIDEzIDM2IDM4IDUzIDU3IDE3IDE5IDc1IDc4IDEzMCAxMzAgbDk5IDk1IDAgNzY4IDAgNzY3IDkzMyAwIGM3ODQgMCYjeGE7OTM3IDIgOTYwIDE0IDE1IDggODEgNzEgMTQ3IDE0MCA4MSA4NiAxMjYgMTI2IDE0MSAxMjYgMTQgMCAyNCA4IDI4IDIzIDggMzImI3hhOzcgMTY2MCAtMiAxNjc0IC00IDYgLTE5IDE0IC0zNCAxOCAt'+
			'MTUgNCAtNzcgNTggLTE0NyAxMzEgbC0xMjIgMTI0IC05NDIgMCYjeGE7Yy01MTggMCAtOTQ2IDAgLTk1MiAwIC03IDAgLTkgMTE0MyAtNyAzNDE1IGwyIDM0MTUgLTEyMiAxMTcgYy02NyA2NSAtMTM1JiN4YTsxMzIgLTE1MSAxNDggbC0zMCAzMCAtMTI0NiAxIGMtNjg1IDEgLTEyNTYgLTEgLTEyNjggLTN6Ii8+CiAgPHBhdGggZD0iTTUwNzAgMTQ2NjAgYzAgLTYgLTUxIC02MiAtMTEyIC0xMjUgLTc4IC04MCAtMTIwIC0xMTUgLTEzNSAtMTE1JiN4YTtsLTIzIDAgMCAtMzk5MCBjMCAtMzIzMiAyIC0zOTkwIDEzIC0zOTkwIDIwIDAgMjI3IC0yMDMgMjI3IC0yMjMgMCAtMTYgMjg3JiN4YTstMT'+
			'cgNTUxNSAtMTcgNTMyMCAwIDU1MTUgMSA1NTE1IDE4IDAgMjIgMjEwIDI0MiAyMzIgMjQyIDExIDAgMTcgMTMgMjAgNDMgMyYjeGE7MjMgNiAzOTQgOCA4MjMgMiA3OTUgMSA4MjQgLTM0IDgyNCAtOCAwIC03MiA2MSAtMTQ0IDEzNSBsLTEzMCAxMzUgLTQ1MDEgMCYjeGE7LTQ1MDEgMCAwIDI5NzMgMCAyOTc0IC0xNDAgMTM4IGMtNzcgNzcgLTE0MCAxNDUgLTE0MCAxNTIgMCAxMSAtMTU4IDEzIC04MzUmI3hhOzEzIC01NjUgMCAtODM1IC0zIC04MzUgLTEweiIvPgogIDxwYXRoIGQ9Ik0yNDMzMyAxMTI5MCBjLTEyIC01IC0yNyAtMTkgLTMzIC0zMiAtMTYgLTMxIC0yMjEgLTIzOCAtMjM2IC0y'+
			'MzgmI3hhOy03IDAgLTE5IC0xMSAtMjggLTI1IC0xNSAtMjMgLTE2IC0xMzcgLTE2IC0xMjk3IGwxIC0xMjczIC0yMzk4IC0zIC0yMzk3IC0yJiN4YTstMTMzIC0xMzIgYy03MyAtNzMgLTE0MiAtMTM2IC0xNTMgLTE0MCAtMjAgLTcgLTIwIC0xNiAtMjAgLTg0OCAwIC03OTYgMSYjeGE7LTg0MCAxOCAtODQwIDIyIDAgMjQyIC0yMjAgMjQyIC0yNDMgMCAtMTYgNDMzIC0xNyA4MzUwIC0xNyA3OTE5IDAgODM1MCAxJiN4YTs4MzUwIDE3IDAgMjAgMjA3IDIyMyAyMjcgMjIzIDExIDAgMTMgNDIwIDEzIDIxOTUgMCAyMTMxIC0xIDIxOTUgLTE5IDIxOTUmI3hhOy0xMCAwIC03MiA1NiAtMTQ1IDEzMC'+
			'BsLTEyNyAxMzAgLTgxNCAwIGMtNzQ0IDAgLTgxNSAtMSAtODI3IC0xNiAtMTIgLTE2JiN4YTstMjMyIC0yMzQgLTI3MCAtMjY4IC0xNyAtMTUgLTE4IC04NSAtMTggLTEyMDEgbDAgLTExODUgLTM4MTcgMCAtMzgxOCAwIDMmI3hhOzEyNTIgYzIgNjg5IDAgMTI3MiAtMyAxMjk2IC00IDI3IC0xMyA0NSAtMjMgNDkgLTkgNCAtNzggNjkgLTE1NCAxNDUgbC0xMzYmI3hhOzEzOCAtNzk5IC0xIGMtNDM5IDAgLTgwOCAtNCAtODIwIC05eiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_map_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_map_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 50px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_map_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_map_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_map_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_map_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_map_1.style[domTransition]='opacity 0s';
				if (me._svg_map_1.ggCurrentLogicStateAlpha == 0) {
					me._svg_map_1.style.visibility=me._svg_map_1.ggVisible?'inherit':'hidden';
					me._svg_map_1.style.opacity=1;
				}
				else {
					me._svg_map_1.style.visibility=me._svg_map_1.ggVisible?'inherit':'hidden';
					me._svg_map_1.style.opacity=0.80001;
				}
			}
		}
		me._svg_map_1.onclick=function (e) {
			me._map.style[domTransition]='none';
			me._map.style.opacity='1';
			me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
			me._svg_map_1b.style[domTransition]='none';
			me._svg_map_1b.style.visibility=(Number(me._svg_map_1b.style.opacity)>0||!me._svg_map_1b.style.opacity)?'inherit':'hidden';
			me._svg_map_1b.ggVisible=true;
			me._svg_map_1.style[domTransition]='none';
			me._svg_map_1.style.visibility='hidden';
			me._svg_map_1.ggVisible=false;
			me._image_mi_1.style[domTransition]='none';
			me._image_mi_1.style.opacity='1';
			me._image_mi_1.style.visibility=me._image_mi_1.ggVisible?'inherit':'hidden';
			me._image_mi_2.style[domTransition]='none';
			me._image_mi_2.style.opacity='1';
			me._image_mi_2.style.visibility=me._image_mi_2.ggVisible?'inherit':'hidden';
			me._image_mi_3.style[domTransition]='none';
			me._image_mi_3.style.opacity='1';
			me._image_mi_3.style.visibility=me._image_mi_3.ggVisible?'inherit':'hidden';
			me._image_mi_4.style[domTransition]='none';
			me._image_mi_4.style.opacity='1';
			me._image_mi_4.style.visibility=me._image_mi_4.ggVisible?'inherit':'hidden';
			me._image_pl_1.style[domTransition]='none';
			me._image_pl_1.style.opacity='1';
			me._image_pl_1.style.visibility=me._image_pl_1.ggVisible?'inherit':'hidden';
			me._image_pl_2.style[domTransition]='none';
			me._image_pl_2.style.opacity='1';
			me._image_pl_2.style.visibility=me._image_pl_2.ggVisible?'inherit':'hidden';
			me._image_pl_3.style[domTransition]='none';
			me._image_pl_3.style.opacity='1';
			me._image_pl_3.style.visibility=me._image_pl_3.ggVisible?'inherit':'hidden';
			me._image_pl_4.style[domTransition]='none';
			me._image_pl_4.style.opacity='1';
			me._image_pl_4.style.visibility=me._image_pl_4.ggVisible?'inherit':'hidden';
		}
		me._svg_map_1.onmouseover=function (e) {
			me.elementMouseOver['svg_map_1']=true;
			me._svg_map_1.logicBlock_alpha();
		}
		me._svg_map_1.onmouseout=function (e) {
			me.elementMouseOver['svg_map_1']=false;
			me._svg_map_1.logicBlock_alpha();
		}
		me._svg_map_1.ontouchend=function (e) {
			me.elementMouseOver['svg_map_1']=false;
			me._svg_map_1.logicBlock_alpha();
		}
		me._svg_map_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._svg_map_1);
		el=me._hiidemenu_komp1=document.createElement('div');
		els=me._hiidemenu_komp1__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu_komp1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu_komp1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 5px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu_komp1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu_komp1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu_komp1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu_komp1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu_komp1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu_komp1.style[domTransition]='opacity 0s';
				if (me._hiidemenu_komp1.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu_komp1.style.visibility=me._hiidemenu_komp1.ggVisible?'inherit':'hidden';
					me._hiidemenu_komp1.style.opacity=1;
				}
				else {
					me._hiidemenu_komp1.style.visibility=me._hiidemenu_komp1.ggVisible?'inherit':'hidden';
					me._hiidemenu_komp1.style.opacity=0.80001;
				}
			}
		}
		me._hiidemenu_komp1.onclick=function (e) {
			var flag=me._minipano_komp.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano_komp.style[domTransition]='none';
			} else {
				me._minipano_komp.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano_komp.style.opacity='0';
				me._minipano_komp.style.visibility='hidden';
			} else {
				me._minipano_komp.style.opacity='1';
				me._minipano_komp.style.visibility=me._minipano_komp.ggVisible?'inherit':'hidden';
			}
			me._minipano_komp.ggOpacitiyActive=!flag;
		}
		me._hiidemenu_komp1.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu_komp1']=true;
			me._hiidemenu_komp1.logicBlock_alpha();
		}
		me._hiidemenu_komp1.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu_komp1']=false;
			me._hiidemenu_komp1.logicBlock_alpha();
		}
		me._hiidemenu_komp1.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu_komp1']=false;
			me._hiidemenu_komp1.logicBlock_alpha();
		}
		me._hiidemenu_komp1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_komp1.appendChild(me._hiidemenu_komp1);
		me.divSkin.appendChild(me._controller_komp1);
		el=me._controller_mobile=document.createElement('div');
		el.ggId="controller_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_mobile.style[domTransition]='';
				if (me._controller_mobile.ggCurrentLogicStateVisible == 0) {
					me._controller_mobile.style.visibility=(Number(me._controller_mobile.style.opacity)>0||!me._controller_mobile.style.opacity)?'inherit':'hidden';
					me._controller_mobile.ggVisible=true;
				}
				else {
					me._controller_mobile.style.visibility="hidden";
					me._controller_mobile.ggVisible=false;
				}
			}
		}
		me._controller_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2.style[domTransition]='opacity 0s';
				if (me._image_2.ggCurrentLogicStateAlpha == 0) {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=1;
				}
				else {
					me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
					me._image_2.style.opacity=0.7;
				}
			}
		}
		me._image_2.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_2.onmouseover=function (e) {
			me.elementMouseOver['image_2']=true;
			me._image_2.logicBlock_alpha();
		}
		me._image_2.onmouseout=function (e) {
			me.elementMouseOver['image_2']=false;
			me._image_2.logicBlock_alpha();
		}
		me._image_2.ontouchend=function (e) {
			me.elementMouseOver['image_2']=false;
			me._image_2.logicBlock_alpha();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._image_2);
		el=me._share_mobile=document.createElement('div');
		els=me._share_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_share_mobile';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share_mobile";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 46px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['share_mobile'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._share_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._share_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._share_mobile.style[domTransition]='opacity 0s';
				if (me._share_mobile.ggCurrentLogicStateAlpha == 0) {
					me._share_mobile.style.visibility=me._share_mobile.ggVisible?'inherit':'hidden';
					me._share_mobile.style.opacity=1;
				}
				else {
					me._share_mobile.style.visibility=me._share_mobile.ggVisible?'inherit':'hidden';
					me._share_mobile.style.opacity=0.7;
				}
			}
		}
		me._share_mobile.onclick=function (e) {
			text = location.href
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + pano.getCurrentNode() + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";

if (navigator.share) {
navigator.share({
        title: "",
        text: "",
        url: text,
      });
} else {
dummy = document.createElement('input');

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
}
		}
		me._share_mobile.onmouseover=function (e) {
			me.elementMouseOver['share_mobile']=true;
			me._share_mobile.logicBlock_alpha();
		}
		me._share_mobile.onmouseout=function (e) {
			me.elementMouseOver['share_mobile']=false;
			me._share_mobile.logicBlock_alpha();
		}
		me._share_mobile.ontouchend=function (e) {
			me.elementMouseOver['share_mobile']=false;
			me._share_mobile.logicBlock_alpha();
		}
		me._share_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._share_mobile);
		el=me._svg_map2_1b=document.createElement('div');
		els=me._svg_map2_1b__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_map2_1b__img.setAttribute('src',basePath + 'images/svg_map2_1b.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_map2_1b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 64px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_map2_1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_map2_1b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_map2_1b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_map2_1b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_map2_1b.style[domTransition]='opacity 0s';
				if (me._svg_map2_1b.ggCurrentLogicStateVisible == 0) {
					me._svg_map2_1b.style.visibility="hidden";
					me._svg_map2_1b.ggVisible=false;
				}
				else {
					me._svg_map2_1b.style.visibility=(Number(me._svg_map2_1b.style.opacity)>0||!me._svg_map2_1b.style.opacity)?'inherit':'hidden';
					me._svg_map2_1b.ggVisible=true;
				}
			}
		}
		me._svg_map2_1b.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_map2_1b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_map2_1b.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_map2_1b.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_map2_1b.style[domTransition]='opacity 0s';
				if (me._svg_map2_1b.ggCurrentLogicStateAlpha == 0) {
					me._svg_map2_1b.style.visibility=me._svg_map2_1b.ggVisible?'inherit':'hidden';
					me._svg_map2_1b.style.opacity=1;
				}
				else {
					me._svg_map2_1b.style.visibility=me._svg_map2_1b.ggVisible?'inherit':'hidden';
					me._svg_map2_1b.style.opacity=0.7;
				}
			}
		}
		me._svg_map2_1b.onclick=function (e) {
			me._map_mob.ggClearMap();
			me._map_mob.style[domTransition]='none';
			me._map_mob.style.visibility='hidden';
			me._map_mob.ggVisible=false;
			me._svg_map2_1.style[domTransition]='none';
			me._svg_map2_1.style.visibility=(Number(me._svg_map2_1.style.opacity)>0||!me._svg_map2_1.style.opacity)?'inherit':'hidden';
			me._svg_map2_1.ggVisible=true;
			me._svg_map2_1b.style[domTransition]='none';
			me._svg_map2_1b.style.visibility='hidden';
			me._svg_map2_1b.ggVisible=false;
		}
		me._svg_map2_1b.onmouseover=function (e) {
			me.elementMouseOver['svg_map2_1b']=true;
			me._svg_map2_1b.logicBlock_alpha();
		}
		me._svg_map2_1b.onmouseout=function (e) {
			me.elementMouseOver['svg_map2_1b']=false;
			me._svg_map2_1b.logicBlock_alpha();
		}
		me._svg_map2_1b.ontouchend=function (e) {
			me.elementMouseOver['svg_map2_1b']=false;
			me._svg_map2_1b.logicBlock_alpha();
		}
		me._svg_map2_1b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._svg_map2_1b);
		el=me._svg_map2_1=document.createElement('div');
		els=me._svg_map2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgJ2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkJz4KPHN2ZyB3aWR0aD0iNDA5Ni4wMDAwMDBwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDA5Ni4wMDAwMDAgNDA5Ni4wMDAwMDAiIHZlcnNpb249IjEuMCIgaGVpZ2h0PSI0MDk2LjAwMDAwMHB0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KIDxnIHRyYW5zZm9ybT'+
			'0idHJhbnNsYXRlKDAuMDAwMDAwLDQwOTYuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0xNzM4MCAzNDE4NiBjMCAtOCAtMjEgLTM2IC00NyAtNjMgLTI3IC0yNyAtNzUgLTc5IC0xMDggLTExNiAtMzImI3hhOy0zNyAtNjcgLTY3IC03NyAtNjcgLTE3IDAgLTE4IC0xNTkgLTE4IC0zOTMwIGwwIC0zOTMwIC0xNDgwIC0zIC0xNDgwIC0yJiN4YTstMTI3IC0xMjcgYy03MSAtNzEgLTEzNCAtMTI4IC0xNDAgLTEyOCAtNyAwIC0xOSAtMTAgLTI3IC0yMiAtMTQgLTIwIC0xNiYjeGE7LTExNiAtMTYgLTg0MSAw'+
			'IC01NDUgMyAtODI1IDEwIC04MzggNiAtMTAgMTggLTE5IDI4IC0xOSA5IDAgNzYgLTYwIDE0NyAtMTMzJiN4YTtsMTMwIC0xMzIgMjk5MCAtNSBjMTY0NSAtMyAzMDA3IC0yIDMwMjcgMiAzMSA3IDYxIDMyIDE2NCAxMzggNzQgNzYgMTM1IDEzMCYjeGE7MTQ2IDEzMCAxMSAwIDIzIDExIDI4IDI2IDYgMTYgMTAgMzMxIDEwIDgzMCAwIDcwMiAtMiA4MDkgLTE1IDgzNCAtOSAxNyAtMjMmI3hhOzMwIC0zMiAzMCAtOSAwIC03MyA1NyAtMTQyIDEyOCBsLTEyNiAxMjcgLTQyMCAyIGMtMjMxIDIgLTQyMiAzIC00MjUgMyAtMyAwJiN4YTstNCAxMzI2IC0zIDI5NDcgbDMgMjk0OCA0NTE2IDMgNDUxNS'+
			'AyIDEzOCAxMzkgYzc2IDc2IDE0NCAxNDAgMTUyIDE0MyAxMiA0JiN4YTsxNCAxMjUgMTcgODE5IDEgNDQ4IDAgODI0IC0zIDgzNyAtMyAxMiAtMTEgMjIgLTE4IDIyIC0xOSAwIC0yMzcgMjIzIC0yMzcmI3hhOzI0MyAwIDE2IC0yOTAgMTcgLTU1NDAgMTcgLTQ3MzkgMCAtNTU0MCAtMiAtNTU0MCAtMTR6Ii8+CiAgPHBhdGggZD0iTTMxNTgwIDM0MTgzIGMtMSAtMjIgLTIxNCAtMjQzIC0yMzUgLTI0MyAtMTMgMCAtMTUgLTkzIC0xNSAtODQwIDAmI3hhOy02NTQgMyAtODQwIDEyIC04NDAgNyAwIDc0IC02MyAxNDkgLTE0MCBsMTM3IC0xNDAgMTEzNiAwIDExMzYgMCAwIC02NTE1IDAmI3hhOy02'+
			'NTE1IC0xMjUyIDAgLTEyNTMgMCAtMTI3IC0xMjUgYy03MCAtNjggLTEzOSAtMTI3IC0xNTMgLTEzMSAtMTQgLTMgLTI3IC0xNSYjeGE7LTMwIC0yOCAtMyAtMTEgLTQgLTM5NCAtMyAtODUxIGwzIC04MjkgMjIgLTYgYzEyIC0zIDg1IC02NyAxNjIgLTE0MyBsMTM5JiN4YTstMTM3IDEyNDYgMCAxMjQ2IDAgMCAtMTM2NCAwIC0xMzY1IDE1OCAtMTU1IDE1NyAtMTU1IDgwMiAtMSA4MDIgMCAxMjcgMTMwJiN4YTtjNzAgNzIgMTM4IDEzMyAxNTEgMTM2IGwyMyA2IDAgMTAwMDQgMCAxMDAwNCAtMjcgMCBjLTIwIDAgLTUzIDI3IC0xNDUgMTE3JiN4YTstNjUgNjQgLTExOCAxMjMgLTExOCAxMzAgMC'+
			'AxMSAtMzg1IDEzIC0yMTI1IDEzIC0yMDE3IDAgLTIxMjUgLTEgLTIxMjUgLTE3eiIvPgogIDxwYXRoIGQ9Ik01MDc4IDI2MDczIGMtMTAgLTIgLTE4IC0xMiAtMTggLTIxIDAgLTkgLTIzIC0zNyAtNTEgLTYyIC0yOCAtMjUmI3hhOy04MSAtNzMgLTExNyAtMTA3IC0zNyAtMzQgLTczIC02MyAtNzkgLTYzIC0xMCAwIC0xMyAtODM4IC0xMyAtNDE1NCBsMCAtNDE1NSYjeGE7MjMgLTYgYzI2IC04IDI0NyAtMjI0IDI0NyAtMjQyIDAgLTEwIDE2NyAtMTMgODMwIC0xMyA0NTcgMCA4MzAgNCA4MzAgOCAwIDEwJiN4YTs4MiA5NSAyMDMgMjExIGw4NyA4MyAwIDMxMzkgMCAzMTM5IDE5NjcgMCAxOTY2'+
			'IDAgMTM3IDEzNSBjNzUgNzQgMTQzIDEzNSAxNTImI3hhOzEzNSAxMSAwIDE5IDExIDIzIDMzIDMgMTcgNSAzOTggMyA4NDYgbC0zIDgxMyAtMjMgMTcgYy0xMiA5IC03OSA3MSAtMTQ5IDEzOCYjeGE7LTg1IDgyIC0xMzUgMTIzIC0xNTYgMTI3IC0zNCA3IC01ODMzIDYgLTU4NTkgLTF6Ii8+CiAgPHBhdGggZD0iTTIzNDUzIDI2MDczIGMtMTMgLTIgLTIzIC05IC0yMyAtMTQgMCAtNSAtMTcgLTI2IC0zOSAtNDYgLTE2NiAtMTYzJiN4YTstMjAwIC0xOTMgLTIxNCAtMTkzIC05IDAgLTIxIC05IC0yNyAtMTkgLTcgLTE0IC05IC0yOTEgLTggLTg1NyBsMyAtODM4IDIyJiN4YTstNiBjMjYgLTYgMj'+
			'UzIC0yMTkgMjUzIC0yMzcgMCAtMjggNDQgLTMzIDMxOSAtMzMgbDI4MSAwIDAgLTQzMjQgMCAtNDMyMyAyMyYjeGE7LTI0IGMxMyAtMTMgNTcgLTU2IDk4IC05NSA0MSAtMzggMTAyIC0xMDAgMTM2IC0xMzcgbDYxIC02NyA4MTIgMCA4MTEgMCAyMiYjeGE7MjMgYzEyIDEzIDM2IDM4IDUzIDU3IDE3IDE5IDc1IDc4IDEzMCAxMzAgbDk5IDk1IDAgNzY4IDAgNzY3IDkzMyAwIGM3ODQgMCYjeGE7OTM3IDIgOTYwIDE0IDE1IDggODEgNzEgMTQ3IDE0MCA4MSA4NiAxMjYgMTI2IDE0MSAxMjYgMTQgMCAyNCA4IDI4IDIzIDggMzImI3hhOzcgMTY2MCAtMiAxNjc0IC00IDYgLTE5IDE0IC0zNCAxOCAt'+
			'MTUgNCAtNzcgNTggLTE0NyAxMzEgbC0xMjIgMTI0IC05NDIgMCYjeGE7Yy01MTggMCAtOTQ2IDAgLTk1MiAwIC03IDAgLTkgMTE0MyAtNyAzNDE1IGwyIDM0MTUgLTEyMiAxMTcgYy02NyA2NSAtMTM1JiN4YTsxMzIgLTE1MSAxNDggbC0zMCAzMCAtMTI0NiAxIGMtNjg1IDEgLTEyNTYgLTEgLTEyNjggLTN6Ii8+CiAgPHBhdGggZD0iTTUwNzAgMTQ2NjAgYzAgLTYgLTUxIC02MiAtMTEyIC0xMjUgLTc4IC04MCAtMTIwIC0xMTUgLTEzNSAtMTE1JiN4YTtsLTIzIDAgMCAtMzk5MCBjMCAtMzIzMiAyIC0zOTkwIDEzIC0zOTkwIDIwIDAgMjI3IC0yMDMgMjI3IC0yMjMgMCAtMTYgMjg3JiN4YTstMT'+
			'cgNTUxNSAtMTcgNTMyMCAwIDU1MTUgMSA1NTE1IDE4IDAgMjIgMjEwIDI0MiAyMzIgMjQyIDExIDAgMTcgMTMgMjAgNDMgMyYjeGE7MjMgNiAzOTQgOCA4MjMgMiA3OTUgMSA4MjQgLTM0IDgyNCAtOCAwIC03MiA2MSAtMTQ0IDEzNSBsLTEzMCAxMzUgLTQ1MDEgMCYjeGE7LTQ1MDEgMCAwIDI5NzMgMCAyOTc0IC0xNDAgMTM4IGMtNzcgNzcgLTE0MCAxNDUgLTE0MCAxNTIgMCAxMSAtMTU4IDEzIC04MzUmI3hhOzEzIC01NjUgMCAtODM1IC0zIC04MzUgLTEweiIvPgogIDxwYXRoIGQ9Ik0yNDMzMyAxMTI5MCBjLTEyIC01IC0yNyAtMTkgLTMzIC0zMiAtMTYgLTMxIC0yMjEgLTIzOCAtMjM2IC0y'+
			'MzgmI3hhOy03IDAgLTE5IC0xMSAtMjggLTI1IC0xNSAtMjMgLTE2IC0xMzcgLTE2IC0xMjk3IGwxIC0xMjczIC0yMzk4IC0zIC0yMzk3IC0yJiN4YTstMTMzIC0xMzIgYy03MyAtNzMgLTE0MiAtMTM2IC0xNTMgLTE0MCAtMjAgLTcgLTIwIC0xNiAtMjAgLTg0OCAwIC03OTYgMSYjeGE7LTg0MCAxOCAtODQwIDIyIDAgMjQyIC0yMjAgMjQyIC0yNDMgMCAtMTYgNDMzIC0xNyA4MzUwIC0xNyA3OTE5IDAgODM1MCAxJiN4YTs4MzUwIDE3IDAgMjAgMjA3IDIyMyAyMjcgMjIzIDExIDAgMTMgNDIwIDEzIDIxOTUgMCAyMTMxIC0xIDIxOTUgLTE5IDIxOTUmI3hhOy0xMCAwIC03MiA1NiAtMTQ1IDEzMC'+
			'BsLTEyNyAxMzAgLTgxNCAwIGMtNzQ0IDAgLTgxNSAtMSAtODI3IC0xNiAtMTIgLTE2JiN4YTstMjMyIC0yMzQgLTI3MCAtMjY4IC0xNyAtMTUgLTE4IC04NSAtMTggLTEyMDEgbDAgLTExODUgLTM4MTcgMCAtMzgxOCAwIDMmI3hhOzEyNTIgYzIgNjg5IDAgMTI3MiAtMyAxMjk2IC00IDI3IC0xMyA0NSAtMjMgNDkgLTkgNCAtNzggNjkgLTE1NCAxNDUgbC0xMzYmI3hhOzEzOCAtNzk5IC0xIGMtNDM5IDAgLTgwOCAtNCAtODIwIC05eiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_map2_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_map2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 64px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_map2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_map2_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_map2_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_map2_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_map2_1.style[domTransition]='opacity 0s';
				if (me._svg_map2_1.ggCurrentLogicStateVisible == 0) {
					me._svg_map2_1.style.visibility="hidden";
					me._svg_map2_1.ggVisible=false;
				}
				else {
					me._svg_map2_1.style.visibility="hidden";
					me._svg_map2_1.ggVisible=false;
				}
			}
		}
		me._svg_map2_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_map2_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svg_map2_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svg_map2_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svg_map2_1.style[domTransition]='opacity 0s';
				if (me._svg_map2_1.ggCurrentLogicStateAlpha == 0) {
					me._svg_map2_1.style.visibility=me._svg_map2_1.ggVisible?'inherit':'hidden';
					me._svg_map2_1.style.opacity=1;
				}
				else {
					me._svg_map2_1.style.visibility=me._svg_map2_1.ggVisible?'inherit':'hidden';
					me._svg_map2_1.style.opacity=0.7;
				}
			}
		}
		me._svg_map2_1.onclick=function (e) {
			if (me._map_mob.ggMapNotLoaded) {
				me._map_mob.ggInitMap(false);
				me._map_mob.ggInitMapMarkers(true);
			}
			me._map_mob.style[domTransition]='none';
			me._map_mob.style.visibility=(Number(me._map_mob.style.opacity)>0||!me._map_mob.style.opacity)?'inherit':'hidden';
			me._map_mob.ggVisible=true;
			me._svg_map2_1b.style[domTransition]='none';
			me._svg_map2_1b.style.visibility=(Number(me._svg_map2_1b.style.opacity)>0||!me._svg_map2_1b.style.opacity)?'inherit':'hidden';
			me._svg_map2_1b.ggVisible=true;
			me._svg_map2_1.style[domTransition]='none';
			me._svg_map2_1.style.visibility='hidden';
			me._svg_map2_1.ggVisible=false;
			if (
				(
					((player.getIsMobile() == true))
				)
			) {
				me._minipano_komp.style[domTransition]='none';
				me._minipano_komp.style.visibility='hidden';
				me._minipano_komp.ggVisible=false;
			}
			var flag=me._minipano_mob_sboky.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano_mob_sboky.style[domTransition]='none';
			} else {
				me._minipano_mob_sboky.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano_mob_sboky.style.opacity='0';
				me._minipano_mob_sboky.style.visibility='hidden';
			} else {
				me._minipano_mob_sboky.style.opacity='0';
				me._minipano_mob_sboky.style.visibility='hidden';
			}
			me._minipano_mob_sboky.ggOpacitiyActive=!flag;
		}
		me._svg_map2_1.onmouseover=function (e) {
			me.elementMouseOver['svg_map2_1']=true;
			me._svg_map2_1.logicBlock_alpha();
		}
		me._svg_map2_1.onmouseout=function (e) {
			me.elementMouseOver['svg_map2_1']=false;
			me._svg_map2_1.logicBlock_alpha();
		}
		me._svg_map2_1.ontouchend=function (e) {
			me.elementMouseOver['svg_map2_1']=false;
			me._svg_map2_1.logicBlock_alpha();
		}
		me._svg_map2_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._svg_map2_1);
		el=me._hiidemenu_5=document.createElement('div');
		els=me._hiidemenu_5__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 10px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hiidemenu_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hiidemenu_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hiidemenu_5.style[domTransition]='opacity 0s';
				if (me._hiidemenu_5.ggCurrentLogicStateVisible == 0) {
					me._hiidemenu_5.style.visibility="hidden";
					me._hiidemenu_5.ggVisible=false;
				}
				else {
					me._hiidemenu_5.style.visibility=(Number(me._hiidemenu_5.style.opacity)>0||!me._hiidemenu_5.style.opacity)?'inherit':'hidden';
					me._hiidemenu_5.ggVisible=true;
				}
			}
		}
		me._hiidemenu_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu_5'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu_5.style[domTransition]='opacity 0s';
				if (me._hiidemenu_5.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu_5.style.visibility=me._hiidemenu_5.ggVisible?'inherit':'hidden';
					me._hiidemenu_5.style.opacity=1;
				}
				else {
					me._hiidemenu_5.style.visibility=me._hiidemenu_5.ggVisible?'inherit':'hidden';
					me._hiidemenu_5.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu_5.onclick=function (e) {
			var flag=me._minipano_mob_sboky.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano_mob_sboky.style[domTransition]='none';
			} else {
				me._minipano_mob_sboky.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano_mob_sboky.style.opacity='0';
				me._minipano_mob_sboky.style.visibility='hidden';
			} else {
				me._minipano_mob_sboky.style.opacity='1';
				me._minipano_mob_sboky.style.visibility=me._minipano_mob_sboky.ggVisible?'inherit':'hidden';
			}
			me._minipano_mob_sboky.ggOpacitiyActive=!flag;
			var flag=me._minipano_mob_niz.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano_mob_niz.style[domTransition]='none';
			} else {
				me._minipano_mob_niz.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano_mob_niz.style.opacity='0';
				me._minipano_mob_niz.style.visibility='hidden';
			} else {
				me._minipano_mob_niz.style.opacity='1';
				me._minipano_mob_niz.style.visibility=me._minipano_mob_niz.ggVisible?'inherit':'hidden';
			}
			me._minipano_mob_niz.ggOpacitiyActive=!flag;
		}
		me._hiidemenu_5.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu_5']=true;
			me._hiidemenu_5.logicBlock_alpha();
		}
		me._hiidemenu_5.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu_5']=false;
			me._hiidemenu_5.logicBlock_alpha();
		}
		me._hiidemenu_5.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu_5']=false;
			me._hiidemenu_5.logicBlock_alpha();
		}
		me._hiidemenu_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._hiidemenu_5);
		el=me._hiidemenu_4=document.createElement('div');
		els=me._hiidemenu_4__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 10px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hiidemenu_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hiidemenu_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hiidemenu_4.style[domTransition]='opacity 0s';
				if (me._hiidemenu_4.ggCurrentLogicStateVisible == 0) {
					me._hiidemenu_4.style.visibility="hidden";
					me._hiidemenu_4.ggVisible=false;
				}
				else {
					me._hiidemenu_4.style.visibility=(Number(me._hiidemenu_4.style.opacity)>0||!me._hiidemenu_4.style.opacity)?'inherit':'hidden';
					me._hiidemenu_4.ggVisible=true;
				}
			}
		}
		me._hiidemenu_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu_4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu_4.style[domTransition]='opacity 0s';
				if (me._hiidemenu_4.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu_4.style.visibility=me._hiidemenu_4.ggVisible?'inherit':'hidden';
					me._hiidemenu_4.style.opacity=1;
				}
				else {
					me._hiidemenu_4.style.visibility=me._hiidemenu_4.ggVisible?'inherit':'hidden';
					me._hiidemenu_4.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu_4.onclick=function (e) {
			var flag=me._minipano_mob_niz.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._minipano_mob_niz.style[domTransition]='none';
			} else {
				me._minipano_mob_niz.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._minipano_mob_niz.style.opacity='0';
				me._minipano_mob_niz.style.visibility='hidden';
			} else {
				me._minipano_mob_niz.style.opacity='1';
				me._minipano_mob_niz.style.visibility=me._minipano_mob_niz.ggVisible?'inherit':'hidden';
			}
			me._minipano_mob_niz.ggOpacitiyActive=!flag;
		}
		me._hiidemenu_4.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu_4']=true;
			me._hiidemenu_4.logicBlock_alpha();
		}
		me._hiidemenu_4.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu_4']=false;
			me._hiidemenu_4.logicBlock_alpha();
		}
		me._hiidemenu_4.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu_4']=false;
			me._hiidemenu_4.logicBlock_alpha();
		}
		me._hiidemenu_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_mobile.appendChild(me._hiidemenu_4);
		me.divSkin.appendChild(me._controller_mobile);
		el=me._minipano_komp=document.createElement('div');
		els=me._minipano_komp__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -89.5px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipano_komp.ggScrollByX = function(diffX) {
			if(!me._minipano_komp.ggHorScrollVisible || diffX == 0 || me._minipano_komp.ggHPercentVisible >= 1.0) return;
			me._minipano_komp.ggScrollPosX = (me._minipano_komp__horScrollFg.offsetLeft + diffX);
			me._minipano_komp.ggScrollPosX = Math.max(me._minipano_komp.ggScrollPosX, 0);
			me._minipano_komp.ggScrollPosX = Math.min(me._minipano_komp.ggScrollPosX, me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
			me._minipano_komp__horScrollFg.style.left = me._minipano_komp.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_komp.ggScrollPosX / (me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
			me._minipano_komp__content.style.left = -(Math.round((me._minipano_komp.ggContentWidth * (1.0 - me._minipano_komp.ggHPercentVisible)) * percentScrolled)) + me._minipano_komp.ggContentLeftOffset + 'px';
			me._minipano_komp.ggScrollPosXPercent = (me._minipano_komp__horScrollFg.offsetLeft / me._minipano_komp__horScrollBg.offsetWidth);
		}
		me._minipano_komp.ggScrollByXSmooth = function(diffX) {
			if(!me._minipano_komp.ggHorScrollVisible || diffX == 0 || me._minipano_komp.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipano_komp.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipano_komp.ggScrollPosX >= me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth)) {
					me._minipano_komp.ggScrollPosX = Math.min(me._minipano_komp.ggScrollPosX, me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipano_komp.ggScrollPosX <= 0)) {
					me._minipano_komp.ggScrollPosX = Math.max(me._minipano_komp.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipano_komp__horScrollFg.style.left = me._minipano_komp.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_komp.ggScrollPosX / (me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
			me._minipano_komp__content.style.left = -(Math.round((me._minipano_komp.ggContentWidth * (1.0 - me._minipano_komp.ggHPercentVisible)) * percentScrolled)) + me._minipano_komp.ggContentLeftOffset + 'px';
			me._minipano_komp.ggScrollPosXPercent = (me._minipano_komp__horScrollFg.offsetLeft / me._minipano_komp__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipano_komp.ggScrollByY = function(diffY) {
			if(!me._minipano_komp.ggVertScrollVisible || diffY == 0 || me._minipano_komp.ggVPercentVisible >= 1.0) return;
			me._minipano_komp.ggScrollPosY = (me._minipano_komp__vertScrollFg.offsetTop + diffY);
			me._minipano_komp.ggScrollPosY = Math.max(me._minipano_komp.ggScrollPosY, 0);
			me._minipano_komp.ggScrollPosY = Math.min(me._minipano_komp.ggScrollPosY, me._minipano_komp__vertScrollBg.offsetHeight - me._minipano_komp__vertScrollFg.offsetHeight);
			me._minipano_komp__vertScrollFg.style.top = me._minipano_komp.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_komp.ggScrollPosY / (me._minipano_komp__vertScrollBg.offsetHeight - me._minipano_komp__vertScrollFg.offsetHeight);
			me._minipano_komp__content.style.top = -(Math.round((me._minipano_komp.ggContentHeight * (1.0 - me._minipano_komp.ggVPercentVisible)) * percentScrolled)) + me._minipano_komp.ggContentTopOffset + 'px';
			me._minipano_komp.ggScrollPosYPercent = (me._minipano_komp__vertScrollFg.offsetTop / me._minipano_komp__vertScrollBg.offsetHeight);
		}
		me._minipano_komp.ggScrollByYSmooth = function(diffY) {
			if(!me._minipano_komp.ggVertScrollVisible || diffY == 0 || me._minipano_komp.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipano_komp.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipano_komp.ggScrollPosY >= me._minipano_komp__vertScrollBg.offsetHeight - me._minipano_komp__vertScrollFg.offsetHeight)) {
					me._minipano_komp.ggScrollPosY = Math.min(me._minipano_komp.ggScrollPosY, me._minipano_komp__vertScrollBg.offsetHeight - me._minipano_komp__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipano_komp.ggScrollPosY <= 0)) {
					me._minipano_komp.ggScrollPosY = Math.max(me._minipano_komp.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipano_komp__vertScrollFg.style.top = me._minipano_komp.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_komp.ggScrollPosY / (me._minipano_komp__vertScrollBg.offsetHeight - me._minipano_komp__vertScrollFg.offsetHeight);
			me._minipano_komp__content.style.top = -(Math.round((me._minipano_komp.ggContentHeight * (1.0 - me._minipano_komp.ggVPercentVisible)) * percentScrolled)) + me._minipano_komp.ggContentTopOffset + 'px';
			me._minipano_komp.ggScrollPosYPercent = (me._minipano_komp__vertScrollFg.offsetTop / me._minipano_komp__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipano_komp.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipano_komp.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipano_komp.ggHPercentVisible);
					me._minipano_komp.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipano_komp.clientWidth - (me._minipano_komp.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipano_komp.clientWidth - (me._minipano_komp.ggVertScrollVisible ? 15 : 0))) * me._minipano_komp.ggHPercentVisible);
					me._minipano_komp.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipano_komp.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipano_komp.ggVPercentVisible);
					me._minipano_komp.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipano_komp.clientHeight - (me._minipano_komp.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipano_komp.clientHeight - (me._minipano_komp.ggHorScrollVisible ? 15 : 0))) * me._minipano_komp.ggVPercentVisible);
					me._minipano_komp.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipano_komp.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._minipano_komp.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._minipano_komp__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_komp.ggDragInertiaX *= 0.65;
					me._minipano_komp.ggDragInertiaY *= 0.65;
					me._minipano_komp.ggScrollByX(me._minipano_komp.ggDragInertiaX);
					me._minipano_komp.ggScrollByY(me._minipano_komp.ggDragInertiaY);
					if (Math.abs(me._minipano_komp.ggDragInertiaX) < 1.0 && Math.abs(me._minipano_komp.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._minipano_komp__content.ontouchend = null;
				me._minipano_komp__content.ontouchmove = null;
				me._minipano_komp__content.onpointerup = null;
				me._minipano_komp__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._minipano_komp__content.onpointerup = me._minipano_komp__content.ontouchend;
		}
			me._minipano_komp__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._minipano_komp.ggDragLastX) * me._minipano_komp.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._minipano_komp.ggDragLastY) * me._minipano_komp.ggVPercentVisible;
				me._minipano_komp.ggDragInertiaX = -diffX;
				me._minipano_komp.ggDragInertiaY = -diffY;
				me._minipano_komp.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._minipano_komp.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._minipano_komp.ggScrollByX(-diffX);
				me._minipano_komp.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._minipano_komp__content.onpointermove = me._minipano_komp__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._minipano_komp__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 800px; height: 15px; background-color: rgba(108,108,108,0.705882); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._minipano_komp__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 800px; height: 15px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		me._minipano_komp.ggScrollPosX = 0;
		me._minipano_komp.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipano_komp.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_komp.ggDragInertiaX *= 0.65;
					me._minipano_komp.ggScrollByX(me._minipano_komp.ggDragInertiaX);
					if (Math.abs(me._minipano_komp.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._minipano_komp.ggDragLastX;
				me._minipano_komp.ggDragInertiaX = diffX;
				me._minipano_komp.ggDragLastX = e.clientX;
				me._minipano_komp.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipano_komp.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_komp.ggDragInertiaX *= 0.65;
					me._minipano_komp.ggScrollByX(me._minipano_komp.ggDragInertiaX);
					if (Math.abs(me._minipano_komp.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._minipano_komp.ggDragLastX;
				me._minipano_komp.ggDragInertiaX = diffX;
				me._minipano_komp.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._minipano_komp.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._minipano_komp.ggScrollWidth;
			if (e.offsetX < me._minipano_komp.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano_komp.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipano_komp__horScrollBg.getBoundingClientRect();
			var diffX = me._minipano_komp.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._minipano_komp.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano_komp.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._minipano_komp.ggScrollByXSmooth(30 * me._minipano_komp.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._minipano_komp__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipano_komp";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 53px;';
		hs+='height : 106px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipano_komp.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipano_komp.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_komp.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_komp.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_komp.style[domTransition]='';
				if (me._minipano_komp.ggCurrentLogicStateVisible == 0) {
					me._minipano_komp.style.visibility="hidden";
					me._minipano_komp.ggVisible=false;
				}
				else {
					me._minipano_komp.style.visibility=(Number(me._minipano_komp.style.opacity)>0||!me._minipano_komp.style.opacity)?'inherit':'hidden';
					me._minipano_komp.ggVisible=true;
				}
			}
		}
		me._minipano_komp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._minipano_komp__horScrollBg.style.visibility = 'inherit';
					me._minipano_komp__horScrollFg.style.visibility = 'inherit';
					me._minipano_komp.ggHorScrollVisible = true;
				} else {
					me._minipano_komp__horScrollBg.style.visibility = 'hidden';
					me._minipano_komp__horScrollFg.style.visibility = 'hidden';
					me._minipano_komp.ggHorScrollVisible = false;
				}
				if(me._minipano_komp.ggHorScrollVisible) {
					me._minipano_komp.ggAvailableHeight = me._minipano_komp.clientHeight - 15;
					if (me._minipano_komp.ggVertScrollVisible) {
						me._minipano_komp.ggAvailableWidth = me._minipano_komp.clientWidth - 15;
						me._minipano_komp.ggAvailableWidthWithScale = me._minipano_komp.getBoundingClientRect().width - me._minipano_komp__horScrollBg.getBoundingClientRect().height;
					} else {
						me._minipano_komp.ggAvailableWidth = me._minipano_komp.clientWidth;
						me._minipano_komp.ggAvailableWidthWithScale = me._minipano_komp.getBoundingClientRect().width;
					}
					me._minipano_komp__horScrollBg.style.width = me._minipano_komp.ggAvailableWidth + 'px';
					me._minipano_komp.ggHPercentVisible = contentWidth != 0 ? me._minipano_komp.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._minipano_komp.ggHPercentVisible > 1.0) me._minipano_komp.ggHPercentVisible = 1.0;
					me._minipano_komp.ggScrollWidth = Math.round(me._minipano_komp__horScrollBg.offsetWidth * me._minipano_komp.ggHPercentVisible);
					me._minipano_komp__horScrollFg.style.width = me._minipano_komp.ggScrollWidth + 'px';
					me._minipano_komp.ggScrollPosX = me._minipano_komp.ggScrollPosXPercent * me._minipano_komp.ggAvailableWidth;
					me._minipano_komp.ggScrollPosX = Math.min(me._minipano_komp.ggScrollPosX, me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
					me._minipano_komp__horScrollFg.style.left = me._minipano_komp.ggScrollPosX + 'px';
					if (me._minipano_komp.ggHPercentVisible < 1.0) {
						let percentScrolled = me._minipano_komp.ggScrollPosX / (me._minipano_komp__horScrollBg.offsetWidth - me._minipano_komp__horScrollFg.offsetWidth);
						me._minipano_komp__content.style.left = -(Math.round((me._minipano_komp.ggContentWidth * (1.0 - me._minipano_komp.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._minipano_komp.ggAvailableHeight = me._minipano_komp.clientHeight;
					me._minipano_komp.ggScrollPosX = 0;
					me._minipano_komp.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._minipano_komp.ggHorScrollVisible || vertScrollWasVisible != me._minipano_komp.ggVertScrollVisible) {
					me.updateSize(me._minipano_komp);
					me._minipano_komp.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 175;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text && me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text2 && me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text2.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._minipano_komp_node_text2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checker && me._thumbnail_cloner.ggInstances[i]._checker.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checker.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkervisited && me._thumbnail_cloner.ggInstances[i]._checkervisited.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkervisited.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._minipano_komp__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._minipano_komp);
		el=me._minipano_mob_niz=document.createElement('div');
		els=me._minipano_mob_niz__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -89.5px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipano_mob_niz.ggScrollByX = function(diffX) {
			if(!me._minipano_mob_niz.ggHorScrollVisible || diffX == 0 || me._minipano_mob_niz.ggHPercentVisible >= 1.0) return;
			me._minipano_mob_niz.ggScrollPosX = (me._minipano_mob_niz__horScrollFg.offsetLeft + diffX);
			me._minipano_mob_niz.ggScrollPosX = Math.max(me._minipano_mob_niz.ggScrollPosX, 0);
			me._minipano_mob_niz.ggScrollPosX = Math.min(me._minipano_mob_niz.ggScrollPosX, me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
			me._minipano_mob_niz__horScrollFg.style.left = me._minipano_mob_niz.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_mob_niz.ggScrollPosX / (me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
			me._minipano_mob_niz__content.style.left = -(Math.round((me._minipano_mob_niz.ggContentWidth * (1.0 - me._minipano_mob_niz.ggHPercentVisible)) * percentScrolled)) + me._minipano_mob_niz.ggContentLeftOffset + 'px';
			me._minipano_mob_niz.ggScrollPosXPercent = (me._minipano_mob_niz__horScrollFg.offsetLeft / me._minipano_mob_niz__horScrollBg.offsetWidth);
		}
		me._minipano_mob_niz.ggScrollByXSmooth = function(diffX) {
			if(!me._minipano_mob_niz.ggHorScrollVisible || diffX == 0 || me._minipano_mob_niz.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipano_mob_niz.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipano_mob_niz.ggScrollPosX >= me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth)) {
					me._minipano_mob_niz.ggScrollPosX = Math.min(me._minipano_mob_niz.ggScrollPosX, me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipano_mob_niz.ggScrollPosX <= 0)) {
					me._minipano_mob_niz.ggScrollPosX = Math.max(me._minipano_mob_niz.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipano_mob_niz__horScrollFg.style.left = me._minipano_mob_niz.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_mob_niz.ggScrollPosX / (me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
			me._minipano_mob_niz__content.style.left = -(Math.round((me._minipano_mob_niz.ggContentWidth * (1.0 - me._minipano_mob_niz.ggHPercentVisible)) * percentScrolled)) + me._minipano_mob_niz.ggContentLeftOffset + 'px';
			me._minipano_mob_niz.ggScrollPosXPercent = (me._minipano_mob_niz__horScrollFg.offsetLeft / me._minipano_mob_niz__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipano_mob_niz.ggScrollByY = function(diffY) {
			if(!me._minipano_mob_niz.ggVertScrollVisible || diffY == 0 || me._minipano_mob_niz.ggVPercentVisible >= 1.0) return;
			me._minipano_mob_niz.ggScrollPosY = (me._minipano_mob_niz__vertScrollFg.offsetTop + diffY);
			me._minipano_mob_niz.ggScrollPosY = Math.max(me._minipano_mob_niz.ggScrollPosY, 0);
			me._minipano_mob_niz.ggScrollPosY = Math.min(me._minipano_mob_niz.ggScrollPosY, me._minipano_mob_niz__vertScrollBg.offsetHeight - me._minipano_mob_niz__vertScrollFg.offsetHeight);
			me._minipano_mob_niz__vertScrollFg.style.top = me._minipano_mob_niz.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_mob_niz.ggScrollPosY / (me._minipano_mob_niz__vertScrollBg.offsetHeight - me._minipano_mob_niz__vertScrollFg.offsetHeight);
			me._minipano_mob_niz__content.style.top = -(Math.round((me._minipano_mob_niz.ggContentHeight * (1.0 - me._minipano_mob_niz.ggVPercentVisible)) * percentScrolled)) + me._minipano_mob_niz.ggContentTopOffset + 'px';
			me._minipano_mob_niz.ggScrollPosYPercent = (me._minipano_mob_niz__vertScrollFg.offsetTop / me._minipano_mob_niz__vertScrollBg.offsetHeight);
		}
		me._minipano_mob_niz.ggScrollByYSmooth = function(diffY) {
			if(!me._minipano_mob_niz.ggVertScrollVisible || diffY == 0 || me._minipano_mob_niz.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipano_mob_niz.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipano_mob_niz.ggScrollPosY >= me._minipano_mob_niz__vertScrollBg.offsetHeight - me._minipano_mob_niz__vertScrollFg.offsetHeight)) {
					me._minipano_mob_niz.ggScrollPosY = Math.min(me._minipano_mob_niz.ggScrollPosY, me._minipano_mob_niz__vertScrollBg.offsetHeight - me._minipano_mob_niz__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipano_mob_niz.ggScrollPosY <= 0)) {
					me._minipano_mob_niz.ggScrollPosY = Math.max(me._minipano_mob_niz.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipano_mob_niz__vertScrollFg.style.top = me._minipano_mob_niz.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_mob_niz.ggScrollPosY / (me._minipano_mob_niz__vertScrollBg.offsetHeight - me._minipano_mob_niz__vertScrollFg.offsetHeight);
			me._minipano_mob_niz__content.style.top = -(Math.round((me._minipano_mob_niz.ggContentHeight * (1.0 - me._minipano_mob_niz.ggVPercentVisible)) * percentScrolled)) + me._minipano_mob_niz.ggContentTopOffset + 'px';
			me._minipano_mob_niz.ggScrollPosYPercent = (me._minipano_mob_niz__vertScrollFg.offsetTop / me._minipano_mob_niz__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipano_mob_niz.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipano_mob_niz.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipano_mob_niz.ggHPercentVisible);
					me._minipano_mob_niz.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipano_mob_niz.clientWidth - (me._minipano_mob_niz.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipano_mob_niz.clientWidth - (me._minipano_mob_niz.ggVertScrollVisible ? 15 : 0))) * me._minipano_mob_niz.ggHPercentVisible);
					me._minipano_mob_niz.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipano_mob_niz.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipano_mob_niz.ggVPercentVisible);
					me._minipano_mob_niz.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipano_mob_niz.clientHeight - (me._minipano_mob_niz.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipano_mob_niz.clientHeight - (me._minipano_mob_niz.ggHorScrollVisible ? 15 : 0))) * me._minipano_mob_niz.ggVPercentVisible);
					me._minipano_mob_niz.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipano_mob_niz.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._minipano_mob_niz.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._minipano_mob_niz__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_niz.ggDragInertiaX *= 0.65;
					me._minipano_mob_niz.ggDragInertiaY *= 0.65;
					me._minipano_mob_niz.ggScrollByX(me._minipano_mob_niz.ggDragInertiaX);
					me._minipano_mob_niz.ggScrollByY(me._minipano_mob_niz.ggDragInertiaY);
					if (Math.abs(me._minipano_mob_niz.ggDragInertiaX) < 1.0 && Math.abs(me._minipano_mob_niz.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._minipano_mob_niz__content.ontouchend = null;
				me._minipano_mob_niz__content.ontouchmove = null;
				me._minipano_mob_niz__content.onpointerup = null;
				me._minipano_mob_niz__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._minipano_mob_niz__content.onpointerup = me._minipano_mob_niz__content.ontouchend;
		}
			me._minipano_mob_niz__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._minipano_mob_niz.ggDragLastX) * me._minipano_mob_niz.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._minipano_mob_niz.ggDragLastY) * me._minipano_mob_niz.ggVPercentVisible;
				me._minipano_mob_niz.ggDragInertiaX = -diffX;
				me._minipano_mob_niz.ggDragInertiaY = -diffY;
				me._minipano_mob_niz.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._minipano_mob_niz.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._minipano_mob_niz.ggScrollByX(-diffX);
				me._minipano_mob_niz.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._minipano_mob_niz__content.onpointermove = me._minipano_mob_niz__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._minipano_mob_niz__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 800px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._minipano_mob_niz__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 800px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._minipano_mob_niz.ggScrollPosX = 0;
		me._minipano_mob_niz.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipano_mob_niz.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_niz.ggDragInertiaX *= 0.65;
					me._minipano_mob_niz.ggScrollByX(me._minipano_mob_niz.ggDragInertiaX);
					if (Math.abs(me._minipano_mob_niz.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._minipano_mob_niz.ggDragLastX;
				me._minipano_mob_niz.ggDragInertiaX = diffX;
				me._minipano_mob_niz.ggDragLastX = e.clientX;
				me._minipano_mob_niz.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipano_mob_niz.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_niz.ggDragInertiaX *= 0.65;
					me._minipano_mob_niz.ggScrollByX(me._minipano_mob_niz.ggDragInertiaX);
					if (Math.abs(me._minipano_mob_niz.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._minipano_mob_niz.ggDragLastX;
				me._minipano_mob_niz.ggDragInertiaX = diffX;
				me._minipano_mob_niz.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._minipano_mob_niz.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._minipano_mob_niz.ggScrollWidth;
			if (e.offsetX < me._minipano_mob_niz.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano_mob_niz.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipano_mob_niz__horScrollBg.getBoundingClientRect();
			var diffX = me._minipano_mob_niz.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._minipano_mob_niz.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._minipano_mob_niz.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._minipano_mob_niz.ggScrollByXSmooth(30 * me._minipano_mob_niz.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._minipano_mob_niz__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipano_mob_niz";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 53px;';
		hs+='height : 106px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipano_mob_niz.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipano_mob_niz.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_niz.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_niz.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_niz.style[domTransition]='';
				if (me._minipano_mob_niz.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_niz.style.visibility="hidden";
					me._minipano_mob_niz.ggVisible=false;
				}
				else {
					me._minipano_mob_niz.style.visibility=(Number(me._minipano_mob_niz.style.opacity)>0||!me._minipano_mob_niz.style.opacity)?'inherit':'hidden';
					me._minipano_mob_niz.ggVisible=true;
				}
			}
		}
		me._minipano_mob_niz.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._minipano_mob_niz__horScrollBg.style.visibility = 'inherit';
					me._minipano_mob_niz__horScrollFg.style.visibility = 'inherit';
					me._minipano_mob_niz.ggHorScrollVisible = true;
				} else {
					me._minipano_mob_niz__horScrollBg.style.visibility = 'hidden';
					me._minipano_mob_niz__horScrollFg.style.visibility = 'hidden';
					me._minipano_mob_niz.ggHorScrollVisible = false;
				}
				if(me._minipano_mob_niz.ggHorScrollVisible) {
					me._minipano_mob_niz.ggAvailableHeight = me._minipano_mob_niz.clientHeight - 15;
					if (me._minipano_mob_niz.ggVertScrollVisible) {
						me._minipano_mob_niz.ggAvailableWidth = me._minipano_mob_niz.clientWidth - 15;
						me._minipano_mob_niz.ggAvailableWidthWithScale = me._minipano_mob_niz.getBoundingClientRect().width - me._minipano_mob_niz__horScrollBg.getBoundingClientRect().height;
					} else {
						me._minipano_mob_niz.ggAvailableWidth = me._minipano_mob_niz.clientWidth;
						me._minipano_mob_niz.ggAvailableWidthWithScale = me._minipano_mob_niz.getBoundingClientRect().width;
					}
					me._minipano_mob_niz__horScrollBg.style.width = me._minipano_mob_niz.ggAvailableWidth + 'px';
					me._minipano_mob_niz.ggHPercentVisible = contentWidth != 0 ? me._minipano_mob_niz.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._minipano_mob_niz.ggHPercentVisible > 1.0) me._minipano_mob_niz.ggHPercentVisible = 1.0;
					me._minipano_mob_niz.ggScrollWidth = Math.round(me._minipano_mob_niz__horScrollBg.offsetWidth * me._minipano_mob_niz.ggHPercentVisible);
					me._minipano_mob_niz__horScrollFg.style.width = me._minipano_mob_niz.ggScrollWidth + 'px';
					me._minipano_mob_niz.ggScrollPosX = me._minipano_mob_niz.ggScrollPosXPercent * me._minipano_mob_niz.ggAvailableWidth;
					me._minipano_mob_niz.ggScrollPosX = Math.min(me._minipano_mob_niz.ggScrollPosX, me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
					me._minipano_mob_niz__horScrollFg.style.left = me._minipano_mob_niz.ggScrollPosX + 'px';
					if (me._minipano_mob_niz.ggHPercentVisible < 1.0) {
						let percentScrolled = me._minipano_mob_niz.ggScrollPosX / (me._minipano_mob_niz__horScrollBg.offsetWidth - me._minipano_mob_niz__horScrollFg.offsetWidth);
						me._minipano_mob_niz__content.style.left = -(Math.round((me._minipano_mob_niz.ggContentWidth * (1.0 - me._minipano_mob_niz.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._minipano_mob_niz.ggAvailableHeight = me._minipano_mob_niz.clientHeight;
					me._minipano_mob_niz.ggScrollPosX = 0;
					me._minipano_mob_niz.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._minipano_mob_niz.ggHorScrollVisible || vertScrollWasVisible != me._minipano_mob_niz.ggVertScrollVisible) {
					me.updateSize(me._minipano_mob_niz);
					me._minipano_mob_niz.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner_ver=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 175;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_ver.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_ver.ggInstances.length; i++) {
					if (me._thumbnail_cloner_ver.ggInstances[i]._thumbnail_active_ver && me._thumbnail_cloner_ver.ggInstances[i]._thumbnail_active_ver.logicBlock_bordercolor) {
						me._thumbnail_cloner_ver.ggInstances[i]._thumbnail_active_ver.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_ver.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_ver.ggInstances.length; i++) {
					if (me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text && me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text.logicBlock_visible) {
						me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text.logicBlock_visible();
					}
					if (me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text2 && me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text2.logicBlock_visible) {
						me._thumbnail_cloner_ver.ggInstances[i]._minipano_mob_niz_node_text2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_ver.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_ver.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_ver.ggInstances.length; i++) {
					if (me._thumbnail_cloner_ver.ggInstances[i]._checker_ver && me._thumbnail_cloner_ver.ggInstances[i]._checker_ver.logicBlock_visible) {
						me._thumbnail_cloner_ver.ggInstances[i]._checker_ver.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_ver.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner_ver.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_ver.ggInstances.length; i++) {
					if (me._thumbnail_cloner_ver.ggInstances[i]._checkervisited_ver && me._thumbnail_cloner_ver.ggInstances[i]._checkervisited_ver.logicBlock_visible) {
						me._thumbnail_cloner_ver.ggInstances[i]._checkervisited_ver.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_ver.ggUpdating == true) return;
			me._thumbnail_cloner_ver.ggUpdating = true;
			var el=me._thumbnail_cloner_ver;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner_ver.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner_ver.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_ver.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner_ver.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner_ver.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_ver_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_ver.callChildLogicBlocks_active();
			me._thumbnail_cloner_ver.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner_ver.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner_ver.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner_ver.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner_ver.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner ver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_ver.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_ver.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_ver.childNodes.length; i++) {
				var child=me._thumbnail_cloner_ver.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_ver.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner_ver.ggUpdate();
		}
		me._thumbnail_cloner_ver.ggNodeChange=function () {
			me._thumbnail_cloner_ver.ggUpdateConditionNodeChange();
		}
		me._minipano_mob_niz__content.appendChild(me._thumbnail_cloner_ver);
		me.divSkin.appendChild(me._minipano_mob_niz);
		el=me._minipano_mob_sboky=document.createElement('div');
		els=me._minipano_mob_sboky__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 50%;';
		hs+='margin-left : -89.5px;';
		hs+='margin-top : -43px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me._minipano_mob_sboky.ggScrollByX = function(diffX) {
			if(!me._minipano_mob_sboky.ggHorScrollVisible || diffX == 0 || me._minipano_mob_sboky.ggHPercentVisible >= 1.0) return;
			me._minipano_mob_sboky.ggScrollPosX = (me._minipano_mob_sboky__horScrollFg.offsetLeft + diffX);
			me._minipano_mob_sboky.ggScrollPosX = Math.max(me._minipano_mob_sboky.ggScrollPosX, 0);
			me._minipano_mob_sboky.ggScrollPosX = Math.min(me._minipano_mob_sboky.ggScrollPosX, me._minipano_mob_sboky__horScrollBg.offsetWidth - me._minipano_mob_sboky__horScrollFg.offsetWidth);
			me._minipano_mob_sboky__horScrollFg.style.left = me._minipano_mob_sboky.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_mob_sboky.ggScrollPosX / (me._minipano_mob_sboky__horScrollBg.offsetWidth - me._minipano_mob_sboky__horScrollFg.offsetWidth);
			me._minipano_mob_sboky__content.style.left = -(Math.round((me._minipano_mob_sboky.ggContentWidth * (1.0 - me._minipano_mob_sboky.ggHPercentVisible)) * percentScrolled)) + me._minipano_mob_sboky.ggContentLeftOffset + 'px';
			me._minipano_mob_sboky.ggScrollPosXPercent = (me._minipano_mob_sboky__horScrollFg.offsetLeft / me._minipano_mob_sboky__horScrollBg.offsetWidth);
		}
		me._minipano_mob_sboky.ggScrollByXSmooth = function(diffX) {
			if(!me._minipano_mob_sboky.ggHorScrollVisible || diffX == 0 || me._minipano_mob_sboky.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._minipano_mob_sboky.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._minipano_mob_sboky.ggScrollPosX >= me._minipano_mob_sboky__horScrollBg.offsetWidth - me._minipano_mob_sboky__horScrollFg.offsetWidth)) {
					me._minipano_mob_sboky.ggScrollPosX = Math.min(me._minipano_mob_sboky.ggScrollPosX, me._minipano_mob_sboky__horScrollBg.offsetWidth - me._minipano_mob_sboky__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._minipano_mob_sboky.ggScrollPosX <= 0)) {
					me._minipano_mob_sboky.ggScrollPosX = Math.max(me._minipano_mob_sboky.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._minipano_mob_sboky__horScrollFg.style.left = me._minipano_mob_sboky.ggScrollPosX + 'px';
			let percentScrolled = me._minipano_mob_sboky.ggScrollPosX / (me._minipano_mob_sboky__horScrollBg.offsetWidth - me._minipano_mob_sboky__horScrollFg.offsetWidth);
			me._minipano_mob_sboky__content.style.left = -(Math.round((me._minipano_mob_sboky.ggContentWidth * (1.0 - me._minipano_mob_sboky.ggHPercentVisible)) * percentScrolled)) + me._minipano_mob_sboky.ggContentLeftOffset + 'px';
			me._minipano_mob_sboky.ggScrollPosXPercent = (me._minipano_mob_sboky__horScrollFg.offsetLeft / me._minipano_mob_sboky__horScrollBg.offsetWidth);
			}, 10);
		}
		me._minipano_mob_sboky.ggScrollByY = function(diffY) {
			if(!me._minipano_mob_sboky.ggVertScrollVisible || diffY == 0 || me._minipano_mob_sboky.ggVPercentVisible >= 1.0) return;
			me._minipano_mob_sboky.ggScrollPosY = (me._minipano_mob_sboky__vertScrollFg.offsetTop + diffY);
			me._minipano_mob_sboky.ggScrollPosY = Math.max(me._minipano_mob_sboky.ggScrollPosY, 0);
			me._minipano_mob_sboky.ggScrollPosY = Math.min(me._minipano_mob_sboky.ggScrollPosY, me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
			me._minipano_mob_sboky__vertScrollFg.style.top = me._minipano_mob_sboky.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_mob_sboky.ggScrollPosY / (me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
			me._minipano_mob_sboky__content.style.top = -(Math.round((me._minipano_mob_sboky.ggContentHeight * (1.0 - me._minipano_mob_sboky.ggVPercentVisible)) * percentScrolled)) + me._minipano_mob_sboky.ggContentTopOffset + 'px';
			me._minipano_mob_sboky.ggScrollPosYPercent = (me._minipano_mob_sboky__vertScrollFg.offsetTop / me._minipano_mob_sboky__vertScrollBg.offsetHeight);
		}
		me._minipano_mob_sboky.ggScrollByYSmooth = function(diffY) {
			if(!me._minipano_mob_sboky.ggVertScrollVisible || diffY == 0 || me._minipano_mob_sboky.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._minipano_mob_sboky.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._minipano_mob_sboky.ggScrollPosY >= me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight)) {
					me._minipano_mob_sboky.ggScrollPosY = Math.min(me._minipano_mob_sboky.ggScrollPosY, me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._minipano_mob_sboky.ggScrollPosY <= 0)) {
					me._minipano_mob_sboky.ggScrollPosY = Math.max(me._minipano_mob_sboky.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._minipano_mob_sboky__vertScrollFg.style.top = me._minipano_mob_sboky.ggScrollPosY + 'px';
			let percentScrolled = me._minipano_mob_sboky.ggScrollPosY / (me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
			me._minipano_mob_sboky__content.style.top = -(Math.round((me._minipano_mob_sboky.ggContentHeight * (1.0 - me._minipano_mob_sboky.ggVPercentVisible)) * percentScrolled)) + me._minipano_mob_sboky.ggContentTopOffset + 'px';
			me._minipano_mob_sboky.ggScrollPosYPercent = (me._minipano_mob_sboky__vertScrollFg.offsetTop / me._minipano_mob_sboky__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._minipano_mob_sboky.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._minipano_mob_sboky.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._minipano_mob_sboky.ggHPercentVisible);
					me._minipano_mob_sboky.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._minipano_mob_sboky.clientWidth - (me._minipano_mob_sboky.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._minipano_mob_sboky.clientWidth - (me._minipano_mob_sboky.ggVertScrollVisible ? 15 : 0))) * me._minipano_mob_sboky.ggHPercentVisible);
					me._minipano_mob_sboky.ggScrollByXSmooth(diffX);
				}
			}
			if (me._minipano_mob_sboky.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._minipano_mob_sboky.ggVPercentVisible);
					me._minipano_mob_sboky.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._minipano_mob_sboky.clientHeight - (me._minipano_mob_sboky.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._minipano_mob_sboky.clientHeight - (me._minipano_mob_sboky.ggHorScrollVisible ? 15 : 0))) * me._minipano_mob_sboky.ggVPercentVisible);
					me._minipano_mob_sboky.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._minipano_mob_sboky.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._minipano_mob_sboky.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._minipano_mob_sboky__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_sboky.ggDragInertiaX *= 0.65;
					me._minipano_mob_sboky.ggDragInertiaY *= 0.65;
					me._minipano_mob_sboky.ggScrollByX(me._minipano_mob_sboky.ggDragInertiaX);
					me._minipano_mob_sboky.ggScrollByY(me._minipano_mob_sboky.ggDragInertiaY);
					if (Math.abs(me._minipano_mob_sboky.ggDragInertiaX) < 1.0 && Math.abs(me._minipano_mob_sboky.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._minipano_mob_sboky__content.ontouchend = null;
				me._minipano_mob_sboky__content.ontouchmove = null;
				me._minipano_mob_sboky__content.onpointerup = null;
				me._minipano_mob_sboky__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._minipano_mob_sboky__content.onpointerup = me._minipano_mob_sboky__content.ontouchend;
		}
			me._minipano_mob_sboky__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._minipano_mob_sboky.ggDragLastX) * me._minipano_mob_sboky.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._minipano_mob_sboky.ggDragLastY) * me._minipano_mob_sboky.ggVPercentVisible;
				me._minipano_mob_sboky.ggDragInertiaX = -diffX;
				me._minipano_mob_sboky.ggDragInertiaY = -diffY;
				me._minipano_mob_sboky.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._minipano_mob_sboky.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._minipano_mob_sboky.ggScrollByX(-diffX);
				me._minipano_mob_sboky.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._minipano_mob_sboky__content.onpointermove = me._minipano_mob_sboky__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._minipano_mob_sboky__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 540px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._minipano_mob_sboky__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 540px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._minipano_mob_sboky.ggScrollPosY = 0;
		me._minipano_mob_sboky.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._minipano_mob_sboky.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_sboky.ggDragInertiaY *= 0.65;
					me._minipano_mob_sboky.ggScrollByY(me._minipano_mob_sboky.ggDragInertiaY);
					if (Math.abs(me._minipano_mob_sboky.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._minipano_mob_sboky.ggDragLastY;
				me._minipano_mob_sboky.ggDragInertiaY = diffY;
				me._minipano_mob_sboky.ggDragLastY = e.clientY;
				me._minipano_mob_sboky.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._minipano_mob_sboky.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._minipano_mob_sboky.ggDragInertiaY *= 0.65;
					me._minipano_mob_sboky.ggScrollByY(me._minipano_mob_sboky.ggDragInertiaY);
					if (Math.abs(me._minipano_mob_sboky.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._minipano_mob_sboky.ggDragLastY;
				me._minipano_mob_sboky.ggDragInertiaY = diffY;
				me._minipano_mob_sboky.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._minipano_mob_sboky.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._minipano_mob_sboky.ggScrollHeight;
			if (e.offsetY < me._minipano_mob_sboky.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._minipano_mob_sboky.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._minipano_mob_sboky__vertScrollBg.getBoundingClientRect();
			var diffY = me._minipano_mob_sboky.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._minipano_mob_sboky.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._minipano_mob_sboky.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._minipano_mob_sboky.ggScrollByYSmooth(30 * me._minipano_mob_sboky.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._minipano_mob_sboky__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="minipano_mob_sboky";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  1px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._minipano_mob_sboky.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._minipano_mob_sboky.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true)) && 
				((player.getViewerSize().width / player.getViewerSize().height < 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_sboky.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_sboky.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_sboky.style[domTransition]='';
				if (me._minipano_mob_sboky.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_sboky.style.visibility="hidden";
					me._minipano_mob_sboky.ggVisible=false;
				}
				else {
					me._minipano_mob_sboky.style.visibility=(Number(me._minipano_mob_sboky.style.opacity)>0||!me._minipano_mob_sboky.style.opacity)?'inherit':'hidden';
					me._minipano_mob_sboky.ggVisible=true;
				}
			}
		}
		me._minipano_mob_sboky.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if ((me._minipano_mob_sboky.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._minipano_mob_sboky.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._minipano_mob_sboky__vertScrollBg.style.visibility = 'inherit';
					me._minipano_mob_sboky__vertScrollFg.style.visibility = 'inherit';
					me._minipano_mob_sboky.ggVertScrollVisible = true;
				} else {
					me._minipano_mob_sboky__vertScrollBg.style.visibility = 'hidden';
					me._minipano_mob_sboky__vertScrollFg.style.visibility = 'hidden';
					me._minipano_mob_sboky.ggVertScrollVisible = false;
				}
				if(me._minipano_mob_sboky.ggVertScrollVisible) {
					me._minipano_mob_sboky.ggAvailableWidth = me._minipano_mob_sboky.clientWidth - 15;
					if (me._minipano_mob_sboky.ggHorScrollVisible) {
						me._minipano_mob_sboky.ggAvailableHeight = me._minipano_mob_sboky.clientHeight - 15;
						me._minipano_mob_sboky.ggAvailableHeightWithScale = me._minipano_mob_sboky.getBoundingClientRect().height - me._minipano_mob_sboky__vertScrollBg.getBoundingClientRect().width;
						me._minipano_mob_sboky__cornerBg.style.visibility = 'inherit';
					} else {
						me._minipano_mob_sboky.ggAvailableHeight = me._minipano_mob_sboky.clientHeight;
						me._minipano_mob_sboky.ggAvailableHeightWithScale = me._minipano_mob_sboky.getBoundingClientRect().height;
						me._minipano_mob_sboky__cornerBg.style.visibility = 'hidden';
					}
					me._minipano_mob_sboky__vertScrollBg.style.height = me._minipano_mob_sboky.ggAvailableHeight + 'px';
					me._minipano_mob_sboky.ggVPercentVisible = contentHeight != 0 ? me._minipano_mob_sboky.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._minipano_mob_sboky.ggVPercentVisible > 1.0) me._minipano_mob_sboky.ggVPercentVisible = 1.0;
					me._minipano_mob_sboky.ggScrollHeight =  Math.round(me._minipano_mob_sboky__vertScrollBg.offsetHeight * me._minipano_mob_sboky.ggVPercentVisible);
					me._minipano_mob_sboky__vertScrollFg.style.height = me._minipano_mob_sboky.ggScrollHeight + 'px';
					me._minipano_mob_sboky.ggScrollPosY = me._minipano_mob_sboky.ggScrollPosYPercent * me._minipano_mob_sboky.ggAvailableHeight;
					me._minipano_mob_sboky.ggScrollPosY = Math.min(me._minipano_mob_sboky.ggScrollPosY, me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
					me._minipano_mob_sboky__vertScrollFg.style.top = me._minipano_mob_sboky.ggScrollPosY + 'px';
					if (me._minipano_mob_sboky.ggVPercentVisible < 1.0) {
						let percentScrolled = me._minipano_mob_sboky.ggScrollPosY / (me._minipano_mob_sboky__vertScrollBg.offsetHeight - me._minipano_mob_sboky__vertScrollFg.offsetHeight);
						me._minipano_mob_sboky__content.style.top = -(Math.round((me._minipano_mob_sboky.ggContentHeight * (1.0 - me._minipano_mob_sboky.ggVPercentVisible)) * percentScrolled)) + me._minipano_mob_sboky.ggContentTopOffset + 'px';
					}
				} else {
					me._minipano_mob_sboky.ggAvailableWidth = me._minipano_mob_sboky.clientWidth;
					me._minipano_mob_sboky.ggScrollPosY = 0;
					me._minipano_mob_sboky.ggScrollPosYPercent = 0.0;
					me._minipano_mob_sboky__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._minipano_mob_sboky.ggHorScrollVisible || vertScrollWasVisible != me._minipano_mob_sboky.ggVertScrollVisible) {
					me.updateSize(me._minipano_mob_sboky);
					me._minipano_mob_sboky.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner_hor=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 175;
		el.ggHeight = 80;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_hor.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_hor.ggInstances.length; i++) {
					if (me._thumbnail_cloner_hor.ggInstances[i]._thumbnail_active_hor && me._thumbnail_cloner_hor.ggInstances[i]._thumbnail_active_hor.logicBlock_bordercolor) {
						me._thumbnail_cloner_hor.ggInstances[i]._thumbnail_active_hor.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_hor.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_hor.ggInstances.length; i++) {
					if (me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text && me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text.logicBlock_visible) {
						me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text.logicBlock_visible();
					}
					if (me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text2 && me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text2.logicBlock_visible) {
						me._thumbnail_cloner_hor.ggInstances[i]._minipano_mob_sboky_node_text2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_hor.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_hor.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_hor.ggInstances.length; i++) {
					if (me._thumbnail_cloner_hor.ggInstances[i]._checker_hor && me._thumbnail_cloner_hor.ggInstances[i]._checker_hor.logicBlock_visible) {
						me._thumbnail_cloner_hor.ggInstances[i]._checker_hor.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner_hor.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner_hor.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_hor.ggInstances.length; i++) {
					if (me._thumbnail_cloner_hor.ggInstances[i]._checkervisited_hor && me._thumbnail_cloner_hor.ggInstances[i]._checkervisited_hor.logicBlock_visible) {
						me._thumbnail_cloner_hor.ggInstances[i]._checkervisited_hor.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_hor.ggUpdating == true) return;
			me._thumbnail_cloner_hor.ggUpdating = true;
			var el=me._thumbnail_cloner_hor;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner_hor.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner_hor.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner_hor.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_hor.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner_hor.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner_hor.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_hor_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_hor.callChildLogicBlocks_active();
			me._thumbnail_cloner_hor.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner_hor.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner_hor.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner_hor.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner_hor.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner hor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_hor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_hor.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_hor.childNodes.length; i++) {
				var child=me._thumbnail_cloner_hor.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_hor.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner_hor.ggUpdate();
		}
		me._thumbnail_cloner_hor.ggNodeChange=function () {
			me._thumbnail_cloner_hor.ggUpdateConditionNodeChange();
		}
		me._minipano_mob_sboky__content.appendChild(me._thumbnail_cloner_hor);
		me.divSkin.appendChild(me._minipano_mob_sboky);
		el=me._textud_mob=document.createElement('div');
		els=me._textud_mob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextUD_mob";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #00aa00;';
		hs+='border-radius: 50px;';
		hs+=cssPrefix + 'border-radius: 50px;';
		hs+='color: rgba(0,140,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 12px 13px 12px 13px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._textud_mob.ggUpdateText=function() {
			var hs="<span style=\"font-size: 20px;\">"+me.ggUserdata.title+"<\/span>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._textud_mob.ggUpdateText();
		player.addListener('changenode', function() {
			me._textud_mob.ggUpdateText();
		});
		el.appendChild(els);
		me._textud_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._textud_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._textud_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._textud_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._textud_mob.style[domTransition]='';
				if (me._textud_mob.ggCurrentLogicStateVisible == 0) {
					me._textud_mob.style.visibility=(Number(me._textud_mob.style.opacity)>0||!me._textud_mob.style.opacity)?'inherit':'hidden';
					me._textud_mob.ggVisible=true;
				}
				else {
					me._textud_mob.style.visibility="hidden";
					me._textud_mob.ggVisible=false;
				}
			}
		}
		me._textud_mob.ggActivate=function () {
			me._textud_mob.style[domTransition]='none';
			me._textud_mob.style.visibility=(Number(me._textud_mob.style.opacity)>0||!me._textud_mob.style.opacity)?'inherit':'hidden';
			me._textud_mob.ggVisible=true;
		}
		me._textud_mob.ggUpdatePosition=function (useTransition) {
		}
		me._textud_mob.ggNodeChange=function () {
			if (me._textud_mob.ggLastIsActive!=me._textud_mob.ggIsActive()) {
				me._textud_mob.ggLastIsActive=me._textud_mob.ggIsActive();
				if (me._textud_mob.ggIsActive()) {
					if (me._textud_mob.ggActivate) me._textud_mob.ggActivate();
				} else {
					if (me._textud_mob.ggDeactivate) me._textud_mob.ggDeactivate();
				}
			}
		}
		me.divSkin.appendChild(me._textud_mob);
		el=me._menu_open2=document.createElement('div');
		els=me._menu_open2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjMycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy'+
			'53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open2.style[domTransition]='opacity 0s';
				if (me._menu_open2.ggCurrentLogicStateAlpha == 0) {
					me._menu_open2.style.visibility=me._menu_open2.ggVisible?'inherit':'hidden';
					me._menu_open2.style.opacity=1;
				}
				else {
					me._menu_open2.style.visibility=me._menu_open2.ggVisible?'inherit':'hidden';
					me._menu_open2.style.opacity=0.8;
				}
			}
		}
		me._menu_open2.onclick=function (e) {
			if (
				(
					((player.getVariableValue('node_visible') == false))
				)
			) {
				player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
			}
			player.setVariableValue('node_visible', false);
		}
		me._menu_open2.onmouseover=function (e) {
			me.elementMouseOver['menu_open2']=true;
			me._menu_open2.logicBlock_alpha();
		}
		me._menu_open2.onmouseout=function (e) {
			me.elementMouseOver['menu_open2']=false;
			me._menu_open2.logicBlock_alpha();
		}
		me._menu_open2.ontouchend=function (e) {
			me.elementMouseOver['menu_open2']=false;
			me._menu_open2.logicBlock_alpha();
		}
		me._menu_open2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open2);
		el=me._textud_data=document.createElement('div');
		els=me._textud_data__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextUD_data";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 85px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 110px;';
		hs+='height: 33px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.54902);';
		hs+='border: 0px solid #00aa00;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(186,34,39,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 3px 7px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._textud_data.ggUpdateText=function() {
			var hs=me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._textud_data.ggUpdateText();
		player.addListener('changenode', function() {
			me._textud_data.ggUpdateText();
		});
		el.appendChild(els);
		me._textud_data.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._textud_data.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._textud_data.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._textud_data.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._textud_data.style[domTransition]='right 0s, top 0s, width 0s, height 0s';
				if (me._textud_data.ggCurrentLogicStatePosition == 0) {
					me._textud_data.style.right='5px';
					me._textud_data.style.top='5px';
				}
				else {
					me._textud_data.style.right='85px';
					me._textud_data.style.top='9px';
				}
			}
		}
		me._textud_data.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._textud_data.ggCurrentLogicStateSize != newLogicStateSize) {
				me._textud_data.ggCurrentLogicStateSize = newLogicStateSize;
				me._textud_data__text.style[domTransition]='right 0s, top 0s, width 0s, height 0s';
				if (me._textud_data.ggCurrentLogicStateSize == 0) {
					me._textud_data__text.style.width='90px';
					me._textud_data__text.style.height='28px';
					skin.updateSize(me._textud_data);
				}
				else {
					me._textud_data__text.style.width='110px';
					me._textud_data__text.style.height='33px';
					skin.updateSize(me._textud_data);
				}
			}
		}
		me._textud_data.ggActivate=function () {
			me._textud_data.style[domTransition]='none';
			me._textud_data.style.visibility=(Number(me._textud_data.style.opacity)>0||!me._textud_data.style.opacity)?'inherit':'hidden';
			me._textud_data.ggVisible=true;
		}
		me._textud_data.ggUpdatePosition=function (useTransition) {
		}
		me._textud_data.ggNodeChange=function () {
			if (me._textud_data.ggLastIsActive!=me._textud_data.ggIsActive()) {
				me._textud_data.ggLastIsActive=me._textud_data.ggIsActive();
				if (me._textud_data.ggIsActive()) {
					if (me._textud_data.ggActivate) me._textud_data.ggActivate();
				} else {
					if (me._textud_data.ggDeactivate) me._textud_data.ggDeactivate();
				}
			}
		}
		me.divSkin.appendChild(me._textud_data);
		el=me._textud=document.createElement('div');
		els=me._textud__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextUD";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.54902);';
		hs+='border: 0px solid #00aa00;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(0,140,0,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 3px 6px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._textud.ggUpdateText=function() {
			var hs=me.ggUserdata.title+"   "+me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._textud.ggUpdateText();
		player.addListener('changenode', function() {
			me._textud.ggUpdateText();
		});
		el.appendChild(els);
		me._textud.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._textud.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._textud.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._textud.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._textud.style[domTransition]='left 0s, top 0s';
				if (me._textud.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 9;
					me._textud.style.top='6px';
					me._textud.ggUpdatePosition(true);
				}
				else {
					me._textud.ggDx=0;
					me._textud.style.top='9px';
					me._textud.ggUpdatePosition(true);
				}
			}
		}
		me._textud.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._textud.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._textud.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._textud.style[domTransition]='left 0s, top 0s';
				if (me._textud.ggCurrentLogicStateVisible == 0) {
					me._textud.style.visibility="hidden";
					me._textud.ggVisible=false;
				}
				else {
					me._textud.style.visibility=(Number(me._textud.style.opacity)>0||!me._textud.style.opacity)?'inherit':'hidden';
					me._textud.ggVisible=true;
				}
			}
		}
		me._textud.ggActivate=function () {
			me._textud.style[domTransition]='none';
			me._textud.style.visibility=(Number(me._textud.style.opacity)>0||!me._textud.style.opacity)?'inherit':'hidden';
			me._textud.ggVisible=true;
		}
		me._textud.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((318-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._textud.ggNodeChange=function () {
			if (me._textud.ggLastIsActive!=me._textud.ggIsActive()) {
				me._textud.ggLastIsActive=me._textud.ggIsActive();
				if (me._textud.ggIsActive()) {
					if (me._textud.ggActivate) me._textud.ggActivate();
				} else {
					if (me._textud.ggDeactivate) me._textud.ggDeactivate();
				}
			}
		}
		me.divSkin.appendChild(me._textud);
		me._map.ggMarkerInstances=[];
		me._map.ggMapId = 'googlesatellite';
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.390625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#c80000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#c80000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggInitMap=function(keepZoom) {
			me._map.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map.ggClearMap=function() {
		me._map.ggMap = null;
		me._map.ggClearMapMarkers();
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map.ggGoogleMarkerArray=[];
		}
		me._map.ggCenterNode=function() {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map.ggGoogleMarkerArray[id] = marker;
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				if (me._map.ggMap) {
					me._map.ggLastZoom = me._map.ggMap.getZoom();
				}
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		me._marker.ggMarkerNormal=null;
		me._marker.ggMarkerInstances.push(null);
		me._marker.ggMarkerActive=null;
		me._marker.ggMarkerInstances.push(null);
		for (var i = 0; i < me._marker.childNodes.length; i++) {
			me._marker.ggMarkerInstances.push(me._marker.childNodes[i]);
		}
		me._marker.callChildLogicBlocks_configloaded = function(){
			if(me._marker.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker.ggMarkerInstances.length; i++) {
					if((me._marker.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker)<0 && i==0) || (i>1))) {
					if (me._marker.ggMarkerInstances[i].logicBlock_position) {
						me._marker.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker.callChildLogicBlocks_mouseover = function(){
			if(me._marker.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker.ggMarkerInstances.length; i++) {
					if((me._marker.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker)<0 && i==0) || (i>1))) {
					if (me._marker.ggMarkerInstances[i].logicBlock_visible) {
						me._marker.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker.callChildLogicBlocks_hastouch = function(){
			if(me._marker.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker.ggMarkerInstances.length; i++) {
					if((me._marker.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker)<0 && i==0) || (i>1))) {
					if (me._marker.ggMarkerInstances[i].logicBlock_position) {
						me._marker.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker.callChildLogicBlocks_configloaded();
		me._marker.callChildLogicBlocks_mouseover();
		me._marker.callChildLogicBlocks_hastouch();
		me._map_mob.ggMarkerInstances=[];
		me._map_mob.ggMapId = 'googlesatellite';
		me._map_mob.ggLastNodeId=null;
		me._map_mob.ggMarkerArray=[];
		me._map_mob.ggGoogleMarkerArray=[];
		me._map_mob.ggLastZoom = -1;
		me._map_mob.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_mob.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map_mob.ggRadar;
			var map=me._map_mob.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_mob.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_mob.ggMapId);
				pan -= me._map_mob.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_mob.ggFilteredIds.length > 0 && me._map_mob.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.390625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#c80000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#c80000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map_mob.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_mob.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_mob.ggInitMap=function(keepZoom) {
			me._map_mob.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_mob.ggMapId);
			var mapDetails = player.getMapDetails(me._map_mob.ggMapId);
			if (mapType == 'file') {
				me._map_mob.style.backgroundColor = mapDetails['bgcolor'];
				me._map_mob.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_mob.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_mob.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_mob.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(0,0);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map_mob.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map_mob.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map_mob.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map_mob.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map_mob.ggLastZoom == -1) me._map_mob.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map_mob.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_mob.ggMap = new google.maps.Map(me._map_mob, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map_mob.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map_mob.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'openstreetmap') {
					me._map_mob.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					me._map_mob.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['styleurl'] == '') {
								return 'https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] + '/' + zoom + '/' + coord.x + '/' + coord.y + '@2x.png?access_token=' + mapDetails['mapkey'];
							} else {
								var styleurlstring = mapDetails['styleurl'];
								styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
								return 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/' + zoom + '/' + coord.x + '/' + coord.y + '@2x?access_token=' + mapDetails['mapkey'];
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: 18
					}));
				}
				if (mapTypeId == 'custom') {
					me._map_mob.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							var urlString = mapDetails['mapurltemplate'];
							urlString = urlString.replace('{s}', 'a');
							urlString = urlString.replace('{z}', zoom);
							urlString = urlString.replace('{x}', coord.x);
							urlString = urlString.replace('{y}', coord.y);
							return urlString;
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapmaxzoom']
					}));
				}
			} else if (mapType == 'file') {
				if (me._map_mob.ggLastZoom == -1) me._map_mob.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_mob.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false
				};
				me._map_mob.ggMap = new google.maps.Map(me._map_mob, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map_mob.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map_mob.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map_mob.ggMap.mapTypes.set(me._map_mob.ggMapId, customMapType);
				me._map_mob.ggMap.setMapTypeId(me._map_mob.ggMapId);
				me._map_mob.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map_mob.ggMap, 'center_changed', function() {
					me._map_mob.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map_mob.ggMap, 'zoom_changed', function() {
					me._map_mob.ggCheckBounds(mapDetails);
				});
			}
		}
		me._map_mob.ggClearMap=function() {
		me._map_mob.ggMap = null;
		me._map_mob.ggClearMapMarkers();
		me._map_mob.ggMapNotLoaded = true;
		}
		me._map_mob.ggClearMapMarkers=function() {
			me._map_mob.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_mob.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.setMap(null);
				}
			}
			me._map_mob.ggGoogleMarkerArray=[];
		}
		me._map_mob.ggCenterNode=function() {
			if (!me._map_mob.ggMap) return;
			var gps;
			if (player.getMapType(me._map_mob.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_mob.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map_mob.ggMap.panTo(markerLocation);
			}
		}
		me._map_mob.ggFitBounds=function(force) {
			if (me._map_mob.ggMapNotLoaded) return;
			if (!me._map_mob.ggMarkerBounds.isEmpty()) {
				if (me._map_mob.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_mob.ggGoogleMarkerArray).length > 1) {
					me._map_mob.ggMap.fitBounds(me._map_mob.ggMarkerBounds, 30);
				} else {
					me._map_mob.ggMap.setCenter(me._map_mob.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map_mob.ggMapId) == 'web') {
						me._map_mob.ggMap.setZoom(18);
					} else {
						me._map_mob.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map_mob.ggInitMapMarkers=function(updateMapBounds) {
			me._map_mob.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_mob.ggFilteredIds = [];
			if (me._map_mob.ggFilter != '') {
				var filter = me._map_mob.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_mob.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_mob.ggFilteredIds.length > 0) ids = me._map_mob.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._map_mob.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._map_mob.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._map_mob.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_mob.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_mob.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					marker = new google.maps.Marker({position: markerLocation,map: me._map_mob.ggMap});
					marker.setTitle(player.getNodeTitle(id));
					marker.setClickable(true);
					marker.ggId=id;
					google.maps.event.addListener(marker, 'click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					me._map_mob.ggGoogleMarkerArray[id] = marker;
					me._map_mob.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map_mob.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map_mob.ggFitBounds(false);
			}
			skin.updateSize(me._map_mob);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map_mob.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map_mob.ggMapId = mapId;
			if (!me._map_mob.ggMapNotLoaded) {
				if (me._map_mob.ggMap) {
					me._map_mob.ggLastZoom = me._map_mob.ggMap.getZoom();
				}
				me._map_mob.ggClearMap();
				me._map_mob.ggInitMap(true);
				me._map_mob.ggInitMapMarkers(false);
			}
		}
		me._map_mob.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_mob.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_mob.mapHeightInDeg = me._map_mob.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_mob.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_mob.mapWidthInDeg = me._map_mob.mapHeightInDeg * mapAR;
			}
		}
		me._map_mob.ggInCheckBounds=false;
		me._map_mob.ggCheckBounds=function(mapDetails) {
			if (me._map_mob.ggInCheckBounds) return;
			me._map_mob.ggInCheckBounds = true;
			var mapCenter = me._map_mob.ggMap.getCenter();
			var currentZoom = me._map_mob.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_mob.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_mob.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map_mob.mapWidthInDeg < me._map_mob.clientWidth * pixelInDeg) {
				var xMargin = (me._map_mob.clientWidth * pixelInDeg - me._map_mob.mapWidthInDeg) / 2;
				if (x < me._map_mob.mapWidthInDeg / 2 - xMargin) x = me._map_mob.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_mob.mapWidthInDeg / 2 + xMargin) x = me._map_mob.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_mob.mapWidthInDeg - xOffset) x = me._map_mob.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_mob.mapHeightInDeg < me._map_mob.clientHeight * pixelInDeg) {
				var yMargin = (me._map_mob.clientHeight * pixelInDeg - me._map_mob.mapHeightInDeg) / 2;
				if (y < -me._map_mob.mapHeightInDeg / 2 - yMargin) y = -me._map_mob.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_mob.mapHeightInDeg / 2 + yMargin) y = -me._map_mob.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_mob.mapHeightInDeg + yOffset) y = -me._map_mob.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map_mob.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map_mob.ggInCheckBounds = false;
		}
		me._marker_mob.ggMarkerNormal=null;
		me._marker_mob.ggMarkerInstances.push(null);
		me._marker_mob.ggMarkerActive=null;
		me._marker_mob.ggMarkerInstances.push(null);
		for (var i = 0; i < me._marker_mob.childNodes.length; i++) {
			me._marker_mob.ggMarkerInstances.push(me._marker_mob.childNodes[i]);
		}
		me._marker_mob.callChildLogicBlocks_configloaded = function(){
			if(me._marker_mob.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_mob.ggMarkerInstances.length; i++) {
					if((me._marker_mob.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_mob)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_mob)<0 && i==0) || (i>1))) {
					if (me._marker_mob.ggMarkerInstances[i].logicBlock_position) {
						me._marker_mob.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_mob.callChildLogicBlocks_mouseover = function(){
			if(me._marker_mob.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_mob.ggMarkerInstances.length; i++) {
					if((me._marker_mob.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_mob)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_mob)<0 && i==0) || (i>1))) {
					if (me._marker_mob.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_mob.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_mob.callChildLogicBlocks_hastouch = function(){
			if(me._marker_mob.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_mob.ggMarkerInstances.length; i++) {
					if((me._marker_mob.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_mob)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_mob)<0 && i==0) || (i>1))) {
					if (me._marker_mob.ggMarkerInstances[i].logicBlock_position) {
						me._marker_mob.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_mob.callChildLogicBlocks_configloaded();
		me._marker_mob.callChildLogicBlocks_mouseover();
		me._marker_mob.callChildLogicBlocks_hastouch();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner.ggUpdate();
			me._category_cloner.ggUpdate();
			me._map.ggClearMap();
			me._map.ggInitMap(false);
			me._map.ggInitMapMarkers(true);
			if (me._map_mob.ggMapNotLoaded == false) {
				me._map_mob.ggClearMap();
				me._map_mob.ggInitMap(false);
				me._map_mob.ggInitMapMarkers(true);
			}
			me._thumbnail_cloner.ggUpdate();
			me._thumbnail_cloner_ver.ggUpdate();
			me._thumbnail_cloner_hor.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._category_scroller.ggUpdatePosition();
			me._minipano_komp.ggUpdatePosition();
			me._minipano_mob_niz.ggUpdatePosition();
			me._minipano_mob_sboky.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_hotspot_1_configloaded = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1 && hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_position) {
					hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_mouseover = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1 && hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_mouseover = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1 && hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_visible) {
					hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_hastouch = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1 && hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_position) {
					hotspotTemplates['Hotspot 1'][i]._txt_hotspot_1.logicBlock_position();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map.ggUpdateConditionTimer();
		me._map_mob.ggUpdateConditionTimer();
		if (me.elementMouseDown['move_right']) {
			player.changePanLog(-1.5,true);
		}
		if (me.elementMouseDown['move_left']) {
			player.changePanLog(1.5,true);
		}
		if (me.elementMouseDown['move_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['move_down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(1.5,true);
					break;
				case 38:
					player.changeTiltLog(1,true);
					break;
				case 39:
					player.changePanLog(-1.5,true);
					break;
				case 40:
					player.changeTiltLog(-1,true);
					break;
				case 107:
					player.changeFovLog(-1,true);
					break;
				case 109:
					player.changeFovLog(1,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 350px;';
		hs+='position : absolute;';
		hs+='top : 350px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			player.startAutorotate("0.05");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.stopAutorotate();
			me.elementMouseOver['hotspot_1']=true;
			me._txt_hotspot_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			player.startAutorotate("0.05");
			me.elementMouseOver['hotspot_1']=false;
			me._txt_hotspot_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ontouchend=function (e) {
			me.elementMouseOver['hotspot_1']=false;
			me._txt_hotspot_1.logicBlock_visible();
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_hotspot_1=document.createElement('div');
		els=me._txt_hotspot_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Txt Hotspot 1";
		el.ggDx=0;
		el.ggDy=-75;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #00aa00;';
		hs+='background: rgba(0,170,0,0.666667);';
		hs+='border: 1px solid #00aa00;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._txt_hotspot_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._txt_hotspot_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._txt_hotspot_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._txt_hotspot_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._txt_hotspot_1.style[domTransition]='left 0s, top 0s';
				if (me._txt_hotspot_1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = -35;
					this.ggDy = -25;
					me._txt_hotspot_1.ggUpdatePosition(true);
				}
				else {
					me._txt_hotspot_1.ggDx=0;
					me._txt_hotspot_1.ggDy=-75;
					me._txt_hotspot_1.ggUpdatePosition(true);
				}
			}
		}
		me._txt_hotspot_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot_1'] == true)) || 
				((me.elementMouseOver['txt_hotspot_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._txt_hotspot_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._txt_hotspot_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._txt_hotspot_1.style[domTransition]='left 0s, top 0s';
				if (me._txt_hotspot_1.ggCurrentLogicStateVisible == 0) {
					me._txt_hotspot_1.style.visibility=(Number(me._txt_hotspot_1.style.opacity)>0||!me._txt_hotspot_1.style.opacity)?'inherit':'hidden';
					me._txt_hotspot_1.ggVisible=true;
				}
				else {
					me._txt_hotspot_1.style.visibility="hidden";
					me._txt_hotspot_1.ggVisible=false;
				}
			}
		}
		me._txt_hotspot_1.onmouseover=function (e) {
			me.elementMouseOver['txt_hotspot_1']=true;
			me._txt_hotspot_1.logicBlock_visible();
		}
		me._txt_hotspot_1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._txt_hotspot_1__text)
					return;
				}
			}
			me.elementMouseOver['txt_hotspot_1']=false;
			me._txt_hotspot_1.logicBlock_visible();
		}
		me._txt_hotspot_1.ontouchend=function (e) {
			me.elementMouseOver['txt_hotspot_1']=false;
			me._txt_hotspot_1.logicBlock_visible();
		}
		me._txt_hotspot_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hotspot_1.appendChild(me._txt_hotspot_1);
		el=me._image_hotspot_1=document.createElement('div');
		els=me._image_hotspot_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_hotspot_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._image_hotspot_1__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFkUlEQVRoge2ZX4hcZxnGf8+ZMzNNGpVAgoKm7YUINhRzYa2I3oRE1Ey7e2YZL6yC0LBSyRYTFRGTC00Eg2mlrhS7pgqS1oslORuSEEmlFIx/YrywaBREobjtVRGKGyUz58x5vNiZzezJ/AuZGSvs72Z3zve833mf+f683zkDG2ywwQb/T2gYUT2KfiXpI93aDJfLZ858LH89iaJPWPoR8J47zLEXy7Jni3H8c4BgmIheJgAEH+123dIC4zMBsKN1j3YeXZJ4+OF3NsLwgKSK4V7BVoDSmTPr9I1q1YPulo8ZFe17t/sP84L6zMynG1m2IOkdcNOp4WJea7jca0QmzToj9SiqkWU/kxQYLgb2iTAM/8DWrStaWEjywd3WRpthRmuUrBlxrfauRpqelB'+
			'TY/nYpjo8IxppMfWZmJ/Z+2XsN9wEIXrX0ItLJ8unT14bta81II00PSHq77ZfLcXx4DHmv4Vqt1EjTJ8myxyUVkDoX607BTmfZXL1afaZUKHxFi4uNQX2u7VqSKgBBEHxzHMm3aZm4IOkAkNh+mix7qLh585bi5s1bkD5s+D5SKphrpOkF12qlQf3enFr2eyURbtp0tVPQr4asxfaoJd1opOmTkvYAy2TZvvLZs3/MSa4AV+pR9GOk85L2NJrNE8AT/frtHJG7AXTq1L87BYNMQO9akqc+M7MTeNz2DTeb3UysUY7jV2xXDHXsL96o1e7v1/ct228vetWD29qd7P2SCob5fibalOP4lXq1uiBpjmZzP3Col3aoyj4qZH+89feFoWOk5wEEe/vpJmrEcA9AMQz/MmxMMQiutWLv7aebqBGk269LKyurOdp9Yyc9tZYB'+
			'kiTpu3A7STZtuh9A0j/66SY7taRLAA6CR4eOgUcBbF/qp5v01Dppuwl8oR5FHxgkr09N7QJmbTcdhs/1007USPn06WtIzwjKks73M1OfmtqlIDgvqQT84K7FxT/363voOjKq02xp27YvN9544/2S9iBdqVerC7JfKIbhnwCSJHnA0meAWaSS7V+Utm//6qB+B46I4fJAjf3LoVwAWlhISmG4zzCPHQrmkH6TNJsrSbO5QhD8WtIBVk/hT5e2b/9Ut0eIPANHZNgz1O3QOs0+UZ+Zedb2Y4K9tu8DkPSq7UsOw+cGTadOhp5a46D1vNHz2HE7DG0kmZ6uZEFwEPshwEi/C+yninF8YRSJ3ClD7Vr1KDrmIDgn2C3pbklbBLu9uvMcHXeSwzBwRJLp6Yqlbxjqsg8X4XmARPqs4aikw0kU/bbLyCwDO8b87L7c/megkU'+
			'w6JED24VIcn+ho+m6jWhVwPJMOAeuMyJ5tvXfaMaKk8yzLnm1/GGaNPAhQDMNT+YZiofDTpNk83tasa1t9A3jPHSTalY73Wev6HrxG2ifWNL3lweo/UAAGnkwnwTCL/Sqsrol8QzFNV69Jv29fS6JoXyOKXmtUq8vJ9PQnR5XoIAZOrcB+ytJuw9FGtaokTU8BFAuFzxm+pZamrbf0Q+DdAA6CZxnD9Oqa5yBBMY4v2D4mKAPHi2H4ejEMX0f6jlbPQsfeCrVkzYhhBcC12pa8qBzHR7T6RuMl29dtXze8JLtSjuMjnVpl2SzwGrldZRT4kUfeBmD7X/m2takl+DuwK82yDwIv54Wtb33gN19cWrrImLbctFB4EEDS3/JtnSNyDsD2l8aRxCjIpIMAts/l29aMlAqF+daQTTWi6GsTzG8oGtXq1wUVw5slez7fvq42'+
			'3JierkpalBRgn5P0vbBQuKrFxeuTS/kmrtW2pGn6oUw6KKjYzmxX71paOpvX3lLkbkRRJPhJ+4eetwqGN51ln+9mAnr99FapbGsUi3OSKrbfJ+mWnWwSGFYEf7V9vmTPa2npn/+LPDbYYIMNRs9/ATc6SXvC6zyvAAAAAElFTkSuQmCC';
		me._image_hotspot_1__img.ggDownSrc=hs;
		el.ggId="Image Hotspot 1";
		el.ggDx=0;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_hotspot_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hotspot_1.onmouseover=function (e) {
			me._image_hotspot_1__img.src=me._image_hotspot_1__img.ggOverSrc;
		}
		me._image_hotspot_1.onmouseout=function (e) {
			me._image_hotspot_1__img.src=me._image_hotspot_1__img.ggNormalSrc;
		}
		me._image_hotspot_1.onmousedown=function (e) {
			me._image_hotspot_1__img.src=me._image_hotspot_1__img.ggDownSrc;
		}
		me._image_hotspot_1.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_hotspot_1__img.src = me._image_hotspot_1__img.ggNormalSrc;
			} else {
				me._image_hotspot_1__img.src = me._image_hotspot_1__img.ggOverSrc;
			}
		}
		me._image_hotspot_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_1.appendChild(me._image_hotspot_1);
		me.__div = me._hotspot_1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_1_configloaded();;
			me.callChildLogicBlocksHotspot_hotspot_1_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_1_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_1_hastouch();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 175px; height: 80px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=true;
			me._minipano_komp_node_text.logicBlock_visible();
			me._minipano_komp_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._minipano_komp_node_text.logicBlock_visible();
			me._minipano_komp_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage']=false;
			me._minipano_komp_node_text.logicBlock_visible();
			me._minipano_komp_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited=document.createElement('div');
		els=me._checkervisited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited.style[domTransition]='';
				if (me._checkervisited.ggCurrentLogicStateVisible == 0) {
					me._checkervisited.style.visibility=(Number(me._checkervisited.style.opacity)>0||!me._checkervisited.style.opacity)?'inherit':'hidden';
					me._checkervisited.ggVisible=true;
				}
				else {
					me._checkervisited.style.visibility="hidden";
					me._checkervisited.ggVisible=false;
				}
			}
		}
		me._checkervisited.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._checkervisited);
		el=me._checker=document.createElement('div');
		els=me._checker__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checker__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker.style[domTransition]='';
				if (me._checker.ggCurrentLogicStateVisible == 0) {
					me._checker.style.visibility=(Number(me._checker.style.opacity)>0||!me._checker.style.opacity)?'inherit':'hidden';
					me._checker.ggVisible=true;
				}
				else {
					me._checker.style.visibility="hidden";
					me._checker.ggVisible=false;
				}
			}
		}
		me._checker.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._checker);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="Thumbnail Active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(0,170,0,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._thumbnail_active);
		el=me._minipano_komp_node_text=document.createElement('div');
		els=me._minipano_komp_node_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_komp node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_komp_node_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_komp_node_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_komp_node_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_komp_node_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_komp_node_text.style[domTransition]='';
				if (me._minipano_komp_node_text.ggCurrentLogicStateVisible == 0) {
					me._minipano_komp_node_text.style.visibility=(Number(me._minipano_komp_node_text.style.opacity)>0||!me._minipano_komp_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_komp_node_text.ggVisible=true;
				}
				else {
					me._minipano_komp_node_text.style.visibility=(Number(me._minipano_komp_node_text.style.opacity)>0||!me._minipano_komp_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_komp_node_text.ggVisible=true;
				}
			}
		}
		me._minipano_komp_node_text.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._minipano_komp_node_text);
		el=me._minipano_komp_node_text2=document.createElement('div');
		els=me._minipano_komp_node_text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_komp node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_komp_node_text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_komp_node_text2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_komp_node_text2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_komp_node_text2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_komp_node_text2.style[domTransition]='';
				if (me._minipano_komp_node_text2.ggCurrentLogicStateVisible == 0) {
					me._minipano_komp_node_text2.style.visibility=(Number(me._minipano_komp_node_text2.style.opacity)>0||!me._minipano_komp_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_komp_node_text2.ggVisible=true;
				}
				else {
					me._minipano_komp_node_text2.style.visibility=(Number(me._minipano_komp_node_text2.style.opacity)>0||!me._minipano_komp_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_komp_node_text2.ggVisible=true;
				}
			}
		}
		me._minipano_komp_node_text2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage.appendChild(me._minipano_komp_node_text2);
		me.__div.appendChild(me._thumbnail_nodeimage);
	};
	function SkinCloner_thumbnail_cloner_ver_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 175px; height: 80px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_ver=document.createElement('div');
		els=me._thumbnail_nodeimage_ver__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage ver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_ver.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_ver.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage_ver.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_ver']=true;
			me._minipano_mob_niz_node_text.logicBlock_visible();
			me._minipano_mob_niz_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_ver.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_ver']=false;
			me._minipano_mob_niz_node_text.logicBlock_visible();
			me._minipano_mob_niz_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_ver.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_ver']=false;
			me._minipano_mob_niz_node_text.logicBlock_visible();
			me._minipano_mob_niz_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_ver.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited_ver=document.createElement('div');
		els=me._checkervisited_ver__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited_ver__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited ver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited_ver.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited_ver.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited_ver.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited_ver.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited_ver.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited_ver.style[domTransition]='';
				if (me._checkervisited_ver.ggCurrentLogicStateVisible == 0) {
					me._checkervisited_ver.style.visibility=(Number(me._checkervisited_ver.style.opacity)>0||!me._checkervisited_ver.style.opacity)?'inherit':'hidden';
					me._checkervisited_ver.ggVisible=true;
				}
				else {
					me._checkervisited_ver.style.visibility="hidden";
					me._checkervisited_ver.ggVisible=false;
				}
			}
		}
		me._checkervisited_ver.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_ver.appendChild(me._checkervisited_ver);
		el=me._checker_ver=document.createElement('div');
		els=me._checker_ver__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checker_ver__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker ver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker_ver.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker_ver.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker_ver.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker_ver.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker_ver.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker_ver.style[domTransition]='';
				if (me._checker_ver.ggCurrentLogicStateVisible == 0) {
					me._checker_ver.style.visibility=(Number(me._checker_ver.style.opacity)>0||!me._checker_ver.style.opacity)?'inherit':'hidden';
					me._checker_ver.ggVisible=true;
				}
				else {
					me._checker_ver.style.visibility="hidden";
					me._checker_ver.ggVisible=false;
				}
			}
		}
		me._checker_ver.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_ver.appendChild(me._checker_ver);
		el=me._thumbnail_active_ver=document.createElement('div');
		el.ggId="Thumbnail Active ver";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : default;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_ver.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_ver.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active_ver'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_ver.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_ver.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_ver.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_ver.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_ver.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active_ver.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active_ver.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_ver']=true;
			me._thumbnail_active_ver.logicBlock_bordercolor();
		}
		me._thumbnail_active_ver.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_ver']=false;
			me._thumbnail_active_ver.logicBlock_bordercolor();
		}
		me._thumbnail_active_ver.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_ver']=false;
			me._thumbnail_active_ver.logicBlock_bordercolor();
		}
		me._thumbnail_active_ver.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_ver.appendChild(me._thumbnail_active_ver);
		el=me._minipano_mob_niz_node_text=document.createElement('div');
		els=me._minipano_mob_niz_node_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_mob_niz node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_mob_niz_node_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_mob_niz_node_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage_ver'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_niz_node_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_niz_node_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_niz_node_text.style[domTransition]='';
				if (me._minipano_mob_niz_node_text.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_niz_node_text.style.visibility=(Number(me._minipano_mob_niz_node_text.style.opacity)>0||!me._minipano_mob_niz_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_mob_niz_node_text.ggVisible=true;
				}
				else {
					me._minipano_mob_niz_node_text.style.visibility=(Number(me._minipano_mob_niz_node_text.style.opacity)>0||!me._minipano_mob_niz_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_mob_niz_node_text.ggVisible=true;
				}
			}
		}
		me._minipano_mob_niz_node_text.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_ver.appendChild(me._minipano_mob_niz_node_text);
		el=me._minipano_mob_niz_node_text2=document.createElement('div');
		els=me._minipano_mob_niz_node_text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_mob_niz node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_mob_niz_node_text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_mob_niz_node_text2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage_ver'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_niz_node_text2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_niz_node_text2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_niz_node_text2.style[domTransition]='';
				if (me._minipano_mob_niz_node_text2.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_niz_node_text2.style.visibility=(Number(me._minipano_mob_niz_node_text2.style.opacity)>0||!me._minipano_mob_niz_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_mob_niz_node_text2.ggVisible=true;
				}
				else {
					me._minipano_mob_niz_node_text2.style.visibility=(Number(me._minipano_mob_niz_node_text2.style.opacity)>0||!me._minipano_mob_niz_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_mob_niz_node_text2.ggVisible=true;
				}
			}
		}
		me._minipano_mob_niz_node_text2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_ver.appendChild(me._minipano_mob_niz_node_text2);
		me.__div.appendChild(me._thumbnail_nodeimage_ver);
	};
	function SkinCloner_thumbnail_cloner_hor_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 175px; height: 80px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_hor=document.createElement('div');
		els=me._thumbnail_nodeimage_hor__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Thumbnail NodeImage hor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage_hor.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_hor.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_nodeimage_hor.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_hor']=true;
			me._minipano_mob_sboky_node_text.logicBlock_visible();
			me._minipano_mob_sboky_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_hor.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_hor']=false;
			me._minipano_mob_sboky_node_text.logicBlock_visible();
			me._minipano_mob_sboky_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_hor.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_nodeimage_hor']=false;
			me._minipano_mob_sboky_node_text.logicBlock_visible();
			me._minipano_mob_sboky_node_text2.logicBlock_visible();
		}
		me._thumbnail_nodeimage_hor.ggUpdatePosition=function (useTransition) {
		}
		el=me._checkervisited_hor=document.createElement('div');
		els=me._checkervisited_hor__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiMwMDAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkervisited_hor__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkervisited hor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkervisited_hor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkervisited_hor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkervisited_hor.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkervisited_hor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkervisited_hor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkervisited_hor.style[domTransition]='';
				if (me._checkervisited_hor.ggCurrentLogicStateVisible == 0) {
					me._checkervisited_hor.style.visibility=(Number(me._checkervisited_hor.style.opacity)>0||!me._checkervisited_hor.style.opacity)?'inherit':'hidden';
					me._checkervisited_hor.ggVisible=true;
				}
				else {
					me._checkervisited_hor.style.visibility="hidden";
					me._checkervisited_hor.ggVisible=false;
				}
			}
		}
		me._checkervisited_hor.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_hor.appendChild(me._checkervisited_hor);
		el=me._checker_hor=document.createElement('div');
		els=me._checker_hor__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwoJLnN0MXtmaWxsOiNmZjAwMDA7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checker_hor__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checker hor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checker_hor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checker_hor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checker_hor.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checker_hor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checker_hor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checker_hor.style[domTransition]='';
				if (me._checker_hor.ggCurrentLogicStateVisible == 0) {
					me._checker_hor.style.visibility=(Number(me._checker_hor.style.opacity)>0||!me._checker_hor.style.opacity)?'inherit':'hidden';
					me._checker_hor.ggVisible=true;
				}
				else {
					me._checker_hor.style.visibility="hidden";
					me._checker_hor.ggVisible=false;
				}
			}
		}
		me._checker_hor.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_hor.appendChild(me._checker_hor);
		el=me._thumbnail_active_hor=document.createElement('div');
		el.ggId="Thumbnail Active hor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #a6a6a6;';
		hs+='cursor : default;';
		hs+='height : 73px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_hor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_hor.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['thumbnail_active_hor'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_hor.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_hor.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_hor.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_hor.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_hor.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active_hor.style.borderColor="rgba(166,166,166,1)";
				}
			}
		}
		me._thumbnail_active_hor.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_hor']=true;
			me._thumbnail_active_hor.logicBlock_bordercolor();
		}
		me._thumbnail_active_hor.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_hor']=false;
			me._thumbnail_active_hor.logicBlock_bordercolor();
		}
		me._thumbnail_active_hor.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_hor']=false;
			me._thumbnail_active_hor.logicBlock_bordercolor();
		}
		me._thumbnail_active_hor.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_hor.appendChild(me._thumbnail_active_hor);
		el=me._minipano_mob_sboky_node_text=document.createElement('div');
		els=me._minipano_mob_sboky_node_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_mob_sboky node Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,36,36,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_mob_sboky_node_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_mob_sboky_node_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage_hor'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_sboky_node_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_sboky_node_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_sboky_node_text.style[domTransition]='';
				if (me._minipano_mob_sboky_node_text.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_sboky_node_text.style.visibility=(Number(me._minipano_mob_sboky_node_text.style.opacity)>0||!me._minipano_mob_sboky_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_mob_sboky_node_text.ggVisible=true;
				}
				else {
					me._minipano_mob_sboky_node_text.style.visibility=(Number(me._minipano_mob_sboky_node_text.style.opacity)>0||!me._minipano_mob_sboky_node_text.style.opacity)?'inherit':'hidden';
					me._minipano_mob_sboky_node_text.ggVisible=true;
				}
			}
		}
		me._minipano_mob_sboky_node_text.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_hor.appendChild(me._minipano_mob_sboky_node_text);
		el=me._minipano_mob_sboky_node_text2=document.createElement('div');
		els=me._minipano_mob_sboky_node_text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="minipano_mob_sboky node Text2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 160px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>"+me.ggUserdata.title+"<\/b>";
		el.appendChild(els);
		me._minipano_mob_sboky_node_text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minipano_mob_sboky_node_text2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnail_nodeimage_hor'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minipano_mob_sboky_node_text2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minipano_mob_sboky_node_text2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minipano_mob_sboky_node_text2.style[domTransition]='';
				if (me._minipano_mob_sboky_node_text2.ggCurrentLogicStateVisible == 0) {
					me._minipano_mob_sboky_node_text2.style.visibility=(Number(me._minipano_mob_sboky_node_text2.style.opacity)>0||!me._minipano_mob_sboky_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_mob_sboky_node_text2.ggVisible=true;
				}
				else {
					me._minipano_mob_sboky_node_text2.style.visibility=(Number(me._minipano_mob_sboky_node_text2.style.opacity)>0||!me._minipano_mob_sboky_node_text2.style.opacity)?'inherit':'hidden';
					me._minipano_mob_sboky_node_text2.ggVisible=true;
				}
			}
		}
		me._minipano_mob_sboky_node_text2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_nodeimage_hor.appendChild(me._minipano_mob_sboky_node_text2);
		me.__div.appendChild(me._thumbnail_nodeimage_hor);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 195px; height: 40px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 191px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 193px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 193px;';
		hs+='height: 38px;';
		hs+='pointer-events: none;';
		hs+='background: #2c2c2c;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,0.705882);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="&nbsp&nbsp"+me.ggUserdata.title+"-"+me.ggUserdata.description;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='color 0s';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['node_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me._node_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_title.ggElementNodeId()) == true))
			)
			{
				newLogicStateTextColor = 2;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_title__text.style[domTransition]='color 0s';
				if (me._node_title.ggCurrentLogicStateTextColor == 0) {
					me._node_title__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._node_title.ggCurrentLogicStateTextColor == 1) {
					me._node_title__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._node_title.ggCurrentLogicStateTextColor == 2) {
					me._node_title__text.style.color="rgba(235,235,235,0.784314)";
				}
				else {
					me._node_title__text.style.color="rgba(255,255,255,0.705882)";
				}
			}
		}
		me._node_title.onclick=function (e) {
			if (
				(
					((me._node_title.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_title.onmouseover=function (e) {
			me.elementMouseOver['node_title']=true;
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._node_title__text)
					return;
				}
			}
			me.elementMouseOver['node_title']=false;
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.ontouchend=function (e) {
			me.elementMouseOver['node_title']=false;
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.__div.appendChild(me._node_title);
	};
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 190px; height: 37px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._category_text=document.createElement('div');
		els=me._category_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 190px;';
		hs+='height: 35px;';
		hs+='background: #2c2c2c;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,0.705882);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="&nbsp&nbsp"+me.ggTitle+" ("+me.ggNodeCount+")";
		el.appendChild(els);
		me._category_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_text.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['category_text'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._category_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._category_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._category_text__text.style[domTransition]='color 0s';
				if (me._category_text.ggCurrentLogicStateTextColor == 0) {
					me._category_text__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._category_text__text.style.color="rgba(255,255,255,0.705882)";
				}
			}
		}
		me._category_text.onclick=function (e) {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('node_visible', true);
		}
		me._category_text.onmouseover=function (e) {
			me.elementMouseOver['category_text']=true;
			me._category_text.logicBlock_textcolor();
		}
		me._category_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._category_text__text)
					return;
				}
			}
			me.elementMouseOver['category_text']=false;
			me._category_text.logicBlock_textcolor();
		}
		me._category_text.ontouchend=function (e) {
			me.elementMouseOver['category_text']=false;
			me._category_text.logicBlock_textcolor();
		}
		me._category_text.ggActivate=function () {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		me._category_text.ggUpdatePosition=function (useTransition) {
		}
		me._category_text.ggNodeChange=function () {
			if (me._category_text.ggLastIsActive!=me._category_text.ggIsActive()) {
				me._category_text.ggLastIsActive=me._category_text.ggIsActive();
				if (me._category_text.ggIsActive()) {
					if (me._category_text.ggActivate) me._category_text.ggActivate();
				} else {
					if (me._category_text.ggDeactivate) me._category_text.ggDeactivate();
				}
			}
		}
		me.__div.appendChild(me._category_text);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._map_mob.logicBlock_visible();
	me._svg_map2_1b.logicBlock_visible();
	me._svg_map2_1.logicBlock_visible();
	me._hiidemenu_5.logicBlock_visible();
	me._hiidemenu_4.logicBlock_visible();
	me._minipano_mob_niz.logicBlock_visible();
	me._minipano_mob_sboky.logicBlock_visible();
	me._rectangle_pred.logicBlock_backgroundcolor();
	me._rectangle_sled.logicBlock_backgroundcolor();
	me._menu_background.logicBlock_alpha();
	me._node_scroller.logicBlock_alpha();
	me._category_scroller.logicBlock_alpha();
	me._map.logicBlock_visible();
	me._marker_title.logicBlock_position();
	me._marker_title_mob.logicBlock_position();
	me._rectangle_3.logicBlock_visible();
	me._rectangle_4.logicBlock_visible();
	me._controller_komp3.logicBlock_visible();
	me._controller_komp2.logicBlock_visible();
	me._controller_komp1.logicBlock_visible();
	me._controller_mobile.logicBlock_visible();
	me._minipano_komp.logicBlock_visible();
	me._textud_mob.logicBlock_visible();
	me._textud_data.logicBlock_position();
	me._textud_data.logicBlock_size();
	me._textud.logicBlock_position();
	me._textud.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._map_mob.logicBlock_visible();me._svg_map2_1b.logicBlock_visible();me._svg_map2_1.logicBlock_visible();me._hiidemenu_5.logicBlock_visible();me._hiidemenu_4.logicBlock_visible();me._minipano_mob_niz.logicBlock_visible();me._minipano_mob_sboky.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._rectangle_pred.logicBlock_backgroundcolor();me._rectangle_sled.logicBlock_backgroundcolor();me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._map.logicBlock_visible();me._marker_title.logicBlock_position();me._map_mob.logicBlock_visible();me._marker_title_mob.logicBlock_position();me._rectangle_3.logicBlock_visible();me._rectangle_4.logicBlock_visible();me._controller_komp3.logicBlock_visible();me._controller_komp2.logicBlock_visible();me._controller_komp1.logicBlock_visible();me._controller_mobile.logicBlock_visible();me._svg_map2_1b.logicBlock_visible();me._svg_map2_1.logicBlock_visible();me._hiidemenu_5.logicBlock_visible();me._hiidemenu_4.logicBlock_visible();me._minipano_komp.logicBlock_visible();me._minipano_mob_niz.logicBlock_visible();me._minipano_mob_sboky.logicBlock_visible();me._textud_mob.logicBlock_visible();me._textud_data.logicBlock_position();me._textud_data.logicBlock_size();me._textud.logicBlock_position();me._textud.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._marker_title.logicBlock_position();me._marker_title_mob.logicBlock_position(); });
	player.addListener('varchanged_category_visible', function(args) { me._rectangle_pred.logicBlock_backgroundcolor();me._rectangle_sled.logicBlock_backgroundcolor();me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('varchanged_node_visible', function(args) { me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover();me._category_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover();me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_ver.callChildLogicBlocks_mouseover();me._thumbnail_cloner_hor.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active();me._thumbnail_cloner.callChildLogicBlocks_active();me._thumbnail_cloner_ver.callChildLogicBlocks_active();me._thumbnail_cloner_hor.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner_ver.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner_hor.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('configloaded', function(args) { me._marker.callChildLogicBlocks_configloaded();me._marker_mob.callChildLogicBlocks_configloaded(); });
	player.addListener('mouseover', function(args) { me._marker.callChildLogicBlocks_mouseover();me._marker_mob.callChildLogicBlocks_mouseover(); });
	player.addListener('hastouch', function(args) { me._marker.callChildLogicBlocks_hastouch();me._marker_mob.callChildLogicBlocks_hastouch(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_hastouch(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};