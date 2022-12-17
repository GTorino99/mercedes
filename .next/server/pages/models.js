"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Model),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
;// CONCATENATED MODULE: ./components/ModelsView.js

function ModelView({ model  }) {
    const { modelName , modelImage  } = model.fields;
    console.log({
        modelImage,
        model
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modelview-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "rounded-t-lg model-image",
                        src: "https:" + modelImage.fields.file.url,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-5 model-card",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `/vehicle-model/${modelName}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white",
                                children: modelName
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
                            children: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "#",
                            className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                            children: [
                                "See more",
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    className: "w-4 h-4 ml-2 -mr-1",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
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
        })
    });
}

;// CONCATENATED MODULE: ./pages/models.js



async function getStaticProps() {
    const client = (0,external_contentful_.createClient)({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    const res = await client.getEntries({
        content_type: "vehicleModel"
    });
    const ress = await client.getEntries({
        content_type: "car"
    });
    return {
        props: {
            models: res.items,
            cars: ress.items
        }
    };
}
function Model({ models  }) {
    console.log({
        models
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "models-root",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "models-titles pt-15",
                children: "List of Models from Mercedes"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-8",
                children: models && models.map((model)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(ModelView, {
                        model: model
                    }, model.sys.id);
                })
            })
        ]
    });
}


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(899));
module.exports = __webpack_exports__;

})();