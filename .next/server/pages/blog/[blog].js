"use strict";
(() => {
var exports = {};
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogDetails),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7225);
;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
;// CONCATENATED MODULE: ./pages/blog/[blog].js



const client = (0,external_contentful_.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
const getStaticPaths = async ()=>{
    const res = await client.getEntries({
        content_type: "blog"
    });
    const paths = res.items.map((item)=>{
        return {
            params: {
                blog: item.fields.tittle
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
        content_type: "blog",
        "fields.blog": params.tittle
    });
    return {
        props: {
            blog: items[0]
        }
    };
}
function BlogDetails({ blog  }) {
    const { tittle , blogImage , blogContent  } = blog.fields;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blogpost-wrapper pt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "info",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: "text-3xl pt-3",
                    children: [
                        " ",
                        tittle,
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "banner mt-7",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `https:${blogImage.fields.file.url}`,
                    width: blogImage.fields.file.details.image.width,
                    height: blogImage.fields.file.details.image.height,
                    alt: "image",
                    className: "foto"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "method blog-content pt-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        " ",
                        (0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(blogContent),
                        " "
                    ]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1755));
module.exports = __webpack_exports__;

})();