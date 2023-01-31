module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetails.module.css */ \"./components/meetups/MeetupDetails.module.css\");\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/harryelnekave/Desktop/DEV/NextJS/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetails.js\";\n\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[\"meetup-details\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: [\" \", props.address, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcz82ZTNkIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsImNsYXNzZXMiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0Isc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGdFQUFPLENBQUMsZ0JBQUQsQ0FBM0I7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFoQjtBQUF1QixTQUFHLEVBQUVGLEtBQUssQ0FBQ0c7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSxzQkFBV0gsS0FBSyxDQUFDSSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLGdCQUFJSixLQUFLLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBVWVOLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBEZXRhaWxzLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlc1tcIm1lZXR1cC1kZXRhaWxzXCJdfT5cbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgIDxhZGRyZXNzPiB7cHJvcHMuYWRkcmVzc30gPC9hZGRyZXNzPlxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetupDetails.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"meetup-details\": \"MeetupDetails_meetup-details__2BQZU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzPzY1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVldHVwLWRldGFpbHNcIjogXCJNZWV0dXBEZXRhaWxzX21lZXR1cC1kZXRhaWxzX18yQlFaVVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/cjs/react.production.min */ \"react/cjs/react.production.min\");\n/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\nvar _jsxFileName = \"/Users/harryelnekave/Desktop/DEV/NextJS/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// the same way we have in regular React Project dynamic id (e.g:  our-domain/:id)\n\n\n\n // our-domain/<dynamic-id>\n\nconst MeetupDetailsDynamicPage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, props.meetupData), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), \";\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n}; // With getStaticProps a page is pre-generated during the Build Process\n// now what does this mean? this means that of Coures NextJS to pregenerate all versions of this dynamic Page\n// in advance for all the supported meetupId's because since thi is dynamic NextJS needs to know for which meetupsId's values\n// it should pregenerate the page\n// keep in mind that this is not pregenerated when the user visist thsi page with a specific meetupId but during the build process\n// so here we need to pregenrate for all the potential url (meetupId's) user might be entering on Run Time\n// and if they enter a value for which we did not pregenerage a page they will see a 404 Page not found error\n// this is why we are using this getStaticPaths function where we describe all the dynamcis segments so all the meetupId's in this\n// case where a page should be pregeneragted\n\n\nconst getStaticPaths = async () => {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(\"mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\"); // meetupsCollection.find({}, {_id: 1});\n  // {} retrieve all data with no filter criteria\n  // and {_id: 1} we define that only the field _id will be extracted for every document\n\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    // this fallback value determine whether the paths array return all the meetupId's value if set to false\n    // or only some of them when set to true.\n    // that means that if a user enter a meetupId path that is not supported in the paths array a 404 Page not found\n    // will be retrieved\n    fallback: false,\n    // In reality we won't of course hardcode those values manually but fetch for your supported meetupId's from a database\n    // or from an API and that will retrieve that array dynamcally\n    // paths: [\n    //   {\n    //     params: {\n    //       meetupId: \"m1\",\n    //     },\n    //   },\n    //   {\n    //     params: {\n    //       meetupId: \"m2\",\n    //     },\n    //   },\n    // ],\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    }))\n  };\n};\nconst getStaticProps = async context => {\n  // Fetch data for a single meetup\n  // To fetch the data for the meetup we need a way to identify the meetup\n  // Here we need a way to identify the id and the id is thankfully encoded in th URL\n  // and basically we could have use the useRouter hook from NextJS to identify the id and use the query to reach the meetupdId\n  // But the problem is that the useRouter Hook can only be use in Component Function not in getStaticProps\n  // Hopefully the getStaticProps also receive a context as Parameter\n  // (although you cannot access the req and res as you do in getSerevrSideProps)\n  // but has a params key\n  const meetupId = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(\"mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const selectedMeetup = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(meetupId)\n  });\n  client.close();\n  console.log(meetupId);\n  return {\n    props: {\n      meetupData: {\n        id: selectedMeetup._id.toString(),\n        title: selectedMeetup.title,\n        address: selectedMeetup.address,\n        image: selectedMeetup.image,\n        description: selectedMeetup.description\n      } //   meetupData: {\n      //     id: meetupId,\n      //     title: \"A Second Meetup\",\n      //     image:\n      //       \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg\",\n      //     address: \"Some address 3, the best city\",\n      //     description: \"this is a second meetup\",\n      //   },\n\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetailsDynamicPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsc0R5bmFtaWNQYWdlIiwicHJvcHMiLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJhZGRyZXNzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsTUFBTUEsd0JBQXdCLEdBQUlDLEtBQUQsSUFBVztBQUMxQyxzQkFDRSxxRUFBQyx1RUFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSxxRUFBQyx5RUFBRCxvQkFBbUJILEtBQUssQ0FBQ0MsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQsQyxDQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsa0VBRG1CLENBQXJCO0FBR0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCLENBTHdDLENBT3hDO0FBQ0E7QUFDQTs7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLElBQWxCLENBQXVCLEVBQXZCLEVBQTJCO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBQTNCLEVBQXVDQyxPQUF2QyxFQUF0QjtBQUVBVCxRQUFNLENBQUNVLEtBQVA7QUFFQSxTQUFPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsWUFBUSxFQUFFLEtBTEw7QUFNTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFNBQUssRUFBRU4sT0FBTyxDQUFDTyxHQUFSLENBQWFDLE1BQUQsS0FBYTtBQUM5QkMsWUFBTSxFQUFFO0FBQUVDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ04sR0FBUCxDQUFXUyxRQUFYO0FBQVo7QUFEc0IsS0FBYixDQUFaO0FBcEJGLEdBQVA7QUF3QkQsQ0F0Q007QUF3Q0EsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDL0M7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU1ILFFBQVEsR0FBR0csT0FBTyxDQUFDSixNQUFSLENBQWVDLFFBQWhDO0FBQ0EsUUFBTWhCLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLGtFQURtQixDQUFyQjtBQUlBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU1lLGNBQWMsR0FBRyxNQUFNaEIsaUJBQWlCLENBQUNpQixPQUFsQixDQUEwQjtBQUNyRGIsT0FBRyxFQUFFYyx3REFBUSxDQUFDTixRQUFEO0FBRHdDLEdBQTFCLENBQTdCO0FBSUFoQixRQUFNLENBQUNVLEtBQVA7QUFFQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFFQSxTQUFPO0FBQ0xyQixTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRTtBQUNWNkIsVUFBRSxFQUFFTCxjQUFjLENBQUNaLEdBQWYsQ0FBbUJTLFFBQW5CLEVBRE07QUFFVnBCLGFBQUssRUFBRXVCLGNBQWMsQ0FBQ3ZCLEtBRlo7QUFHVjZCLGVBQU8sRUFBRU4sY0FBYyxDQUFDTSxPQUhkO0FBSVZDLGFBQUssRUFBRVAsY0FBYyxDQUFDTyxLQUpaO0FBS1Y3QixtQkFBVyxFQUFFc0IsY0FBYyxDQUFDdEI7QUFMbEIsT0FEUCxDQVFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZks7QUFERixHQUFQO0FBbUJELENBN0NNO0FBK0NRSix1RkFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgc2FtZSB3YXkgd2UgaGF2ZSBpbiByZWd1bGFyIFJlYWN0IFByb2plY3QgZHluYW1pYyBpZCAoZS5nOiAgb3VyLWRvbWFpbi86aWQpXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW5cIjtcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiO1xuLy8gb3VyLWRvbWFpbi88ZHluYW1pYy1pZD5cbmNvbnN0IE1lZXR1cERldGFpbHNEeW5hbWljUGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgey8qIC8vIHRoYXQgY291bGQgYmUgb3VyIG1ldGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgcGFnZSBhbmQgdGhhdCB3aWxsIGJlIHRoZSB0ZXh0IHRoYXQgc2hvd3MgdXAgd2hlbiBcbi8vIG91ciBwYWdlIHNob3dzIHVwIG9uIFNlYXJjaCBlbmdpbmUgKFNFTykgc2VhcmNoICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1lZXR1cERldGFpbHMgey4uLnByb3BzLm1lZXR1cERhdGF9IC8+O1xuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG4vLyBXaXRoIGdldFN0YXRpY1Byb3BzIGEgcGFnZSBpcyBwcmUtZ2VuZXJhdGVkIGR1cmluZyB0aGUgQnVpbGQgUHJvY2Vzc1xuLy8gbm93IHdoYXQgZG9lcyB0aGlzIG1lYW4/IHRoaXMgbWVhbnMgdGhhdCBvZiBDb3VyZXMgTmV4dEpTIHRvIHByZWdlbmVyYXRlIGFsbCB2ZXJzaW9ucyBvZiB0aGlzIGR5bmFtaWMgUGFnZVxuLy8gaW4gYWR2YW5jZSBmb3IgYWxsIHRoZSBzdXBwb3J0ZWQgbWVldHVwSWQncyBiZWNhdXNlIHNpbmNlIHRoaSBpcyBkeW5hbWljIE5leHRKUyBuZWVkcyB0byBrbm93IGZvciB3aGljaCBtZWV0dXBzSWQncyB2YWx1ZXNcbi8vIGl0IHNob3VsZCBwcmVnZW5lcmF0ZSB0aGUgcGFnZVxuLy8ga2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBpcyBub3QgcHJlZ2VuZXJhdGVkIHdoZW4gdGhlIHVzZXIgdmlzaXN0IHRoc2kgcGFnZSB3aXRoIGEgc3BlY2lmaWMgbWVldHVwSWQgYnV0IGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzc1xuLy8gc28gaGVyZSB3ZSBuZWVkIHRvIHByZWdlbnJhdGUgZm9yIGFsbCB0aGUgcG90ZW50aWFsIHVybCAobWVldHVwSWQncykgdXNlciBtaWdodCBiZSBlbnRlcmluZyBvbiBSdW4gVGltZVxuLy8gYW5kIGlmIHRoZXkgZW50ZXIgYSB2YWx1ZSBmb3Igd2hpY2ggd2UgZGlkIG5vdCBwcmVnZW5lcmFnZSBhIHBhZ2UgdGhleSB3aWxsIHNlZSBhIDQwNCBQYWdlIG5vdCBmb3VuZCBlcnJvclxuLy8gdGhpcyBpcyB3aHkgd2UgYXJlIHVzaW5nIHRoaXMgZ2V0U3RhdGljUGF0aHMgZnVuY3Rpb24gd2hlcmUgd2UgZGVzY3JpYmUgYWxsIHRoZSBkeW5hbWNpcyBzZWdtZW50cyBzbyBhbGwgdGhlIG1lZXR1cElkJ3MgaW4gdGhpc1xuLy8gY2FzZSB3aGVyZSBhIHBhZ2Ugc2hvdWxkIGJlIHByZWdlbmVyYWd0ZWRcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAudGN5Ync1bi5tb25nb2RiLm5ldC9tZWV0dXBzREJcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gIC8vIG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHtfaWQ6IDF9KTtcbiAgLy8ge30gcmV0cmlldmUgYWxsIGRhdGEgd2l0aCBubyBmaWx0ZXIgY3JpdGVyaWFcbiAgLy8gYW5kIHtfaWQ6IDF9IHdlIGRlZmluZSB0aGF0IG9ubHkgdGhlIGZpZWxkIF9pZCB3aWxsIGJlIGV4dHJhY3RlZCBmb3IgZXZlcnkgZG9jdW1lbnRcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIC8vIHRoaXMgZmFsbGJhY2sgdmFsdWUgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhdGhzIGFycmF5IHJldHVybiBhbGwgdGhlIG1lZXR1cElkJ3MgdmFsdWUgaWYgc2V0IHRvIGZhbHNlXG4gICAgLy8gb3Igb25seSBzb21lIG9mIHRoZW0gd2hlbiBzZXQgdG8gdHJ1ZS5cbiAgICAvLyB0aGF0IG1lYW5zIHRoYXQgaWYgYSB1c2VyIGVudGVyIGEgbWVldHVwSWQgcGF0aCB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIHBhdGhzIGFycmF5IGEgNDA0IFBhZ2Ugbm90IGZvdW5kXG4gICAgLy8gd2lsbCBiZSByZXRyaWV2ZWRcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgLy8gSW4gcmVhbGl0eSB3ZSB3b24ndCBvZiBjb3Vyc2UgaGFyZGNvZGUgdGhvc2UgdmFsdWVzIG1hbnVhbGx5IGJ1dCBmZXRjaCBmb3IgeW91ciBzdXBwb3J0ZWQgbWVldHVwSWQncyBmcm9tIGEgZGF0YWJhc2VcbiAgICAvLyBvciBmcm9tIGFuIEFQSSBhbmQgdGhhdCB3aWxsIHJldHJpZXZlIHRoYXQgYXJyYXkgZHluYW1jYWxseVxuICAgIC8vIHBhdGhzOiBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHBhcmFtczoge1xuICAgIC8vICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAvLyAgICAgICBtZWV0dXBJZDogXCJtMlwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAvLyBGZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcblxuICAvLyBUbyBmZXRjaCB0aGUgZGF0YSBmb3IgdGhlIG1lZXR1cCB3ZSBuZWVkIGEgd2F5IHRvIGlkZW50aWZ5IHRoZSBtZWV0dXBcbiAgLy8gSGVyZSB3ZSBuZWVkIGEgd2F5IHRvIGlkZW50aWZ5IHRoZSBpZCBhbmQgdGhlIGlkIGlzIHRoYW5rZnVsbHkgZW5jb2RlZCBpbiB0aCBVUkxcbiAgLy8gYW5kIGJhc2ljYWxseSB3ZSBjb3VsZCBoYXZlIHVzZSB0aGUgdXNlUm91dGVyIGhvb2sgZnJvbSBOZXh0SlMgdG8gaWRlbnRpZnkgdGhlIGlkIGFuZCB1c2UgdGhlIHF1ZXJ5IHRvIHJlYWNoIHRoZSBtZWV0dXBkSWRcbiAgLy8gQnV0IHRoZSBwcm9ibGVtIGlzIHRoYXQgdGhlIHVzZVJvdXRlciBIb29rIGNhbiBvbmx5IGJlIHVzZSBpbiBDb21wb25lbnQgRnVuY3Rpb24gbm90IGluIGdldFN0YXRpY1Byb3BzXG4gIC8vIEhvcGVmdWxseSB0aGUgZ2V0U3RhdGljUHJvcHMgYWxzbyByZWNlaXZlIGEgY29udGV4dCBhcyBQYXJhbWV0ZXJcbiAgLy8gKGFsdGhvdWdoIHlvdSBjYW5ub3QgYWNjZXNzIHRoZSByZXEgYW5kIHJlcyBhcyB5b3UgZG8gaW4gZ2V0U2VyZXZyU2lkZVByb3BzKVxuICAvLyBidXQgaGFzIGEgcGFyYW1zIGtleVxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC50Y3lidzVuLm1vbmdvZGIubmV0L21lZXR1cHNEQlwiXG4gICk7XG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxuICB9KTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICBjb25zb2xlLmxvZyhtZWV0dXBJZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgICAgLy8gICBtZWV0dXBEYXRhOiB7XG4gICAgICAvLyAgICAgaWQ6IG1lZXR1cElkLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cFwiLFxuICAgICAgLy8gICAgIGltYWdlOlxuICAgICAgLy8gICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvNjQwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbiAgICAgIC8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAzLCB0aGUgYmVzdCBjaXR5XCIsXG4gICAgICAvLyAgICAgZGVzY3JpcHRpb246IFwidGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcbiAgICAgIC8vICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsc0R5bmFtaWNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/cjs/react.production.min":
/*!*************************************************!*\
  !*** external "react/cjs/react.production.min" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/cjs/react.production.min\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW5cIj80NGUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/cjs/react.production.min\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });