var imdi = imdi || {};

$(document).ready(function () {
    
    // tocbot import
    !function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){(function(o){var i,l,r;!function(n,o){l=[],i=o(n),void 0!==(r="function"==typeof i?i.apply(t,l):i)&&(e.exports=r)}(void 0!==o?o:this.window||this.global,function(e){"use strict";function t(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)m.call(n,o)&&(e[o]=n[o])}return e}function o(e,t,n){t||(t=250);var o,i;return function(){var l=n||this,r=+new Date,s=arguments;o&&r<o+t?(clearTimeout(i),i=setTimeout(function(){o=r,e.apply(l,s)},t)):(o=r,e.apply(l,s))}}var i,l,r=n(2),s={},c={},a=n(3),u=n(4);if("undefined"!=typeof window){var d,f=!!e.document.querySelector&&!!e.addEventListener,m=Object.prototype.hasOwnProperty;return c.destroy=function(){try{document.querySelector(s.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+s.tocSelector)}document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),i&&document.removeEventListener("click",this._clickListener,!1)},c.init=function(e){if(f&&(s=t(r,e||{}),this.options=s,this.state={},s.smoothScroll&&(c.zenscroll=n(5),c.zenscroll.setup(s.smoothScrollDuration)),i=a(s),l=u(s),this._buildHtml=i,this._parseContent=l,c.destroy(),null!==(d=l.selectHeadings(s.contentSelector,s.headingSelector)))){var m=l.nestHeadingsArray(d),p=m.nest;return i.render(s.tocSelector,p),this._scrollListener=o(function(e){i.updateToc(d);var t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&0===e.eventPhase||t)&&(i.enableTocAnimation(),i.updateToc(d),s.scrollEndCallback&&s.scrollEndCallback(e))},s.throttleTimeout),this._scrollListener(),document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1),this._clickListener=o(function(e){s.smoothScroll&&i.disableTocAnimation(e),i.updateToc(d)},s.throttleTimeout),document.addEventListener("click",this._clickListener,!1),this}},c.refresh=function(e){c.destroy(),c.init(e||this.options)},e.tocbot=c,c}})}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",collapseDepth:0,smoothScroll:!0,smoothScrollDuration:420,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1}},function(e,t){e.exports=function(e){function t(e,n){var l=n.appendChild(o(e));if(e.children.length){var r=i(e.isCollapsed);e.children.forEach(function(e){t(e,r)}),l.appendChild(r)}}function n(e,n){var o=i(!1);n.forEach(function(e){t(e,o)});var l=document.querySelector(e);if(null!==l)return l.firstChild&&l.removeChild(l.firstChild),l.appendChild(o)}function o(t){var n=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&n.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeHtml&&t.childNodes.length?u.call(t.childNodes,function(e){o.appendChild(e.cloneNode(!0))}):o.textContent=t.textContent,o.setAttribute("href","#"+t.id),o.setAttribute("class",e.linkClass+p+"node-name--"+t.nodeName+p+e.extraLinkClasses),n.appendChild(o),n}function i(t){var n=document.createElement("ul"),o=e.listClass+p+e.extraListClasses;return t&&(o+=p+e.collapsibleClass,o+=p+e.isCollapsedClass),n.setAttribute("class",o),n}function l(){var t=document.documentElement.scrollTop||f.scrollTop,n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=p+e.positionFixedClass):n.className=n.className.split(p+e.positionFixedClass).join("")}function r(t){var n=document.documentElement.scrollTop||f.scrollTop;e.positionFixedSelector&&l();var o,i=t;if(m&&null!==document.querySelector(e.tocSelector)&&i.length>0){d.call(i,function(t,l){if(t.offsetTop>n+e.headingsOffset+10){return o=i[0===l?l:l-1],!0}if(l===i.length-1)return o=i[i.length-1],!0});var r=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);u.call(r,function(t){t.className=t.className.split(p+e.activeLinkClass).join("")});var c=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+o.nodeName+'[href="#'+o.id+'"]');c.className+=p+e.activeLinkClass;var a=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);u.call(a,function(t){var n=p+e.isCollapsedClass;-1===t.className.indexOf(n)&&(t.className+=p+e.isCollapsedClass)}),c.nextSibling&&(c.nextSibling.className=c.nextSibling.className.split(p+e.isCollapsedClass).join("")),s(c.parentNode.parentNode)}}function s(t){return-1!==t.className.indexOf(e.collapsibleClass)?(t.className=t.className.split(p+e.isCollapsedClass).join(""),s(t.parentNode.parentNode)):t}function c(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(m=!1)}function a(){m=!0}var u=[].forEach,d=[].some,f=document.body,m=!0,p=" ";return{enableTocAnimation:a,disableTocAnimation:c,render:n,updateToc:r}}},function(e,t){e.exports=function(e){function t(e){return e[e.length-1]}function n(e){return+e.nodeName.split("H").join("")}function o(t){var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:n(t),textContent:t.textContent.trim()};return e.includeHtml&&(o.childNodes=t.childNodes),o}function i(i,l){for(var r=o(i),s=n(i),c=l,a=t(c),u=a?a.headingLevel:0,d=s-u;d>0;)a=t(c),a&&void 0!==a.children&&(c=a.children),d--;return s>=e.collapseDepth&&(r.isCollapsed=!0),c.push(r),c}function l(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}function r(e){return s.call(e,function(e,t){return i(o(t),e.nest),e},{nest:[]})}var s=[].reduce;return{nestHeadingsArray:r,selectHeadings:l}}},function(e,t,n){var o,i,l;!function(n,r){i=[],o=r(),void 0!==(l="function"==typeof o?o.apply(t,i):o)&&(e.exports=l)}(0,function(){"use strict";var e=function(e){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(e)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var t=function(t,n,o){n=n||999,o||0===o||(o=9);var i,l=function(e){i=e},r=function(){clearTimeout(i),l(0)},s=function(e){return Math.max(0,t.getTopOf(e)-o)},c=function(o,i,s){if(r(),0===i||i&&i<0||e(t.body))t.toY(o),s&&s();else{var c=t.getY(),a=Math.max(0,o)-c,u=(new Date).getTime();i=i||Math.min(Math.abs(a),n),function e(){l(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-u)/i),o=Math.max(0,Math.floor(c+a*(n<.5?2*n*n:n*(4-2*n)-1)));t.toY(o),n<1&&t.getHeight()+o<t.body.scrollHeight?e():(setTimeout(r,99),s&&s())},9))}()}},a=function(e,t,n){c(s(e),t,n)},u=function(e,n,i){var l=e.getBoundingClientRect().height,r=t.getTopOf(e)+l,u=t.getHeight(),d=t.getY(),f=d+u;s(e)<d||l+o>u?a(e,n,i):r+o>f?c(r-u+o,n,i):i&&i()},d=function(e,n,o,i){c(Math.max(0,t.getTopOf(e)-t.getHeight()/2+(o||e.getBoundingClientRect().height/2)),n,i)};return{setup:function(e,t){return(0===e||e)&&(n=e),(0===t||t)&&(o=t),{defaultDuration:n,edgeOffset:o}},to:a,toY:c,intoView:u,center:d,stop:r,moving:function(){return!!i},getY:t.getY,getTopOf:t.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=t({body:document.scrollingElement||document.body,toY:function(e){window.scrollTo(0,e)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(e){return e.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(e,o,i){return t({body:e,toY:function(t){e.scrollTop=t},getY:function(){return e.scrollTop},getHeight:function(){return Math.min(e.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(e){return e.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!e(document.body)){var l="scrollRestoration"in history;l&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){l&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(e){e.state&&"zenscrollY"in e.state&&i.toY(e.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var e=i.setup().edgeOffset;if(e){var t=document.getElementById(window.location.href.split("#")[1]);if(t){var n=Math.max(0,i.getTopOf(t)-e),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var r=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(e){for(var t=e.target;t&&"A"!==t.tagName;)t=t.parentNode;if(!(!t||1!==e.which||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey)){if(l)try{history.replaceState({zenscrollY:i.getY()},"")}catch(e){}var n=t.getAttribute("href")||"";if(0===n.indexOf("#")&&!r.test(t.className)){var o=0,s=document.getElementById(n.substring(1));if("#"!==n){if(!s)return;o=i.getTopOf(s)}e.preventDefault();var c=function(){window.location=n},a=i.setup().edgeOffset;a&&(o=Math.max(0,o-a),c=function(){history.pushState(null,"",n)}),i.toY(o,null,c)}}},!1)}return i})}]);
    
    // position: sticky polyfill (for tocbot to stay sticky on IE 11)
    !function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=k.left?(k.top=a.pageYOffset,k.left=a.pageXOffset,n.refreshAll()):a.pageYOffset!=k.top&&(k.top=a.pageYOffset,k.left=a.pageXOffset,l.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){l.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}c(),a.addEventListener("scroll",c),a.addEventListener("resize",n.refreshAll),a.addEventListener("orientationchange",n.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1;a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var j="undefined"!=typeof ShadowRoot,k={top:null,left:null},l=[],m=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(l.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,l.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var k=c.parentNode,l=j&&k instanceof ShadowRoot?k.host:k,m=c.getBoundingClientRect(),n=l.getBoundingClientRect(),o=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:m.left,right:b.documentElement.clientWidth-m.right},this._offsetToParent={top:m.top-n.top-e(o.borderTopWidth),left:m.left-n.left-e(o.borderLeftWidth),right:-m.right+n.right-e(o.borderRightWidth)},this._styles={position:c.style.position,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var p=e(h.top);this._limits={start:m.top+a.pageYOffset-p,end:n.top+a.pageYOffset+l.offsetHeight-e(o.borderBottomWidth)-c.offsetHeight-p-e(h.marginBottom)};var q=o.position;"absolute"!=q&&"relative"!=q&&(l.style.position="relative"),this._recalcPosition();var r=this._clone={};r.node=b.createElement("div"),d(r.node.style,{width:m.right-m.left+"px",height:m.bottom-m.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(r.node,c),r.docOffsetTop=f(r.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=k.top<=this._limits.start?"start":k.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,l.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),l.some(function(b,c){if(b._node===a._node)return l.splice(c,1),!0}),this._removed=!0}}]),g}(),n={stickies:l,Sticky:m,addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<l.length;b++)if(l[b]._node===a)return l[b];return new m(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?l.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new m(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){l.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}l.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];l.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;l.length;)l[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=n:a.Stickyfill=n}(window,document);
    
    imdi.tableOfContents.init();
    imdi.facet.init();
    imdi.scroll.init();
    imdi.main_menu_toggle.init();
    imdi.main_search_toggle.init();
    imdi.toggle.init(getUrlParameter('toggle'));
    imdi.accordion.init();
    imdi.trigger.init();
    imdi.selectall.init();
    imdi.responsive_table_setup.init();
    imdi.table_collapsable.init();
    imdi.hover_toggle.init();
    imdi.smooth_scrolling.init();
    imdi.slick_carousel.init();
    imdi.wizard.init();
    imdi.to_top_button.init();
    imdi.removeDoubleCTA.init();
    imdi.tocbot.init();
});

imdi.tocbot = (function ($) {
    return {
        init: function () {
            // only create sidebar with toc if #toc-enabled exists
            const tocEnabled = document.querySelector('#toc-enabled')

            if (tocEnabled) {
                tocbot.destroy()

                //  append an id to all h2 and h3
                const allHeaderTags = document.querySelectorAll('h2, h3')
                allHeaderTags.forEach((header, index) => {
                    header.id = `header-${index}`
                })
                
                tocbot.init({
                    // Where to render the table of contents.
                    tocSelector: '.toc-sidebar',

                    // Where to grab the headings to build the table of contents.
                    contentSelector: '#toc-enabled',

                    // Which headings to grab inside of the contentSelector element.
                    headingSelector: 'h2:not(.h4), h3',

                    // class given to the current link item
                    activeLinkClass: 'active-link',

                    // Smooth scrolling enabled.
                    smoothScroll: true,

                    // Smooth scroll duration.
                    smoothScrollDuration: 0,

                    // tweak position that triggers new toc list link to be active
                    headingsOffset: -300,

                    // class to add to inactive link items
                    isCollapsedClass: 'is-collapsed',
                    
                    // Class that gets added when a list should be able
                    // to be collapsed but isn't necessarily collpased.
                    collapsibleClass: 'is-collapsible',

                    // do you want smooth scrolling?
                    smoothScroll: true,
                    
                    // smooth scroll duration.
                    smoothScrollDuration: 200,
                })

                const tocSidebar = document.querySelector('.toc-sidebar')
                Stickyfill.add(tocSidebar)

                tocbot.refresh()
            }
        }
    }
})(jQuery);

imdi.facet = (function ($) {
    return {
        init: function () {
            $('._jsExtendedFacet').on('change', "input:checkbox", function () {
                window.location = $(this).data('filterurl');
            });
        }
    }
})(jQuery);

imdi.scroll = (function ($) {
    return {
        init: function () {
            var anchorid = getUrlParameter("aid");
            if (anchorid) {
                var anchor = '#' + anchorid;
                $('html,body').animate({ scrollTop: jQuery(anchor).offset().top - 110 }, 700);
                $(anchor).focus();
             }
        }
    }
})(jQuery);

/*------------------------------------*\
    TAG MANAGER CUSTOM TRACKING
    To track javascript events into Google Analytics by Google Tag Manager (GTM). Correct setup in GTM is needed.
\*------------------------------------*/

imdi.gtm_tracking = (function ($) {
    return {

        customEvent: function (eventCategory, eventAction, eventLabel, eventValue) {

          // Default to undefined
          eventCategory = typeof eventCategory !== 'undefined' ? eventCategory : undefined;
          eventAction = typeof eventAction !== 'undefined' ? eventAction : undefined;
          eventLabel = typeof eventLabel !== 'undefined' ? eventLabel : undefined;
          eventValue = typeof eventValue !== 'undefined' ? eventValue : undefined;

          // Google Tag Manager call
          if(typeof dataLayer != 'undefined') {
             dataLayer.push({
                'event': 'customEvent',
                'eventCategory': eventCategory,
                'eventAction': eventAction,
                'eventLabel': eventLabel,
                'eventValue': eventValue
              });
          }
        },

        customPageView: function (virtualPageUrl, virtualPageTitle) {

          // Default to undefined
          virtualPageUrl = typeof virtualPageUrl !== 'undefined' ? virtualPageUrl : undefined;
          virtualPageTitle = typeof virtualPageTitle !== 'undefined' ? virtualPageTitle : undefined;

          // Google Tag Manager call
          if(typeof dataLayer != 'undefined') {
             dataLayer.push({
                'event': 'customPageView',
                'virtualPageUrl': virtualPageUrl,
                'virtualPageTitle': virtualPageTitle
              });
          }
        }
    }
})(jQuery);

/*------------------------------------*\
    MAIN MENU TOGGLE
    Open the main menu if the menu button in the header is pressed
\*------------------------------------*/

imdi.main_menu_toggle = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="main-menu-toggle"]').on('click', function( event ) {

          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

              // Get targets
              var _footer = $('#footer');
              var _footer__bg = $('#footer__bg');
              var _footer__bg = $('#footer__bg');
              var _page_content = $('#page-content');
              var _header = $('#header')

          		// Toggle menu button
          		if($(this).attr('aria-expanded') === "false"){
          			$(this).attr('aria-expanded', "true");
          			// Set min height to 100% of window on desktop
      	        var a = $(window).height();
      	        var b = _footer.height();
      	        if (a > b) {
      	            _footer.css('height', a);
      	            _footer__bg.css('height', a);
      	        }

                // Google Tag Manager call
                var currentUrl = window.location.pathname;
                imdi.gtm_tracking.customEvent('Menu', 'Main-menu open', undefined, currentUrl);

          		} else {
          			$(this).attr('aria-expanded', "false");
          			// Reset height
                _footer.css('height', 'auto');
                _footer__bg.css('height', 'auto');
          		}

          		// Toggle menu overlay
          		_page_content.toggle();
          		_footer.toggleClass($('#footer').attr('data-toggle-menu'));
          		_header.toggleClass($('#header').attr('data-toggle-menu'));

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    MAIN SEARCH TOGGLE
    Open a searchfield in the header when the search button is pressed.
    Is removed if the focus moves away from the search input field, or search button.
\*------------------------------------*/

imdi.main_search_toggle = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="main-search-toggle"]').on('click', function( event) {

          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

              // Get targets
              var _header = $('#header');
              var _header_search = $('#header-search');

          		_header.toggleClass(_header.attr('data-toggle-search'));

          		// Set focus in
          		_header_search.focus();

          	});

          	$('body').on('blur', '#header-search', function() {
          		setTimeout(function(){
          			if(!$('#header-search-button').is(":focus")){
          				$('#header').removeClass($('#header')
          				  .attr('data-toggle-search'));
          			}
          		}, 500);
          	});

          	$('body').on('blur', '#header-search-button', function() {
          		setTimeout(function(){
          			if(!$('#header-search').is(":focus")){
          				$('#header').removeClass($('#header')
          				  .attr('data-toggle-search'));
          			}
          		}, 500);
          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    TOGGLE - ACCESSIBLE
\*------------------------------------*/

imdi.toggle = (function ($) {
    return {
        init: function ( openSectionOnLoad ) {
          	$('[data-behaviour~="toggle"]').on('click',function( event ) {

          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

          	    // Set duration of animation in miliseconds
          	    var transition_duration = 200;

          	    // Get classes and relationships
          	    var toggle_class_expanded = $(this).data('class-expanded');
          	    var section = '#' + $(this).attr('aria-controls');
          	    var section_class_expanded = $(section).data('class-expanded');
          	    var section_class_contracted = $(section).data('class-contracted');
          	    var section_caption_expanded = $(this).data('caption-expanded');
          	    var section_caption_contracted = $(this).data('caption-contracted');

          	    // Get current state
          	    var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          	    if(section_caption_contracted){
          		    if($(this).hasClass(toggle_class_expanded)){
          			    $(this).html(section_caption_contracted);
          		    } else {
          			    $(this).html(section_caption_expanded);
          		    }
          	    }

          	    // Toggle attributes
          	    $(this).attr('aria-expanded', state);
          	    $(section).attr('aria-hidden', !state);
          	    $(this).toggleClass(toggle_class_expanded);
          	    if(state){
          	        // On opening
          	        $(section).show(0,function(){
          	           // Delay to be able to use css transitions and hide from screenreaders
          	           $(section).css( "display", "block"); // Fix for allready visible sections by hover
             	         $(section).removeClass(section_class_contracted)
             	            .addClass(section_class_expanded);
          	           // $(section).focus();
          	        });
          	        if(section_caption_contracted){
          			    $(this).html(section_caption_contracted);
          		    }
          	    } else {
          	        // On closing
          	        $(section).removeClass(section_class_expanded)
          	            .addClass(section_class_contracted);
          	        setTimeout(function() { $(section).hide(); }, transition_duration);
          	        if(section_caption_contracted){
          			    $(this).html(section_caption_expanded);
          		    }
          	    }

          	});

          	$('[data-behaviour~="toggle"]').each(function() {
          	    // Hide sections on load
          	    var section = $(this).attr('data-controls');

          	    $(this).attr('aria-expanded','false')
          	        .attr('aria-controls',section)
          	        .attr('role','button');
          	    $('#' + section).attr('aria-hidden','true')
          	        .hide();

          	    // If the url has an open section parameter
          	    if (openSectionOnLoad && openSectionOnLoad === section){
          		    $(this).trigger("click");
          	    }

          	    // If the section is marked to expand
          	    if ( $(this).attr('data-state') === 'expanded'){
          		    $(this).trigger("click");
          	    }
          	});
        }
    }
})(jQuery);


/*------------------------------------*\
    ACCORDION
\*------------------------------------*/
imdi.accordion = (function () {
    return {
        init: function () {
    
            'use strict';
            
            var elements = document.querySelectorAll('.accordion li');
        
            var _loop = function _loop(i) {
                var content = elements[i].querySelector('.accordion--content');
            
                elements[i].addEventListener('click', function () {
            
                    //  toggle aria-expanded
                    var ariaExpanded = content.getAttribute('aria-expanded');
                    console.log(ariaExpanded);
                    content.setAttribute('aria-expanded', ariaExpanded === 'true' ? false : true);
            
                    //  toggle aria-hidden
                    var ariaHidden = content.getAttribute('aria-hidden');
                    content.setAttribute('aria-hidden', ariaHidden === 'true' ? false : true);
            
                    //  toggle content visibility
                    elements[i].querySelector('.accordion--title img').classList.toggle('open');
                    content.classList.toggle('open');
                });
            };
        
            for (var i = 0; i < elements.length; i++) {
                _loop(i);
            }
        
            // prevent spacebar from scrolling
            window.onkeydown = function (e) {
                return !(e.keyCode == 32);
            };
        
            document.body.onkeyup = function (e) {
            
                //spacebar or enter will click the focused element
                if (e.keyCode == 32 || e.keyCode == 13) {
            
                    try {
                        document.activeElement.click();
                    } catch (e) {
                        console.log(e);
                    }
                }
            };
        }
    };
})();
    

/*------------------------------------*\
    TRIGGER
\*------------------------------------*/

imdi.trigger = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="trigger"]').on('click', function( event ) {
          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

          		var target = '#' + $(this).attr('data-controls');

          		$(target).focus();
          		$(target).trigger("click");

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    SELECT ALL
\*------------------------------------*/

imdi.selectall = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="selectall"]').on('click', function( event ) {
          		$(this).select();

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    ADVENCED HOVER TOGGLE
\*------------------------------------*/

imdi.hover_toggle = (function ($) {
    return {
        init: function () {
      	  $('[data-behaviour~="hover-toggle"]').each(function(){

        	  var toggle_class_expanded = $(this).data('class-expanded');
        	  var children = $(this).data('hover-children');
        	  var hover_parent = this;

        	  // Trigger the class on the parent element when children elements receive hover
        	  $(children, this).hover(function () {
                $(hover_parent).addClass(toggle_class_expanded);
          	    $(hover_parent).show(0); // Hack to force redraw on Safari browser to get the hoverbox to show correctly. Ref JIRA: IMDI-186
            }, function () {
                $(hover_parent).removeClass(toggle_class_expanded);
            });

      	  });
        }
    }
})(jQuery);



/*------------------------------------*\
    SMOOTH SCROLLING
\*------------------------------------*/

/* Basics lifted from a CSS Tricks demo (http://css-tricks.com/snippets/jquery/smooth-scrolling/), with focus() and URL hash updating added where commented */

imdi.smooth_scrolling = (function ($) {
    return {
        init: function () {
        	  $('a[href^="#"]').not('[href="#"]').not('[data-behaviour="main-search-toggle"]').not('[data-behaviour="main-menu-toggle"]').not('[data-behaviour="toggle"]').on('click', function() {
        	    var $linkElem = $(this);
        	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        	      var target = $(this.hash);
        	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        	      if (target.length) {
        	        $('html,body').animate({
        	          scrollTop: (target.offset().top - 30)
        	        }, 1000, function() {
        	          /* ADDED: focus the target */
        	          target.focus();
        	          /* end ADDED */
        	          /* ADDED: update the URL */
        	          window.location.hash = $linkElem.attr('href').substring(1);
        	         // window.location.hash = $(this).attr('href').substring(1, $(this).attr('href').length);
        	          /* end ADDED */
        	        });
        	        return false;
        	      }
        	    }
        	  });
        }
    }
})(jQuery);



/*------------------------------------*\
    SLICK CARSOUSEL ON MOBILE
\*------------------------------------*/

imdi.slick_carousel = (function ($) {
    return {
        init: function () {
            var target = $('[data-behaviour="carousel"]');
            if (!target) return
            var toggleSlick = function () {
                if ($(window).width() < 720) {
                  if(!slickLoaded){
                    target.slick({
                      	slidesToShow: 1,
                      	slidesToScroll: 1,
                        adaptiveHeight: true,
                        infinite: false,
                        focusOnSelect: true,
                        prevArrow: '[data-behaviour="carousel-prev"]',
                        nextArrow: '[data-behaviour="carousel-next"]'
                      });
                  }
                  slickLoaded = true;
                } else {
                  if(slickLoaded){
                    target.slick('unslick');
                    slickLoaded = false;
                  }
                }
            }

            var slickLoaded = false;

            // Init on load
            toggleSlick();

            // Init on resize
            $(window).resize(toggleSlick);

        }
    }
})(jQuery);



/*------------------------------------*\
    RESPONSIVE TABLE
\*------------------------------------*/

imdi.table_collapsable = (function ($) {
    return {
        init: function () {
            var toggleAccordion = function(e) {
                console.log('toggleAccordion')
              var trigger = e.target;
              var parent = trigger.parentNode;
              var isHidden = parent.getAttribute('aria-hidden') === 'true';
              if (isHidden) {
                $(trigger).removeClass('expanded');
                parent.setAttribute('aria-hidden', false);
              } else {
                $(trigger).addClass('expanded');
                parent.setAttribute('aria-hidden', true);
              }
            };

            $('[data-table-collapsable]').each(function() {

              var tableRows = $(this).find('tr');
                console.log('living')
              $(tableRows).each(function (){
                var columns = $(this).children();
                var trigger = columns[0];
                trigger.addEventListener('click', toggleAccordion);
              });

            });

        }
    }
})(jQuery);

/*------------------------------------*\
    RESPONSIVE TABLE (for epinova)
\*------------------------------------*/
imdi.responsive_table_setup = (function ($) {
    return {
      init: function () {
        $("table").each(function(tableIndex, table) {
            var $table = $(table);
            $table.addClass("table table--collapsable table--fluid");
            var bodyRows = $table.find("tbody tr");
            $table.find("thead th").each(function (thIndex, th) {
              var $th = $(th);
              $th.attr("scope", "col");
              bodyRows.each(function(trIndex, tr) {
                var td = $(tr).children().get(thIndex);
                $(td).attr("data-label", $th.text());
              });
            });
            $table.find("tbody").attr("data-table-collapsable", "");
        });
      }
    }
  })(jQuery);

/*------------------------------------*\
    REMOVE DOUBLE CTA
\*------------------------------------*/

imdi.removeDoubleCTA = (function ($) {
  return {
    init: function () {
      var toc = $('#toc-disabled')[0];

      if(!toc ) {return};

      var secondCTA = $(toc).find('.cta')[1];

      var tocHeight = toc.offsetHeight;
      var windowHeight = window.innerHeight;

      if (tocHeight < windowHeight+300) {
        $(secondCTA).hide();
      }
    }
  }
})(jQuery);



/*------------------------------------*\
    TO THE TOP BUTTON
\*------------------------------------*/

imdi.to_top_button = (function ($) {
    return {
        init: function () {

            var toTopButton = $('[data-behaviour=to-top]');
            var distanceBeforeButtonAppears = 300;

            $(toTopButton).on('click', function () {
              $("html, body").animate({ scrollTop: 0 }, "fast");
            });

            var hideAndShowButton = function () {
              var scrollPosition = $(document).scrollTop();
              if (scrollPosition < distanceBeforeButtonAppears) {
                $(toTopButton).hide();
              } else {
                $(toTopButton).show();
              }
            }

            $(window).scroll(function(){
                 requestAnimationFrame(hideAndShowButton);
            })

        }
    }
})(jQuery);



/*------------------------------------*\
    WIZARD MODULE BASED ON A JSON VARIABLE
\*------------------------------------*/

imdi.wizard = (function ($) {
    return {
        init: function () {
            $('[data-behaviour="wizard"]').each( function() {
                if (window[$(this).data('source')] !== 'undefined' && window[$(this).data('source')].length && window[$(this).data('source')][0]!=null) {

                // Load question tree
                var dataTree = window[$(this).data('source')];

                var dataHistory = [];
                var startId = dataTree[0].Id;
                var wrapper = this;

                var captionLeadtext = $(this).data('caption-leadtext') ? $(this).data('caption-leadtext') : '';
                var captionStartWizard = $(this).data('caption-start-wizard') ? $(this).data('caption-start-wizard') : 'Start veiviser';
                var captionHistoryTitle = $(this).data('caption-history-title') ? $(this).data('caption-history-title') : 'Tidligere svar';
                var captionStartOver = $(this).data('caption-start-over') ? $(this).data('caption-start-over') : 'Start på nytt';
                var captionError = $(this).data('caption-error') ? $(this).data('caption-error') : 'Det skjedde en feil. Vennligst prøv å last siden på nytt.';


                //
                // Function redraws each step
                //

            		var updateWizard = function( currentId, selectedOption, targetId ) {

                  var dataRow = function (rows, id) {
                      var i = null;
                      for (i = 0; rows.length > i; i += 1) {
                          if (rows[i].Id === id) {
                              return rows[i];
                          }
                      }
                      return null;
                  };

                  if(currentId != -1){
                    dataHistory.push({
                      'Id' : currentId,
                      'Question': dataRow(dataTree, currentId).Question,
                      'Answer': selectedOption
                      });
                  }
               		$(wrapper).html('<hr class="line line--light t-margin-bottom"/>');

              		// QUESTION

              		if(dataRow(dataTree, targetId).Type == 'step'){

                		// Get data
                		var _question = dataRow(dataTree, targetId).Question;
                		var _instruction = dataRow(dataTree, targetId).Instruction;
                		var _alternatives = dataRow(dataTree, targetId).Alternatives;

                    // Construct markup
                    $(wrapper).append(getQuestion(_question, _instruction, _alternatives, targetId))
                      .append(getHistory())
                      .find('legend').focus();

                    // Google Tag Manager call
                    var virtualUrl = window.location.pathname + '?wizard/question/' + targetId;
                    var virtualTitle = _question + ' | Veiviserspørsmål';
                    imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

              		// CONCLUSION

                  } else if(dataRow(dataTree, targetId).Type == 'conclusion'){

                		// Get data
                    var _title = dataRow(dataTree, targetId).Title;
                    var _content = dataRow(dataTree, targetId).Content;
                    _content = decodeURIComponent(_content.replace(/\+/g, ' ') );
                    // Construct markup
                    $(wrapper).append(getConclusion(_title, _content));
                    $(wrapper).append(getHistory());
                    $(wrapper).find('h3').focus();

                    // Google Tag Manager call
                    var virtualUrl = window.location.pathname + '?wizard/conclusion/' + targetId;
                    var virtualTitle = _title  + ' | Veiviserkonklusjon';
                    imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

                  // ERROR

                  } else {
                    $(wrapper).append('<p><em>' + captionError + '</em></p>');
                    $(wrapper).focus();
                  }

            		}


                //
                // Function that reset the interaction
                //

                var resetWizard = function() {

                  // Reset history and markup
                  dataHistory = [];
                  $(wrapper).html('');

                  // Construct markup
                  var htmlleadtext = $("<p>", {
                    'html': captionLeadtext
                  });

                  var htmlbutton = $("<button>", {
                    'type': 'button',
                    'class': "button button--large",
                    'html': captionStartWizard,
                    'click': $.proxy(updateWizard, null, -1, -1, startId)
                    });

                  $(wrapper).append(htmlleadtext);
                  $(wrapper).append(htmlbutton);
                }

                //
                // Function fornavigating back in history
                //

            		var goBackInHistory = function(targetId, index) {
              		// Go back to index and remove the following children in the history
              		dataHistory.splice(index, dataHistory.length - index)

                  // Load target question
              		updateWizard(-1, -1, targetId);

              		return false;
            		}

                //
                // Function for constructing HTML for question
                //

            		var getQuestion = function(_question, _instruction, _alternatives, targetId) {
                    var html = $('<fieldset>', {
                      'class': 't-margin-bottom--large animations__fade-in-left'
                    });
                    $('<legend/>', {
                      'class': 'h2  t-no-focus',
                      'tabindex': '-1',
                      'html': _question
                      }).appendTo($(html));

                    if(_instruction.length > 0)
                      $('<p/>',{
                        'class': 'text--small'
                        }).append(_instruction).appendTo($(html));

                    var htmllist = $('<ul>',{
                        class: 't-no-list-styles'
                        })
                    $.each(_alternatives, function() {
                        $('<button/>',{
                          'type': 'button',
                          'class': 'button button--option',
                          'html': this.Caption + ' <i class="icon__arrow-right"></i>',
                          'click': $.proxy(updateWizard, null, targetId, this.Caption, this.Target)
                          })
                          .appendTo($('<li>').appendTo($(htmllist)));
                    });

                    $(html).append(htmllist);

                    return html;
                }

                //
                // Function for constructing HTML for a conclusion
                //

            		var getConclusion = function(_title, _content) {

              		  var html = $('<section/>', {
                      'class': 't-margin-bottom--large animations__fade-in-left'
                    });

                    $('<h3/>',{
                      'class': 'h2 t-no-focus',
                      'tabindex': '-1',
                      'html': _title
                      }).appendTo($(html));

                    $(html).append(_content);

                    $('<button/>',{
                      'type': 'button',
                      'class': 'button',
                      'html': captionStartOver,
                      'click': $.proxy(resetWizard, null)
                      })
                      .appendTo($(html));

                    return html;
                }

                //
                // Function for constructing HTML for the history
                //

            		var getHistory = function() {
              		  if (dataHistory.length < 1) return null;
              		 // Construct markup
                    var html = $('<section>');
                    $('<h3/>',{
                      'class': 'h4',
                      'html': captionHistoryTitle
                      }).appendTo($(html));
                    var htmllist = $('<ol/>');
                    $.each(dataHistory, function(index, value) {
                        var htmlli = $('<li/>');
                        var htmldiv = $('<div/>',{
                          'class': 'info t-margin-bottom'
                        });
                        var htmlh4 = $('<h4/>',{
                          'class': 'info__title'
                        });
                        $('<a/>',{
                          'href': '#',
                          'html': value.Question,
                          'click': $.proxy(goBackInHistory, null, value.Id, index)
                        }).appendTo($(htmlh4));
                        $(htmlh4).appendTo($(htmldiv));
                        $('<p/>',{
                          html: value.Answer
                        }).appendTo($(htmldiv));
                        $(htmllist).append($(htmlli).append($(htmldiv)));
                    });
                    $(html).append(htmllist);
                    return html;
            		}

                // Trigger on load
            		resetWizard();

          		} else {
            	  $(this).innerHTML('<p><em>' + captionError + '</em></p>');
          		}
          	});
        }
    }
})(jQuery);

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


// Client side table of contents
imdi.tableOfContents = (function ($) {
    return {
        init: function () {

            if ($('#toc-enabled').length)
            {
                var toc_index = 1;

                $("#toc-enabled h2:not([class])").each(function () {

                    var anchorLink = 'title_' + toc_index;

                    $(this).attr('id', anchorLink);
                    $(this).attr('tabindex', "-1");
                    $(this).addClass('toc__heading');

                    $('#toc').append('<li><a href="#' + anchorLink + '" class="navigation__link navigation__link--anchor">' + $(this).text() + '</a></li>');

                    toc_index++;
                });

                if (toc_index == 1)
                {
                    $('#toc-navigation').remove();
                }

            }
        }
    }
})(jQuery);
