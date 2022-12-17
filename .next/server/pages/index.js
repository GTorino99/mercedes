"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
// EXTERNAL MODULE: external "flowbite-react"
var external_flowbite_react_ = __webpack_require__(7532);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/VehicleView.js




function VehicleView({ car  }) {
    // const {tittle, code, model, engine, fuel, gallery, gearBox, image, isTopTen, year} = car.fields
    const { tittle , code , image  } = car.fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_flowbite_react_.Card, {
        imgSrc: "https:" + image.fields.file.url,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: tittle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-normal text-gray-700 dark:text-gray-400",
                children: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `vehicle/${code}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Button, {
                    color: "failure",
                    children: "View"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js




async function getStaticProps() {
    const client = (0,external_contentful_.createClient)({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    const res = await client.getEntries({
        content_type: "car"
    });
    const ress = await client.getEntries({
        content_type: "blog"
    });
    const resss = await client.getEntries({
        content_type: "vehicleModel"
    });
    return {
        props: {
            vehicles: res.items,
            blogs: ress.items,
            models: resss.items
        }
    };
}
// creates years
function createYears(startYear) {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;
    while(startYear <= currentYear){
        years.push(startYear++);
    }
    return years;
}
function Home({ vehicles , models , blogs  }) {
    console.log({
        vehicles
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "root",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "slider",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-56 sm:h-64 xl:h-80 2xl:h-96",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_flowbite_react_.Carousel, {
                        indicators: false,
                        className: "carousel",
                        children: blogs && blogs.map((pics)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: pics.fields.blogImage.fields.file.url,
                                alt: "..."
                            }, pics.sys.id))
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "filters pt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl",
                        children: "Find the car you are looking for"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "flex items-center pt-5",
                        action: "/search",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "underline_select",
                                className: "sr-only",
                                children: "Underline select"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                id: "underline_select",
                                className: "block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        children: "Pick the model"
                                    }),
                                    models && models.map((model)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: model.fields.modelName
                                        }, `model-${model.fields.modelName}`))
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "underline_select",
                                className: "sr-only",
                                children: "Underline select"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                id: "underline_select",
                                className: "block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        id: "year",
                                        onChange: (e)=>setYear(e.target.value),
                                        name: "year",
                                        children: "Pick the year"
                                    }),
                                    createYears(1920).map((year)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: year
                                        }, `year-${year}`))
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top-10 pt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl",
                        children: "Top 10 Models"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20",
                        children: vehicles.map((car)=>/*#__PURE__*/ jsx_runtime_.jsx(VehicleView, {
                                car: car
                            }, car.sys.id))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ 7532:
/***/ ((module) => {

module.exports = require("flowbite-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(5344)));
module.exports = __webpack_exports__;

})();