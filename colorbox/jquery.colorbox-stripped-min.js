// ColorBox v1.3.19 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(G,k,S){var H={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined},v="colorbox",O="cbox",p=O+"Element",R=O+"_open",d=O+"_load",Q=O+"_complete",s=O+"_cleanup",Y=O+"_closed",h=O+"_purge",t=!G.support.opacity&&!G.support.style,ab=t&&!S.XMLHttpRequest,W=O+"_IE6",M,ac,ad,c,b,V,K,j,g,n,r,T,q,N,x,z,aa,ae,l,f,a,u,F,m,B,U,J,y,I,Z="div",X;function E(af,ai,ah){var ag=k.createElement(af);if(ai){ag.id=O+ai}if(ah){ag.style.cssText=ah}return G(ag)}function C(ag){var af=b.length,ah=(F+ag)%af;return(ah<0)?af+ah:ah}function L(af,ag){return Math.round((/%/.test(af)?((ag==="x"?V.width():V.height())/100):1)*parseInt(af,10))}function A(af){return aa.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(af)}function P(){var af;aa=G.extend({},G.data(u,v));for(af in aa){if(G.isFunction(aa[af])&&af.slice(0,2)!=="on"){aa[af]=aa[af].call(u)}}aa.rel=aa.rel||u.rel||"nofollow";aa.href=aa.href||G(u).attr("href");aa.title=aa.title||u.title;if(typeof aa.href==="string"){aa.href=G.trim(aa.href)}}function D(af,ag){G.event.trigger(af);if(ag){ag.call(u)}}function w(){var ag,ai=O+"Slideshow_",aj="click."+O,ak,ah,af;if(aa.slideshow&&b[1]){ak=function(){T.text(aa.slideshowStop).unbind(aj).bind(Q,function(){if(aa.loop||b[F+1]){ag=setTimeout(I.next,aa.slideshowSpeed)}}).bind(d,function(){clearTimeout(ag)}).one(aj+" "+s,ah);ac.removeClass(ai+"off").addClass(ai+"on");ag=setTimeout(I.next,aa.slideshowSpeed)};ah=function(){clearTimeout(ag);T.text(aa.slideshowStart).unbind([Q,d,s,aj].join(" ")).one(aj,function(){I.next();ak()});ac.removeClass(ai+"on").addClass(ai+"off")};if(aa.slideshowAuto){ak()}else{ah()}}else{ac.removeClass(ai+"off "+ai+"on")}}function e(af){if(!J){u=af;P();b=G(u);F=0;if(aa.rel!=="nofollow"){b=G("."+p).filter(function(){var ag=G.data(this,v).rel||this.rel;return(ag===aa.rel)});F=b.index(u);if(F===-1){b=b.add(u);F=b.length-1}}if(!B){B=U=true;ac.show();if(aa.returnFocus){G(u).blur().one(Y,function(){G(this).focus()})}M.css({opacity:+aa.opacity,cursor:aa.overlayClose?"pointer":"auto"}).show();aa.w=L(aa.initialWidth,"x");aa.h=L(aa.initialHeight,"y");I.position();if(ab){V.bind("resize."+W+" scroll."+W,function(){M.css({width:V.width(),height:V.height(),top:V.scrollTop(),left:V.scrollLeft()})}).trigger("resize."+W)}D(R,aa.onOpen);z.add(n).hide();x.html(aa.close).show()}I.load(true)}}function o(){if(!ac&&k.body){X=false;V=G(S);ac=E(Z).attr({id:v,"class":t?O+(ab?"IE6":"IE"):""}).hide();M=E(Z,"Overlay",ab?"position:absolute":"").hide();ad=E(Z,"Wrapper");c=E(Z,"Content").append(K=E(Z,"LoadedContent","width:0; height:0; overflow:hidden"),g=E(Z,"LoadingOverlay").add(E(Z,"LoadingGraphic")),n=E(Z,"Title"),r=E(Z,"Current"),q=E(Z,"Next"),N=E(Z,"Previous"),T=E(Z,"Slideshow").bind(R,w),x=E(Z,"Close"));ad.append(c);j=E(Z,false,"position:absolute; width:9999px; visibility:hidden; display:none");z=q.add(N).add(r).add(T);G(k.body).append(M,ac.append(ad,j))}}function i(){if(ac){if(!X){X=true;ae=c.outerHeight(true)-c.height();l=c.outerWidth(true)-c.width();f=K.outerHeight(true);a=K.outerWidth(true);ac.css({"padding-bottom":ae,"padding-right":l});q.click(function(){I.next()});N.click(function(){I.prev()});x.click(function(){I.close()});M.click(function(){if(aa.overlayClose){I.close()}});G(k).bind("keydown."+O,function(ag){var af=ag.keyCode;if(B&&aa.escKey&&af===27){ag.preventDefault();I.close()}if(B&&aa.arrowKey&&b[1]){if(af===37){ag.preventDefault();N.click()}else{if(af===39){ag.preventDefault();q.click()}}}});G("."+p,k).live("click",function(af){if(!(af.which>1||af.shiftKey||af.altKey||af.metaKey)){af.preventDefault();e(this)}})}return true}return false}if(G.colorbox){return}G(o);I=G.fn[v]=G[v]=function(af,ah){var ag=this;af=af||{};o();if(i()){if(!ag[0]){if(ag.selector){return ag}ag=G("<a/>");af.open=true}if(ah){af.onComplete=ah}ag.each(function(){G.data(this,v,G.extend({},G.data(this,v)||H,af))}).addClass(p);if((G.isFunction(af.open)&&af.open.call(ag))||af.open){e(ag[0])}}return ag};I.position=function(ag,af){var aj=0,ai=0,al=ac.offset(),ah=V.scrollTop(),ak=V.scrollLeft();V.unbind("resize."+O);ac.css({top:-90000,left:-90000});if(aa.fixed&&!ab){al.top-=ah;al.left-=ak;ac.css({position:"fixed"})}else{aj=ah;ai=ak;ac.css({position:"absolute"})}if(aa.right!==false){ai+=Math.max(V.width()-aa.w-a-l-L(aa.right,"x"),0)}else{if(aa.left!==false){ai+=L(aa.left,"x")}else{ai+=Math.round(Math.max(V.width()-aa.w-a-l,0)/2)}}if(aa.bottom!==false){aj+=Math.max(V.height()-aa.h-f-ae-L(aa.bottom,"y"),0)}else{if(aa.top!==false){aj+=L(aa.top,"y")}else{aj+=Math.round(Math.max(V.height()-aa.h-f-ae,0)/2)}}ac.css({top:al.top,left:al.left});ag=(ac.width()===aa.w+a&&ac.height()===aa.h+f)?0:ag||0;ad[0].style.width=ad[0].style.height="9999px";function am(an){c[0].style.width=an.style.width;c[0].style.height=an.style.height}ac.dequeue().animate({width:aa.w+a,height:aa.h+f,top:aj,left:ai},{duration:ag,complete:function(){am(this);U=false;ad[0].style.width=(aa.w+a+l)+"px";ad[0].style.height=(aa.h+f+ae)+"px";if(aa.reposition){setTimeout(function(){V.bind("resize."+O,I.position)},1)}if(af){af()}},step:function(){am(this)}})};I.resize=function(af){if(B){af=af||{};if(af.width){aa.w=L(af.width,"x")-a-l}if(af.innerWidth){aa.w=L(af.innerWidth,"x")}K.css({width:aa.w});if(af.height){aa.h=L(af.height,"y")-f-ae}if(af.innerHeight){aa.h=L(af.innerHeight,"y")}if(!af.innerHeight&&!af.height){K.css({height:"auto"});aa.h=K.height()}K.css({height:aa.h});I.position(aa.transition==="none"?0:aa.speed)}};I.prep=function(ag){if(!B){return}var aj,ah=aa.transition==="none"?0:aa.speed;K.remove();K=E(Z,"LoadedContent").append(ag);function af(){aa.w=aa.w||K.width();aa.w=aa.mw&&aa.mw<aa.w?aa.mw:aa.w;return aa.w}function ai(){aa.h=aa.h||K.height();aa.h=aa.mh&&aa.mh<aa.h?aa.mh:aa.h;return aa.h}K.hide().appendTo(j.show()).css({width:af(),overflow:aa.scrolling?"auto":"hidden"}).css({height:ai()}).prependTo(c);j.hide();G(m).css({"float":"none"});if(ab){G("select").not(ac.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(s,function(){this.style.visibility="inherit"})}aj=function(){var au,aq,ar=b.length,ao,at="frameBorder",an="allowTransparency",al,ak,ap;if(!B){return}function am(){if(t){ac[0].style.removeAttribute("filter")}}al=function(){clearTimeout(y);g.hide();D(Q,aa.onComplete)};if(t){if(m){K.fadeIn(100)}}n.html(aa.title).add(K).show();if(ar>1){if(typeof aa.current==="string"){r.html(aa.current.replace("{current}",F+1).replace("{total}",ar)).show()}q[(aa.loop||F<ar-1)?"show":"hide"]().html(aa.next);N[(aa.loop||F)?"show":"hide"]().html(aa.previous);if(aa.slideshow){T.show()}if(aa.preloading){au=[C(-1),C(1)];while(aq=b[au.pop()]){ak=G.data(aq,v).href||aq.href;if(G.isFunction(ak)){ak=ak.call(aq)}if(A(ak)){ap=new Image();ap.src=ak}}}}else{z.hide()}if(aa.iframe){ao=E("iframe")[0];if(at in ao){ao[at]=0}if(an in ao){ao[an]="true"}ao.name=O+(+new Date());if(aa.fastIframe){al()}else{G(ao).one("load",al)}ao.src=aa.href;if(!aa.scrolling){ao.scrolling="no"}G(ao).addClass(O+"Iframe").appendTo(K).one(h,function(){ao.src="//about:blank"})}else{al()}if(aa.transition==="fade"){ac.fadeTo(ah,1,am)}else{am()}};if(aa.transition==="fade"){ac.fadeTo(ah,0,function(){I.position(0,aj)})}else{I.position(ah,aj)}};I.load=function(ah){var ag,ai,af=I.prep;U=true;m=false;u=b[F];if(!ah){P()}D(h);D(d,aa.onLoad);aa.h=aa.height?L(aa.height,"y")-f-ae:aa.innerHeight&&L(aa.innerHeight,"y");aa.w=aa.width?L(aa.width,"x")-a-l:aa.innerWidth&&L(aa.innerWidth,"x");aa.mw=aa.w;aa.mh=aa.h;if(aa.maxWidth){aa.mw=L(aa.maxWidth,"x")-a-l;aa.mw=aa.w&&aa.w<aa.mw?aa.w:aa.mw}if(aa.maxHeight){aa.mh=L(aa.maxHeight,"y")-f-ae;aa.mh=aa.h&&aa.h<aa.mh?aa.h:aa.mh}ag=aa.href;y=setTimeout(function(){g.show()},100);if(aa.inline){E(Z).hide().insertBefore(G(ag)[0]).one(h,function(){G(this).replaceWith(K.children())});af(G(ag))}else{if(aa.iframe){af(" ")}else{if(aa.html){af(aa.html)}else{if(A(ag)){G(m=new Image()).addClass(O+"Photo").error(function(){aa.title=false;af(E(Z,"Error").text("This image could not be loaded"))}).load(function(){var aj;m.onload=null;if(aa.scalePhotos){ai=function(){m.height-=m.height*aj;m.width-=m.width*aj};if(aa.mw&&m.width>aa.mw){aj=(m.width-aa.mw)/m.width;ai()}if(aa.mh&&m.height>aa.mh){aj=(m.height-aa.mh)/m.height;ai()}}if(aa.h){m.style.marginTop=Math.max(aa.h-m.height,0)/2+"px"}if(b[1]&&(aa.loop||b[F+1])){m.style.cursor="pointer";m.onclick=function(){I.next()}}if(t){m.style.msInterpolationMode="bicubic"}setTimeout(function(){af(m)},1)});setTimeout(function(){m.src=ag},1)}else{if(ag){j.load(ag,aa.data,function(ak,aj,al){af(aj==="error"?E(Z,"Error").text("Request unsuccessful: "+al.statusText):G(this).contents())})}}}}}};I.next=function(){if(!U&&b[1]&&(aa.loop||b[F+1])){F=C(1);I.load()}};I.prev=function(){if(!U&&b[1]&&(aa.loop||F)){F=C(-1);I.load()}};I.close=function(){if(B&&!J){J=true;B=false;D(s,aa.onCleanup);V.unbind("."+O+" ."+W);M.fadeTo(200,0);ac.stop().fadeTo(300,0,function(){ac.add(M).css({opacity:1,cursor:"auto"}).hide();D(h);K.remove();setTimeout(function(){J=false;D(Y,aa.onClosed)},1)})}};I.remove=function(){G([]).add(ac).add(M).remove();ac=null;G("."+p).removeData(v).removeClass(p).die()};I.element=function(){return G(u)};I.settings=H}(jQuery,document,this));