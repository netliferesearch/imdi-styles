function getUrlParameter(t){var e=decodeURIComponent(window.location.search.substring(1)),i=e.split("&"),a,n;for(n=0;n<i.length;n++)if(a=i[n].split("="),a[0]===t)return void 0===a[1]?!0:a[1]}var imdi=imdi||{};$(document).ready(function(){imdi.facet.init(),imdi.scroll.init(),imdi.main_menu_toggle.init(),imdi.main_search_toggle.init(),imdi.toggle.init(getUrlParameter("toggle")),imdi.trigger.init(),imdi.selectall.init(),imdi.hover_toggle.init(),imdi.smooth_scrolling.init(),imdi.slick_carousel.init(),imdi.wizard.init()}),imdi.facet=function($){return{init:function(){$("._jsExtendedFacet").on("change","input:checkbox",function(){window.location=$(this).data("filterurl")})}}}(jQuery),imdi.scroll=function($){return{init:function(){var t=getUrlParameter("aid");if(t){var e="#"+t;$("html,body").animate({scrollTop:jQuery(e).offset().top},50)}}}}(jQuery),imdi.main_menu_toggle=function($){return{init:function(){$('[data-behaviour="main-menu-toggle"]').on("click",function(t){t.preventDefault();var e=$("#footer"),i=$("#footer__bg"),i=$("#footer__bg"),a=$("#page-content"),n=$("#header");if("false"===$(this).attr("aria-expanded")){$(this).attr("aria-expanded","true");var o=$(window).height(),r=e.height();o>r&&(e.css("height",o),i.css("height",o))}else $(this).attr("aria-expanded","false"),e.css("height","auto"),i.css("height","auto");a.toggle(),e.toggleClass($("#footer").attr("data-toggle-menu")),n.toggleClass($("#header").attr("data-toggle-menu"))})}}}(jQuery),imdi.main_search_toggle=function($){return{init:function(){$('[data-behaviour="main-search-toggle"]').on("click",function(t){t.preventDefault();var e=$("#header"),i=$("#header-search");e.toggleClass(e.attr("data-toggle-search")),i.focus()}),$("body").on("blur","#header-search",function(){setTimeout(function(){$("#header-search-button").is(":focus")||$("#header").removeClass($("#header").attr("data-toggle-search"))},500)}),$("body").on("blur","#header-search-button",function(){setTimeout(function(){$("#header-search").is(":focus")||$("#header").removeClass($("#header").attr("data-toggle-search"))},500)})}}}(jQuery),imdi.toggle=function($){return{init:function(t){$('[data-behaviour~="toggle"]').on("click",function(t){t.preventDefault();var e=200,i=$(this).data("class-expanded"),a="#"+$(this).attr("aria-controls"),n=$(a).data("class-expanded"),o=$(a).data("class-contracted"),r=$(this).data("caption-expanded"),s=$(this).data("caption-contracted"),l="false"===$(this).attr("aria-expanded")?!0:!1;s&&($(this).hasClass(i)?$(this).html(s):$(this).html(r)),$(this).attr("aria-expanded",l),$(a).attr("aria-hidden",!l),$(this).toggleClass(i),l?($(a).show(0,function(){$(a).css("display","block"),$(a).removeClass(o).addClass(n)}),s&&$(this).html(s)):($(a).removeClass(n).addClass(o),setTimeout(function(){$(a).hide()},e),s&&$(this).html(r))}),$('[data-behaviour~="toggle"]').each(function(){var e=$(this).attr("data-controls");$(this).attr("aria-expanded","false").attr("aria-controls",e).attr("role","button"),$("#"+e).attr("aria-hidden","true").hide(),t&&t===e&&$(this).trigger("click"),"expanded"===$(this).attr("data-state")&&$(this).trigger("click")})}}}(jQuery),imdi.trigger=function($){return{init:function(){$('[data-behaviour="trigger"]').on("click",function(t){t.preventDefault();var e="#"+$(this).attr("data-controls");$(e).focus(),$(e).trigger("click")})}}}(jQuery),imdi.selectall=function($){return{init:function(){$('[data-behaviour="selectall"]').on("click",function(t){$(this).select()})}}}(jQuery),imdi.hover_toggle=function($){return{init:function(){$('[data-behaviour~="hover-toggle"]').each(function(){var t=$(this).data("class-expanded"),e=$(this).data("hover-children"),i=this;$(e,this).hover(function(){$(i).addClass(t)},function(){$(i).removeClass(t)})})}}}(jQuery),imdi.smooth_scrolling=function($){return{init:function(){$('a[href*=#]:not([href=#]):not([data-behaviour="main-search-toggle"]):not([data-behaviour="main-menu-toggle"]):not([data-behaviour="toggle"])').on("click",function(){var t=$(this);if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-30},1e3,function(){e.focus(),window.location.hash=t.attr("href").substring(1)}),!1}})}}}(jQuery),imdi.slick_carousel=function($){return{init:function(){var t=$('[data-behaviour="carousel"]'),e=function(){$(window).width()<546?(i||t.slick({slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,infinite:!1,focusOnSelect:!0,prevArrow:'[data-behaviour="carousel-prev"]',nextArrow:'[data-behaviour="carousel-next"]'}),i=!0):i&&(t.slick("unslick"),i=!1)},i=!1;e(),$(window).resize(e)}}}(jQuery),imdi.wizard=function($){return{init:function(){$('[data-behaviour="wizard"]').each(function(){if("undefined"!==window[$(this).data("source")]){var t=window[$(this).data("source")],e=[],i=t[0].Id,a=this,n=$(this).data("caption-leadtext")?$(this).data("caption-leadtext"):"",o=$(this).data("caption-start-wizard")?$(this).data("caption-start-wizard"):"Start veiviser",r=$(this).data("caption-history-title")?$(this).data("caption-history-title"):"Tidligere svar",s=$(this).data("caption-start-over")?$(this).data("caption-start-over"):"Start på nytt",l=$(this).data("caption-error")?$(this).data("caption-error"):"Det skjedde en feil. Vennligst prøv å last siden på nytt.",c=function(i,n,o){var r=function(t,e){var i=null;for(i=0;t.length>i;i+=1)if(t[i].Id===e)return t[i];return null};if(-1!=i&&e.push({Id:i,Question:r(t,i).Question,Answer:n}),$(a).html('<hr class="line line--light t-margin-bottom"/>'),"step"==r(t,o).Type){var s=r(t,o).Question,c=r(t,o).Instruction,d=r(t,o).Alternatives;$(a).append(u(s,c,d,o)).append(f()).find("legend").focus()}else if("conclusion"==r(t,o).Type){var h=r(t,o).Title,g=r(t,o).Content;g=decodeURIComponent(g.replace(/\+/g," ")),$(a).append(p(h,g)),$(a).append(f()),$(a).find("h3").focus()}else $(a).append("<p><em>"+l+"</em></p>"),$(a).focus()},d=function(){e=[],$(a).html("");var t=$("<p>",{html:n}),r=$("<button>",{type:"button","class":"button button--large",html:o,click:$.proxy(c,null,-1,-1,i)});$(a).append(t),$(a).append(r)},h=function(t,i){return e.splice(i,e.length-i),c(-1,-1,t),!1},u=function(t,e,i,a){var n=$("<fieldset>",{"class":"t-margin-bottom--large animations__fade-in-left"});$("<legend/>",{"class":"h2  t-no-focus",tabindex:"-1",html:t}).appendTo($(n)),e.length>0&&$("<p/>",{"class":"text--small"}).append(e).appendTo($(n));var o=$("<ul>",{"class":"t-no-list-styles"});return $.each(i,function(){$("<button/>",{type:"button","class":"button button--option",html:this.Caption+' <i class="icon__arrow-right"></i>',click:$.proxy(c,null,a,this.Caption,this.Target)}).appendTo($("<li>").appendTo($(o)))}),$(n).append(o),n},p=function(t,e){var i=$("<section/>",{"class":"t-margin-bottom--large animations__fade-in-left"});return $("<h3/>",{"class":"h2 t-no-focus",tabindex:"-1",html:t}).appendTo($(i)),$(i).append(e),$("<button/>",{type:"button","class":"button",html:s,click:$.proxy(d,null)}).appendTo($(i)),i},f=function(){if(e.length<1)return null;var t=$("<section>");$("<h3/>",{"class":"h4",html:r}).appendTo($(t));var i=$("<ol/>");return $.each(e,function(t,e){var a=$("<li/>"),n=$("<div/>",{"class":"info t-margin-bottom"}),o=$("<h4/>",{"class":"info__title"});$("<a/>",{href:"#",html:e.Question,click:$.proxy(h,null,e.Id,t)}).appendTo($(o)),$(o).appendTo($(n)),$("<p/>",{html:e.Answer}).appendTo($(n)),$(i).append($(a).append($(n)))}),$(t).append(i),t};d()}else $(this).innerHTML("<p><em>"+l+"</em></p>")})}}}(jQuery);