"use strict";
(() => {
var exports = {};
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 7577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VehicleDetails),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7225);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);


const client = (0,contentful__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
const getStaticPaths = async ()=>{
    const res = await client.getEntries({
        content_type: "car"
    });
    const paths = res.items.map((item)=>{
        return {
            params: {
                code: item.fields.code
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
async function getStaticProps({ params  }) {
    const { items  } = await client.getEntries({
        content_type: "car",
        "fields.code": params.code
    });
    return {
        props: {
            car: items[0]
        }
    };
}
function VehicleDetails({ car  }) {
    const { code , engine , fuel , gearBox , image , tittle , gallery  } = car.fields;
    console.log({
        gallery
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "code-wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "rounded-t-lg model-image",
                            src: "https:" + image.fields.file.url,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-5 model-card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `blog/${tittle}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                    children: tittle
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                children: [
                                    "Code: ",
                                    code
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                children: [
                                    "Cubic capacity: ",
                                    engine,
                                    " cm",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                        children: "3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                children: [
                                    "Fuel Type: ",
                                    fuel
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                                children: [
                                    "Transmition: ",
                                    gearBox
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: `vehicle/${code}`,
                                className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                children: [
                                    "See more",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-hidden": "true",
                                        className: "w-4 h-4 ml-2 -mr-1",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                class: "overflow-hidden text-gray-700 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "container px-5 py-2 mx-auto lg:pt-12 lg:px-32",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "flex flex-wrap -m-1 md:-m-2",
                        children: gallery && gallery.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap w-1/3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "w-full p-1 md:p-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        srcSet: "https:" + item.fields.file.url
                                    }, `img-${item.sys.id}`)
                                })
                            }))
                    })
                })
            })
        ]
    });
} // {
 //     gallery && gallery.map(item => ())
 // }


/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7577));
module.exports = __webpack_exports__;

})();