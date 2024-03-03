"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_Layout_jsx"],{

/***/ "./resources/js/components/Products.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Products.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Products() {
  // user variable used to fetch user data from database via Axios
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    book = _useState2[0],
    setBook = _useState2[1];
  var fetchData = function fetchData() {
    return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("http://127.0.0.1:8000/api/admin/products").then(function (response) {
      return setBook(response.data["books"]);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Books"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      children: book && book.length > 0 && book.map(function (bookObj, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          children: bookObj.Title
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/components/shared/Layout.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/shared/Layout.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/components/shared/Sidebar.jsx");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Products */ "./resources/js/components/Products.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Layout() {
  var loc = window.location.href;
  if (loc.includes("admin/products")) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "p-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "bg-teal-200 text-xl",
          children: "Products"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      })]
    });
  } else if (loc.includes("dashboard")) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "p-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "bg-teal-200 text-xl",
          children: "Dashboard"
        })
      })]
    });
  } else if (loc.includes("customers")) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "p-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "bg-teal-200 text-xl",
          children: "Customers"
        })
      })]
    });
  }
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Layout, {}), document.getElementById("layout"));

/***/ }),

/***/ "./resources/js/components/shared/Sidebar.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/shared/Sidebar.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.mjs");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var sideItem = "flex items-center text-xl gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
function Sidebar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex gap-10 flex-col w-60 p-3 bg-neutral-900 text-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-center gap-2 px-1 py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_2__.FcBullish, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-neutral-100 text-lg",
        children: "Book-Tour"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col flex-1 gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: sideItem,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/admin/dashboard",
          children: "Dashboard "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineViewGrid, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: sideItem,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/admin/products",
          children: "Products"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineCube, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: sideItem,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/admin/customers",
          children: "Customers"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineUsers, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: sideItem,
        children: ["Orders", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiOutlineShoppingCart, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: sideItem,
        children: ["Analytics", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiChartPie, {})
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: "BOTTOM"
    })]
  });
}

/***/ }),

/***/ "./node_modules/react-icons/fc/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/react-icons/fc/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FcAbout: () => (/* binding */ FcAbout),
/* harmony export */   FcAcceptDatabase: () => (/* binding */ FcAcceptDatabase),
/* harmony export */   FcAddColumn: () => (/* binding */ FcAddColumn),
/* harmony export */   FcAddDatabase: () => (/* binding */ FcAddDatabase),
/* harmony export */   FcAddImage: () => (/* binding */ FcAddImage),
/* harmony export */   FcAddRow: () => (/* binding */ FcAddRow),
/* harmony export */   FcAddressBook: () => (/* binding */ FcAddressBook),
/* harmony export */   FcAdvance: () => (/* binding */ FcAdvance),
/* harmony export */   FcAdvertising: () => (/* binding */ FcAdvertising),
/* harmony export */   FcAlarmClock: () => (/* binding */ FcAlarmClock),
/* harmony export */   FcAlphabeticalSortingAz: () => (/* binding */ FcAlphabeticalSortingAz),
/* harmony export */   FcAlphabeticalSortingZa: () => (/* binding */ FcAlphabeticalSortingZa),
/* harmony export */   FcAndroidOs: () => (/* binding */ FcAndroidOs),
/* harmony export */   FcAnswers: () => (/* binding */ FcAnswers),
/* harmony export */   FcApproval: () => (/* binding */ FcApproval),
/* harmony export */   FcApprove: () => (/* binding */ FcApprove),
/* harmony export */   FcAreaChart: () => (/* binding */ FcAreaChart),
/* harmony export */   FcAssistant: () => (/* binding */ FcAssistant),
/* harmony export */   FcAudioFile: () => (/* binding */ FcAudioFile),
/* harmony export */   FcAutomatic: () => (/* binding */ FcAutomatic),
/* harmony export */   FcAutomotive: () => (/* binding */ FcAutomotive),
/* harmony export */   FcBadDecision: () => (/* binding */ FcBadDecision),
/* harmony export */   FcBarChart: () => (/* binding */ FcBarChart),
/* harmony export */   FcBbc: () => (/* binding */ FcBbc),
/* harmony export */   FcBearish: () => (/* binding */ FcBearish),
/* harmony export */   FcBinoculars: () => (/* binding */ FcBinoculars),
/* harmony export */   FcBiohazard: () => (/* binding */ FcBiohazard),
/* harmony export */   FcBiomass: () => (/* binding */ FcBiomass),
/* harmony export */   FcBiotech: () => (/* binding */ FcBiotech),
/* harmony export */   FcBookmark: () => (/* binding */ FcBookmark),
/* harmony export */   FcBriefcase: () => (/* binding */ FcBriefcase),
/* harmony export */   FcBrokenLink: () => (/* binding */ FcBrokenLink),
/* harmony export */   FcBullish: () => (/* binding */ FcBullish),
/* harmony export */   FcBusiness: () => (/* binding */ FcBusiness),
/* harmony export */   FcBusinessContact: () => (/* binding */ FcBusinessContact),
/* harmony export */   FcBusinessman: () => (/* binding */ FcBusinessman),
/* harmony export */   FcBusinesswoman: () => (/* binding */ FcBusinesswoman),
/* harmony export */   FcButtingIn: () => (/* binding */ FcButtingIn),
/* harmony export */   FcCableRelease: () => (/* binding */ FcCableRelease),
/* harmony export */   FcCalculator: () => (/* binding */ FcCalculator),
/* harmony export */   FcCalendar: () => (/* binding */ FcCalendar),
/* harmony export */   FcCallTransfer: () => (/* binding */ FcCallTransfer),
/* harmony export */   FcCallback: () => (/* binding */ FcCallback),
/* harmony export */   FcCamcorder: () => (/* binding */ FcCamcorder),
/* harmony export */   FcCamcorderPro: () => (/* binding */ FcCamcorderPro),
/* harmony export */   FcCamera: () => (/* binding */ FcCamera),
/* harmony export */   FcCameraAddon: () => (/* binding */ FcCameraAddon),
/* harmony export */   FcCameraIdentification: () => (/* binding */ FcCameraIdentification),
/* harmony export */   FcCancel: () => (/* binding */ FcCancel),
/* harmony export */   FcCandleSticks: () => (/* binding */ FcCandleSticks),
/* harmony export */   FcCapacitor: () => (/* binding */ FcCapacitor),
/* harmony export */   FcCdLogo: () => (/* binding */ FcCdLogo),
/* harmony export */   FcCellPhone: () => (/* binding */ FcCellPhone),
/* harmony export */   FcChargeBattery: () => (/* binding */ FcChargeBattery),
/* harmony export */   FcCheckmark: () => (/* binding */ FcCheckmark),
/* harmony export */   FcCircuit: () => (/* binding */ FcCircuit),
/* harmony export */   FcClapperboard: () => (/* binding */ FcClapperboard),
/* harmony export */   FcClearFilters: () => (/* binding */ FcClearFilters),
/* harmony export */   FcClock: () => (/* binding */ FcClock),
/* harmony export */   FcCloseUpMode: () => (/* binding */ FcCloseUpMode),
/* harmony export */   FcCloth: () => (/* binding */ FcCloth),
/* harmony export */   FcCollaboration: () => (/* binding */ FcCollaboration),
/* harmony export */   FcCollapse: () => (/* binding */ FcCollapse),
/* harmony export */   FcCollect: () => (/* binding */ FcCollect),
/* harmony export */   FcComboChart: () => (/* binding */ FcComboChart),
/* harmony export */   FcCommandLine: () => (/* binding */ FcCommandLine),
/* harmony export */   FcComments: () => (/* binding */ FcComments),
/* harmony export */   FcCompactCamera: () => (/* binding */ FcCompactCamera),
/* harmony export */   FcConferenceCall: () => (/* binding */ FcConferenceCall),
/* harmony export */   FcContacts: () => (/* binding */ FcContacts),
/* harmony export */   FcCopyleft: () => (/* binding */ FcCopyleft),
/* harmony export */   FcCopyright: () => (/* binding */ FcCopyright),
/* harmony export */   FcCrystalOscillator: () => (/* binding */ FcCrystalOscillator),
/* harmony export */   FcCurrencyExchange: () => (/* binding */ FcCurrencyExchange),
/* harmony export */   FcCursor: () => (/* binding */ FcCursor),
/* harmony export */   FcCustomerSupport: () => (/* binding */ FcCustomerSupport),
/* harmony export */   FcDam: () => (/* binding */ FcDam),
/* harmony export */   FcDataBackup: () => (/* binding */ FcDataBackup),
/* harmony export */   FcDataConfiguration: () => (/* binding */ FcDataConfiguration),
/* harmony export */   FcDataEncryption: () => (/* binding */ FcDataEncryption),
/* harmony export */   FcDataProtection: () => (/* binding */ FcDataProtection),
/* harmony export */   FcDataRecovery: () => (/* binding */ FcDataRecovery),
/* harmony export */   FcDataSheet: () => (/* binding */ FcDataSheet),
/* harmony export */   FcDatabase: () => (/* binding */ FcDatabase),
/* harmony export */   FcDebian: () => (/* binding */ FcDebian),
/* harmony export */   FcDebt: () => (/* binding */ FcDebt),
/* harmony export */   FcDecision: () => (/* binding */ FcDecision),
/* harmony export */   FcDeleteColumn: () => (/* binding */ FcDeleteColumn),
/* harmony export */   FcDeleteDatabase: () => (/* binding */ FcDeleteDatabase),
/* harmony export */   FcDeleteRow: () => (/* binding */ FcDeleteRow),
/* harmony export */   FcDepartment: () => (/* binding */ FcDepartment),
/* harmony export */   FcDeployment: () => (/* binding */ FcDeployment),
/* harmony export */   FcDiploma1: () => (/* binding */ FcDiploma1),
/* harmony export */   FcDiploma2: () => (/* binding */ FcDiploma2),
/* harmony export */   FcDisapprove: () => (/* binding */ FcDisapprove),
/* harmony export */   FcDisclaimer: () => (/* binding */ FcDisclaimer),
/* harmony export */   FcDislike: () => (/* binding */ FcDislike),
/* harmony export */   FcDisplay: () => (/* binding */ FcDisplay),
/* harmony export */   FcDoNotInhale: () => (/* binding */ FcDoNotInhale),
/* harmony export */   FcDoNotInsert: () => (/* binding */ FcDoNotInsert),
/* harmony export */   FcDoNotMix: () => (/* binding */ FcDoNotMix),
/* harmony export */   FcDocument: () => (/* binding */ FcDocument),
/* harmony export */   FcDonate: () => (/* binding */ FcDonate),
/* harmony export */   FcDoughnutChart: () => (/* binding */ FcDoughnutChart),
/* harmony export */   FcDown: () => (/* binding */ FcDown),
/* harmony export */   FcDownLeft: () => (/* binding */ FcDownLeft),
/* harmony export */   FcDownRight: () => (/* binding */ FcDownRight),
/* harmony export */   FcDownload: () => (/* binding */ FcDownload),
/* harmony export */   FcDribbble: () => (/* binding */ FcDribbble),
/* harmony export */   FcDvdLogo: () => (/* binding */ FcDvdLogo),
/* harmony export */   FcEditImage: () => (/* binding */ FcEditImage),
/* harmony export */   FcElectricalSensor: () => (/* binding */ FcElectricalSensor),
/* harmony export */   FcElectricalThreshold: () => (/* binding */ FcElectricalThreshold),
/* harmony export */   FcElectricity: () => (/* binding */ FcElectricity),
/* harmony export */   FcElectroDevices: () => (/* binding */ FcElectroDevices),
/* harmony export */   FcElectronics: () => (/* binding */ FcElectronics),
/* harmony export */   FcEmptyBattery: () => (/* binding */ FcEmptyBattery),
/* harmony export */   FcEmptyFilter: () => (/* binding */ FcEmptyFilter),
/* harmony export */   FcEmptyTrash: () => (/* binding */ FcEmptyTrash),
/* harmony export */   FcEndCall: () => (/* binding */ FcEndCall),
/* harmony export */   FcEngineering: () => (/* binding */ FcEngineering),
/* harmony export */   FcEnteringHeavenAlive: () => (/* binding */ FcEnteringHeavenAlive),
/* harmony export */   FcExpand: () => (/* binding */ FcExpand),
/* harmony export */   FcExpired: () => (/* binding */ FcExpired),
/* harmony export */   FcExport: () => (/* binding */ FcExport),
/* harmony export */   FcExternal: () => (/* binding */ FcExternal),
/* harmony export */   FcFactory: () => (/* binding */ FcFactory),
/* harmony export */   FcFactoryBreakdown: () => (/* binding */ FcFactoryBreakdown),
/* harmony export */   FcFaq: () => (/* binding */ FcFaq),
/* harmony export */   FcFeedIn: () => (/* binding */ FcFeedIn),
/* harmony export */   FcFeedback: () => (/* binding */ FcFeedback),
/* harmony export */   FcFile: () => (/* binding */ FcFile),
/* harmony export */   FcFilingCabinet: () => (/* binding */ FcFilingCabinet),
/* harmony export */   FcFilledFilter: () => (/* binding */ FcFilledFilter),
/* harmony export */   FcFilm: () => (/* binding */ FcFilm),
/* harmony export */   FcFilmReel: () => (/* binding */ FcFilmReel),
/* harmony export */   FcFinePrint: () => (/* binding */ FcFinePrint),
/* harmony export */   FcFlashAuto: () => (/* binding */ FcFlashAuto),
/* harmony export */   FcFlashOff: () => (/* binding */ FcFlashOff),
/* harmony export */   FcFlashOn: () => (/* binding */ FcFlashOn),
/* harmony export */   FcFlowChart: () => (/* binding */ FcFlowChart),
/* harmony export */   FcFolder: () => (/* binding */ FcFolder),
/* harmony export */   FcFrame: () => (/* binding */ FcFrame),
/* harmony export */   FcFullBattery: () => (/* binding */ FcFullBattery),
/* harmony export */   FcFullTrash: () => (/* binding */ FcFullTrash),
/* harmony export */   FcGallery: () => (/* binding */ FcGallery),
/* harmony export */   FcGenealogy: () => (/* binding */ FcGenealogy),
/* harmony export */   FcGenericSortingAsc: () => (/* binding */ FcGenericSortingAsc),
/* harmony export */   FcGenericSortingDesc: () => (/* binding */ FcGenericSortingDesc),
/* harmony export */   FcGlobe: () => (/* binding */ FcGlobe),
/* harmony export */   FcGoodDecision: () => (/* binding */ FcGoodDecision),
/* harmony export */   FcGoogle: () => (/* binding */ FcGoogle),
/* harmony export */   FcGraduationCap: () => (/* binding */ FcGraduationCap),
/* harmony export */   FcGrid: () => (/* binding */ FcGrid),
/* harmony export */   FcHeadset: () => (/* binding */ FcHeadset),
/* harmony export */   FcHeatMap: () => (/* binding */ FcHeatMap),
/* harmony export */   FcHighBattery: () => (/* binding */ FcHighBattery),
/* harmony export */   FcHighPriority: () => (/* binding */ FcHighPriority),
/* harmony export */   FcHome: () => (/* binding */ FcHome),
/* harmony export */   FcIcons8Cup: () => (/* binding */ FcIcons8Cup),
/* harmony export */   FcIdea: () => (/* binding */ FcIdea),
/* harmony export */   FcImageFile: () => (/* binding */ FcImageFile),
/* harmony export */   FcImport: () => (/* binding */ FcImport),
/* harmony export */   FcInTransit: () => (/* binding */ FcInTransit),
/* harmony export */   FcInfo: () => (/* binding */ FcInfo),
/* harmony export */   FcInspection: () => (/* binding */ FcInspection),
/* harmony export */   FcIntegratedWebcam: () => (/* binding */ FcIntegratedWebcam),
/* harmony export */   FcInternal: () => (/* binding */ FcInternal),
/* harmony export */   FcInvite: () => (/* binding */ FcInvite),
/* harmony export */   FcIpad: () => (/* binding */ FcIpad),
/* harmony export */   FcIphone: () => (/* binding */ FcIphone),
/* harmony export */   FcKey: () => (/* binding */ FcKey),
/* harmony export */   FcKindle: () => (/* binding */ FcKindle),
/* harmony export */   FcLandscape: () => (/* binding */ FcLandscape),
/* harmony export */   FcLeave: () => (/* binding */ FcLeave),
/* harmony export */   FcLeft: () => (/* binding */ FcLeft),
/* harmony export */   FcLeftDown: () => (/* binding */ FcLeftDown),
/* harmony export */   FcLeftDown2: () => (/* binding */ FcLeftDown2),
/* harmony export */   FcLeftUp: () => (/* binding */ FcLeftUp),
/* harmony export */   FcLeftUp2: () => (/* binding */ FcLeftUp2),
/* harmony export */   FcLibrary: () => (/* binding */ FcLibrary),
/* harmony export */   FcLightAtTheEndOfTunnel: () => (/* binding */ FcLightAtTheEndOfTunnel),
/* harmony export */   FcLike: () => (/* binding */ FcLike),
/* harmony export */   FcLikePlaceholder: () => (/* binding */ FcLikePlaceholder),
/* harmony export */   FcLineChart: () => (/* binding */ FcLineChart),
/* harmony export */   FcLink: () => (/* binding */ FcLink),
/* harmony export */   FcLinux: () => (/* binding */ FcLinux),
/* harmony export */   FcList: () => (/* binding */ FcList),
/* harmony export */   FcLock: () => (/* binding */ FcLock),
/* harmony export */   FcLockLandscape: () => (/* binding */ FcLockLandscape),
/* harmony export */   FcLockPortrait: () => (/* binding */ FcLockPortrait),
/* harmony export */   FcLowBattery: () => (/* binding */ FcLowBattery),
/* harmony export */   FcLowPriority: () => (/* binding */ FcLowPriority),
/* harmony export */   FcMakeDecision: () => (/* binding */ FcMakeDecision),
/* harmony export */   FcManager: () => (/* binding */ FcManager),
/* harmony export */   FcMediumPriority: () => (/* binding */ FcMediumPriority),
/* harmony export */   FcMenu: () => (/* binding */ FcMenu),
/* harmony export */   FcMiddleBattery: () => (/* binding */ FcMiddleBattery),
/* harmony export */   FcMindMap: () => (/* binding */ FcMindMap),
/* harmony export */   FcMinus: () => (/* binding */ FcMinus),
/* harmony export */   FcMissedCall: () => (/* binding */ FcMissedCall),
/* harmony export */   FcMms: () => (/* binding */ FcMms),
/* harmony export */   FcMoneyTransfer: () => (/* binding */ FcMoneyTransfer),
/* harmony export */   FcMultipleCameras: () => (/* binding */ FcMultipleCameras),
/* harmony export */   FcMultipleDevices: () => (/* binding */ FcMultipleDevices),
/* harmony export */   FcMultipleInputs: () => (/* binding */ FcMultipleInputs),
/* harmony export */   FcMultipleSmartphones: () => (/* binding */ FcMultipleSmartphones),
/* harmony export */   FcMusic: () => (/* binding */ FcMusic),
/* harmony export */   FcNegativeDynamic: () => (/* binding */ FcNegativeDynamic),
/* harmony export */   FcNeutralDecision: () => (/* binding */ FcNeutralDecision),
/* harmony export */   FcNeutralTrading: () => (/* binding */ FcNeutralTrading),
/* harmony export */   FcNews: () => (/* binding */ FcNews),
/* harmony export */   FcNext: () => (/* binding */ FcNext),
/* harmony export */   FcNfcSign: () => (/* binding */ FcNfcSign),
/* harmony export */   FcNightLandscape: () => (/* binding */ FcNightLandscape),
/* harmony export */   FcNightPortrait: () => (/* binding */ FcNightPortrait),
/* harmony export */   FcNoIdea: () => (/* binding */ FcNoIdea),
/* harmony export */   FcNoVideo: () => (/* binding */ FcNoVideo),
/* harmony export */   FcNook: () => (/* binding */ FcNook),
/* harmony export */   FcNumericalSorting12: () => (/* binding */ FcNumericalSorting12),
/* harmony export */   FcNumericalSorting21: () => (/* binding */ FcNumericalSorting21),
/* harmony export */   FcOk: () => (/* binding */ FcOk),
/* harmony export */   FcOldTimeCamera: () => (/* binding */ FcOldTimeCamera),
/* harmony export */   FcOnlineSupport: () => (/* binding */ FcOnlineSupport),
/* harmony export */   FcOpenedFolder: () => (/* binding */ FcOpenedFolder),
/* harmony export */   FcOrgUnit: () => (/* binding */ FcOrgUnit),
/* harmony export */   FcOrganization: () => (/* binding */ FcOrganization),
/* harmony export */   FcOvertime: () => (/* binding */ FcOvertime),
/* harmony export */   FcPackage: () => (/* binding */ FcPackage),
/* harmony export */   FcPaid: () => (/* binding */ FcPaid),
/* harmony export */   FcPanorama: () => (/* binding */ FcPanorama),
/* harmony export */   FcParallelTasks: () => (/* binding */ FcParallelTasks),
/* harmony export */   FcPhone: () => (/* binding */ FcPhone),
/* harmony export */   FcPhoneAndroid: () => (/* binding */ FcPhoneAndroid),
/* harmony export */   FcPhotoReel: () => (/* binding */ FcPhotoReel),
/* harmony export */   FcPicture: () => (/* binding */ FcPicture),
/* harmony export */   FcPieChart: () => (/* binding */ FcPieChart),
/* harmony export */   FcPlanner: () => (/* binding */ FcPlanner),
/* harmony export */   FcPlus: () => (/* binding */ FcPlus),
/* harmony export */   FcPodiumWithAudience: () => (/* binding */ FcPodiumWithAudience),
/* harmony export */   FcPodiumWithSpeaker: () => (/* binding */ FcPodiumWithSpeaker),
/* harmony export */   FcPodiumWithoutSpeaker: () => (/* binding */ FcPodiumWithoutSpeaker),
/* harmony export */   FcPortraitMode: () => (/* binding */ FcPortraitMode),
/* harmony export */   FcPositiveDynamic: () => (/* binding */ FcPositiveDynamic),
/* harmony export */   FcPrevious: () => (/* binding */ FcPrevious),
/* harmony export */   FcPrint: () => (/* binding */ FcPrint),
/* harmony export */   FcPrivacy: () => (/* binding */ FcPrivacy),
/* harmony export */   FcProcess: () => (/* binding */ FcProcess),
/* harmony export */   FcPuzzle: () => (/* binding */ FcPuzzle),
/* harmony export */   FcQuestions: () => (/* binding */ FcQuestions),
/* harmony export */   FcRadarPlot: () => (/* binding */ FcRadarPlot),
/* harmony export */   FcRating: () => (/* binding */ FcRating),
/* harmony export */   FcRatings: () => (/* binding */ FcRatings),
/* harmony export */   FcReading: () => (/* binding */ FcReading),
/* harmony export */   FcReadingEbook: () => (/* binding */ FcReadingEbook),
/* harmony export */   FcReddit: () => (/* binding */ FcReddit),
/* harmony export */   FcRedo: () => (/* binding */ FcRedo),
/* harmony export */   FcRefresh: () => (/* binding */ FcRefresh),
/* harmony export */   FcRegisteredTrademark: () => (/* binding */ FcRegisteredTrademark),
/* harmony export */   FcRemoveImage: () => (/* binding */ FcRemoveImage),
/* harmony export */   FcReuse: () => (/* binding */ FcReuse),
/* harmony export */   FcRight: () => (/* binding */ FcRight),
/* harmony export */   FcRightDown: () => (/* binding */ FcRightDown),
/* harmony export */   FcRightDown2: () => (/* binding */ FcRightDown2),
/* harmony export */   FcRightUp: () => (/* binding */ FcRightUp),
/* harmony export */   FcRightUp2: () => (/* binding */ FcRightUp2),
/* harmony export */   FcRotateCamera: () => (/* binding */ FcRotateCamera),
/* harmony export */   FcRotateToLandscape: () => (/* binding */ FcRotateToLandscape),
/* harmony export */   FcRotateToPortrait: () => (/* binding */ FcRotateToPortrait),
/* harmony export */   FcRuler: () => (/* binding */ FcRuler),
/* harmony export */   FcRules: () => (/* binding */ FcRules),
/* harmony export */   FcSafe: () => (/* binding */ FcSafe),
/* harmony export */   FcSalesPerformance: () => (/* binding */ FcSalesPerformance),
/* harmony export */   FcScatterPlot: () => (/* binding */ FcScatterPlot),
/* harmony export */   FcSearch: () => (/* binding */ FcSearch),
/* harmony export */   FcSelfServiceKiosk: () => (/* binding */ FcSelfServiceKiosk),
/* harmony export */   FcSelfie: () => (/* binding */ FcSelfie),
/* harmony export */   FcSerialTasks: () => (/* binding */ FcSerialTasks),
/* harmony export */   FcServiceMark: () => (/* binding */ FcServiceMark),
/* harmony export */   FcServices: () => (/* binding */ FcServices),
/* harmony export */   FcSettings: () => (/* binding */ FcSettings),
/* harmony export */   FcShare: () => (/* binding */ FcShare),
/* harmony export */   FcShipped: () => (/* binding */ FcShipped),
/* harmony export */   FcShop: () => (/* binding */ FcShop),
/* harmony export */   FcSignature: () => (/* binding */ FcSignature),
/* harmony export */   FcSimCard: () => (/* binding */ FcSimCard),
/* harmony export */   FcSimCardChip: () => (/* binding */ FcSimCardChip),
/* harmony export */   FcSlrBackSide: () => (/* binding */ FcSlrBackSide),
/* harmony export */   FcSmartphoneTablet: () => (/* binding */ FcSmartphoneTablet),
/* harmony export */   FcSms: () => (/* binding */ FcSms),
/* harmony export */   FcSoundRecordingCopyright: () => (/* binding */ FcSoundRecordingCopyright),
/* harmony export */   FcSpeaker: () => (/* binding */ FcSpeaker),
/* harmony export */   FcSportsMode: () => (/* binding */ FcSportsMode),
/* harmony export */   FcStackOfPhotos: () => (/* binding */ FcStackOfPhotos),
/* harmony export */   FcStart: () => (/* binding */ FcStart),
/* harmony export */   FcStatistics: () => (/* binding */ FcStatistics),
/* harmony export */   FcSteam: () => (/* binding */ FcSteam),
/* harmony export */   FcStumbleupon: () => (/* binding */ FcStumbleupon),
/* harmony export */   FcSupport: () => (/* binding */ FcSupport),
/* harmony export */   FcSurvey: () => (/* binding */ FcSurvey),
/* harmony export */   FcSwitchCamera: () => (/* binding */ FcSwitchCamera),
/* harmony export */   FcSynchronize: () => (/* binding */ FcSynchronize),
/* harmony export */   FcTabletAndroid: () => (/* binding */ FcTabletAndroid),
/* harmony export */   FcTemplate: () => (/* binding */ FcTemplate),
/* harmony export */   FcTimeline: () => (/* binding */ FcTimeline),
/* harmony export */   FcTodoList: () => (/* binding */ FcTodoList),
/* harmony export */   FcTouchscreenSmartphone: () => (/* binding */ FcTouchscreenSmartphone),
/* harmony export */   FcTrademark: () => (/* binding */ FcTrademark),
/* harmony export */   FcTreeStructure: () => (/* binding */ FcTreeStructure),
/* harmony export */   FcTwoSmartphones: () => (/* binding */ FcTwoSmartphones),
/* harmony export */   FcUndo: () => (/* binding */ FcUndo),
/* harmony export */   FcUnlock: () => (/* binding */ FcUnlock),
/* harmony export */   FcUp: () => (/* binding */ FcUp),
/* harmony export */   FcUpLeft: () => (/* binding */ FcUpLeft),
/* harmony export */   FcUpRight: () => (/* binding */ FcUpRight),
/* harmony export */   FcUpload: () => (/* binding */ FcUpload),
/* harmony export */   FcUsb: () => (/* binding */ FcUsb),
/* harmony export */   FcVideoCall: () => (/* binding */ FcVideoCall),
/* harmony export */   FcVideoFile: () => (/* binding */ FcVideoFile),
/* harmony export */   FcVideoProjector: () => (/* binding */ FcVideoProjector),
/* harmony export */   FcViewDetails: () => (/* binding */ FcViewDetails),
/* harmony export */   FcVip: () => (/* binding */ FcVip),
/* harmony export */   FcVlc: () => (/* binding */ FcVlc),
/* harmony export */   FcVoicePresentation: () => (/* binding */ FcVoicePresentation),
/* harmony export */   FcVoicemail: () => (/* binding */ FcVoicemail),
/* harmony export */   FcWebcam: () => (/* binding */ FcWebcam),
/* harmony export */   FcWiFiLogo: () => (/* binding */ FcWiFiLogo),
/* harmony export */   FcWikipedia: () => (/* binding */ FcWikipedia),
/* harmony export */   FcWorkflow: () => (/* binding */ FcWorkflow)
/* harmony export */ });
/* harmony import */ var _lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.mjs */ "./node_modules/react-icons/lib/index.mjs");
// THIS FILE IS AUTO GENERATED

function FcAbout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"22","y":"20","width":"4","height":"11"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"15","r":"2"},"child":[]}]}]})(props);
};
function FcAcceptDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"42.5,33.3 36.8,39 34.1,36.3 32,38.5 36.8,43.3 44.6,35.5"},"child":[]}]})(props);
};
function FcAddColumn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M30,5H18c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V9C34,6.8,32.2,5,30,5z M18,39V9h12l0,30 H18z"},"child":[]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"},"child":[]}]}]})(props);
};
function FcAddDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"},"child":[]}]}]})(props);
};
function FcAddImage (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"},"child":[]},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"},"child":[]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"},"child":[]}]}]})(props);
};
function FcAddRow (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z"},"child":[]},{"tag":"circle","attr":{"fill":"#43A047","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"32","y":"36","width":"12","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"32","width":"4","height":"12"},"child":[]}]}]})(props);
};
function FcAddressBook (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"},"child":[]},{"tag":"path","attr":{"fill":"#311B92","d":"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M36,24.2c-0.1,4.8-3.1,6.9-5.3,6.7c-0.6-0.1-2.1-0.1-2.9-1.6c-0.8,1-1.8,1.6-3.1,1.6c-2.6,0-3.3-2.5-3.4-3.1 c-0.1-0.7-0.2-1.4-0.1-2.2c0.1-1,1.1-6.5,5.7-6.5c2.2,0,3.5,1.1,3.7,1.3L30,27.2c0,0.3-0.2,1.6,1.1,1.6c2.1,0,2.4-3.9,2.4-4.6 c0.1-1.2,0.3-8.2-7-8.2c-6.9,0-7.9,7.4-8,9.2c-0.5,8.5,6,8.5,7.2,8.5c1.7,0,3.7-0.7,3.9-0.8l0.4,2c-0.3,0.2-2,1.1-4.4,1.1 c-2.2,0-10.1-0.4-9.8-10.8C16.1,23.1,17.4,14,26.6,14C35.8,14,36,22.1,36,24.2z M24.1,25.5c-0.1,1,0,1.8,0.2,2.3 c0.2,0.5,0.6,0.8,1.2,0.8c0.1,0,0.3,0,0.4-0.1c0.2-0.1,0.3-0.1,0.5-0.3c0.2-0.1,0.3-0.3,0.5-0.6c0.2-0.2,0.3-0.6,0.4-1l0.5-5.4 c-0.2-0.1-0.5-0.1-0.7-0.1c-0.5,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.6,0.5-0.9,0.8c-0.2,0.4-0.4,0.8-0.6,1.3S24.2,24.8,24.1,25.5z"},"child":[]}]})(props);
};
function FcAdvance (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"46.1,24 33,35 33,13"},"child":[]},{"tag":"rect","attr":{"x":"10","y":"20","width":"4","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"20","width":"4","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"20","width":"4","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"20","width":"14","height":"8"},"child":[]}]}]})(props);
};
function FcAdvertising (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#90CAF9"},"child":[{"tag":"path","attr":{"d":"M17.4,33H15v-4h4l0.4,1.5C19.7,31.8,18.7,33,17.4,33z"},"child":[]},{"tag":"path","attr":{"d":"M37,36c0,0-11.8-7-18-7V15c5.8,0,18-7,18-7V36z"},"child":[]}]},{"tag":"g","attr":{"fill":"#283593"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"22","r":"5"},"child":[]},{"tag":"path","attr":{"d":"M40,19h-3v6h3c1.7,0,3-1.3,3-3S41.7,19,40,19z"},"child":[]},{"tag":"path","attr":{"d":"M18.6,41.2c-0.9,0.6-2.5,1.2-4.6,1.4c-0.6,0.1-1.2-0.3-1.4-1L8.2,27.9c0,0,8.8-6.2,8.8,1.1 c0,5.5,1.5,8.4,2.2,9.5c0.5,0.7,0.5,1.6,0,2.3C19,41,18.8,41.1,18.6,41.2z"},"child":[]}]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M9,29h10V15H9c-1.1,0-2,0.9-2,2v10C7,28.1,7.9,29,9,29z"},"child":[]},{"tag":"path","attr":{"fill":"#42A5F5","d":"M38,38L38,38c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v28C40,37.1,39.1,38,38,38z"},"child":[]}]})(props);
};
function FcAlarmClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M38.5,44.6l-4-4l2.1-2.1l4,4c0.6,0.6,0.6,1.5,0,2.1l0,0C40.1,45.1,39.1,45.1,38.5,44.6z"},"child":[]},{"tag":"path","attr":{"d":"M9.5,44.6l4-4l-2.1-2.1l-4,4c-0.6,0.6-0.6,1.5,0,2.1l0,0C7.9,45.1,8.9,45.1,9.5,44.6z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#C62828","cx":"24","cy":"24","r":"20"},"child":[]},{"tag":"circle","attr":{"fill":"#eee","cx":"24","cy":"24","r":"16"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"22.1","transform":"matrix(-.707 -.707 .707 -.707 12.904 62.537)","fill":"#E53935","width":".8","height":"13"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"11","width":"2","height":"13"},"child":[]},{"tag":"rect","attr":{"x":"26.1","y":"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"},"child":[]},{"tag":"circle","attr":{"fill":"#C62828","cx":"24","cy":"24","r":"1"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"1","fill":"#37474F","width":"4","height":"3"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M44.4,16.2c2.5-3.5,2.1-8.4-1-11.5c-3.1-3.1-8-3.5-11.5-1L44.4,16.2z"},"child":[]},{"tag":"path","attr":{"d":"M3.6,16.2c-2.5-3.5-2.1-8.4,1-11.5c3.1-3.1,8-3.5,11.5-1L3.6,16.2z"},"child":[]}]}]})(props);
};
function FcAlphabeticalSortingAz (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.8,17.2h-5.3l-1.1,3H6.9L12.6,5h2.9l5.7,15.2h-3.2L16.8,17.2z M12.2,14.5H16l-1.9-5.7L12.2,14.5z"},"child":[]},{"tag":"path","attr":{"d":"M12.4,40.5H20V43H8.4v-1.9L16,30.3H8.4v-2.5h11.4v1.7L12.4,40.5z"},"child":[]}]}]})(props);
};
function FcAlphabeticalSortingZa (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.8,40h-5.3l-1.1,3H6.9l5.7-15.2h2.9L21.1,43h-3.2L16.8,40z M12.2,37.3H16l-1.9-5.7L12.2,37.3z"},"child":[]},{"tag":"path","attr":{"d":"M12.4,17.7H20v2.5H8.4v-1.9L16,7.5H8.4V5h11.4v1.7L12.4,17.7z"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"},"child":[]}]})(props);
};
function FcAndroidOs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#7CB342","d":"M12,29.001c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2\r\n\t\tV29.001z"},"child":[]},{"tag":"path","attr":{"fill":"#7CB342","d":"M40,29.001c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2\r\n\t\tV29.001z"},"child":[]},{"tag":"path","attr":{"fill":"#7CB342","d":"M22,40c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2V40z"},"child":[]},{"tag":"path","attr":{"fill":"#7CB342","d":"M30,40c0,1.104-0.896,2-2,2l0,0c-1.104,0-2-0.896-2-2v-9c0-1.104,0.896-2,2-2l0,0c1.104,0,2,0.896,2,2V40z"},"child":[]},{"tag":"path","attr":{"fill":"#7CB342","d":"M14,18.001V33c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V18.001H14z"},"child":[]},{"tag":"path","attr":{"fill":"#7CB342","d":"M24,8c-6,0-9.655,3.645-10,8h20C33.654,11.645,30,8,24,8z M20,13.598c-0.552,0-1-0.448-1-1s0.448-1,1-1\r\n\t\ts1,0.448,1,1S20.552,13.598,20,13.598z M28,13.598c-0.553,0-1-0.448-1-1s0.447-1,1-1s1,0.448,1,1S28.553,13.598,28,13.598z"},"child":[]},{"tag":"line","attr":{"fill":"none","stroke":"#7CB342","strokeWidth":"2","strokeLinecap":"round","x1":"30","y1":"7","x2":"28.334","y2":"9.499"},"child":[]},{"tag":"line","attr":{"fill":"none","stroke":"#7CB342","strokeWidth":"2","strokeLinecap":"round","x1":"18","y1":"7","x2":"19.333","y2":"9.082"},"child":[]}]}]})(props);
};
function FcAnswers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"},"child":[]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"},"child":[]},{"tag":"path","attr":{"fill":"#1976D2","d":"M23.4,29.9c0-0.2,0-0.4,0.1-0.6s0.2-0.3,0.3-0.5s0.3-0.2,0.5-0.3s0.4-0.1,0.6-0.1s0.5,0,0.7,0.1 s0.4,0.2,0.5,0.3s0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6s0,0.4-0.1,0.6s-0.2,0.3-0.3,0.5s-0.3,0.2-0.5,0.3s-0.4,0.1-0.7,0.1 s-0.5,0-0.6-0.1s-0.4-0.2-0.5-0.3s-0.2-0.3-0.3-0.5S23.4,30.1,23.4,29.9z M26.1,26.8h-2.3L23.4,17h3L26.1,26.8z"},"child":[]}]})(props);
};
function FcApproval (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#8BC34A","points":"24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"},"child":[]},{"tag":"polygon","attr":{"fill":"#CCFF90","points":"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"},"child":[]}]})(props);
};
function FcApprove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"32.6,18.6 22.3,28.9 17.4,24 14.6,26.8 22.3,34.5 35.4,21.4"},"child":[]}]})(props);
};
function FcAreaChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"42,37 6,37 6,25 16,10 30,17 42,6"},"child":[]},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"42,42 6,42 6,32 16,24 30,26 42,17"},"child":[]}]})(props);
};
function FcAssistant (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,3C14.6,3,7,10.6,7,20c0,1.2,0,3.4,0,3.4L9,25v-3l21-9.8l9,9.8v3l2-1.6c0,0,0-2.1,0-3.4 C41,12,35.3,3,24,3z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"26","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"17","cy":"26","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#757575","d":"M43,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-7c-0.6,0-1,0.4-1,1s0.4,1,1,1h7c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h11c5,0,9-4,9-9v-5C44,24.4,43.6,24,43,24z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M43,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C45,22.9,44.1,22,43,22z"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"38","r":"2"},"child":[]}]}]})(props);
};
function FcAudioFile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"204","fill":"none","width":"48","height":"48"},"child":[]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"244,45 212,45 212,3 234,3 244,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"242.5,14 233,14 233,4.5"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"circle","attr":{"cx":"227","cy":"30","r":"4"},"child":[]},{"tag":"polygon","attr":{"points":"234,21 229,19 229,30 231,30 231,22.9 234,24"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"circle","attr":{"cx":"23","cy":"30","r":"4"},"child":[]},{"tag":"polygon","attr":{"points":"30,21 25,19 25,30 27,30 27,22.9 30,24"},"child":[]}]}]})(props);
};
function FcAutomatic (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M39,43H9c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v30C43,41.2,41.2,43,39,43z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M33.6,25.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L30,16.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L20.4,15 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L33.6,25.4z M24,29c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C29,26.8,26.8,29,24,29z"},"child":[]}]})(props);
};
function FcAutomotive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"none","stroke":"#F44336","strokeWidth":"4","strokeMiterlimit":"10","d":"M7,20v-8c0-2.2,1.8-4,4-4h14c1.2,0,2.4,0.6,3.2,1.6 L35,18"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"35","cy":"37","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"37","r":"5"},"child":[]}]},{"tag":"path","attr":{"fill":"#F44336","d":"M40.2,17L33,14H7c-1.2,0-2,0.8-2,2v10c0,1.2,0.8,2,2,2h1c0-2.8,2.2-5,5-5s5,2.2,5,5h12c0-2.8,2.2-5,5-5 s5,2.2,5,5h1c1.2,0,2-0.8,2-2v-5.2C43,19.2,41.8,17.6,40.2,17z"},"child":[]},{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"37","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"35","cy":"37","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"37","r":"2"},"child":[]},{"tag":"path","attr":{"d":"M30.4,39c-0.3-0.6-0.4-1.3-0.4-2s0.2-1.4,0.4-2H17.6c0.3,0.6,0.4,1.3,0.4,2s-0.2,1.4-0.4,2H30.4z"},"child":[]}]}]})(props);
};
function FcBadDecision (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"rect","attr":{"x":"16","y":"24","fill":"#F44336","width":"16","height":"4"},"child":[]}]})(props);
};
function FcBarChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"12","width":"10","height":"30"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"6","width":"10","height":"36"},"child":[]}]}]})(props);
};
function FcBbc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M0,17v14h14V17H0z M34,17v14h14V17H34z M17,17v14h14V17H17z"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M8.2,23.7c0,0,1.3-0.5,1.3-2c0,0,0.2-2.4-3-2.7H3v10h4c0,0,3.4,0,3.4-2.8C10.4,26.2,10.5,24.3,8.2,23.7z\r\n\t M4.8,20.6h1.4c1.5,0.1,1.4,1.2,1.4,1.2c0,1.4-1.6,1.4-1.6,1.4H4.8V20.6z M6.7,27.5H4.8v-2.7h1.9c1.9,0,1.9,1.3,1.9,1.3\r\n\tC8.5,27.5,6.7,27.5,6.7,27.5z M25.2,23.7c0,0,1.3-0.5,1.3-2c0,0,0.2-2.4-3-2.7H20v10h4c0,0,3.4,0,3.4-2.8\r\n\tC27.4,26.2,27.5,24.3,25.2,23.7z M21.8,20.6h1.4c1.5,0.1,1.4,1.2,1.4,1.2c0,1.4-1.6,1.4-1.6,1.4h-1.2V20.6z M23.7,27.5h-1.9v-2.7\r\n\th1.9c1.9,0,1.9,1.3,1.9,1.3C25.5,27.5,23.7,27.5,23.7,27.5z M45.3,28.1c0,0-2.9,1.8-6.3,0.4c0,0-2.9-1.1-3-4.5c0,0-0.1-3.5,3.7-4.7\r\n\tc0,0,1-0.4,2.8-0.2c0,0,1.1,0.1,2.7,0.8v1.8c0,0-1.7-1.1-3.7-1.1c0,0-3.6-0.1-3.8,3.5c0,0-0.1,3.3,3.7,3.4c0,0,1.6,0.2,3.8-1.2\r\n\tL45.3,28.1L45.3,28.1z"},"child":[]}]})(props);
};
function FcBearish (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"40","y":"34","width":"4","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"34","y":"29","width":"4","height":"15"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"33","width":"4","height":"11"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"25","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"28","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"10","y":"24","width":"4","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"19","width":"4","height":"25"},"child":[]}]},{"tag":"g","attr":{"fill":"#D32F2F"},"child":[{"tag":"polygon","attr":{"points":"34,13.2 30,17.2 20,7.2 15,12.2 7.4,4.6 4.6,7.4 15,17.8 20,12.8 30,22.8 34,18.8 40.1,24.9 42.9,22.1"},"child":[]},{"tag":"polygon","attr":{"points":"44,26 35,26 44,17"},"child":[]}]}]})(props);
};
function FcBinoculars (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"16","r":"6"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"16","r":"6"},"child":[]},{"tag":"path","attr":{"d":"M46.7,25l-15.3,3H16.7L1.4,25l4.3-7.9c1.1-1.9,3.1-3.1,5.3-3.1h26.2c2.2,0,4.2,1.2,5.3,3.1L46.7,25z"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"30","r":"10"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"30","r":"10"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"28","r":"5"},"child":[]}]},{"tag":"circle","attr":{"fill":"#546E7A","cx":"24","cy":"28","r":"2"},"child":[]},{"tag":"g","attr":{"fill":"#a0f"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"30","r":"7"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"30","r":"7"},"child":[]}]},{"tag":"g","attr":{"fill":"#CE93D8"},"child":[{"tag":"path","attr":{"d":"M41.7,27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C42.1,28.7,42.1,28.1,41.7,27.7z"},"child":[]},{"tag":"path","attr":{"d":"M10,26c-1.4,0-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1c1.2-1.3,3.3-1.3,4.5,0 c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0.1-1.4C12.8,26.6,11.4,26,10,26z"},"child":[]}]}]})(props);
};
function FcBiohazard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00A344","d":"M24,13c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S31.2,13,24,13z M24,35c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S29,35,24,35z"},"child":[]},{"tag":"path","attr":{"fill":"#00C853","d":"M8.5,25.4c4-2.2,9-1.1,11.5,2.5c0.1,0.1,0.2,0.1,0.3,0.1l1.2-0.7c0.1-0.1,0.2-0.2,0.1-0.3 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2l0,0 c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2-0.1,0.2-0.3v-1.3c0-0.1-0.1-0.2-0.2-0.2 c-4.5-0.4-8-4.1-8-8.6c0-4.1,3-7.6,6.9-8.4c0.1,0,0.2-0.1,0.2-0.3V4.8c0-0.1-0.1-0.2-0.2-0.2C16.4,5.5,12,10.4,12,16.3 c0,1.3,0.2,2.6,0.6,3.8c-1.2,0.2-2.5,0.7-3.6,1.3c-5.2,3-7.3,9.2-5.2,14.5C3.9,36,4,36,4.1,36l0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3 C3.3,31.7,4.8,27.4,8.5,25.4L8.5,25.4z M39,21.4c-1.2-0.7-2.4-1.1-3.6-1.3c0.4-1.2,0.6-2.4,0.6-3.8c0-5.9-4.4-10.8-10.2-11.7 c-0.1,0-0.2,0.1-0.2,0.2v0.4c0,0.1,0.1,0.2,0.2,0.3c4,0.8,6.9,4.3,6.9,8.4c0,4.5-3.5,8.2-8,8.6c-0.1,0-0.2,0.1-0.2,0.2v1.3 c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0.1,0.3l1.2,0.7c0.1,0.1,0.2,0,0.3-0.1c2.6-3.6,7.6-4.8,11.5-2.5 c3.6,2.1,5.2,6.3,3.9,10.1c0,0.1,0,0.2,0.1,0.3l0.3,0.2c0.1,0.1,0.2,0,0.3-0.1C46.3,30.5,44.2,24.3,39,21.4L39,21.4z M30.8,40.3 c-4-2.2-5.5-7.1-3.5-11.1c0.1-0.1,0-0.2-0.1-0.3L26,28.2c-0.1-0.1-0.2,0-0.3,0c-0.2,0.1-0.3,0.3-0.5,0.3c0,0,0,0,0,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.2-0.5-0.3 c-0.1-0.1-0.2-0.1-0.3,0l-1.2,0.7c-0.1,0.1-0.1,0.2-0.1,0.3c1.9,4,0.4,8.8-3.5,11.1c-3.6,2.1-8.2,1.3-10.9-1.7 c-0.1-0.1-0.2-0.1-0.3-0.1l-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c3.6,4.5,10.2,5.8,15.4,2.8c1.2-0.7,2.2-1.5,3-2.4 c0.8,0.9,1.8,1.8,3,2.4c5.2,3,11.7,1.6,15.4-2.8c0.1-0.1,0-0.2-0.1-0.3L42,38.5c-0.1-0.1-0.2,0-0.3,0.1C39,41.5,34.4,42.3,30.8,40.3 L30.8,40.3z"},"child":[]}]})(props);
};
function FcBiomass (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#9CCC65","d":"M32,15V7H16v8L6.2,40c-0.6,1.5,0.5,3,2.1,3h31.5c1.6,0,2.6-1.6,2.1-3L32,15z"},"child":[]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M32,9H16c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v0C34,8.1,33.1,9,32,9z"},"child":[]},{"tag":"path","attr":{"fill":"#2E7D32","d":"M28,30c0,4.4-4,8-4,8s-4-3.6-4-8s4-8,4-8S28,25.6,28,30z"},"child":[]},{"tag":"path","attr":{"fill":"#388E3C","d":"M31.1,32.6c-2,4-7.1,5.4-7.1,5.4s-2-5,0-8.9s7.1-5.4,7.1-5.4S33.1,28.6,31.1,32.6z"},"child":[]},{"tag":"path","attr":{"fill":"#43A047","d":"M16.9,32.6c2,4,7.1,5.4,7.1,5.4s2-5,0-8.9s-7.1-5.4-7.1-5.4S14.9,28.6,16.9,32.6z"},"child":[]}]})(props);
};
function FcBiotech (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#AD1457","d":"M36,4c0,9.3-6,13.2-12.8,17.8C16.1,26.5,8,31.8,8,44h4c0-10.1,6.5-14.4,13.4-18.9C32.2,20.6,40,15.4,40,4 H36z"},"child":[]},{"tag":"path","attr":{"fill":"#AD1457","d":"M38,41H11c-0.6,0-1-0.4-1-1s0.4-1,1-1h27c0.6,0,1,0.4,1,1S38.6,41,38,41z"},"child":[]},{"tag":"path","attr":{"fill":"#AD1457","d":"M36,37H12c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S36.6,37,36,37z"},"child":[]},{"tag":"path","attr":{"fill":"#AD1457","d":"M34,33H14c-0.6,0-1-0.4-1-1s0.4-1,1-1h20c0.6,0,1,0.4,1,1S34.6,33,34,33z"},"child":[]},{"tag":"path","attr":{"fill":"#AD1457","d":"M29,29H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S29.6,29,29,29z"},"child":[]},{"tag":"path","attr":{"fill":"#E91E63","d":"M37,9H10C9.4,9,9,8.6,9,8s0.4-1,1-1h27c0.6,0,1,0.4,1,1S37.6,9,37,9z"},"child":[]},{"tag":"path","attr":{"fill":"#E91E63","d":"M36,13H12c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S36.6,13,36,13z"},"child":[]},{"tag":"path","attr":{"fill":"#E91E63","d":"M34,17H14c-0.6,0-1-0.4-1-1s0.4-1,1-1h20c0.6,0,1,0.4,1,1S34.6,17,34,17z"},"child":[]},{"tag":"path","attr":{"fill":"#E91E63","d":"M29,21H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S29.6,21,29,21z"},"child":[]},{"tag":"path","attr":{"fill":"#E91E63","d":"M40,44h-4c0-10.1-6.5-14.4-13.4-18.9C15.8,20.6,8,15.4,8,4h4c0,9.3,6,13.2,12.8,17.8 C31.9,26.5,40,31.8,40,44z"},"child":[]}]})(props);
};
function FcBookmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"},"child":[]}]})(props);
};
function FcBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"},"child":[]},{"tag":"path","attr":{"fill":"#E65100","d":"M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"},"child":[]},{"tag":"path","attr":{"fill":"#FF6E40","d":"M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z"},"child":[]}]})(props);
};
function FcBrokenLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M17.5,27c-1.1,1.2-2.7,2-4.5,2h-3c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c1.8,0,3.4,0.8,4.5,2h4.7 c-1.5-3.5-5.1-6-9.2-6h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c4.1,0,7.6-2.5,9.2-6H17.5z"},"child":[]},{"tag":"path","attr":{"d":"M38,13h-3c-4.1,0-7.6,2.5-9.2,6h4.7c1.1-1.2,2.7-2,4.5-2h3c3.3,0,6,2.7,6,6s-2.7,6-6,6h-3 c-1.8,0-3.4-0.8-4.5-2h-4.7c1.5,3.5,5.1,6,9.2,6h3c5.5,0,10-4.5,10-10S43.5,13,38,13z"},"child":[]}]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"19.5,4 16,6 22.1,14.1 23.4,13.3"},"child":[]},{"tag":"polygon","attr":{"points":"28.5,4 32,6 25.9,14.1 24.6,13.3"},"child":[]},{"tag":"polygon","attr":{"points":"28.5,44 32,42 25.9,33.9 24.6,34.7"},"child":[]},{"tag":"polygon","attr":{"points":"19.5,44 16,42 22.1,33.9 23.4,34.7"},"child":[]}]}]})(props);
};
function FcBullish (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"40","y":"21","width":"4","height":"23"},"child":[]},{"tag":"rect","attr":{"x":"34","y":"28","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"23","width":"4","height":"21"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"29","width":"4","height":"15"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"32","width":"4","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"10","y":"30","width":"4","height":"14"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"34","width":"4","height":"10"},"child":[]}]},{"tag":"g","attr":{"fill":"#388E3C"},"child":[{"tag":"polygon","attr":{"points":"40.1,9.1 34,15.2 30,11.2 20,21.2 15,16.2 4.6,26.6 7.4,29.4 15,21.8 20,26.8 30,16.8 34,20.8 42.9,11.9"},"child":[]},{"tag":"polygon","attr":{"points":"44,8 35,8 44,17"},"child":[]}]}]})(props);
};
function FcBusinessContact (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z"},"child":[]},{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"18","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z"},"child":[]}]}]})(props);
};
function FcBusiness (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#263238"},"child":[{"tag":"path","attr":{"d":"M11,44H9c-0.6,0-1-0.4-1-1v-2h4v2C12,43.6,11.6,44,11,44z"},"child":[]},{"tag":"path","attr":{"d":"M39,44h-2c-0.6,0-1-0.4-1-1v-2h4v2C40,43.6,39.6,44,39,44z"},"child":[]}]},{"tag":"path","attr":{"fill":"#37474F","d":"M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"},"child":[]}]})(props);
};
function FcBusinessman (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF9800","points":"24,37 19,31 19,25 29,25 29,31"},"child":[]},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"19","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"19","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"},"child":[]},{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"19","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"19","r":"1"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#fff","points":"24,43 19,31 24,32 29,31"},"child":[]},{"tag":"polygon","attr":{"fill":"#D32F2F","points":"23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"},"child":[]},{"tag":"path","attr":{"fill":"#546E7A","d":"M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"},"child":[]}]})(props);
};
function FcBusinesswoman (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"16","y":"15","fill":"#BF360C","width":"16","height":"18"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M40,44H8c0-11,11-13,11-13h10C29,31,40,33,40,44z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M24,37c-2.2,0-5-6-5-6v-6h10v6C29,31,26.2,37,24,37z"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,14c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,19.9,33,15.1,33,14z"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,4C17.9,4,9,7.4,9,27.3l7,4.7V19l12-7l4,5v15l7-6c0-4-0.7-20-11-20l-1-2H24z"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M24,38c-4.4,0-5-7-5-7s2.5,4,5,4s5-4,5-4S28.4,38,24,38z"},"child":[]},{"tag":"circle","attr":{"fill":"#784719","cx":"28","cy":"21","r":"1"},"child":[]},{"tag":"circle","attr":{"fill":"#784719","cx":"20","cy":"21","r":"1"},"child":[]}]})(props);
};
function FcButtingIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M24,3C12.4,3,3,12.4,3,24c0,11.6,9.4,21,21,21c0.3,0,0.7,0,1-0.1V3.1C24.7,3,24.3,3,24,3z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M25,3.1v41.9c4.1-0.2,7.9-1.5,11-3.7V6.8C32.9,4.6,29.1,3.2,25,3.1z"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M20.5,13C14.1,13.3,8.9,18.7,9,25.1c0,2.8,1,5.4,2.7,7.5c1.4,1.7,2.3,3.9,2.3,6.1v3.8c3,1.6,6.4,2.5,10,2.5 c0.3,0,0.7,0,1-0.1c0.7,0,1.3-0.1,2-0.2v-9.4c3.6-2.1,6-5.9,6-10.4C33,18.2,27.4,12.7,20.5,13z"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M29,38.6L25,38v-9h8l-0.7,7C32.1,37.6,30.7,38.8,29,38.6z"},"child":[]},{"tag":"polygon","attr":{"fill":"#FFB74D","points":"39,29 32,31 31,26 32,22"},"child":[]},{"tag":"circle","attr":{"fill":"#784719","cx":"29.5","cy":"25.5","r":"1.5"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M21,12c-7.2,0-13,5.8-13,13c0,7.6,5.1,9,6,13l4-3v-8l5-2l1-4c3.2,0,6-3.9,6-6.1C27.9,13,24.4,12,21,12z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"19","cy":"27","r":"3"},"child":[]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M45,24c0-7.1-3.6-13.4-9-17.2v34.4C41.4,37.4,45,31.1,45,24z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M20,44.6c1.3,0.2,2.6,0.4,4,0.4c0.3,0,0.7,0,1-0.1c0.7,0,1.3-0.1,2-0.2v-6.5l-7-1V44.6z"},"child":[]}]})(props);
};
function FcCableRelease (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M34.9,29.1c-2.7-2.7-7.1-2.7-9.8,0l-4,4c-1.7,1.7-4.5,1.7-6.2,0c-1.7-1.7-1.7-4.5,0-6.2l4.5-4.5l-2.8-2.8 l-4.5,4.5c-3.3,3.3-3.3,8.6,0,11.8c3.3,3.3,8.6,3.3,11.8,0l4-4c1.2-1.1,3-1.1,4.2,0c1.1,1.2,1.1,3,0,4.2L27,41.2l2.8,2.8l5.1-5.1 C37.6,36.2,37.6,31.8,34.9,29.1z"},"child":[]},{"tag":"path","attr":{"fill":"#0277BD","d":"M16.1,22.9L16.1,22.9c-2.8-2.8-2.8-7.3,0-10l6.8-6.8c2.8-2.8,7.3-2.8,10,0l0,0c2.8,2.8,2.8,7.3,0,10 l-6.8,6.8C23.3,25.7,18.9,25.7,16.1,22.9z"},"child":[]},{"tag":"circle","attr":{"fill":"#B3E5FC","cx":"28","cy":"11","r":"4"},"child":[]}]})(props);
};
function FcCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#616161","d":"M40,16H8v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V16z"},"child":[]},{"tag":"path","attr":{"fill":"#424242","d":"M36,4H12C9.8,4,8,5.8,8,8v9h32V8C40,5.8,38.2,4,36,4z"},"child":[]},{"tag":"path","attr":{"fill":"#9CCC65","d":"M36,14H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v5C37,13.6,36.6,14,36,14z"},"child":[]},{"tag":"g","attr":{"fill":"#33691E"},"child":[{"tag":"rect","attr":{"x":"33","y":"10","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"29","y":"10","width":"2","height":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#FF5252","d":"M36,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,22.6,36.6,23,36,23z"},"child":[]},{"tag":"g","attr":{"fill":"#E0E0E0"},"child":[{"tag":"path","attr":{"d":"M15,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,22.6,15.6,23,15,23z"},"child":[]},{"tag":"path","attr":{"d":"M22,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,22.6,22.6,23,22,23z"},"child":[]},{"tag":"path","attr":{"d":"M29,23h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,22.6,29.6,23,29,23z"},"child":[]},{"tag":"path","attr":{"d":"M15,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,28.6,15.6,29,15,29z"},"child":[]},{"tag":"path","attr":{"d":"M22,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,28.6,22.6,29,22,29z"},"child":[]},{"tag":"path","attr":{"d":"M29,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,28.6,29.6,29,29,29z"},"child":[]},{"tag":"path","attr":{"d":"M15,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,34.6,15.6,35,15,35z"},"child":[]},{"tag":"path","attr":{"d":"M22,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,34.6,22.6,35,22,35z"},"child":[]},{"tag":"path","attr":{"d":"M29,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,34.6,29.6,35,29,35z"},"child":[]},{"tag":"path","attr":{"d":"M15,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C16,40.6,15.6,41,15,41z"},"child":[]},{"tag":"path","attr":{"d":"M22,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C23,40.6,22.6,41,22,41z"},"child":[]},{"tag":"path","attr":{"d":"M29,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C30,40.6,29.6,41,29,41z"},"child":[]}]},{"tag":"g","attr":{"fill":"#BDBDBD"},"child":[{"tag":"path","attr":{"d":"M36,29h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,28.6,36.6,29,36,29z"},"child":[]},{"tag":"path","attr":{"d":"M36,35h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,34.6,36.6,35,36,35z"},"child":[]},{"tag":"path","attr":{"d":"M36,41h-3c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v2C37,40.6,36.6,41,36,41z"},"child":[]}]}]})(props);
};
function FcCalendar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"},"child":[]},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"},"child":[]}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"},"child":[]},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"},"child":[]}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"13","y":"20","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"20","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"20","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"20","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"26","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"26","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"26","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"26","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"32","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"32","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"32","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"32","width":"4","height":"4"},"child":[]}]}]})(props);
};
function FcCallTransfer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M39.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L41,8.4C40.5,7.9,39.7,7.9,39.2,8.4z"},"child":[]},{"tag":"path","attr":{"fill":"#009688","d":"M11.2,8.4l-1.8,1.8c-6.3,6.5-5.4,22,0,27.6l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l3.6-3.7c0.5-0.5,0.5-1.3,0-1.8 l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1,0-13.4h4.8l3.3-3.4c0.5-0.5,0.5-1.3,0-1.8L13,8.4C12.5,7.9,11.7,7.9,11.2,8.4z"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"polygon","attr":{"points":"25.3,18.6 30.7,24 25.3,29.4"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"22","width":"11","height":"4"},"child":[]}]}]})(props);
};
function FcCallback (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M26.4,33.9c0,0,4-2.6,4.8-3c0.8-0.4,1.7-0.6,2.2-0.2c0.8,0.5,7.5,4.9,8.1,5.3c0.6,0.4,0.8,1.5,0.1,2.6 c-0.8,1.1-4.3,5.5-5.8,5.4c-1.5,0-8.4,0.4-20.3-11.4C3.6,20.7,4,13.8,4,12.3c0-1.5,4.3-5.1,5.4-5.8c1.1-0.8,2.2-0.5,2.6,0.1 c0.4,0.6,4.8,7.3,5.3,8.1c0.3,0.5,0.2,1.4-0.2,2.2c-0.4,0.8-3,4.8-3,4.8s0.7,2.8,5,7.2C23.5,33.2,26.4,33.9,26.4,33.9z"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M35,9H25v4h10c1.1,0,2,0.9,2,2v10h4V15C41,11.7,38.3,9,35,9z"},"child":[]},{"tag":"polygon","attr":{"points":"28,16 21.3,11 28,6"},"child":[]}]}]})(props);
};
function FcCamcorderPro (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"27","y":"8","fill":"#37474F","width":"10","height":"4"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M27,8h-9.7c-1.5,0-2.8,0.8-3.5,2.1l-3.3,6L14,18l3.3-6H27v7.2h4V12C31,9.8,29.2,8,27,8z"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M30,40H6c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v16C34,38.2,32.2,40,30,40z"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M38,35l5,5h3V18h-3l-5,5V35z"},"child":[]},{"tag":"path","attr":{"fill":"#546E7A","d":"M22,35H8c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C24,34.1,23.1,35,22,35z"},"child":[]},{"tag":"rect","attr":{"x":"34","y":"23","fill":"#455A64","width":"4","height":"12"},"child":[]},{"tag":"path","attr":{"fill":"#263238","d":"M41,13h-4c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h4c1.7,0,3,1.3,3,3v0C44,11.7,42.7,13,41,13z"},"child":[]},{"tag":"rect","attr":{"x":"8","y":"23","fill":"#03A9F4","width":"14","height":"10"},"child":[]},{"tag":"polygon","attr":{"fill":"#4FC3F7","points":"13.5,25.5 9,32 18,32"},"child":[]},{"tag":"g","attr":{"fill":"#B3E5FC"},"child":[{"tag":"circle","attr":{"cx":"19.5","cy":"25.5","r":"1.5"},"child":[]},{"tag":"polygon","attr":{"points":"17.5,27.6 14,32 21,32"},"child":[]}]}]})(props);
};
function FcCamcorder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M20,42H10c-2.2,0-4-1.8-4-4V15c0-5,4-9,9-9h0c5,0,9,4,9,9v23C24,40.2,22.2,42,20,42z"},"child":[]},{"tag":"circle","attr":{"fill":"#455A64","cx":"15","cy":"15","r":"7"},"child":[]},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"15","cy":"15","r":"5.2"},"child":[]},{"tag":"path","attr":{"fill":"#90CAF9","d":"M18.3,13c-0.8-0.9-2-1.5-3.3-1.5S12.6,12,11.7,13c-0.3,0.4-0.3,0.9,0.1,1.2c0.4,0.3,0.9,0.3,1.2-0.1 c1-1.2,2.9-1.2,3.9,0c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2C18.6,13.9,18.6,13.3,18.3,13z"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M40,31H28c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v10C42,30.1,41.1,31,40,31z"},"child":[]},{"tag":"rect","attr":{"x":"24","y":"19","fill":"#455A64","width":"2","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"19","fill":"#03A9F4","width":"12","height":"10"},"child":[]},{"tag":"polygon","attr":{"fill":"#4FC3F7","points":"33,22.2 29,28 37,28"},"child":[]},{"tag":"g","attr":{"fill":"#B3E5FC"},"child":[{"tag":"circle","attr":{"cx":"37.5","cy":"21.5","r":"1"},"child":[]},{"tag":"polygon","attr":{"points":"36,24.2 33,28 39,28"},"child":[]}]},{"tag":"circle","attr":{"fill":"#455A64","cx":"15","cy":"35","r":"3"},"child":[]},{"tag":"circle","attr":{"fill":"#F44336","cx":"15","cy":"35","r":"2"},"child":[]}]})(props);
};
function FcCameraAddon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"},"child":[]},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"},"child":[]},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"},"child":[]},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M28.8,23c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,24.4,29.3,23.5,28.8,23z"},"child":[]},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"},"child":[]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M48,33.8c0-1.3-1.1-2.4-2.4-2.4H42c-0.4,0-0.7-0.5-0.4-0.8c0.4-0.6,0.5-1.3,0.4-2.1 c-0.2-1.2-1.1-2.1-2.3-2.4C37.7,25.7,36,27.1,36,29c0,0.6,0.2,1.1,0.4,1.6c0.2,0.4,0,0.8-0.5,0.8h-3.6c-1.3,0-2.4,1.1-2.4,2.4V37 c0,0.4,0.5,0.7,0.8,0.4c0.6-0.4,1.3-0.5,2.1-0.4c1.2,0.2,2.1,1.1,2.4,2.3c0.4,1.9-1.1,3.6-2.9,3.6c-0.6,0-1.1-0.2-1.6-0.4 c-0.4-0.2-0.8,0-0.8,0.5v2.6c0,1.3,1.1,2.4,2.4,2.4h13.2c1.3,0,2.4-1.1,2.4-2.4V33.8z"},"child":[]}]})(props);
};
function FcCameraIdentification (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"},"child":[]},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"},"child":[]},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"},"child":[]},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"},"child":[]},{"tag":"g","attr":{"fill":"#616161"},"child":[{"tag":"rect","attr":{"x":"42.2","y":"38.3","transform":"matrix(.707 -.707 .707 .707 -18.002 43.46)","width":"2.4","height":"10.4"},"child":[]},{"tag":"circle","attr":{"cx":"35","cy":"35","r":"10"},"child":[]}]},{"tag":"rect","attr":{"x":"43.9","y":"42.4","transform":"matrix(.707 -.707 .707 .707 -18.709 45.167)","fill":"#37474F","width":"2.4","height":"5.6"},"child":[]},{"tag":"circle","attr":{"fill":"#64B5F6","cx":"35","cy":"35","r":"8"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M39.3,31.4c-1.1-1.3-2.6-2-4.2-2s-3.2,0.7-4.2,2c-0.2,0.3-0.2,0.6,0.1,0.9c0.3,0.2,0.6,0.2,0.9-0.1 c0.8-1,2-1.5,3.3-1.5s2.5,0.6,3.3,1.5c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3,0,0.4-0.1C39.5,32.1,39.5,31.7,39.3,31.4z"},"child":[]},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"},"child":[]},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"},"child":[]}]})(props);
};
function FcCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#512DA8","d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"},"child":[]},{"tag":"path","attr":{"fill":"#8667C4","d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"},"child":[]},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"},"child":[]},{"tag":"circle","attr":{"fill":"#512DA8","cx":"24","cy":"26","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"},"child":[]},{"tag":"ellipse","attr":{"fill":"#8667C4","cx":"11","cy":"13.5","rx":"2","ry":"1.5"},"child":[]}]})(props);
};
function FcCancel (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#D50000","d":"M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,10c3.1,0,6,1.1,8.4,2.8L12.8,32.4 C11.1,30,10,27.1,10,24C10,16.3,16.3,10,24,10z M24,38c-3.1,0-6-1.1-8.4-2.8l19.6-19.6C36.9,18,38,20.9,38,24C38,31.7,31.7,38,24,38 z"},"child":[]}]})(props);
};
function FcCandleSticks (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"rect","attr":{"x":"38","y":"4","width":"2","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"7","width":"2","height":"17"},"child":[]},{"tag":"rect","attr":{"x":"8","y":"27","width":"2","height":"17"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"19","width":"2","height":"22"},"child":[]}]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M36,7h6c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V9C34,7.9,34.9,7,36,7z"},"child":[]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M13,10h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-7C11,10.9,11.9,10,13,10z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M6,30h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-7C4,30.9,4.9,30,6,30z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M26,22h6c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V24C24,22.9,24.9,22,26,22z"},"child":[]}]})(props);
};
function FcCapacitor (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"y":"27","width":"25","height":"4"},"child":[]},{"tag":"rect","attr":{"y":"17","width":"25","height":"4"},"child":[]}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M46,35c1.1,0,2-0.9,2-2V15c0-1.1-0.9-2-2-2H27v22H46z"},"child":[]},{"tag":"path","attr":{"d":"M21,13c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h2V13H21z"},"child":[]}]},{"tag":"path","attr":{"fill":"#303F9F","d":"M25,33c1.1,0,2,0.9,2,2V13c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v22C23,33.9,23.9,33,25,33z"},"child":[]}]})(props);
};
function FcCdLogo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M17.814,18H20.2c0.5,0,0.8,0.4,0.8,0.8v16.4c0,0.399-0.4,0.8-0.8,0.8h-2.384c-0.4,0-0.8-0.4-0.8-0.8V18.8\r\n\t\tC16.916,18.3,17.314,18,17.814,18z"},"child":[]},{"tag":"path","attr":{"fill":"#2196F3","d":"M14.2,11h-3.3c-0.5,0-0.9,0.403-0.9,0.807V17H2.2C1.6,17,1,17.605,1,18.21v16.58C1,35.396,1.6,36,2.2,36h12\r\n\t\tc0.4,0,0.8-0.305,0.8-0.809V11.807C15,11.403,14.7,11,14.2,11z M10,31.283c0,0.398-0.4,0.8-0.8,0.8H6.8c-0.4,0-0.8-0.399-0.8-0.8\r\n\t\tV21.8C6,21.4,6.3,21,6.8,21h2.4c0.5,0,0.8,0.4,0.8,0.8V31.283z"},"child":[]},{"tag":"path","attr":{"fill":"#2196F3","d":"M33.2,25c0.5,0,0.8,0.6,0.8,0.8v9.4c0,0.399-0.422,0.8-0.8,0.8h-9.4c-0.425,0-0.8-0.4-0.8-0.8v-2.386\r\n\t\tc0-0.5,0.4-0.799,0.8-0.799L30,32v-3h-6.2c-0.331,0-0.8-0.4-0.8-0.801V18.8c0-0.5,0.4-0.8,0.8-0.8h9.4c0.399,0,0.8,0.4,0.8,0.8v2.4\r\n\t\tc0,0.3-0.266,0.8-0.8,0.8H27v3H33.2z"},"child":[]},{"tag":"path","attr":{"fill":"#2196F3","d":"M48,28v7.2c0,0.399-0.4,0.8-0.801,0.8H36.8c-0.2,0-0.8-0.4-0.8-0.8V18.8c0-0.5,0.432-0.8,0.831-0.8H47.2\r\n\t\tc0,0,0.8,0,0.8,0.8V25h-4v-2.2c0,0,0.1-0.8-0.8-0.8h-2.4c-0.5,0-0.8,0.4-0.8,0.8v8.4c0,0.399,0.5,0.8,0.8,0.8h2.4\r\n\t\tc0.399,0,0.8-0.4,0.8-0.8V28H48z"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"polygon","attr":{"fill":"#0D47A1","points":"45.799,15.98 46.9,15.98 46.9,12.881 48,12.881 48,11.98 44.799,11.98 44.799,12.881 \r\n\t\t45.799,12.881 \t"},"child":[]},{"tag":"path","attr":{"fill":"#0D47A1","d":"M44.014,14.476h-1.143v0.095c0,0.382-0.096,0.573-0.572,0.573c-0.475,0-0.57-0.191-0.57-0.762v-0.668\r\n\t\tc0-0.572,0-0.762,0.57-0.762c0.381,0,0.572,0.095,0.572,0.477v0.095h1.047v-0.095c0-1.047-0.381-1.429-1.523-1.429h-0.287\r\n\t\tc-1.141,0-1.523,0.382-1.523,1.618v0.764c0,1.142,0.381,1.618,1.523,1.618h0.383c1.047,0,1.428-0.477,1.428-1.43v-0.095H44.014z"},"child":[]},{"tag":"polygon","attr":{"fill":"#0D47A1","points":"29.516,12 28.717,14.9 27.816,12 26.217,12 26.217,16 27.316,16 27.316,13 28.115,16 29.217,16 \r\n\t\t30.115,13.1 30.115,16 31.115,16 31.115,12 \t"},"child":[]},{"tag":"path","attr":{"fill":"#0D47A1","d":"M38.713,12h-0.9h-0.898l-1.199,4h1.199l0.199-0.7h0.602h0.799l0.199,0.7h1.199L38.713,12z M37.914,14.5\r\n\t\th-0.4l0.4-1.7l0,0l0,0l0.398,1.7H37.914z"},"child":[]},{"tag":"path","attr":{"fill":"#0D47A1","d":"M33.92,12h-0.199H32.02v4h1.102v-1.1h0.6h0.199c1.102,0,1.5-0.4,1.5-1.4v-0.3C35.42,12.3,35.02,12,33.92,12\r\n\t\tz M34.32,13.6c0,0.4-0.1,0.5-0.4,0.5h-0.199h-0.6v-1.2h0.6h0.1c0.4,0,0.5,0.1,0.5,0.4V13.6z"},"child":[]},{"tag":"path","attr":{"fill":"#0D47A1","d":"M23.594,12h-0.286h-0.286c-1.143,0-1.523,0.382-1.523,1.618v0.762c0,1.144,0.381,1.62,1.523,1.62h0.286\r\n\t\th0.286c1.143,0,1.523-0.477,1.523-1.62v-0.762C25.117,12.382,24.737,12,23.594,12z M23.975,14.19c0,0.571,0,0.763-0.571,0.763\r\n\t\th-0.095h-0.095c-0.571,0-0.571-0.191-0.571-0.763v-0.572c0-0.57,0-0.762,0.571-0.762h0.095h0.095c0.571,0,0.571,0.191,0.571,0.762\r\n\t\tV14.19z"},"child":[]},{"tag":"path","attr":{"fill":"#0D47A1","d":"M20.422,14.477h-1.144v0.095c0,0.382-0.095,0.571-0.571,0.571c-0.476,0-0.571-0.189-0.571-0.762v-0.666\r\n\t\tc0-0.573,0-0.762,0.571-0.762c0.381,0,0.571,0.095,0.571,0.475v0.096h1.048v-0.096c0-1.047-0.381-1.428-1.523-1.428h-0.286\r\n\t\tc-1.143,0-1.524,0.381-1.524,1.618v0.763c0,1.143,0.381,1.619,1.524,1.619h0.381c1.048,0,1.429-0.477,1.429-1.429v-0.095H20.422z"},"child":[]}]}]})(props);
};
function FcCellPhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M12,40V10h20c2.2,0,4,1.8,4,4v26c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"},"child":[]},{"tag":"path","attr":{"fill":"#4FC3F7","d":"M32,13H16c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-8C33,13.4,32.6,13,32,13z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,29.6,19.6,30,19,30z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,29.6,25.6,30,25,30z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,29.6,31.6,30,31,30z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,34.6,19.6,35,19,35z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,34.6,25.6,35,25,35z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,34.6,31.6,35,31,35z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M19,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,39.6,19.6,40,19,40z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M25,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,39.6,25.6,40,25,40z"},"child":[]},{"tag":"path","attr":{"fill":"#B3E5FC","d":"M31,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,39.6,31.6,40,31,40z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M16,10h-4V4c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V10z"},"child":[]}]})(props);
};
function FcChargeBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#8BC34A"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#FFEB3B","points":"30,24 24.5,24 26.7,13 18,26 23.5,26 21.3,37"},"child":[]}]})(props);
};
function FcCheckmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#43A047","points":"40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"},"child":[]}]})(props);
};
function FcCircuit (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"},"child":[]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"path","attr":{"d":"M6.6,8l6,6c-0.4,0.6-0.6,1.3-0.6,2c0,2.2,1.8,4,4,4s4-1.8,4-4s-1.8-4-4-4c-0.7,0-1.4,0.2-2,0.6l-6-6 C7.4,6.9,6.9,7.4,6.6,8z M16,14.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S15.2,14.5,16,14.5z"},"child":[]},{"tag":"path","attr":{"d":"M41.4,40l-6-6c0.4-0.6,0.6-1.3,0.6-2c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4c0.7,0,1.4-0.2,2-0.6l6,6 C40.6,41.1,41.1,40.6,41.4,40z M32,33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S32.8,33.5,32,33.5z"},"child":[]},{"tag":"path","attr":{"d":"M16,36c2.2,0,4-1.8,4-4c0-0.7-0.2-1.4-0.6-2L30,19.4c0.6,0.4,1.3,0.6,2,0.6c2.2,0,4-1.8,4-4s-1.8-4-4-4 s-4,1.8-4,4c0,0.7,0.2,1.4,0.6,2L18,28.6c-0.6-0.4-1.3-0.6-2-0.6c-2.2,0-4,1.8-4,4S13.8,36,16,36z M32,14.5c0.8,0,1.5,0.7,1.5,1.5 s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S31.2,14.5,32,14.5z M16,30.5c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5 S15.2,30.5,16,30.5z"},"child":[]}]}]})(props);
};
function FcClapperboard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M43.4,8.3L4,15l-0.3-2c-0.4-2.2,1.1-4.2,3.3-4.6l31.6-5.3c2.2-0.4,4.2,1.1,4.6,3.3L43.4,8.3z"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M40,41H8c-2.2,0-4-1.8-4-4V15h40v22C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"g","attr":{"fill":"#9FA8DA"},"child":[{"tag":"polygon","attr":{"points":"18.8,6.4 23.7,11.7 27.7,11 22.7,5.7"},"child":[]},{"tag":"polygon","attr":{"points":"10.9,7.7 15.8,13 19.8,12.3 14.8,7.1"},"child":[]},{"tag":"polygon","attr":{"points":"26.7,5.1 31.6,10.3 35.5,9.7 30.6,4.4"},"child":[]},{"tag":"polygon","attr":{"points":"34.5,3.8 39.5,9 43.4,8.3 38.5,3.1"},"child":[]}]},{"tag":"circle","attr":{"fill":"#9FA8DA","cx":"7.5","cy":"11.5","r":"1.5"},"child":[]},{"tag":"g","attr":{"fill":"#9FA8DA"},"child":[{"tag":"polygon","attr":{"points":"40,15 36,21 40,21 44,15"},"child":[]},{"tag":"polygon","attr":{"points":"32,15 28,21 32,21 36,15"},"child":[]},{"tag":"polygon","attr":{"points":"24,15 20,21 24,21 28,15"},"child":[]},{"tag":"polygon","attr":{"points":"16,15 12,21 16,21 20,15"},"child":[]},{"tag":"polygon","attr":{"points":"8,15 4,21 8,21 12,15"},"child":[]}]}]})(props);
};
function FcClearFilters (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#F57C00","points":"29,23 19,23 7,9 41,9"},"child":[]},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"},"child":[]},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"36","fill":"#fff","width":"12","height":"4"},"child":[]}]})(props);
};
function FcClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#00ACC1","cx":"24","cy":"24","r":"20"},"child":[]},{"tag":"circle","attr":{"fill":"#eee","cx":"24","cy":"24","r":"16"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"11","width":"2","height":"13"},"child":[]},{"tag":"rect","attr":{"x":"26.1","y":"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"},"child":[]},{"tag":"circle","attr":{"fill":"#00ACC1","cx":"24","cy":"24","r":"1"},"child":[]}]})(props);
};
function FcCloseUpMode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2E7D32","d":"M5,24c0,18.9,14.8,19,17,19s4,0,4,0S24.1,26.5,5,24z"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"26","fill":"#388E3C","width":"4","height":"17"},"child":[]},{"tag":"path","attr":{"fill":"#C62828","d":"M34,16c0,5.1-5.2,8.2-8,8.2s-2-3.1-2-8.2s5-9.2,5-9.2S34,10.9,34,16z"},"child":[]},{"tag":"path","attr":{"fill":"#C62828","d":"M14,16c0,5.1,5.2,8.2,8,8.2s2-3.1,2-8.2s-5-9.2-5-9.2S14,10.9,14,16z"},"child":[]},{"tag":"path","attr":{"fill":"#E53935","d":"M24,27c-2.2-1.6-1.9-4.5,2.4-8.8C30.8,13.8,32,7,32,7s5,3.4,5,9C37,21.9,31.3,27,24,27z"},"child":[]},{"tag":"path","attr":{"fill":"#E53935","d":"M24,27c2.2-1.6,1.9-4.5-2.4-8.8C17.2,13.8,16,7,16,7s-5,3.4-5,9C11,21.9,16.7,27,24,27z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M30,16c0,6.1-2.7,11-6,11s-6-4.9-6-11s6-11,6-11S30,9.9,30,16z"},"child":[]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M22,43c0,0,1.8,0,4,0s17-0.1,17-19C23.9,26.5,22,43,22,43z"},"child":[]}]})(props);
};
function FcCloth (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF5722","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"},"child":[]},{"tag":"g","attr":{"fill":"#BF360C"},"child":[{"tag":"rect","attr":{"x":"6","y":"35","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"31","width":"36","height":"2"},"child":[]},{"tag":"path","attr":{"d":"M6.1,39c0.2,0.8,0.6,1.5,1.2,2h33.2c0.6-0.5,1-1.2,1.2-2H6.1z"},"child":[]},{"tag":"path","attr":{"d":"M6.1,9h35.7c-0.2-0.8-0.6-1.5-1.2-2H7.4C6.8,7.5,6.3,8.2,6.1,9z"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"23","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"27","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"15","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"11","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"19","width":"36","height":"2"},"child":[]}]},{"tag":"g","attr":{"fill":"#FF8A65"},"child":[{"tag":"rect","attr":{"x":"27","y":"6","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"27","y":"13","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"27","y":"29","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"6","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"29","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"9","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"6","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"25","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"9","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"21","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"17","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"33","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"27","y":"21","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"39","y":"33","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"39","y":"17","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"39","y":"25","width":"2","height":"6"},"child":[]},{"tag":"path","attr":{"d":"M39,6.1V7h1.6C40.2,6.6,39.6,6.3,39,6.1z"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"17","width":"2","height":"6"},"child":[]},{"tag":"path","attr":{"d":"M40.6,41H39v0.9C39.6,41.7,40.2,41.4,40.6,41z"},"child":[]},{"tag":"rect","attr":{"x":"35","y":"13","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"33","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"35","y":"29","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"39","y":"9","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"35","y":"21","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"25","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"35","y":"37","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"35","y":"6","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"41","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"23","y":"41","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"27","y":"37","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"37","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"17","width":"2","height":"6"},"child":[]},{"tag":"path","attr":{"d":"M9,41H7.4c0.5,0.4,1,0.7,1.6,0.9V41z"},"child":[]},{"tag":"path","attr":{"d":"M7.4,7H9V6.1C8.4,6.3,7.8,6.6,7.4,7z"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"33","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"25","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"9","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"29","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"17","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"33","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"9","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"6","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"6","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"25","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"41","width":"2","height":"1"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"21","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"6","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"37","width":"2","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"13","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"13","width":"2","height":"6"},"child":[]}]}]})(props);
};
function FcCollaboration (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z"},"child":[]},{"tag":"path","attr":{"fill":"#2196F3","d":"M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z"},"child":[]},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"31","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"36","cy":"31","r":"5"},"child":[]}]},{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"path","attr":{"d":"M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"},"child":[]},{"tag":"path","attr":{"d":"M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z"},"child":[]}]}]})(props);
};
function FcCollapse (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"},"child":[]}]})(props);
};
function FcCollect (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"22","y":"35","width":"4","height":"11"},"child":[]},{"tag":"polygon","attr":{"points":"24,29.6 31,38 17,38"},"child":[]}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"22","y":"2","width":"4","height":"11"},"child":[]},{"tag":"polygon","attr":{"points":"24,18.4 17,10 31,10"},"child":[]}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"2","y":"22","width":"11","height":"4"},"child":[]},{"tag":"polygon","attr":{"points":"18.4,24 10,31 10,17"},"child":[]}]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"rect","attr":{"x":"35","y":"22","width":"11","height":"4"},"child":[]},{"tag":"polygon","attr":{"points":"29.6,24 38,17 38,31"},"child":[]}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"24","cy":"24","r":"3"},"child":[]}]})(props);
};
function FcComboChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"37","y":"18","width":"6","height":"24"},"child":[]},{"tag":"rect","attr":{"x":"29","y":"26","width":"6","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"22","width":"6","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"32","width":"6","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"28","width":"6","height":"14"},"child":[]}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"16","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"18","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"11","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"13","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"40","cy":"9","r":"3"},"child":[]},{"tag":"polygon","attr":{"points":"39.1,7.2 31.8,10.9 23.5,8.8 15.5,15.8 8.5,14.1 7.5,17.9 16.5,20.2 24.5,13.2 32.2,15.1 40.9,10.8"},"child":[]}]}]})(props);
};
function FcCommandLine (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M41,6H7C6.4,6,6,6.4,6,7v35h36V7C42,6.4,41.6,6,41,6z"},"child":[]}]},{"tag":"rect","attr":{"x":"8","y":"13","fill":"#263238","width":"32","height":"27"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#76FF03","d":"M22,27.6c-0.1,1.1-0.4,1.9-1,2.5c-0.6,0.6-1.4,0.9-2.5,0.9c-1.1,0-2-0.4-2.6-1.1c-0.6-0.7-0.9-1.8-0.9-3.1\r\n\t\tv-1.6c0-1.3,0.3-2.4,0.9-3.1c0.6-0.7,1.5-1.1,2.6-1.1c1.1,0,1.9,0.3,2.5,0.9c0.6,0.6,0.9,1.4,1,2.6h-2c0-0.7-0.1-1.2-0.3-1.4\r\n\t\tc-0.2-0.3-0.6-0.4-1.1-0.4c-0.5,0-0.9,0.2-1.2,0.6c-0.2,0.4-0.3,1-0.4,1.8v1.8c0,1,0.1,1.6,0.3,2c0.2,0.4,0.6,0.5,1.1,0.5\r\n\t\tc0.5,0,0.9-0.1,1.1-0.4c0.2-0.3,0.3-0.7,0.3-1.4H22z"},"child":[]},{"tag":"path","attr":{"fill":"#76FF03","d":"M24,24c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7\r\n\t\tc0,0.3-0.1,0.5-0.3,0.7S25.3,25,25,25c-0.3,0-0.5-0.1-0.7-0.3S24,24.3,24,24z"},"child":[]},{"tag":"path","attr":{"fill":"#76FF03","d":"M24,30c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7\r\n\t\tc0,0.3-0.1,0.5-0.3,0.7S25.3,31,25,31c-0.3,0-0.5-0.1-0.7-0.3S24,30.3,24,30z"},"child":[]},{"tag":"path","attr":{"fill":"#76FF03","d":"M28,21h2l3,10h-2L28,21z"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#90A4AE","cx":"13.5","cy":"9.5","r":"1.5"},"child":[]},{"tag":"circle","attr":{"fill":"#90A4AE","cx":"9.5","cy":"9.5","r":"1.5"},"child":[]}]}]})(props);
};
function FcComments (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"},"child":[]}]})(props);
};
function FcCompactCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M40,39H8c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v22C44,37.2,42.2,39,40,39z"},"child":[]},{"tag":"circle","attr":{"fill":"#455A64","cx":"29","cy":"24","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"29","cy":"24","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#90CAF9","d":"M33.8,21c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C34.2,22.4,34.3,21.5,33.8,21z"},"child":[]},{"tag":"rect","attr":{"x":"8","y":"13","fill":"#ADD8FB","width":"6","height":"3"},"child":[]}]})(props);
};
function FcConferenceCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFA726","cx":"12","cy":"21","r":"5"},"child":[]},{"tag":"g","attr":{"fill":"#455A64"},"child":[{"tag":"path","attr":{"d":"M2,34.7c0,0,2.8-6.3,10-6.3s10,6.3,10,6.3V38H2V34.7z"},"child":[]},{"tag":"path","attr":{"d":"M46,34.7c0,0-2.8-6.3-10-6.3s-10,6.3-10,6.3V38h20V34.7z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"17","r":"6"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M36,34.1c0,0-3.3-7.5-12-7.5s-12,7.5-12,7.5V38h24V34.1z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFA726","cx":"36","cy":"21","r":"5"},"child":[]},{"tag":"circle","attr":{"fill":"#FFA726","cx":"12","cy":"21","r":"5"},"child":[]},{"tag":"circle","attr":{"fill":"#FFA726","cx":"36","cy":"21","r":"5"},"child":[]}]})(props);
};
function FcContacts (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF7043","d":"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"},"child":[]},{"tag":"path","attr":{"fill":"#BF360C","d":"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"},"child":[]},{"tag":"g","attr":{"fill":"#AB300B"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"20","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"},"child":[]}]}]})(props);
};
function FcCopyleft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M19.3,28.1c0.3,1.3,0.2,4.1,4.6,4.1c0.9,0,4.8,0.2,4.7-7.2v-1.6c0-6.7-3.2-7.2-4.8-7.2 c-2.3,0-4.2,0.6-4.5,4.3h-4.8c0.1-1.2,0.8-8.2,9.3-8.2c4.2,0,9.7,2.5,9.7,11.2V25c0,9.6-6.5,11.2-9.6,11.2c-3.7,0-8.7-1.6-9.3-8.1 H19.3z"},"child":[]}]})(props);
};
function FcCopyright (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M33.5,28.1c-0.6,6.4-5.6,8.1-9.3,8.1c-3.1,0-9.6-1.6-9.6-11.2v-1.5c0-8.7,5.5-11.2,9.7-11.2 c8.5,0,9.2,7,9.3,8.2h-4.8c-0.3-3.6-2.2-4.3-4.5-4.3c-1.6,0-4.8,0.5-4.8,7.2V25c-0.1,7.5,3.8,7.2,4.7,7.2c4.3,0,4.3-2.9,4.6-4.1 H33.5z"},"child":[]}]})(props);
};
function FcCrystalOscillator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"3","y":"28","width":"26","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"3","y":"16","width":"26","height":"4"},"child":[]}]},{"tag":"path","attr":{"fill":"#2196F3","d":"M43,11H20v26h23c1.1,0,2-0.9,2-2V13C45,11.9,44.1,11,43,11z"},"child":[]},{"tag":"path","attr":{"fill":"#64B5F6","d":"M20,9h-2v30h2c1.1,0,2-0.9,2-2V11C22,9.9,21.1,9,20,9z"},"child":[]}]})(props);
};
function FcCurrencyExchange (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#3F51B5","cx":"18","cy":"18","r":"15"},"child":[]},{"tag":"path","attr":{"fill":"#FFF59D","d":"M20.3,16v1.7h-3.8v1.4h3.8v1.7h-3.8c0,0.6,0.1,1.2,0.3,1.6c0.2,0.4,0.4,0.8,0.7,1c0.3,0.3,0.7,0.4,1.1,0.6 c0.4,0.1,0.9,0.2,1.4,0.2c0.4,0,0.7,0,1.1-0.1c0.4-0.1,0.7-0.1,1-0.3l0.4,2.7c-0.4,0.1-0.9,0.2-1.4,0.2c-0.5,0.1-1,0.1-1.5,0.1 c-0.9,0-1.8-0.1-2.6-0.4c-0.8-0.2-1.5-0.6-2-1.1c-0.6-0.5-1-1.1-1.4-1.9c-0.3-0.7-0.5-1.6-0.5-2.6h-1.9v-1.7h1.9v-1.4h-1.9V16h1.9 c0.1-1,0.3-1.8,0.6-2.6c0.4-0.7,0.8-1.4,1.4-1.9c0.6-0.5,1.3-0.9,2.1-1.1c0.8-0.3,1.7-0.4,2.6-0.4c0.4,0,0.9,0,1.3,0.1 c0.4,0.1,0.9,0.1,1.3,0.3l-0.4,2.7c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.7-0.1-1.1-0.1c-0.5,0-1,0.1-1.4,0.2c-0.4,0.1-0.8,0.3-1,0.6 c-0.3,0.3-0.5,0.6-0.7,1s-0.3,0.9-0.3,1.5H20.3z"},"child":[]},{"tag":"circle","attr":{"fill":"#4CAF50","cx":"30","cy":"30","r":"15"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M28.4,27c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.1,0.5c0.7,0.3,1.4,0.6,2,0.9 c0.6,0.3,1.1,0.7,1.5,1.1c0.4,0.4,0.8,0.9,1,1.4c0.2,0.5,0.4,1.2,0.4,1.9c0,0.7-0.1,1.3-0.3,1.8c-0.2,0.5-0.5,1-0.9,1.4 s-0.9,0.7-1.4,0.9c-0.6,0.2-1.2,0.4-1.8,0.5v2.2h-1.8v-2.2c-0.6-0.1-1.2-0.2-1.8-0.4s-1.1-0.5-1.5-1c-0.5-0.4-0.8-1-1.1-1.6 c-0.3-0.6-0.4-1.4-0.4-2.3h3.3c0,0.5,0.1,1,0.2,1.3c0.1,0.4,0.3,0.6,0.6,0.9c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.1,0.9,0.1 c0.4,0,0.7,0,0.9-0.1c0.3-0.1,0.5-0.2,0.7-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.8 c-0.1-0.2-0.2-0.5-0.4-0.7s-0.4-0.4-0.7-0.5c-0.3-0.2-0.7-0.3-1.1-0.5c-0.7-0.3-1.4-0.6-2-0.9c-0.6-0.3-1.1-0.7-1.5-1.1 c-0.4-0.4-0.8-0.9-1-1.4c-0.2-0.5-0.4-1.2-0.4-1.9c0-0.6,0.1-1.2,0.3-1.7c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,0.9-0.7,1.4-1 c0.5-0.2,1.2-0.4,1.8-0.5v-2.4h1.8v2.4c0.6,0.1,1.2,0.3,1.8,0.6c0.5,0.3,1,0.6,1.3,1.1c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2 h-3.3c0-0.9-0.2-1.6-0.6-2c-0.4-0.4-0.9-0.7-1.5-0.7c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.4-0.3,0.6 c-0.1,0.2-0.1,0.5-0.1,0.8C28.3,26.5,28.4,26.8,28.4,27z"},"child":[]}]})(props);
};
function FcCursor (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E0E0E0","d":"M27.8,39.7c-0.1,0-0.2,0-0.4-0.1c-0.2-0.1-0.4-0.3-0.6-0.5l-3.7-8.6l-4.5,4.2C18.5,34.9,18.3,35,18,35 c-0.1,0-0.3,0-0.4-0.1C17.3,34.8,17,34.4,17,34l0-22c0-0.4,0.2-0.8,0.6-0.9C17.7,11,17.9,11,18,11c0.2,0,0.5,0.1,0.7,0.3l16,15 c0.3,0.3,0.4,0.7,0.3,1.1c-0.1,0.4-0.5,0.6-0.9,0.7l-6.3,0.6l3.9,8.5c0.1,0.2,0.1,0.5,0,0.8c-0.1,0.2-0.3,0.5-0.5,0.6l-2.9,1.3 C28.1,39.7,27.9,39.7,27.8,39.7z"},"child":[]},{"tag":"path","attr":{"fill":"#212121","d":"M18,12l16,15l-7.7,0.7l4.5,9.8l-2.9,1.3l-4.3-9.9L18,34L18,12 M18,10c-0.3,0-0.5,0.1-0.8,0.2 c-0.7,0.3-1.2,1-1.2,1.8l0,22c0,0.8,0.5,1.5,1.2,1.8C17.5,36,17.8,36,18,36c0.5,0,1-0.2,1.4-0.5l3.4-3.2l3.1,7.3 c0.2,0.5,0.6,0.9,1.1,1.1c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2l2.9-1.3c0.5-0.2,0.9-0.6,1.1-1.1c0.2-0.5,0.2-1.1,0-1.5 l-3.3-7.2l4.9-0.4c0.8-0.1,1.5-0.6,1.7-1.3c0.3-0.7,0.1-1.6-0.5-2.1l-16-15C19,10.2,18.5,10,18,10L18,10z"},"child":[]}]})(props);
};
function FcCustomerSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M29,43v-4.6l2.6,0.5c2.9,0.6,5.6-1.5,5.8-4.4L38,28l2.9-1.2c1-0.4,1.4-1.6,0.8-2.6L38,18 c-0.6-7.6-4.9-15-16-15C10.6,3,5,11.4,5,20c0,3.7,1.3,6.9,3.3,9.6c1.8,2.5,2.7,5.5,2.7,8.5l0,4.8H29z"},"child":[]},{"tag":"polygon","attr":{"fill":"#FF9800","points":"29,43 29,38.4 22,37 22,43"},"child":[]},{"tag":"circle","attr":{"fill":"#784719","cx":"33.5","cy":"21.5","r":"1.5"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M21.4,3C12.3,3,5,10.3,5,19.4c0,11.1,6,11.4,6,18.6l2.6-0.9c2.1-0.7,3.9-2.3,4.7-4.4l2.8-6.8L27,23v-6 c0,0,7-3.8,7-10.3C31,4.2,25.7,3,21.4,3z"},"child":[]},{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"path","attr":{"d":"M21,2.1c-0.6,0-1,0.4-1,1v13.9c0,0.6,0.4,1,1,1s1-0.4,1-1V3.1C22,2.5,21.6,2.1,21,2.1z"},"child":[]},{"tag":"path","attr":{"d":"M36.9,31.9c-7.9,0-10.3-4.9-10.4-5.1c-0.2-0.5-0.8-0.7-1.3-0.5c-0.5,0.2-0.7,0.8-0.5,1.3 c0.1,0.3,3,6.3,12.2,6.3c0.6,0,1-0.4,1-1S37.4,31.9,36.9,31.9z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#37474F","cx":"37","cy":"33","r":"2"},"child":[]},{"tag":"circle","attr":{"fill":"#37474F","cx":"21","cy":"23","r":"7"},"child":[]},{"tag":"circle","attr":{"fill":"#546E7A","cx":"21","cy":"23","r":"4"},"child":[]}]})(props);
};
function FcDam (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#81D4FA"},"child":[{"tag":"rect","attr":{"x":"24","y":"28","width":"18","height":"14"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"10","width":"12","height":"32"},"child":[]}]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M16,8h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,10,16,9.1,16,8z"},"child":[]},{"tag":"path","attr":{"d":"M16,14h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,16,16,15.1,16,14z"},"child":[]},{"tag":"path","attr":{"d":"M16,20h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,22,16,21.1,16,20z"},"child":[]},{"tag":"path","attr":{"d":"M16,26h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,28,16,27.1,16,26z"},"child":[]},{"tag":"path","attr":{"d":"M16,32h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,34,16,33.1,16,32z"},"child":[]},{"tag":"path","attr":{"d":"M16,38h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2H8c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C16.9,40,16,39.1,16,38z"},"child":[]},{"tag":"path","attr":{"d":"M40,32h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2 c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2 C40.9,34,40,33.1,40,32z"},"child":[]},{"tag":"path","attr":{"d":"M40,26h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2 c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2 C40.9,28,40,27.1,40,26z"},"child":[]},{"tag":"path","attr":{"d":"M40,38h-2c0,1.1-0.9,2-2,2s-2-0.9-2-2h-2c0,1.1-0.9,2-2,2v2c1.2,0,2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4 s2.3-0.5,3-1.4c0.7,0.8,1.8,1.4,3,1.4v-2C40.9,40,40,39.1,40,38z"},"child":[]}]},{"tag":"path","attr":{"fill":"#455A64","d":"M25.1,9.2L31.5,42H18V6h3.2C23.1,6,24.8,7.4,25.1,9.2z"},"child":[]}]})(props);
};
function FcDataBackup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"polygon","attr":{"points":"31,30 38,35.6 38,24.4"},"child":[]},{"tag":"path","attr":{"d":"M38,28c-0.3,0-0.7,0-1,0.1v4c0.3-0.1,0.7-0.1,1-0.1c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6 c0-0.3,0-0.6,0.1-0.9l-3.4-2.7C28.3,35.5,28,36.7,28,38c0,5.5,4.5,10,10,10s10-4.5,10-10S43.5,28,38,28z"},"child":[]}]}]})(props);
};
function FcDataConfiguration (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"path","attr":{"fill":"#607D8B","d":"M45.2,38.1c0.1-0.4,0.1-0.8,0.1-1.1s0-0.8-0.1-1.1l2.3-1.7c0.2-0.2,0.3-0.5,0.2-0.7l-2.3-3.9 c-0.1-0.2-0.4-0.3-0.7-0.2l-2.6,1.2c-0.6-0.5-1.3-0.9-2-1.2l-0.3-2.9c0-0.3-0.3-0.5-0.5-0.5h-4.5c-0.3,0-0.5,0.2-0.5,0.5l-0.3,2.9 c-0.7,0.3-1.4,0.7-2,1.2l-2.6-1.2c-0.3-0.1-0.6,0-0.7,0.2l-2.3,3.9c-0.1,0.2-0.1,0.6,0.2,0.7l2.3,1.7c-0.1,0.4-0.1,0.8-0.1,1.1 s0,0.8,0.1,1.1l-2.3,1.7c-0.2,0.2-0.3,0.5-0.2,0.7l2.3,3.9c0.1,0.2,0.4,0.3,0.7,0.2l2.6-1.2c0.6,0.5,1.3,0.9,2,1.2l0.3,2.9 c0,0.3,0.3,0.5,0.5,0.5h4.5c0.3,0,0.5-0.2,0.5-0.5l0.3-2.9c0.7-0.3,1.4-0.7,2-1.2l2.6,1.2c0.3,0.1,0.6,0,0.7-0.2l2.3-3.9 c0.1-0.2,0.1-0.6-0.2-0.7L45.2,38.1z M37,42.2c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2 C42.2,39.9,39.9,42.2,37,42.2z"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M37,31c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6s6-2.7,6-6C43,33.7,40.3,31,37,31z M37,40c-1.7,0-3-1.3-3-3 c0-1.7,1.3-3,3-3s3,1.3,3,3C40,38.7,38.7,40,37,40z"},"child":[]}]})(props);
};
function FcDataEncryption (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h25.1c1.3-1.3,4.9-0.9,4.9-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M34.4,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-2.4C40,33.5,37.5,31,34.4,31z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"polygon","attr":{"points":"43,46 41,48 39,48 37,46 37,35.4 43,35.4 43,40 42,41 43,42 43,43 42,44 43,45"},"child":[]},{"tag":"path","attr":{"d":"M47.5,28.5c-0.3-0.9-1-1.6-2-1.8C44.2,26.4,42.2,26,40,26s-4.2,0.4-5.5,0.6c-1,0.2-1.7,0.9-2,1.8 C32.3,29.4,32,30.6,32,32c0,1.4,0.3,2.6,0.5,3.5c0.3,0.9,1,1.6,2,1.8c1.3,0.3,3.2,0.6,5.5,0.6s4.2-0.4,5.5-0.6c1-0.2,1.7-0.9,2-1.8 c0.3-0.9,0.5-2.1,0.5-3.5C48,30.6,47.7,29.4,47.5,28.5z M42.9,31h-5.7c-0.6,0-1.1-0.5-1.1-1.1v-1.4c0-0.3,1.8-0.6,4-0.6 s4,0.3,4,0.6v1.4C44,30.5,43.5,31,42.9,31z"},"child":[]}]},{"tag":"rect","attr":{"x":"39","y":"37.1","fill":"#D68600","width":"1","height":"10.9"},"child":[]}]})(props);
};
function FcDataProtection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h25.1c1.3-1.3,4.9-0.9,4.9-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M34.4,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-2.4C40,33.5,37.5,31,34.4,31z"},"child":[]}]},{"tag":"path","attr":{"fill":"#009688","d":"M46,25H32c-1.1,0-2,0.9-2,2v11.8c0,1.3,0.6,2.4,1.6,3.2l7.4,5.5l7.4-5.5c1-0.8,1.6-1.9,1.6-3.2V27 C48,25.9,47.1,25,46,25z"},"child":[]}]})(props);
};
function FcDataRecovery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"35","y":"28","width":"6","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"35","width":"20","height":"6"},"child":[]}]}]})(props);
};
function FcDataSheet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M39,16v7h-6v-7h-2v7h-6v-7h-2v7h-7v2h7v6h-7v2h7v6h-7v2h25V16H39z M39,25v6h-6v-6H39z M25,25h6v6h-6V25z M25,33h6v6h-6V33z M33,39v-6h6v6H33z"},"child":[]},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"40,8 8,8 8,40 16,40 16,16 40,16"},"child":[]},{"tag":"path","attr":{"fill":"#0097A7","d":"M7,7v34h10V17h24V7H7z M9,23v-6h6v6H9z M15,25v6H9v-6H15z M17,9h6v6h-6V9z M25,9h6v6h-6V9z M15,9v6H9V9H15z M9,39v-6h6v6H9z M39,15h-6V9h6V15z"},"child":[]}]})(props);
};
function FcDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]}]})(props);
};
function FcDebian (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E91E63","d":"M26.763,24.548c-0.614,0.01,0.117,0.317,0.918,0.44c0.22-0.172,0.419-0.348,0.6-0.515\r\n\tC27.781,24.592,27.274,24.594,26.763,24.548 M30.054,23.727c0.364-0.5,0.631-1.055,0.723-1.624c-0.082,0.405-0.303,0.755-0.51,1.128\r\n\tc-1.146,0.721-0.108-0.43,0-0.865C29.035,23.913,30.098,23.293,30.054,23.727 M31.269,20.568c0.073-1.105-0.219-0.756-0.317-0.336\r\n\tC31.068,20.294,31.156,21.013,31.269,20.568 M24.439,5.478c0.327,0.058,0.706,0.104,0.653,0.183\r\n\tC25.449,5.582,25.531,5.51,24.439,5.478 M25.093,5.66l-0.232,0.047l0.215-0.017L25.093,5.66 M35.294,20.986\r\n\tc0.038,0.991-0.29,1.472-0.585,2.322l-0.529,0.266c-0.435,0.841,0.041,0.535-0.268,1.202c-0.679,0.603-2.055,1.883-2.496,2.004\r\n\tc-0.321-0.009,0.218-0.382,0.289-0.526c-0.906,0.62-0.728,0.934-2.113,1.313l-0.041-0.09c-3.419,1.607-8.166-1.576-8.103-5.928\r\n\tc-0.037,0.275-0.104,0.209-0.18,0.32c-0.175-2.237,1.033-4.486,3.073-5.403c1.995-0.987,4.335-0.58,5.763,0.75\r\n\tc-0.785-1.028-2.348-2.119-4.199-2.017c-1.814,0.029-3.51,1.182-4.077,2.434c-0.929,0.585-1.038,2.256-1.441,2.563\r\n\tc-0.545,4.003,1.024,5.733,3.68,7.768c0.417,0.282,0.118,0.326,0.175,0.541c-0.883-0.412-1.69-1.037-2.354-1.801\r\n\tc0.353,0.517,0.733,1.017,1.223,1.41c-0.831-0.279-1.942-2.013-2.267-2.084c1.435,2.567,5.818,4.502,8.113,3.541\r\n\tc-1.062,0.04-2.412,0.021-3.604-0.42c-0.501-0.257-1.183-0.791-1.062-0.893c3.133,1.171,6.369,0.887,9.078-1.286\r\n\tc0.689-0.537,1.443-1.449,1.662-1.464c-0.327,0.493,0.057,0.239-0.197,0.674c0.688-1.109-0.299-0.449,0.711-1.913l0.373,0.512\r\n\tc-0.139-0.917,1.143-2.033,1.012-3.489c0.291-0.445,0.326,0.478,0.015,1.502c0.434-1.136,0.113-1.317,0.224-2.254\r\n\tc0.121,0.315,0.279,0.648,0.359,0.981c-0.281-1.097,0.289-1.848,0.433-2.485c-0.142-0.063-0.435,0.485-0.503-0.812\r\n\tc0.01-0.562,0.156-0.295,0.214-0.435c-0.111-0.064-0.4-0.496-0.577-1.323c0.127-0.193,0.342,0.506,0.516,0.533\r\n\tc-0.112-0.655-0.304-1.159-0.313-1.665c-0.51-1.061-0.181,0.143-0.592-0.458c-0.543-1.687,0.449-0.39,0.514-1.156\r\n\tc0.82,1.188,1.289,3.029,1.504,3.792c-0.164-0.93-0.428-1.832-0.752-2.704c0.249,0.108-0.401-1.911,0.324-0.575\r\n\tc-0.772-2.848-3.314-5.511-5.65-6.76c0.286,0.262,0.646,0.591,0.517,0.642c-1.163-0.69-0.959-0.745-1.124-1.041\r\n\tc-0.946-0.383-1.01,0.034-1.636,0c-1.786-0.943-2.129-0.845-3.772-1.437l0.078,0.349c-1.184-0.394-1.379,0.146-2.657,0.002\r\n\tc-0.078-0.062,0.41-0.219,0.811-0.278c-1.143,0.15-1.09-0.228-2.208,0.042c0.277-0.197,0.566-0.322,0.861-0.486\r\n\tc-0.932,0.059-2.226,0.542-1.825,0.103c-1.521,0.676-4.22,1.63-5.735,3.051l-0.047-0.322c-0.694,0.835-3.028,2.492-3.215,3.57\r\n\tl-0.185,0.043c-0.361,0.613-0.595,1.305-0.881,1.935c-0.474,0.806-0.692,0.311-0.626,0.436c-0.929,1.883-1.39,3.467-1.79,4.768\r\n\tc0.284,0.424,0.007,2.558,0.113,4.264c-0.467,8.429,5.916,16.609,12.891,18.5c1.023,0.365,2.542,0.354,3.836,0.39\r\n\tc-1.525-0.438-1.722-0.232-3.209-0.749c-1.074-0.506-1.308-1.082-2.066-1.74l0.3,0.53c-1.49-0.526-0.867-0.652-2.078-1.034\r\n\tl0.321-0.424c-0.482-0.032-1.279-0.811-1.497-1.241l-0.528,0.021c-0.634-0.783-0.972-1.348-0.948-1.785l-0.17,0.305\r\n\tc-0.194-0.332-2.335-2.937-1.224-2.33c-0.207-0.188-0.481-0.307-0.779-0.85l0.227-0.258c-0.535-0.686-0.983-1.568-0.949-1.86\r\n\tc0.284,0.384,0.482,0.454,0.679,0.522c-1.351-3.349-1.426-0.187-2.448-3.409l0.216-0.019c-0.166-0.246-0.265-0.521-0.399-0.785\r\n\tl0.094-0.938c-0.972-1.125-0.272-4.781-0.132-6.783c0.097-0.816,0.811-1.684,1.354-3.045l-0.332-0.055\r\n\tc0.632-1.104,3.612-4.433,4.99-4.26c0.669-0.841-0.132-0.002-0.263-0.215c1.469-1.52,1.93-1.073,2.92-1.349\r\n\tc1.068-0.633-0.917,0.251-0.41-0.239c1.848-0.473,1.31-1.073,3.718-1.311c0.254,0.145-0.59,0.223-0.8,0.41\r\n\tc1.538-0.753,4.87-0.584,7.034,0.417c2.511,1.173,5.33,4.642,5.443,7.904l0.126,0.035c-0.063,1.298,0.198,2.798-0.257,4.175\r\n\tL35.294,20.986 M20.072,25.389l-0.086,0.431c0.403,0.547,0.724,1.142,1.237,1.567C20.853,26.664,20.577,26.364,20.072,25.389\r\n\t M21.023,25.353c-0.213-0.237-0.34-0.518-0.48-0.802c0.135,0.495,0.411,0.922,0.669,1.357L21.023,25.353 M37.877,21.688\r\n\tl-0.088,0.226c-0.166,1.174-0.523,2.332-1.068,3.412C37.324,24.189,37.714,22.947,37.877,21.688 M24.56,5.185\r\n\tC24.974,5.031,25.579,5.101,26.019,5c-0.573,0.048-1.144,0.079-1.706,0.151L24.56,5.185 M10.007,12.923\r\n\tc0.095,0.882-0.667,1.229,0.167,0.644C10.623,12.562,10,13.286,10.007,12.923 M9.028,17.016c0.191-0.592,0.226-0.943,0.3-1.285\r\n\tC8.797,16.41,9.084,16.553,9.028,17.016"},"child":[]}]})(props);
};
function FcDebt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8h0C5.6,14,2,17.6,2,22z"},"child":[]},{"tag":"g","attr":{"fill":"#263238"},"child":[{"tag":"path","attr":{"d":"M22.4,40.4c-0.6,2.5-1,3.6-2.4,3.6c-0.6,0-1.2-0.5-1.9-1.1c-1-0.8-2.2-1.9-4.1-1.9v2c1.1,0,1.9,0.7,2.8,1.4 c0.9,0.7,1.9,1.6,3.2,1.6c3.1,0,3.8-2.9,4.4-5.2C25,38.2,25.4,37,27,37v-2C23.7,35,22.9,38.1,22.4,40.4z"},"child":[]},{"tag":"polygon","attr":{"points":"14.4,40 10,40 10,44 14.1,44"},"child":[]}]},{"tag":"circle","attr":{"fill":"#4CAF50","cx":"36","cy":"36","r":"10"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M35,34c0.1,0.2,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.3c0.5,0.2,0.9,0.4,1.3,0.6 c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,0.9c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.4,0.2-0.8,0.3-1.2,0.3v1.5h-1.2v-1.5c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.6 c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.9-0.3-1.5h2.2c0,0.4,0,0.7,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.5-0.2-0.9-0.4-1.3-0.6 c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.4,0.1-0.8,0.2-1.2c0.1-0.3,0.3-0.7,0.6-0.9 c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.8-0.3,1.2-0.3v-1.6h1.2v1.6c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.6,0.4,0.9,0.7 c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.9,0.2,1.4h-2.2c0-0.6-0.1-1-0.4-1.3c-0.2-0.3-0.6-0.4-1-0.4c-0.2,0-0.4,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.4,0.3C35.1,32.7,35,32.8,35,33s-0.1,0.3-0.1,0.5C34.9,33.7,34.9,33.9,35,34z"},"child":[]}]})(props);
};
function FcDecision (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"path","attr":{"fill":"#0277BD","d":"M21.8,29.6c0-6.6,5.1-6.2,5.1-10.2c0-1-0.3-3-2.9-3c-2.8,0-3,2.3-3,2.8h-3.8c0-1,0.4-6,6.8-6 c6.5,0,6.7,5.1,6.7,6c0,4.9-5.4,5.6-5.4,10.3H21.8z M21.5,34.5c0-0.3,0.1-2.1,2.1-2.1c2,0,2.2,1.8,2.2,2.1c0,0.6-0.3,2-2.2,2 C21.8,36.5,21.5,35.1,21.5,34.5z"},"child":[]}]})(props);
};
function FcDeleteColumn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M30,5H18c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V9C34,6.8,32.2,5,30,5z M18,39V9h12l0,30 H18z"},"child":[]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"},"child":[]}]}]})(props);
};
function FcDeleteDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#D1C4E9"},"child":[{"tag":"path","attr":{"d":"M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"},"child":[]},{"tag":"path","attr":{"d":"M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"},"child":[]},{"tag":"path","attr":{"d":"M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"},"child":[]}]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"},"child":[]}]}]})(props);
};
function FcDeleteRow (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z"},"child":[]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"},"child":[]}]}]})(props);
};
function FcDepartment (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#C5CAE9","points":"42,42 6,42 6,9 24,2 42,9"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"42","fill":"#9FA8DA","width":"36","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"35","fill":"#BF360C","width":"8","height":"9"},"child":[]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"rect","attr":{"x":"31","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"35","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"35","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"11","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"11","width":"6","height":"5"},"child":[]}]}]})(props);
};
function FcDeployment (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#B0BEC5","d":"M37,42H5V32h32c2.8,0,5,2.2,5,5v0C42,39.8,39.8,42,37,42z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M10,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S11.7,34,10,34z M10,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C11,37.6,10.6,38,10,38z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M19,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S20.7,34,19,34z M19,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C20,37.6,19.6,38,19,38z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M37,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S38.7,34,37,34z M37,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C38,37.6,37.6,38,37,38z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M28,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S29.7,34,28,34z M28,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C29,37.6,28.6,38,28,38z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M35,31H11c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v22C37,30.1,36.1,31,35,31z"},"child":[]},{"tag":"path","attr":{"fill":"#8A5100","d":"M26.5,13h-7c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5v0 C28,12.3,27.3,13,26.5,13z"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M37,31H5v2h32c2.2,0,4,1.8,4,4s-1.8,4-4,4H5v2h32c3.3,0,6-2.7,6-6S40.3,31,37,31z"},"child":[]}]})(props);
};
function FcDiploma1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"4","y":"9","fill":"#E8EAF6","width":"40","height":"30"},"child":[]},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"polygon","attr":{"points":"30,34 32.8,34 27.8,29 25,31.8 30,36.8"},"child":[]},{"tag":"polygon","attr":{"points":"18,34 15.2,34 20.2,29 23,31.8 18,36.8"},"child":[]}]},{"tag":"rect","attr":{"x":"11","y":"15","fill":"#9FA8DA","width":"26","height":"4"},"child":[]},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M24,23c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,23,24,23z M24,31c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,31,24,31z"},"child":[]},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M3,8v32h42V8H3z M43,35c-1.7,0-3,1.3-3,3H8c0-1.7-1.3-3-3-3V13c1.7,0,3-1.3,3-3h32c0,1.7,1.3,3,3,3V35z"},"child":[]}]})(props);
};
function FcDiploma2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"9","y":"4","fill":"#FBE9E7","width":"30","height":"40"},"child":[]},{"tag":"g","attr":{"fill":"#F4511E"},"child":[{"tag":"polygon","attr":{"points":"30,37 32.8,37 27.8,32 25,34.8 30,39.8"},"child":[]},{"tag":"polygon","attr":{"points":"18,37 15.2,37 20.2,32 23,34.8 18,39.8"},"child":[]}]},{"tag":"rect","attr":{"x":"15","y":"13","fill":"#FF8A65","width":"18","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"20","fill":"#FF8A65","width":"18","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"#FF8A65","d":"M24,26c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,26,24,26z M24,34c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,34,24,34z"},"child":[]},{"tag":"path","attr":{"fill":"#FF8A65","d":"M8,3v42h32V3H8z M38,40c-1.7,0-3,1.3-3,3H13c0-1.7-1.3-3-3-3V8c1.7,0,3-1.3,3-3h22c0,1.7,1.3,3,3,3V40z"},"child":[]}]})(props);
};
function FcDisapprove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"22","y":"16.8","transform":"matrix(.707 -.707 .707 .707 -11.355 24.586)","width":"4","height":"18.5"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"16.8","transform":"matrix(.707 .707 -.707 .707 25.414 -9.355)","width":"4","height":"18.5"},"child":[]}]}]})(props);
};
function FcDisclaimer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"path","attr":{"d":"M13,22H8v-8.5c0-1.4,1.1-2.5,2.5-2.5h0c1.4,0,2.5,1.1,2.5,2.5V22z"},"child":[]},{"tag":"path","attr":{"d":"M20,22h-5V7.5C15,6.1,16.1,5,17.5,5h0C18.9,5,20,6.1,20,7.5V22z"},"child":[]},{"tag":"path","attr":{"d":"M27,22h-5V5.5C22,4.1,23.1,3,24.5,3h0C25.9,3,27,4.1,27,5.5V22z"},"child":[]},{"tag":"path","attr":{"d":"M34,22h-5V8.5C29,7.1,30.1,6,31.5,6h0C32.9,6,34,7.1,34,8.5V22z"},"child":[]},{"tag":"path","attr":{"d":"M32.1,43L27.1,38l10-10c1.4-1.4,3.6-1.4,4.9,0l0,0c1.4,1.4,1.4,3.6,0,4.9L32.1,43z"},"child":[]},{"tag":"path","attr":{"d":"M29,21c0,0.6-0.4,1-1,1s-1-0.4-1-1h-5c0,0.6-0.4,1-1,1s-1-0.4-1-1h-5c0,0.6-0.4,1-1,1s-1-0.4-1-1H8v16 c0,4.4,3.6,8,8,8h11.2c3.7,0,6.8-3,6.8-6.8V21H29z"},"child":[]}]},{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"rect","attr":{"x":"20.2","y":"25.5","transform":"matrix(.707 -.707 .707 .707 -16.897 25.224)","width":"3.5","height":"15"},"child":[]},{"tag":"rect","attr":{"x":"20.2","y":"25.6","transform":"matrix(.707 .707 -.707 .707 29.811 -5.877)","width":"3.5","height":"15"},"child":[]}]}]})(props);
};
function FcDislike (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]}]})(props);
};
function FcDisplay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#80DEEA","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"g","attr":{"fill":"#2962FF"},"child":[{"tag":"polygon","attr":{"points":"36,17 31,17 29,15 31,13 36,13 38,15"},"child":[]},{"tag":"polygon","attr":{"points":"36,35 31,35 29,33 31,31 36,31 38,33"},"child":[]},{"tag":"polygon","attr":{"points":"37,30 37,18 39,16 41,18 41,30 39,32"},"child":[]},{"tag":"polygon","attr":{"points":"26,30 26,18 28,16 30,18 30,30 28,32"},"child":[]},{"tag":"polygon","attr":{"points":"17,17 12,17 10,15 12,13 17,13 19,15"},"child":[]},{"tag":"polygon","attr":{"points":"17,35 12,35 10,33 12,31 17,31 19,33"},"child":[]},{"tag":"polygon","attr":{"points":"18,30 18,18 20,16 22,18 22,30 20,32"},"child":[]},{"tag":"polygon","attr":{"points":"7,30 7,18 9,16 11,18 11,30 9,32"},"child":[]}]}]})(props);
};
function FcDoNotInhale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA726","d":"M33.5,20C31.2,17.7,30,13.9,30,9c0-3.2,0-3,0-3H18c0,0,0-0.2,0,3c0,4.9-1.2,8.7-3.5,11 C12.1,20.2,9,22,9,25.4c0,4.5,5.1,4.6,6,4.6c1.2,0,6.1,4,8,4c0,0,0.7,0,1,0s1,0,1,0c1.9,0,6.8-4,8-4c0.9,0,6-0.1,6-4.6 C39,22,35.9,20.2,33.5,20z"},"child":[]},{"tag":"path","attr":{"fill":"#FFA726","d":"M33.5,20C31.2,17.7,30,13.9,30,9c0-3.2,0-3,0-3H18c0,0,0-0.2,0,3c0,4.9-1.2,8.7-3.5,11 C12.1,20.2,9,22,9,25.4c0,4.5,5.1,4.6,6,4.6c1.2,0,6.1,4,8,4c0,0,0.7,0,1,0s1,0,1,0c1.9,0,6.8-4,8-4c0.9,0,6-0.1,6-4.6 C39,22,35.9,20.2,33.5,20z"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M26,9c0-3.2,0-3,0-3h-4c0,0,0-0.2,0,3c0,4.9-3,19-3,19s1.6,2,5,2s5-2,5-2S26,13.9,26,9z"},"child":[]},{"tag":"path","attr":{"fill":"#CC861E","d":"M23,34c-3.3,0-6.4-3.1-8-4c0,0,0.7,0,1.8,0C19.9,30,21.3,34,23,34z"},"child":[]},{"tag":"path","attr":{"fill":"#CC861E","d":"M25,34c3.3,0,6.4-3.1,8-4c0,0-0.7,0-1.8,0C28.1,30,26.7,34,25,34z"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"polygon","attr":{"points":"18,35 22,39 14,39"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"38","width":"2","height":"4"},"child":[]},{"tag":"polygon","attr":{"points":"30,35 34,39 26,39"},"child":[]},{"tag":"rect","attr":{"x":"29","y":"38","width":"2","height":"4"},"child":[]}]}]})(props);
};
function FcDoNotInsert (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#7CB342"},"child":[{"tag":"polygon","attr":{"points":"31,29 24,36 17,29"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"7","width":"4","height":"25"},"child":[]},{"tag":"path","attr":{"d":"M42,18c-3.3,0-6,2.7-6,6v12c0,1.1-0.9,2-2,2H14c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1,0,2,0.9,2,2 v12c0,3.3,2.7,6,6,6h20c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h2v-4H42z"},"child":[]}]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]}]})(props);
};
function FcDoNotMix (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#00BCD4","points":"26.9,42 17,42 17,32.1"},"child":[]},{"tag":"polygon","attr":{"fill":"#00BCD4","points":"30,6 30,26.2 19.8,36.4 22.6,39.2 34,27.8 34,6"},"child":[]},{"tag":"polygon","attr":{"fill":"#2196F3","points":"15.9,31 6,31 6,21.1"},"child":[]},{"tag":"polygon","attr":{"fill":"#2196F3","points":"20.2,14 8.8,25.4 11.6,28.2 21.8,18 41,18 41,14"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]}]})(props);
};
function FcDocument (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"16","y":"21","width":"17","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"25","width":"13","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"29","width":"17","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"33","width":"13","height":"2"},"child":[]}]}]})(props);
};
function FcDonate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E69329","points":"11.7,21.6 16.8,31.5 26.3,27.6 30.7,14.9 15.9,15.7"},"child":[]},{"tag":"circle","attr":{"fill":"#546E7A","cx":"15","cy":"36","r":"7.8"},"child":[]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M15,27c-5,0-9,4-9,9c0,5,4,9,9,9s9-4,9-9C24,31,20,27,15,27z M15,43c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7 s7,3.1,7,7C22,39.9,18.9,43,15,43z"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"33","width":"2","height":"8"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"path","attr":{"d":"M12.9,36L12.9,36c1,1.9,3.2,2.7,5.1,1.7l16.5-8.5c1-0.5,1.7-1.2,2.2-1.9c1.7-3.2,5.6-10.7,8.2-17.2 l-18.2,8.7L21.9,26l-6.8,3.6C12.5,30.9,11.7,33.8,12.9,36z"},"child":[]},{"tag":"path","attr":{"d":"M30.2,3L13.7,9.3c-0.7,0.2-1.5,1-2.2,1.7l-5.6,7.5c-1,1.5-1.2,3.4-0.5,5.1c0.4,1,1.7,3.4,3.1,6.1 c1.6-1.7,3.9-2.7,6.5-2.7c0.4,0,0.9,0,1.3,0.1l-2.1-4.2l4.6-4.1h8c0,0,15.5-2.2,18.2-8.7L30.2,3z"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFCDD2","d":"M18.2,36c-1.3,0.6-2.8,0-3.3-1.3c-0.6-1.3,0-2.8,1.3-3.3C17.4,30.8,19.4,35.4,18.2,36z"},"child":[]}]})(props);
};
function FcDoughnutChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M24,30c-3.3,0-6-2.7-6-6s2.7-6,6-6V5C13.5,5,5,13.5,5,24s8.5,19,19,19c4.4,0,8.5-1.5,11.8-4.1l-8-10.2 C26.7,29.5,25.4,30,24,30z"},"child":[]},{"tag":"path","attr":{"fill":"#448AFF","d":"M30,24h13c0-10.5-8.5-19-19-19v13C27.3,18,30,20.7,30,24z"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M43,24H30c0,1.9-0.9,3.6-2.3,4.7l8,10.2C40.2,35.4,43,30,43,24z"},"child":[]}]})(props);
};
function FcDownLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"4,29 18,17.3 18,40.7"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,21V8h-8v13c0,2.2-1.8,4-4,4H13v8h17C36.6,33,42,27.6,42,21z"},"child":[]}]})(props);
};
function FcDownRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,29 30,17.3 30,40.7"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,21V8h8v13c0,2.2,1.8,4,4,4h17v8H18C11.4,33,6,27.6,6,21z"},"child":[]}]})(props);
};
function FcDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"24,44 12.3,30 35.7,30"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"6","width":"8","height":"27"},"child":[]}]}]})(props);
};
function FcDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,37.1 13,24 35,24"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"4","width":"8","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"10","width":"8","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"16","width":"8","height":"11"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"40","width":"36","height":"4"},"child":[]}]}]})(props);
};
function FcDribbble (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF4081","d":"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M33.061,26.273c-0.703-0.221-1.464,0.175-1.686,0.895c-0.824,2.658-2.316,5.419-2.993,5.57\r\n\tc-0.507,0-1.236-0.43-1.958-1.44c1.674-3.594,2.551-8.106,2.551-11.118c0-8.413-2.124-10.18-3.908-10.18\r\n\tc-3.757,0-3.8,9.912-3.8,10.012c0,1.166,0.042,2.248,0.121,3.256c-0.518-0.189-1.113-0.319-1.77-0.319\r\n\tc-3.86,0-5.618,3.809-5.618,7.347C14,33.63,15.871,37,20.046,37c1.972,0,3.634-1.291,4.975-3.221\r\n\tc1.188,1.235,2.432,1.696,3.36,1.696c2.923,0,4.858-5.233,5.556-7.486C34.16,27.27,33.767,26.502,33.061,26.273z M20.048,34.264\r\n\tc-3.031,0-3.36-2.775-3.36-3.969c0-0.188,0.034-4.611,2.932-4.611c1.144,0,2.022,0.885,2.022,0.885\r\n\tc0.065,0.07,0.137,0.131,0.212,0.184c0.375,1.904,0.904,3.426,1.516,4.632C22.366,33.123,21.203,34.264,20.048,34.264z\r\n\t M24.901,27.926c-0.559-1.93-0.946-4.521-0.946-7.914c0-3.126,0.666-6.068,1.219-7.073c0.424,0.644,1.115,2.65,1.115,7.241\r\n\tC26.289,22.616,25.75,25.446,24.901,27.926z"},"child":[]}]})(props);
};
function FcDvdLogo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#42A5F5","d":"M24.002,27c-12.154,0-22,1.343-22,3.006c0,1.653,9.845,2.994,22,2.994c12.156,0,22-1.341,22-2.994\r\n\tC46.002,28.343,36.158,27,24.002,27z M24.002,30.972c-2.863,0-5.191-0.494-5.191-1.104c0-0.609,2.329-1.104,5.191-1.104\r\n\tc2.862,0,5.193,0.495,5.193,1.104C29.195,30.478,26.864,30.972,24.002,30.972z"},"child":[]},{"tag":"path","attr":{"fill":"#1565C0","d":"M21.29,15l2.371,6.43L29.25,15h9.486c4.647,0,7.906,2.148,7.158,4.904c-0.745,2.756-5.178,4.904-9.803,4.904\r\n\th-6.295c0,0,0.141-0.043,0.172-0.126c0.246-0.944,1.707-6.264,1.725-6.347c0.02-0.102-0.105-0.133-0.105-0.133h4.572\r\n\tc0,0-0.088-0.006-0.125,0.133c-0.023,0.078-0.947,3.429-1.145,4.176c-0.023,0.094-0.162,0.139-0.162,0.139h1.094\r\n\tc2.594,0,5.047-0.828,5.563-2.748c0.473-1.752-1.244-2.746-4.039-2.746h-1.014l-4.375,0.004l-10.043,9.932l-3.845-9.754\r\n\tc0,0-0.036-0.066-0.065-0.147c-0.014-0.026-0.108-0.106-0.206-0.063c-0.065,0.036-0.074,0.117-0.066,0.146\r\n\tc0.036,0.066,0.042,0.08,0.048,0.111c0.569,0.93,0.467,2.009,0.33,2.52c-0.774,2.75-5.186,4.904-9.812,4.904H2.002\r\n\tc0,0,0.149-0.043,0.172-0.126c0.254-0.946,1.717-6.294,1.726-6.347c0.018-0.09-0.099-0.133-0.099-0.133h4.604\r\n\tc0,0-0.132,0.037-0.158,0.131c-0.024,0.078-0.954,3.432-1.151,4.178c-0.023,0.094-0.178,0.139-0.178,0.139h1.118\r\n\tc2.597,0,5.032-0.828,5.547-2.748c0.472-1.752-1.23-2.746-4.021-2.746H8.539h-4.45c0,0,0.125-0.059,0.147-0.139\r\n\tc0.123-0.443,0.497-1.834,0.515-1.899C4.771,15.047,4.646,15,4.646,15H21.29L21.29,15z"},"child":[]}]})(props);
};
function FcEditImage (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M31,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v17C44,35.2,38.2,41,31,41z"},"child":[]},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"},"child":[]},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"},"child":[]},{"tag":"path","attr":{"fill":"#E57373","d":"M47.7,29.1l-2.8-2.8c-0.4-0.4-1.1-0.4-1.6,0L42,27.6l4.4,4.4l1.3-1.3C48.1,30.3,48.1,29.6,47.7,29.1z"},"child":[]},{"tag":"rect","attr":{"x":"27.1","y":"35.1","transform":"matrix(.707 -.707 .707 .707 -16.508 36.511)","fill":"#FF9800","width":"17.4","height":"6.2"},"child":[]},{"tag":"rect","attr":{"x":"41.5","y":"27.8","transform":"matrix(-.707 .707 -.707 -.707 95.395 22.352)","fill":"#B0BEC5","width":"3.1","height":"6.2"},"child":[]},{"tag":"polygon","attr":{"fill":"#FFC107","points":"27.5,42.2 26,48 31.8,46.5"},"child":[]},{"tag":"polygon","attr":{"fill":"#37474F","points":"26.7,45 26,48 29,47.3"},"child":[]}]})(props);
};
function FcElectricalSensor (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B2EBF2","cx":"32","cy":"24","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#4DD0E1","d":"M32,12c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C44,17.4,38.6,12,32,12z M32,32 c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S36.4,32,32,32z"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"25.4,22 19.8,5.1 13.6,27.7 11.4,22 4,22 4,26 8.6,26 14.4,40.3 20.2,18.9 22.6,26 30,26 30,22"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"24","r":"4"},"child":[]}]}]})(props);
};
function FcElectricalThreshold (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"3","y":"12","fill":"#80DEEA","width":"42","height":"24"},"child":[]},{"tag":"rect","attr":{"x":"3","y":"23","fill":"#03A9F4","width":"42","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"none","stroke":"#3F51B5","strokeWidth":"4","strokeMiterlimit":"10","d":"M4,18l4.5-1.5c0.9-0.3,1.9,0.1,2.3,0.9l8.7,14.3 c0.7,1.2,2.4,1.3,3.2,0.2l2.3-2.8c0.5-0.6,1.4-0.9,2.2-0.6l3,1c1,0.3,2.1-0.2,2.5-1.1l4.3-10.1c0.5-1.1,1.9-1.6,2.9-0.9l4,2.7"},"child":[]}]})(props);
};
function FcElectricity (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M33.7,5L22,17l15,5L21.3,36.7l5.1,2.8L12,43l2.7-14.8l2.9,5.1L27,24l-15-5L25,5H33.7z"},"child":[]}]})(props);
};
function FcElectroDevices (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M39,43H9c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v30C43,41.2,41.2,43,39,43z"},"child":[]},{"tag":"path","attr":{"fill":"#80DEEA","d":"M33.2,5l-9.8,10.1L36,19.3L22.8,31.7l4.3,2.4L15,37l2.3-12.5l2.4,4.3l8-7.8L15,16.8L25.9,5H33.2z"},"child":[]}]})(props);
};
function FcElectronics (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z"},"child":[]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z"},"child":[]}]})(props);
};
function FcEmptyBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]}]})(props);
};
function FcEmptyFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"polygon","attr":{"points":"29,23 19,23 7,9 41,9"},"child":[]},{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"},"child":[]},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"},"child":[]}]}]})(props);
};
function FcEmptyTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#B39DDB","d":"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"},"child":[]},{"tag":"path","attr":{"fill":"#7E57C2","d":"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"},"child":[]}]})(props);
};
function FcEndCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M43.5,16.8l-2.3-2.3c-8.1-7.9-27.5-6.8-34.5,0l-2.3,2.3c-0.6,0.6-0.6,1.6,0,2.3l4.6,4.5 c0.6,0.6,1.7,0.6,2.3,0l5.1-4.9L16,13.4c1.6-1.6,14.4-1.6,16,0l-0.3,5.5l4.9,4.7c0.6,0.6,1.7,0.6,2.3,0l4.6-4.5 C44.2,18.4,44.2,17.4,43.5,16.8z"},"child":[]},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"polygon","attr":{"points":"24,40.5 16,31 32,31"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"24","width":"6","height":"7.5"},"child":[]}]}]})(props);
};
function FcEngineering (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#EF6C00","d":"M37.4,24.6l-11.6-2.2l-3.9-11.2l-3.8,1.3L22,23.6l-7.8,9l3,2.6l7.8-9l11.6,2.2L37.4,24.6z"},"child":[]},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"path","attr":{"d":"M24,19c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5s5-2.2,5-5C29,21.2,26.8,19,24,19z M24,26c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C26,25.1,25.1,26,24,26z"},"child":[]},{"tag":"path","attr":{"d":"M40.7,27c0.2-1,0.3-2,0.3-3c0-1-0.1-2-0.3-3l3.3-2.4c0.4-0.3,0.6-0.9,0.3-1.4L40,9.8 c-0.3-0.5-0.8-0.7-1.3-0.4L35,11c-1.5-1.3-3.3-2.3-5.2-3l-0.4-4.1c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9L18.2,8 c-1.9,0.7-3.7,1.7-5.2,3L9.3,9.3C8.8,9.1,8.2,9.3,8,9.8l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4L7.3,21C7.1,22,7,23,7,24 c0,1,0.1,2,0.3,3L4,29.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,38.2c0.3,0.5,0.8,0.7,1.3,0.4L13,37c1.5,1.3,3.3,2.3,5.2,3l0.4,4.1 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.4-4.1c1.9-0.7,3.7-1.7,5.2-3l3.7,1.7c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L40.7,27z M24,35c-6.1,0-11-4.9-11-11c0-6.1,4.9-11,11-11s11,4.9,11,11C35,30.1,30.1,35,24,35z"},"child":[]}]}]})(props);
};
function FcEnteringHeavenAlive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"17","y":"29","fill":"#039BE5","width":"14","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"33","fill":"#039BE5","width":"22","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"37","fill":"#039BE5","width":"30","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"41","fill":"#039BE5","width":"38","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"#81D4FA","d":"M35,13c-0.4,0-0.8,0-1.2,0.1C32.9,8.5,28.9,5,24,5c-4.1,0-7.6,2.5-9.2,6c-0.3,0-0.5,0-0.8,0 c-4.4,0-8,3.6-8,8s3.6,8,8,8c2.4,0,18.5,0,21,0c3.9,0,7-3.1,7-7C42,16.1,38.9,13,35,13z"},"child":[]},{"tag":"path","attr":{"fill":"#039BE5","d":"M28,21c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,0.5,0,6,0,6h8C28,27,28,21.5,28,21z"},"child":[]}]})(props);
};
function FcExpand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"},"child":[]}]})(props);
};
function FcExpired (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#00ACC1","cx":"17","cy":"17","r":"14"},"child":[]},{"tag":"circle","attr":{"fill":"#eee","cx":"17","cy":"17","r":"11"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"8","width":"2","height":"9"},"child":[]},{"tag":"rect","attr":{"x":"18.2","y":"16","transform":"matrix(-.707 .707 -.707 -.707 46.834 19.399)","width":"2.4","height":"6.8"},"child":[]},{"tag":"circle","attr":{"cx":"17","cy":"17","r":"2"},"child":[]},{"tag":"circle","attr":{"fill":"#00ACC1","cx":"17","cy":"17","r":"1"},"child":[]},{"tag":"path","attr":{"fill":"#FFC107","d":"M11.9,42l14.4-24.1c0.8-1.3,2.7-1.3,3.4,0L44.1,42c0.8,1.3-0.2,3-1.7,3H13.6C12.1,45,11.1,43.3,11.9,42z"},"child":[]},{"tag":"path","attr":{"fill":"#263238","d":"M26.4,39.9c0-0.2,0-0.4,0.1-0.6s0.2-0.3,0.3-0.5s0.3-0.2,0.5-0.3s0.4-0.1,0.6-0.1s0.5,0,0.7,0.1 s0.4,0.2,0.5,0.3s0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6s0,0.4-0.1,0.6s-0.2,0.3-0.3,0.5s-0.3,0.2-0.5,0.3s-0.4,0.1-0.7,0.1 s-0.5,0-0.6-0.1s-0.4-0.2-0.5-0.3s-0.2-0.3-0.3-0.5S26.4,40.1,26.4,39.9z M29.2,36.8h-2.3L26.5,27h3L29.2,36.8z"},"child":[]}]})(props);
};
function FcExport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCCBC","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"},"child":[]},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"polygon","attr":{"points":"42.7,24 32,33 32,15"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"21","width":"23","height":"6"},"child":[]}]}]})(props);
};
function FcExternal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B2DFDB","cx":"24","cy":"31","r":"14"},"child":[]},{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"polygon","attr":{"points":"24,3.3 33,14 15,14"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"23"},"child":[]}]}]})(props);
};
function FcFactoryBreakdown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E64A19","points":"29,23 29,17 21,21 21,23 17,23 17,27 13,27 13,23 5,23 5,43 33,43 33,23"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"27","fill":"#992B0A","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"35","fill":"#992B0A","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"35","fill":"#992B0A","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"35","fill":"#992B0A","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"27","fill":"#992B0A","width":"4","height":"4"},"child":[]},{"tag":"polygon","attr":{"fill":"#BF360C","points":"41.2,5 38,5 38,7 36,7 36,9 33.7,9 32,43 43,43"},"child":[]}]})(props);
};
function FcFactory (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#BF360C","d":"M41.2,5h-7.3L32,43h11L41.2,5z"},"child":[]},{"tag":"path","attr":{"fill":"#E64A19","d":"M33,23h-4v-6l-12,6v-6L5,23v20h28V23z"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"27","fill":"#FFC107","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"27","fill":"#FFC107","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"27","fill":"#FFC107","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"35","fill":"#FFC107","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"35","fill":"#FFC107","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"35","fill":"#FFC107","width":"4","height":"4"},"child":[]}]})(props);
};
function FcFaq (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#558B2F","d":"M15,40h23l6,6V25c0-2.2-1.8-4-4-4H15c-2.2,0-4,1.8-4,4v11C11,38.2,12.8,40,15,40z"},"child":[]},{"tag":"path","attr":{"fill":"#1B5E20","d":"M28.8,32.8h-3.6l-0.7,2.1h-2.2l3.7-10h1.9l3.7,10h-2.2L28.8,32.8z M25.7,31.2h2.5L27,27.4L25.7,31.2z"},"child":[]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M33,25H10l-6,6V8c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v13C37,23.2,35.2,25,33,25z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M25.4,14.2c0,1-0.2,1.8-0.5,2.5c-0.3,0.7-0.7,1.3-1.3,1.7l1.7,1.3L24,20.9l-2.2-1.7c-0.2,0-0.5,0.1-0.8,0.1 c-0.6,0-1.2-0.1-1.8-0.3c-0.5-0.2-1-0.6-1.4-1c-0.4-0.4-0.7-1-0.9-1.6c-0.2-0.6-0.3-1.3-0.3-2.1v-0.4c0-0.8,0.1-1.5,0.3-2.1 c0.2-0.6,0.5-1.2,0.9-1.6c0.4-0.4,0.8-0.8,1.4-1c0.5-0.2,1.1-0.3,1.8-0.3c0.6,0,1.2,0.1,1.8,0.3c0.5,0.2,1,0.6,1.4,1 c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.3,0.3,2.1V14.2z M23.2,13.7c0-1.1-0.2-1.9-0.6-2.4c-0.4-0.6-0.9-0.8-1.6-0.8 c-0.7,0-1.3,0.3-1.6,0.8c-0.4,0.6-0.6,1.4-0.6,2.4v0.5c0,0.5,0.1,1,0.2,1.4c0.1,0.4,0.2,0.8,0.4,1c0.2,0.3,0.4,0.5,0.7,0.6 c0.3,0.1,0.6,0.2,0.9,0.2c0.7,0,1.3-0.3,1.6-0.8c0.4-0.6,0.6-1.4,0.6-2.5V13.7z"},"child":[]}]})(props);
};
function FcFeedIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M38,24v12c0,1.1-0.9,2-2,2H12c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6h0v4h0c1.1,0,2,0.9,2,2v12 c0,3.3,2.7,6,6,6h24c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h0v-4h0C40.7,18,38,20.7,38,24z"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"38.6,5.6 29,15.2 29,28 33,28 33,16.8 41.4,8.4"},"child":[]},{"tag":"polygon","attr":{"points":"6.6,8.4 15,16.8 15,28 19,28 19,15.2 9.4,5.6"},"child":[]},{"tag":"polygon","attr":{"points":"37,27 31,33 25,27"},"child":[]},{"tag":"polygon","attr":{"points":"23,27 17,33 11,27"},"child":[]}]}]})(props);
};
function FcFeedback (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"rect","attr":{"x":"12","y":"11","fill":"#fff","width":"24","height":"22"},"child":[]},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"24,13.6 18,21.4 30,21.4"},"child":[]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"24,28 26,26.7 26,20 22,20 22,26.7"},"child":[]}]})(props);
};
function FcFile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"},"child":[]}]})(props);
};
function FcFilingCabinet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"12","y":"44","fill":"#263238","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"44","fill":"#263238","width":"4","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"},"child":[]},{"tag":"path","attr":{"fill":"#B0BEC5","d":"M12,17V8c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v9H12z"},"child":[]},{"tag":"rect","attr":{"x":"12","y":"19","fill":"#B0BEC5","width":"24","height":"10"},"child":[]},{"tag":"path","attr":{"fill":"#B0BEC5","d":"M12,40v-9h24v9c0,0.6-0.4,1-1,1H13C12.4,41,12,40.6,12,40z"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"11","fill":"#546E7A","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"23","fill":"#546E7A","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"35","fill":"#546E7A","width":"8","height":"2"},"child":[]}]})(props);
};
function FcFilledFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#F57C00","points":"29,23 19,23 7,9 41,9"},"child":[]},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"polygon","attr":{"points":"29,38 19,44 19,23 29,23"},"child":[]},{"tag":"path","attr":{"d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"},"child":[]}]}]})(props);
};
function FcFilmReel (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z"},"child":[]},{"tag":"circle","attr":{"fill":"#90A4AE","cx":"24","cy":"24","r":"19"},"child":[]},{"tag":"circle","attr":{"fill":"#37474F","cx":"24","cy":"24","r":"2"},"child":[]},{"tag":"g","attr":{"fill":"#253278"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"14","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"34","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"34","cy":"24","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"24","r":"5"},"child":[]}]}]})(props);
};
function FcFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M45,9H3v30h42V9z M22,37v-4h4v4H22z M30,37v-4h4v4H30z M38,37v-4h4v4H38z M14,37v-4h4v4H14z M6,37v-4h4v4H6 z M22,15v-4h4v4H22z M30,15v-4h4v4H30z M38,15v-4h4v4H38z M14,15v-4h4v4H14z M6,15v-4h4v4H6z"},"child":[]}]})(props);
};
function FcFinePrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"33,42 5,42 5,4 24,4 33,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"31.5,14 23,14 23,5.5"},"child":[]},{"tag":"rect","attr":{"x":"38.3","y":"34.8","transform":"matrix(.707 -.707 .707 .707 -17.177 40.055)","fill":"#616161","width":"2.8","height":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#616161","cx":"28","cy":"29","r":"11"},"child":[]},{"tag":"circle","attr":{"fill":"#90CAF9","cx":"28","cy":"29","r":"9"},"child":[]},{"tag":"rect","attr":{"x":"39.5","y":"37.6","transform":"matrix(.707 -.707 .707 .707 -17.661 41.223)","fill":"#37474F","width":"2.8","height":"8.7"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M30,31h-9.7c0.4,1.6,1.3,3,2.5,4H30V31z"},"child":[]},{"tag":"path","attr":{"d":"M20.3,27H30v-4h-7.3C21.5,24,20.7,25.4,20.3,27z"},"child":[]},{"tag":"path","attr":{"d":"M20.1,20H11v2h7.3C18.8,21.3,19.4,20.6,20.1,20z"},"child":[]},{"tag":"path","attr":{"d":"M17.1,24H11v2h5.4C16.6,25.3,16.8,24.6,17.1,24z"},"child":[]},{"tag":"path","attr":{"d":"M16,29c0-0.3,0-0.7,0.1-1H11v2h5.1C16,29.7,16,29.3,16,29z"},"child":[]},{"tag":"path","attr":{"d":"M16.4,32H11v2h6.1C16.8,33.4,16.6,32.7,16.4,32z"},"child":[]}]}]})(props);
};
function FcFlashAuto (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M40.8,14.5h-4.3L35.6,17H33l4.5-12h2.3l4.5,12h-2.6L40.8,14.5z M37.1,12.5h3L38.6,8L37.1,12.5z"},"child":[]}]})(props);
};
function FcFlashOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]}]})(props);
};
function FcFlashOn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"},"child":[]}]})(props);
};
function FcFlowChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"6","fill":"#3F51B5","width":"14","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"32","fill":"#00BCD4","width":"10","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"32","fill":"#00BCD4","width":"10","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"32","fill":"#00BCD4","width":"10","height":"10"},"child":[]}]})(props);
};
function FcFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA000","d":"M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"},"child":[]},{"tag":"path","attr":{"fill":"#FFCA28","d":"M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"},"child":[]}]})(props);
};
function FcFrame (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3949AB","d":"M40.6,40.1h-1.4c-0.2,0-0.3,0-0.5,0l-3.1-0.4c-2.4-0.3-4.9-0.2-7.3,0.4l-3.6,0.9c-0.5,0.1-1.1,0.1-1.6,0 L19.6,40c-2.4-0.6-4.8-0.7-7.3-0.4l-3.1,0.4c-0.2,0-0.3,0-0.5,0H7.4c-1.9,0-3.4-1.5-3.4-3.4v0c0-0.4,0.1-0.9,0.2-1.3l0.2-0.6 c1-2.5,1.1-5.3,0.4-7.9l-0.6-2c-0.2-0.7-0.2-1.3,0-2l0.3-0.8c0.9-2.7,0.8-5.7-0.2-8.4l-0.1-0.3C4.1,13.1,4,12.7,4,12.3v-1 c0-1.9,1.5-3.4,3.4-3.4l1.4,0c0.2,0,0.3,0,0.5,0l3.1,0.4c2.4,0.3,4.9,0.2,7.3-0.4l3.6-0.9c0.5-0.1,1.1-0.1,1.6,0L28.4,8 c2.4,0.6,4.8,0.7,7.3,0.4l3.1-0.4c0.2,0,0.3,0,0.5,0l1.4,0c1.9,0,3.4,1.5,3.4,3.4v1c0,0.4-0.1,0.9-0.2,1.3l-0.1,0.3 c-1.1,2.7-1.2,5.6-0.2,8.4l0.3,0.8c0.2,0.6,0.2,1.3,0,2l-0.6,2c-0.7,2.6-0.6,5.4,0.4,7.9l0.2,0.6c0.2,0.4,0.2,0.8,0.2,1.3v0 C44,38.6,42.5,40.1,40.6,40.1z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M38,36H10c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h28c0.6,0,1,0.4,1,1v22C39,35.6,38.6,36,38,36z"},"child":[]}]})(props);
};
function FcFullBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#8BC34A"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]}]})(props);
};
function FcFullTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF8A65","points":"24,21.3 12.7,10 26,1.7 38.3,10"},"child":[]},{"tag":"polygon","attr":{"fill":"#FFAB91","points":"24,21.3 12.7,10 17,4.7 38.3,10"},"child":[]},{"tag":"path","attr":{"fill":"#B39DDB","d":"M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"},"child":[]},{"tag":"path","attr":{"fill":"#7E57C2","d":"M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"},"child":[]}]})(props);
};
function FcGallery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E65100","d":"M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"},"child":[]},{"tag":"path","attr":{"fill":"#F57C00","d":"M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"30","cy":"16","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#942A09","points":"17,17.9 8,31 26,31"},"child":[]},{"tag":"polygon","attr":{"fill":"#BF360C","points":"28,23.5 22,31 34,31"},"child":[]}]})(props);
};
function FcGenealogy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"40,9 40,7 31,7 31,12 24,12 15,12 15,23 8,23 8,25 15,25 15,36 24,36 31,36 31,41 40,41 40,39 33,39 33,31 40,31 40,29 31,29 31,34 24,34 17,34 17,14 24,14 31,14 31,19 40,19 40,17 33,17 33,9"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"20","fill":"#00BCD4","width":"8","height":"8"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"rect","attr":{"x":"36","y":"14","width":"8","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"4","width":"8","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"9","width":"8","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"31","width":"8","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"36","width":"8","height":"8"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"26","width":"8","height":"8"},"child":[]}]}]})(props);
};
function FcGenericSortingAsc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"6","y":"6","fill":"#2196F3","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"14","fill":"#2196F3","width":"12","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"22","fill":"#2196F3","width":"20","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"30","fill":"#2196F3","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"38","fill":"#2196F3","width":"36","height":"4"},"child":[]}]})(props);
};
function FcGenericSortingDesc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"6","y":"38","fill":"#2196F3","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"30","fill":"#2196F3","width":"12","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"22","fill":"#2196F3","width":"20","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"14","fill":"#2196F3","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#2196F3","width":"36","height":"4"},"child":[]}]})(props);
};
function FcGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#7CB342","d":"M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"},"child":[]},{"tag":"path","attr":{"fill":"#0277BD","d":"M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"},"child":[]}]})(props);
};
function FcGoodDecision (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"22","y":"16","width":"4","height":"18"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"23","width":"18","height":"4"},"child":[]}]}]})(props);
};
function FcGoogle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"},"child":[]},{"tag":"path","attr":{"fill":"#FF3D00","d":"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"},"child":[]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"},"child":[]},{"tag":"path","attr":{"fill":"#1976D2","d":"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"},"child":[]}]})(props);
};
function FcGraduationCap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"9","y":"20","width":"30","height":"13"},"child":[]},{"tag":"ellipse","attr":{"cx":"24","cy":"33","rx":"15","ry":"6"},"child":[]}]},{"tag":"path","attr":{"fill":"#78909C","d":"M23.1,8.2L0.6,18.1c-0.8,0.4-0.8,1.5,0,1.9l22.5,9.9c0.6,0.2,1.2,0.2,1.8,0l22.5-9.9c0.8-0.4,0.8-1.5,0-1.9 L24.9,8.2C24.3,7.9,23.7,7.9,23.1,8.2z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M43.2,20.4l-20-3.4c-0.5-0.1-1.1,0.3-1.2,0.8c-0.1,0.5,0.3,1.1,0.8,1.2L42,22.2V37c0,0.6,0.4,1,1,1 s1-0.4,1-1V21.4C44,20.9,43.6,20.5,43.2,20.4z"},"child":[]},{"tag":"circle","attr":{"cx":"43","cy":"37","r":"2"},"child":[]},{"tag":"path","attr":{"d":"M46,40c0,1.7-3,6-3,6s-3-4.3-3-6s1.3-3,3-3S46,38.3,46,40z"},"child":[]}]}]})(props);
};
function FcGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M7,7v34h34V7H7z M39,15h-6V9h6V15z M25,15V9h6v6H25z M31,17v6h-6v-6H31z M23,15h-6V9h6V15z M23,17v6h-6v-6 H23z M15,23H9v-6h6V23z M15,25v6H9v-6H15z M17,25h6v6h-6V25z M23,33v6h-6v-6H23z M25,33h6v6h-6V33z M25,31v-6h6v6H25z M33,25h6v6h-6 V25z M33,23v-6h6v6H33z M15,9v6H9V9H15z M9,33h6v6H9V33z M33,39v-6h6v6H33z"},"child":[]}]})(props);
};
function FcHeadset (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#0097A7","d":"M24,5C14.1,5,6,13.1,6,23v15h4V23c0-7.7,6.3-14,14-14s14,6.3,14,14v15h4V23C42,13.1,33.9,5,24,5z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M38,43h-4V31h4c2.2,0,4,1.8,4,4v4C42,41.2,40.2,43,38,43z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M10,43h4V31h-4c-2.2,0-4,1.8-4,4v4C6,41.2,7.8,43,10,43z"},"child":[]}]})(props);
};
function FcHeatMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"},"child":[]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"14","cy":"11","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"11","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"39","cy":"11","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"23","cy":"11","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"33","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"30","cy":"33","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"22","cy":"33","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"33","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"22","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"39","cy":"22","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"22","r":"3"},"child":[]}]}]})(props);
};
function FcHighBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2V13h24v29C36,43.1,35.1,44,34,44z"},"child":[]}]})(props);
};
function FcHighPriority (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M21.6,32.7c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.2,1-0.2 s0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9s-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.7 c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.6,0.2-1,0.2s-0.7-0.1-1-0.2s-0.5-0.3-0.8-0.5c-0.2-0.2-0.4-0.4-0.5-0.7S21.6,33.1,21.6,32.7z M25.8,28.1h-3.6L21.7,13h4.6L25.8,28.1z"},"child":[]}]})(props);
};
function FcHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#E8EAF6","points":"42,39 6,39 6,23 24,6 42,23"},"child":[]},{"tag":"g","attr":{"fill":"#C5CAE9"},"child":[{"tag":"polygon","attr":{"points":"39,21 34,16 34,9 39,9"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"39","width":"36","height":"5"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#B71C1C","points":"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"28","fill":"#D84315","width":"12","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"17","fill":"#01579B","width":"6","height":"6"},"child":[]},{"tag":"path","attr":{"fill":"#FF8A65","d":"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"},"child":[]}]})(props);
};
function FcIcons8Cup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M40,14H8l3.8,28.3c0.1,1,1,1.7,2,1.7h20.5c1,0,1.8-0.7,2-1.7L40,14z"},"child":[]},{"tag":"g","attr":{"fill":"#81C784"},"child":[{"tag":"path","attr":{"d":"M42,14H6v-3c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V14z"},"child":[]},{"tag":"path","attr":{"d":"M37.2,10H10.8l1.7-4.7c0.3-0.8,1-1.3,1.9-1.3h19.2c0.8,0,1.6,0.5,1.9,1.3L37.2,10z"},"child":[]}]},{"tag":"path","attr":{"fill":"#E8F5E9","d":"M28,28.5c1.2-1.1,2-2.7,2-4.5c0-3.3-2.7-6-6-6c-3.3,0-6,2.7-6,6c0,1.8,0.8,3.4,2,4.5c-1.2,1.1-2,2.7-2,4.5 c0,3.3,2.7,6,6,6c3.3,0,6-2.7,6-6C30,31.2,29.2,29.6,28,28.5z M24,36c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3 C27,34.7,25.7,36,24,36z M24,27c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C27,25.7,25.7,27,24,27z"},"child":[]}]})(props);
};
function FcIdea (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFF59D","cx":"24","cy":"22","r":"20"},"child":[]},{"tag":"path","attr":{"fill":"#FBC02D","d":"M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF59D","d":"M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"},"child":[]},{"tag":"circle","attr":{"fill":"#5C6BC0","cx":"24","cy":"44","r":"3"},"child":[]},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"},"child":[]},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"path","attr":{"d":"M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"},"child":[]},{"tag":"polygon","attr":{"points":"18,38.7 18,40.7 30,39 30,37"},"child":[]}]}]})(props);
};
function FcImageFile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"},"child":[]},{"tag":"polygon","attr":{"fill":"#1565C0","points":"21,23 14,33 28,33"},"child":[]},{"tag":"polygon","attr":{"fill":"#1976D2","points":"28,26.4 23,33 33,33"},"child":[]},{"tag":"circle","attr":{"fill":"#1976D2","cx":"31.5","cy":"24.5","r":"1.5"},"child":[]}]})(props);
};
function FcImport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F8BBD0","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"},"child":[]},{"tag":"g","attr":{"fill":"#E91E63"},"child":[{"tag":"polygon","attr":{"points":"13.3,24 24,15 24,33"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"21","width":"23","height":"6"},"child":[]}]}]})(props);
};
function FcInTransit (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M44,36H30V16c0-1.1,0.9-2,2-2h8c0.6,0,1.2,0.3,1.6,0.8l6,7.7c0.3,0.4,0.4,0.8,0.4,1.2V32 C48,34.2,46.2,36,44,36z"},"child":[]},{"tag":"g","attr":{"fill":"#9575CD"},"child":[{"tag":"path","attr":{"d":"M8,36h22V13c0-2.2-1.8-4-4-4H4v23C4,34.2,5.8,36,8,36z"},"child":[]},{"tag":"rect","attr":{"y":"9","width":"10","height":"2"},"child":[]},{"tag":"rect","attr":{"y":"14","width":"10","height":"2"},"child":[]},{"tag":"rect","attr":{"y":"19","width":"10","height":"2"},"child":[]},{"tag":"rect","attr":{"y":"24","width":"10","height":"2"},"child":[]}]},{"tag":"g","attr":{"fill":"#7E57C2"},"child":[{"tag":"rect","attr":{"x":"4","y":"11","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"16","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"21","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"26","width":"4","height":"2"},"child":[]}]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"36","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"36","r":"5"},"child":[]}]},{"tag":"g","attr":{"fill":"#78909C"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"36","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"36","r":"2.5"},"child":[]}]},{"tag":"path","attr":{"fill":"#455A64","d":"M44,26h-3.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3H34c-0.6,0-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1h5.5c0.3,0,0.6,0.1,0.8,0.4l4.5,5.4c0.1,0.2,0.2,0.4,0.2,0.6V25C45,25.6,44.6,26,44,26z"},"child":[]}]})(props);
};
function FcInfo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#2196F3","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"22","fill":"#fff","width":"4","height":"11"},"child":[]},{"tag":"circle","attr":{"fill":"#fff","cx":"24","cy":"16.5","r":"2.5"},"child":[]}]})(props);
};
function FcInspection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36,4H26c0,1.1-0.9,2-2,2s-2-0.9-2-2H12C9.8,4,8,5.8,8,8v32c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V8 C40,5.8,38.2,4,36,4z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M36,41H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v32C37,40.6,36.6,41,36,41z"},"child":[]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M26,4c0,1.1-0.9,2-2,2s-2-0.9-2-2h-7v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4H26z"},"child":[]},{"tag":"path","attr":{"d":"M24,0c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S26.2,0,24,0z M24,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S25.1,6,24,6z"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"30.6,18.6 21.6,27.6 17.4,23.3 14.9,25.8 21.7,32.5 33.1,21.1"},"child":[]}]})(props);
};
function FcIntegratedWebcam (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"},"child":[]},{"tag":"circle","attr":{"fill":"#455A64","cx":"24","cy":"24","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"24","cy":"24","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#90CAF9","d":"M28.8,21c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,22.4,29.3,21.5,28.8,21z"},"child":[]}]})(props);
};
function FcInternal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#B3E5FC","cx":"24","cy":"30","r":"15"},"child":[]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,38.7 15,28 33,28"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"5","width":"6","height":"26"},"child":[]}]}]})(props);
};
function FcInvite (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"rect","attr":{"x":"12","y":"11","fill":"#fff","width":"24","height":"22"},"child":[]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"g","attr":{"fill":"#4CAF50"},"child":[{"tag":"rect","attr":{"x":"22","y":"14","width":"4","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"18","width":"12","height":"4"},"child":[]}]}]})(props);
};
function FcIpad (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"42","r":"1.5"},"child":[]}]})(props);
};
function FcIphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"41","r":"1.5"},"child":[]}]})(props);
};
function FcKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"polygon","attr":{"points":"30,41 26,45 22,45 18,41 18,21 30,21 30,29 28,31 30,33 30,35 28,37 30,39"},"child":[]},{"tag":"path","attr":{"d":"M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8 c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2 c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2 C31,12.1,30.1,13,29,13z"},"child":[]}]},{"tag":"rect","attr":{"x":"23","y":"26","fill":"#D68600","width":"2","height":"19"},"child":[]}]})(props);
};
function FcKindle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"},"child":[]},{"tag":"path","attr":{"fill":"#eee","d":"M35,6H13c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C36,6.4,35.6,6,35,6z"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"40","fill":"#546E7A","width":"8","height":"2"},"child":[]},{"tag":"g","attr":{"fill":"#A1A1A1"},"child":[{"tag":"rect","attr":{"x":"16","y":"11","width":"16","height":"3"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"18","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"22","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"26","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"30","width":"12","height":"2"},"child":[]}]}]})(props);
};
function FcLandscape (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"36.1","y":"8.1","transform":"matrix(.707 .707 -.707 .707 21.201 -25.184)","width":"9.9","height":"9.9"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"8","width":"10","height":"10"},"child":[]}]},{"tag":"circle","attr":{"fill":"#FFEB3B","cx":"41","cy":"13","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#2E7D32","points":"16.5,18 0,42 33,42"},"child":[]},{"tag":"polygon","attr":{"fill":"#4CAF50","points":"33.6,24 19.2,42 48,42"},"child":[]}]})(props);
};
function FcLeave (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCDD2","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"},"child":[]},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"},"child":[]}]},{"tag":"g","attr":{"fill":"#BDBDBD"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"},"child":[]},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"},"child":[]}]},{"tag":"path","attr":{"fill":"#F44336","d":"M22.2,35.3c0-0.2,0-0.5,0.1-0.7c0.1-0.2,0.2-0.4,0.4-0.5s0.3-0.3,0.5-0.3c0.2-0.1,0.5-0.1,0.7-0.1 s0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.6,0.3s0.3,0.3,0.4,0.5c0.1,0.2,0.1,0.4,0.1,0.7c0,0.2,0,0.5-0.1,0.7c-0.1,0.2-0.2,0.4-0.4,0.5 c-0.2,0.1-0.3,0.3-0.6,0.3S24.3,37,24,37s-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.2-0.1-0.3-0.3-0.4-0.5 C22.3,35.8,22.2,35.6,22.2,35.3z M25.3,31h-2.6l-0.4-11h3.3L25.3,31z"},"child":[]}]})(props);
};
function FcLeftDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"7,41 7,23 25,41"},"child":[]},{"tag":"rect","attr":{"x":"22.6","y":"5","transform":"matrix(.707 .707 -.707 .707 22.912 -12.567)","fill":"#3F51B5","width":"8","height":"32.7"},"child":[]}]})(props);
};
function FcLeftDown2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"19,44 30.7,30 7.3,30"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M27,6h13v8H27c-2.2,0-4,1.8-4,4v17h-8V18C15,11.4,20.4,6,27,6z"},"child":[]}]})(props);
};
function FcLeftUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"7,7 25,7 7,25"},"child":[]},{"tag":"rect","attr":{"x":"22.6","y":"10.3","transform":"matrix(-.707 .707 -.707 -.707 64.28 26.626)","fill":"#3F51B5","width":"8","height":"32.7"},"child":[]}]})(props);
};
function FcLeftUp2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"19,4 30.7,18 7.3,18"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M27,42h13v-8H27c-2.2,0-4-1.8-4-4V13h-8v17C15,36.6,20.4,42,27,42z"},"child":[]}]})(props);
};
function FcLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"4,24 18,12.3 18,35.7"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"20","width":"27","height":"8"},"child":[]}]}]})(props);
};
function FcLibrary (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"1","y":"38","width":"46","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"25","y":"18","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"18","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"37","y":"18","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"18","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"18","width":"4","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"18","width":"4","height":"16"},"child":[]},{"tag":"polygon","attr":{"points":"43,16 5,16 5,13 24,4 43,13"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"34","width":"38","height":"2"},"child":[]}]},{"tag":"g","attr":{"fill":"#EF6C00"},"child":[{"tag":"rect","attr":{"x":"25","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"37","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"16","width":"4","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"3","y":"36","width":"42","height":"2"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"11","r":"2"},"child":[]}]}]})(props);
};
function FcLightAtTheEndOfTunnel (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,10v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V10c0-2.2-1.8-4-4-4H10C7.8,6,6,7.8,6,10z"},"child":[]},{"tag":"path","attr":{"fill":"#CCF2F6","d":"M27.9,28.9h-5.8l-8.4,7.2l6-7.2v-2.4l-3,0.8l3-1.9v-1.5c0-0.8,0.1-1.7,0.6-2.4l-7.5-8.3l8.7,7.2 c0.7-0.7,1.5-1.1,2.5-1.2l0.6-7.3l1.1,7.3c0.3,0,0.6,0.1,0.8,0.1l1.2-1.2l-0.3,1.7c0.3,0.1,0.4,0.3,0.7,0.6l4.4-2.8l-3.6,3.9 c0.3,0.4,0.6,1,0.7,1.7l2.2,0.1l-2.2,0.8c0,0.3,0,1.5,0,1.5l2.6,1.4l-2.6-0.3c0,0,0,1.8,0,2.2l6.2,7.1L27.9,28.9z"},"child":[]}]})(props);
};
function FcLikePlaceholder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFCDD2","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"},"child":[]}]})(props);
};
function FcLike (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"},"child":[]}]})(props);
};
function FcLineChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"38","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"40","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"33","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"35","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"40","cy":"31","r":"3"},"child":[]},{"tag":"polygon","attr":{"points":"39.1,29.2 31.8,32.9 23.5,30.8 15.5,37.8 8.5,36.1 7.5,39.9 16.5,42.2 24.5,35.2 32.2,37.1 40.9,32.8"},"child":[]}]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"8","cy":"20","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"22","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"15","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"20","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"40","cy":"8","r":"3"},"child":[]},{"tag":"path","attr":{"d":"M38.3,6.9c-2.1,3.2-5.3,8-6.9,10.4c-1.2-0.7-3.1-2-6.4-4l-1.3-0.8l-8.3,7.3l-7-1.7l-1,3.9l9,2.3l7.7-6.7 c2.6,1.6,5.8,3.6,6.5,4.1l0.5,0.5l0.9-0.1c1.1-0.1,1.1-0.1,9.5-12.9L38.3,6.9z"},"child":[]}]}]})(props);
};
function FcLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"path","attr":{"d":"M38,13h-3c-5.5,0-10,4.5-10,10s4.5,10,10,10h3c5.5,0,10-4.5,10-10S43.5,13,38,13z M38,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S41.3,29,38,29z"},"child":[]},{"tag":"path","attr":{"d":"M13,13h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c5.5,0,10-4.5,10-10S18.5,13,13,13z M13,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S16.3,29,13,29z"},"child":[]}]},{"tag":"path","attr":{"fill":"#42A5F5","d":"M33,21H15c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S34.1,21,33,21z"},"child":[]}]})(props);
};
function FcLinux (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 2 48 48","enableBackground":"new 0 2 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#ECEFF1","points":"20.1,18.2 20.2,20.5 18.6,23.5 16.1,28.4 15.6,32.5 17.4,38.3 21.5,40.6 27.7,40.6 33.5,36.2 \r\n\t36.1,29.3 30.1,22 28.4,17.9 "},"child":[]},{"tag":"path","attr":{"fill":"#263238","d":"M34.3,23.9c-1.6-2.3-2.9-3.7-3.6-6.6c-0.7-2.9,0.2-2.1-0.4-4.6c-0.3-1.3-0.8-2.2-1.3-2.9\r\n\tc-0.6-0.7-1.3-1.1-1.7-1.2c-0.9-0.5-3-1.3-5.6,0.1c-2.7,1.4-2.4,4.4-1.9,10.5c0,0.4-0.1,0.9-0.3,1.3c-0.4,0.9-1.1,1.7-1.7,2.4\r\n\tc-0.7,1-1.4,2-1.9,3.1c-1.2,2.3-2.3,5.2-2,6.3c0.5-0.1,6.8,9.5,6.8,9.7c0.4-0.1,2.1-0.1,3.6-0.1c2.1-0.1,3.3-0.2,5,0.2\r\n\tc0-0.3-0.1-0.6-0.1-0.9c0-0.6,0.1-1.1,0.2-1.8c0.1-0.5,0.2-1,0.3-1.6c-1,0.9-2.8,1.9-4.5,2.2c-1.5,0.3-4-0.2-5.2-1.7\r\n\tc0.1,0,0.3,0,0.4-0.1c0.3-0.1,0.6-0.2,0.7-0.4c0.3-0.5,0.1-1-0.1-1.3c-0.2-0.3-1.7-1.4-2.4-2c-0.7-0.6-1.1-0.9-1.5-1.3\r\n\tc0,0-0.6-0.6-0.8-0.8c-0.2-0.2-0.3-0.4-0.4-0.5c-0.2-0.5-0.3-1.1-0.2-1.9c0.1-1.1,0.5-2,1-3c0.2-0.4,0.7-1.2,0.7-1.2\r\n\ts-1.7,4.2-0.8,5.5c0,0,0.1-1.3,0.5-2.6c0.3-0.9,0.8-2.2,1.4-2.9s2.1-3.3,2.2-4.9c0-0.7,0.1-1.4,0.1-1.9c-0.4-0.4,6.6-1.4,7-0.3\r\n\tc0.1,0.4,1.5,4,2.3,5.9c0.4,0.9,0.9,1.7,1.2,2.7c0.3,1.1,0.5,2.6,0.5,4.1c0,0.3,0,0.8-0.1,1.3c0.2,0,4.1-4.2-0.5-7.7\r\n\tc0,0,2.8,1.3,2.9,3.9c0.1,2.1-0.8,3.8-1,4.1c0.1,0,2.1,0.9,2.2,0.9c0.4,0,1.2-0.3,1.2-0.3c0.1-0.3,0.4-1.1,0.4-1.4\r\n\tC37.6,29.9,35.9,26.2,34.3,23.9z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"fill":"#ECEFF1","cx":"21.6","cy":"15.3","rx":"1.3","ry":"2"},"child":[]},{"tag":"ellipse","attr":{"fill":"#ECEFF1","cx":"26.1","cy":"15.2","rx":"1.7","ry":"2.3"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"transform":"matrix(-0.1254 -0.9921 0.9921 -0.1254 8.9754 38.9969)","fill":"#212121","cx":"21.7","cy":"15.5","rx":"1.2","ry":"0.7"},"child":[]},{"tag":"ellipse","attr":{"fill":"#212121","cx":"26","cy":"15.6","rx":"1","ry":"1.3"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M39.3,37.6c-0.4-0.2-1.1-0.5-1.7-1.4c-0.3-0.5-0.2-1.9-0.7-2.5c-0.3-0.4-0.7-0.2-0.8-0.2\r\n\t\tc-0.9,0.2-3,1.6-4.4,0c-0.2-0.2-0.5-0.5-1-0.5c-0.5,0-0.7,0.2-0.9,0.6s-0.2,0.7-0.2,1.7c0,0.8,0,1.7-0.1,2.4\r\n\t\tc-0.2,1.7-0.5,2.7-0.5,3.7c0,1.1,0.3,1.8,0.7,2.1c0.3,0.3,0.8,0.5,1.9,0.5c1.1,0,1.8-0.4,2.5-1.1c0.5-0.5,0.9-0.7,2.3-1.7\r\n\t\tc1.1-0.7,2.8-1.6,3.1-1.9c0.2-0.2,0.5-0.3,0.5-0.9C40,37.9,39.6,37.7,39.3,37.6z"},"child":[]},{"tag":"path","attr":{"fill":"#FFC107","d":"M19.2,37.9c-1-1.6-1.1-1.9-1.8-2.9c-0.6-1-1.9-2.9-2.7-2.9c-0.6,0-0.9,0.3-1.3,0.7\r\n\t\tc-0.4,0.4-0.8,1.3-1.5,1.8c-0.6,0.5-2.3,0.4-2.7,1c-0.4,0.6,0.4,1.5,0.4,3c0,0.6-0.5,1-0.6,1.4c-0.1,0.5-0.2,0.8,0,1.2\r\n\t\tc0.4,0.6,0.9,0.8,4.3,1.5c1.8,0.4,3.5,1.4,4.6,1.5c1.1,0.1,3,0,3-2.7C21,39.9,20.1,39.5,19.2,37.9z"},"child":[]},{"tag":"path","attr":{"fill":"#FFC107","d":"M21.1,19.8C20.5,19.4,20,19,20,18.4c0-0.6,0.4-0.8,1-1.3c0.1-0.1,1.2-1.1,2.3-1.1s2.4,0.7,2.9,0.9\r\n\t\tc0.9,0.2,1.8,0.4,1.7,1.1c-0.1,1-0.2,1.2-1.2,1.7c-0.7,0.2-2,1.3-2.9,1.3c-0.4,0-1,0-1.4-0.1C22.1,20.8,21.6,20.3,21.1,19.8z"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#634703","d":"M20.9,19c0.2,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.5,0.2,0.5,0.2c0.4,0,0.7,0,0.9,0c0.5,0,1.2-0.2,1.9-0.6\r\n\t\tc0.7-0.3,0.8-0.5,1.3-0.7c0.5-0.3,1-0.6,0.8-0.7c-0.2-0.1-0.4,0-1.1,0.4c-0.6,0.4-1.1,0.6-1.7,0.9c-0.3,0.1-0.7,0.3-1,0.3\r\n\t\tc-0.3,0-0.6,0-0.9,0c-0.3,0-0.5-0.1-0.8-0.2c-0.2-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.6-0.5-0.8-0.6c0,0-0.2,0-0.1,0.1\r\n\t\tC20.6,18.7,20.7,18.8,20.9,19z"},"child":[]},{"tag":"path","attr":{"fill":"#634703","d":"M23.9,16.8c0.1,0.2,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.2,0.1c0.1-0.1,0-0.3-0.1-0.3\r\n\t\tC24.4,16.7,23.9,16.7,23.9,16.8z"},"child":[]},{"tag":"path","attr":{"fill":"#634703","d":"M22.3,17c0,0.1,0.2,0.2,0.2,0.1c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.1-0.2-0.2-0.2\r\n\t\tC22.4,16.8,22.4,16.9,22.3,17z"},"child":[]}]},{"tag":"path","attr":{"fill":"#455A64","d":"M32,34.7c0,0.1,0,0.2,0,0.3c0.2,0.4,0.7,0.5,1.1,0.5c0.6,0,1.2-0.4,1.5-0.8c0-0.1,0.1-0.2,0.2-0.3\r\n\tc0.2-0.3,0.3-0.5,0.4-0.6c0,0-0.1-0.1-0.1-0.2c-0.1-0.2-0.4-0.4-0.8-0.5c-0.3-0.1-0.8-0.2-1-0.2c-0.9-0.1-1.4,0.2-1.7,0.5\r\n\tc0,0,0.1,0,0.1,0.1c0.2,0.2,0.3,0.4,0.3,0.7C32.1,34.4,32,34.5,32,34.7z"},"child":[]}]})(props);
};
function FcList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"6","y":"22","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"14","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"30","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"6","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"38","width":"4","height":"4"},"child":[]}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"14","y":"22","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"14","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"30","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"6","width":"28","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"38","width":"28","height":"4"},"child":[]}]}]})(props);
};
function FcLockLandscape (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M7,10h34c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V14C3,11.8,4.8,10,7,10z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M42,34V14c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h34C41.6,35,42,34.6,42,34z"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M29,31H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,30.6,29.6,31,29,31z"},"child":[]},{"tag":"path","attr":{"d":"M24,17c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,18.8,26.2,17,24,17z"},"child":[]}]}]})(props);
};
function FcLockPortrait (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M10,41V7c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H14C11.8,45,10,43.2,10,41z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z"},"child":[]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"path","attr":{"d":"M29,30H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,29.6,29.6,30,29,30z"},"child":[]},{"tag":"path","attr":{"d":"M24,16c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,17.8,26.2,16,24,16z"},"child":[]}]}]})(props);
};
function FcLock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"},"child":[]},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"},"child":[]},{"tag":"circle","attr":{"fill":"#C76E00","cx":"24","cy":"31","r":"3"},"child":[]}]})(props);
};
function FcLowBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2v-9h24v9C36,43.1,35.1,44,34,44z"},"child":[]}]})(props);
};
function FcLowPriority (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"},"child":[]},{"tag":"g","attr":{"fill":"#FFEB3B"},"child":[{"tag":"polygon","attr":{"points":"24,33.4 17,25 31,25"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"14.8","width":"4","height":"12.3"},"child":[]}]}]})(props);
};
function FcMakeDecision (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"polygon","attr":{"fill":"#FF5722","points":"24,23.5 24,12.5 30.6,18"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M28.9,24.4c0,0.2,0.1,0.4,0.1,0.6c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5c0.7,0,1.4,0.2,2,0.4v-4.2 c-0.6-0.1-1.3-0.2-2-0.2c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-1.2-0.2-2.4-0.7-3.4L28.9,24.4z"},"child":[]}]})(props);
};
function FcManager (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#FF9800","points":"24,37 19,31 19,25 29,25 29,31"},"child":[]},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"19","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"19","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"19","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"19","r":"1"},"child":[]}]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M29,31L29,31l-5,1l-5-1c0,0-11,2-11,13h32C40,33,29,31,29,31z"},"child":[]},{"tag":"polygon","attr":{"fill":"#3F51B5","points":"23,35 22,44 26,44 25,35 26,34 24,32 22,34"},"child":[]}]})(props);
};
function FcMediumPriority (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFC107","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"24","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"24","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"24","r":"2"},"child":[]}]}]})(props);
};
function FcMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"rect","attr":{"x":"6","y":"22","width":"36","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"10","width":"36","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"34","width":"36","height":"4"},"child":[]}]}]})(props);
};
function FcMiddleBattery (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"path","attr":{"d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"},"child":[]},{"tag":"path","attr":{"d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"},"child":[]}]},{"tag":"path","attr":{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2V23h24v19C36,43.1,35.1,44,34,44z"},"child":[]}]})(props);
};
function FcMindMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"39.4,23 38.6,19 26,21.6 26,8 22,8 22,20.3 8.1,11.3 5.9,14.7 21.1,24.5 9.4,39.8 12.6,42.2 23.9,27.4 32.3,40.1 35.7,37.9 27.3,25.4"},"child":[]},{"tag":"circle","attr":{"fill":"#3F51B5","cx":"24","cy":"24","r":"7"},"child":[]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"8","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"39","cy":"21","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"7","cy":"13","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"11","cy":"41","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"34","cy":"39","r":"5"},"child":[]}]}]})(props);
};
function FcMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"8","y":"21","fill":"#5C6BC0","width":"32","height":"6"},"child":[]}]})(props);
};
function FcMissedCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#F44336"},"child":[{"tag":"polygon","attr":{"points":"30.3,12.9 24,19.2 15.7,10.9 12.9,13.7 24,24.8 33.1,15.7"},"child":[]},{"tag":"polygon","attr":{"points":"36,19 27,10 36,10"},"child":[]}]},{"tag":"path","attr":{"fill":"#009688","d":"M44.5,30.8l-2.4-2.4c-8.5-8.3-28.9-7.1-36.2,0l-2.4,2.4c-0.7,0.7-0.7,1.7,0,2.4l4.8,4.7 c0.7,0.7,1.7,0.7,2.4,0l5.3-5.1l-0.4-5.6c1.7-1.7,15.1-1.7,16.8,0L32.1,33l5.1,4.9c0.7,0.7,1.7,0.7,2.4,0l4.8-4.7 C45.2,32.5,45.2,31.4,44.5,30.8z"},"child":[]}]})(props);
};
function FcMms (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E91E63","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"},"child":[]},{"tag":"polygon","attr":{"fill":"#F48FB1","points":"20,16.5 10,31 30,31"},"child":[]},{"tag":"g","attr":{"fill":"#F8BBD0"},"child":[{"tag":"circle","attr":{"cx":"34","cy":"15","r":"3"},"child":[]},{"tag":"polygon","attr":{"points":"30,21 22,31 38,31"},"child":[]}]}]})(props);
};
function FcMoneyTransfer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"1","fill":"#AED581","width":"20","height":"31"},"child":[]},{"tag":"g","attr":{"fill":"#558B2F"},"child":[{"tag":"path","attr":{"d":"M13,0v33h22V0H13z M33,31H15V2h18V31z"},"child":[]},{"tag":"path","attr":{"d":"M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z"},"child":[]},{"tag":"path","attr":{"d":"M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"8","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"20","r":"6"},"child":[]}]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"},"child":[]}]})(props);
};
function FcMultipleCameras (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M42,41H12c-2.2,0-4-1.8-4-4V17c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v20C46,39.2,44.2,41,42,41z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M36,36H6c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v20C40,34.2,38.2,36,36,36z"},"child":[]},{"tag":"circle","attr":{"fill":"#455A64","cx":"26","cy":"22","r":"10"},"child":[]},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"26","cy":"22","r":"7"},"child":[]},{"tag":"path","attr":{"fill":"#90CAF9","d":"M29.7,19.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C30.1,20.7,30.1,20.1,29.7,19.7z"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"12","fill":"#ADD8FB","width":"6","height":"3"},"child":[]}]})(props);
};
function FcMultipleDevices (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M4,28V8c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H8C5.8,32,4,30.2,4,28z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M36,7H8C7.4,7,7,7.4,7,8v20c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V8C37,7.4,36.6,7,36,7z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M38,33H6c-2.2,0-4-1.8-4-4v0h40v0C42,31.2,40.2,33,38,33z"},"child":[]},{"tag":"path","attr":{"fill":"#E38939","d":"M24,40V16c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,15H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V16C41,15.4,40.6,15,40,15z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"41.5","r":"1.5"},"child":[]}]})(props);
};
function FcMultipleInputs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90A4AE","d":"M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"},"child":[]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"24,23.4 17,15 31,15"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"4","width":"4","height":"14"},"child":[]},{"tag":"path","attr":{"d":"M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"},"child":[]},{"tag":"polygon","attr":{"points":"38.4,31 29.4,35 28,25"},"child":[]},{"tag":"path","attr":{"d":"M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"},"child":[]},{"tag":"polygon","attr":{"points":"20,25 18.6,35 9.6,31"},"child":[]}]}]})(props);
};
function FcMultipleSmartphones (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M4,31V8c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H8C5.8,35,4,33.2,4,31z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M20,7H8C7.4,7,7,7.4,7,8v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V8C21,7.4,20.6,7,20,7z"},"child":[]},{"tag":"circle","attr":{"fill":"#37474F","cx":"14","cy":"32.5","r":"1.5"},"child":[]},{"tag":"path","attr":{"fill":"#546E7A","d":"M14,36V13c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H18C15.8,40,14,38.2,14,36z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M30,12H18c-0.6,0-1,0.4-1,1v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V13C31,12.4,30.6,12,30,12z"},"child":[]},{"tag":"circle","attr":{"fill":"#37474F","cx":"24","cy":"37.5","r":"1.5"},"child":[]},{"tag":"path","attr":{"fill":"#E38939","d":"M24,40V18c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,17H28c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V18C41,17.4,40.6,17,40,17z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"41.5","r":"1.5"},"child":[]}]})(props);
};
function FcMusic (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#E91E63"},"child":[{"tag":"circle","attr":{"cx":"19","cy":"33","r":"9"},"child":[]},{"tag":"polygon","attr":{"points":"24,6 24,33 28,33 28,14 39,17 39,10"},"child":[]}]}]})(props);
};
function FcNegativeDynamic (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"8","width":"10","height":"34"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"30","width":"10","height":"12"},"child":[]}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"42,12 32,22 42,22"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"6.9","transform":"matrix(.707 -.707 .707 .707 .059 28.142)","width":"4","height":"14.1"},"child":[]}]}]})(props);
};
function FcNeutralDecision (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFCC80"},"child":[{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"path","attr":{"d":"M24,4C15.2,4,8,11.2,8,20c0,1.2,0,3.5,0,3.5l2.1,0.6V19l19.5-6.3l8.2,6.3v5.1l2.1-0.6c0,0,0-2.3,0-3.5 C40,12.5,34.6,4,24,4z"},"child":[]}]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"25","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"32","cy":"25","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"25","r":"2"},"child":[]}]}]})(props);
};
function FcNeutralTrading (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"polygon","attr":{"points":"43.4,13 35,20 35,6"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"11","width":"34","height":"4"},"child":[]}]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"40","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"34","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"28","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"22","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"10","y":"23","width":"4","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"23","width":"4","height":"19"},"child":[]}]}]})(props);
};
function FcNews (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF5722","d":"M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"},"child":[]},{"tag":"path","attr":{"fill":"#FFCCBC","d":"M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"},"child":[]},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"rect","attr":{"x":"20","y":"10","width":"18","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"17","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"17","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"21","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"21","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"25","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"25","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"29","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"29","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"33","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"33","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"37","width":"8","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"37","width":"8","height":"2"},"child":[]}]}]})(props);
};
function FcNext (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"},"child":[]}]})(props);
};
function FcNfcSign (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M37,42c-0.3,0-0.7-0.1-1-0.3c-1-0.5-1.3-1.8-0.8-2.7c0-0.1,3.7-6.8,3.7-15S35.3,9,35.3,9\r\n\tc-0.5-1-0.2-2.2,0.8-2.7c1-0.5,2.2-0.2,2.7,0.8c0.2,0.3,4.3,7.6,4.3,17s-4.1,16.7-4.3,17C38.4,41.6,37.7,42,37,42z M32.8,35.8\r\n\tc0.1-0.2,2.2-5,2.2-11.8c0-6.8-2.1-11.6-2.2-11.8c-0.4-1-1.6-1.5-2.6-1c-1,0.4-1.5,1.6-1,2.6c0,0,1.8,4.3,1.8,10.2\r\n\tc0,5.9-1.8,10.2-1.8,10.2c-0.4,1,0,2.2,1,2.6c0.3,0.1,0.5,0.2,0.8,0.2C31.8,37,32.5,36.6,32.8,35.8z M23.3,33c0.6-0.1,1.1-0.5,1.4-1\r\n\tc0.1-0.2,2.3-3.9,2.3-8c0-4.1-2.2-7.9-2.3-8c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7c0,0,1.7,3,1.7,6c0,1.3-0.3,2.7-0.7,3.7\r\n\tl-13-11.2c-0.5-0.4-1.2-0.6-1.8-0.4c-0.6,0.2-1.2,0.6-1.4,1.3C6.1,17.5,5,20.5,5,24c0,3.5,1.1,6.5,1.1,6.7c0.4,1,1.5,1.6,2.6,1.2\r\n\tc1-0.4,1.6-1.5,1.2-2.6c0,0-0.9-2.6-0.9-5.3c0-0.8,0.1-1.6,0.2-2.3l12.5,10.8c0.4,0.3,0.8,0.5,1.3,0.5C23.1,33,23.2,33,23.3,33z"},"child":[]}]})(props);
};
function FcNightLandscape (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#673AB7","points":"16.5,18 0,42 33,42"},"child":[]},{"tag":"polygon","attr":{"fill":"#9575CD","points":"33.6,24 19.2,42 48,42"},"child":[]},{"tag":"path","attr":{"fill":"#40C4FF","d":"M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"},"child":[]}]})(props);
};
function FcNightPortrait (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#40C4FF","d":"M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"},"child":[]},{"tag":"g","attr":{"fill":"#B39DDB"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"19","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"19","r":"2"},"child":[]},{"tag":"polygon","attr":{"points":"22,37 17,31 17,25 27,25 27,31"},"child":[]}]},{"tag":"path","attr":{"fill":"#D1C4E9","d":"M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"},"child":[]},{"tag":"g","attr":{"fill":"#673AB7"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"19","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"},"child":[]},{"tag":"path","attr":{"d":"M27,31L27,31c0,0-2,1-5,1s-5-1-5-1S6,33,6,44h32C38,33,27,31,27,31z"},"child":[]}]}]})(props);
};
function FcNoIdea (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FBC02D","d":"M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF59D","d":"M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"},"child":[]},{"tag":"circle","attr":{"fill":"#5C6BC0","cx":"24","cy":"44","r":"3"},"child":[]},{"tag":"path","attr":{"fill":"#9FA8DA","d":"M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"},"child":[]},{"tag":"g","attr":{"fill":"#5C6BC0"},"child":[{"tag":"path","attr":{"d":"M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"},"child":[]},{"tag":"polygon","attr":{"points":"18,38.7 18,40.7 30,39 30,37"},"child":[]}]},{"tag":"rect","attr":{"x":"22","y":"-2.9","transform":"matrix(.707 -.707 .707 .707 -9.941 24)","fill":"#37474F","width":"4","height":"53.7"},"child":[]}]})(props);
};
function FcNoVideo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"},"child":[]},{"tag":"polygon","attr":{"fill":"#388E3C","points":"44,35 34,29 34,19 44,13"},"child":[]},{"tag":"line","attr":{"fill":"none","stroke":"#212121","strokeWidth":"4","strokeLinejoin":"round","strokeMiterlimit":"10","x1":"5","y1":"5","x2":"43","y2":"43"},"child":[]}]})(props);
};
function FcNook (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90A4AE","d":"M8,39V9c0-3.3,2.7-6,6-6h20c3.3,0,6,2.7,6,6v30c0,3.3-2.7,6-6,6H14C10.7,45,8,42.3,8,39z"},"child":[]},{"tag":"path","attr":{"fill":"#ECEFF1","d":"M34,7H14c-1.1,0-2,0.9-2,2v26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V9C36,7.9,35.1,7,34,7z"},"child":[]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"rect","attr":{"x":"16","y":"12","width":"16","height":"3"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"19","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"23","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"27","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"31","width":"12","height":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"none","stroke":"#eee","strokeWidth":"2","strokeMiterlimit":"10","d":"M22,43v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1"},"child":[]}]})(props);
};
function FcNumericalSorting12 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M16.4,20h-3V8.6L9.9,9.7V7.3L16,5.1h0.3V20z"},"child":[]},{"tag":"path","attr":{"d":"M19.4,43H9.2v-2l4.8-5.1c0.4-0.4,0.7-0.8,0.9-1.1c0.2-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.5,0.3-0.8 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7-0.2-1.2-0.5-1.6c-0.3-0.4-0.8-0.6-1.4-0.6c-0.3,0-0.7,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5 c-0.2,0.2-0.3,0.5-0.4,0.8s-0.1,0.6-0.1,1h-3c0-0.7,0.1-1.3,0.4-1.9c0.2-0.6,0.6-1.1,1-1.6c0.5-0.4,1-0.8,1.6-1.1 c0.6-0.3,1.4-0.4,2.2-0.4c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.5,1.5,0.8s0.7,0.8,0.9,1.3s0.3,1.1,0.3,1.8c0,0.5-0.1,1-0.2,1.4 S18.3,34.5,18,35s-0.6,0.9-1,1.4c-0.4,0.5-0.9,1-1.4,1.5L13,40.6h6.4V43z"},"child":[]}]}]})(props);
};
function FcNumericalSorting21 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"path","attr":{"d":"M19.2,20H9v-2l4.8-5.1c0.4-0.4,0.7-0.8,0.9-1.1c0.2-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.5,0.3-0.8 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7-0.2-1.2-0.5-1.6c-0.3-0.4-0.8-0.6-1.4-0.6c-0.3,0-0.7,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.7,0.5 c-0.2,0.2-0.3,0.5-0.4,0.8s-0.1,0.6-0.1,1h-3c0-0.7,0.1-1.3,0.4-1.9c0.2-0.6,0.6-1.1,1-1.6c0.5-0.4,1-0.8,1.6-1.1 c0.6-0.3,1.4-0.4,2.2-0.4c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.5,1.5,0.8s0.7,0.8,0.9,1.3c0.2,0.5,0.3,1.1,0.3,1.8 c0,0.5-0.1,1-0.2,1.4s-0.4,0.9-0.7,1.4s-0.6,0.9-1,1.4c-0.4,0.5-0.9,1-1.4,1.5l-2.6,2.8h6.4V20z"},"child":[]},{"tag":"path","attr":{"d":"M16.2,43h-3V31.6l-3.5,1.1v-2.4l6.2-2.2h0.3V43z"},"child":[]}]}]})(props);
};
function FcOk (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"polygon","attr":{"fill":"#CCFF90","points":"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"},"child":[]}]})(props);
};
function FcOldTimeCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M14,13H8v-1.8C8,10.5,8.5,10,9.2,10h3.6c0.7,0,1.2,0.5,1.2,1.2V13z"},"child":[]},{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,40H8c-2.2,0-4-1.8-4-4V22h40v14C44,38.2,42.2,40,40,40z"},"child":[]},{"tag":"path","attr":{"fill":"#42257A","d":"M12.7,22c-0.4,1.3-0.7,2.6-0.7,4c0,6.6,5.4,12,12,12s12-5.4,12-12c0-1.4-0.3-2.7-0.7-4H12.7z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M8,12h32c2.2,0,4,1.8,4,4v6H4v-6C4,13.8,5.8,12,8,12z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M33.9,13.1H14.2L17.6,8c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,13.1z"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M35.3,22c-1.6-4.7-6.1-8-11.3-8s-9.7,3.3-11.3,8H35.3z"},"child":[]},{"tag":"circle","attr":{"fill":"#B388FF","cx":"24","cy":"26","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#C7A7FF","d":"M29,23c-1.2-1.4-3-2.2-4.8-2.2c-1.8,0-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.4,24.4,29.5,23.5,29,23z"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"15","fill":"#DBE2E5","width":"5","height":"4"},"child":[]}]})(props);
};
function FcOnlineSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"13","y":"30","fill":"#BF360C","width":"22","height":"12"},"child":[]},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"26","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"26","r":"4"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"30","cy":"26","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"18","cy":"26","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#FF5722","d":"M24,2C15.5,2,3,7.8,3,35.6L13,42V24l16.8-9.8L35,21v21l10-8.2c0-5.6-0.9-29-15.4-29L28.2,2H24z"},"child":[]},{"tag":"path","attr":{"fill":"#757575","d":"M45,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h13c5,0,9-4,9-9v-5C46,24.4,45.6,24,45,24z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"path","attr":{"d":"M45,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C47,22.9,46.1,22,45,22z"},"child":[]},{"tag":"circle","attr":{"cx":"24","cy":"38","r":"2"},"child":[]}]}]})(props);
};
function FcOpenedFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFA000","d":"M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z"},"child":[]},{"tag":"path","attr":{"fill":"#FFCA28","d":"M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z"},"child":[]}]})(props);
};
function FcOrgUnit (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M10,10v28h28V10H10z M34,34H14V14h20V34z"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#D81B60","width":"12","height":"12"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"30","y":"6","width":"12","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"30","width":"12","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"30","width":"12","height":"12"},"child":[]}]}]})(props);
};
function FcOrganization (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M42,42H6V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V42z"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"42","fill":"#64B5F6","width":"36","height":"2"},"child":[]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"rect","attr":{"x":"31","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"27","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"35","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"35","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"19","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"31","y":"11","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"11","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"11","width":"6","height":"5"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"35","width":"6","height":"9"},"child":[]}]}]})(props);
};
function FcOvertime (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"16","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"16","r":"3"},"child":[]}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M37,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C39,10.9,38.1,10,37,10z"},"child":[]},{"tag":"path","attr":{"d":"M20,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C22,10.9,21.1,10,20,10z"},"child":[]}]},{"tag":"rect","attr":{"x":"32","y":"34","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"26","y":"34","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"34","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"28","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"26","y":"28","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"28","fill":"#90A4AE","width":"4","height":"4"},"child":[]},{"tag":"circle","attr":{"fill":"#F44336","cx":"16","cy":"15","r":"12"},"child":[]},{"tag":"circle","attr":{"fill":"#eee","cx":"16","cy":"15","r":"9"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"8","width":"2","height":"7"},"child":[]},{"tag":"rect","attr":{"x":"16.9","y":"14.2","transform":"matrix(-.707 .707 -.707 -.707 42.506 16.192)","width":"1.9","height":"5.4"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"15","r":"1.5"},"child":[]}]})(props);
};
function FcPackage (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"},"child":[]},{"tag":"path","attr":{"fill":"#8A5100","d":"M29.5,16h-11c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h11c0.8,0,1.5,0.7,1.5,1.5v0 C31,15.3,30.3,16,29.5,16z"},"child":[]}]})(props);
};
function FcPaid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2E7D32","d":"M25.4,5.6c-0.8-0.8-2-0.8-2.8,0l-12,12c-0.8,0.8-0.8,2,0,2.8C11,20.8,11.5,21,12,21s1-0.2,1.4-0.6l12-12 C26.2,7.6,26.2,6.4,25.4,5.6z"},"child":[]},{"tag":"path","attr":{"fill":"#1B5E20","d":"M37.4,17.6l-12-12c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l12,12C35,20.8,35.5,21,36,21s1-0.2,1.4-0.6 C38.2,19.6,38.2,18.4,37.4,17.6z"},"child":[]},{"tag":"path","attr":{"fill":"#388E3C","d":"M37.4,41H10.6c-1,0-1.8-0.7-2-1.6L5,21h38l-3.7,18.4C39.1,40.3,38.3,41,37.4,41z"},"child":[]},{"tag":"path","attr":{"fill":"#4CAF50","d":"M43,23H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,22.1,44.1,23,43,23z"},"child":[]},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"30.8,24.8 22.9,32.7 19.2,28.9 17,31.1 22.9,37 33,26.9"},"child":[]}]})(props);
};
function FcPanorama (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M4,9v32c0,0,8.4-3,20-3s20,3,20,3V9c0,0-6.7,3-20,3S4,9,4,9z"},"child":[]},{"tag":"path","attr":{"fill":"#942A09","d":"M24,34c0.1,0,0.3,0,0.4,0L15,19L6.9,36.2C10.3,35.3,16.5,34,24,34z"},"child":[]},{"tag":"path","attr":{"fill":"#BF360C","d":"M24,34c3.3,0,6.3,0.2,9,0.6l-8-11.8l-7.8,11.5C19.3,34.1,21.6,34,24,34z"},"child":[]},{"tag":"path","attr":{"fill":"#E65100","d":"M40.7,36L35,26.5l-5,7.8C34.5,34.7,38.2,35.4,40.7,36z"},"child":[]},{"tag":"ellipse","attr":{"fill":"#FFF9C4","cx":"36","cy":"19.5","rx":"2","ry":"2.5"},"child":[]}]})(props);
};
function FcParallelTasks (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"36,13 36,9 22,9 22,22 13,22 13,26 22,26 22,39 36,39 36,35 26,35 26,26 36,26 36,22 26,22 26,13"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"17","fill":"#D81B60","width":"10","height":"14"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"6","fill":"#2196F3","width":"10","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"32","fill":"#2196F3","width":"10","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"19","fill":"#2196F3","width":"10","height":"10"},"child":[]}]})(props);
};
function FcPhoneAndroid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"40","fill":"#78909C","width":"6","height":"2"},"child":[]}]})(props);
};
function FcPhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M39.1,7l-3.7,0C22.2,7.2,7.1,24.1,7,35.4l0,3.7c0,1,0.8,1.9,1.9,1.9l7.5-0.1c1,0,1.9-0.9,1.9-1.9l0.2-8.2 l-4.7-4c0-2.6,10.5-13.1,13.2-13.2l4.3,4.7l7.9-0.2c1,0,1.9-0.9,1.9-1.9L41,8.9C41,7.8,40.2,7,39.1,7z"},"child":[]}]})(props);
};
function FcPhotoReel (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#673AB7","d":"M10,9c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V13c0-2.2-1.8-4-4-4"},"child":[]},{"tag":"g","attr":{"fill":"#311B92"},"child":[{"tag":"rect","attr":{"x":"14","y":"13","width":"2","height":"26"},"child":[]},{"tag":"path","attr":{"d":"M24,9V7c0-1.2-0.8-2-2-2h-8c-1.2,0-2,0.8-2,2v2H24z"},"child":[]}]},{"tag":"path","attr":{"fill":"#D84315","d":"M30,13H16v26h14V13z M21,37h-3v-4h3V37z M21,19h-3v-4h3V19z M27,37h-3v-4h3V37z M24,19v-4h3v4H24z"},"child":[]},{"tag":"path","attr":{"fill":"#FF5722","d":"M30,13v2h3v4h-3v14h3v4h-3v2h12V13H30z M39,37h-3v-4h3V37z M39,19h-3v-4h3V19z"},"child":[]}]})(props);
};
function FcPicture (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"35","cy":"16","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#942A09","points":"20,16 9,32 31,32"},"child":[]},{"tag":"polygon","attr":{"fill":"#BF360C","points":"31,22 23,32 39,32"},"child":[]}]})(props);
};
function FcPieChart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#00BCD4","d":"M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z"},"child":[]},{"tag":"path","attr":{"fill":"#448AFF","d":"M42,24c0-9.9-8.1-18-18-18v18H42z"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z"},"child":[]}]})(props);
};
function FcPlanner (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M5,38V14h38v24c0,2.2-1.8,4-4,4H9C6.8,42,5,40.2,5,38z"},"child":[]},{"tag":"path","attr":{"fill":"#F44336","d":"M43,10v6H5v-6c0-2.2,1.8-4,4-4h30C41.2,6,43,7.8,43,10z"},"child":[]},{"tag":"g","attr":{"fill":"#B71C1C"},"child":[{"tag":"circle","attr":{"cx":"33","cy":"10","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"10","r":"3"},"child":[]}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M33,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C35,3.9,34.1,3,33,3z"},"child":[]},{"tag":"path","attr":{"d":"M15,3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2s2-0.9,2-2V5C17,3.9,16.1,3,15,3z"},"child":[]}]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"rect","attr":{"x":"13","y":"21","width":"6","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"21","width":"6","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"29","y":"21","width":"6","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"29","width":"6","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"29","width":"6","height":"6"},"child":[]}]},{"tag":"rect","attr":{"x":"29","y":"29","fill":"#F44336","width":"6","height":"6"},"child":[]}]})(props);
};
function FcPlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"21","y":"14","width":"6","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"21","width":"20","height":"6"},"child":[]}]}]})(props);
};
function FcPodiumWithAudience (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"41,12 7,12 6,16 11,19 9,16 39,16 37,19 42,16"},"child":[]},{"tag":"polygon","attr":{"fill":"#78909C","points":"9,16 39,16 35,28 13,28"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"28","r":"4"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"36","cy":"28","r":"4"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"12","cy":"28","r":"4"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"18","cy":"37","r":"5"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"30","cy":"37","r":"5"},"child":[]}]})(props);
};
function FcPodiumWithSpeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FFB74D","cx":"24","cy":"11","r":"6"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M36,26.1c0,0-3.3-7.1-12-7.1s-12,7.1-12,7.1V30h24V26.1z"},"child":[]},{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"41,25 7,25 6,29 11,32 9,29 39,29 37,32 42,29"},"child":[]},{"tag":"polygon","attr":{"fill":"#78909C","points":"9,29 39,29 35,41 13,41"},"child":[]}]})(props);
};
function FcPodiumWithoutSpeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#B0BEC5","points":"43,16 5,16 4,20 9,23 7,20 41,20 39,23 44,20"},"child":[]},{"tag":"polygon","attr":{"fill":"#78909C","points":"7,20 41,20 37,36 11,36"},"child":[]}]})(props);
};
function FcPortraitMode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M22,38c-4.8,0-5-7-5-7v-6h10v6C27,31,26.8,38,22,38z"},"child":[]},{"tag":"g","attr":{"fill":"#FFA726"},"child":[{"tag":"circle","attr":{"cx":"31","cy":"19","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"19","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"},"child":[]},{"tag":"path","attr":{"fill":"#424242","d":"M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"26","cy":"19","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"1"},"child":[]}]},{"tag":"path","attr":{"fill":"#009688","d":"M27,31L27,31c0,0-1.8,2-5,2s-5-2-5-2S6,33,6,44h32C38,33,27,31,27,31z"},"child":[]},{"tag":"g","attr":{"fill":"#FF9800"},"child":[{"tag":"rect","attr":{"x":"36.1","y":"6.1","transform":"matrix(.707 .707 -.707 .707 19.787 -25.77)","width":"9.9","height":"9.9"},"child":[]},{"tag":"rect","attr":{"x":"36","y":"6","width":"10","height":"10"},"child":[]}]},{"tag":"circle","attr":{"fill":"#FFEB3B","cx":"41","cy":"11","r":"3"},"child":[]}]})(props);
};
function FcPositiveDynamic (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"rect","attr":{"x":"19","y":"22","width":"10","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"32","y":"8","width":"10","height":"34"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"30","width":"10","height":"12"},"child":[]}]},{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"11,8 21,18 21,8"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"8.9","transform":"matrix(-.707 -.707 .707 -.707 10.879 36.506)","width":"4","height":"14.1"},"child":[]}]}]})(props);
};
function FcPrevious (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#2196F3","points":"30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24"},"child":[]}]})(props);
};
function FcPrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"9","y":"11","fill":"#424242","width":"30","height":"3"},"child":[]},{"tag":"path","attr":{"fill":"#616161","d":"M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"},"child":[]},{"tag":"path","attr":{"fill":"#424242","d":"M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"},"child":[]},{"tag":"circle","attr":{"fill":"#00E676","cx":"40","cy":"18","r":"1"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"4","fill":"#90CAF9","width":"26","height":"10"},"child":[]},{"tag":"path","attr":{"fill":"#242424","d":"M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"31","fill":"#90CAF9","width":"26","height":"11"},"child":[]},{"tag":"rect","attr":{"x":"11","y":"29","fill":"#42A5F5","width":"26","height":"2"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"16","y":"33","width":"17","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"37","width":"13","height":"2"},"child":[]}]}]})(props);
};
function FcPrivacy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"},"child":[]},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"},"child":[]},{"tag":"circle","attr":{"fill":"#EFEBE9","cx":"24","cy":"31","r":"6"},"child":[]},{"tag":"circle","attr":{"fill":"#1E88E5","cx":"24","cy":"31","r":"3"},"child":[]},{"tag":"circle","attr":{"fill":"#fff","cx":"26","cy":"29","r":"1"},"child":[]}]})(props);
};
function FcProcess (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#9C27B0"},"child":[{"tag":"polygon","attr":{"points":"31,8 42.9,9.6 33.1,19.4"},"child":[]},{"tag":"polygon","attr":{"points":"17,40 5.1,38.4 14.9,28.6"},"child":[]},{"tag":"polygon","attr":{"points":"8,17 9.6,5.1 19.4,14.9"},"child":[]},{"tag":"path","attr":{"d":"M9.3,21.2L5.1,22C5,22.7,5,23.3,5,24c0,4.6,1.6,9,4.6,12.4l3-2.6C10.3,31.1,9,27.6,9,24 C9,23.1,9.1,22.1,9.3,21.2z"},"child":[]},{"tag":"path","attr":{"d":"M24,5c-5.4,0-10.2,2.3-13.7,5.9l2.8,2.8C15.9,10.8,19.7,9,24,9c0.9,0,1.9,0.1,2.8,0.3l0.7-3.9 C26.4,5.1,25.2,5,24,5z"},"child":[]},{"tag":"path","attr":{"d":"M38.7,26.8l4.2-0.8c0.1-0.7,0.1-1.3,0.1-2c0-4.4-1.5-8.7-4.3-12.1l-3.1,2.5c2.2,2.7,3.4,6.1,3.4,9.5 C39,24.9,38.9,25.9,38.7,26.8z"},"child":[]},{"tag":"path","attr":{"d":"M34.9,34.3C32.1,37.2,28.3,39,24,39c-0.9,0-1.9-0.1-2.8-0.3l-0.7,3.9c1.2,0.2,2.4,0.3,3.5,0.3 c5.4,0,10.2-2.3,13.7-5.9L34.9,34.3z"},"child":[]},{"tag":"polygon","attr":{"points":"40,31 38.4,42.9 28.6,33.1"},"child":[]}]}]})(props);
};
function FcPuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M39,15c0-2.2-1.8-4-4-4h-6c-0.7,0-1.1-0.8-0.7-1.4c0.6-1,0.9-2.2,0.6-3.5c-0.4-2-1.9-3.6-3.8-4 C21.8,1.4,19,3.9,19,7c0,1,0.3,1.8,0.7,2.6c0.4,0.6,0,1.4-0.8,1.4h-6c-2.2,0-4,1.8-4,4v7c0,0.7,0.8,1.1,1.4,0.7 c1-0.6,2.2-0.9,3.5-0.6c2,0.4,3.6,1.9,4,3.8c0.7,3.2-1.8,6.1-4.9,6.1c-1,0-1.8-0.3-2.6-0.7C9.8,30.9,9,31.3,9,32v6c0,2.2,1.8,4,4,4 h22c2.2,0,4-1.8,4-4V15z"},"child":[]}]})(props);
};
function FcQuestions (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"},"child":[]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"},"child":[]},{"tag":"path","attr":{"fill":"#1976D2","d":"M24.5,28.3c0-4.7,3.6-4.4,3.6-7.2c0-0.7-0.2-2.1-2-2.1c-2,0-2.1,1.6-2.1,2h-2.7c0-0.7,0.3-4.2,4.8-4.2 c4.6,0,4.7,3.6,4.7,4.3c0,3.5-3.8,4-3.8,7.3H24.5z M24.3,31.8c0-0.2,0-1.5,1.5-1.5c1.4,0,1.5,1.3,1.5,1.5c0,0.4-0.2,1.4-1.5,1.4 C24.5,33.2,24.3,32.2,24.3,31.8z"},"child":[]}]})(props);
};
function FcRadarPlot (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M38.4,13L24.1,6.4L4.6,12.1l8.8,13.2l-2.2,15.1h22.7l6.6-13.3L38.4,13z M32.1,37.5H14.7l1.8-12.9L9.4,13.9 l14.5-4.3L35.6,15l1.8,11.7L32.1,37.5z"},"child":[]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"8","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"37","cy":"14","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"39","cy":"27","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"7","cy":"13","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"39","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"15","cy":"25","r":"4"},"child":[]},{"tag":"circle","attr":{"cx":"33","cy":"39","r":"4"},"child":[]}]}]})(props);
};
function FcRating (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#F44336","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"polygon","attr":{"fill":"#FFCA28","points":"24,11 27.9,18.9 36.6,20.2 30.3,26.3 31.8,35 24,30.9 16.2,35 17.7,26.3 11.4,20.2 20.1,18.9"},"child":[]}]})(props);
};
function FcRatings (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#42A5F5","points":"36,44 8,44 8,8 28,8 36,16"},"child":[]},{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,40 12,40 12,4 32,4 40,12"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,13 31,13 31,5.5"},"child":[]},{"tag":"polygon","attr":{"fill":"#1976D2","points":"34,20 27,20 29.4,22.4 27,24.9 23,20.9 16.9,26.9 19.1,29.1 23,25.1 27,29.1 31.6,24.6 34,27"},"child":[]}]})(props);
};
function FcReadingEbook (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M33.5,27c-2.2-3-5.2-5-9.5-5s-7.3,2-9.5,5H33.5z"},"child":[]},{"tag":"path","attr":{"fill":"#546E7A","d":"M34.1,43H13.9c-1.1,0-1.9-0.8-2-1.9l-0.8-13C11.1,27,12,26,13.1,26h21.8c1.2,0,2.1,1,2,2.1l-0.8,13 C36,42.2,35.2,43,34.1,43z"},"child":[]},{"tag":"circle","attr":{"fill":"#B0BEC5","cx":"34","cy":"29","r":"1"},"child":[]},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"12","r":"8"},"child":[]},{"tag":"path","attr":{"d":"M16.1,42.4L15,43.5c-0.6,0.6-1.6,0.6-2.2,0l-3.3-3.3c-0.6-0.6-0.6-1.6,0-2.2l1.1-1.1c1.3-1.3,3.1-1.3,4.4,0 l1.1,1.1C17.3,39.3,17.3,41.2,16.1,42.4z"},"child":[]},{"tag":"path","attr":{"d":"M31.9,38l1.1-1.1c1.3-1.3,3.1-1.3,4.4,0l1.1,1.1c0.6,0.6,0.6,1.6,0,2.2l-3.3,3.3c-0.6,0.6-1.6,0.6-2.2,0 l-1.1-1.1C30.7,41.2,30.7,39.3,31.9,38z"},"child":[]}]}]})(props);
};
function FcReading (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#5C6BC0","d":"M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z"},"child":[]},{"tag":"path","attr":{"fill":"#7986CB","d":"M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z"},"child":[]},{"tag":"g","attr":{"fill":"#FFB74D"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"12","r":"8"},"child":[]},{"tag":"path","attr":{"d":"M41,32h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1c-1.7,0-3,1.3-3,3v0C38,30.7,39.3,32,41,32z"},"child":[]},{"tag":"path","attr":{"d":"M7,26H6c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1c1.7,0,3-1.3,3-3v0C10,27.3,8.7,26,7,26z"},"child":[]}]}]})(props);
};
function FcReddit (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M12.193,19.555c-1.94-1.741-4.79-1.727-6.365,0.029c-1.576,1.756-1.301,5.023,0.926,6.632L12.193,19.555z"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M35.807,19.555c1.939-1.741,4.789-1.727,6.365,0.029c1.575,1.756,1.302,5.023-0.927,6.632L35.807,19.555z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#FFFFFF","cx":"38.32","cy":"10.475","r":"3.5"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"ellipse","attr":{"fill":"#FFFFFF","cx":"24.085","cy":"28.611","rx":"18.085","ry":"12.946"},"child":[]}]}]},{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"fill":"#D84315","cx":"30.365","cy":"26.39","r":"2.884"},"child":[]},{"tag":"circle","attr":{"fill":"#D84315","cx":"17.635","cy":"26.39","r":"2.884"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M24.002,34.902c-3.252,0-6.14-0.745-8.002-1.902c1.024,2.044,4.196,4,8.002,4c3.802,0,6.976-1.956,7.998-4\r\n\t\tC30.143,34.157,27.254,34.902,24.002,34.902z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M41.83,27.026l-1.17-1.621c0.831-0.6,1.373-1.556,1.488-2.623c0.105-0.98-0.157-1.903-0.721-2.531\r\n\t\tc-0.571-0.637-1.391-0.99-2.307-0.994c-0.927,0.013-1.894,0.365-2.646,1.041l-1.336-1.488c1.123-1.008,2.545-1.523,3.991-1.553\r\n\t\tc1.488,0.007,2.833,0.596,3.786,1.658c0.942,1.05,1.387,2.537,1.221,4.081C43.961,24.626,43.121,26.096,41.83,27.026z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M6.169,27.026c-1.29-0.932-2.131-2.401-2.306-4.031c-0.166-1.543,0.279-3.03,1.221-4.079\r\n\t\tc0.953-1.062,2.297-1.651,3.785-1.658c0.009,0,0.018,0,0.027,0c1.441,0,2.849,0.551,3.965,1.553l-1.336,1.488\r\n\t\tc-0.753-0.676-1.689-1.005-2.646-1.041c-0.916,0.004-1.735,0.357-2.306,0.994c-0.563,0.628-0.826,1.55-0.721,2.53\r\n\t\tc0.115,1.067,0.657,2.023,1.488,2.624L6.169,27.026z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M25,16.84h-2c0-2.885,0-10.548,4.979-10.548c2.154,0,3.193,1.211,3.952,2.096\r\n\t\tc0.629,0.734,0.961,1.086,1.616,1.086h1.37v2h-1.37c-1.604,0-2.453-0.99-3.135-1.785c-0.67-0.781-1.198-1.398-2.434-1.398\r\n\t\tC25.975,8.292,25,11.088,25,16.84z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M24.085,16.95c9.421,0,17.085,5.231,17.085,11.661c0,6.431-7.664,11.662-17.085,11.662S7,35.042,7,28.611\r\n\t\tC7,22.181,14.664,16.95,24.085,16.95 M24.085,14.95C13.544,14.95,5,21.066,5,28.611c0,7.546,8.545,13.662,19.085,13.662\r\n\t\tc10.54,0,19.085-6.116,19.085-13.662C43.17,21.066,34.625,14.95,24.085,14.95L24.085,14.95z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M38.32,7.975c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5S36.941,7.975,38.32,7.975\r\n\t\t M38.32,5.975c-2.484,0-4.5,2.015-4.5,4.5s2.016,4.5,4.5,4.5c2.486,0,4.5-2.015,4.5-4.5S40.807,5.975,38.32,5.975L38.32,5.975z"},"child":[]}]}]})(props);
};
function FcRedo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"43,18 29,6.3 29,29.7"},"child":[]},{"tag":"path","attr":{"d":"M20,14h12v8H20c-2.8,0-5,2.2-5,5s2.2,5,5,5h3v8h-3c-7.2,0-13-5.8-13-13S12.8,14,20,14z"},"child":[]}]}]})(props);
};
function FcRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"path","attr":{"d":"M13,13c0-3.3,2.7-6,6-6h10c3.3,0,6,2.7,6,6h4c0-5.5-4.5-10-10-10H19C13.5,3,9,7.5,9,13v11.2h4V13z"},"child":[]},{"tag":"polygon","attr":{"points":"4.6,22 11,30.4 17.4,22"},"child":[]}]},{"tag":"g","attr":{"fill":"#1565C0"},"child":[{"tag":"path","attr":{"d":"M35,35c0,3.3-2.7,6-6,6H19c-3.3,0-6-2.7-6-6H9c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V23h-4V35z"},"child":[]},{"tag":"polygon","attr":{"points":"30.6,26 37,17.6 43.4,26"},"child":[]}]}]})(props);
};
function FcRegisteredTrademark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M25,26.8h-4.5v9h-4V12.5h8.2c1.3,0,2.5,0.2,3.6,0.5c1,0.3,1.9,0.8,2.6,1.3c0.7,0.6,1.3,1.3,1.6,2.2 s0.6,1.9,0.6,3c0,1.6-0.4,2.9-1.1,3.9c-0.8,1-1.8,1.9-3.1,2.4l5.2,9.7v0.2h-4.3L25,26.8z M20.5,23.6h4.2c0.7,0,1.4-0.1,1.9-0.3 c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.7,0.8-1.2c0.2-0.5,0.3-1,0.3-1.6c0-0.6-0.1-1.1-0.3-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.8-0.6-1.4-0.8c-0.5-0.2-1.2-0.3-2-0.3h-4.1V23.6z"},"child":[]}]})(props);
};
function FcRemoveImage (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8CBCD6","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"circle","attr":{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"},"child":[]},{"tag":"polygon","attr":{"fill":"#9AC9E3","points":"20,16 9,32 31,32"},"child":[]},{"tag":"polygon","attr":{"fill":"#B3DDF5","points":"31,22 23,32 39,32"},"child":[]},{"tag":"circle","attr":{"fill":"#F44336","cx":"38","cy":"38","r":"10"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 .707 -.707 -.707 91.74 38)","width":"3","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"36.5","y":"32","transform":"matrix(-.707 -.707 .707 -.707 38 91.74)","width":"3","height":"12"},"child":[]}]}]})(props);
};
function FcReuse (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#455A64","points":"12.1,42 17.2,42 16.5,18.2 10.9,20.2"},"child":[]},{"tag":"circle","attr":{"fill":"#FFB74D","cx":"36.5","cy":"10","r":"5"},"child":[]},{"tag":"polygon","attr":{"fill":"#607D8B","points":"11,42 6,42 7.8,18.6 14.2,20.9"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M31.7,15.9c-0.6-2-1.3-4-2.5-5.8c-1.3-1.6-3.2-3.1-6.1-2c-3.1,1.3-9.2,3.6-11.2,4.5 c-2.3,1.1-4.1,2.7-4.1,5.9c0,3.4,4.3,5.3,4.3,5.3l14.7-6.1l1.7,4.5l5.3,0.1C33.8,22.4,32.3,17.9,31.7,15.9z"},"child":[]},{"tag":"path","attr":{"fill":"#B39DDB","d":"M37.9,42h-7.9c-1,0-1.8-0.7-2-1.7l-2.6-17.1h17l-2.6,17.1C39.8,41.3,38.9,42,37.9,42z"},"child":[]},{"tag":"path","attr":{"fill":"#7E57C2","d":"M42,24H26c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C43,23.6,42.6,24,42,24z"},"child":[]}]})(props);
};
function FcRightDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"41,41 23,41 41,23"},"child":[]},{"tag":"rect","attr":{"x":"17.4","y":"5","transform":"matrix(.707 -.707 .707 .707 -8.854 21.374)","fill":"#3F51B5","width":"8","height":"32.7"},"child":[]}]})(props);
};
function FcRightDown2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"29,44 17.3,30 40.7,30"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M21,6H8v8h13c2.2,0,4,1.8,4,4v17h8V18C33,11.4,27.6,6,21,6z"},"child":[]}]})(props);
};
function FcRightUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"41,7 41,25 23,7"},"child":[]},{"tag":"rect","attr":{"x":"17.4","y":"10.3","transform":"matrix(-.707 -.707 .707 -.707 17.661 60.567)","fill":"#3F51B5","width":"8","height":"32.7"},"child":[]}]})(props);
};
function FcRightUp2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"29,4 17.3,18 40.7,18"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M21,42H8v-8h13c2.2,0,4-1.8,4-4V13h8v17C33,36.6,27.6,42,21,42z"},"child":[]}]})(props);
};
function FcRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"44,24 30,35.7 30,12.3"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"20","width":"27","height":"8"},"child":[]}]}]})(props);
};
function FcRotateCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#5E35B1"},"child":[{"tag":"path","attr":{"d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"},"child":[]},{"tag":"path","attr":{"d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"},"child":[]},{"tag":"path","attr":{"d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"},"child":[]}]},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M34,25c0-5.5-4.5-10-10-10s-10,4.5-10,10s4.5,10,10,10v-2c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8h-3.5 l4.5,5.6l4.5-5.6H34z"},"child":[]}]})(props);
};
function FcRotateToLandscape (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M10,41V7c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H14C11.8,45,10,43.2,10,41z"},"child":[]},{"tag":"path","attr":{"fill":"#F3E5F5","d":"M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z"},"child":[]},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"22,34 27.9,27 16.1,27"},"child":[]},{"tag":"path","attr":{"fill":"#9C27B0","d":"M26,16c-3.3,0-6,2.7-6,6v6h4v-6c0-1.1,0.9-2,2-2s2,0.9,2,2v2h4v-2C32,18.7,29.3,16,26,16z"},"child":[]}]})(props);
};
function FcRotateToPortrait (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M41,38H7c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4v20C45,36.2,43.2,38,41,38z"},"child":[]},{"tag":"path","attr":{"fill":"#F3E5F5","d":"M6,14v20c0,0.6,0.4,1,1,1h34c0.6,0,1-0.4,1-1V14c0-0.6-0.4-1-1-1H7C6.4,13,6,13.4,6,14z"},"child":[]},{"tag":"polygon","attr":{"fill":"#9C27B0","points":"26,15 20.1,22 31.9,22"},"child":[]},{"tag":"path","attr":{"fill":"#9C27B0","d":"M24,21v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2h-4v2c0,3.3,2.7,6,6,6s6-2.7,6-6v-6H24z"},"child":[]}]})(props);
};
function FcRuler (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"16.7","y":"1.6","transform":"matrix(-.707 -.707 .707 -.707 24 57.941)","fill":"#FFA000","width":"14.6","height":"44.8"},"child":[]},{"tag":"g","attr":{"fill":"#9E6400"},"child":[{"tag":"rect","attr":{"x":"17.9","y":"20.2","transform":"matrix(-.707 -.707 .707 -.707 21.177 51.125)","width":"6.6","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"22.3","y":"15.2","transform":"matrix(-.707 -.707 .707 -.707 29.833 44.71)","width":"3.7","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"25.9","y":"12.2","transform":"matrix(-.707 -.707 .707 -.707 40.49 43.125)","width":"6.6","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"31.2","y":"6.3","transform":"matrix(.707 -.707 .707 .707 3.643 25.147)","width":"2","height":"3.7"},"child":[]},{"tag":"rect","attr":{"x":"6.3","y":"31.2","transform":"matrix(-.707 -.707 .707 -.707 -8.794 60.71)","width":"3.7","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9.9","y":"28.2","transform":"matrix(-.707 -.707 .707 -.707 1.863 59.125)","width":"6.6","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"14.3","y":"23.2","transform":"matrix(-.707 -.707 .707 -.707 10.52 52.71)","width":"3.7","height":"2"},"child":[]}]}]})(props);
};
function FcRules (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#42A5F5","d":"M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z"},"child":[]},{"tag":"rect","attr":{"x":"8","y":"3","fill":"#90CAF9","width":"32","height":"34"},"child":[]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"18","y":"15","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"19","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"23","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"27","width":"16","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"18","y":"31","width":"16","height":"2"},"child":[]}]},{"tag":"g","attr":{"fill":"#1976D2"},"child":[{"tag":"rect","attr":{"x":"14","y":"15","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"27","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"31","width":"2","height":"2"},"child":[]}]}]})(props);
};
function FcSafe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"8","y":"39","fill":"#455A64","width":"6","height":"3"},"child":[]},{"tag":"rect","attr":{"x":"34","y":"39","fill":"#455A64","width":"6","height":"3"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"path","attr":{"fill":"#90A4AE","d":"M40,38H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v26C41,37.6,40.6,38,40,38z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M29,14c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C39,18.5,34.5,14,29,14z M29,31 c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7s7,3.1,7,7C36,27.9,32.9,31,29,31z"},"child":[]},{"tag":"g","attr":{"fill":"#B0BEC5"},"child":[{"tag":"path","attr":{"d":"M35.3,19.1l0.4-0.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-0.4,0.4C34.4,18.1,34.9,18.6,35.3,19.1z"},"child":[]},{"tag":"path","attr":{"d":"M22.7,19.1c0.4-0.5,0.9-1,1.4-1.4l-0.4-0.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L22.7,19.1z"},"child":[]},{"tag":"path","attr":{"d":"M21,24c0-0.3,0-0.7,0.1-1h-0.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h0.6C21,24.7,21,24.3,21,24z"},"child":[]},{"tag":"path","attr":{"d":"M29,16c0.3,0,0.7,0,1,0.1v-0.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v0.6C28.3,16,28.7,16,29,16z"},"child":[]},{"tag":"path","attr":{"d":"M35.3,28.9c-0.4,0.5-0.9,1-1.4,1.4l0.4,0.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4 L35.3,28.9z"},"child":[]},{"tag":"path","attr":{"d":"M22.7,28.9l-0.4,0.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l0.4-0.4 C23.6,29.9,23.1,29.4,22.7,28.9z"},"child":[]},{"tag":"path","attr":{"d":"M37.5,23h-0.6c0,0.3,0.1,0.7,0.1,1s0,0.7-0.1,1h0.6c0.6,0,1-0.4,1-1S38.1,23,37.5,23z"},"child":[]},{"tag":"path","attr":{"d":"M29,32c-0.3,0-0.7,0-1-0.1v0.6c0,0.6,0.4,1,1,1s1-0.4,1-1v-0.6C29.7,32,29.3,32,29,32z"},"child":[]}]},{"tag":"path","attr":{"fill":"#455A64","d":"M12,20c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2s2-0.9,2-2v-8C14,20.9,13.1,20,12,20z"},"child":[]},{"tag":"path","attr":{"fill":"#CFD8DC","d":"M12,18c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2s2-0.9,2-2v-8C14,18.9,13.1,18,12,18z"},"child":[]}]})(props);
};
function FcSalesPerformance (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M38,13c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,12.1,41.3,13,38,13 z"},"child":[]},{"tag":"path","attr":{"d":"M38,10c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,9.1,41.3,10,38,10z"},"child":[]},{"tag":"path","attr":{"d":"M38,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,15.1,41.3,16,38,16 z"},"child":[]},{"tag":"path","attr":{"d":"M38,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,18.1,41.3,19,38,19 z"},"child":[]},{"tag":"path","attr":{"d":"M38,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,21.1,41.3,22,38,22 z"},"child":[]},{"tag":"path","attr":{"d":"M38,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,24.1,41.3,25,38,25 z"},"child":[]},{"tag":"path","attr":{"d":"M38,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,27.1,41.3,28,38,28 z"},"child":[]},{"tag":"path","attr":{"d":"M38,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,30.1,41.3,31,38,31 z"},"child":[]},{"tag":"path","attr":{"d":"M38,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,33.1,41.3,34,38,34 z"},"child":[]},{"tag":"path","attr":{"d":"M38,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,36.1,41.3,37,38,37 z"},"child":[]},{"tag":"path","attr":{"d":"M38,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,39.1,41.3,40,38,40 z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"38","cy":"8","rx":"6","ry":"2"},"child":[]},{"tag":"path","attr":{"d":"M38,12c-2.8,0-5.1-0.6-5.8-1.5C32.1,10.7,32,10.8,32,11c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,11.4,40.8,12,38,12z"},"child":[]},{"tag":"path","attr":{"d":"M38,15c-2.8,0-5.1-0.6-5.8-1.5C32.1,13.7,32,13.8,32,14c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,14.4,40.8,15,38,15z"},"child":[]},{"tag":"path","attr":{"d":"M38,18c-2.8,0-5.1-0.6-5.8-1.5C32.1,16.7,32,16.8,32,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,17.4,40.8,18,38,18z"},"child":[]},{"tag":"path","attr":{"d":"M38,21c-2.8,0-5.1-0.6-5.8-1.5C32.1,19.7,32,19.8,32,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,20.4,40.8,21,38,21z"},"child":[]},{"tag":"path","attr":{"d":"M38,24c-2.8,0-5.1-0.6-5.8-1.5C32.1,22.7,32,22.8,32,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,23.4,40.8,24,38,24z"},"child":[]},{"tag":"path","attr":{"d":"M38,27c-2.8,0-5.1-0.6-5.8-1.5C32.1,25.7,32,25.8,32,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,26.4,40.8,27,38,27z"},"child":[]},{"tag":"path","attr":{"d":"M38,30c-2.8,0-5.1-0.6-5.8-1.5C32.1,28.7,32,28.8,32,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,29.4,40.8,30,38,30z"},"child":[]},{"tag":"path","attr":{"d":"M38,33c-2.8,0-5.1-0.6-5.8-1.5C32.1,31.7,32,31.8,32,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,32.4,40.8,33,38,33z"},"child":[]},{"tag":"path","attr":{"d":"M38,36c-2.8,0-5.1-0.6-5.8-1.5C32.1,34.7,32,34.8,32,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,35.4,40.8,36,38,36z"},"child":[]},{"tag":"path","attr":{"d":"M38,39c-2.8,0-5.1-0.6-5.8-1.5C32.1,37.7,32,37.8,32,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,38.4,40.8,39,38,39z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M10,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,18.1,13.3,19,10,19 z"},"child":[]},{"tag":"path","attr":{"d":"M10,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,15.1,13.3,16,10,16 z"},"child":[]},{"tag":"path","attr":{"d":"M10,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,21.1,13.3,22,10,22 z"},"child":[]},{"tag":"path","attr":{"d":"M10,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,24.1,13.3,25,10,25 z"},"child":[]},{"tag":"path","attr":{"d":"M10,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,27.1,13.3,28,10,28 z"},"child":[]},{"tag":"path","attr":{"d":"M10,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,30.1,13.3,31,10,31 z"},"child":[]},{"tag":"path","attr":{"d":"M10,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,33.1,13.3,34,10,34 z"},"child":[]},{"tag":"path","attr":{"d":"M10,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,36.1,13.3,37,10,37 z"},"child":[]},{"tag":"path","attr":{"d":"M10,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,39.1,13.3,40,10,40 z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"10","cy":"14","rx":"6","ry":"2"},"child":[]},{"tag":"path","attr":{"d":"M10,18c-2.8,0-5.1-0.6-5.8-1.5C4.1,16.7,4,16.8,4,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,17.4,12.8,18,10,18z"},"child":[]},{"tag":"path","attr":{"d":"M10,21c-2.8,0-5.1-0.6-5.8-1.5C4.1,19.7,4,19.8,4,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,20.4,12.8,21,10,21z"},"child":[]},{"tag":"path","attr":{"d":"M10,24c-2.8,0-5.1-0.6-5.8-1.5C4.1,22.7,4,22.8,4,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,23.4,12.8,24,10,24z"},"child":[]},{"tag":"path","attr":{"d":"M10,27c-2.8,0-5.1-0.6-5.8-1.5C4.1,25.7,4,25.8,4,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,26.4,12.8,27,10,27z"},"child":[]},{"tag":"path","attr":{"d":"M10,30c-2.8,0-5.1-0.6-5.8-1.5C4.1,28.7,4,28.8,4,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,29.4,12.8,30,10,30z"},"child":[]},{"tag":"path","attr":{"d":"M10,33c-2.8,0-5.1-0.6-5.8-1.5C4.1,31.7,4,31.8,4,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,32.4,12.8,33,10,33z"},"child":[]},{"tag":"path","attr":{"d":"M10,36c-2.8,0-5.1-0.6-5.8-1.5C4.1,34.7,4,34.8,4,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,35.4,12.8,36,10,36z"},"child":[]},{"tag":"path","attr":{"d":"M10,39c-2.8,0-5.1-0.6-5.8-1.5C4.1,37.7,4,37.8,4,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,38.4,12.8,39,10,39z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"path","attr":{"d":"M24,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,27.1,27.3,28,24,28 z"},"child":[]},{"tag":"path","attr":{"d":"M24,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,24.1,27.3,25,24,25 z"},"child":[]},{"tag":"path","attr":{"d":"M24,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,30.1,27.3,31,24,31 z"},"child":[]},{"tag":"path","attr":{"d":"M24,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,33.1,27.3,34,24,34 z"},"child":[]},{"tag":"path","attr":{"d":"M24,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,36.1,27.3,37,24,37 z"},"child":[]},{"tag":"path","attr":{"d":"M24,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,39.1,27.3,40,24,40 z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"ellipse","attr":{"cx":"24","cy":"23","rx":"6","ry":"2"},"child":[]},{"tag":"path","attr":{"d":"M24,27c-2.8,0-5.1-0.6-5.8-1.5C18.1,25.7,18,25.8,18,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,26.4,26.8,27,24,27z"},"child":[]},{"tag":"path","attr":{"d":"M24,30c-2.8,0-5.1-0.6-5.8-1.5C18.1,28.7,18,28.8,18,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,29.4,26.8,30,24,30z"},"child":[]},{"tag":"path","attr":{"d":"M24,33c-2.8,0-5.1-0.6-5.8-1.5C18.1,31.7,18,31.8,18,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,32.4,26.8,33,24,33z"},"child":[]},{"tag":"path","attr":{"d":"M24,36c-2.8,0-5.1-0.6-5.8-1.5C18.1,34.7,18,34.8,18,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,35.4,26.8,36,24,36z"},"child":[]},{"tag":"path","attr":{"d":"M24,39c-2.8,0-5.1-0.6-5.8-1.5C18.1,37.7,18,37.8,18,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,38.4,26.8,39,24,39z"},"child":[]}]}]})(props);
};
function FcScatterPlot (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"},"child":[]},{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"circle","attr":{"cx":"39","cy":"11","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"31","cy":"13","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"37","cy":"19","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"34","cy":"26","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"28","cy":"20","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"26","cy":"28","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"23","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"21","cy":"33","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"30","r":"3"},"child":[]}]}]})(props);
};
function FcSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#616161"},"child":[{"tag":"rect","attr":{"x":"34.6","y":"28.1","transform":"matrix(.707 -.707 .707 .707 -15.154 36.586)","width":"4","height":"17"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"20","r":"16"},"child":[]}]},{"tag":"rect","attr":{"x":"36.2","y":"32.1","transform":"matrix(.707 -.707 .707 .707 -15.839 38.239)","fill":"#37474F","width":"4","height":"12.3"},"child":[]},{"tag":"circle","attr":{"fill":"#64B5F6","cx":"20","cy":"20","r":"13"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"},"child":[]}]})(props);
};
function FcSelfServiceKiosk (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#546E7A","d":"M44,30H4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V30z"},"child":[]},{"tag":"path","attr":{"fill":"#64B5F6","d":"M40,27H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v15C41,26.6,40.6,27,40,27z"},"child":[]},{"tag":"path","attr":{"fill":"#78909C","d":"M40,41H8c-2.2,0-4-1.8-4-4v-7h40v7C44,39.2,42.2,41,40,41z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"27","y":"34","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"34","width":"12","height":"2"},"child":[]},{"tag":"path","attr":{"d":"M18,35c0,1.1-1.3,2-3,2s-3-0.9-3-2H18z"},"child":[]}]}]})(props);
};
function FcSelfie (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFB74D","d":"M32.9,22c0-0.3,0.1-0.7,0.1-1c0-1.1,0-5.9,0-7c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,0.3,0,0.7,0.1,1H32.9z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M40,44H8c-2.2,0-4-1.8-4-4V26c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v14C44,42.2,42.2,44,40,44z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M7,26v14c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1V26c0-0.6-0.4-1-1-1H8C7.4,25,7,25.4,7,26z"},"child":[]},{"tag":"rect","attr":{"x":"40","y":"30","fill":"#78909C","width":"2","height":"6"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"32","fill":"#BF360C","width":"8","height":"9"},"child":[]},{"tag":"rect","attr":{"x":"20.5","y":"37.5","fill":"#FF9800","width":"5","height":"3.5"},"child":[]},{"tag":"path","attr":{"fill":"#FFB74D","d":"M27.5,32c0-3.8-9-2.5-9,0c0,0.5,0,3,0,3.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5C27.5,35,27.5,32.5,27.5,32z"},"child":[]},{"tag":"g","attr":{"fill":"#784719"},"child":[{"tag":"circle","attr":{"cx":"28","cy":"21","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"20","cy":"21","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"25","cy":"35.5","r":".5"},"child":[]},{"tag":"circle","attr":{"cx":"21","cy":"35.5","r":".5"},"child":[]}]},{"tag":"g","attr":{"fill":"#FF5722"},"child":[{"tag":"path","attr":{"d":"M23,27c-3,0-8,1.3-8,11l4,3v-6.5l6-3.5l2,2.5V41l4-3c0-2-0.8-10-6-10l-0.5-1H23z"},"child":[]},{"tag":"path","attr":{"d":"M16,22v-3l12-7l4,5v5h6.8C38.3,15.8,36.1,6,28,6l-1-2h-3C18.5,4,10.7,6.8,9.2,22H16z"},"child":[]}]}]})(props);
};
function FcSerialTasks (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#90CAF9","d":"M33,9H11v4h22c1.1,0,2,0.9,2,2v20H23v4h16V15C39,11.7,36.3,9,33,9z"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"6","fill":"#D81B60","width":"10","height":"10"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"32","y":"17","width":"10","height":"10"},"child":[]},{"tag":"rect","attr":{"x":"16","y":"32","width":"10","height":"10"},"child":[]},{"tag":"circle","attr":{"cx":"26","cy":"11","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"37","cy":"37","r":"5"},"child":[]}]}]})(props);
};
function FcServiceMark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"g","attr":{"fill":"#E1BEE7"},"child":[{"tag":"path","attr":{"d":"M16.7,28.2c0-3.8-7.3-2.2-7.3-8.1c0-0.7,0.4-4.8,5.5-4.8c5.1,0,5.4,4.5,5.4,5.3h-3.5c0-0.4,0-2.5-2-2.5 c-1.8,0-1.9,1.7-1.9,2c0,3,7.4,2,7.4,8.1c0,2-1.1,4.8-5.3,4.8C10.3,33,9,29.6,9,27.3h3.5c0,0.5-0.2,2.8,2.5,2.8 C16.8,30.2,16.7,28.5,16.7,28.2z"},"child":[]},{"tag":"path","attr":{"d":"M27.1,15.6L30.3,28l3.2-12.4h4.5v17.2h-3.5v-4.6l0.3-7.2l-3.4,11.8h-2.4l-3.4-11.8l0.3,7.2v4.6h-3.5V15.6 H27.1z"},"child":[]}]}]})(props);
};
function FcServices (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E65100","d":"M25.6,34.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L22,25.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L12.4,24 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L25.6,34.4z M16,38c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C21,35.8,18.8,38,16,38z"},"child":[]},{"tag":"path","attr":{"fill":"#FFA000","d":"M41.9,15.3C42,14.8,42,14.4,42,14s0-0.8-0.1-1.3l2.5-1.8c0.3-0.2,0.3-0.5,0.2-0.8l-2.5-4.3 c-0.2-0.3-0.5-0.4-0.8-0.2l-2.9,1.3c-0.7-0.5-1.4-0.9-2.2-1.3l-0.3-3.1C36,2.2,35.8,2,35.5,2h-4.9c-0.3,0-0.6,0.2-0.6,0.5l-0.3,3.1 c-0.8,0.3-1.5,0.7-2.2,1.3l-2.9-1.3c-0.3-0.1-0.6,0-0.8,0.2l-2.5,4.3c-0.2,0.3-0.1,0.6,0.2,0.8l2.5,1.8C24,13.2,24,13.6,24,14 s0,0.8,0.1,1.3l-2.5,1.8c-0.3,0.2-0.3,0.5-0.2,0.8l2.5,4.3c0.2,0.3,0.5,0.4,0.8,0.2l2.9-1.3c0.7,0.5,1.4,0.9,2.2,1.3l0.3,3.1 c0,0.3,0.3,0.5,0.6,0.5h4.9c0.3,0,0.6-0.2,0.6-0.5l0.3-3.1c0.8-0.3,1.5-0.7,2.2-1.3l2.9,1.3c0.3,0.1,0.6,0,0.8-0.2l2.5-4.3 c0.2-0.3,0.1-0.6-0.2-0.8L41.9,15.3z M33,19c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C38,16.8,35.8,19,33,19z"},"child":[]}]})(props);
};
function FcSettings (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"},"child":[]}]})(props);
};
function FcShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1976D2","d":"M38.1,31.2L19.4,24l18.7-7.2c1.5-0.6,2.3-2.3,1.7-3.9c-0.6-1.5-2.3-2.3-3.9-1.7l-26,10C8.8,21.6,8,22.8,8,24 s0.8,2.4,1.9,2.8l26,10c0.4,0.1,0.7,0.2,1.1,0.2c1.2,0,2.3-0.7,2.8-1.9C40.4,33.5,39.6,31.8,38.1,31.2z"},"child":[]},{"tag":"g","attr":{"fill":"#1E88E5"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"24","r":"7"},"child":[]},{"tag":"circle","attr":{"cx":"37","cy":"14","r":"7"},"child":[]},{"tag":"circle","attr":{"cx":"37","cy":"34","r":"7"},"child":[]}]}]})(props);
};
function FcShipped (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#8BC34A","d":"M43,36H29V14h10.6c0.9,0,1.6,0.6,1.9,1.4L45,26v8C45,35.1,44.1,36,43,36z"},"child":[]},{"tag":"path","attr":{"fill":"#388E3C","d":"M29,36H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2V36z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"36","r":"5"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"36","r":"5"},"child":[]}]},{"tag":"g","attr":{"fill":"#78909C"},"child":[{"tag":"circle","attr":{"cx":"37","cy":"36","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"36","r":"2"},"child":[]}]},{"tag":"path","attr":{"fill":"#37474F","d":"M41,25h-7c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h5.3c0.4,0,0.8,0.3,0.9,0.7l1.7,5.2c0,0.1,0.1,0.2,0.1,0.3V24 C42,24.6,41.6,25,41,25z"},"child":[]},{"tag":"polygon","attr":{"fill":"#DCEDC8","points":"21.8,13.8 13.9,21.7 10.2,17.9 8,20.1 13.9,26 24,15.9"},"child":[]}]})(props);
};
function FcShop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"5","y":"19","fill":"#CFD8DC","width":"38","height":"19"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"38","fill":"#B0BEC5","width":"38","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"27","y":"24","fill":"#455A64","width":"12","height":"18"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"24","fill":"#E3F2FD","width":"14","height":"11"},"child":[]},{"tag":"rect","attr":{"x":"10","y":"25","fill":"#1E88E5","width":"12","height":"9"},"child":[]},{"tag":"path","attr":{"fill":"#90A4AE","d":"M36.5,33.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S37,36.3,37,36v-2C37,33.7,36.8,33.5,36.5,33.5z"},"child":[]},{"tag":"g","attr":{"fill":"#558B2F"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"19","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"36","cy":"19","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"3"},"child":[]}]},{"tag":"path","attr":{"fill":"#7CB342","d":"M40,6H8C6.9,6,6,6.9,6,8v3h36V8C42,6.9,41.1,6,40,6z"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"11","fill":"#7CB342","width":"6","height":"8"},"child":[]},{"tag":"polygon","attr":{"fill":"#7CB342","points":"37,11 32,11 33,19 39,19"},"child":[]},{"tag":"polygon","attr":{"fill":"#7CB342","points":"11,11 16,11 15,19 9,19"},"child":[]},{"tag":"g","attr":{"fill":"#FFA000"},"child":[{"tag":"circle","attr":{"cx":"30","cy":"19","r":"3"},"child":[]},{"tag":"path","attr":{"d":"M45,19c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3L45,19z"},"child":[]},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"3"},"child":[]},{"tag":"path","attr":{"d":"M3,19c0,1.7,1.3,3,3,3s3-1.3,3-3s-1.3-3-3-3L3,19z"},"child":[]}]},{"tag":"g","attr":{"fill":"#FFC107"},"child":[{"tag":"polygon","attr":{"points":"32,11 27,11 27,19 33,19"},"child":[]},{"tag":"polygon","attr":{"points":"42,11 37,11 39,19 45,19"},"child":[]},{"tag":"polygon","attr":{"points":"16,11 21,11 21,19 15,19"},"child":[]},{"tag":"polygon","attr":{"points":"6,11 11,11 9,19 3,19"},"child":[]}]}]})(props);
};
function FcSignature (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M38.8,28.2C41.5,24.8,45,20.1,45,12c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,6.7-2.5,10.7-5,13.9c-0.6-1.9-1-4.2-1-6.9 c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1c-0.1,1.7-0.6,3.6-1,3.8c-0.4,0-0.9-1.4-1-2.8c0-0.5-0.5-0.9-1-0.9c-0.5,0-1,0.3-1,0.9 c-0.3,1.7-1.1,4.1-2,4.1c-0.4,0-0.6-0.1-0.7-0.3c-0.3-0.3-0.4-1-0.4-1.6c0-0.4,0.1-0.8,0.1-1.2c0-0.5-0.4-1-0.9-1 c-0.5,0-1,0.3-1.1,0.8c0,0.1-0.1,0.5-0.1,1.1C25.7,23.6,25.1,27,23,27c-0.7,0-1.1-0.2-1.4-0.7c-0.5-0.8-0.5-2.1,0-3.3c0,0,0,0,0-0.1 c0.1-0.1,0.1-0.3,0.2-0.4c0,0,0,0,0,0c0.8-1.6,1.7-2.5,3.2-2.5c0.6,0,1-0.4,1-1s-0.4-1-1-1c-4.2,0-5.4,4.1-6.6,8 c-1.4,4.8-2.7,8-6.4,8c-5.1,0-7-6.6-7-11c0-8.6,4.7-14,9-14c2.9,0,4,2.3,4.1,2.4c0.2,0.5,0.8,0.7,1.3,0.5c0.5-0.2,0.7-0.8,0.5-1.3 C19.8,10.4,18.2,7,14,7C8.6,7,3,13,3,23c0,10.3,5.9,13,9,13c5.1,0,6.8-4.5,8.1-8.5c0.7,0.9,1.7,1.5,2.9,1.5c2.2,0,3.5-1.6,4.2-3.6 c0.5,0.4,1.1,0.6,1.8,0.6c1.4,0,2.4-1.2,3-2.4c0.4,0.7,1.1,1.2,2,1.2c0.6,0,1.1-0.3,1.5-0.7c0.3,1.4,0.7,2.7,1,3.8 C35.1,29.7,34,31.2,34,33c0,1.7,1.3,3,3,3c1.8,0,3-1.6,3-3c0-1.3-0.5-2.7-1.1-4.3C38.9,28.5,38.8,28.4,38.8,28.2z M37,34 c-0.7,0-1-0.5-1-1c0-0.9,0.5-1.8,1.3-2.9c0.4,1.2,0.7,2.1,0.7,2.9C38,33.3,37.7,34,37,34z"},"child":[]},{"tag":"rect","attr":{"x":"3","y":"40","fill":"#90A4AE","width":"42","height":"2"},"child":[]}]})(props);
};
function FcSimCardChip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M5,35V13c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H9C6.8,39,5,37.2,5,35z"},"child":[]},{"tag":"g","attr":{"fill":"#FFD54F"},"child":[{"tag":"path","attr":{"d":"M43,21v-2H31c-1.1,0-2-0.9-2-2s0.9-2,2-2h1v-2h-1c-2.2,0-4,1.8-4,4s1.8,4,4,4h3v6h-3c-2.8,0-5,2.2-5,5 s2.2,5,5,5h2v-2h-2c-1.7,0-3-1.3-3-3s1.3-3,3-3h12v-2h-7v-6H43z"},"child":[]},{"tag":"path","attr":{"d":"M17,27h-3v-6h3c2.2,0,4-1.8,4-4s-1.8-4-4-4h-3v2h3c1.1,0,2,0.9,2,2s-0.9,2-2,2H5v2h7v6H5v2h12 c1.7,0,3,1.3,3,3s-1.3,3-3,3h-2v2h2c2.8,0,5-2.2,5-5S19.8,27,17,27z"},"child":[]}]}]})(props);
};
function FcSimCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M36,45H12c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h16.3c1.1,0,2.1,0.4,2.8,1.2l7.7,7.7c0.8,0.8,1.2,1.8,1.2,2.8 V41C40,43.2,38.2,45,36,45z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M32,38H16c-1.1,0-2-0.9-2-2V24c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12C34,37.1,33.1,38,32,38z"},"child":[]},{"tag":"path","attr":{"fill":"#FFD54F","d":"M29,30v3h5v2h-5v3h-2V22h2v6h5v2H29z M14,29v2h5v2h-5v2h5v3h2v-9H14z"},"child":[]}]})(props);
};
function FcSlrBackSide (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#5E35B1","d":"M40,10h-7.6l-2-3c-0.4-0.6-1-0.9-1.7-0.9h-9.6c-0.7,0-1.3,0.3-1.7,0.9l-2,3H8c-2.2,0-4,1.8-4,4v24 c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V14C44,11.8,42.2,10,40,10z"},"child":[]},{"tag":"path","attr":{"fill":"#F57C00","d":"M11,16h20c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1V17C10,16.4,10.4,16,11,16z"},"child":[]},{"tag":"polygon","attr":{"fill":"#942A09","points":"18.9,22 12,32 25.8,32"},"child":[]},{"tag":"circle","attr":{"fill":"#FFF9C4","cx":"27","cy":"21","r":"2"},"child":[]},{"tag":"polygon","attr":{"fill":"#BF360C","points":"25.2,26 20.4,32 30,32"},"child":[]},{"tag":"g","attr":{"fill":"#8667C4"},"child":[{"tag":"path","attr":{"d":"M34,10h6V9.2C40,8.5,39.5,8,38.8,8h-3.6C34.5,8,34,8.5,34,9.2V10z"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"18","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"24","r":"2"},"child":[]},{"tag":"circle","attr":{"cx":"38","cy":"30","r":"2"},"child":[]}]}]})(props);
};
function FcSmartphoneTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M4,39V7c0-2.2,1.8-4,4-4h22c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H8C5.8,43,4,41.2,4,39z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M30,6H8C7.4,6,7,6.4,7,7v29c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V7C31,6.4,30.6,6,30,6z"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"39","fill":"#78909C","width":"6","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"#E38939","d":"M24,41V17c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,45,24,43.2,24,41z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M40,16H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V17C41,16.4,40.6,16,40,16z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"34","cy":"42.5","r":"1.5"},"child":[]}]})(props);
};
function FcSms (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#009688","d":"M37,39H11l-6,6V11c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,36.3,40.3,39,37,39z"},"child":[]},{"tag":"g","attr":{"fill":"#fff"},"child":[{"tag":"circle","attr":{"cx":"24","cy":"22","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"34","cy":"22","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"22","r":"3"},"child":[]}]}]})(props);
};
function FcSoundRecordingCopyright (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"path","attr":{"fill":"#E1BEE7","d":"M20.7,27.2v8.4h-3.9V12.9h8.7c1.3,0,2.5,0.2,3.5,0.5c1,0.4,1.9,0.9,2.6,1.5c0.7,0.6,1.2,1.4,1.6,2.3 c0.4,0.9,0.6,1.8,0.6,2.9c0,1.1-0.2,2.1-0.6,3c-0.4,0.9-0.9,1.6-1.6,2.2c-0.7,0.6-1.6,1.1-2.6,1.4c-1,0.3-2.2,0.5-3.5,0.5H20.7z M20.7,24h4.7c0.8,0,1.4-0.1,2-0.3c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.8,0.8-1.2c0.2-0.5,0.2-1,0.2-1.6c0-0.5-0.1-1-0.2-1.5 c-0.2-0.5-0.4-0.9-0.8-1.3c-0.4-0.4-0.8-0.7-1.4-0.9c-0.5-0.2-1.2-0.3-2-0.3h-4.7V24z"},"child":[]}]})(props);
};
function FcSpeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#81D4FA","d":"M28,7.1v2c7.3,1,13,7.3,13,14.9s-5.7,13.9-13,14.9v2c8.4-1,15-8.2,15-16.9S36.4,8.1,28,7.1z"},"child":[]},{"tag":"path","attr":{"fill":"#546E7A","d":"M14,32H7c-1.1,0-2-0.9-2-2V18c0-1.1,0.9-2,2-2h7V32z"},"child":[]},{"tag":"polygon","attr":{"fill":"#78909C","points":"26,42 14,32 14,16 26,6"},"child":[]},{"tag":"path","attr":{"fill":"#03A9F4","d":"M28,17.3v2.1c1.8,0.8,3,2.5,3,4.6s-1.2,3.8-3,4.6v2.1c2.9-0.9,5-3.5,5-6.7S30.9,18.2,28,17.3z"},"child":[]},{"tag":"path","attr":{"fill":"#4FC3F7","d":"M28,12.2v2c4.6,0.9,8,5,8,9.8s-3.4,8.9-8,9.8v2c5.7-1,10-5.9,10-11.8S33.7,13.1,28,12.2z"},"child":[]}]})(props);
};
function FcSportsMode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#FF9800","cx":"28","cy":"9","r":"5"},"child":[]},{"tag":"path","attr":{"fill":"#00796B","d":"M29,27.3l-9.2-4.1c-1-0.5-1.5,1-2,2c-0.5,1-4.1,7.2-3.8,8.3c0.3,0.9,1.1,1.4,1.9,1.4c0.2,0,0.4,0,0.6-0.1 L28.8,31c0.8-0.2,1.4-1,1.4-1.8C30.2,28.4,29.7,27.6,29,27.3z"},"child":[]},{"tag":"path","attr":{"fill":"#009688","d":"M26.8,15.2l-2.2-1c-1.3-0.6-2.9,0-3.5,1.3L9.2,41.1c-0.5,1,0,2.2,1,2.7c0.3,0.1,0.6,0.2,0.9,0.2 c0.8,0,1.5-0.4,1.8-1.1c0,0,9.6-13.3,10.4-14.9s4.9-9.3,4.9-9.3C28.7,17.4,28.2,15.8,26.8,15.2z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M40.5,15.7c-0.7-0.8-2-1-2.8-0.3l-5,4.2l-6.4-3.5c-1.1-0.6-2.6-0.4-3.3,0.9c-0.8,1.3-0.4,2.9,0.8,3.4 l8.3,3.4c0.3,0.1,0.6,0.2,0.9,0.2c0.5,0,0.9-0.2,1.3-0.5l6-5C41.1,17.8,41.2,16.6,40.5,15.7z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M11.7,23.1l3.4-5.1l4.6,0.6l1.5-3.1c0.4-0.9,1.2-1.4,2.1-1.5c-0.1,0-0.2,0-0.2,0h-9c-0.7,0-1.3,0.3-1.7,0.9 l-4,6c-0.6,0.9-0.4,2.2,0.6,2.8C9.2,23.9,9.6,24,10,24C10.6,24,11.3,23.7,11.7,23.1z"},"child":[]}]})(props);
};
function FcStackOfPhotos (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"12.3","y":"12.3","transform":"matrix(.948 .318 -.318 .948 9.725 -6.994)","fill":"#64B5F6","width":"28","height":"28"},"child":[]},{"tag":"rect","attr":{"x":"15.6","y":"15.4","transform":"matrix(.951 .31 -.31 .951 9.176 -6.977)","fill":"#1E88E5","width":"22","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"8.1","y":"8.1","transform":"matrix(.983 .181 -.181 .983 4.385 -3.65)","fill":"#90CAF9","width":"28","height":"28"},"child":[]},{"tag":"rect","attr":{"x":"11.3","y":"11.2","transform":"matrix(.985 .175 -.175 .985 4.048 -3.566)","fill":"#42A5F5","width":"22","height":"20"},"child":[]},{"tag":"rect","attr":{"x":"4","y":"4","fill":"#BBDEFB","width":"28","height":"28"},"child":[]},{"tag":"rect","attr":{"x":"7","y":"7","fill":"#4CAF50","width":"22","height":"20"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M16,13c0-1.1,0.9-2,2-2s2,0.9,2,2s-2,4-2,4S16,14.1,16,13z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M20,21c0,1.1-0.9,2-2,2s-2-0.9-2-2s2-4,2-4S20,19.9,20,21z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M13.5,16.7c-1-0.6-1.3-1.8-0.7-2.7c0.6-1,1.8-1.3,2.7-0.7c1,0.6,2.5,3.7,2.5,3.7S14.5,17.3,13.5,16.7z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M22.5,17.3c1,0.6,1.3,1.8,0.7,2.7c-0.6,1-1.8,1.3-2.7,0.7C19.5,20.2,18,17,18,17S21.5,16.7,22.5,17.3z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M22.5,16.7c1-0.6,1.3-1.8,0.7-2.7c-0.6-1-1.8-1.3-2.7-0.7C19.5,13.8,18,17,18,17S21.5,17.3,22.5,16.7z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M13.5,17.3c-1,0.6-1.3,1.8-0.7,2.7c0.6,1,1.8,1.3,2.7,0.7c1-0.6,2.5-3.7,2.5-3.7S14.5,16.7,13.5,17.3z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFC107","cx":"18","cy":"17","r":"2"},"child":[]}]})(props);
};
function FcStart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F44336","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"},"child":[]},{"tag":"polygon","attr":{"fill":"#fff","points":"31,24 20,16 20,32"},"child":[]}]})(props);
};
function FcStatistics (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"23","y":"5","width":"2","height":"36"},"child":[]},{"tag":"rect","attr":{"x":"20.5","y":"31.4","transform":"matrix(.707 .707 -.707 .707 33.523 -3.921)","width":"2","height":"14.2"},"child":[]},{"tag":"rect","attr":{"x":"25.5","y":"31.4","transform":"matrix(-.707 .707 -.707 -.707 72.487 46.995)","width":"2","height":"14.2"},"child":[]}]},{"tag":"rect","attr":{"x":"4","y":"8","fill":"#CFD8DC","width":"40","height":"28"},"child":[]},{"tag":"g","attr":{"fill":"#607D8B"},"child":[{"tag":"rect","attr":{"x":"3","y":"7","width":"42","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"3","y":"35","width":"42","height":"2"},"child":[]},{"tag":"circle","attr":{"cx":"31.5","cy":"43.5","r":"1.5"},"child":[]},{"tag":"circle","attr":{"cx":"16.5","cy":"43.5","r":"1.5"},"child":[]}]},{"tag":"g","attr":{"fill":"#C51162"},"child":[{"tag":"polygon","attr":{"points":"31.9,18.9 26,24.9 20,18.9 11.9,26.9 14.1,29.1 20,23.1 26,29.1 34.1,21.1"},"child":[]},{"tag":"polygon","attr":{"points":"36,24 29,17 36,17"},"child":[]}]}]})(props);
};
function FcSteam (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M42,38c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4V38z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M18.459,33.645c-0.288,0-0.56-0.057-0.822-0.141l-0.005,0.02l-3.67-1.062\r\n\t\tc0.644,1.878,2.406,3.237,4.5,3.237c2.641,0,4.776-2.136,4.776-4.776s-2.135-4.777-4.776-4.777c-1.141,0-2.175,0.418-2.998,1.087\r\n\t\tL19,28.255c0.029,0.007,0.055,0.018,0.084,0.024l0.049,0.016v0.002c1.177,0.301,2.049,1.359,2.049,2.626\r\n\t\tC21.184,32.424,19.964,33.645,18.459,33.645z"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M30.923,24.299c3.222,0,5.837-2.615,5.837-5.838c0-3.222-2.615-5.837-5.837-5.837\r\n\t\tc-3.221,0-5.837,2.615-5.837,5.837C25.086,21.684,27.702,24.299,30.923,24.299z M30.92,14.409c2.24,0,4.056,1.813,4.056,4.052\r\n\t\tc0,2.241-1.815,4.053-4.056,4.053c-2.236,0-4.049-1.812-4.049-4.053C26.871,16.223,28.684,14.409,30.92,14.409z"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M38,6h-2.75h-22.5H10c-2.209,0-4,1.791-4,4v2.75v4.236v7.509l7.027,2.033\r\n\t\tc1.287-1.59,3.229-2.626,5.434-2.626c0.07,0,0.135,0.02,0.204,0.021l3.876-5.355c0-0.035-0.005-0.072-0.005-0.105\r\n\t\tc0-4.63,3.755-8.388,8.387-8.388c4.633,0,8.386,3.757,8.386,8.386c0,4.633-3.753,8.387-8.386,8.387\r\n\t\tc-0.044,0-0.087-0.006-0.132-0.007l-5.33,3.871c0.002,0.07,0.021,0.14,0.021,0.211c0,3.878-3.142,7.021-7.021,7.021\r\n\t\tc-3.593,0-6.52-2.707-6.937-6.188L6,30.158v2.583v2.509V38c0,2.209,1.791,4,4,4h2.75h22.5H38c2.209,0,4-1.791,4-4v-2.75v-22.5V10\r\n\t\tC42,7.791,40.209,6,38,6z"},"child":[]}]}]})(props);
};
function FcStumbleupon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E64A19","d":"M24.001,5c-10.494,0-19,8.506-19,19c0,10.493,8.506,19,19,19c10.493,0,19-8.507,19-19\r\n\tC43.001,13.506,34.494,5,24.001,5z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FFFFFF","d":"M24.001,19C23.998,19,24.004,19,24.001,19c-0.062-0.004-1,0-1,1v7.876C22.916,29.888,21.504,33,17.959,33\r\n\t\tc-3.607,0-4.958-3.065-4.958-4.958V24h4v4c0.038,0.709,0.629,1,1,1c0.665,0,0.972-0.361,1-1v-8.124c0-2.01,1.332-5,5-5\r\n\t\tc0.045,0,0.086,0.006,0.131,0.007c0,0,4.869-0.009,4.869,5.117c0,1.104-0.896,1.876-2,1.876s-2-0.771-2-1.876\r\n\t\tC25.001,19.124,24.041,19.003,24.001,19z M35.001,27.876c0,2.01-1.331,5.124-5,5.124s-5-3.114-5-5.124v-3.439\r\n\t\tc0.614,0.272,1.285,0.439,2,0.439c0.712,0,1.386-0.154,2-0.424V28c0.038,1,0.663,1,1,1c0.247,0,1,0,1-1v-4h4V27.876z"},"child":[]}]}]})(props);
};
function FcSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M44.7,11L36,19.6c0,0-2.6,0-5.2-2.6s-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8,0.4-14.4,4 c-5.4,5.4-0.6,12.3-2,13.7C12.9,28.7,5.1,34.7,4.9,35c-2.3,2.3-2.4,6-0.2,8.2c2.2,2.2,5.9,2.1,8.2-0.2c0.3-0.3,6.7-8.4,14.2-15.9 c1.4-1.4,8,3.7,13.6-1.8C44.2,21.7,45.9,15.9,44.7,11z M9.4,41.1c-1.4,0-2.5-1.1-2.5-2.5C6.9,37.1,8,36,9.4,36 c1.4,0,2.5,1.1,2.5,2.5C11.9,39.9,10.8,41.1,9.4,41.1z"},"child":[]}]})(props);
};
function FcSurvey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36,4H26c0,1.1-0.9,2-2,2s-2-0.9-2-2H12C9.8,4,8,5.8,8,8v32c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V8 C40,5.8,38.2,4,36,4z"},"child":[]},{"tag":"path","attr":{"fill":"#fff","d":"M36,41H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v32C37,40.6,36.6,41,36,41z"},"child":[]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"path","attr":{"d":"M26,4c0,1.1-0.9,2-2,2s-2-0.9-2-2h-7v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V4H26z"},"child":[]},{"tag":"path","attr":{"d":"M24,0c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S26.2,0,24,0z M24,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S25.1,6,24,6z"},"child":[]}]},{"tag":"g","attr":{"fill":"#CFD8DC"},"child":[{"tag":"rect","attr":{"x":"21","y":"20","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"19","width":"4","height":"4"},"child":[]}]},{"tag":"g","attr":{"fill":"#03A9F4"},"child":[{"tag":"rect","attr":{"x":"21","y":"29","width":"12","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"15","y":"28","width":"4","height":"4"},"child":[]}]}]})(props);
};
function FcSwitchCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#5E35B1"},"child":[{"tag":"path","attr":{"d":"M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"},"child":[]},{"tag":"path","attr":{"d":"M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"},"child":[]},{"tag":"path","attr":{"d":"M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"},"child":[]}]},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M34,25c0-5.5-4.5-10-10-10c-2.4,0-4.6,0.8-6.3,2.2l1.2,1.6c1.4-1.1,3.1-1.8,5.1-1.8c4.4,0,8,3.6,8,8h-3.5 l4.5,5.6l4.5-5.6H34z"},"child":[]},{"tag":"path","attr":{"fill":"#E8EAF6","d":"M29.1,31.2C27.7,32.3,25.9,33,24,33c-4.4,0-8-3.6-8-8h3.5L15,19.4L10.5,25H14c0,5.5,4.5,10,10,10 c2.4,0,4.6-0.8,6.3-2.2L29.1,31.2z"},"child":[]}]})(props);
};
function FcSynchronize (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#FF6F00","d":"M38.7,11.9l-3.1,2.5c2.2,2.7,3.4,6.1,3.4,9.5c0,8.3-6.7,15-15,15c-0.9,0-1.9-0.1-2.8-0.3l-0.7,3.9 c1.2,0.2,2.4,0.3,3.5,0.3c10.5,0,19-8.5,19-19C43,19.6,41.5,15.3,38.7,11.9z"},"child":[]},{"tag":"polygon","attr":{"fill":"#FF6F02","points":"31,8 42.9,9.6 33.1,19.4"},"child":[]},{"tag":"path","attr":{"fill":"#FF6F00","d":"M24,5C13.5,5,5,13.5,5,24c0,4.6,1.6,9,4.6,12.4l3-2.6C10.3,31.1,9,27.6,9,24c0-8.3,6.7-15,15-15 c0.9,0,1.9,0.1,2.8,0.3l0.7-3.9C26.4,5.1,25.2,5,24,5z"},"child":[]},{"tag":"polygon","attr":{"fill":"#FF6F02","points":"17,40 5.1,38.4 14.9,28.6"},"child":[]}]})(props);
};
function FcTabletAndroid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"41","fill":"#78909C","width":"6","height":"2"},"child":[]}]})(props);
};
function FcTemplate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"4","y":"7","fill":"#BBDEFB","width":"40","height":"34"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"12","fill":"#3F51B5","width":"30","height":"5"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"9","y":"21","width":"13","height":"16"},"child":[]},{"tag":"rect","attr":{"x":"26","y":"21","width":"13","height":"16"},"child":[]}]}]})(props);
};
function FcTimeline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,29H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H42 c0.6,0,1,0.4,1,1v8C43,28.6,42.6,29,42,29z"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"6","fill":"#CFD8DC","width":"2","height":"36"},"child":[]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"circle","attr":{"cx":"10","cy":"10","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"24","r":"3"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"38","r":"3"},"child":[]}]},{"tag":"path","attr":{"fill":"#448AFF","d":"M34,43H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H34 c0.6,0,1,0.4,1,1v8C35,42.6,34.6,43,34,43z"},"child":[]},{"tag":"path","attr":{"fill":"#00BCD4","d":"M35,15H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7C19.8,5.2,20.3,5,20.8,5H35 c0.6,0,1,0.4,1,1v8C36,14.6,35.6,15,35,15z"},"child":[]}]})(props);
};
function FcTodoList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"17.8,18.1 10.4,25.4 6.2,21.3 4,23.5 10.4,29.9 20,20.3"},"child":[]},{"tag":"polygon","attr":{"points":"17.8,5.1 10.4,12.4 6.2,8.3 4,10.5 10.4,16.9 20,7.3"},"child":[]},{"tag":"polygon","attr":{"points":"17.8,31.1 10.4,38.4 6.2,34.3 4,36.5 10.4,42.9 20,33.3"},"child":[]}]},{"tag":"g","attr":{"fill":"#90CAF9"},"child":[{"tag":"rect","attr":{"x":"24","y":"22","width":"20","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"24","y":"9","width":"20","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"24","y":"35","width":"20","height":"4"},"child":[]}]}]})(props);
};
function FcTouchscreenSmartphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#E38939","d":"M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"24","cy":"41","r":"1.5"},"child":[]},{"tag":"circle","attr":{"fill":"#E91E63","cx":"24","cy":"23","r":"2"},"child":[]},{"tag":"circle","attr":{"fill":"none","stroke":"#F48FB1","strokeWidth":"2","strokeMiterlimit":"10","cx":"24","cy":"23","r":"4"},"child":[]},{"tag":"circle","attr":{"fill":"none","stroke":"#F8BBD0","strokeMiterlimit":"10","cx":"24","cy":"23","r":"6.5"},"child":[]}]})(props);
};
function FcTrademark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"circle","attr":{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"},"child":[]},{"tag":"g","attr":{"fill":"#E1BEE7"},"child":[{"tag":"path","attr":{"d":"M20.6,18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9V18.5z"},"child":[]},{"tag":"path","attr":{"d":"M27.1,15.6L30.3,28l3.2-12.4h4.5v17.1h-3.5v-4.6l0.3-7.1l-3.4,11.8h-2.4L25.7,21l0.3,7.1v4.6h-3.5V15.6 H27.1z"},"child":[]}]}]})(props);
};
function FcTreeStructure (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"36.9,13.8 35.1,10.2 7.5,24 35.1,37.8 36.9,34.2 16.5,24"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"18","fill":"#D81B60","width":"12","height":"12"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"30","y":"6","width":"12","height":"12"},"child":[]},{"tag":"rect","attr":{"x":"30","y":"30","width":"12","height":"12"},"child":[]}]}]})(props);
};
function FcTwoSmartphones (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#37474F","d":"M6,36V8c0-2.2,1.8-4,4-4h14c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H10C7.8,40,6,38.2,6,36z"},"child":[]},{"tag":"path","attr":{"fill":"#BBDEFB","d":"M24,7H10C9.4,7,9,7.4,9,8v25c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V8C25,7.4,24.6,7,24,7z"},"child":[]},{"tag":"rect","attr":{"x":"14","y":"36","fill":"#78909C","width":"6","height":"2"},"child":[]},{"tag":"path","attr":{"fill":"#E38939","d":"M20,40V12c0-2.2,1.8-4,4-4h14c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H24C21.8,44,20,42.2,20,40z"},"child":[]},{"tag":"path","attr":{"fill":"#FFF3E0","d":"M38,11H24c-0.6,0-1,0.4-1,1v25c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V12C39,11.4,38.6,11,38,11z"},"child":[]},{"tag":"circle","attr":{"fill":"#A6642A","cx":"31","cy":"41","r":"1.5"},"child":[]}]})(props);
};
function FcUndo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#00BCD4"},"child":[{"tag":"polygon","attr":{"points":"5,18 19,6.3 19,29.7"},"child":[]},{"tag":"path","attr":{"d":"M28,14H16v8h12c2.8,0,5,2.2,5,5s-2.2,5-5,5h-3v8h3c7.2,0,13-5.8,13-13S35.2,14,28,14z"},"child":[]}]}]})(props);
};
function FcUnlock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#424242","d":"M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6h4C34,8.5,29.5,4,24,4z"},"child":[]},{"tag":"path","attr":{"fill":"#FB8C00","d":"M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"},"child":[]},{"tag":"circle","attr":{"fill":"#C76E00","cx":"24","cy":"31","r":"3"},"child":[]}]})(props);
};
function FcUpLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"4,19 18,30.7 18,7.3"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M42,27v13h-8V27c0-2.2-1.8-4-4-4H13v-8h17C36.6,15,42,20.4,42,27z"},"child":[]}]})(props);
};
function FcUpRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,19 30,30.7 30,7.3"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z"},"child":[]},{"tag":"polygon","attr":{"fill":"#3F51B5","points":"44,19 30,30.7 30,7.3"},"child":[]},{"tag":"path","attr":{"fill":"#3F51B5","d":"M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z"},"child":[]}]})(props);
};
function FcUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#3F51B5"},"child":[{"tag":"polygon","attr":{"points":"24,4 35.7,18 12.3,18"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"15","width":"8","height":"27"},"child":[]}]}]})(props);
};
function FcUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#009688"},"child":[{"tag":"polygon","attr":{"points":"24,10.9 35,24 13,24"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"40","width":"8","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"34","width":"8","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"20","y":"21","width":"8","height":"11"},"child":[]},{"tag":"rect","attr":{"x":"6","y":"4","width":"36","height":"4"},"child":[]}]}]})(props);
};
function FcUsb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#1565C0","d":"M38.701,24.355h-2.189l-0.467,2.265c0,0,2.277,0,2.51,0c0.233,0,1.545-0.167,1.545-1.267\r\n\tC40.1,24.266,38.701,24.355,38.701,24.355z M39.521,20.339h-2.15l-0.374,1.796c0,0,2.161,0,2.337,0c0.188,0,1.113-0.146,1.113-1.006\r\n\tC40.447,20.271,39.521,20.339,39.521,20.339z M44.064,23.109c0,0,1.436-0.743,1.436-3.093c0-3.715-4.377-3.516-4.377-3.516h-2.865\r\n\tl0.674-3c0,0-12.4,0-20.971,0c-9.344,0-12.158,6.774-12.158,6.774L5.736,20.5H2.547l-1.047,6h3.37l0.001,0.143\r\n\tc0,0-0.285,6.857,10.463,6.857c10.747,0,19.042,0,19.042,0l0.679-3c0.84,0,2.2,0,4.389,0c4.729,0,5.591-3.354,5.591-4.9\r\n\tC45.032,23.838,44.064,23.109,44.064,23.109z"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M38.701,24.355h-2.189l-0.467,2.265c0,0,2.277,0,2.51,0c0.233,0,1.545-0.167,1.545-1.267\r\n\tC40.1,24.266,38.701,24.355,38.701,24.355z M39.521,20.339h-2.15l-0.374,1.796c0,0,2.161,0,2.337,0c0.188,0,1.113-0.146,1.113-1.006\r\n\tC40.447,20.271,39.521,20.339,39.521,20.339z M14.022,29.5c-5.306,0-5.306-3.624-5.238-3.986c0.069-0.363,1.789-8.014,1.789-8.014\r\n\th3.84l-1.358,6.354c0,0-0.971,2.728,1.251,2.728c2.081,0,2.336-2.535,2.336-2.535l1.465-6.543h3.839l-1.582,6.979\r\n\tC20.365,24.48,20.258,29.5,14.022,29.5z M26.098,29.521c-2.674,0-4.958-1.262-4.856-4.14h3.438c0,0.576,0.086,1.627,1.633,1.627\r\n\tc0.627,0,1.688-0.266,1.688-1.133c0-1.631-5.597-0.785-5.597-4.57c0-2.063,1.899-3.785,4.989-3.785c4.976,0,4.613,3.749,4.613,3.749\r\n\th-3.369c0-1.044-0.664-1.204-1.463-1.204c-0.8,0-1.372,0.343-1.372,0.944c0,1.471,5.634,0.456,5.634,4.531\r\n\tC31.436,27.305,30.012,29.521,26.098,29.521z M39.366,29.5c-0.419,0-7.515,0-7.515,0l2.601-12c0,0,5.444,0,6.556,0\r\n\tc1.113,0,3.43,0.234,3.43,2.542c0,2.602-2.227,3.013-2.227,3.013s1.764,0.407,1.764,2.473C43.975,29.457,39.775,29.5,39.366,29.5z"},"child":[]}]})(props);
};
function FcVideoCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"},"child":[]},{"tag":"polygon","attr":{"fill":"#388E3C","points":"44,35 34,29 34,19 44,13"},"child":[]}]})(props);
};
function FcVideoFile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"polygon","attr":{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"},"child":[]},{"tag":"polygon","attr":{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"},"child":[]},{"tag":"polygon","attr":{"fill":"#1976D2","points":"30,28 20,22 20,34"},"child":[]}]})(props);
};
function FcVideoProjector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{"fill":"#546E7A"},"child":[{"tag":"rect","attr":{"x":"5","y":"34","width":"6","height":"3"},"child":[]},{"tag":"rect","attr":{"x":"37","y":"34","width":"6","height":"3"},"child":[]}]},{"tag":"path","attr":{"fill":"#78909C","d":"M44,35H4c-2.2,0-4-1.8-4-4V17c0-2.2,1.8-4,4-4h40c2.2,0,4,1.8,4,4v14C48,33.2,46.2,35,44,35z"},"child":[]},{"tag":"g","attr":{"fill":"#37474F"},"child":[{"tag":"rect","attr":{"x":"5","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"5","y":"27","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"9","y":"27","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"27","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"17","y":"27","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"19","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"23","width":"2","height":"2"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"27","width":"2","height":"2"},"child":[]}]},{"tag":"circle","attr":{"fill":"#37474F","cx":"37","cy":"24","r":"8"},"child":[]},{"tag":"circle","attr":{"fill":"#a0f","cx":"37","cy":"24","r":"6"},"child":[]},{"tag":"path","attr":{"fill":"#EA80FC","d":"M40.7,21.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C41.1,22.7,41.1,22.1,40.7,21.7z"},"child":[]}]})(props);
};
function FcViewDetails (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"7","y":"4","fill":"#BBDEFB","width":"34","height":"40"},"child":[]},{"tag":"g","attr":{"fill":"#2196F3"},"child":[{"tag":"rect","attr":{"x":"13","y":"26","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"18","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"34","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"13","y":"10","width":"4","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"26","width":"14","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"18","width":"14","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"34","width":"14","height":"4"},"child":[]},{"tag":"rect","attr":{"x":"21","y":"10","width":"14","height":"4"},"child":[]}]}]})(props);
};
function FcVip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#880E4F","d":"M38,43H10c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,41.2,40.2,43,38,43z"},"child":[]},{"tag":"g","attr":{"fill":"#FFD54F"},"child":[{"tag":"path","attr":{"d":"M15.9,28l2.1-9.1h2.8l-3.6,12.6h-2.6L11,18.9h2.8L15.9,28z"},"child":[]},{"tag":"path","attr":{"d":"M25.6,31.5h-2.5V18.9h2.5V31.5z"},"child":[]},{"tag":"path","attr":{"d":"M31.2,27.1v4.4h-2.5V18.9h4.3c3.7,0,4.1,3.4,4.1,4.2c0,1.2-0.5,4-4.1,4H31.2z M31.2,24.9h1.7 c1.3,0,1.5-1.1,1.5-1.9c0-1.6-0.9-2.1-1.5-2.1h-1.7V24.9z"},"child":[]}]}]})(props);
};
function FcVlc (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#F57C00","d":"M36.258,28.837c0,0-0.11-0.837-1.257-0.837c-0.216,0-2.392,0-3.719,0c0.798,2.671,1.497,5.135,1.497,5.279\r\n\tc0,2.387-3.401,3.393-8.917,3.393c-5.515,0-8.651-0.94-8.651-3.326c0-0.167,0.998-2.692,1.791-5.346c-1.591,0-3.863,0-4.063,0\r\n\tc-0.806,0-0.937,0.749-0.937,0.749L8.159,40.986L8.815,42h30.652l0.376-1.014L36.258,28.837z"},"child":[]},{"tag":"path","attr":{"fill":"#E0E0E0","d":"M24.001,6c-1.029,0-1.864,0.179-1.864,0.398c-0.492,1.483-8.122,26.143-8.122,26.774\r\n\tc0,2.388,4.471,3.827,9.985,3.827s9.986-1.439,9.986-3.827c0-0.549-7.614-25.268-8.122-26.774C25.865,6.179,25.031,6,24.001,6\r\n\tL24.001,6z"},"child":[]},{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#FF9800","d":"M33.196,30.447C32.032,32.232,28.341,34,24.046,34c-4.34,0-8.156-1.696-9.281-3.51\r\n\t\tc-0.499,1.483-0.892,2.647-0.892,3.28c0,2.386,4.533,4.229,10.128,4.229c5.595,0,10.131-1.844,10.131-4.229\r\n\t\tC34.132,33.222,33.713,31.955,33.196,30.447z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M31.387,24.314l-2.074-6.794c0,0-1.857,1.479-5.311,1.479c-3.453,0-5.316-1.479-5.316-1.479l-2.081,6.806\r\n\t\tc0,0,2.068,2.674,7.397,2.674C29.375,27,31.387,24.314,31.387,24.314z"},"child":[]},{"tag":"path","attr":{"fill":"#FF9800","d":"M27.241,10.809l-1.376-4.41c0,0-0.083-0.398-1.864-0.398c-1.844,0-1.864,0.398-1.864,0.398l-1.376,4.407\r\n\t\tc0,0,0.885,1.194,3.239,1.194C26.355,12,27.241,10.809,27.241,10.809z"},"child":[]}]}]})(props);
};
function FcVoicePresentation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#2196F3","d":"M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z"},"child":[]},{"tag":"circle","attr":{"fill":"#FFA726","cx":"17","cy":"19","r":"8"},"child":[]},{"tag":"path","attr":{"fill":"#607D8B","d":"M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z"},"child":[]}]})(props);
};
function FcVoicemail (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#4CAF50","d":"M48,24c0-6.1-4.9-11-11-11s-11,4.9-11,11c0,2.7,0.9,5.1,2.5,7h-9c1.6-1.9,2.5-4.3,2.5-7c0-6.1-4.9-11-11-11 S0,17.9,0,24s4.9,11,11,11h27v-0.1C43.6,34.4,48,29.7,48,24z M4,24c0-3.9,3.1-7,7-7s7,3.1,7,7s-3.1,7-7,7S4,27.9,4,24z M37,31 c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7S40.9,31,37,31z"},"child":[]}]})(props);
};
function FcWebcam (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#455A64","d":"M36.5,44H11.5c-1.1,0-1.8-1.2-1.3-2.2L13,37h22l2.7,4.8C38.3,42.8,37.6,44,36.5,44z"},"child":[]},{"tag":"circle","attr":{"fill":"#78909C","cx":"24","cy":"23","r":"18"},"child":[]},{"tag":"path","attr":{"fill":"#455A64","d":"M24,35c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12s12,5.4,12,12C36,29.6,30.6,35,24,35z"},"child":[]},{"tag":"circle","attr":{"fill":"#42A5F5","cx":"24","cy":"23","r":"9"},"child":[]},{"tag":"path","attr":{"fill":"#90CAF9","d":"M28.8,20c-1.2-1.4-3-2.2-4.8-2.2s-3.6,0.8-4.8,2.2c-0.5,0.5-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.4,1.8-0.1 c1.5-1.7,4.3-1.7,5.8,0c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.6-0.1,0.9-0.3C29.2,21.4,29.3,20.5,28.8,20z"},"child":[]}]})(props);
};
function FcWiFiLogo (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"fill":"#3F51B5","d":"M46,26.48c0,4.527-3.268,7.52-7.3,7.52H9.299C5.269,34,2,30.634,2,26.48V21.52C2,17.366,5.269,14,9.299,14\r\n\t\tH38.7c4.032,0,7.3,3.366,7.3,7.52V26.48z"},"child":[]},{"tag":"ellipse","attr":{"fill":"#3F51B5","cx":"24","cy":"24","rx":"14.902","ry":"15"},"child":[]}]},{"tag":"g","attr":{},"child":[{"tag":"polygon","attr":{"fill":"#FFFFFF","points":"17,19 14.264,19 13.427,24.859 12.388,19.028 9.93,19.028 8.864,24.859 8.054,19.028 5.266,19.028 \r\n\t\t7.597,29 10.056,29 11.12,22.854 12.209,29 14.693,29 \t"},"child":[]},{"tag":"rect","attr":{"x":"19","y":"22","fill":"#FFFFFF","width":"2.508","height":"7"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M21.5,19.747C21.5,20.44,20.94,21,20.25,21S19,20.44,19,19.747c0-0.696,0.56-1.258,1.25-1.258\r\n\t\tS21.5,19.051,21.5,19.747z"},"child":[]},{"tag":"path","attr":{"fill":"#FFFFFF","d":"M38.561,16c-4.818,0-7.979,0-7.979,0S25,16.193,25,21.914v4.336c0,0,0.101,2.941-3,5.75h16.785\r\n\t\tc0,0,5.215,0,5.215-5.553c0-4.879,0-4.879,0-4.879S43.772,16,38.561,16z M37.339,21.369h-5.651v2.236h5.094v2.344h-5.094V29H29V19\r\n\t\th8.339V21.369z M40.25,18.489c0.689,0,1.25,0.562,1.25,1.258C41.5,20.44,40.939,21,40.25,21S39,20.44,39,19.747\r\n\t\tC39,19.051,39.561,18.489,40.25,18.489z M41.508,29H39v-7h2.508V29z"},"child":[]}]}]})(props);
};
function FcWikipedia (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1.1","x":"0px","y":"0px","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#CFD8DC","d":"M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"},"child":[]},{"tag":"path","attr":{"fill":"#37474F","d":"M39,17.271c0,0.191-0.148,0.349-0.334,0.349h-1.799l-8.164,18.179c-0.052,0.12-0.17,0.2-0.297,0.202h-0.004\r\n\tc-0.127,0-0.242-0.074-0.298-0.193l-3.874-8.039l-4.18,8.049c-0.06,0.116-0.167,0.181-0.303,0.184\r\n\tc-0.125-0.004-0.239-0.082-0.292-0.199l-8.252-18.182h-1.87C9.149,17.619,9,17.462,9,17.271V16.35C9,16.155,9.149,16,9.333,16h6.657\r\n\tc0.184,0,0.333,0.155,0.333,0.35v0.921c0,0.191-0.149,0.349-0.333,0.349h-1.433l5.696,13.748l2.964-5.793l-3.757-7.953h-0.904\r\n\tc-0.184,0-0.333-0.157-0.333-0.35V16.35c0-0.191,0.149-0.348,0.333-0.348h4.924c0.184,0,0.333,0.156,0.333,0.348v0.922\r\n\tc0,0.192-0.149,0.35-0.333,0.35h-0.867l2.162,4.948l2.572-4.948H25.77c-0.187,0-0.334-0.157-0.334-0.35V16.35\r\n\tc0-0.191,0.147-0.348,0.334-0.348h4.784c0.187,0,0.333,0.156,0.333,0.348v0.922c0,0.192-0.146,0.35-0.333,0.35h-1.05l-3.757,7.141\r\n\tl3.063,6.584l5.905-13.725h-1.872c-0.184,0-0.334-0.157-0.334-0.35V16.35c0-0.191,0.15-0.348,0.334-0.348h5.822\r\n\tc0.186,0,0.334,0.156,0.334,0.348V17.271z"},"child":[]}]})(props);
};
function FcWorkflow (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"rect","attr":{"x":"7","y":"31","fill":"#00BCD4","width":"10","height":"10"},"child":[]},{"tag":"path","attr":{"fill":"#00BCD4","d":"M35.3,19.3l-5.6-5.6c-0.4-0.4-0.4-1,0-1.4l5.6-5.6c0.4-0.4,1-0.4,1.4,0l5.6,5.6c0.4,0.4,0.4,1,0,1.4 l-5.6,5.6C36.3,19.7,35.7,19.7,35.3,19.3z"},"child":[]},{"tag":"circle","attr":{"fill":"#3F51B5","cx":"12","cy":"13","r":"6"},"child":[]},{"tag":"circle","attr":{"fill":"#448AFF","cx":"36","cy":"36","r":"6"},"child":[]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"11","y":"24","width":"2","height":"5"},"child":[]},{"tag":"polygon","attr":{"points":"12,21 9,25 15,25"},"child":[]}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"20","y":"12","width":"5","height":"2"},"child":[]},{"tag":"polygon","attr":{"points":"28,13 24,10 24,16"},"child":[]}]},{"tag":"g","attr":{"fill":"#90A4AE"},"child":[{"tag":"rect","attr":{"x":"35","y":"21","width":"2","height":"5"},"child":[]},{"tag":"polygon","attr":{"points":"36,29 39,25 33,25"},"child":[]}]}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/hi/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/react-icons/hi/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiAcademicCap: () => (/* binding */ HiAcademicCap),
/* harmony export */   HiAdjustments: () => (/* binding */ HiAdjustments),
/* harmony export */   HiAnnotation: () => (/* binding */ HiAnnotation),
/* harmony export */   HiArchive: () => (/* binding */ HiArchive),
/* harmony export */   HiArrowCircleDown: () => (/* binding */ HiArrowCircleDown),
/* harmony export */   HiArrowCircleLeft: () => (/* binding */ HiArrowCircleLeft),
/* harmony export */   HiArrowCircleRight: () => (/* binding */ HiArrowCircleRight),
/* harmony export */   HiArrowCircleUp: () => (/* binding */ HiArrowCircleUp),
/* harmony export */   HiArrowDown: () => (/* binding */ HiArrowDown),
/* harmony export */   HiArrowLeft: () => (/* binding */ HiArrowLeft),
/* harmony export */   HiArrowNarrowDown: () => (/* binding */ HiArrowNarrowDown),
/* harmony export */   HiArrowNarrowLeft: () => (/* binding */ HiArrowNarrowLeft),
/* harmony export */   HiArrowNarrowRight: () => (/* binding */ HiArrowNarrowRight),
/* harmony export */   HiArrowNarrowUp: () => (/* binding */ HiArrowNarrowUp),
/* harmony export */   HiArrowRight: () => (/* binding */ HiArrowRight),
/* harmony export */   HiArrowSmDown: () => (/* binding */ HiArrowSmDown),
/* harmony export */   HiArrowSmLeft: () => (/* binding */ HiArrowSmLeft),
/* harmony export */   HiArrowSmRight: () => (/* binding */ HiArrowSmRight),
/* harmony export */   HiArrowSmUp: () => (/* binding */ HiArrowSmUp),
/* harmony export */   HiArrowUp: () => (/* binding */ HiArrowUp),
/* harmony export */   HiArrowsExpand: () => (/* binding */ HiArrowsExpand),
/* harmony export */   HiAtSymbol: () => (/* binding */ HiAtSymbol),
/* harmony export */   HiBackspace: () => (/* binding */ HiBackspace),
/* harmony export */   HiBadgeCheck: () => (/* binding */ HiBadgeCheck),
/* harmony export */   HiBan: () => (/* binding */ HiBan),
/* harmony export */   HiBeaker: () => (/* binding */ HiBeaker),
/* harmony export */   HiBell: () => (/* binding */ HiBell),
/* harmony export */   HiBookOpen: () => (/* binding */ HiBookOpen),
/* harmony export */   HiBookmark: () => (/* binding */ HiBookmark),
/* harmony export */   HiBookmarkAlt: () => (/* binding */ HiBookmarkAlt),
/* harmony export */   HiBriefcase: () => (/* binding */ HiBriefcase),
/* harmony export */   HiCake: () => (/* binding */ HiCake),
/* harmony export */   HiCalculator: () => (/* binding */ HiCalculator),
/* harmony export */   HiCalendar: () => (/* binding */ HiCalendar),
/* harmony export */   HiCamera: () => (/* binding */ HiCamera),
/* harmony export */   HiCash: () => (/* binding */ HiCash),
/* harmony export */   HiChartBar: () => (/* binding */ HiChartBar),
/* harmony export */   HiChartPie: () => (/* binding */ HiChartPie),
/* harmony export */   HiChartSquareBar: () => (/* binding */ HiChartSquareBar),
/* harmony export */   HiChat: () => (/* binding */ HiChat),
/* harmony export */   HiChatAlt: () => (/* binding */ HiChatAlt),
/* harmony export */   HiChatAlt2: () => (/* binding */ HiChatAlt2),
/* harmony export */   HiCheck: () => (/* binding */ HiCheck),
/* harmony export */   HiCheckCircle: () => (/* binding */ HiCheckCircle),
/* harmony export */   HiChevronDoubleDown: () => (/* binding */ HiChevronDoubleDown),
/* harmony export */   HiChevronDoubleLeft: () => (/* binding */ HiChevronDoubleLeft),
/* harmony export */   HiChevronDoubleRight: () => (/* binding */ HiChevronDoubleRight),
/* harmony export */   HiChevronDoubleUp: () => (/* binding */ HiChevronDoubleUp),
/* harmony export */   HiChevronDown: () => (/* binding */ HiChevronDown),
/* harmony export */   HiChevronLeft: () => (/* binding */ HiChevronLeft),
/* harmony export */   HiChevronRight: () => (/* binding */ HiChevronRight),
/* harmony export */   HiChevronUp: () => (/* binding */ HiChevronUp),
/* harmony export */   HiChip: () => (/* binding */ HiChip),
/* harmony export */   HiClipboard: () => (/* binding */ HiClipboard),
/* harmony export */   HiClipboardCheck: () => (/* binding */ HiClipboardCheck),
/* harmony export */   HiClipboardCopy: () => (/* binding */ HiClipboardCopy),
/* harmony export */   HiClipboardList: () => (/* binding */ HiClipboardList),
/* harmony export */   HiClock: () => (/* binding */ HiClock),
/* harmony export */   HiCloud: () => (/* binding */ HiCloud),
/* harmony export */   HiCloudDownload: () => (/* binding */ HiCloudDownload),
/* harmony export */   HiCloudUpload: () => (/* binding */ HiCloudUpload),
/* harmony export */   HiCode: () => (/* binding */ HiCode),
/* harmony export */   HiCog: () => (/* binding */ HiCog),
/* harmony export */   HiCollection: () => (/* binding */ HiCollection),
/* harmony export */   HiColorSwatch: () => (/* binding */ HiColorSwatch),
/* harmony export */   HiCreditCard: () => (/* binding */ HiCreditCard),
/* harmony export */   HiCube: () => (/* binding */ HiCube),
/* harmony export */   HiCubeTransparent: () => (/* binding */ HiCubeTransparent),
/* harmony export */   HiCurrencyBangladeshi: () => (/* binding */ HiCurrencyBangladeshi),
/* harmony export */   HiCurrencyDollar: () => (/* binding */ HiCurrencyDollar),
/* harmony export */   HiCurrencyEuro: () => (/* binding */ HiCurrencyEuro),
/* harmony export */   HiCurrencyPound: () => (/* binding */ HiCurrencyPound),
/* harmony export */   HiCurrencyRupee: () => (/* binding */ HiCurrencyRupee),
/* harmony export */   HiCurrencyYen: () => (/* binding */ HiCurrencyYen),
/* harmony export */   HiCursorClick: () => (/* binding */ HiCursorClick),
/* harmony export */   HiDatabase: () => (/* binding */ HiDatabase),
/* harmony export */   HiDesktopComputer: () => (/* binding */ HiDesktopComputer),
/* harmony export */   HiDeviceMobile: () => (/* binding */ HiDeviceMobile),
/* harmony export */   HiDeviceTablet: () => (/* binding */ HiDeviceTablet),
/* harmony export */   HiDocument: () => (/* binding */ HiDocument),
/* harmony export */   HiDocumentAdd: () => (/* binding */ HiDocumentAdd),
/* harmony export */   HiDocumentDownload: () => (/* binding */ HiDocumentDownload),
/* harmony export */   HiDocumentDuplicate: () => (/* binding */ HiDocumentDuplicate),
/* harmony export */   HiDocumentRemove: () => (/* binding */ HiDocumentRemove),
/* harmony export */   HiDocumentReport: () => (/* binding */ HiDocumentReport),
/* harmony export */   HiDocumentSearch: () => (/* binding */ HiDocumentSearch),
/* harmony export */   HiDocumentText: () => (/* binding */ HiDocumentText),
/* harmony export */   HiDotsCircleHorizontal: () => (/* binding */ HiDotsCircleHorizontal),
/* harmony export */   HiDotsHorizontal: () => (/* binding */ HiDotsHorizontal),
/* harmony export */   HiDotsVertical: () => (/* binding */ HiDotsVertical),
/* harmony export */   HiDownload: () => (/* binding */ HiDownload),
/* harmony export */   HiDuplicate: () => (/* binding */ HiDuplicate),
/* harmony export */   HiEmojiHappy: () => (/* binding */ HiEmojiHappy),
/* harmony export */   HiEmojiSad: () => (/* binding */ HiEmojiSad),
/* harmony export */   HiExclamation: () => (/* binding */ HiExclamation),
/* harmony export */   HiExclamationCircle: () => (/* binding */ HiExclamationCircle),
/* harmony export */   HiExternalLink: () => (/* binding */ HiExternalLink),
/* harmony export */   HiEye: () => (/* binding */ HiEye),
/* harmony export */   HiEyeOff: () => (/* binding */ HiEyeOff),
/* harmony export */   HiFastForward: () => (/* binding */ HiFastForward),
/* harmony export */   HiFilm: () => (/* binding */ HiFilm),
/* harmony export */   HiFilter: () => (/* binding */ HiFilter),
/* harmony export */   HiFingerPrint: () => (/* binding */ HiFingerPrint),
/* harmony export */   HiFire: () => (/* binding */ HiFire),
/* harmony export */   HiFlag: () => (/* binding */ HiFlag),
/* harmony export */   HiFolder: () => (/* binding */ HiFolder),
/* harmony export */   HiFolderAdd: () => (/* binding */ HiFolderAdd),
/* harmony export */   HiFolderDownload: () => (/* binding */ HiFolderDownload),
/* harmony export */   HiFolderOpen: () => (/* binding */ HiFolderOpen),
/* harmony export */   HiFolderRemove: () => (/* binding */ HiFolderRemove),
/* harmony export */   HiGift: () => (/* binding */ HiGift),
/* harmony export */   HiGlobe: () => (/* binding */ HiGlobe),
/* harmony export */   HiGlobeAlt: () => (/* binding */ HiGlobeAlt),
/* harmony export */   HiHand: () => (/* binding */ HiHand),
/* harmony export */   HiHashtag: () => (/* binding */ HiHashtag),
/* harmony export */   HiHeart: () => (/* binding */ HiHeart),
/* harmony export */   HiHome: () => (/* binding */ HiHome),
/* harmony export */   HiIdentification: () => (/* binding */ HiIdentification),
/* harmony export */   HiInbox: () => (/* binding */ HiInbox),
/* harmony export */   HiInboxIn: () => (/* binding */ HiInboxIn),
/* harmony export */   HiInformationCircle: () => (/* binding */ HiInformationCircle),
/* harmony export */   HiKey: () => (/* binding */ HiKey),
/* harmony export */   HiLibrary: () => (/* binding */ HiLibrary),
/* harmony export */   HiLightBulb: () => (/* binding */ HiLightBulb),
/* harmony export */   HiLightningBolt: () => (/* binding */ HiLightningBolt),
/* harmony export */   HiLink: () => (/* binding */ HiLink),
/* harmony export */   HiLocationMarker: () => (/* binding */ HiLocationMarker),
/* harmony export */   HiLockClosed: () => (/* binding */ HiLockClosed),
/* harmony export */   HiLockOpen: () => (/* binding */ HiLockOpen),
/* harmony export */   HiLogin: () => (/* binding */ HiLogin),
/* harmony export */   HiLogout: () => (/* binding */ HiLogout),
/* harmony export */   HiMail: () => (/* binding */ HiMail),
/* harmony export */   HiMailOpen: () => (/* binding */ HiMailOpen),
/* harmony export */   HiMap: () => (/* binding */ HiMap),
/* harmony export */   HiMenu: () => (/* binding */ HiMenu),
/* harmony export */   HiMenuAlt1: () => (/* binding */ HiMenuAlt1),
/* harmony export */   HiMenuAlt2: () => (/* binding */ HiMenuAlt2),
/* harmony export */   HiMenuAlt3: () => (/* binding */ HiMenuAlt3),
/* harmony export */   HiMenuAlt4: () => (/* binding */ HiMenuAlt4),
/* harmony export */   HiMicrophone: () => (/* binding */ HiMicrophone),
/* harmony export */   HiMinus: () => (/* binding */ HiMinus),
/* harmony export */   HiMinusCircle: () => (/* binding */ HiMinusCircle),
/* harmony export */   HiMinusSm: () => (/* binding */ HiMinusSm),
/* harmony export */   HiMoon: () => (/* binding */ HiMoon),
/* harmony export */   HiMusicNote: () => (/* binding */ HiMusicNote),
/* harmony export */   HiNewspaper: () => (/* binding */ HiNewspaper),
/* harmony export */   HiOfficeBuilding: () => (/* binding */ HiOfficeBuilding),
/* harmony export */   HiOutlineAcademicCap: () => (/* binding */ HiOutlineAcademicCap),
/* harmony export */   HiOutlineAdjustments: () => (/* binding */ HiOutlineAdjustments),
/* harmony export */   HiOutlineAnnotation: () => (/* binding */ HiOutlineAnnotation),
/* harmony export */   HiOutlineArchive: () => (/* binding */ HiOutlineArchive),
/* harmony export */   HiOutlineArrowCircleDown: () => (/* binding */ HiOutlineArrowCircleDown),
/* harmony export */   HiOutlineArrowCircleLeft: () => (/* binding */ HiOutlineArrowCircleLeft),
/* harmony export */   HiOutlineArrowCircleRight: () => (/* binding */ HiOutlineArrowCircleRight),
/* harmony export */   HiOutlineArrowCircleUp: () => (/* binding */ HiOutlineArrowCircleUp),
/* harmony export */   HiOutlineArrowDown: () => (/* binding */ HiOutlineArrowDown),
/* harmony export */   HiOutlineArrowLeft: () => (/* binding */ HiOutlineArrowLeft),
/* harmony export */   HiOutlineArrowNarrowDown: () => (/* binding */ HiOutlineArrowNarrowDown),
/* harmony export */   HiOutlineArrowNarrowLeft: () => (/* binding */ HiOutlineArrowNarrowLeft),
/* harmony export */   HiOutlineArrowNarrowRight: () => (/* binding */ HiOutlineArrowNarrowRight),
/* harmony export */   HiOutlineArrowNarrowUp: () => (/* binding */ HiOutlineArrowNarrowUp),
/* harmony export */   HiOutlineArrowRight: () => (/* binding */ HiOutlineArrowRight),
/* harmony export */   HiOutlineArrowSmDown: () => (/* binding */ HiOutlineArrowSmDown),
/* harmony export */   HiOutlineArrowSmLeft: () => (/* binding */ HiOutlineArrowSmLeft),
/* harmony export */   HiOutlineArrowSmRight: () => (/* binding */ HiOutlineArrowSmRight),
/* harmony export */   HiOutlineArrowSmUp: () => (/* binding */ HiOutlineArrowSmUp),
/* harmony export */   HiOutlineArrowUp: () => (/* binding */ HiOutlineArrowUp),
/* harmony export */   HiOutlineArrowsExpand: () => (/* binding */ HiOutlineArrowsExpand),
/* harmony export */   HiOutlineAtSymbol: () => (/* binding */ HiOutlineAtSymbol),
/* harmony export */   HiOutlineBackspace: () => (/* binding */ HiOutlineBackspace),
/* harmony export */   HiOutlineBadgeCheck: () => (/* binding */ HiOutlineBadgeCheck),
/* harmony export */   HiOutlineBan: () => (/* binding */ HiOutlineBan),
/* harmony export */   HiOutlineBeaker: () => (/* binding */ HiOutlineBeaker),
/* harmony export */   HiOutlineBell: () => (/* binding */ HiOutlineBell),
/* harmony export */   HiOutlineBookOpen: () => (/* binding */ HiOutlineBookOpen),
/* harmony export */   HiOutlineBookmark: () => (/* binding */ HiOutlineBookmark),
/* harmony export */   HiOutlineBookmarkAlt: () => (/* binding */ HiOutlineBookmarkAlt),
/* harmony export */   HiOutlineBriefcase: () => (/* binding */ HiOutlineBriefcase),
/* harmony export */   HiOutlineCake: () => (/* binding */ HiOutlineCake),
/* harmony export */   HiOutlineCalculator: () => (/* binding */ HiOutlineCalculator),
/* harmony export */   HiOutlineCalendar: () => (/* binding */ HiOutlineCalendar),
/* harmony export */   HiOutlineCamera: () => (/* binding */ HiOutlineCamera),
/* harmony export */   HiOutlineCash: () => (/* binding */ HiOutlineCash),
/* harmony export */   HiOutlineChartBar: () => (/* binding */ HiOutlineChartBar),
/* harmony export */   HiOutlineChartPie: () => (/* binding */ HiOutlineChartPie),
/* harmony export */   HiOutlineChartSquareBar: () => (/* binding */ HiOutlineChartSquareBar),
/* harmony export */   HiOutlineChat: () => (/* binding */ HiOutlineChat),
/* harmony export */   HiOutlineChatAlt: () => (/* binding */ HiOutlineChatAlt),
/* harmony export */   HiOutlineChatAlt2: () => (/* binding */ HiOutlineChatAlt2),
/* harmony export */   HiOutlineCheck: () => (/* binding */ HiOutlineCheck),
/* harmony export */   HiOutlineCheckCircle: () => (/* binding */ HiOutlineCheckCircle),
/* harmony export */   HiOutlineChevronDoubleDown: () => (/* binding */ HiOutlineChevronDoubleDown),
/* harmony export */   HiOutlineChevronDoubleLeft: () => (/* binding */ HiOutlineChevronDoubleLeft),
/* harmony export */   HiOutlineChevronDoubleRight: () => (/* binding */ HiOutlineChevronDoubleRight),
/* harmony export */   HiOutlineChevronDoubleUp: () => (/* binding */ HiOutlineChevronDoubleUp),
/* harmony export */   HiOutlineChevronDown: () => (/* binding */ HiOutlineChevronDown),
/* harmony export */   HiOutlineChevronLeft: () => (/* binding */ HiOutlineChevronLeft),
/* harmony export */   HiOutlineChevronRight: () => (/* binding */ HiOutlineChevronRight),
/* harmony export */   HiOutlineChevronUp: () => (/* binding */ HiOutlineChevronUp),
/* harmony export */   HiOutlineChip: () => (/* binding */ HiOutlineChip),
/* harmony export */   HiOutlineClipboard: () => (/* binding */ HiOutlineClipboard),
/* harmony export */   HiOutlineClipboardCheck: () => (/* binding */ HiOutlineClipboardCheck),
/* harmony export */   HiOutlineClipboardCopy: () => (/* binding */ HiOutlineClipboardCopy),
/* harmony export */   HiOutlineClipboardList: () => (/* binding */ HiOutlineClipboardList),
/* harmony export */   HiOutlineClock: () => (/* binding */ HiOutlineClock),
/* harmony export */   HiOutlineCloud: () => (/* binding */ HiOutlineCloud),
/* harmony export */   HiOutlineCloudDownload: () => (/* binding */ HiOutlineCloudDownload),
/* harmony export */   HiOutlineCloudUpload: () => (/* binding */ HiOutlineCloudUpload),
/* harmony export */   HiOutlineCode: () => (/* binding */ HiOutlineCode),
/* harmony export */   HiOutlineCog: () => (/* binding */ HiOutlineCog),
/* harmony export */   HiOutlineCollection: () => (/* binding */ HiOutlineCollection),
/* harmony export */   HiOutlineColorSwatch: () => (/* binding */ HiOutlineColorSwatch),
/* harmony export */   HiOutlineCreditCard: () => (/* binding */ HiOutlineCreditCard),
/* harmony export */   HiOutlineCube: () => (/* binding */ HiOutlineCube),
/* harmony export */   HiOutlineCubeTransparent: () => (/* binding */ HiOutlineCubeTransparent),
/* harmony export */   HiOutlineCurrencyBangladeshi: () => (/* binding */ HiOutlineCurrencyBangladeshi),
/* harmony export */   HiOutlineCurrencyDollar: () => (/* binding */ HiOutlineCurrencyDollar),
/* harmony export */   HiOutlineCurrencyEuro: () => (/* binding */ HiOutlineCurrencyEuro),
/* harmony export */   HiOutlineCurrencyPound: () => (/* binding */ HiOutlineCurrencyPound),
/* harmony export */   HiOutlineCurrencyRupee: () => (/* binding */ HiOutlineCurrencyRupee),
/* harmony export */   HiOutlineCurrencyYen: () => (/* binding */ HiOutlineCurrencyYen),
/* harmony export */   HiOutlineCursorClick: () => (/* binding */ HiOutlineCursorClick),
/* harmony export */   HiOutlineDatabase: () => (/* binding */ HiOutlineDatabase),
/* harmony export */   HiOutlineDesktopComputer: () => (/* binding */ HiOutlineDesktopComputer),
/* harmony export */   HiOutlineDeviceMobile: () => (/* binding */ HiOutlineDeviceMobile),
/* harmony export */   HiOutlineDeviceTablet: () => (/* binding */ HiOutlineDeviceTablet),
/* harmony export */   HiOutlineDocument: () => (/* binding */ HiOutlineDocument),
/* harmony export */   HiOutlineDocumentAdd: () => (/* binding */ HiOutlineDocumentAdd),
/* harmony export */   HiOutlineDocumentDownload: () => (/* binding */ HiOutlineDocumentDownload),
/* harmony export */   HiOutlineDocumentDuplicate: () => (/* binding */ HiOutlineDocumentDuplicate),
/* harmony export */   HiOutlineDocumentRemove: () => (/* binding */ HiOutlineDocumentRemove),
/* harmony export */   HiOutlineDocumentReport: () => (/* binding */ HiOutlineDocumentReport),
/* harmony export */   HiOutlineDocumentSearch: () => (/* binding */ HiOutlineDocumentSearch),
/* harmony export */   HiOutlineDocumentText: () => (/* binding */ HiOutlineDocumentText),
/* harmony export */   HiOutlineDotsCircleHorizontal: () => (/* binding */ HiOutlineDotsCircleHorizontal),
/* harmony export */   HiOutlineDotsHorizontal: () => (/* binding */ HiOutlineDotsHorizontal),
/* harmony export */   HiOutlineDotsVertical: () => (/* binding */ HiOutlineDotsVertical),
/* harmony export */   HiOutlineDownload: () => (/* binding */ HiOutlineDownload),
/* harmony export */   HiOutlineDuplicate: () => (/* binding */ HiOutlineDuplicate),
/* harmony export */   HiOutlineEmojiHappy: () => (/* binding */ HiOutlineEmojiHappy),
/* harmony export */   HiOutlineEmojiSad: () => (/* binding */ HiOutlineEmojiSad),
/* harmony export */   HiOutlineExclamation: () => (/* binding */ HiOutlineExclamation),
/* harmony export */   HiOutlineExclamationCircle: () => (/* binding */ HiOutlineExclamationCircle),
/* harmony export */   HiOutlineExternalLink: () => (/* binding */ HiOutlineExternalLink),
/* harmony export */   HiOutlineEye: () => (/* binding */ HiOutlineEye),
/* harmony export */   HiOutlineEyeOff: () => (/* binding */ HiOutlineEyeOff),
/* harmony export */   HiOutlineFastForward: () => (/* binding */ HiOutlineFastForward),
/* harmony export */   HiOutlineFilm: () => (/* binding */ HiOutlineFilm),
/* harmony export */   HiOutlineFilter: () => (/* binding */ HiOutlineFilter),
/* harmony export */   HiOutlineFingerPrint: () => (/* binding */ HiOutlineFingerPrint),
/* harmony export */   HiOutlineFire: () => (/* binding */ HiOutlineFire),
/* harmony export */   HiOutlineFlag: () => (/* binding */ HiOutlineFlag),
/* harmony export */   HiOutlineFolder: () => (/* binding */ HiOutlineFolder),
/* harmony export */   HiOutlineFolderAdd: () => (/* binding */ HiOutlineFolderAdd),
/* harmony export */   HiOutlineFolderDownload: () => (/* binding */ HiOutlineFolderDownload),
/* harmony export */   HiOutlineFolderOpen: () => (/* binding */ HiOutlineFolderOpen),
/* harmony export */   HiOutlineFolderRemove: () => (/* binding */ HiOutlineFolderRemove),
/* harmony export */   HiOutlineGift: () => (/* binding */ HiOutlineGift),
/* harmony export */   HiOutlineGlobe: () => (/* binding */ HiOutlineGlobe),
/* harmony export */   HiOutlineGlobeAlt: () => (/* binding */ HiOutlineGlobeAlt),
/* harmony export */   HiOutlineHand: () => (/* binding */ HiOutlineHand),
/* harmony export */   HiOutlineHashtag: () => (/* binding */ HiOutlineHashtag),
/* harmony export */   HiOutlineHeart: () => (/* binding */ HiOutlineHeart),
/* harmony export */   HiOutlineHome: () => (/* binding */ HiOutlineHome),
/* harmony export */   HiOutlineIdentification: () => (/* binding */ HiOutlineIdentification),
/* harmony export */   HiOutlineInbox: () => (/* binding */ HiOutlineInbox),
/* harmony export */   HiOutlineInboxIn: () => (/* binding */ HiOutlineInboxIn),
/* harmony export */   HiOutlineInformationCircle: () => (/* binding */ HiOutlineInformationCircle),
/* harmony export */   HiOutlineKey: () => (/* binding */ HiOutlineKey),
/* harmony export */   HiOutlineLibrary: () => (/* binding */ HiOutlineLibrary),
/* harmony export */   HiOutlineLightBulb: () => (/* binding */ HiOutlineLightBulb),
/* harmony export */   HiOutlineLightningBolt: () => (/* binding */ HiOutlineLightningBolt),
/* harmony export */   HiOutlineLink: () => (/* binding */ HiOutlineLink),
/* harmony export */   HiOutlineLocationMarker: () => (/* binding */ HiOutlineLocationMarker),
/* harmony export */   HiOutlineLockClosed: () => (/* binding */ HiOutlineLockClosed),
/* harmony export */   HiOutlineLockOpen: () => (/* binding */ HiOutlineLockOpen),
/* harmony export */   HiOutlineLogin: () => (/* binding */ HiOutlineLogin),
/* harmony export */   HiOutlineLogout: () => (/* binding */ HiOutlineLogout),
/* harmony export */   HiOutlineMail: () => (/* binding */ HiOutlineMail),
/* harmony export */   HiOutlineMailOpen: () => (/* binding */ HiOutlineMailOpen),
/* harmony export */   HiOutlineMap: () => (/* binding */ HiOutlineMap),
/* harmony export */   HiOutlineMenu: () => (/* binding */ HiOutlineMenu),
/* harmony export */   HiOutlineMenuAlt1: () => (/* binding */ HiOutlineMenuAlt1),
/* harmony export */   HiOutlineMenuAlt2: () => (/* binding */ HiOutlineMenuAlt2),
/* harmony export */   HiOutlineMenuAlt3: () => (/* binding */ HiOutlineMenuAlt3),
/* harmony export */   HiOutlineMenuAlt4: () => (/* binding */ HiOutlineMenuAlt4),
/* harmony export */   HiOutlineMicrophone: () => (/* binding */ HiOutlineMicrophone),
/* harmony export */   HiOutlineMinus: () => (/* binding */ HiOutlineMinus),
/* harmony export */   HiOutlineMinusCircle: () => (/* binding */ HiOutlineMinusCircle),
/* harmony export */   HiOutlineMinusSm: () => (/* binding */ HiOutlineMinusSm),
/* harmony export */   HiOutlineMoon: () => (/* binding */ HiOutlineMoon),
/* harmony export */   HiOutlineMusicNote: () => (/* binding */ HiOutlineMusicNote),
/* harmony export */   HiOutlineNewspaper: () => (/* binding */ HiOutlineNewspaper),
/* harmony export */   HiOutlineOfficeBuilding: () => (/* binding */ HiOutlineOfficeBuilding),
/* harmony export */   HiOutlinePaperAirplane: () => (/* binding */ HiOutlinePaperAirplane),
/* harmony export */   HiOutlinePaperClip: () => (/* binding */ HiOutlinePaperClip),
/* harmony export */   HiOutlinePause: () => (/* binding */ HiOutlinePause),
/* harmony export */   HiOutlinePencil: () => (/* binding */ HiOutlinePencil),
/* harmony export */   HiOutlinePencilAlt: () => (/* binding */ HiOutlinePencilAlt),
/* harmony export */   HiOutlinePhone: () => (/* binding */ HiOutlinePhone),
/* harmony export */   HiOutlinePhoneIncoming: () => (/* binding */ HiOutlinePhoneIncoming),
/* harmony export */   HiOutlinePhoneMissedCall: () => (/* binding */ HiOutlinePhoneMissedCall),
/* harmony export */   HiOutlinePhoneOutgoing: () => (/* binding */ HiOutlinePhoneOutgoing),
/* harmony export */   HiOutlinePhotograph: () => (/* binding */ HiOutlinePhotograph),
/* harmony export */   HiOutlinePlay: () => (/* binding */ HiOutlinePlay),
/* harmony export */   HiOutlinePlus: () => (/* binding */ HiOutlinePlus),
/* harmony export */   HiOutlinePlusCircle: () => (/* binding */ HiOutlinePlusCircle),
/* harmony export */   HiOutlinePlusSm: () => (/* binding */ HiOutlinePlusSm),
/* harmony export */   HiOutlinePresentationChartBar: () => (/* binding */ HiOutlinePresentationChartBar),
/* harmony export */   HiOutlinePresentationChartLine: () => (/* binding */ HiOutlinePresentationChartLine),
/* harmony export */   HiOutlinePrinter: () => (/* binding */ HiOutlinePrinter),
/* harmony export */   HiOutlinePuzzle: () => (/* binding */ HiOutlinePuzzle),
/* harmony export */   HiOutlineQrcode: () => (/* binding */ HiOutlineQrcode),
/* harmony export */   HiOutlineQuestionMarkCircle: () => (/* binding */ HiOutlineQuestionMarkCircle),
/* harmony export */   HiOutlineReceiptRefund: () => (/* binding */ HiOutlineReceiptRefund),
/* harmony export */   HiOutlineReceiptTax: () => (/* binding */ HiOutlineReceiptTax),
/* harmony export */   HiOutlineRefresh: () => (/* binding */ HiOutlineRefresh),
/* harmony export */   HiOutlineReply: () => (/* binding */ HiOutlineReply),
/* harmony export */   HiOutlineRewind: () => (/* binding */ HiOutlineRewind),
/* harmony export */   HiOutlineRss: () => (/* binding */ HiOutlineRss),
/* harmony export */   HiOutlineSave: () => (/* binding */ HiOutlineSave),
/* harmony export */   HiOutlineSaveAs: () => (/* binding */ HiOutlineSaveAs),
/* harmony export */   HiOutlineScale: () => (/* binding */ HiOutlineScale),
/* harmony export */   HiOutlineScissors: () => (/* binding */ HiOutlineScissors),
/* harmony export */   HiOutlineSearch: () => (/* binding */ HiOutlineSearch),
/* harmony export */   HiOutlineSearchCircle: () => (/* binding */ HiOutlineSearchCircle),
/* harmony export */   HiOutlineSelector: () => (/* binding */ HiOutlineSelector),
/* harmony export */   HiOutlineServer: () => (/* binding */ HiOutlineServer),
/* harmony export */   HiOutlineShare: () => (/* binding */ HiOutlineShare),
/* harmony export */   HiOutlineShieldCheck: () => (/* binding */ HiOutlineShieldCheck),
/* harmony export */   HiOutlineShieldExclamation: () => (/* binding */ HiOutlineShieldExclamation),
/* harmony export */   HiOutlineShoppingBag: () => (/* binding */ HiOutlineShoppingBag),
/* harmony export */   HiOutlineShoppingCart: () => (/* binding */ HiOutlineShoppingCart),
/* harmony export */   HiOutlineSortAscending: () => (/* binding */ HiOutlineSortAscending),
/* harmony export */   HiOutlineSortDescending: () => (/* binding */ HiOutlineSortDescending),
/* harmony export */   HiOutlineSparkles: () => (/* binding */ HiOutlineSparkles),
/* harmony export */   HiOutlineSpeakerphone: () => (/* binding */ HiOutlineSpeakerphone),
/* harmony export */   HiOutlineStar: () => (/* binding */ HiOutlineStar),
/* harmony export */   HiOutlineStatusOffline: () => (/* binding */ HiOutlineStatusOffline),
/* harmony export */   HiOutlineStatusOnline: () => (/* binding */ HiOutlineStatusOnline),
/* harmony export */   HiOutlineStop: () => (/* binding */ HiOutlineStop),
/* harmony export */   HiOutlineSun: () => (/* binding */ HiOutlineSun),
/* harmony export */   HiOutlineSupport: () => (/* binding */ HiOutlineSupport),
/* harmony export */   HiOutlineSwitchHorizontal: () => (/* binding */ HiOutlineSwitchHorizontal),
/* harmony export */   HiOutlineSwitchVertical: () => (/* binding */ HiOutlineSwitchVertical),
/* harmony export */   HiOutlineTable: () => (/* binding */ HiOutlineTable),
/* harmony export */   HiOutlineTag: () => (/* binding */ HiOutlineTag),
/* harmony export */   HiOutlineTemplate: () => (/* binding */ HiOutlineTemplate),
/* harmony export */   HiOutlineTerminal: () => (/* binding */ HiOutlineTerminal),
/* harmony export */   HiOutlineThumbDown: () => (/* binding */ HiOutlineThumbDown),
/* harmony export */   HiOutlineThumbUp: () => (/* binding */ HiOutlineThumbUp),
/* harmony export */   HiOutlineTicket: () => (/* binding */ HiOutlineTicket),
/* harmony export */   HiOutlineTranslate: () => (/* binding */ HiOutlineTranslate),
/* harmony export */   HiOutlineTrash: () => (/* binding */ HiOutlineTrash),
/* harmony export */   HiOutlineTrendingDown: () => (/* binding */ HiOutlineTrendingDown),
/* harmony export */   HiOutlineTrendingUp: () => (/* binding */ HiOutlineTrendingUp),
/* harmony export */   HiOutlineTruck: () => (/* binding */ HiOutlineTruck),
/* harmony export */   HiOutlineUpload: () => (/* binding */ HiOutlineUpload),
/* harmony export */   HiOutlineUser: () => (/* binding */ HiOutlineUser),
/* harmony export */   HiOutlineUserAdd: () => (/* binding */ HiOutlineUserAdd),
/* harmony export */   HiOutlineUserCircle: () => (/* binding */ HiOutlineUserCircle),
/* harmony export */   HiOutlineUserGroup: () => (/* binding */ HiOutlineUserGroup),
/* harmony export */   HiOutlineUserRemove: () => (/* binding */ HiOutlineUserRemove),
/* harmony export */   HiOutlineUsers: () => (/* binding */ HiOutlineUsers),
/* harmony export */   HiOutlineVariable: () => (/* binding */ HiOutlineVariable),
/* harmony export */   HiOutlineVideoCamera: () => (/* binding */ HiOutlineVideoCamera),
/* harmony export */   HiOutlineViewBoards: () => (/* binding */ HiOutlineViewBoards),
/* harmony export */   HiOutlineViewGrid: () => (/* binding */ HiOutlineViewGrid),
/* harmony export */   HiOutlineViewGridAdd: () => (/* binding */ HiOutlineViewGridAdd),
/* harmony export */   HiOutlineViewList: () => (/* binding */ HiOutlineViewList),
/* harmony export */   HiOutlineVolumeOff: () => (/* binding */ HiOutlineVolumeOff),
/* harmony export */   HiOutlineVolumeUp: () => (/* binding */ HiOutlineVolumeUp),
/* harmony export */   HiOutlineWifi: () => (/* binding */ HiOutlineWifi),
/* harmony export */   HiOutlineX: () => (/* binding */ HiOutlineX),
/* harmony export */   HiOutlineXCircle: () => (/* binding */ HiOutlineXCircle),
/* harmony export */   HiOutlineZoomIn: () => (/* binding */ HiOutlineZoomIn),
/* harmony export */   HiOutlineZoomOut: () => (/* binding */ HiOutlineZoomOut),
/* harmony export */   HiPaperAirplane: () => (/* binding */ HiPaperAirplane),
/* harmony export */   HiPaperClip: () => (/* binding */ HiPaperClip),
/* harmony export */   HiPause: () => (/* binding */ HiPause),
/* harmony export */   HiPencil: () => (/* binding */ HiPencil),
/* harmony export */   HiPencilAlt: () => (/* binding */ HiPencilAlt),
/* harmony export */   HiPhone: () => (/* binding */ HiPhone),
/* harmony export */   HiPhoneIncoming: () => (/* binding */ HiPhoneIncoming),
/* harmony export */   HiPhoneMissedCall: () => (/* binding */ HiPhoneMissedCall),
/* harmony export */   HiPhoneOutgoing: () => (/* binding */ HiPhoneOutgoing),
/* harmony export */   HiPhotograph: () => (/* binding */ HiPhotograph),
/* harmony export */   HiPlay: () => (/* binding */ HiPlay),
/* harmony export */   HiPlus: () => (/* binding */ HiPlus),
/* harmony export */   HiPlusCircle: () => (/* binding */ HiPlusCircle),
/* harmony export */   HiPlusSm: () => (/* binding */ HiPlusSm),
/* harmony export */   HiPresentationChartBar: () => (/* binding */ HiPresentationChartBar),
/* harmony export */   HiPresentationChartLine: () => (/* binding */ HiPresentationChartLine),
/* harmony export */   HiPrinter: () => (/* binding */ HiPrinter),
/* harmony export */   HiPuzzle: () => (/* binding */ HiPuzzle),
/* harmony export */   HiQrcode: () => (/* binding */ HiQrcode),
/* harmony export */   HiQuestionMarkCircle: () => (/* binding */ HiQuestionMarkCircle),
/* harmony export */   HiReceiptRefund: () => (/* binding */ HiReceiptRefund),
/* harmony export */   HiReceiptTax: () => (/* binding */ HiReceiptTax),
/* harmony export */   HiRefresh: () => (/* binding */ HiRefresh),
/* harmony export */   HiReply: () => (/* binding */ HiReply),
/* harmony export */   HiRewind: () => (/* binding */ HiRewind),
/* harmony export */   HiRss: () => (/* binding */ HiRss),
/* harmony export */   HiSave: () => (/* binding */ HiSave),
/* harmony export */   HiSaveAs: () => (/* binding */ HiSaveAs),
/* harmony export */   HiScale: () => (/* binding */ HiScale),
/* harmony export */   HiScissors: () => (/* binding */ HiScissors),
/* harmony export */   HiSearch: () => (/* binding */ HiSearch),
/* harmony export */   HiSearchCircle: () => (/* binding */ HiSearchCircle),
/* harmony export */   HiSelector: () => (/* binding */ HiSelector),
/* harmony export */   HiServer: () => (/* binding */ HiServer),
/* harmony export */   HiShare: () => (/* binding */ HiShare),
/* harmony export */   HiShieldCheck: () => (/* binding */ HiShieldCheck),
/* harmony export */   HiShieldExclamation: () => (/* binding */ HiShieldExclamation),
/* harmony export */   HiShoppingBag: () => (/* binding */ HiShoppingBag),
/* harmony export */   HiShoppingCart: () => (/* binding */ HiShoppingCart),
/* harmony export */   HiSortAscending: () => (/* binding */ HiSortAscending),
/* harmony export */   HiSortDescending: () => (/* binding */ HiSortDescending),
/* harmony export */   HiSparkles: () => (/* binding */ HiSparkles),
/* harmony export */   HiSpeakerphone: () => (/* binding */ HiSpeakerphone),
/* harmony export */   HiStar: () => (/* binding */ HiStar),
/* harmony export */   HiStatusOffline: () => (/* binding */ HiStatusOffline),
/* harmony export */   HiStatusOnline: () => (/* binding */ HiStatusOnline),
/* harmony export */   HiStop: () => (/* binding */ HiStop),
/* harmony export */   HiSun: () => (/* binding */ HiSun),
/* harmony export */   HiSupport: () => (/* binding */ HiSupport),
/* harmony export */   HiSwitchHorizontal: () => (/* binding */ HiSwitchHorizontal),
/* harmony export */   HiSwitchVertical: () => (/* binding */ HiSwitchVertical),
/* harmony export */   HiTable: () => (/* binding */ HiTable),
/* harmony export */   HiTag: () => (/* binding */ HiTag),
/* harmony export */   HiTemplate: () => (/* binding */ HiTemplate),
/* harmony export */   HiTerminal: () => (/* binding */ HiTerminal),
/* harmony export */   HiThumbDown: () => (/* binding */ HiThumbDown),
/* harmony export */   HiThumbUp: () => (/* binding */ HiThumbUp),
/* harmony export */   HiTicket: () => (/* binding */ HiTicket),
/* harmony export */   HiTranslate: () => (/* binding */ HiTranslate),
/* harmony export */   HiTrash: () => (/* binding */ HiTrash),
/* harmony export */   HiTrendingDown: () => (/* binding */ HiTrendingDown),
/* harmony export */   HiTrendingUp: () => (/* binding */ HiTrendingUp),
/* harmony export */   HiTruck: () => (/* binding */ HiTruck),
/* harmony export */   HiUpload: () => (/* binding */ HiUpload),
/* harmony export */   HiUser: () => (/* binding */ HiUser),
/* harmony export */   HiUserAdd: () => (/* binding */ HiUserAdd),
/* harmony export */   HiUserCircle: () => (/* binding */ HiUserCircle),
/* harmony export */   HiUserGroup: () => (/* binding */ HiUserGroup),
/* harmony export */   HiUserRemove: () => (/* binding */ HiUserRemove),
/* harmony export */   HiUsers: () => (/* binding */ HiUsers),
/* harmony export */   HiVariable: () => (/* binding */ HiVariable),
/* harmony export */   HiVideoCamera: () => (/* binding */ HiVideoCamera),
/* harmony export */   HiViewBoards: () => (/* binding */ HiViewBoards),
/* harmony export */   HiViewGrid: () => (/* binding */ HiViewGrid),
/* harmony export */   HiViewGridAdd: () => (/* binding */ HiViewGridAdd),
/* harmony export */   HiViewList: () => (/* binding */ HiViewList),
/* harmony export */   HiVolumeOff: () => (/* binding */ HiVolumeOff),
/* harmony export */   HiVolumeUp: () => (/* binding */ HiVolumeUp),
/* harmony export */   HiWifi: () => (/* binding */ HiWifi),
/* harmony export */   HiX: () => (/* binding */ HiX),
/* harmony export */   HiXCircle: () => (/* binding */ HiXCircle),
/* harmony export */   HiZoomIn: () => (/* binding */ HiZoomIn),
/* harmony export */   HiZoomOut: () => (/* binding */ HiZoomOut)
/* harmony export */ });
/* harmony import */ var _lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.mjs */ "./node_modules/react-icons/lib/index.mjs");
// THIS FILE IS AUTO GENERATED

function HiAcademicCap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiAdjustments (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"},"child":[]}]})(props);
};
function HiAnnotation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArchive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowsExpand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiAtSymbol (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBackspace (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBadgeCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBan (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBell (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"},"child":[]}]})(props);
};
function HiBookOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"},"child":[]}]})(props);
};
function HiBookmarkAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBookmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"},"child":[]}]})(props);
};
function HiBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"},"child":[]}]})(props);
};
function HiCake (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCalendar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiChartPie (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"},"child":[]},{"tag":"path","attr":{"d":"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"},"child":[]}]})(props);
};
function HiChartSquareBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChatAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"},"child":[]},{"tag":"path","attr":{"d":"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"},"child":[]}]})(props);
};
function HiChatAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChat (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCheckCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 7H7v6h6V7z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboardCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboardCopy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"},"child":[]},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"},"child":[]}]})(props);
};
function HiClipboardList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"},"child":[]},{"tag":"path","attr":{"d":"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"},"child":[]}]})(props);
};
function HiClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCloudDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCloudUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"},"child":[]},{"tag":"path","attr":{"d":"M9 13h2v5a1 1 0 11-2 0v-5z"},"child":[]}]})(props);
};
function HiCloud (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"},"child":[]}]})(props);
};
function HiCode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCog (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCollection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"},"child":[]}]})(props);
};
function HiColorSwatch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCreditCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCubeTransparent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCube (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"},"child":[]}]})(props);
};
function HiCurrencyBangladeshi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyDollar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyEuro (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyPound (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyRupee (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyYen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCursorClick (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"},"child":[]},{"tag":"path","attr":{"d":"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"},"child":[]},{"tag":"path","attr":{"d":"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"},"child":[]}]})(props);
};
function HiDesktopComputer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDeviceMobile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDeviceTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"},"child":[]},{"tag":"path","attr":{"d":"M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"},"child":[]}]})(props);
};
function HiDocumentRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentReport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentText (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocument (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDotsCircleHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDotsHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"},"child":[]}]})(props);
};
function HiDotsVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"},"child":[]}]})(props);
};
function HiDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"},"child":[]},{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"},"child":[]}]})(props);
};
function HiEmojiHappy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiEmojiSad (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExclamationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExternalLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},"child":[]},{"tag":"path","attr":{"d":"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},"child":[]}]})(props);
};
function HiEyeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"},"child":[]}]})(props);
};
function HiEye (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 12a2 2 0 100-4 2 2 0 000 4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFastForward (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"},"child":[]}]})(props);
};
function HiFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFingerPrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFire (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFlag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFolderAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"},"child":[]}]})(props);
};
function HiFolderDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"},"child":[]}]})(props);
};
function HiFolderOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"},"child":[]}]})(props);
};
function HiFolderRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 100 2h4a1 1 0 100-2H8z"},"child":[]}]})(props);
};
function HiFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"},"child":[]}]})(props);
};
function HiGift (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"},"child":[]}]})(props);
};
function HiGlobeAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHashtag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHeart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},"child":[]}]})(props);
};
function HiIdentification (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiInboxIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"},"child":[]},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"},"child":[]}]})(props);
};
function HiInbox (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiInformationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLibrary (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLightBulb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"},"child":[]}]})(props);
};
function HiLightningBolt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLocationMarker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLockClosed (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLockOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"},"child":[]}]})(props);
};
function HiLogin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLogout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMailOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMail (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},"child":[]},{"tag":"path","attr":{"d":"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},"child":[]}]})(props);
};
function HiMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt3 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt4 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMicrophone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMoon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},"child":[]}]})(props);
};
function HiMusicNote (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"},"child":[]}]})(props);
};
function HiNewspaper (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"},"child":[]}]})(props);
};
function HiOfficeBuilding (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPaperAirplane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"},"child":[]}]})(props);
};
function HiPaperClip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPause (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPencilAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPencil (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},"child":[]}]})(props);
};
function HiPhoneIncoming (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"},"child":[]},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhoneMissedCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]},{"tag":"path","attr":{"d":"M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"},"child":[]}]})(props);
};
function HiPhoneOutgoing (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"},"child":[]},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhotograph (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPresentationChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPresentationChartLine (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPrinter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"},"child":[]}]})(props);
};
function HiQrcode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"},"child":[]}]})(props);
};
function HiQuestionMarkCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReceiptRefund (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReceiptTax (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReply (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiRewind (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"},"child":[]}]})(props);
};
function HiRss (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"},"child":[]},{"tag":"path","attr":{"d":"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"},"child":[]}]})(props);
};
function HiSaveAs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"},"child":[]},{"tag":"path","attr":{"d":"M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"},"child":[]}]})(props);
};
function HiSave (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"},"child":[]}]})(props);
};
function HiScale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiScissors (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"},"child":[]}]})(props);
};
function HiSearchCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 9a2 2 0 114 0 2 2 0 01-4 0z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSelector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiServer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"},"child":[]}]})(props);
};
function HiShieldCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShieldExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShoppingBag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShoppingCart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"},"child":[]}]})(props);
};
function HiSortAscending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"},"child":[]}]})(props);
};
function HiSortDescending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"},"child":[]}]})(props);
};
function HiSparkles (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSpeakerphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiStar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},"child":[]}]})(props);
};
function HiStatusOffline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"},"child":[]}]})(props);
};
function HiStatusOnline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiStop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSun (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSwitchHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"},"child":[]}]})(props);
};
function HiSwitchVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"},"child":[]}]})(props);
};
function HiTable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTemplate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"},"child":[]}]})(props);
};
function HiTerminal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiThumbDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"},"child":[]}]})(props);
};
function HiThumbUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"},"child":[]}]})(props);
};
function HiTicket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"},"child":[]}]})(props);
};
function HiTranslate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrendingDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrendingUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTruck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"},"child":[]},{"tag":"path","attr":{"d":"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"},"child":[]}]})(props);
};
function HiUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUserAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"},"child":[]}]})(props);
};
function HiUserCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUserGroup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},"child":[]}]})(props);
};
function HiUserRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"},"child":[]}]})(props);
};
function HiUser (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUsers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"},"child":[]}]})(props);
};
function HiVariable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVideoCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"},"child":[]}]})(props);
};
function HiViewBoards (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"},"child":[]}]})(props);
};
function HiViewGridAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"},"child":[]}]})(props);
};
function HiViewGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},"child":[]}]})(props);
};
function HiViewList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVolumeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVolumeUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiWifi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiXCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiX (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiZoomIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiZoomOut (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiOutlineAcademicCap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M12 14l9-5-9-5-9 5 9 5z"},"child":[]},{"tag":"path","attr":{"d":"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"},"child":[]}]})(props);
};
function HiOutlineAdjustments (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"},"child":[]}]})(props);
};
function HiOutlineAnnotation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"},"child":[]}]})(props);
};
function HiOutlineArchive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},"child":[]}]})(props);
};
function HiOutlineArrowCircleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"},"child":[]}]})(props);
};
function HiOutlineArrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 14l-7 7m0 0l-7-7m7 7V3"},"child":[]}]})(props);
};
function HiOutlineArrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 19l-7-7m0 0l7-7m-7 7h18"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 17l-4 4m0 0l-4-4m4 4V3"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16l-4-4m0 0l4-4m-4 4h18"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8l4 4m0 0l-4 4m4-4H3"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7l4-4m0 0l4 4m-4-4v18"},"child":[]}]})(props);
};
function HiOutlineArrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 5l7 7m0 0l-7 7m7-7H3"},"child":[]}]})(props);
};
function HiOutlineArrowSmDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 13l-5 5m0 0l-5-5m5 5V6"},"child":[]}]})(props);
};
function HiOutlineArrowSmLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 17l-5-5m0 0l5-5m-5 5h12"},"child":[]}]})(props);
};
function HiOutlineArrowSmRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7l5 5m0 0l-5 5m5-5H6"},"child":[]}]})(props);
};
function HiOutlineArrowSmUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11l5-5m0 0l5 5m-5-5v12"},"child":[]}]})(props);
};
function HiOutlineArrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 10l7-7m0 0l7 7m-7-7v18"},"child":[]}]})(props);
};
function HiOutlineArrowsExpand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},"child":[]}]})(props);
};
function HiOutlineAtSymbol (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"},"child":[]}]})(props);
};
function HiOutlineBackspace (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"},"child":[]}]})(props);
};
function HiOutlineBadgeCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},"child":[]}]})(props);
};
function HiOutlineBan (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},"child":[]}]})(props);
};
function HiOutlineBeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"},"child":[]}]})(props);
};
function HiOutlineBell (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},"child":[]}]})(props);
};
function HiOutlineBookOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},"child":[]}]})(props);
};
function HiOutlineBookmarkAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineBookmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},"child":[]}]})(props);
};
function HiOutlineBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCake (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"},"child":[]}]})(props);
};
function HiOutlineCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCalendar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineCash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineChartPie (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},"child":[]}]})(props);
};
function HiOutlineChartSquareBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineChatAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"},"child":[]}]})(props);
};
function HiOutlineChatAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"},"child":[]}]})(props);
};
function HiOutlineChat (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"},"child":[]}]})(props);
};
function HiOutlineCheckCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 13l4 4L19 7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 13l-7 7-7-7m14-8l-7 7-7-7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 19l-7-7 7-7m8 14l-7-7 7-7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 5l7 7-7 7M5 5l7 7-7 7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 11l7-7 7 7M5 19l7-7 7 7"},"child":[]}]})(props);
};
function HiOutlineChevronDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 9l-7 7-7-7"},"child":[]}]})(props);
};
function HiOutlineChevronLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 19l-7-7 7-7"},"child":[]}]})(props);
};
function HiOutlineChevronRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5l7 7-7 7"},"child":[]}]})(props);
};
function HiOutlineChevronUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 15l7-7 7 7"},"child":[]}]})(props);
};
function HiOutlineChip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"},"child":[]}]})(props);
};
function HiOutlineClipboardCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"},"child":[]}]})(props);
};
function HiOutlineClipboardCopy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"},"child":[]}]})(props);
};
function HiOutlineClipboardList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"},"child":[]}]})(props);
};
function HiOutlineClipboard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},"child":[]}]})(props);
};
function HiOutlineClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCloudDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"},"child":[]}]})(props);
};
function HiOutlineCloudUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},"child":[]}]})(props);
};
function HiOutlineCloud (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"},"child":[]}]})(props);
};
function HiOutlineCode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},"child":[]}]})(props);
};
function HiOutlineCog (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineCollection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},"child":[]}]})(props);
};
function HiOutlineColorSwatch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"},"child":[]}]})(props);
};
function HiOutlineCreditCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"},"child":[]}]})(props);
};
function HiOutlineCubeTransparent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"},"child":[]}]})(props);
};
function HiOutlineCube (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"},"child":[]}]})(props);
};
function HiOutlineCurrencyBangladeshi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyDollar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyEuro (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyPound (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyRupee (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyYen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCursorClick (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"},"child":[]}]})(props);
};
function HiOutlineDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"},"child":[]}]})(props);
};
function HiOutlineDesktopComputer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDeviceMobile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDeviceTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},"child":[]}]})(props);
};
function HiOutlineDocumentRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentReport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"},"child":[]}]})(props);
};
function HiOutlineDocumentText (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocument (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDotsCircleHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineDotsHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineDotsVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},"child":[]}]})(props);
};
function HiOutlineDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},"child":[]}]})(props);
};
function HiOutlineDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineEmojiHappy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineEmojiSad (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineExclamationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},"child":[]}]})(props);
};
function HiOutlineExternalLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"},"child":[]}]})(props);
};
function HiOutlineEyeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"},"child":[]}]})(props);
};
function HiOutlineEye (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},"child":[]}]})(props);
};
function HiOutlineFastForward (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"},"child":[]}]})(props);
};
function HiOutlineFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiOutlineFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"},"child":[]}]})(props);
};
function HiOutlineFingerPrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"},"child":[]}]})(props);
};
function HiOutlineFire (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"},"child":[]}]})(props);
};
function HiOutlineFlag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"},"child":[]}]})(props);
};
function HiOutlineFolderAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolderDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolderOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineFolderRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},"child":[]}]})(props);
};
function HiOutlineGift (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"},"child":[]}]})(props);
};
function HiOutlineGlobeAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},"child":[]}]})(props);
};
function HiOutlineGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineHand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"},"child":[]}]})(props);
};
function HiOutlineHashtag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"},"child":[]}]})(props);
};
function HiOutlineHeart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},"child":[]}]})(props);
};
function HiOutlineHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},"child":[]}]})(props);
};
function HiOutlineIdentification (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"},"child":[]}]})(props);
};
function HiOutlineInboxIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"},"child":[]}]})(props);
};
function HiOutlineInbox (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"},"child":[]}]})(props);
};
function HiOutlineInformationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"},"child":[]}]})(props);
};
function HiOutlineLibrary (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"},"child":[]}]})(props);
};
function HiOutlineLightBulb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"},"child":[]}]})(props);
};
function HiOutlineLightningBolt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 10V3L4 14h7v7l9-11h-7z"},"child":[]}]})(props);
};
function HiOutlineLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"},"child":[]}]})(props);
};
function HiOutlineLocationMarker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineLockClosed (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"},"child":[]}]})(props);
};
function HiOutlineLockOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineLogin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"},"child":[]}]})(props);
};
function HiOutlineLogout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},"child":[]}]})(props);
};
function HiOutlineMailOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"},"child":[]}]})(props);
};
function HiOutlineMail (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h8m-8 6h16"},"child":[]}]})(props);
};
function HiOutlineMenuAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt3 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16m-7 6h7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt4 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8h16M4 16h16"},"child":[]}]})(props);
};
function HiOutlineMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h16"},"child":[]}]})(props);
};
function HiOutlineMicrophone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"},"child":[]}]})(props);
};
function HiOutlineMinusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineMinusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 12H6"},"child":[]}]})(props);
};
function HiOutlineMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 12H4"},"child":[]}]})(props);
};
function HiOutlineMoon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},"child":[]}]})(props);
};
function HiOutlineMusicNote (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"},"child":[]}]})(props);
};
function HiOutlineNewspaper (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"},"child":[]}]})(props);
};
function HiOutlineOfficeBuilding (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"},"child":[]}]})(props);
};
function HiOutlinePaperAirplane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"},"child":[]}]})(props);
};
function HiOutlinePaperClip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"},"child":[]}]})(props);
};
function HiOutlinePause (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePencilAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},"child":[]}]})(props);
};
function HiOutlinePencil (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"},"child":[]}]})(props);
};
function HiOutlinePhoneIncoming (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhoneMissedCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhoneOutgoing (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"},"child":[]}]})(props);
};
function HiOutlinePhotograph (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlinePlay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePlusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePlusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"},"child":[]}]})(props);
};
function HiOutlinePlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v16m8-8H4"},"child":[]}]})(props);
};
function HiOutlinePresentationChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiOutlinePresentationChartLine (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiOutlinePrinter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},"child":[]}]})(props);
};
function HiOutlinePuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"},"child":[]}]})(props);
};
function HiOutlineQrcode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiOutlineQuestionMarkCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineReceiptRefund (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"},"child":[]}]})(props);
};
function HiOutlineReceiptTax (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"},"child":[]}]})(props);
};
function HiOutlineRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},"child":[]}]})(props);
};
function HiOutlineReply (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"},"child":[]}]})(props);
};
function HiOutlineRewind (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"},"child":[]}]})(props);
};
function HiOutlineRss (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineSaveAs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"},"child":[]}]})(props);
};
function HiOutlineSave (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"},"child":[]}]})(props);
};
function HiOutlineScale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"},"child":[]}]})(props);
};
function HiOutlineScissors (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"},"child":[]}]})(props);
};
function HiOutlineSearchCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},"child":[]}]})(props);
};
function HiOutlineSelector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l4-4 4 4m0 6l-4 4-4-4"},"child":[]}]})(props);
};
function HiOutlineServer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"},"child":[]}]})(props);
};
function HiOutlineShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"},"child":[]}]})(props);
};
function HiOutlineShieldCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"},"child":[]}]})(props);
};
function HiOutlineShieldExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"},"child":[]}]})(props);
};
function HiOutlineShoppingBag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"},"child":[]}]})(props);
};
function HiOutlineShoppingCart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineSortAscending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"},"child":[]}]})(props);
};
function HiOutlineSortDescending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"},"child":[]}]})(props);
};
function HiOutlineSparkles (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"},"child":[]}]})(props);
};
function HiOutlineSpeakerphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"},"child":[]}]})(props);
};
function HiOutlineStar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"},"child":[]}]})(props);
};
function HiOutlineStatusOffline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"},"child":[]}]})(props);
};
function HiOutlineStatusOnline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineStop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"},"child":[]}]})(props);
};
function HiOutlineSun (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineSwitchHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"},"child":[]}]})(props);
};
function HiOutlineSwitchVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"},"child":[]}]})(props);
};
function HiOutlineTable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineTag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"},"child":[]}]})(props);
};
function HiOutlineTemplate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},"child":[]}]})(props);
};
function HiOutlineTerminal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineThumbDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"},"child":[]}]})(props);
};
function HiOutlineThumbUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"},"child":[]}]})(props);
};
function HiOutlineTicket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"},"child":[]}]})(props);
};
function HiOutlineTranslate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"},"child":[]}]})(props);
};
function HiOutlineTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},"child":[]}]})(props);
};
function HiOutlineTrendingDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"},"child":[]}]})(props);
};
function HiOutlineTrendingUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"},"child":[]}]})(props);
};
function HiOutlineTruck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"},"child":[]}]})(props);
};
function HiOutlineUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"},"child":[]}]})(props);
};
function HiOutlineUserAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"},"child":[]}]})(props);
};
function HiOutlineUserCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineUserGroup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineUserRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"},"child":[]}]})(props);
};
function HiOutlineUser (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},"child":[]}]})(props);
};
function HiOutlineUsers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineVariable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"},"child":[]}]})(props);
};
function HiOutlineVideoCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineViewBoards (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"},"child":[]}]})(props);
};
function HiOutlineViewGridAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineViewGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},"child":[]}]})(props);
};
function HiOutlineViewList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 10h16M4 14h16M4 18h16"},"child":[]}]})(props);
};
function HiOutlineVolumeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"},"child":[]}]})(props);
};
function HiOutlineVolumeUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"},"child":[]}]})(props);
};
function HiOutlineWifi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"},"child":[]}]})(props);
};
function HiOutlineXCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineX (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 18L18 6M6 6l12 12"},"child":[]}]})(props);
};
function HiOutlineZoomIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"},"child":[]}]})(props);
};
function HiOutlineZoomOut (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"},"child":[]}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/iconBase.mjs":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/iconBase.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenIcon: () => (/* binding */ GenIcon),
/* harmony export */   IconBase: () => (/* binding */ IconBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext.mjs */ "./node_modules/react-icons/lib/iconContext.mjs");
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title), props.children);
  };
  return _iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.IconContext !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.IconContext.Consumer, null, conf => elem(conf)) : elem(_iconContext_mjs__WEBPACK_IMPORTED_MODULE_1__.DefaultContext);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/iconContext.mjs":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/iconContext.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContext: () => (/* binding */ DefaultContext),
/* harmony export */   IconContext: () => (/* binding */ IconContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/iconsManifest.mjs":
/*!********************************************************!*\
  !*** ./node_modules/react-icons/lib/iconsManifest.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsManifest: () => (/* binding */ IconsManifest)
/* harmony export */ });
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/react-icons/lib/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultContext: () => (/* reexport safe */ _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__.DefaultContext),
/* harmony export */   GenIcon: () => (/* reexport safe */ _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__.GenIcon),
/* harmony export */   IconBase: () => (/* reexport safe */ _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__.IconBase),
/* harmony export */   IconContext: () => (/* reexport safe */ _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__.IconContext),
/* harmony export */   IconsManifest: () => (/* reexport safe */ _iconsManifest_mjs__WEBPACK_IMPORTED_MODULE_0__.IconsManifest)
/* harmony export */ });
/* harmony import */ var _iconsManifest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest.mjs */ "./node_modules/react-icons/lib/iconsManifest.mjs");
/* harmony import */ var _iconBase_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase.mjs */ "./node_modules/react-icons/lib/iconBase.mjs");
/* harmony import */ var _iconContext_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext.mjs */ "./node_modules/react-icons/lib/iconContext.mjs");




/***/ })

}]);