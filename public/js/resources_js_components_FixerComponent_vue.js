"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_FixerComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      monedas: ['USD', 'MXN'],
      cantidad: 0,
      tengo: 'MXN',
      quiero: 'USD',
      total: 0,
      informaciones: {},
      informacion: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var axios = (__webpack_require__(/*! axios */ "./node_modules/axios/index.js")["default"]);

    var access_key = 'bac7986d08e377de7e094b1255d8f6a2';
    var base = 'USD';
    var symbols = 'USD,MXN';
    axios.get('https://data.fixer.io/api/latest', {
      params: {
        access_key: access_key,
        base: base,
        symbols: symbols
      }
    }).then(function (response) {
      _this.informaciones = response.data;
      console.log(response.data.error.object);
    })["catch"](function (error) {
      console.log(error);
    });
  },
  //bac7986d08e377de7e094b1255d8f6a2
  methods: {
    convertirMoneda: function convertirMoneda() {
      switch (this.tengo) {
        case 'USD':
          if (this.quiero == 'MXN') {
            this.total = this.cantidad * 19.9377;
          }

          if (this.quiero == 'USD') {
            this.total = this.cantidad;
          }

          break;

        case 'MXN':
          if (this.quiero == 'USD') {
            this.total = this.cantidad / 19.9377;
          }

          if (this.quiero == 'MXN') {
            this.total = this.cantidad;
          }

          break;

        default:
          this.total = this.cantidad;
          break;
      }
    },
    getTotal: function getTotal(valor) {
      return valor;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/FixerComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/FixerComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixerComponent.vue?vue&type=template&id=2f126574& */ "./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574&");
/* harmony import */ var _FixerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FixerComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FixerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__.render,
  _FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FixerComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FixerComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FixerComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixerComponent_vue_vue_type_template_id_2f126574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixerComponent.vue?vue&type=template&id=2f126574& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FixerComponent.vue?vue&type=template&id=2f126574& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._l(_vm.informaciones, function (informacion, index) {
        return _c("p", { key: index }, [
          _vm._v(
            "\n               Codigo: " +
              _vm._s(informacion.code) +
              "\n                    -\n                Info: " +
              _vm._s(informacion.info) +
              "\n                    -\n                type: " +
              _vm._s(informacion.type) +
              "\n            "
          ),
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "cantidad" } }, [
              _vm._v("Ingrese Cantidad"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cantidad,
                  expression: "cantidad",
                },
              ],
              staticClass: "form-control form-control-lg",
              attrs: {
                type: "number",
                id: "cantidad",
                placeholder: "Ingrese Cantidad...",
                max: "100000",
              },
              domProps: { value: _vm.cantidad },
              on: {
                keyup: _vm.convertirMoneda,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cantidad = $event.target.value
                },
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "tengo" } }, [_vm._v("Tengo")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tengo,
                      expression: "tengo",
                    },
                  ],
                  staticClass: "form-control form-control-lg",
                  attrs: { id: "tengo" },
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.tengo = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.convertirMoneda,
                    ],
                  },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Selecciona Tipo de Cambio"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.monedas, function (moneda, index) {
                    return _c("option", { key: index }, [
                      _vm._v(_vm._s(moneda)),
                    ])
                  }),
                ],
                2
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "quiero" } }, [_vm._v("Quiero")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.quiero,
                      expression: "quiero",
                    },
                  ],
                  staticClass: "form-control form-control-lg",
                  attrs: { id: "quiero" },
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.quiero = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.convertirMoneda,
                    ],
                  },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("Selecciona Tipo de Cambio"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.monedas, function (moneda, index) {
                    return _c("option", { key: index }, [
                      _vm._v(_vm._s(moneda)),
                    ])
                  }),
                ],
                2
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center", staticStyle: { "font-size": "200%" } },
          [
            _c("h5", { staticStyle: { "font-size": "130%" } }, [
              _c("span", { staticClass: "badge badge-success" }, [
                _vm._v(_vm._s(_vm.cantidad) + " " + _vm._s(_vm.tengo)),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-dark" }, [_vm._v("SON")]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-success" }, [
                _vm._v(
                  _vm._s(_vm.getTotal(_vm.total)) + " " + _vm._s(_vm.quiero)
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);