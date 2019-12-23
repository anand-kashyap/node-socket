(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8N/K":function(e,t,n){"use strict";n.r(t);var l=n("8Y7J"),i=n("HDdC");class s{constructor(e,t,n){this.router=e,this.chatService=t,this.apiService=n,this.error=!1,this.loader=!1,this.errMsg="",this.errTimeout=4e3,this.searchUser()}searchUser(){this.usersList=new i.a(e=>{this.loader=!0,this.apiService.getUsersList(this.userinput).subscribe(t=>{console.log("usersList",t),e.next(t.data)},e=>{console.error(e)}).add(()=>this.loader=!1)})}ngOnInit(){this.username=this.chatService.getUserInfo().username,this.username&&this.apiService.getRecentChats().subscribe(e=>{console.log("recent usersList",e),this.recentContacts=[...e],console.log(this.recentContacts)},e=>{console.error("err",e),this.chatService.showResponseError(e)}),this.errMsg=this.chatService.getRouteErrorMsg(),this.errMsg&&(this.error=!0),this.subscribeError()}subscribeError(){this.errSubscription=this.chatService.getErrorMsg().subscribe(e=>{console.log("msg",e),this.errMsg=e,this.error=!0,setTimeout(()=>{this.error=!1},this.errTimeout)})}ngOnDestroy(){this.errSubscription.unsubscribe()}joinRoom(e){console.log("to",e.username),this.apiService.findOrCreateRoom([this.username,e.username]).subscribe(e=>{console.log(e),this.openChat(e.data)},e=>console.error(e))}openChat(e){this.chatService.room=e,this.router.navigateByUrl(`/user/chat/${e._id}`)}}class a{}var o=n("fNgX"),u=n("pMnS"),r=n("hpHm"),h=n("2uy1"),c=(n("GS7A"),n("IzEk")),p=n("7o/Q"),d=n("D0XW");function m(e,t=d.a){return n=>n.lift(new b(e,t))}class b{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new g(e,this.dueTime,this.scheduler))}}class g extends p.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(y,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function y(e){e.debouncedNext()}var v=n("eIep"),f=n("5+tZ"),A=n("pLZG"),O=n("128B");function E(e,t,n){return 0===n?[t]:(e.push(t),e)}function I(e){return!!e&&(e instanceof i.a||"function"==typeof e.lift&&"function"==typeof e.subscribe)}var M=n("Cfvw"),S=n("z/SZ");const x={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};class C{constructor(e,t=e,n=!1){this.item=e,this.value=t,this.header=n}isHeader(){return this.header}toString(){return this.value}}function T(e){return e?e.replace(/[^A-Za-z0-9\[\] ]/g,(function(e){return x[e]||e})):""}function _(e,t=" ",n=""){const l=e.split(new RegExp(`(?:[${n}])([^${n}]+)`+`(?:[${n}])|([^${t}]+)`,"g")),i=[],s=l.length;let a;const o=new RegExp(`[${n}]+`,"g");for(let u=0;u<s;u+=1)(a=l[u])&&a.length&&a!==t&&i.push(a.replace(o,""));return i}function w(e,t){if(!t||"object"!=typeof e)return e.toString();if(t.endsWith("()"))return e[t.slice(0,t.length-2)]().toString();const n=t.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split(".");for(const l of n)l in e&&(e=e[l]);return e?e.toString():""}class L{constructor(e,t,n){this.positionService=e,this.renderer=t,this.element=n,this.isFocused=!1,this.visibility="hidden",this.height=0,this._matches=[],this.isScrolledIntoView=function(e){const t=this.ulElement.nativeElement.scrollTop,n=t+Number(this.ulElement.nativeElement.offsetHeight),l=e.offsetTop;return l+e.offsetHeight<=n&&l>=t}}get isBs4(){return!Object(r.c)()}get active(){return this._active}get matches(){return this._matches}set matches(e){if(this.positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition}},allowedPositions:["top","bottom"]}),this.positionService.event$.pipe(Object(c.a)(1)).subscribe(()=>{this.positionService.disable(),this.visibility=this.typeaheadScrollable?"hidden":"visible",this.animationState=this.isAnimated?this.isTopPosition?"animated-up":"animated-down":"unanimated"}),this._matches=e,this.needScrollbar=this.typeaheadScrollable&&this.typeaheadOptionsInScrollableView<this.matches.length,this.typeaheadScrollable&&setTimeout(()=>{this.setScrollableMode()}),this.typeaheadIsFirstItemActive&&this._matches.length>0&&(this._active=this._matches[0],this._active.isHeader()&&this.nextActiveMatch()),this._active&&!this.typeaheadIsFirstItemActive){const e=this._matches.find(e=>e.value===this._active.value);if(e)return void this.selectActive(e);this._active=null}}get isTopPosition(){return this.element.nativeElement.classList.contains("top")}get optionsListTemplate(){return this.parent?this.parent.optionsListTemplate:void 0}get isAnimated(){return!!this.parent&&this.parent.isAnimated}get adaptivePosition(){return!!this.parent&&this.parent.adaptivePosition}get typeaheadScrollable(){return!!this.parent&&this.parent.typeaheadScrollable}get typeaheadOptionsInScrollableView(){return this.parent?this.parent.typeaheadOptionsInScrollableView:5}get typeaheadIsFirstItemActive(){return!this.parent||this.parent.typeaheadIsFirstItemActive}get itemTemplate(){return this.parent?this.parent.typeaheadItemTemplate:void 0}selectActiveMatch(e){this._active&&this.parent.typeaheadSelectFirstItem&&this.selectMatch(this._active),!this.parent.typeaheadSelectFirstItem&&e&&this.selectMatch(this._active)}positionServiceEnable(){this.positionService.enable()}prevActiveMatch(){const e=this.matches.indexOf(this._active);this._active=this.matches[e-1<0?this.matches.length-1:e-1],this._active.isHeader()&&this.prevActiveMatch(),this.typeaheadScrollable&&this.scrollPrevious(e)}nextActiveMatch(){const e=this.matches.indexOf(this._active);this._active=this.matches[e+1>this.matches.length-1?0:e+1],this._active.isHeader()&&this.nextActiveMatch(),this.typeaheadScrollable&&this.scrollNext(e)}selectActive(e){this.isFocused=!0,this._active=e}highlight(e,t){let n,l,i=e.value,s=(this.parent&&this.parent.typeaheadLatinize?T(i):i).toLowerCase();if("object"==typeof t){const e=t.length;for(let a=0;a<e;a+=1)n=s.indexOf(t[a]),l=t[a].length,n>=0&&l>0&&(i=`${i.substring(0,n)}<strong>${i.substring(n,n+l)}</strong>`+`${i.substring(n+l)}`,s=`${s.substring(0,n)}        ${" ".repeat(l)}         `+`${s.substring(n+l)}`)}else t&&(n=s.indexOf(t),l=t.length,n>=0&&l>0&&(i=`${i.substring(0,n)}<strong>${i.substring(n,n+l)}</strong>`+`${i.substring(n+l)}`));return i}focusLost(){this.isFocused=!1}isActive(e){return this._active===e}selectMatch(e,t){return t&&(t.stopPropagation(),t.preventDefault()),this.parent.changeModel(e),setTimeout(()=>this.parent.typeaheadOnSelect.emit(e),0),!1}setScrollableMode(){if(this.ulElement||(this.ulElement=this.element),this.liElements.first){const e=r.b.getStyles(this.ulElement.nativeElement),t=r.b.getStyles(this.liElements.first.nativeElement),n=parseFloat((e["padding-bottom"]?e["padding-bottom"]:"").replace("px","")),l=parseFloat((e["padding-top"]?e["padding-top"]:"0").replace("px","")),i=parseFloat((t.height?t.height:"0").replace("px",""));this.guiHeight=`${this.typeaheadOptionsInScrollableView*i+l+n}px`}this.renderer.setStyle(this.element.nativeElement,"visibility","visible")}scrollPrevious(e){if(0!==e){if(this.liElements){const t=this.liElements.toArray()[e-1];t&&!this.isScrolledIntoView(t.nativeElement)&&(this.ulElement.nativeElement.scrollTop=t.nativeElement.offsetTop)}}else this.scrollToBottom()}scrollNext(e){if(e+1>this.matches.length-1)this.scrollToTop();else if(this.liElements){const t=this.liElements.toArray()[e+1];t&&!this.isScrolledIntoView(t.nativeElement)&&(this.ulElement.nativeElement.scrollTop=t.nativeElement.offsetTop-Number(this.ulElement.nativeElement.offsetHeight)+Number(t.nativeElement.offsetHeight))}}scrollToBottom(){this.ulElement.nativeElement.scrollTop=this.ulElement.nativeElement.scrollHeight}scrollToTop(){this.ulElement.nativeElement.scrollTop=0}}class k{constructor(){this.adaptivePosition=!1,this.isAnimated=!1,this.hideResultsOnBlur=!0,this.selectFirstItem=!0,this.isFirstItemActive=!0,this.minLength=1}}class F{constructor(e,t,n,i,s,a,o){this.changeDetection=n,this.element=i,this.ngControl=s,this.renderer=a,this.typeaheadMinLength=void 0,this.isAnimated=!1,this.typeaheadAsync=void 0,this.typeaheadLatinize=!0,this.typeaheadSingleWords=!0,this.typeaheadWordDelimiters=" ",this.typeaheadPhraseDelimiters="'\"",this.typeaheadScrollable=!1,this.typeaheadOptionsInScrollableView=5,this.typeaheadSelectFirstItem=!0,this.typeaheadIsFirstItemActive=!0,this.typeaheadLoading=new l.m,this.typeaheadNoResults=new l.m,this.typeaheadOnSelect=new l.m,this.typeaheadOnBlur=new l.m,this.dropup=!1,this.isActiveItemChanged=!1,this.isTypeaheadOptionsListActive=!1,this.keyUpEventEmitter=new l.m,this.placement="bottom-left",this._subscriptions=[],this._typeahead=e.createLoader(i,o,a).provide({provide:k,useValue:t}),Object.assign(this,{typeaheadHideResultsOnBlur:t.hideResultsOnBlur,typeaheadSelectFirstItem:t.selectFirstItem,typeaheadIsFirstItemActive:t.isFirstItemActive,typeaheadMinLength:t.minLength,adaptivePosition:t.adaptivePosition,isAnimated:t.isAnimated})}ngOnInit(){this.typeaheadOptionsLimit=this.typeaheadOptionsLimit||20,this.typeaheadMinLength=void 0===this.typeaheadMinLength?1:this.typeaheadMinLength,this.typeaheadWaitMs=this.typeaheadWaitMs||0,void 0!==this.typeaheadAsync||I(this.typeahead)||(this.typeaheadAsync=!1),I(this.typeahead)&&(this.typeaheadAsync=!0),this.typeaheadAsync?this.asyncActions():this.syncActions()}onInput(e){const t=void 0!==e.target.value?e.target.value:void 0!==e.target.textContent?e.target.textContent:e.target.innerText;null!=t&&t.trim().length>=this.typeaheadMinLength?(this.typeaheadLoading.emit(!0),this.keyUpEventEmitter.emit(e.target.value)):(this.typeaheadLoading.emit(!1),this.typeaheadNoResults.emit(!1),this.hide())}onChange(e){if(this._container){if(27===e.keyCode||"Escape"===e.key)return void this.hide();if(38===e.keyCode||"ArrowUp"===e.key)return this.isActiveItemChanged=!0,void this._container.prevActiveMatch();if(40===e.keyCode||"ArrowDown"===e.key)return this.isActiveItemChanged=!0,void this._container.nextActiveMatch();if(13===e.keyCode||"Enter"===e.key)return void this._container.selectActiveMatch()}}onFocus(){0===this.typeaheadMinLength&&(this.typeaheadLoading.emit(!0),this.keyUpEventEmitter.emit(this.element.nativeElement.value||""))}onBlur(){this._container&&!this._container.isFocused&&this.typeaheadOnBlur.emit(this._container.active)}onKeydown(e){if(this._container&&(9===e.keyCode||"Tab"===e.key||13===e.keyCode||"Enter"===e.key)){if(e.preventDefault(),this.typeaheadSelectFirstItem)return void this._container.selectActiveMatch();this.typeaheadSelectFirstItem||(this._container.selectActiveMatch(this.isActiveItemChanged),this.isActiveItemChanged=!1,this.hide())}}changeModel(e){const t=e.value;this.ngControl.viewToModelUpdate(t),this.ngControl.control.setValue(t),this.changeDetection.markForCheck(),this.hide()}get matches(){return this._matches}show(){this._typeahead.attach(L).to(this.container).position({attachment:`${this.dropup?"top":"bottom"} start`}).show({typeaheadRef:this,placement:this.placement,animation:!1,dropup:this.dropup}),this._outsideClickListener=this.renderer.listen("document","click",e=>{0===this.typeaheadMinLength&&this.element.nativeElement.contains(e.target)||this.typeaheadHideResultsOnBlur&&!this.element.nativeElement.contains(e.target)&&this.onOutsideClick()}),this._container=this._typeahead.instance,this._container.parent=this;const e=(this.typeaheadLatinize?T(this.ngControl.control.value):this.ngControl.control.value).toString().toLowerCase();this._container.query=this.typeaheadSingleWords?_(e,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):e,this._container.matches=this._matches,this.element.nativeElement.focus()}hide(){this._typeahead.isShown&&(this._typeahead.hide(),this._outsideClickListener(),this._container=null)}onOutsideClick(){this._container&&!this._container.isFocused&&this.hide()}ngOnDestroy(){for(const e of this._subscriptions)e.unsubscribe();this._typeahead.dispose()}asyncActions(){this._subscriptions.push(this.keyUpEventEmitter.pipe(m(this.typeaheadWaitMs),Object(v.a)(()=>this.typeahead)).subscribe(e=>{this.finalizeAsyncCall(e)}))}syncActions(){this._subscriptions.push(this.keyUpEventEmitter.pipe(m(this.typeaheadWaitMs),Object(f.a)(e=>{const t=this.normalizeQuery(e);return Object(M.a)(this.typeahead).pipe(Object(A.a)(e=>e&&this.testMatch(this.normalizeOption(e),t)),Object(O.a)(E,[]))})).subscribe(e=>{this.finalizeAsyncCall(e)}))}normalizeOption(e){const t=w(e,this.typeaheadOptionField);return(this.typeaheadLatinize?T(t):t).toLowerCase()}normalizeQuery(e){let t=(this.typeaheadLatinize?T(e):e).toString().toLowerCase();return this.typeaheadSingleWords?_(t,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):t}testMatch(e,t){let n;if("object"==typeof t){n=t.length;for(let l=0;l<n;l+=1)if(t[l].length>0&&e.indexOf(t[l])<0)return!1;return!0}return e.indexOf(t)>=0}finalizeAsyncCall(e){if(this.prepareMatches(e||[]),this.typeaheadLoading.emit(!1),this.typeaheadNoResults.emit(!this.hasMatches()),this.hasMatches())if(this._container){const e=((this.typeaheadLatinize?T(this.ngControl.control.value):this.ngControl.control.value)||"").toString().toLowerCase();this._container.query=this.typeaheadSingleWords?_(e,this.typeaheadWordDelimiters,this.typeaheadPhraseDelimiters):e,this._container.matches=this._matches}else this.show();else this.hide()}prepareMatches(e){const t=e.slice(0,this.typeaheadOptionsLimit);if(this.typeaheadGroupField){let e=[];t.map(e=>w(e,this.typeaheadGroupField)).filter((e,t,n)=>n.indexOf(e)===t).forEach(n=>{e.push(new C(n,n,!0)),e=e.concat(t.filter(e=>w(e,this.typeaheadGroupField)===n).map(e=>new C(e,w(e,this.typeaheadOptionField))))}),this._matches=e}else this._matches=t.map(e=>new C(e,w(e,this.typeaheadOptionField)))}hasMatches(){return this._matches.length>0}}class U{static forRoot(){return{ngModule:U,providers:[S.a,h.a,k]}}}var D=n("SVse"),$=l.nb({encapsulation:0,styles:[".dropdown[_nghost-%COMP%] {\n      z-index: 1000;\n    }"],data:{animation:[{type:7,name:"typeaheadAnimation",definitions:[{type:0,name:"animated-down",styles:{type:6,styles:{height:"*",overflow:"hidden"},offset:null},options:void 0},{type:1,expr:"* => animated-down",animation:[{type:6,styles:{height:0,overflow:"hidden"},offset:null},{type:4,styles:null,timings:"220ms cubic-bezier(0, 0, 0.2, 1)"}],options:null},{type:0,name:"animated-up",styles:{type:6,styles:{height:"*",overflow:"hidden"},offset:null},options:void 0},{type:1,expr:"* => animated-up",animation:[{type:6,styles:{height:"*",overflow:"hidden"},offset:null},{type:4,styles:null,timings:"220ms cubic-bezier(0, 0, 0.2, 1)"}],options:null},{type:1,expr:"* => unanimated",animation:{type:4,styles:null,timings:"0s"},options:null}],options:{}}]}});function z(e){return l.Kb(0,[(e()(),l.eb(0,null,null,0))],null,null)}function P(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(e,t){e(t,0,0,t.component.highlight(t.context.match,t.context.query))}))}function K(e){return l.Kb(0,[(e()(),l.pb(0,0,[[2,0],["liElements",1]],null,1,"li",[["class","dropdown-header"]],null,null,null,null,null)),(e()(),l.Ib(1,null,["",""]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit)}))}function R(e){return l.Kb(0,[(e()(),l.eb(0,null,null,0))],null,null)}function H(e){return l.Kb(0,[(e()(),l.pb(0,0,[[2,0],["liElements",1]],null,4,"li",[],[[24,"@typeaheadAnimation",0],[2,"active",null]],[[null,"@typeaheadAnimation.done"],[null,"mouseenter"]],(function(e,t,n){var l=!0,i=e.component;return"@typeaheadAnimation.done"===t&&(l=!1!==i.positionServiceEnable()&&l),"mouseenter"===t&&(l=!1!==i.selectActive(e.parent.context.$implicit)&&l),l}),null,null)),(e()(),l.pb(1,0,null,null,3,"a",[["href","#"],["tabindex","-1"]],null,[[null,"click"]],(function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.selectMatch(e.parent.context.$implicit,n)&&l),l}),null,null)),(e()(),l.eb(16777216,null,null,2,null,R)),l.ob(3,540672,null,0,D.o,[l.M],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),l.Db(4,{item:0,index:1,match:2,query:3})],(function(e,t){var n=t.component,i=e(t,4,0,t.parent.context.$implicit.item,t.parent.context.index,t.parent.context.$implicit,n.query);e(t,3,0,i,n.itemTemplate||l.Ab(t.parent.parent.parent,5))}),(function(e,t){var n=t.component;e(t,0,0,n.animationState,n.isActive(t.parent.context.$implicit))}))}function N(e){return l.Kb(0,[(e()(),l.eb(16777216,null,null,1,null,K)),l.ob(1,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(16777216,null,null,1,null,H)),l.ob(3,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(0,null,null,0))],(function(e,t){var n=t.context.$implicit.isHeader();e(t,1,0,n);var l=!t.context.$implicit.isHeader();e(t,3,0,l)}),null)}function j(e){return l.Kb(0,[(e()(),l.pb(0,0,[[1,0],["ulElement",1]],null,2,"ul",[["class","dropdown-menu"]],[[4,"overflow-y",null],[4,"height",null]],null,null,null,null)),(e()(),l.eb(16777216,null,null,1,null,N)),l.ob(2,278528,null,0,D.k,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,2,0,t.component.matches)}),(function(e,t){var n=t.component;e(t,0,0,n.needScrollbar?"scroll":"auto",n.needScrollbar?n.guiHeight:"auto")}))}function V(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,"h6",[["class","dropdown-header"]],null,null,null,null,null)),(e()(),l.Ib(1,null,["",""]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit)}))}function B(e){return l.Kb(0,[(e()(),l.eb(0,null,null,0))],null,null)}function W(e){return l.Kb(0,[(e()(),l.pb(0,0,[[2,0],["liElements",1]],null,3,"button",[["class","dropdown-item"]],[[24,"@typeaheadAnimation",0],[2,"active",null]],[[null,"@typeaheadAnimation.done"],[null,"click"],[null,"mouseenter"]],(function(e,t,n){var l=!0,i=e.component;return"@typeaheadAnimation.done"===t&&(l=!1!==i.positionServiceEnable()&&l),"click"===t&&(l=!1!==i.selectMatch(e.parent.context.$implicit,n)&&l),"mouseenter"===t&&(l=!1!==i.selectActive(e.parent.context.$implicit)&&l),l}),null,null)),(e()(),l.eb(16777216,null,null,2,null,B)),l.ob(2,540672,null,0,D.o,[l.M],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),l.Db(3,{item:0,index:1,match:2,query:3})],(function(e,t){var n=t.component,i=e(t,3,0,t.parent.context.$implicit.item,t.parent.context.index,t.parent.context.$implicit,n.query);e(t,2,0,i,n.itemTemplate||l.Ab(t.parent.parent.parent,5))}),(function(e,t){var n=t.component;e(t,0,0,n.animationState,n.isActive(t.parent.context.$implicit))}))}function J(e){return l.Kb(0,[(e()(),l.eb(16777216,null,null,1,null,V)),l.ob(1,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(16777216,null,null,1,null,W)),l.ob(3,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(0,null,null,0))],(function(e,t){var n=t.context.$implicit.isHeader();e(t,1,0,n);var l=!t.context.$implicit.isHeader();e(t,3,0,l)}),null)}function q(e){return l.Kb(0,[(e()(),l.eb(16777216,null,null,1,null,J)),l.ob(1,278528,null,0,D.k,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(e()(),l.eb(0,null,null,0))],(function(e,t){e(t,1,0,t.component.matches)}),null)}function G(e){return l.Kb(0,[l.Gb(671088640,1,{ulElement:0}),l.Gb(671088640,2,{liElements:1}),(e()(),l.eb(16777216,null,null,2,null,z)),l.ob(3,540672,null,0,D.o,[l.M],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),l.Db(4,{matches:0,itemTemplate:1,query:2}),(e()(),l.eb(0,[["bsItemTemplate",2]],null,0,null,P)),(e()(),l.eb(0,[["bs3Template",2]],null,0,null,j)),(e()(),l.eb(0,[["bs4Template",2]],null,0,null,q))],(function(e,t){var n=t.component,i=e(t,4,0,n.matches,n.itemTemplate,n.query);e(t,3,0,i,n.optionsListTemplate||l.Ab(t,n.isBs4?7:6))}),null)}function Z(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,"typeahead-container",[["class","dropdown open bottom"],["style","position: absolute;display: block;"]],[[2,"dropdown-menu",null],[4,"overflow-y",null],[4,"height",null],[4,"visibility",null],[2,"dropup",null]],[[null,"mouseleave"],[null,"blur"]],(function(e,t,n){var i=!0;return"mouseleave"===t&&(i=!1!==l.Ab(e,1).focusLost()&&i),"blur"===t&&(i=!1!==l.Ab(e,1).focusLost()&&i),i}),G,$)),l.ob(1,49152,null,0,L,[h.a,l.B,l.k],null,null)],null,(function(e,t){e(t,0,0,l.Ab(t,1).isBs4,l.Ab(t,1).isBs4&&l.Ab(t,1).needScrollbar?"scroll":"visible",l.Ab(t,1).isBs4&&l.Ab(t,1).needScrollbar?l.Ab(t,1).guiHeight:"auto",l.Ab(t,1).visibility,l.Ab(t,1).dropup)}))}var Y=l.lb("typeahead-container",L,Z,{},{},[]),Q=n("MdoF"),X=n("Nv++"),ee=n("cUpR"),te=n("CNMR"),ne=n("s7LF"),le=n("iInd"),ie=n("ZSeD"),se=n("yTNM"),ae=l.nb({encapsulation:0,styles:[[".joinbox[_ngcontent-%COMP%]{box-shadow:3px 4px 15px -2px rgba(0,0,0,.75);padding:30px 20px;background:#85dbf5}.recent-container[_ngcontent-%COMP%]{margin:5px 0}.recent-contact[_ngcontent-%COMP%]{padding:5px 10px;border-radius:5px;background:rgba(41,191,236,.15);border:1px solid #29bfec}.recent-contact[_ngcontent-%COMP%]:hover{background-color:rgba(41,191,236,.34);cursor:pointer}.recent-contact[_ngcontent-%COMP%]:active, .recent-contact[_ngcontent-%COMP%]:focus{background-color:#29bfec}.stick-loader[_ngcontent-%COMP%], .stick-search[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:7px 10px}.stick-loader[_ngcontent-%COMP%]{margin:10px}"]],data:{}});function oe(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l.Ib(1,null,[""," (username: ",")"]))],null,(function(e,t){e(t,1,0,t.context.item.fullName,t.context.item.username)}))}function ue(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,"fa-icon",[["class","stick-search ng-fa-icon"],["icon","search"]],[[1,"title",0],[8,"innerHTML",1]],null,null,o.d,o.c)),l.ob(1,573440,null,0,X.c,[ee.b,X.a,X.d,[2,X.i]],{icon:[0,"icon"]},null)],(function(e,t){e(t,1,0,"search")}),(function(e,t){e(t,0,0,l.Ab(t,1).title,l.Ab(t,1).renderedIconHTML)}))}function re(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,2,"span",[["class","spinner-border spinner-border-sm stick-loader"],["role","status"]],null,null,null,null,null)),(e()(),l.pb(1,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(e()(),l.Ib(-1,null,["Loading..."]))],null,null)}function he(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,null,null,null,null,null,null,null)),(e()(),l.Ib(1,null,[" "," "]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit.members[0])}))}function ce(e){return l.Kb(0,[(e()(),l.Ib(0,null,[" "," "]))],null,(function(e,t){e(t,0,0,t.parent.context.$implicit.roomName)}))}function pe(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,5,"div",[["class","col-md-6 recent-container noselect"]],null,null,null,null,null)),(e()(),l.pb(1,0,null,null,4,"div",[["class","recent-contact"]],null,[[null,"click"]],(function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.openChat(e.context.$implicit)&&l),l}),null,null)),(e()(),l.pb(2,0,null,null,3,"strong",[],null,null,null,null,null)),(e()(),l.eb(16777216,null,null,1,null,he)),l.ob(4,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(e()(),l.eb(0,[["Room",2]],null,0,null,ce))],(function(e,t){e(t,4,0,t.context.$implicit.directMessage,l.Ab(t,5))}),null)}function de(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(e()(),l.pb(1,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(e()(),l.pb(2,0,null,null,1,"h5",[],null,null,null,null,null)),(e()(),l.Ib(-1,null,["Recent Chats"])),(e()(),l.eb(16777216,null,null,1,null,pe)),l.ob(5,278528,null,0,D.k,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,5,0,t.component.recentContacts)}),null)}function me(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,2,"alert",[["type","danger"]],null,null,null,Q.c,Q.b)),l.ob(1,114688,null,0,te.a,[te.b,l.h],{type:[0,"type"],dismissOnTimeout:[1,"dismissOnTimeout"],isOpen:[2,"isOpen"]},null),(e()(),l.pb(2,0,null,0,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(e()(),l.pb(3,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(e()(),l.pb(4,0,null,null,25,"div",[["class","col-md-6 mx-auto mt-5 joinbox"]],null,null,null,null,null)),(e()(),l.pb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),l.Ib(-1,null,["Join Chat"])),(e()(),l.pb(7,0,null,null,4,"p",[],null,null,null,null,null)),(e()(),l.Ib(-1,null,["Hi "])),(e()(),l.pb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(e()(),l.Ib(10,null,["",""])),(e()(),l.Ib(-1,null,["!"])),(e()(),l.eb(0,[["usersTemp",2]],null,0,null,oe)),(e()(),l.pb(13,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(e()(),l.pb(14,0,null,null,1,"label",[["for","user"]],null,null,null,null,null)),(e()(),l.Ib(-1,null,["Search for Users"])),(e()(),l.pb(16,0,null,null,11,"div",[["class","position-relative"]],null,null,null,null,null)),(e()(),l.pb(17,16777216,null,null,6,"input",[["class","form-control"],["typeaheadOptionField","fullName"],["typeaheadWaitMs","600"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"typeaheadOnSelect"],[null,"typeaheadLoading"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keyup"],[null,"click"],[null,"focus"],[null,"keydown"]],(function(e,t,n){var i=!0,s=e.component;return"input"===t&&(i=!1!==l.Ab(e,18)._handleInput(n.target.value)&&i),"blur"===t&&(i=!1!==l.Ab(e,18).onTouched()&&i),"compositionstart"===t&&(i=!1!==l.Ab(e,18)._compositionStart()&&i),"compositionend"===t&&(i=!1!==l.Ab(e,18)._compositionEnd(n.target.value)&&i),"input"===t&&(i=!1!==l.Ab(e,23).onInput(n)&&i),"keyup"===t&&(i=!1!==l.Ab(e,23).onChange(n)&&i),"click"===t&&(i=!1!==l.Ab(e,23).onFocus()&&i),"focus"===t&&(i=!1!==l.Ab(e,23).onFocus()&&i),"blur"===t&&(i=!1!==l.Ab(e,23).onBlur()&&i),"keydown"===t&&(i=!1!==l.Ab(e,23).onKeydown(n)&&i),"ngModelChange"===t&&(i=!1!==(s.userinput=n)&&i),"typeaheadOnSelect"===t&&(i=!1!==s.joinRoom(n.item)&&i),"typeaheadLoading"===t&&(i=!1!==(s.loader=n)&&i),i}),null,null)),l.ob(18,16384,null,0,ne.c,[l.B,l.k,[2,ne.a]],null,null),l.Fb(1024,null,ne.j,(function(e){return[e]}),[ne.c]),l.ob(20,671744,null,0,ne.n,[[8,null],[8,null],[8,null],[6,ne.j]],{model:[0,"model"]},{update:"ngModelChange"}),l.Fb(2048,null,ne.k,null,[ne.n]),l.ob(22,16384,null,0,ne.l,[[4,ne.k]],null,null),l.ob(23,212992,null,0,F,[S.a,k,l.h,l.k,ne.k,l.B,l.M],{typeahead:[0,"typeahead"],typeaheadMinLength:[1,"typeaheadMinLength"],adaptivePosition:[2,"adaptivePosition"],typeaheadWaitMs:[3,"typeaheadWaitMs"],typeaheadOptionField:[4,"typeaheadOptionField"],typeaheadAsync:[5,"typeaheadAsync"],typeaheadItemTemplate:[6,"typeaheadItemTemplate"]},{typeaheadLoading:"typeaheadLoading",typeaheadOnSelect:"typeaheadOnSelect"}),(e()(),l.eb(16777216,null,null,1,null,ue)),l.ob(25,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(16777216,null,null,1,null,re)),l.ob(27,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(e()(),l.eb(16777216,null,null,1,null,de)),l.ob(29,16384,null,0,D.l,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],(function(e,t){var n=t.component;e(t,1,0,"danger",n.errTimeout,n.error),e(t,20,0,n.userinput),e(t,23,0,n.usersList,3,!0,"600","fullName",!0,l.Ab(t,12)),e(t,25,0,!n.loader),e(t,27,0,n.loader),e(t,29,0,n.recentContacts)}),(function(e,t){var n=t.component;e(t,2,0,n.errMsg),e(t,10,0,n.username),e(t,17,0,l.Ab(t,22).ngClassUntouched,l.Ab(t,22).ngClassTouched,l.Ab(t,22).ngClassPristine,l.Ab(t,22).ngClassDirty,l.Ab(t,22).ngClassValid,l.Ab(t,22).ngClassInvalid,l.Ab(t,22).ngClassPending)}))}function be(e){return l.Kb(0,[(e()(),l.pb(0,0,null,null,1,"app-joinchat",[],null,null,null,me,ae)),l.ob(1,245760,null,0,s,[le.k,ie.a,se.a],null,null)],(function(e,t){e(t,1,0)}),null)}var ge=l.lb("app-joinchat",s,be,{},{},[]),ye=n("C1gq"),ve=n("aHM3"),fe=n("qn1f");n.d(t,"JoinchatModuleNgFactory",(function(){return Ae}));var Ae=l.mb(a,[],(function(e){return l.xb([l.yb(512,l.j,l.X,[[8,[o.b,o.a,u.a,Y,Q.a,ge]],[3,l.j],l.v]),l.yb(4608,D.n,D.m,[l.s,[2,D.z]]),l.yb(4608,ne.r,ne.r,[]),l.yb(4608,ne.d,ne.d,[]),l.yb(4608,h.a,h.a,[l.C,l.z]),l.yb(4608,S.a,S.a,[l.j,l.x,l.p,h.a,l.g]),l.yb(4608,k,k,[]),l.yb(4608,te.b,te.b,[]),l.yb(1073742336,D.c,D.c,[]),l.yb(1073742336,ye.a,ye.a,[]),l.yb(1073742336,ne.q,ne.q,[]),l.yb(1073742336,ne.i,ne.i,[]),l.yb(1073742336,ne.o,ne.o,[]),l.yb(1073742336,ve.a,ve.a,[]),l.yb(1073742336,X.j,X.j,[]),l.yb(1073742336,fe.a,fe.a,[]),l.yb(1073742336,le.n,le.n,[[2,le.s],[2,le.k]]),l.yb(1073742336,U,U,[]),l.yb(1073742336,te.c,te.c,[]),l.yb(1073742336,a,a,[]),l.yb(1024,le.i,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);