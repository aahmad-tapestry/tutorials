var AWIN=AWIN||{};AWIN.meta=AWIN.meta||{},AWIN.meta.buildnumber="1601886542990",AWIN.meta.generatoruuid="71051dfc-12df-49e2-9c96-bcfe03dd5c40",AWIN.Tracking=AWIN.Tracking||{},AWIN.sProtocol="https:"==location.protocol?"https://":"http://",AWIN.iScriptCount=0,AWIN.Tracking.device9Url="https://the.sciencebehindecommerce.com/d9core",AWIN.tldDomains=["com","org","edu","gov","uk","net","ca","de","jp","fr","au","us","ru","ch","it","nl","se","no","es","mil","gw","ax","wf","yt","sj","mobi","eh","mh","bv","ap","cat","kp","iq","um","arpa","pm","gb","cs","td","so","aero","biz","coop","info","jobs","museum","name","pro","travel","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","aw","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bw","by","bz","cc","cd","cf","cg","ci","ck","cl","cm","cn","co","cr","cu","cv","cx","cy","cz","dj","dk","dm","do","dz","ec","ee","eg","er","et","eu","fi","fj","fk","fm","fo","ga","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","ir","is","je","jm","jo","ke","kg","kh","ki","km","kn","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","mg","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pn","pr","ps","pt","pw","py","qa","re","ro","rw","sa","sb","sc","sd","sg","sh","si","sk","sl","sm","sn","sr","st","sv","sy","sz","tc","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uy","uz","va","vc","ve","vg","vi","vn","vu","ws","ye","yu","za","zm","zw"],AWIN.twoPartsTldDomains=["co.bb","co.ck","co.cr","co.in","co.id","co.il","co.jp","co.nz","co.za","co.kr","co.th","co.uk","org.uk","net.uk","com.pl","biz.pl","net.pl","com.cl","com.pe","com.ar","com.au","com.br"],AWIN.Tracking.fingerprinting=function(e){var n=AWIN.Tracking.getQueryVarValue("mtfp",document.location.search.substring(1));if(AWIN.Tracking.device9&&"no"!=n){window.D9v=e;var a=document.createElement("script");a.type="text/javascript",a.id="d9tag",a.async=!0,a.src=AWIN.Tracking.device9Url;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(a,t)}},AWIN.Tracking.digestClickId=function(e){if(!/\d+_\d+_.+/.test(e))return!1;var n=e.split("_"),a={};return a.sName="_aw_m_"+n[0],a.sContents=e,a},AWIN.Tracking.getQueryVarValue=function(e,n){for(var a=n.split("&"),t=0;t<a.length;t++){var r=a[t].split("=");if(e.toLowerCase()==r[0].toLowerCase())return r[1]}},AWIN.Tracking.getAnchorValue=function(e){var n=document.location.hash.substring(1);if(n)return aid=n.match(e),aid?aid.toString().substr(4):null},AWIN.Tracking.buildQueryString=function(e){var n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a+"="+encodeURIComponent(e[a]));return n.join("&")},AWIN.Tracking._getDomain=function(){return document.domain},AWIN.Tracking._getCookieDomain=function(){if(void 0!==AWIN.Tracking.cookieDomain)return AWIN.Tracking.cookieDomain;var e=AWIN.Tracking._getDomain();if(e.split(".").length<3)return"."+e;var n=e.split(".").slice(-2).join(".");if(AWIN.twoPartsTldDomains.indexOf(n)>=0)return"."+e.split(".").slice(-3).join(".");var a=e.split(".").pop();return AWIN.tldDomains.indexOf(a)>=0?"."+e.split(".").slice(-2).join("."):"www."==e.substr(0,4)?e.substr(3):"."+e},AWIN.Tracking._getAWCValue=function(){for(var e,n=/[\?&]awc=(\d+_(\d+)_[0-9a-f]+)/gi,a=0,t=!1;e=n.exec(AWIN.Tracking._getBrowserSearchBarUrl());)a<e[2]&&(a=e[2],t=e[1]);return t||AWIN.Tracking.getAnchorValue(/awc=[0-9a-z_]+/i)},AWIN.Tracking._getAWaidValue=function(){var e=/[\?&]awaid=(\d+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getGCLIDValue=function(){var e=/[\?&]gclid=([0-9a-zA-Z_\-]+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getBrowserSearchBarUrl=function(){return document.location.search},AWIN.Tracking._getATPValue=function(){var e=AWIN.Tracking.getQueryVarValue("atp",document.location.search.substring(1));return e?parseInt(e):AWIN.Tracking.getAnchorValue(/atp=[0-9]+/i)?parseInt(parseanchorAtp):0},AWIN.Tracking.setCookie=function(e,n,a){var t=new Date;t.setTime(t.getTime()+31536e6),a&&t.setTime(1e3*a);var r="; expires="+t.toGMTString();document.cookie=e+"="+n+r+"; path=/;domain="+this._getCookieDomain()},AWIN.Tracking.setAWCCookie=function(){var e=AWIN.Tracking._getAWCValue();if(!/\d+_\d+_.+/.test(e))return!1;var n="_aw_m_"+e.split("_")[0];AWIN.Tracking.setCookie(n,e),AWIN.Tracking._getATPValue()>0&&AWIN.Tracking.setCookie("_aw_atp",AWIN.Tracking._getATPValue())},AWIN.Tracking.setGCLIDCookie=function(){var e=AWIN.Tracking._getGCLIDValue(),n=AWIN.Tracking._getAWaidValue();return null!==e&&null!==n&&(AWIN.Tracking.setCookie("_aw_m_"+n,"gclid_"+n+"_"+e),!0)},AWIN.Tracking.setAidCookie=function(){var e=AWIN.Tracking.getQueryVarValue("xid",document.location.search.substring(1));e||(e=AWIN.Tracking.getAnchorValue(/xid=\d+/)),e&&AWIN.Tracking.setCookie("_aw_xid",e)},AWIN.Tracking.getAffiliateId=function(){return AWIN.Tracking.getCookiesAsString(/_aw_xid/)},AWIN.Tracking.getSaleChannel=function(){return void 0!==AWIN.Tracking.Sale.channel?AWIN.Tracking.Sale.channel:""},AWIN.Tracking.cookiesWereSpecifiedByMerchant=function(){if(AWIN.Tracking.Sale&&AWIN.Tracking.Sale.click){if(/\d+_\d+_.+/.test(AWIN.Tracking.Sale.click))return!0}return!1},AWIN.Tracking.getCookiesAsString=function(e){e||(e=/_aw_m_\d+/);for(var n=[],a=document.cookie.split(";"),t=0;t<a.length;t++){var r=a[t].split("=");e.test(r[0])&&n.push(r[1])}return n.toString().replace(" ","")},AWIN.Tracking.getScriptAppendNode=function(){var e=["body","head","html"];for(var n in e)if(document.getElementsByTagName(e[n])[0])return document.getElementsByTagName(e[n])[0]},AWIN.Tracking.frameAppend=function(e){if(document.getElementsByTagName("body")[0]){var n=document.createElement("iframe");n.src=e,document.getElementsByTagName("body")[0].appendChild(n),AWIN.Tracking.hideElement(n)}},AWIN.Tracking.pixelAppend=function(e){if(document.getElementsByTagName("body")[0]){var n=document.createElement("img");n.src=e,document.getElementsByTagName("body")[0].appendChild(n),AWIN.Tracking.hideElement(n)}},AWIN.Tracking.scriptAppend=function(e,n,a,t){if(e&&n)return!1;var r=document.createElement("script");if(r.type="text/javascript",r.id="_aw_script_"+AWIN.iScriptCount++,e?r.src=e:n&&(r.text=n),t)for(var i in t)r[i]=t[i];return a&&(r.onreadystatechange=function(){"complete"!=r.readyState&&"loaded"!=r.readyState||eval(a)},r.onload=function(){eval(a)}),AWIN.Tracking.getScriptAppendNode().appendChild(r),r},AWIN.scriptsLoader=function(e){e:for(var n=0;n<e.length;n++){for(var a=e[n],t=0;t<a.aRequiredVars.length;t++)try{if(void 0===eval(a.aRequiredVars[t]))throw new Error}catch(e){continue e}a.sUrl?AWIN.Tracking.scriptAppend(a.sUrl):a.sContents&&AWIN.Tracking.scriptAppend(null,a.sContents)}},AWIN.Tracking.saleSubmit=function(){if(AWIN.Tracking.iMerchantId<1)return!1;AWIN.Tracking.Sale.currency=void 0!==AWIN.Tracking.Sale.currency?AWIN.Tracking.Sale.currency:"",AWIN.Tracking.Sale.test=void 0!==AWIN.Tracking.Sale.test?AWIN.Tracking.Sale.test:"0",AWIN.Tracking.Sale.voucher=void 0!==AWIN.Tracking.Sale.voucher?AWIN.Tracking.Sale.voucher:"",AWIN.Tracking.scriptAppend(AWIN.Tracking.buildSaleUrl("js")),AWIN.Tracking.BasketImage=new Image(1,1),AWIN.Tracking.BasketImage.src=AWIN.Tracking.buildSaleUrl("ia"),AWIN.Tracking.cookiesWereSpecifiedByMerchant()||(AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&1!=AWIN.Tracking.Sale.pvOnly&&AWIN.Tracking.embedIframe("get"),AWIN.Tracking.fingerprinting({AdvID:"1062",OrderID:AWIN.Tracking.Sale.orderRef,OrderTotal:AWIN.Tracking.Sale.amount,SiteID:AWIN.Tracking.iMerchantId,TAG:2}))},AWIN.Tracking.basketSubmit=function(){var e=/^\s+|\s+$/g,n=document.getElementById("aw_basket").value.split("\n"),a=new Array;AWIN.Tracking.BasketImages=new Array;for(var t=0;t<n.length;t++){var r=n[t].replace(e,"");if(r.length>0){for(var i=r.split("|"),c="",o=0;o<i.length;o++){c+=i[o].replace(e,"").substring(0,255)+"|"}a[a.length]=encodeURIComponent(c.substring(0,c.length-1))}}for(t=0;t<a.length;t++)a[t].length>0&&(AWIN.Tracking.BasketImages[t]=new Image(1,1),AWIN.Tracking.BasketImages[t].src=AWIN.sProtocol+"www.zenaps.com/basket.php?product_line="+a[t])},AWIN.Tracking.getBasketData=function(){var e=[];if(!document.getElementById("aw_basket"))return e;for(var n=document.getElementById("aw_basket").value.split("\n"),a=0;a<n.length;a++)if(n[a].length>0){var t=n[a].split("|");try{e.push({id:t[3].replace(/^\[|\]$/gi,""),name:t[4].replace(/^\[|\]$/gi,""),price:t[5].replace(/^\[|\]$/gi,""),quantity:t[6].replace(/^\[|\]$/gi,""),sku:t[7].replace(/^\[|\]$/gi,""),cg:t[8].replace(/^\[|\]$/gi,""),category:t[9].replace(/^\[|\]$/gi,"")})}catch(n){return e}}return e},AWIN.Tracking.hideElement=function(e){"Microsoft Internet Explorer"==navigator.appName?(e.style.height=0,e.style.width=0,e.style.visibility="hidden",e.style.display="inherit",e.style.margin=0,e.style.border=0,e.style.padding=0):(e.style.setProperty("height","0","important"),e.style.setProperty("width","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","inherit","important"),e.style.setProperty("margin","0","important"),e.style.setProperty("border","0","important"),e.style.setProperty("padding","0","important"))},AWIN.Tracking.embedIframe=function(e){if("set"==e){var n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&sv="+AWIN.Tracking._getAWCValue(),a=parseInt(AWIN.Tracking._getATPValue());a>0&&(n=n+"|"+a)}else{var t=AWIN.Tracking.buildSaleUrl("et");n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&gv=2&l="+escape(t)}if(document.getElementsByTagName("body")[0]){var r=document.createElement("iframe");r.src=n,r.height="0",r.width="0",r.id="AW_ALT",document.getElementsByTagName("body")[0].appendChild(r);var i=document.getElementById("AW_ALT");AWIN.Tracking.hideElement(i)}},AWIN.Tracking.buildSaleUrl=function(e){var n="js"==e?"js":"php",a="",t="";if("fc"!=e&&"et"!=e){a="&cks="+AWIN.Tracking.sCookiesString;var r=parseInt(AWIN.Tracking.getCookiesAsString(/_aw_atp/));r>0&&(t="&atp="+r)}var i=escape(window.location.href);"fc"==e&&(i=escape(i));var c="";1==AWIN.Tracking.Sale.pvOnly&&(c="&pv=1");var o=AWIN.sProtocol+"www.zenaps.com/sread."+n+"?a="+AWIN.Tracking.iMerchantId+"&b="+AWIN.Tracking.Sale.amount+"&cr="+AWIN.Tracking.Sale.currency+"&c="+AWIN.Tracking.Sale.orderRef+"&d="+AWIN.Tracking.Sale.parts+"&vc="+AWIN.Tracking.Sale.voucher+"&t="+AWIN.Tracking.Sale.test+"&ch="+AWIN.Tracking.getSaleChannel()+a+"&l="+i+"&tv=2"+c+t+"&tt="+e;if(AWIN.Tracking.Sale.custom&&AWIN.Tracking.Sale.custom instanceof Array)for(var g=0;g<AWIN.Tracking.Sale.custom.length;g++){o=o+"&p"+(g+1)+"="+AWIN.Tracking.Sale.custom[g]}return o},AWIN.Tracking.fetchZxParam=function(e){var n=window["zx_"+e],a=AWIN.Tracking.getQueryVarValue("zx_"+e,document.location.search.substring(1)),t=AWIN.Tracking.getXPath('//*[@id="zx_'+e+'"]').next();if(null!==t){n=null;var r=t.innerHTML}var i=AWIN.Tracking.getXPath('//META[@name="zx:'+e+'"]').next();if(null!==i)var c=i.getAttribute("content");return n||c||r||a},AWIN.Tracking.getXPath=function(e){return document.evaluate?{list:document.evaluate(e,document,null,XPathResult.ANY_TYPE,null),next:function(){return this.list.iterateNext()}}:{next:function(){return null}}},AWIN.Tracking.run=function(){AWIN.Tracking.cookiesWereSpecifiedByMerchant()?AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.Sale.click):AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.getCookiesAsString()),AWIN.Tracking.Sale&&(AWIN.Tracking.saleSubmit(),document.getElementById("aw_basket")&&AWIN.Tracking.basketSubmit()),AWIN.Tracking.aScripts.length>0&&AWIN.scriptsLoader(AWIN.Tracking.aScripts),AWIN.Tracking._getAWCValue()?(AWIN.Tracking.setAWCCookie(),AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&AWIN.Tracking.embedIframe("set"),AWIN.Tracking.fingerprinting({CampID:"3055",CCampID:AWIN.Tracking.iMerchantId,ImpID:AWIN.Tracking._getAWCValue(),TAG:1})):AWIN.Tracking._getGCLIDValue()?AWIN.Tracking.setGCLIDCookie():AWIN.Tracking.extendAWCookies(),AWIN.Tracking.setAidCookie()},AWIN.Tracking.getAWCookies=function(){for(var e=/_aw_m_\d+/,n=/\d+_\d+_.+/,a=[],t=document.cookie.split(";"),r=0;r<t.length;r++){var i=t[r].split("=");if(e.test(i[0])){if(!n.test(i[1]))continue;a.push(i)}}return a},AWIN.Tracking.extendAWCookies=function(){for(var e=AWIN.Tracking.getAWCookies(),n=0;n<e.length;n++){var a=e[n][0],t=e[n][1];AWIN.Tracking.setCookie(a,t,1);var r=t.split("_"),i=31536e3+parseInt(r[1]);AWIN.Tracking.setCookie(a,t,i)}},AWIN.Tracking.aScripts=[],AWIN.Tracking.iMerchantId=17085,AWIN.enhancedTracking=!0,"yes"==AWIN.Tracking.getQueryVarValue("awin_tntc",document.location.search.substring(1))&&(AWIN.enhancedTracking=!0),AWIN.Tracking.run();