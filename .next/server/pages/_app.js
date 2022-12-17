(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__(9517);
// EXTERNAL MODULE: external "flowbite-react"
var external_flowbite_react_ = __webpack_require__(7532);
;// CONCATENATED MODULE: ./components/Layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Navbar, {
                    fluid: true,
                    rounded: false,
                    className: "pt-5 main-nav",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Navbar.Brand, {
                            href: "https://flowbite.com/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://flowbite.com/docs/images/logo.svg",
                                    className: "mr-3 h-6 sm:h-9",
                                    alt: "Flowbite Logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
                                    children: "Flowbite"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Navbar.Toggle, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Navbar.Collapse, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Navbar.Link, {
                                    href: "/",
                                    active: true,
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Navbar.Link, {
                                    href: "/about",
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Navbar.Link, {
                                    href: "/models",
                                    children: "Models"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Navbar.Link, {
                                    href: "/blog-page",
                                    children: "Blog"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cont-wrapper",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Footer, {
                    container: true,
                    className: "footer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Footer.Copyright, {
                            href: "#",
                            by: "Flowbite™",
                            year: 2022
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Footer.LinkGroup, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Footer.Link, {
                                    href: "#",
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Footer.Link, {
                                    href: "#",
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Footer.Link, {
                                    href: "#",
                                    children: "Licensing"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Footer.Link, {
                                    href: "#",
                                    children: "Contact"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9517:
/***/ (() => {



/***/ }),

/***/ 7532:
/***/ ((module) => {

"use strict";
module.exports = require("flowbite-react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2656));
module.exports = __webpack_exports__;

})();