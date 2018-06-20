var imdi = imdi || {};

$(document).ready(function() {
  // tocbot
  !(function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var l = (n[o] = { i: o, l: !1, exports: {} });
      return e[o].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
    }
    var n = {};
    (t.m = e),
      (t.c = n),
      (t.d = function(e, n, o) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
          });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0));
  })([
    function(e, t, n) {
      (function(o) {
        var l, i, r;
        !(function(n, o) {
          (i = []),
            (l = o(n)),
            void 0 !== (r = "function" == typeof l ? l.apply(t, i) : l) &&
              (e.exports = r);
        })(void 0 !== o ? o : this.window || this.global, function(e) {
          "use strict";
          function t() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n) m.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }
          function o(e, t, n) {
            t || (t = 250);
            var o, l;
            return function() {
              var i = n || this,
                r = +new Date(),
                s = arguments;
              o && r < o + t
                ? (clearTimeout(l),
                  (l = setTimeout(function() {
                    (o = r), e.apply(i, s);
                  }, t)))
                : ((o = r), e.apply(i, s));
            };
          }
          var l,
            i,
            r = n(2),
            s = {},
            c = {},
            a = n(3),
            u = n(4);
          if ("undefined" != typeof window) {
            var d,
              f = !!e.document.querySelector && !!e.addEventListener,
              m = Object.prototype.hasOwnProperty;
            return (
              (c.destroy = function() {
                try {
                  document.querySelector(s.tocSelector).innerHTML = "";
                } catch (e) {
                  console.warn("Element not found: " + s.tocSelector);
                }
                document.removeEventListener(
                  "scroll",
                  this._scrollListener,
                  !1
                ),
                  document.removeEventListener(
                    "resize",
                    this._scrollListener,
                    !1
                  ),
                  l &&
                    document.removeEventListener(
                      "click",
                      this._clickListener,
                      !1
                    );
              }),
              (c.init = function(e) {
                if (
                  f &&
                  ((s = t(r, e || {})),
                  (this.options = s),
                  (this.state = {}),
                  s.scrollSmooth &&
                    (c.scrollSmooth = n(5).initSmoothScrolling({
                      duration: s.scrollSmoothDuration
                    })),
                  (l = a(s)),
                  (i = u(s)),
                  (this._buildHtml = l),
                  (this._parseContent = i),
                  c.destroy(),
                  null !==
                    (d = i.selectHeadings(
                      s.contentSelector,
                      s.headingSelector
                    )))
                ) {
                  var m = i.nestHeadingsArray(d),
                    p = m.nest;
                  return (
                    l.render(s.tocSelector, p),
                    (this._scrollListener = o(function(e) {
                      l.updateToc(d);
                      var t =
                        e &&
                        e.target &&
                        e.target.scrollingElement &&
                        0 === e.target.scrollingElement.scrollTop;
                      ((e &&
                        (0 === e.eventPhase || null === e.currentTarget)) ||
                        t) &&
                        (l.enableTocAnimation(),
                        l.updateToc(d),
                        s.scrollEndCallback && s.scrollEndCallback(e));
                    }, s.throttleTimeout)),
                    this._scrollListener(),
                    document.addEventListener(
                      "scroll",
                      this._scrollListener,
                      !1
                    ),
                    document.addEventListener(
                      "resize",
                      this._scrollListener,
                      !1
                    ),
                    (this._clickListener = o(function(e) {
                      s.scrollSmooth && l.disableTocAnimation(e),
                        l.updateToc(d);
                    }, s.throttleTimeout)),
                    document.addEventListener("click", this._clickListener, !1),
                    this
                  );
                }
              }),
              (c.refresh = function(e) {
                c.destroy(), c.init(e || this.options);
              }),
              (e.tocbot = c),
              c
            );
          }
        });
      }.call(t, n(1)));
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t) {
      e.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollEndCallback: function(e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        onClick: !1
      };
    },
    function(e, t) {
      e.exports = function(e) {
        function t(e, n) {
          var i = n.appendChild(o(e));
          if (e.children.length) {
            var r = l(e.isCollapsed);
            e.children.forEach(function(e) {
              t(e, r);
            }),
              i.appendChild(r);
          }
        }
        function n(e, n) {
          var o = l(!1);
          n.forEach(function(e) {
            t(e, o);
          });
          var i = document.querySelector(e);
          if (null !== i)
            return (
              i.firstChild && i.removeChild(i.firstChild), i.appendChild(o)
            );
        }
        function o(t) {
          var n = document.createElement("li"),
            o = document.createElement("a");
          return (
            e.listItemClass && n.setAttribute("class", e.listItemClass),
            e.onClick && (o.onclick = e.onClick),
            e.includeHtml && t.childNodes.length
              ? u.call(t.childNodes, function(e) {
                  o.appendChild(e.cloneNode(!0));
                })
              : (o.textContent = t.textContent),
            o.setAttribute("href", "#" + t.id),
            o.setAttribute(
              "class",
              e.linkClass +
                p +
                "node-name--" +
                t.nodeName +
                p +
                e.extraLinkClasses
            ),
            n.appendChild(o),
            n
          );
        }
        function l(t) {
          var n = document.createElement("ul"),
            o = e.listClass + p + e.extraListClasses;
          return (
            t && ((o += p + e.collapsibleClass), (o += p + e.isCollapsedClass)),
            n.setAttribute("class", o),
            n
          );
        }
        function i() {
          var t = document.documentElement.scrollTop || f.scrollTop,
            n = document.querySelector(e.positionFixedSelector);
          "auto" === e.fixedSidebarOffset &&
            (e.fixedSidebarOffset = document.querySelector(
              e.tocSelector
            ).offsetTop),
            t > e.fixedSidebarOffset
              ? -1 === n.className.indexOf(e.positionFixedClass) &&
                (n.className += p + e.positionFixedClass)
              : (n.className = n.className
                  .split(p + e.positionFixedClass)
                  .join(""));
        }
        function r(t) {
          var n = document.documentElement.scrollTop || f.scrollTop;
          e.positionFixedSelector && i();
          var o,
            l = t;
          if (
            m &&
            null !== document.querySelector(e.tocSelector) &&
            l.length > 0
          ) {
            d.call(l, function(t, i) {
              if (t.offsetTop > n + e.headingsOffset + 10) {
                return (o = l[0 === i ? i : i - 1]), !0;
              }
              if (i === l.length - 1) return (o = l[l.length - 1]), !0;
            });
            var r = document
              .querySelector(e.tocSelector)
              .querySelectorAll("." + e.linkClass);
            u.call(r, function(t) {
              t.className = t.className.split(p + e.activeLinkClass).join("");
            });
            var c = document
              .querySelector(e.tocSelector)
              .querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  o.nodeName +
                  '[href="#' +
                  o.id +
                  '"]'
              );
            c.className += p + e.activeLinkClass;
            var a = document
              .querySelector(e.tocSelector)
              .querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
            u.call(a, function(t) {
              var n = p + e.isCollapsedClass;
              -1 === t.className.indexOf(n) &&
                (t.className += p + e.isCollapsedClass);
            }),
              c.nextSibling &&
                (c.nextSibling.className = c.nextSibling.className
                  .split(p + e.isCollapsedClass)
                  .join("")),
              s(c.parentNode.parentNode);
          }
        }
        function s(t) {
          return -1 !== t.className.indexOf(e.collapsibleClass)
            ? ((t.className = t.className
                .split(p + e.isCollapsedClass)
                .join("")),
              s(t.parentNode.parentNode))
            : t;
        }
        function c(t) {
          var n = t.target || t.srcElement;
          "string" == typeof n.className &&
            -1 !== n.className.indexOf(e.linkClass) &&
            (m = !1);
        }
        function a() {
          m = !0;
        }
        var u = [].forEach,
          d = [].some,
          f = document.body,
          m = !0,
          p = " ";
        return {
          enableTocAnimation: a,
          disableTocAnimation: c,
          render: n,
          updateToc: r
        };
      };
    },
    function(e, t) {
      e.exports = function(e) {
        function t(e) {
          return e[e.length - 1];
        }
        function n(e) {
          return +e.nodeName.split("H").join("");
        }
        function o(t) {
          var o = {
            id: t.id,
            children: [],
            nodeName: t.nodeName,
            headingLevel: n(t),
            textContent: t.textContent.trim()
          };
          return e.includeHtml && (o.childNodes = t.childNodes), o;
        }
        function l(l, i) {
          for (
            var r = o(l),
              s = n(l),
              c = i,
              a = t(c),
              u = a ? a.headingLevel : 0,
              d = s - u;
            d > 0;

          )
            (a = t(c)), a && void 0 !== a.children && (c = a.children), d--;
          return s >= e.collapseDepth && (r.isCollapsed = !0), c.push(r), c;
        }
        function i(t, n) {
          var o = n;
          e.ignoreSelector &&
            (o = n.split(",").map(function(t) {
              return t.trim() + ":not(" + e.ignoreSelector + ")";
            }));
          try {
            return document.querySelector(t).querySelectorAll(o);
          } catch (e) {
            return console.warn("Element not found: " + t), null;
          }
        }
        function r(e) {
          return s.call(
            e,
            function(e, t) {
              return l(o(t), e.nest), e;
            },
            { nest: [] }
          );
        }
        var s = [].reduce;
        return { nestHeadingsArray: r, selectHeadings: i };
      };
    },
    function(e, t) {
      function n(e) {
        function t(e) {
          return (
            "a" === e.tagName.toLowerCase() &&
            (e.hash.length > 0 || "#" === e.href.charAt(e.href.length - 1)) &&
            (n(e.href) === r || n(e.href) + "#" === r)
          );
        }
        function n(e) {
          return e.slice(0, e.lastIndexOf("#"));
        }
        function l(e) {
          const t = document.getElementById(e.substring(1));
          t &&
            (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
              (t.tabIndex = -1),
            t.focus());
        }
        !(function() {
          document.documentElement.style;
        })();
        const i = e.duration,
          r = location.hash ? n(location.href) : location.href;
        !(function() {
          function e(e) {
            !t(e.target) ||
              e.target.className.indexOf("no-smooth-scroll") > -1 ||
              (e.preventDefault(),
              o(e.target.hash, {
                duration: i,
                callback: function() {
                  l(e.target.hash);
                }
              }));
          }
          document.body.addEventListener("click", e, !1);
        })();
      }
      function o(e, t) {
        function n(e) {
          (r = e - i),
            window.scrollTo(0, c.easing(r, s, a, u)),
            r < u ? requestAnimationFrame(n) : o();
        }
        function o() {
          window.scrollTo(0, s + a),
            "function" == typeof c.callback && c.callback();
        }
        function l(e, t, n, o) {
          return (e /= o / 2) < 1
            ? (n / 2) * e * e + t
            : (e--, (-n / 2) * (e * (e - 2) - 1) + t);
        }
        var i,
          r,
          s = window.pageYOffset,
          c = {
            duration: t.duration,
            offset: t.offset || 0,
            callback: t.callback,
            easing: t.easing || l
          },
          a =
            "string" == typeof e
              ? c.offset +
                (e
                  ? document
                      .querySelector('[id="' + e.split("#").join("") + '"]')
                      .getBoundingClientRect().top
                  : -(
                      document.documentElement.scrollTop ||
                      document.body.scrollTop
                    ))
              : e,
          u = "function" == typeof c.duration ? c.duration(a) : c.duration;
        requestAnimationFrame(function(e) {
          (i = e), n(e);
        });
      }
      t.initSmoothScrolling = n;
    }
  ]);

  imdi.stickToTop.init();
  imdi.removeDoubleDownloadPDF.init();
  imdi.facet.init();
  imdi.scroll.init();
  imdi.main_menu_toggle.init();
  imdi.main_search_toggle.init();
  imdi.toggle.init(getUrlParameter("toggle"));
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
  imdi.tableOfContents.init();
  imdi.lightboxFeedback.init();
  imdi.doubleNavigationPage.init();
});

imdi.doubleNavigationPage = (function($) {
  return {
    init: function() {
      "use strict";

      // opens and closes list
      var showLists = document.querySelectorAll(".nav-matrix__header");

      // handle clicks on buttons saying 'vis liste'
      for (var i = 0; i < showLists.length; i++) {
        showLists[i].addEventListener("click", function(elem) {
          var list = this.parentNode.querySelector("ul");

          // toggles list visiblity
          list.classList.toggle("open");

          // source of truth: is list open or not?
          // is used further down
          var isOpen = list.classList.contains("open"); // won't work on IE. so why use it? it's just for esthetics and IE users deserve a lesser experience

          // rotates arrow up or down
          this.parentNode
            .querySelector(".icon__arrow-down")
            .classList.toggle("open");

          // change text for show or hide
          this.parentNode.querySelector(
            ".nav-matrix__show-list p"
          ).innerHTML = isOpen ? "Skjul liste" : "&nbsp;Vis liste";
        });
      }
    }
  };
})(jQuery);

// LIGHTBOX for feedback on sidefeil
// Inputs the URL as default value in input field, for reference to feedback.
imdi.lightboxFeedback = (function($) {
  return {
    init: function() {
      "use strict";

      window.addEventListener("DOMContentLoaded", function() {
        var element = document.querySelector(".lightbox__url");
        if (element) {
          element.value = this.location.href;
        }
      });
    }
  };
})(jQuery);

// if page is low, don't show download PDF twice:
// https://www.imdi.no/om-imdi/rapporter/2017/integrering-av-flyktninger-befolkningsundersokelse-mai-2017/
imdi.removeDoubleDownloadPDF = (function($) {
  return {
    init: function() {
      "use strict";

      var longPage = 4000;
      var selector = ".download-box";

      var downloadBox = document.querySelectorAll(selector);
      var body = document.body;
      var html = document.documentElement;

      // get proper height
      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      if (height < longPage && downloadBox.length && downloadBox.length > 1) {
        for (var i = 0; i < downloadBox.length; i++) {
          let currentText = "";
          const currentTextContainer = downloadBox[i].querySelector("p");
          if (currentTextContainer) {
            currentText = currentTextContainer.textContent;
          }

          let nextText = "";
          const nextTextContainer = downloadBox[i + 1]
            ? downloadBox[i + 1].querySelector("p")
            : null;
          if (nextTextContainer) {
            nextText = nextTextContainer.textContent;
          }

          if (currentText === nextText && currentText !== "") {
            downloadBox[i].style.display = "none";
          }
        }
      }
    }
  };
})(jQuery);

// make an element stick to top of it's parent element
imdi.stickToTop = (function($) {
  return {
    init: function() {
      // converted to ES5 because IE 11
      "use strict";

      // param 1: element being sticky
      // param 2: class that is added to the sticky element on scroll position
      var stickToTop = function stickToTop(
        triggerSelector,
        stickySelector,
        stickyClass
      ) {
        var throttleTimeout = 200; // 5 scroll events pr second
        var leftPadding = 90; // space between main column and toc

        // listens to scroll events and triggers adding / removing of classes
        window.addEventListener("scroll", function() {
          throttle(makeElementStickyIfConditionIsMet(), throttleTimeout);
        });

        // listens to scroll events and triggers adding / removing of classes
        window.addEventListener("resize", function() {
          throttle(makeElementStickyIfConditionIsMet(), throttleTimeout);
        });

        // makes element stick to top if user has scrolled to the element
        var makeElementStickyIfConditionIsMet = function makeElementStickyIfConditionIsMet() {
          var stickyElement = document.querySelector(stickySelector);
          var triggerElement = document.querySelector(triggerSelector);

          if (!triggerElement) return; // don't call getBoundingClientRect() if it doesn't exist

          //  get the height of the triggering element
          var _triggerElement$getBo = triggerElement.getBoundingClientRect(),
            top = _triggerElement$getBo.top,
            right = _triggerElement$getBo.right;

          //  add sticky class when scroll position is met
          if (top < 0) {
            stickyElement.classList.add(stickyClass);
            // stickyElement.style.marginLeft = `${right + leftPadding}px`
          }

          //  remove sticky class when scroll position is met
          else {
            stickyElement.classList.remove(stickyClass);
            // stickyElement.style.left = `${leftPadding}px`
          }
        };

        // reduces the amount of scroll events
        var throttle = function throttle(callback, limit) {
          var wait = false;

          return function() {
            if (!wait) {
              callback.call();
              wait = true;

              setTimeout(function() {
                wait = false;
              }, limit);
            }
          };
        };
      };
      stickToTop("#toc-enabled", ".toc-sidebar", "stick-to-top");
    }
  };
})(jQuery);

//  make sidebar with table of contents where the pages h2's and h3's
//  generate the table of contents
imdi.tocbot = (function() {
  return {
    init: function() {
      // converted to ES5 because IE 11
      "use strict";

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      // only create sidebar with toc if #toc-enabled exists
      var tocEnabled = document.querySelector("#toc-enabled");

      if (tocEnabled) {
        var _tocbot$init;

        //  append an id to all h2 and h3. this will be used as anchor links for the table of contents
        var allHeaderTags = document.querySelectorAll("h2, h3");
        for (var i = 0; i < allHeaderTags.length; i++) {
          allHeaderTags[i].id = "title_" + i;
        }

        tocbot.init(
          ((_tocbot$init = {
            // Where to render the table of contents.
            tocSelector: ".toc-sidebar",

            // Where to grab the headings to build the table of contents.
            contentSelector: ".toc-mobile",

            // Which headings to grab inside of the contentSelector element.
            // and which to not use
            headingSelector: "h2:not(.notoc), h3:not(.notoc)",

            // class given to the current link item
            activeLinkClass: "active-link",

            // Smooth scrolling enabled.
            smoothScroll: true,

            headingsOffset: -447,

            // Smooth scroll duration.
            smoothScrollDuration: 0,

            // class to add to inactive link items
            isCollapsedClass: "is-collapsed",

            // Class that gets added when a list should be able
            // to be collapsed but isn't necessarily collpased.
            collapsibleClass: "is-collapsible"
          }),
          _defineProperty(_tocbot$init, "smoothScroll", true),
          _defineProperty(_tocbot$init, "smoothScrollDuration", 200),
          _tocbot$init)
        );

        tocbot.refresh();

        // if a innholdsfortegnelse already exists on the page, make it's
        // header look like a <p> in the toc sidebar
        var tocList = document.querySelectorAll(".node-name--H2");

        for (var i = 0; i < tocList.length; i++) {
          if (tocList[i].textContent.toLowerCase() === "innholdsfortegnelse") {
            // add class to make existing <a> invisible (display none)
            tocList[0].classList.add("descriptive-header");

            // insert new header as a <p> sibling to invisble <a>. not pretty.
            tocList[0].insertAdjacentHTML(
              "beforebegin",
              "<p>Innholdsfortegnelse</p>"
            );

            tocList[0].previousSibling.classList.add("toc-list__header");
          }
        }
      }
    }
  };
})(jQuery);

imdi.facet = (function($) {
  return {
    init: function() {
      $("._jsExtendedFacet").on("change", "input:checkbox", function() {
        window.location = $(this).data("filterurl");
      });
    }
  };
})(jQuery);

imdi.scroll = (function($) {
  return {
    init: function() {
      var anchorid = getUrlParameter("aid");
      if (anchorid) {
        var anchor = "#" + anchorid;
        $("html,body").animate(
          { scrollTop: jQuery(anchor).offset().top - 110 },
          700
        );
        $(anchor).focus();
      }
    }
  };
})(jQuery);

/*------------------------------------*\
    TAG MANAGER CUSTOM TRACKING
    To track javascript events into Google Analytics by Google Tag Manager (GTM). Correct setup in GTM is needed.
\*------------------------------------*/

imdi.gtm_tracking = (function($) {
  return {
    customEvent: function(eventCategory, eventAction, eventLabel, eventValue) {
      // Default to undefined
      eventCategory =
        typeof eventCategory !== "undefined" ? eventCategory : undefined;
      eventAction =
        typeof eventAction !== "undefined" ? eventAction : undefined;
      eventLabel = typeof eventLabel !== "undefined" ? eventLabel : undefined;
      eventValue = typeof eventValue !== "undefined" ? eventValue : undefined;

      // Google Tag Manager call
      if (typeof dataLayer != "undefined") {
        dataLayer.push({
          event: "customEvent",
          eventCategory: eventCategory,
          eventAction: eventAction,
          eventLabel: eventLabel,
          eventValue: eventValue
        });
      }
    },

    customPageView: function(virtualPageUrl, virtualPageTitle) {
      // Default to undefined
      virtualPageUrl =
        typeof virtualPageUrl !== "undefined" ? virtualPageUrl : undefined;
      virtualPageTitle =
        typeof virtualPageTitle !== "undefined" ? virtualPageTitle : undefined;

      // Google Tag Manager call
      if (typeof dataLayer != "undefined") {
        dataLayer.push({
          event: "customPageView",
          virtualPageUrl: virtualPageUrl,
          virtualPageTitle: virtualPageTitle
        });
      }
    }
  };
})(jQuery);

/*------------------------------------*\
    MAIN MENU TOGGLE
    Open the main menu if the menu button in the header is pressed
\*------------------------------------*/

imdi.main_menu_toggle = (function($) {
  return {
    init: function() {
      $('[data-behaviour="main-menu-toggle"]').on("click", function(event) {
        // Prevent the fallback #anchor tag to move focus
        event.preventDefault();

        var topMenuVisible = document.querySelector(".top-menu");
        var pageContent = document.querySelector(".page__master");
        var header = document.querySelector("#header");
        var skipToContent = document.querySelector(".skiptocontent");
        var footer = document.querySelector("#footer");
        var footerCampaign = document.querySelector("#footer-campaign");

        // TOGGLE TOP MENU
        topMenuVisible.classList.toggle("top-menu--visible");
        topMenuVisible.classList.toggle("top-menu--hidden");

        // TOGGLE HEADER
        header.classList.toggle("header--overlay");

        // TOGGLE BODY
        if (pageContent.style.display === "none") {
          pageContent.style.display = "block";
        } else {
          pageContent.style.display = "none";
        }

        // TOGGLE ACCESSABILITY BUTTON
        if (skipToContent.style.display === "none") {
          skipToContent.style.display = "block";
        } else {
          skipToContent.style.display = "none";
        }

        // TOGGLE FOOTER
        if (footerCampaign.style.display === "none") {
          footerCampaign.style.display = "block";
        } else {
          footerCampaign.style.display = "none";
        }
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    MAIN SEARCH TOGGLE
    Open a searchfield in the header when the search button is pressed.
    Is removed if the focus moves away from the search input field, or search button.
\*------------------------------------*/

imdi.main_search_toggle = (function($) {
  return {
    init: function() {
      $('[data-behaviour="main-search-toggle"]').on("click", function(event) {
        // Prevent the fallback #anchor tag to move focus
        event.preventDefault();

        // Get targets
        var _header = $("#header");
        var _header_search = $("#header-search");

        _header.toggleClass(_header.attr("data-toggle-search"));

        // Set focus in
        _header_search.focus();
      });

      $("body").on("blur", "#header-search", function() {
        setTimeout(function() {
          if (!$("#header-search-button").is(":focus")) {
            $("#header").removeClass($("#header").attr("data-toggle-search"));
          }
        }, 500);
      });

      $("body").on("blur", "#header-search-button", function() {
        setTimeout(function() {
          if (!$("#header-search").is(":focus")) {
            $("#header").removeClass($("#header").attr("data-toggle-search"));
          }
        }, 500);
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    TOGGLE - ACCESSIBLE
\*------------------------------------*/

imdi.toggle = (function($) {
  return {
    init: function(openSectionOnLoad) {
      $('[data-behaviour~="toggle"]').on("click", function(event) {
        // Prevent the fallback #anchor tag to move focus
        event.preventDefault();

        // Set duration of animation in miliseconds
        var transition_duration = 200;

        // Get classes and relationships
        var toggle_class_expanded = $(this).data("class-expanded");
        var section = "#" + $(this).attr("aria-controls");
        var section_class_expanded = $(section).data("class-expanded");
        var section_class_contracted = $(section).data("class-contracted");
        var section_caption_expanded = $(this).data("caption-expanded");
        var section_caption_contracted = $(this).data("caption-contracted");

        // Get current state
        var state = $(this).attr("aria-expanded") === "false" ? true : false;

        if (section_caption_contracted) {
          if ($(this).hasClass(toggle_class_expanded)) {
            $(this).html(section_caption_contracted);
          } else {
            $(this).html(section_caption_expanded);
          }
        }

        // Toggle attributes
        $(this).attr("aria-expanded", state);
        $(section).attr("aria-hidden", !state);
        $(this).toggleClass(toggle_class_expanded);

        if (state) {
          // On opening
          $(section).show(0, function() {
            // Delay to be able to use css transitions and hide from screenreaders
            $(section).css("display", "block"); // Fix for allready visible sections by hover
            $(section)
              .removeClass(section_class_contracted)
              .addClass(section_class_expanded);
            // $(section).focus();
          });
          if (section_caption_contracted) {
            $(this).html(section_caption_contracted);
          }
        } else {
          // On closing
          $(section)
            .removeClass(section_class_expanded)
            .addClass(section_class_contracted);
          setTimeout(function() {
            $(section).hide();
          }, transition_duration);
          if (section_caption_contracted) {
            $(this).html(section_caption_expanded);
          }
        }
      });

      $('[data-behaviour~="toggle"]').each(function() {
        // Hide sections on load
        var section = $(this).attr("data-controls");

        $(this)
          .attr("aria-expanded", "false")
          .attr("aria-controls", section)
          .attr("role", "button");
        $("#" + section)
          .attr("aria-hidden", "true")
          .hide();

        // If the url has an open section parameter
        if (openSectionOnLoad && openSectionOnLoad === section) {
          $(this).trigger("click");
        }

        // If the section is marked to expand
        if ($(this).attr("data-state") === "expanded") {
          $(this).trigger("click");
        }
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    ACCORDION
\*------------------------------------*/
imdi.accordion = (function() {
  return {
    init: function() {
      "use strict";

      var elements = document.querySelectorAll(".accordion li");

      if (elements) {
        var _loop = function _loop(i) {
          var content = elements[i].querySelector(".accordion--content");

          elements[i].addEventListener("click", function() {
            //  toggle aria-expanded
            var ariaExpanded = content.getAttribute("aria-expanded");
            console.log(ariaExpanded);
            content.setAttribute(
              "aria-expanded",
              ariaExpanded === "true" ? false : true
            );

            //  toggle aria-hidden
            var ariaHidden = content.getAttribute("aria-hidden");
            content.setAttribute(
              "aria-hidden",
              ariaHidden === "true" ? false : true
            );

            //  toggle content visibility
            elements[i]
              .querySelector(".accordion--title img")
              .classList.toggle("open");
            content.classList.toggle("open");
          });
        };

        for (var i = 0; i < elements.length; i++) {
          _loop(i);
        }

        document.body.onkeyup = function(e) {
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
    }
  };
})();

/*------------------------------------*\
    TRIGGER
\*------------------------------------*/

imdi.trigger = (function($) {
  return {
    init: function() {
      $('[data-behaviour="trigger"]').on("click", function(event) {
        // Prevent the fallback #anchor tag to move focus
        event.preventDefault();

        var target = "#" + $(this).attr("data-controls");

        $(target).focus();
        $(target).trigger("click");
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    SELECT ALL
\*------------------------------------*/

imdi.selectall = (function($) {
  return {
    init: function() {
      $('[data-behaviour="selectall"]').on("click", function(event) {
        $(this).select();
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    ADVENCED HOVER TOGGLE
\*------------------------------------*/

imdi.hover_toggle = (function($) {
  return {
    init: function() {
      $('[data-behaviour~="hover-toggle"]').each(function() {
        var toggle_class_expanded = $(this).data("class-expanded");
        var children = $(this).data("hover-children");
        var hover_parent = this;

        // Trigger the class on the parent element when children elements receive hover
        $(children, this).hover(
          function() {
            $(hover_parent).addClass(toggle_class_expanded);
            $(hover_parent).show(0); // Hack to force redraw on Safari browser to get the hoverbox to show correctly. Ref JIRA: IMDI-186
          },
          function() {
            $(hover_parent).removeClass(toggle_class_expanded);
          }
        );
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    SMOOTH SCROLLING
\*------------------------------------*/

/* Basics lifted from a CSS Tricks demo (http://css-tricks.com/snippets/jquery/smooth-scrolling/), with focus() and URL hash updating added where commented */

imdi.smooth_scrolling = (function($) {
  return {
    init: function() {
      $('a[href^="#"]')
        .not('[href="#"]')
        .not('[data-behaviour="main-search-toggle"]')
        .not('[data-behaviour="main-menu-toggle"]')
        .not('[data-behaviour="toggle"]')
        .on("click", function() {
          var $linkElem = $(this);
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              $("html,body").animate(
                {
                  scrollTop: target.offset().top - 30
                },
                1000,
                function() {
                  /* ADDED: focus the target */
                  target.focus();
                  /* end ADDED */
                  /* ADDED: update the URL */
                  window.location.hash = $linkElem.attr("href").substring(1);
                  // window.location.hash = $(this).attr('href').substring(1, $(this).attr('href').length);
                  /* end ADDED */
                }
              );
              return false;
            }
          }
        });
    }
  };
})(jQuery);

/*------------------------------------*\
    SLICK CARSOUSEL ON MOBILE
\*------------------------------------*/

imdi.slick_carousel = (function($) {
  return {
    init: function() {
      var target = $('[data-behaviour="carousel"]');
      if (!target) return;
      var toggleSlick = function() {
        if ($(window).width() < 720) {
          if (!slickLoaded) {
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
          if (slickLoaded) {
            target.slick("unslick");
            slickLoaded = false;
          }
        }
      };

      var slickLoaded = false;

      // Init on load
      toggleSlick();

      // Init on resize
      $(window).resize(toggleSlick);
    }
  };
})(jQuery);

/*------------------------------------*\
    RESPONSIVE TABLE
\*------------------------------------*/

imdi.table_collapsable = (function($) {
  return {
    init: function() {
      var toggleAccordion = function(e) {
        console.log("toggleAccordion");
        var trigger = e.target;
        var parent = trigger.parentNode;
        var isHidden = parent.getAttribute("aria-hidden") === "true";
        if (isHidden) {
          $(trigger).removeClass("expanded");
          parent.setAttribute("aria-hidden", false);
        } else {
          $(trigger).addClass("expanded");
          parent.setAttribute("aria-hidden", true);
        }
      };

      $("[data-table-collapsable]").each(function() {
        var tableRows = $(this).find("tr");
        console.log("living");
        $(tableRows).each(function() {
          var columns = $(this).children();
          var trigger = columns[0];
          trigger.addEventListener("click", toggleAccordion);
        });
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    RESPONSIVE TABLE (for epinova)
\*------------------------------------*/
imdi.responsive_table_setup = (function($) {
  return {
    init: function() {
      $("table").each(function(tableIndex, table) {
        var $table = $(table);
        $table.addClass("table table--collapsable table--fluid");
        var bodyRows = $table.find("tbody tr");
        $table.find("thead th").each(function(thIndex, th) {
          var $th = $(th);
          $th.attr("scope", "col");
          bodyRows.each(function(trIndex, tr) {
            var td = $(tr)
              .children()
              .get(thIndex);
            $(td).attr("data-label", $th.text());
          });
        });
        $table.find("tbody").attr("data-table-collapsable", "");
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    REMOVE DOUBLE CTA
\*------------------------------------*/

imdi.removeDoubleCTA = (function($) {
  return {
    init: function() {
      var toc = $("#toc-disabled")[0];

      if (!toc) {
        return;
      }

      var secondCTA = $(toc).find(".cta")[1];

      var tocHeight = toc.offsetHeight;
      var windowHeight = window.innerHeight;

      if (tocHeight < windowHeight + 300) {
        $(secondCTA).hide();
      }
    }
  };
})(jQuery);

/*------------------------------------*\
    TO THE TOP BUTTON
\*------------------------------------*/

imdi.to_top_button = (function($) {
  return {
    init: function() {
      var toTopButton = $("[data-behaviour=to-top]");
      var distanceBeforeButtonAppears = 300;

      $(toTopButton).on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
      });

      var hideAndShowButton = function() {
        var scrollPosition = $(document).scrollTop();
        if (scrollPosition < distanceBeforeButtonAppears) {
          $(toTopButton).hide();
        } else {
          $(toTopButton).show();
        }
      };

      $(window).scroll(function() {
        requestAnimationFrame(hideAndShowButton);
      });
    }
  };
})(jQuery);

/*------------------------------------*\
    WIZARD MODULE BASED ON A JSON VARIABLE
\*------------------------------------*/

imdi.wizard = (function($) {
  return {
    init: function() {
      $('[data-behaviour="wizard"]').each(function() {
        if (
          window[$(this).data("source")] !== "undefined" &&
          window[$(this).data("source")].length &&
          window[$(this).data("source")][0] != null
        ) {
          // Load question tree
          var dataTree = window[$(this).data("source")];

          var dataHistory = [];
          var startId = dataTree[0].Id;
          var wrapper = this;

          var captionLeadtext = $(this).data("caption-leadtext")
            ? $(this).data("caption-leadtext")
            : "";
          var captionStartWizard = $(this).data("caption-start-wizard")
            ? $(this).data("caption-start-wizard")
            : "Start veiviser";
          var captionHistoryTitle = $(this).data("caption-history-title")
            ? $(this).data("caption-history-title")
            : "Tidligere svar";
          var captionStartOver = $(this).data("caption-start-over")
            ? $(this).data("caption-start-over")
            : "Start på nytt";
          var captionError = $(this).data("caption-error")
            ? $(this).data("caption-error")
            : "Det skjedde en feil. Vennligst prøv å last siden på nytt.";

          //
          // Function redraws each step
          //

          var updateWizard = function(currentId, selectedOption, targetId) {
            var dataRow = function(rows, id) {
              var i = null;
              for (i = 0; rows.length > i; i += 1) {
                if (rows[i].Id === id) {
                  return rows[i];
                }
              }
              return null;
            };

            if (currentId != -1) {
              dataHistory.push({
                Id: currentId,
                Question: dataRow(dataTree, currentId).Question,
                Answer: selectedOption
              });
            }
            $(wrapper).html('<hr class="line line--light t-margin-bottom"/>');

            // QUESTION

            if (dataRow(dataTree, targetId).Type == "step") {
              // Get data
              var _question = dataRow(dataTree, targetId).Question;
              var _instruction = dataRow(dataTree, targetId).Instruction;
              var _alternatives = dataRow(dataTree, targetId).Alternatives;

              // Construct markup
              $(wrapper)
                .append(
                  getQuestion(_question, _instruction, _alternatives, targetId)
                )
                .append(getHistory())
                .find("legend")
                .focus();

              // Google Tag Manager call
              var virtualUrl =
                window.location.pathname + "?wizard/question/" + targetId;
              var virtualTitle = _question + " | Veiviserspørsmål";
              imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

              // CONCLUSION
            } else if (dataRow(dataTree, targetId).Type == "conclusion") {
              // Get data
              var _title = dataRow(dataTree, targetId).Title;
              var _content = dataRow(dataTree, targetId).Content;
              _content = decodeURIComponent(_content.replace(/\+/g, " "));
              // Construct markup
              $(wrapper).append(getConclusion(_title, _content));
              $(wrapper).append(getHistory());
              $(wrapper)
                .find("h3")
                .focus();

              // Google Tag Manager call
              var virtualUrl =
                window.location.pathname + "?wizard/conclusion/" + targetId;
              var virtualTitle = _title + " | Veiviserkonklusjon";
              imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

              // ERROR
            } else {
              $(wrapper).append("<p><em>" + captionError + "</em></p>");
              $(wrapper).focus();
            }
          };

          //
          // Function that reset the interaction
          //

          var resetWizard = function() {
            // Reset history and markup
            dataHistory = [];
            $(wrapper).html("");

            // Construct markup
            var htmlleadtext = $("<p>", {
              html: captionLeadtext
            });

            var htmlbutton = $("<button>", {
              type: "button",
              class: "button button--large",
              html: captionStartWizard,
              click: $.proxy(updateWizard, null, -1, -1, startId)
            });

            $(wrapper).append(htmlleadtext);
            $(wrapper).append(htmlbutton);
          };

          //
          // Function fornavigating back in history
          //

          var goBackInHistory = function(targetId, index) {
            // Go back to index and remove the following children in the history
            dataHistory.splice(index, dataHistory.length - index);

            // Load target question
            updateWizard(-1, -1, targetId);

            return false;
          };

          //
          // Function for constructing HTML for question
          //

          var getQuestion = function(
            _question,
            _instruction,
            _alternatives,
            targetId
          ) {
            var html = $("<fieldset>", {
              class: "t-margin-bottom--large animations__fade-in-left"
            });
            $("<legend/>", {
              class: "h2  t-no-focus",
              tabindex: "-1",
              html: _question
            }).appendTo($(html));

            if (_instruction.length > 0)
              $("<p/>", {
                class: "text--small"
              })
                .append(_instruction)
                .appendTo($(html));

            var htmllist = $("<ul>", {
              class: "t-no-list-styles"
            });
            $.each(_alternatives, function() {
              $("<button/>", {
                type: "button",
                class: "button button--option",
                html: this.Caption + ' <i class="icon__arrow-right"></i>',
                click: $.proxy(
                  updateWizard,
                  null,
                  targetId,
                  this.Caption,
                  this.Target
                )
              }).appendTo($("<li>").appendTo($(htmllist)));
            });

            $(html).append(htmllist);

            return html;
          };

          //
          // Function for constructing HTML for a conclusion
          //

          var getConclusion = function(_title, _content) {
            var html = $("<section/>", {
              class: "t-margin-bottom--large animations__fade-in-left"
            });

            $("<h3/>", {
              class: "h2 t-no-focus",
              tabindex: "-1",
              html: _title
            }).appendTo($(html));

            $(html).append(_content);

            $("<button/>", {
              type: "button",
              class: "button",
              html: captionStartOver,
              click: $.proxy(resetWizard, null)
            }).appendTo($(html));

            return html;
          };

          //
          // Function for constructing HTML for the history
          //

          var getHistory = function() {
            if (dataHistory.length < 1) return null;
            // Construct markup
            var html = $("<section>");
            $("<h3/>", {
              class: "h4",
              html: captionHistoryTitle
            }).appendTo($(html));
            var htmllist = $("<ol/>");
            $.each(dataHistory, function(index, value) {
              var htmlli = $("<li/>");
              var htmldiv = $("<div/>", {
                class: "info t-margin-bottom"
              });
              var htmlh4 = $("<h4/>", {
                class: "info__title"
              });
              $("<a/>", {
                href: "#",
                html: value.Question,
                click: $.proxy(goBackInHistory, null, value.Id, index)
              }).appendTo($(htmlh4));
              $(htmlh4).appendTo($(htmldiv));
              $("<p/>", {
                html: value.Answer
              }).appendTo($(htmldiv));
              $(htmllist).append($(htmlli).append($(htmldiv)));
            });
            $(html).append(htmllist);
            return html;
          };

          // Trigger on load
          resetWizard();
        } else {
          $(this).innerHTML("<p><em>" + captionError + "</em></p>");
        }
      });
    }
  };
})(jQuery);

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

// Client side table of contents
imdi.tableOfContents = (function($) {
  return {
    init: function() {
      if ($(".toc-mobile").length) {
        var toc_index = 1;

        $(".toc-mobile h2:not([class]):not(.no-toc)").each(function(
          index,
          value
        ) {
          var elements = $(this);
          var element = elements[0];
          var id = element.id;

          $(this).attr("tabindex", "-1");
          $(this).addClass("toc__heading");

          $("#toc").append(
            '<li><a href="#' +
              id +
              '" class="navigation__link navigation__link--anchor">' +
              element.textContent +
              "</a></li>"
          );

          toc_index++;
        });

        if (toc_index == 1) {
          $("#toc-navigation").remove();
        }
      }
    }
  };
})(jQuery);
