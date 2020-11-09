webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dropdown.tsx":
/*!*********************************!*\
  !*** ./components/Dropdown.tsx ***!
  \*********************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dropdown\", function() { return Dropdown; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Dropdown(_ref) {\n  _s();\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData;\n  var _ref2 = sdk.params.instance,\n      defaultValue = _ref2.defaultValue,\n      options = _ref2.options;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(defaultValue);\n  }, [sdk]);\n\n  var handleChange = function handleChange(ev) {\n    sdk.field.setValue(ev.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n    style: {\n      width: '100%'\n    },\n    defaultValue: initialData || defaultValue,\n    disabled: sdk.form.readOnly,\n    onChange: handleChange,\n    onOpen: function onOpen() {\n      sdk.frame.setHeight(options.length * 70);\n    },\n    onClose: function onClose() {\n      sdk.frame.setHeight();\n    },\n    children: options.map(function (_ref3) {\n      var id = _ref3.id,\n          label = _ref3.label;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n        value: id,\n        children: label\n      }, id);\n    })\n  });\n}\n\n_s(Dropdown, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Dropdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi50c3g/Y2VjNyJdLCJuYW1lcyI6WyJEcm9wZG93biIsInNkayIsImluaXRpYWxEYXRhIiwicGFyYW1zIiwiaW5zdGFuY2UiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaWVsZCIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiZm9ybSIsInJlYWRPbmx5IiwiZnJhbWUiLCJzZXRIZWlnaHQiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZTyxTQUFTQSxRQUFULE9BQXdFO0FBQUE7O0FBQUEsTUFBcERDLEdBQW9ELFFBQXBEQSxHQUFvRDtBQUFBLE1BQS9DQyxXQUErQyxRQUEvQ0EsV0FBK0M7QUFBQSxjQUMzQ0QsR0FBRyxDQUFDRSxNQUFKLENBQVdDLFFBRGdDO0FBQUEsTUFDckVDLFlBRHFFLFNBQ3JFQSxZQURxRTtBQUFBLE1BQ3ZEQyxPQUR1RCxTQUN2REEsT0FEdUQ7QUFHN0VDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQlAsT0FBRyxDQUFDUSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJMLFlBQW5CO0FBQ0QsR0FGRCxFQUVHLENBQUNKLEdBQUQsQ0FGSDs7QUFJQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNuQkMsRUFEbUIsRUFFaEI7QUFDSFgsT0FBRyxDQUFDUSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJFLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUE3QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEVDtBQUVFLGdCQUFZLEVBQUViLFdBQVcsSUFBSUcsWUFGL0I7QUFHRSxZQUFRLEVBQUVKLEdBQUcsQ0FBQ2UsSUFBSixDQUFTQyxRQUhyQjtBQUlFLFlBQVEsRUFBRU4sWUFKWjtBQUtFLFVBQU0sRUFBRSxrQkFBTTtBQUNaVixTQUFHLENBQUNpQixLQUFKLENBQVVDLFNBQVYsQ0FBb0JiLE9BQU8sQ0FBQ2MsTUFBUixHQUFpQixFQUFyQztBQUNELEtBUEg7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYm5CLFNBQUcsQ0FBQ2lCLEtBQUosQ0FBVUMsU0FBVjtBQUNELEtBVkg7QUFBQSxjQVlHYixPQUFPLENBQUNlLEdBQVIsQ0FBWTtBQUFBLFVBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFVBQU9DLEtBQVAsU0FBT0EsS0FBUDtBQUFBLDBCQUNYLDhEQUFDLDBEQUFEO0FBQW1CLGFBQUssRUFBRUQsRUFBMUI7QUFBQSxrQkFDR0M7QUFESCxTQUFlRCxFQUFmLENBRFc7QUFBQSxLQUFaO0FBWkgsSUFERjtBQW9CRDs7R0FqQ2V0QixROztLQUFBQSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ecm9wZG93bi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbnR5cGUgRHJvcGRvd25PcHRpb24gPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xufVxuXG50eXBlIERyb3Bkb3duUGFyYW1zID0ge1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZ1xuICBvcHRpb25zOiBbRHJvcGRvd25PcHRpb25dXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bih7IHNkaywgaW5pdGlhbERhdGEgfTogeyBzZGs6IGFueTsgaW5pdGlhbERhdGE6IGFueSB9KSB7XG4gIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBvcHRpb25zIH0gPSBzZGsucGFyYW1zLmluc3RhbmNlIGFzIERyb3Bkb3duUGFyYW1zXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoZGVmYXVsdFZhbHVlKVxuICB9LCBbc2RrXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgbmFtZT86IHN0cmluZzsgdmFsdWU6IHVua25vd24gfT4sXG4gICkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShldi50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbERhdGEgfHwgZGVmYXVsdFZhbHVlfVxuICAgICAgZGlzYWJsZWQ9e3Nkay5mb3JtLnJlYWRPbmx5fVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIG9uT3Blbj17KCkgPT4ge1xuICAgICAgICBzZGsuZnJhbWUuc2V0SGVpZ2h0KG9wdGlvbnMubGVuZ3RoICogNzApXG4gICAgICB9fVxuICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICBzZGsuZnJhbWUuc2V0SGVpZ2h0KClcbiAgICAgIH19XG4gICAgPlxuICAgICAge29wdGlvbnMubWFwKCh7IGlkLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxNZW51SXRlbSBrZXk9e2lkfSB2YWx1ZT17aWR9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICkpfVxuICAgIDwvU2VsZWN0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dropdown.tsx\n");

/***/ })

})