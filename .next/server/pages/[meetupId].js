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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kqZg");


/***/ }),

/***/ "9azE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"meetup-details": "MeetupDetails_meetup-details__2BQZU"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "jC4X":
/***/ (function(module, exports) {

module.exports = require("react/cjs/react.production.min");

/***/ }),

/***/ "kqZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react/cjs/react.production.min"
var react_production_min_ = __webpack_require__("jC4X");

// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__("9azE");
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);

// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js




const MeetupDetails = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: MeetupDetails_module_default.a["meetup-details"],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("address", {
      children: [" ", props.address, " "]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: props.description
    })]
  });
};

/* harmony default export */ var meetups_MeetupDetails = (MeetupDetails);
// CONCATENATED MODULE: ./pages/[meetupId]/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// the same way we have in regular React Project dynamic id (e.g:  our-domain/:id)



 // our-domain/<dynamic-id>

const MeetupDetailsDynamicPage = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_production_min_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: props.meetupData.description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetails, _objectSpread({}, props.meetupData)), ";"]
  });
}; // With getStaticProps a page is pre-generated during the Build Process
// now what does this mean? this means that of Coures NextJS to pregenerate all versions of this dynamic Page
// in advance for all the supported meetupId's because since thi is dynamic NextJS needs to know for which meetupsId's values
// it should pregenerate the page
// keep in mind that this is not pregenerated when the user visist thsi page with a specific meetupId but during the build process
// so here we need to pregenrate for all the potential url (meetupId's) user might be entering on Run Time
// and if they enter a value for which we did not pregenerage a page they will see a 404 Page not found error
// this is why we are using this getStaticPaths function where we describe all the dynamcis segments so all the meetupId's in this
// case where a page should be pregeneragted


const getStaticPaths = async () => {
  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB");
  const db = client.db();
  const meetupsCollection = db.collection("meetups"); // meetupsCollection.find({}, {_id: 1});
  // {} retrieve all data with no filter criteria
  // and {_id: 1} we define that only the field _id will be extracted for every document

  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    // this fallback value determine whether the paths array return all the meetupId's value if set to false
    // or only some of them when set to true.
    // that means that if a user enter a meetupId path that is not supported in the paths array a 404 Page not found
    // will be retrieved
    fallback: false,
    // In reality we won't of course hardcode those values manually but fetch for your supported meetupId's from a database
    // or from an API and that will retrieve that array dynamcally
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
};
const getStaticProps = async context => {
  // Fetch data for a single meetup
  // To fetch the data for the meetup we need a way to identify the meetup
  // Here we need a way to identify the id and the id is thankfully encoded in th URL
  // and basically we could have use the useRouter hook from NextJS to identify the id and use the query to reach the meetupdId
  // But the problem is that the useRouter Hook can only be use in Component Function not in getStaticProps
  // Hopefully the getStaticProps also receive a context as Parameter
  // (although you cannot access the req and res as you do in getSerevrSideProps)
  // but has a params key
  const meetupId = context.params.meetupId;
  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(external_mongodb_["ObjectId"])(meetupId)
  });
  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      } //   meetupData: {
      //     id: meetupId,
      //     title: "A Second Meetup",
      //     image:
      //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
      //     address: "Some address 3, the best city",
      //     description: "this is a second meetup",
      //   },

    }
  };
};
/* harmony default export */ var _meetupId_ = __webpack_exports__["default"] = (MeetupDetailsDynamicPage);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });