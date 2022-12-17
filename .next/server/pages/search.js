"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 5628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7532);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7225);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_2__);



async function getServerSideProps(context) {
    console.log({
        context
    });
    const { model , year  } = context.query;
    const client = (0,contentful__WEBPACK_IMPORTED_MODULE_2__.createClient)({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    const res = await client.getEntries({
        content_type: "car",
        "fields.modeli.sys.contentType.sys.id": "vehicleModel",
        "fields.modeli.fields.name": model,
        "fields.year": year
    });
    return {
        props: {
            vehicles: res.items
        }
    };
}
function Search({ vehicles  }) {
    console.log({
        vehicles
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-sm",
            children: vehicles && vehicles.length ? vehicles.map((vehicle)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
                    imgSrc: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                        children: vehicle.fields.tittle
                    })
                }, vehicle.sys.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "No Data"
            })
        })
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
var __webpack_exports__ = (__webpack_exec__(5628));
module.exports = __webpack_exports__;

})();