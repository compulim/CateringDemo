(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AAFRuntime"] = factory();
	else
		root["AAFRuntime"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/aaf.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../adaptivecards/lib/adaptivecards.js":
/*!*********************************************!*\
  !*** ../adaptivecards/lib/adaptivecards.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__export(__webpack_require__(/*! ./serialization */ "../adaptivecards/lib/serialization.js"));
__export(__webpack_require__(/*! ./registry */ "../adaptivecards/lib/registry.js"));
__export(__webpack_require__(/*! ./card-object */ "../adaptivecards/lib/card-object.js"));
__export(__webpack_require__(/*! ./card-elements */ "../adaptivecards/lib/card-elements.js"));
__export(__webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js"));
__export(__webpack_require__(/*! ./host-config */ "../adaptivecards/lib/host-config.js"));
__export(__webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js"));
__export(__webpack_require__(/*! ./utils */ "../adaptivecards/lib/utils.js"));
//# sourceMappingURL=adaptivecards.js.map

/***/ }),

/***/ "../adaptivecards/lib/card-elements.js":
/*!*********************************************!*\
  !*** ../adaptivecards/lib/card-elements.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js");
var shared_1 = __webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js");
var Utils = __webpack_require__(/*! ./utils */ "../adaptivecards/lib/utils.js");
var host_config_1 = __webpack_require__(/*! ./host-config */ "../adaptivecards/lib/host-config.js");
var TextFormatters = __webpack_require__(/*! ./text-formatters */ "../adaptivecards/lib/text-formatters.js");
var card_object_1 = __webpack_require__(/*! ./card-object */ "../adaptivecards/lib/card-object.js");
var serialization_1 = __webpack_require__(/*! ./serialization */ "../adaptivecards/lib/serialization.js");
var registry_1 = __webpack_require__(/*! ./registry */ "../adaptivecards/lib/registry.js");
var CardElement = /** @class */ (function (_super) {
    __extends(CardElement, _super);
    function CardElement() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._truncatedDueToOverflow = false;
        return _this;
    }
    Object.defineProperty(CardElement.prototype, "lang", {
        get: function () {
            var lang = this.getValue(CardElement.langProperty);
            if (lang) {
                return lang;
            }
            else {
                if (this.parent) {
                    return this.parent.lang;
                }
                else {
                    return undefined;
                }
            }
        },
        set: function (value) {
            this.setValue(CardElement.langProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isVisible", {
        get: function () {
            return this.getValue(CardElement.isVisibleProperty);
        },
        set: function (value) {
            // If the element is going to be hidden, reset any changes that were due
            // to overflow truncation (this ensures that if the element is later
            // un-hidden it has the right content)
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && !value) {
                this.undoOverflowTruncation();
            }
            if (this.isVisible !== value) {
                this.setValue(CardElement.isVisibleProperty, value);
                this.updateRenderedElementVisibility();
                if (this._renderedElement) {
                    raiseElementVisibilityChangedEvent(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CardElement.prototype.internalRenderSeparator = function () {
        var renderedSeparator = Utils.renderSeparation(this.hostConfig, {
            spacing: this.hostConfig.getEffectiveSpacing(this.spacing),
            lineThickness: this.separator ? this.hostConfig.separator.lineThickness : undefined,
            lineColor: this.separator ? this.hostConfig.separator.lineColor : undefined
        }, this.separatorOrientation);
        if (shared_1.GlobalSettings.alwaysBleedSeparators && renderedSeparator && this.separatorOrientation == Enums.Orientation.Horizontal) {
            // Adjust separator's margins if the option to always bleed separators is turned on
            var parentContainer = this.getParentContainer();
            if (parentContainer && parentContainer.getEffectivePadding()) {
                var parentPhysicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(parentContainer.getEffectivePadding());
                renderedSeparator.style.marginLeft = "-" + parentPhysicalPadding.left + "px";
                renderedSeparator.style.marginRight = "-" + parentPhysicalPadding.right + "px";
            }
        }
        return renderedSeparator;
    };
    CardElement.prototype.updateRenderedElementVisibility = function () {
        if (this._defaultRenderedElementDisplayMode) {
            var displayMode = this.isDesignMode() || this.isVisible ? this._defaultRenderedElementDisplayMode : "none";
            if (this._renderedElement) {
                this._renderedElement.style.display = displayMode;
            }
            if (this._separatorElement) {
                if (this.parent && this.parent.isFirstElement(this)) {
                    this._separatorElement.style.display = "none";
                }
                else {
                    this._separatorElement.style.display = displayMode;
                }
            }
        }
    };
    CardElement.prototype.hideElementDueToOverflow = function () {
        if (this._renderedElement && this.isVisible) {
            this._renderedElement.style.visibility = "hidden";
            this.isVisible = false;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    CardElement.prototype.showElementHiddenDueToOverflow = function () {
        if (this._renderedElement && !this.isVisible) {
            this._renderedElement.style.removeProperty("visibility");
            this.isVisible = true;
            raiseElementVisibilityChangedEvent(this, false);
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.handleOverflow = function (maxHeight) {
        if (this.isVisible || this.isHiddenDueToOverflow()) {
            var handled = this.truncateOverflow(maxHeight);
            // Even if we were unable to truncate the element to fit this time,
            // it still could have been previously truncated
            this._truncatedDueToOverflow = handled || this._truncatedDueToOverflow;
            if (!handled) {
                this.hideElementDueToOverflow();
            }
            else if (handled && !this.isVisible) {
                this.showElementHiddenDueToOverflow();
            }
        }
    };
    // Marked private to emulate internal access
    CardElement.prototype.resetOverflow = function () {
        var sizeChanged = false;
        if (this._truncatedDueToOverflow) {
            this.undoOverflowTruncation();
            this._truncatedDueToOverflow = false;
            sizeChanged = true;
        }
        if (this.isHiddenDueToOverflow()) {
            this.showElementHiddenDueToOverflow();
        }
        return sizeChanged;
    };
    CardElement.prototype.createPlaceholderElement = function () {
        var styleDefinition = this.getEffectiveStyleDefinition();
        var foregroundCssColor = Utils.stringToCssColor(styleDefinition.foregroundColors.default.subtle);
        var element = document.createElement("div");
        element.style.border = "1px dashed " + foregroundCssColor;
        element.style.padding = "4px";
        element.style.minHeight = "32px";
        element.style.fontSize = "10px";
        element.style.color = foregroundCssColor;
        element.innerText = "Empty " + this.getJsonTypeName();
        return element;
    };
    CardElement.prototype.adjustRenderedElementSize = function (renderedElement) {
        if (this.height === "auto") {
            renderedElement.style.flex = "0 0 auto";
        }
        else {
            renderedElement.style.flex = "1 1 auto";
        }
    };
    CardElement.prototype.isDisplayed = function () {
        return this._renderedElement !== undefined && this.isVisible && this._renderedElement.offsetHeight > 0;
    };
    CardElement.prototype.overrideInternalRender = function () {
        return this.internalRender();
    };
    CardElement.prototype.applyPadding = function () {
        if (this.separatorElement) {
            if (shared_1.GlobalSettings.alwaysBleedSeparators && this.separatorOrientation == Enums.Orientation.Horizontal && !this.isBleeding()) {
                var padding = new shared_1.PaddingDefinition();
                this.getImmediateSurroundingPadding(padding);
                var physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
                this.separatorElement.style.marginLeft = "-" + physicalPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + physicalPadding.right + "px";
            }
            else {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    /*
     * Called when this element overflows the bottom of the card.
     * maxHeight will be the amount of space still available on the card (0 if
     * the element is fully off the card).
     */
    CardElement.prototype.truncateOverflow = function (maxHeight) {
        // Child implementations should return true if the element handled
        // the truncation request such that its content fits within maxHeight,
        // false if the element should fall back to being hidden
        return false;
    };
    /*
     * This should reverse any changes performed in truncateOverflow().
     */
    CardElement.prototype.undoOverflowTruncation = function () { };
    CardElement.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition();
    };
    CardElement.prototype.getHasBackground = function () {
        return false;
    };
    CardElement.prototype.getPadding = function () {
        return this._padding;
    };
    CardElement.prototype.setPadding = function (value) {
        this._padding = value;
    };
    Object.defineProperty(CardElement.prototype, "useDefaultSizing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "allowCustomPadding", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Horizontal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "defaultStyle", {
        get: function () {
            return Enums.ContainerStyle.Default;
        },
        enumerable: true,
        configurable: true
    });
    CardElement.prototype.parse = function (source, context) {
        _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    CardElement.prototype.toJSON = function (context) {
        return _super.prototype.toJSON.call(this, context ? context : new SerializationContext());
    };
    CardElement.prototype.asString = function () {
        return "";
    };
    CardElement.prototype.isBleeding = function () {
        return false;
    };
    CardElement.prototype.getEffectiveStyle = function () {
        if (this.parent) {
            return this.parent.getEffectiveStyle();
        }
        return this.defaultStyle;
    };
    CardElement.prototype.getEffectiveStyleDefinition = function () {
        return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle());
    };
    CardElement.prototype.getForbiddenActionTypes = function () {
        return [];
    };
    CardElement.prototype.getImmediateSurroundingPadding = function (result, processTop, processRight, processBottom, processLeft) {
        if (processTop === void 0) { processTop = true; }
        if (processRight === void 0) { processRight = true; }
        if (processBottom === void 0) { processBottom = true; }
        if (processLeft === void 0) { processLeft = true; }
        if (this.parent) {
            var doProcessTop = processTop && this.parent.isTopElement(this);
            var doProcessRight = processRight && this.parent.isRightMostElement(this);
            var doProcessBottom = processBottom && this.parent.isBottomElement(this);
            var doProcessLeft = processLeft && this.parent.isLeftMostElement(this);
            var effectivePadding = this.parent.getEffectivePadding();
            if (effectivePadding) {
                if (doProcessTop && effectivePadding.top != Enums.Spacing.None) {
                    result.top = effectivePadding.top;
                    doProcessTop = false;
                }
                if (doProcessRight && effectivePadding.right != Enums.Spacing.None) {
                    result.right = effectivePadding.right;
                    doProcessRight = false;
                }
                if (doProcessBottom && effectivePadding.bottom != Enums.Spacing.None) {
                    result.bottom = effectivePadding.bottom;
                    doProcessBottom = false;
                }
                if (doProcessLeft && effectivePadding.left != Enums.Spacing.None) {
                    result.left = effectivePadding.left;
                    doProcessLeft = false;
                }
            }
            if (doProcessTop || doProcessRight || doProcessBottom || doProcessLeft) {
                this.parent.getImmediateSurroundingPadding(result, doProcessTop, doProcessRight, doProcessBottom, doProcessLeft);
            }
        }
    };
    CardElement.prototype.getActionCount = function () {
        return 0;
    };
    CardElement.prototype.getActionAt = function (index) {
        throw new Error("Index out of range.");
    };
    CardElement.prototype.remove = function () {
        if (this.parent && this.parent instanceof CardElementContainer) {
            return this.parent.removeItem(this);
        }
        return false;
    };
    CardElement.prototype.render = function () {
        this._renderedElement = this.overrideInternalRender();
        this._separatorElement = this.internalRenderSeparator();
        if (this._renderedElement) {
            if (this.customCssSelector) {
                this._renderedElement.classList.add(this.customCssSelector);
            }
            this._renderedElement.style.boxSizing = "border-box";
            this._defaultRenderedElementDisplayMode = this._renderedElement.style.display ? this._renderedElement.style.display : undefined;
            this.adjustRenderedElementSize(this._renderedElement);
            this.updateLayout(false);
        }
        else if (this.isDesignMode()) {
            this._renderedElement = this.createPlaceholderElement();
        }
        return this._renderedElement;
    };
    CardElement.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        this.updateRenderedElementVisibility();
        this.applyPadding();
    };
    CardElement.prototype.indexOf = function (cardElement) {
        return -1;
    };
    CardElement.prototype.isDesignMode = function () {
        var rootElement = this.getRootElement();
        return rootElement instanceof AdaptiveCard && rootElement.designMode;
    };
    CardElement.prototype.isFirstElement = function (element) {
        return true;
    };
    CardElement.prototype.isLastElement = function (element) {
        return true;
    };
    CardElement.prototype.isAtTheVeryLeft = function () {
        return this.parent ? this.parent.isLeftMostElement(this) && this.parent.isAtTheVeryLeft() : true;
    };
    CardElement.prototype.isAtTheVeryRight = function () {
        return this.parent ? this.parent.isRightMostElement(this) && this.parent.isAtTheVeryRight() : true;
    };
    CardElement.prototype.isAtTheVeryTop = function () {
        return this.parent ? this.parent.isFirstElement(this) && this.parent.isAtTheVeryTop() : true;
    };
    CardElement.prototype.isAtTheVeryBottom = function () {
        return this.parent ? this.parent.isLastElement(this) && this.parent.isAtTheVeryBottom() : true;
    };
    CardElement.prototype.isBleedingAtTop = function () {
        return false;
    };
    CardElement.prototype.isBleedingAtBottom = function () {
        return false;
    };
    CardElement.prototype.isLeftMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isRightMostElement = function (element) {
        return true;
    };
    CardElement.prototype.isTopElement = function (element) {
        return this.isFirstElement(element);
    };
    CardElement.prototype.isBottomElement = function (element) {
        return this.isLastElement(element);
    };
    CardElement.prototype.isHiddenDueToOverflow = function () {
        return this._renderedElement !== undefined && this._renderedElement.style.visibility == 'hidden';
    };
    CardElement.prototype.getRootElement = function () {
        return this.getRootObject();
    };
    CardElement.prototype.getParentContainer = function () {
        var currentElement = this.parent;
        while (currentElement) {
            if (currentElement instanceof Container) {
                return currentElement;
            }
            currentElement = currentElement.parent;
        }
        return undefined;
    };
    CardElement.prototype.getAllInputs = function () {
        return [];
    };
    CardElement.prototype.getResourceInformation = function () {
        return [];
    };
    CardElement.prototype.getElementById = function (id) {
        return this.id === id ? this : undefined;
    };
    CardElement.prototype.getActionById = function (id) {
        return undefined;
    };
    CardElement.prototype.getEffectivePadding = function () {
        var padding = this.getPadding();
        return (padding && this.allowCustomPadding) ? padding : this.getDefaultPadding();
    };
    Object.defineProperty(CardElement.prototype, "hostConfig", {
        get: function () {
            if (this._hostConfig) {
                return this._hostConfig;
            }
            else {
                if (this.parent) {
                    return this.parent.hostConfig;
                }
                else {
                    return host_config_1.defaultHostConfig;
                }
            }
        },
        set: function (value) {
            this._hostConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "index", {
        get: function () {
            if (this.parent) {
                return this.parent.indexOf(this);
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInteractive", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isStandalone", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "isInline", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.separatorElement) {
                return !this.parent.isFirstElement(this) && (this.isVisible || this.isDesignMode());
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "separatorElement", {
        get: function () {
            return this._separatorElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardElement.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    CardElement.langProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "lang", true, /^[a-z]{2,3}$/ig);
    CardElement.isVisibleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "isVisible", true);
    CardElement.separatorProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "separator", false);
    CardElement.heightProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_1, "height", [
        { value: "auto" },
        { value: "stretch" }
    ], "auto");
    CardElement.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "horizontalAlignment", Enums.HorizontalAlignment, Enums.HorizontalAlignment.Left);
    CardElement.spacingProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "spacing", Enums.Spacing, Enums.Spacing.Default);
    __decorate([
        serialization_1.property(CardElement.horizontalAlignmentProperty)
    ], CardElement.prototype, "horizontalAlignment", void 0);
    __decorate([
        serialization_1.property(CardElement.spacingProperty)
    ], CardElement.prototype, "spacing", void 0);
    __decorate([
        serialization_1.property(CardElement.separatorProperty)
    ], CardElement.prototype, "separator", void 0);
    __decorate([
        serialization_1.property(CardElement.heightProperty)
    ], CardElement.prototype, "height", void 0);
    __decorate([
        serialization_1.property(CardElement.langProperty)
    ], CardElement.prototype, "lang", null);
    __decorate([
        serialization_1.property(CardElement.isVisibleProperty)
    ], CardElement.prototype, "isVisible", null);
    return CardElement;
}(card_object_1.CardObject));
exports.CardElement = CardElement;
var ActionProperty = /** @class */ (function (_super) {
    __extends(ActionProperty, _super);
    function ActionProperty(targetVersion, name, forbiddenActionTypes) {
        if (forbiddenActionTypes === void 0) { forbiddenActionTypes = []; }
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.forbiddenActionTypes = forbiddenActionTypes;
        return _this;
    }
    ActionProperty.prototype.parse = function (sender, source, context) {
        var parent = sender;
        return context.parseAction(parent, source[this.name], this.forbiddenActionTypes, parent.isDesignMode());
    };
    ActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined);
    };
    return ActionProperty;
}(serialization_1.PropertyDefinition));
exports.ActionProperty = ActionProperty;
var BaseTextBlock = /** @class */ (function (_super) {
    __extends(BaseTextBlock, _super);
    function BaseTextBlock() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Enums.TextSize.Default;
        _this.weight = Enums.TextWeight.Default;
        _this.color = Enums.TextColor.Default;
        _this.isSubtle = false;
        return _this;
    }
    BaseTextBlock.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        // selectAction is declared on BaseTextBlock but is only exposed on TextRun,
        // so the property is removed from the BaseTextBlock schema.
        schema.remove(BaseTextBlock.selectActionProperty);
    };
    Object.defineProperty(BaseTextBlock.prototype, "text", {
        get: function () {
            return this.getValue(BaseTextBlock.textProperty);
        },
        set: function (value) {
            this.setText(value);
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    BaseTextBlock.prototype.getFontSize = function (fontType) {
        switch (this.size) {
            case Enums.TextSize.Small:
                return fontType.fontSizes.small;
            case Enums.TextSize.Medium:
                return fontType.fontSizes.medium;
            case Enums.TextSize.Large:
                return fontType.fontSizes.large;
            case Enums.TextSize.ExtraLarge:
                return fontType.fontSizes.extraLarge;
            default:
                return fontType.fontSizes.default;
        }
    };
    BaseTextBlock.prototype.getColorDefinition = function (colorSet, color) {
        switch (color) {
            case Enums.TextColor.Accent:
                return colorSet.accent;
            case Enums.TextColor.Dark:
                return colorSet.dark;
            case Enums.TextColor.Light:
                return colorSet.light;
            case Enums.TextColor.Good:
                return colorSet.good;
            case Enums.TextColor.Warning:
                return colorSet.warning;
            case Enums.TextColor.Attention:
                return colorSet.attention;
            default:
                return colorSet.default;
        }
    };
    BaseTextBlock.prototype.setText = function (value) {
        this.setValue(BaseTextBlock.textProperty, value);
    };
    BaseTextBlock.prototype.asString = function () {
        return this.text;
    };
    BaseTextBlock.prototype.applyStylesTo = function (targetElement) {
        var fontType = this.hostConfig.getFontTypeDefinition(this.fontType);
        if (fontType.fontFamily) {
            targetElement.style.fontFamily = fontType.fontFamily;
        }
        var fontSize;
        switch (this.size) {
            case Enums.TextSize.Small:
                fontSize = fontType.fontSizes.small;
                break;
            case Enums.TextSize.Medium:
                fontSize = fontType.fontSizes.medium;
                break;
            case Enums.TextSize.Large:
                fontSize = fontType.fontSizes.large;
                break;
            case Enums.TextSize.ExtraLarge:
                fontSize = fontType.fontSizes.extraLarge;
                break;
            default:
                fontSize = fontType.fontSizes.default;
                break;
        }
        targetElement.style.fontSize = fontSize + "px";
        var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
        targetElement.style.color = Utils.stringToCssColor(this.isSubtle ? colorDefinition.subtle : colorDefinition.default);
        var fontWeight;
        switch (this.weight) {
            case Enums.TextWeight.Lighter:
                fontWeight = fontType.fontWeights.lighter;
                break;
            case Enums.TextWeight.Bolder:
                fontWeight = fontType.fontWeights.bolder;
                break;
            default:
                fontWeight = fontType.fontWeights.default;
                break;
        }
        targetElement.style.fontWeight = fontWeight.toString();
    };
    Object.defineProperty(BaseTextBlock.prototype, "effectiveColor", {
        get: function () {
            return this.color ? this.color : Enums.TextColor.Default;
        },
        enumerable: true,
        configurable: true
    });
    BaseTextBlock.textProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "text", true);
    BaseTextBlock.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.TextSize, Enums.TextSize.Default);
    BaseTextBlock.weightProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "weight", Enums.TextWeight, Enums.TextWeight.Default);
    BaseTextBlock.colorProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "color", Enums.TextColor, Enums.TextColor.Default);
    BaseTextBlock.isSubtleProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isSubtle", false);
    BaseTextBlock.fontTypeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fontType", Enums.FontType);
    BaseTextBlock.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "selectAction", ["Action.ShowCard"]);
    __decorate([
        serialization_1.property(BaseTextBlock.sizeProperty)
    ], BaseTextBlock.prototype, "size", void 0);
    __decorate([
        serialization_1.property(BaseTextBlock.weightProperty)
    ], BaseTextBlock.prototype, "weight", void 0);
    __decorate([
        serialization_1.property(BaseTextBlock.colorProperty)
    ], BaseTextBlock.prototype, "color", void 0);
    __decorate([
        serialization_1.property(BaseTextBlock.fontTypeProperty)
    ], BaseTextBlock.prototype, "fontType", void 0);
    __decorate([
        serialization_1.property(BaseTextBlock.isSubtleProperty)
    ], BaseTextBlock.prototype, "isSubtle", void 0);
    __decorate([
        serialization_1.property(BaseTextBlock.textProperty)
    ], BaseTextBlock.prototype, "text", null);
    __decorate([
        serialization_1.property(BaseTextBlock.selectActionProperty)
    ], BaseTextBlock.prototype, "selectAction", void 0);
    return BaseTextBlock;
}(CardElement));
exports.BaseTextBlock = BaseTextBlock;
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = false;
        _this._treatAsPlainText = true;
        _this.useMarkdown = true;
        return _this;
    }
    TextBlock.prototype.restoreOriginalContent = function () {
        if (this.renderedElement !== undefined) {
            if (this.maxLines && this.maxLines > 0) {
                this.renderedElement.style.maxHeight = this._computedLineHeight * this.maxLines + "px";
            }
            this.renderedElement.innerHTML = this._originalInnerHtml;
        }
    };
    TextBlock.prototype.truncateIfSupported = function (maxHeight) {
        if (this.renderedElement !== undefined) {
            // For now, only truncate TextBlocks that contain just a single
            // paragraph -- since the maxLines calculation doesn't take into
            // account Markdown lists
            var children = this.renderedElement.children;
            var isTextOnly = !children.length;
            var truncationSupported = isTextOnly || children.length == 1 && children[0].tagName.toLowerCase() == 'p';
            if (truncationSupported) {
                var element = isTextOnly ? this.renderedElement : children[0];
                Utils.truncate(element, maxHeight, this._computedLineHeight);
                return true;
            }
        }
        return false;
    };
    TextBlock.prototype.setText = function (value) {
        _super.prototype.setText.call(this, value);
        this._processedText = undefined;
    };
    TextBlock.prototype.getRenderedDomElementType = function () {
        return "div";
    };
    TextBlock.prototype.internalRender = function () {
        var _this = this;
        this._processedText = undefined;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var element = document.createElement(this.getRenderedDomElementType());
            element.classList.add(hostConfig.makeCssClassName("ac-textBlock"));
            element.style.overflow = "hidden";
            this.applyStylesTo(element);
            if (this.selectAction) {
                element.onclick = function (e) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    if (_this.selectAction) {
                        _this.selectAction.execute();
                    }
                };
                if (hostConfig.supportsInteractivity) {
                    element.tabIndex = 0;
                    element.setAttribute("role", "button");
                    if (this.selectAction.title) {
                        element.setAttribute("aria-label", this.selectAction.title);
                    }
                    element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                }
            }
            if (!this._processedText) {
                this._treatAsPlainText = true;
                var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
                if (this.useMarkdown && formattedText) {
                    if (shared_1.GlobalSettings.allowMarkForTextHighlighting) {
                        formattedText = formattedText.replace(/<mark>/g, "===").replace(/<\/mark>/g, "/==");
                    }
                    var markdownProcessingResult = AdaptiveCard.applyMarkdown(formattedText);
                    if (markdownProcessingResult.didProcess && markdownProcessingResult.outputHtml) {
                        this._processedText = markdownProcessingResult.outputHtml;
                        this._treatAsPlainText = false;
                        // Only process <mark> tag if markdown processing was applied because
                        // markdown processing is also responsible for sanitizing the input string
                        if (shared_1.GlobalSettings.allowMarkForTextHighlighting && this._processedText) {
                            var markStyle = "";
                            var effectiveStyle = this.getEffectiveStyleDefinition();
                            if (effectiveStyle.highlightBackgroundColor) {
                                markStyle += "background-color: " + effectiveStyle.highlightBackgroundColor + ";";
                            }
                            if (effectiveStyle.highlightForegroundColor) {
                                markStyle += "color: " + effectiveStyle.highlightForegroundColor + ";";
                            }
                            if (markStyle) {
                                markStyle = 'style="' + markStyle + '"';
                            }
                            this._processedText = this._processedText.replace(/===/g, "<mark " + markStyle + ">").replace(/\/==/g, "</mark>");
                        }
                    }
                    else {
                        this._processedText = formattedText;
                        this._treatAsPlainText = true;
                    }
                }
                else {
                    this._processedText = formattedText;
                    this._treatAsPlainText = true;
                }
            }
            if (!this._processedText) {
                this._processedText = "";
            }
            if (this._treatAsPlainText) {
                element.innerText = this._processedText;
            }
            else {
                element.innerHTML = this._processedText;
            }
            if (element.firstElementChild instanceof HTMLElement) {
                var firstElementChild = element.firstElementChild;
                firstElementChild.style.marginTop = "0px";
                firstElementChild.style.width = "100%";
                if (!this.wrap) {
                    firstElementChild.style.overflow = "hidden";
                    firstElementChild.style.textOverflow = "ellipsis";
                }
            }
            if (element.lastElementChild instanceof HTMLElement) {
                element.lastElementChild.style.marginBottom = "0px";
            }
            var anchors = element.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    if (raiseAnchorClickedEvent(_this, e.target)) {
                        e.preventDefault();
                        e.cancelBubble = true;
                    }
                };
            }
            if (this.wrap) {
                element.style.wordWrap = "break-word";
                if (this.maxLines && this.maxLines > 0) {
                    element.style.maxHeight = (this._computedLineHeight * this.maxLines) + "px";
                    element.style.overflow = "hidden";
                }
            }
            else {
                element.style.whiteSpace = "nowrap";
                element.style.textOverflow = "ellipsis";
            }
            if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation || shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
                this._originalInnerHtml = element.innerHTML;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextBlock.prototype.truncateOverflow = function (maxHeight) {
        if (maxHeight >= this._computedLineHeight) {
            return this.truncateIfSupported(maxHeight);
        }
        return false;
    };
    TextBlock.prototype.undoOverflowTruncation = function () {
        this.restoreOriginalContent();
        if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines) {
            var maxHeight = this._computedLineHeight * this.maxLines;
            this.truncateIfSupported(maxHeight);
        }
    };
    TextBlock.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        var parentContainer = this.getParentContainer();
        var isRtl = parentContainer ? parentContainer.isRtl() : false;
        switch (this.horizontalAlignment) {
            case Enums.HorizontalAlignment.Center:
                targetElement.style.textAlign = "center";
                break;
            case Enums.HorizontalAlignment.Right:
                targetElement.style.textAlign = isRtl ? "left" : "right";
                break;
            default:
                targetElement.style.textAlign = isRtl ? "right" : "left";
                break;
        }
        var lineHeights = this.hostConfig.lineHeights;
        if (lineHeights) {
            switch (this.size) {
                case Enums.TextSize.Small:
                    this._computedLineHeight = lineHeights.small;
                    break;
                case Enums.TextSize.Medium:
                    this._computedLineHeight = lineHeights.medium;
                    break;
                case Enums.TextSize.Large:
                    this._computedLineHeight = lineHeights.large;
                    break;
                case Enums.TextSize.ExtraLarge:
                    this._computedLineHeight = lineHeights.extraLarge;
                    break;
                default:
                    this._computedLineHeight = lineHeights.default;
                    break;
            }
        }
        else {
            // Looks like 1.33 is the magic number to compute line-height
            // from font size.
            this._computedLineHeight = this.getFontSize(this.hostConfig.getFontTypeDefinition(this.fontType)) * 1.33;
        }
        targetElement.style.lineHeight = this._computedLineHeight + "px";
    };
    TextBlock.prototype.getJsonTypeName = function () {
        return "TextBlock";
    };
    TextBlock.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = false; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared_1.GlobalSettings.useAdvancedTextBlockTruncation && this.maxLines && this.isDisplayed()) {
            // Reset the element's innerHTML in case the available room for
            // content has increased
            this.restoreOriginalContent();
            this.truncateIfSupported(this._computedLineHeight * this.maxLines);
        }
    };
    TextBlock.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "wrap", false);
    TextBlock.maxLinesProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLines");
    __decorate([
        serialization_1.property(TextBlock.wrapProperty)
    ], TextBlock.prototype, "wrap", void 0);
    __decorate([
        serialization_1.property(TextBlock.maxLinesProperty)
    ], TextBlock.prototype, "maxLines", void 0);
    return TextBlock;
}(BaseTextBlock));
exports.TextBlock = TextBlock;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.getRenderedDomElementType = function () {
        return "label";
    };
    Label.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (renderedElement && this.forElementId) {
            renderedElement.htmlFor = this.forElementId;
        }
        return renderedElement;
    };
    return Label;
}(TextBlock));
var TextRun = /** @class */ (function (_super) {
    __extends(TextRun, _super);
    function TextRun() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.italic = false;
        _this.strikethrough = false;
        _this.highlight = false;
        return _this;
    }
    TextRun.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.add(BaseTextBlock.selectActionProperty);
    };
    //#endregion
    TextRun.prototype.internalRender = function () {
        var _this = this;
        if (this.text) {
            var preProcessedText = this.preProcessPropertyValue(BaseTextBlock.textProperty);
            var hostConfig = this.hostConfig;
            var formattedText = TextFormatters.formatText(this.lang, preProcessedText);
            if (!formattedText) {
                formattedText = "";
            }
            var element = document.createElement("span");
            element.classList.add(hostConfig.makeCssClassName("ac-textRun"));
            this.applyStylesTo(element);
            if (this.selectAction && hostConfig.supportsInteractivity) {
                var anchor = document.createElement("a");
                anchor.classList.add(hostConfig.makeCssClassName("ac-anchor"));
                var href = this.selectAction.getHref();
                anchor.href = href ? href : "";
                anchor.target = "_blank";
                anchor.onclick = function (e) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    if (_this.selectAction) {
                        _this.selectAction.execute();
                    }
                };
                anchor.innerText = formattedText;
                element.appendChild(anchor);
            }
            else {
                element.innerText = formattedText;
            }
            return element;
        }
        else {
            return undefined;
        }
    };
    TextRun.prototype.applyStylesTo = function (targetElement) {
        _super.prototype.applyStylesTo.call(this, targetElement);
        if (this.italic) {
            targetElement.style.fontStyle = "italic";
        }
        if (this.strikethrough) {
            targetElement.style.textDecoration = "line-through";
        }
        if (this.highlight) {
            var colorDefinition = this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors, this.effectiveColor);
            targetElement.style.backgroundColor = Utils.stringToCssColor(this.isSubtle ? colorDefinition.highlightColors.subtle : colorDefinition.highlightColors.default);
        }
    };
    TextRun.prototype.getJsonTypeName = function () {
        return "TextRun";
    };
    Object.defineProperty(TextRun.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextRun.prototype, "isInline", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    TextRun.italicProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "italic", false);
    TextRun.strikethroughProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "strikethrough", false);
    TextRun.highlightProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "highlight", false);
    __decorate([
        serialization_1.property(TextRun.italicProperty)
    ], TextRun.prototype, "italic", void 0);
    __decorate([
        serialization_1.property(TextRun.strikethroughProperty)
    ], TextRun.prototype, "strikethrough", void 0);
    __decorate([
        serialization_1.property(TextRun.highlightProperty)
    ], TextRun.prototype, "highlight", void 0);
    return TextRun;
}(BaseTextBlock));
exports.TextRun = TextRun;
var RichTextBlock = /** @class */ (function (_super) {
    __extends(RichTextBlock, _super);
    function RichTextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inlines = [];
        return _this;
    }
    RichTextBlock.prototype.internalAddInline = function (inline, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (!inline.isInline) {
            throw new Error("RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline.");
        }
        var doAdd = inline.parent === undefined || forceAdd;
        if (!doAdd && inline.parent != this) {
            throw new Error("RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock.");
        }
        else {
            inline.setParent(this);
            this._inlines.push(inline);
        }
    };
    RichTextBlock.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._inlines = [];
        if (Array.isArray(source["inlines"])) {
            for (var _i = 0, _a = source["inlines"]; _i < _a.length; _i++) {
                var jsonInline = _a[_i];
                var inline = void 0;
                if (typeof jsonInline === "string") {
                    var textRun = new TextRun();
                    textRun.text = jsonInline;
                    inline = textRun;
                }
                else {
                    // No fallback for inlines in 1.2
                    inline = context.parseElement(this, jsonInline, false);
                }
                if (inline) {
                    this.internalAddInline(inline, true);
                }
            }
        }
    };
    RichTextBlock.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this._inlines.length > 0) {
            var jsonInlines = [];
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                jsonInlines.push(inline.toJSON(context));
            }
            context.serializeValue(target, "inlines", jsonInlines);
        }
    };
    RichTextBlock.prototype.internalRender = function () {
        if (this._inlines.length > 0) {
            var element = document.createElement("div");
            element.className = this.hostConfig.makeCssClassName("ac-richTextBlock");
            var parentContainer = this.getParentContainer();
            var isRtl = parentContainer ? parentContainer.isRtl() : false;
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.textAlign = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.textAlign = isRtl ? "left" : "right";
                    break;
                default:
                    element.style.textAlign = isRtl ? "right" : "left";
                    break;
            }
            var renderedInlines = 0;
            for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
                var inline = _a[_i];
                var renderedInline = inline.render();
                if (renderedInline) {
                    element.appendChild(renderedInline);
                    renderedInlines++;
                }
            }
            if (renderedInlines > 0) {
                return element;
            }
        }
        return undefined;
    };
    RichTextBlock.prototype.asString = function () {
        var result = "";
        for (var _i = 0, _a = this._inlines; _i < _a.length; _i++) {
            var inline = _a[_i];
            result += inline.asString();
        }
        return result;
    };
    RichTextBlock.prototype.getJsonTypeName = function () {
        return "RichTextBlock";
    };
    RichTextBlock.prototype.getInlineCount = function () {
        return this._inlines.length;
    };
    RichTextBlock.prototype.getInlineAt = function (index) {
        if (index >= 0 && index < this._inlines.length) {
            return this._inlines[index];
        }
        else {
            throw new Error("RichTextBlock.getInlineAt: Index out of range (" + index + ")");
        }
    };
    RichTextBlock.prototype.addInline = function (inline) {
        this.internalAddInline(inline);
    };
    RichTextBlock.prototype.removeInline = function (inline) {
        var index = this._inlines.indexOf(inline);
        if (index >= 0) {
            this._inlines[index].setParent(undefined);
            this._inlines.splice(index, 1);
            return true;
        }
        return false;
    };
    return RichTextBlock;
}(CardElement));
exports.RichTextBlock = RichTextBlock;
var Fact = /** @class */ (function (_super) {
    __extends(Fact, _super);
    function Fact(name, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    //#endregion
    Fact.prototype.getSchemaKey = function () {
        return "Fact";
    };
    //#region Schema
    Fact.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Fact.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        serialization_1.property(Fact.titleProperty)
    ], Fact.prototype, "name", void 0);
    __decorate([
        serialization_1.property(Fact.valueProperty)
    ], Fact.prototype, "value", void 0);
    return Fact;
}(serialization_1.SerializableObject));
exports.Fact = Fact;
var FactSet = /** @class */ (function (_super) {
    __extends(FactSet, _super);
    function FactSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FactSet.prototype, "useDefaultSizing", {
        //#endregion
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FactSet.prototype.internalRender = function () {
        var element = undefined;
        var hostConfig = this.hostConfig;
        if (this.facts.length > 0) {
            element = document.createElement("table");
            element.style.borderWidth = "0px";
            element.style.borderSpacing = "0px";
            element.style.borderStyle = "none";
            element.style.borderCollapse = "collapse";
            element.style.display = "block";
            element.style.overflow = "hidden";
            element.classList.add(hostConfig.makeCssClassName("ac-factset"));
            for (var i = 0; i < this.facts.length; i++) {
                var trElement = document.createElement("tr");
                if (i > 0) {
                    trElement.style.marginTop = hostConfig.factSet.spacing + "px";
                }
                // Title column
                var tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-title"));
                if (hostConfig.factSet.title.maxWidth) {
                    tdElement.style.maxWidth = hostConfig.factSet.title.maxWidth + "px";
                }
                tdElement.style.verticalAlign = "top";
                var textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = (!this.facts[i].name && this.isDesignMode()) ? "Title" : this.facts[i].name;
                textBlock.size = hostConfig.factSet.title.size;
                textBlock.color = hostConfig.factSet.title.color;
                textBlock.isSubtle = hostConfig.factSet.title.isSubtle;
                textBlock.weight = hostConfig.factSet.title.weight;
                textBlock.wrap = hostConfig.factSet.title.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                // Spacer column
                tdElement = document.createElement("td");
                tdElement.style.width = "10px";
                Utils.appendChild(trElement, tdElement);
                // Value column
                tdElement = document.createElement("td");
                tdElement.style.padding = "0";
                tdElement.style.verticalAlign = "top";
                tdElement.classList.add(hostConfig.makeCssClassName("ac-fact-value"));
                textBlock = new TextBlock();
                textBlock.setParent(this);
                textBlock.text = this.facts[i].value;
                textBlock.size = hostConfig.factSet.value.size;
                textBlock.color = hostConfig.factSet.value.color;
                textBlock.isSubtle = hostConfig.factSet.value.isSubtle;
                textBlock.weight = hostConfig.factSet.value.weight;
                textBlock.wrap = hostConfig.factSet.value.wrap;
                textBlock.spacing = Enums.Spacing.None;
                Utils.appendChild(tdElement, textBlock.render());
                Utils.appendChild(trElement, tdElement);
                Utils.appendChild(element, trElement);
            }
        }
        return element;
    };
    FactSet.prototype.getJsonTypeName = function () {
        return "FactSet";
    };
    //#region Schema
    FactSet.factsProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "facts", Fact);
    __decorate([
        serialization_1.property(FactSet.factsProperty)
    ], FactSet.prototype, "facts", void 0);
    return FactSet;
}(CardElement));
exports.FactSet = FactSet;
var ImageDimensionProperty = /** @class */ (function (_super) {
    __extends(ImageDimensionProperty, _super);
    function ImageDimensionProperty(targetVersion, name, internalName) {
        var _this = _super.call(this, targetVersion, name) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.internalName = internalName;
        return _this;
    }
    ImageDimensionProperty.prototype.getInternalName = function () {
        return this.internalName;
    };
    ImageDimensionProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        var isValid = false;
        if (typeof sourceValue === "string") {
            try {
                var size = shared_1.SizeAndUnit.parse(sourceValue, true);
                if (size.unit == Enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Do nothing. A parse error is emitted below
            }
        }
        if (!isValid) {
            context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid " + this.name + " value: " + sourceValue, sender);
        }
        return result;
    };
    ImageDimensionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return ImageDimensionProperty;
}(serialization_1.PropertyDefinition));
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Enums.Size.Auto;
        _this.style = Enums.ImageStyle.Default;
        return _this;
    }
    Image.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(CardElement.heightProperty);
    };
    //#endregion
    Image.prototype.applySize = function (element) {
        if (this.pixelWidth || this.pixelHeight) {
            if (this.pixelWidth) {
                element.style.width = this.pixelWidth + "px";
            }
            if (this.pixelHeight) {
                element.style.height = this.pixelHeight + "px";
            }
        }
        else {
            switch (this.size) {
                case Enums.Size.Stretch:
                    element.style.width = "100%";
                    break;
                case Enums.Size.Auto:
                    element.style.maxWidth = "100%";
                    break;
                case Enums.Size.Small:
                    element.style.width = this.hostConfig.imageSizes.small + "px";
                    break;
                case Enums.Size.Large:
                    element.style.width = this.hostConfig.imageSizes.large + "px";
                    break;
                case Enums.Size.Medium:
                    element.style.width = this.hostConfig.imageSizes.medium + "px";
                    break;
            }
        }
    };
    Object.defineProperty(Image.prototype, "useDefaultSizing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.internalRender = function () {
        var _this = this;
        var element = undefined;
        if (this.url) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.alignItems = "flex-start";
            element.onkeypress = function (e) {
                if (_this.selectAction && (e.keyCode == 13 || e.keyCode == 32)) { // enter or space pressed
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                }
            };
            element.onclick = function (e) {
                if (_this.selectAction) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    _this.selectAction.execute();
                }
            };
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            // Cache hostConfig to avoid walking the parent hierarchy multiple times
            var hostConfig = this.hostConfig;
            var imageElement = document.createElement("img");
            imageElement.onload = function (e) {
                raiseImageLoadedEvent(_this);
            };
            imageElement.onerror = function (e) {
                if (_this.renderedElement) {
                    var card = _this.getRootElement();
                    _this.renderedElement.innerHTML = "";
                    if (card && card.designMode) {
                        var errorElement = document.createElement("div");
                        errorElement.style.display = "flex";
                        errorElement.style.alignItems = "center";
                        errorElement.style.justifyContent = "center";
                        errorElement.style.backgroundColor = "#EEEEEE";
                        errorElement.style.color = "black";
                        errorElement.innerText = ":-(";
                        errorElement.style.padding = "10px";
                        _this.applySize(errorElement);
                        _this.renderedElement.appendChild(errorElement);
                    }
                }
                raiseImageLoadedEvent(_this);
            };
            imageElement.style.maxHeight = "100%";
            imageElement.style.minWidth = "0";
            imageElement.classList.add(hostConfig.makeCssClassName("ac-image"));
            if (this.selectAction !== undefined && hostConfig.supportsInteractivity) {
                imageElement.tabIndex = 0;
                imageElement.setAttribute("role", "button");
                if (this.selectAction.title) {
                    imageElement.setAttribute("aria-label", this.selectAction.title);
                }
                imageElement.classList.add(hostConfig.makeCssClassName("ac-selectable"));
            }
            this.applySize(imageElement);
            if (this.style === Enums.ImageStyle.Person) {
                imageElement.style.borderRadius = "50%";
                imageElement.style.backgroundPosition = "50% 50%";
                imageElement.style.backgroundRepeat = "no-repeat";
            }
            imageElement.style.backgroundColor = Utils.stringToCssColor(this.backgroundColor);
            imageElement.src = this.preProcessPropertyValue(Image.urlProperty);
            imageElement.alt = this.preProcessPropertyValue(Image.altTextProperty);
            element.appendChild(imageElement);
        }
        return element;
    };
    Image.prototype.getJsonTypeName = function () {
        return "Image";
    };
    Image.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.selectAction) {
            result = this.selectAction.getActionById(id);
        }
        return result;
    };
    Image.prototype.getResourceInformation = function () {
        return this.url ? [{ url: this.url, mimeType: "image" }] : [];
    };
    Image.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    Image.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "altText");
    Image.backgroundColorProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "backgroundColor");
    Image.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.ImageStyle, Enums.ImageStyle.Default);
    Image.sizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "size", Enums.Size, Enums.Size.Auto);
    Image.pixelWidthProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "width", "pixelWidth");
    Image.pixelHeightProperty = new ImageDimensionProperty(serialization_1.Versions.v1_1, "height", "pixelHeight");
    Image.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "selectAction", ["Action.ShowCard"]);
    __decorate([
        serialization_1.property(Image.urlProperty)
    ], Image.prototype, "url", void 0);
    __decorate([
        serialization_1.property(Image.altTextProperty)
    ], Image.prototype, "altText", void 0);
    __decorate([
        serialization_1.property(Image.backgroundColorProperty)
    ], Image.prototype, "backgroundColor", void 0);
    __decorate([
        serialization_1.property(Image.sizeProperty)
    ], Image.prototype, "size", void 0);
    __decorate([
        serialization_1.property(Image.styleProperty)
    ], Image.prototype, "style", void 0);
    __decorate([
        serialization_1.property(Image.pixelWidthProperty)
    ], Image.prototype, "pixelWidth", void 0);
    __decorate([
        serialization_1.property(Image.pixelHeightProperty)
    ], Image.prototype, "pixelHeight", void 0);
    __decorate([
        serialization_1.property(Image.selectActionProperty)
    ], Image.prototype, "selectAction", void 0);
    return Image;
}(CardElement));
exports.Image = Image;
var CardElementContainer = /** @class */ (function (_super) {
    __extends(CardElementContainer, _super);
    function CardElementContainer() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allowVerticalOverflow = false;
        return _this;
    }
    CardElementContainer.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        if (!this.isSelectable) {
            schema.remove(CardElementContainer.selectActionProperty);
        }
    };
    //#endregion
    CardElementContainer.prototype.isElementAllowed = function (element) {
        return this.hostConfig.supportsInteractivity || !element.isInteractive;
    };
    CardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared_1.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        this.renderedElement.style.marginRight = "0";
        this.renderedElement.style.marginLeft = "0";
    };
    Object.defineProperty(CardElementContainer.prototype, "isSelectable", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        for (var i = 0; i < this.getItemCount(); i++) {
            var item = this.getItemAt(i);
            if (!this.hostConfig.supportsInteractivity && item.isInteractive) {
                context.addFailure(this, 5 /* InteractivityNotAllowed */, "Interactivity is not allowed.");
            }
            if (!this.isElementAllowed(item)) {
                context.addFailure(this, 5 /* InteractivityNotAllowed */, "Elements of type " + item.getJsonTypeName() + " are not allowed in this container.");
            }
            item.internalValidateProperties(context);
        }
        if (this._selectAction) {
            this._selectAction.internalValidateProperties(context);
        }
    };
    CardElementContainer.prototype.render = function () {
        var _this = this;
        var element = _super.prototype.render.call(this);
        if (element) {
            var hostConfig = this.hostConfig;
            if (this.allowVerticalOverflow) {
                element.style.overflowX = "hidden";
                element.style.overflowY = "auto";
            }
            if (element && this.isSelectable && this._selectAction && hostConfig.supportsInteractivity) {
                element.classList.add(hostConfig.makeCssClassName("ac-selectable"));
                element.tabIndex = 0;
                element.setAttribute("role", "button");
                if (this._selectAction.title) {
                    element.setAttribute("aria-label", this._selectAction.title);
                }
                element.onclick = function (e) {
                    if (_this._selectAction !== undefined) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
                element.onkeypress = function (e) {
                    if (_this._selectAction !== undefined && (e.keyCode == 13 || e.keyCode == 32)) {
                        // Enter or space pressed
                        e.preventDefault();
                        e.cancelBubble = true;
                        _this._selectAction.execute();
                    }
                };
            }
        }
        return element;
    };
    CardElementContainer.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (processChildren) {
            for (var i = 0; i < this.getItemCount(); i++) {
                this.getItemAt(i).updateLayout();
            }
        }
    };
    CardElementContainer.prototype.getAllInputs = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getAllInputs());
        }
        return result;
    };
    CardElementContainer.prototype.getResourceInformation = function () {
        var result = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            result = result.concat(this.getItemAt(i).getResourceInformation());
        }
        return result;
    };
    CardElementContainer.prototype.getElementById = function (id) {
        var result = _super.prototype.getElementById.call(this, id);
        if (!result) {
            for (var i = 0; i < this.getItemCount(); i++) {
                result = this.getItemAt(i).getElementById(id);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    CardElementContainer.selectActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "selectAction", ["Action.ShowCard"]);
    __decorate([
        serialization_1.property(CardElementContainer.selectActionProperty)
    ], CardElementContainer.prototype, "_selectAction", void 0);
    return CardElementContainer;
}(CardElement));
exports.CardElementContainer = CardElementContainer;
var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._images = [];
        _this.imageSize = Enums.Size.Medium;
        return _this;
    }
    //#endregion
    ImageSet.prototype.internalRender = function () {
        var element = undefined;
        if (this._images.length > 0) {
            element = document.createElement("div");
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            for (var _i = 0, _a = this._images; _i < _a.length; _i++) {
                var image = _a[_i];
                image.size = this.imageSize;
                var renderedImage = image.render();
                if (renderedImage) {
                    renderedImage.style.display = "inline-flex";
                    renderedImage.style.margin = "0px";
                    renderedImage.style.marginRight = "10px";
                    renderedImage.style.maxHeight = this.hostConfig.imageSet.maxImageHeight + "px";
                    Utils.appendChild(element, renderedImage);
                }
            }
        }
        return element;
    };
    ImageSet.prototype.getItemCount = function () {
        return this._images.length;
    };
    ImageSet.prototype.getItemAt = function (index) {
        return this._images[index];
    };
    ImageSet.prototype.getFirstVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[0] : undefined;
    };
    ImageSet.prototype.getLastVisibleRenderedItem = function () {
        return this._images && this._images.length > 0 ? this._images[this._images.length - 1] : undefined;
    };
    ImageSet.prototype.removeItem = function (item) {
        if (item instanceof Image) {
            var itemIndex = this._images.indexOf(item);
            if (itemIndex >= 0) {
                this._images.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ImageSet.prototype.getJsonTypeName = function () {
        return "ImageSet";
    };
    ImageSet.prototype.addImage = function (image) {
        if (!image.parent) {
            this._images.push(image);
            image.setParent(this);
        }
        else {
            throw new Error("This image already belongs to another ImageSet");
        }
    };
    ImageSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Image ? this._images.indexOf(cardElement) : -1;
    };
    ImageSet.imagesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "images", Image, function (sender, item) { item.setParent(sender); });
    ImageSet.imageSizeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "imageSize", Enums.Size, Enums.Size.Medium);
    __decorate([
        serialization_1.property(ImageSet.imagesProperty)
    ], ImageSet.prototype, "_images", void 0);
    __decorate([
        serialization_1.property(ImageSet.imageSizeProperty)
    ], ImageSet.prototype, "imageSize", void 0);
    return ImageSet;
}(CardElementContainer));
exports.ImageSet = ImageSet;
var MediaSource = /** @class */ (function (_super) {
    __extends(MediaSource, _super);
    function MediaSource(url, mimeType) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.mimeType = mimeType;
        return _this;
    }
    //#endregion
    MediaSource.prototype.getSchemaKey = function () {
        return "MediaSource";
    };
    MediaSource.prototype.isValid = function () {
        return this.mimeType && this.url ? true : false;
    };
    MediaSource.prototype.render = function () {
        var result = undefined;
        if (this.isValid()) {
            result = document.createElement("source");
            result.src = this.url;
            result.type = this.mimeType;
        }
        return result;
    };
    //#region Schema
    MediaSource.mimeTypeProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "mimeType");
    MediaSource.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "url");
    __decorate([
        serialization_1.property(MediaSource.mimeTypeProperty)
    ], MediaSource.prototype, "mimeType", void 0);
    __decorate([
        serialization_1.property(MediaSource.urlProperty)
    ], MediaSource.prototype, "url", void 0);
    return MediaSource;
}(serialization_1.SerializableObject));
exports.MediaSource = MediaSource;
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sources = [];
        return _this;
    }
    Media.prototype.getPosterUrl = function () {
        return this.poster ? this.poster : this.hostConfig.media.defaultPoster;
    };
    Media.prototype.processSources = function () {
        this._selectedSources = [];
        this._selectedMediaType = undefined;
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var mimeComponents = source.mimeType ? source.mimeType.split('/') : [];
            if (mimeComponents.length == 2) {
                if (!this._selectedMediaType) {
                    var index = Media.supportedMediaTypes.indexOf(mimeComponents[0]);
                    if (index >= 0) {
                        this._selectedMediaType = Media.supportedMediaTypes[index];
                    }
                }
                if (mimeComponents[0] == this._selectedMediaType) {
                    this._selectedSources.push(source);
                }
            }
        }
    };
    Media.prototype.renderPoster = function () {
        var _this = this;
        var playButtonArrowWidth = 12;
        var playButtonArrowHeight = 15;
        var posterRootElement = document.createElement("div");
        posterRootElement.className = this.hostConfig.makeCssClassName("ac-media-poster");
        posterRootElement.setAttribute("role", "contentinfo");
        posterRootElement.setAttribute("aria-label", this.altText ? this.altText : "Media content");
        posterRootElement.style.position = "relative";
        posterRootElement.style.display = "flex";
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            var posterImageElement_1 = document.createElement("img");
            posterImageElement_1.style.width = "100%";
            posterImageElement_1.style.height = "100%";
            posterImageElement_1.onerror = function (e) {
                if (posterImageElement_1.parentNode) {
                    posterImageElement_1.parentNode.removeChild(posterImageElement_1);
                }
                posterRootElement.classList.add("empty");
                posterRootElement.style.minHeight = "150px";
            };
            posterImageElement_1.src = posterUrl;
            posterRootElement.appendChild(posterImageElement_1);
        }
        else {
            posterRootElement.classList.add("empty");
            posterRootElement.style.minHeight = "150px";
        }
        if (this.hostConfig.supportsInteractivity && this._selectedSources.length > 0) {
            var playButtonOuterElement = document.createElement("div");
            playButtonOuterElement.setAttribute("role", "button");
            playButtonOuterElement.setAttribute("aria-label", "Play media");
            playButtonOuterElement.className = this.hostConfig.makeCssClassName("ac-media-playButton");
            playButtonOuterElement.style.display = "flex";
            playButtonOuterElement.style.alignItems = "center";
            playButtonOuterElement.style.justifyContent = "center";
            playButtonOuterElement.onclick = function (e) {
                if (_this.hostConfig.media.allowInlinePlayback) {
                    e.preventDefault();
                    e.cancelBubble = true;
                    if (_this.renderedElement) {
                        var mediaPlayerElement = _this.renderMediaPlayer();
                        _this.renderedElement.innerHTML = "";
                        _this.renderedElement.appendChild(mediaPlayerElement);
                        mediaPlayerElement.play();
                    }
                }
                else {
                    if (Media.onPlay) {
                        e.preventDefault();
                        e.cancelBubble = true;
                        Media.onPlay(_this);
                    }
                }
            };
            var playButtonInnerElement = document.createElement("div");
            playButtonInnerElement.className = this.hostConfig.makeCssClassName("ac-media-playButton-arrow");
            playButtonInnerElement.style.width = playButtonArrowWidth + "px";
            playButtonInnerElement.style.height = playButtonArrowHeight + "px";
            playButtonInnerElement.style.borderTopWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderBottomWidth = (playButtonArrowHeight / 2) + "px";
            playButtonInnerElement.style.borderLeftWidth = playButtonArrowWidth + "px";
            playButtonInnerElement.style.borderRightWidth = "0";
            playButtonInnerElement.style.borderStyle = "solid";
            playButtonInnerElement.style.borderTopColor = "transparent";
            playButtonInnerElement.style.borderRightColor = "transparent";
            playButtonInnerElement.style.borderBottomColor = "transparent";
            playButtonInnerElement.style.transform = "translate(" + (playButtonArrowWidth / 10) + "px,0px)";
            playButtonOuterElement.appendChild(playButtonInnerElement);
            var playButtonContainer = document.createElement("div");
            playButtonContainer.style.position = "absolute";
            playButtonContainer.style.left = "0";
            playButtonContainer.style.top = "0";
            playButtonContainer.style.width = "100%";
            playButtonContainer.style.height = "100%";
            playButtonContainer.style.display = "flex";
            playButtonContainer.style.justifyContent = "center";
            playButtonContainer.style.alignItems = "center";
            playButtonContainer.appendChild(playButtonOuterElement);
            posterRootElement.appendChild(playButtonContainer);
        }
        return posterRootElement;
    };
    Media.prototype.renderMediaPlayer = function () {
        var mediaElement;
        if (this._selectedMediaType == "video") {
            var videoPlayer = document.createElement("video");
            var posterUrl = this.getPosterUrl();
            if (posterUrl) {
                videoPlayer.poster = posterUrl;
            }
            mediaElement = videoPlayer;
        }
        else {
            mediaElement = document.createElement("audio");
        }
        mediaElement.controls = true;
        mediaElement.preload = "none";
        mediaElement.style.width = "100%";
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var source = _a[_i];
            var renderedSource = source.render();
            Utils.appendChild(mediaElement, renderedSource);
        }
        return mediaElement;
    };
    Media.prototype.internalRender = function () {
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-media");
        this.processSources();
        element.appendChild(this.renderPoster());
        return element;
    };
    Media.prototype.getJsonTypeName = function () {
        return "Media";
    };
    Media.prototype.getResourceInformation = function () {
        var result = [];
        var posterUrl = this.getPosterUrl();
        if (posterUrl) {
            result.push({ url: posterUrl, mimeType: "image" });
        }
        for (var _i = 0, _a = this.sources; _i < _a.length; _i++) {
            var mediaSource = _a[_i];
            if (mediaSource.isValid()) {
                result.push({
                    url: mediaSource.url,
                    mimeType: mediaSource.mimeType
                });
            }
        }
        return result;
    };
    Object.defineProperty(Media.prototype, "selectedMediaType", {
        get: function () {
            return this._selectedMediaType;
        },
        enumerable: true,
        configurable: true
    });
    Media.sourcesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_1, "sources", MediaSource);
    Media.posterProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "poster");
    Media.altTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "altText");
    //#endregion
    Media.supportedMediaTypes = ["audio", "video"];
    __decorate([
        serialization_1.property(Media.sourcesProperty)
    ], Media.prototype, "sources", void 0);
    __decorate([
        serialization_1.property(Media.posterProperty)
    ], Media.prototype, "poster", void 0);
    __decorate([
        serialization_1.property(Media.altTextProperty)
    ], Media.prototype, "altText", void 0);
    return Media;
}(CardElement));
exports.Media = Media;
var InputValidationOptions = /** @class */ (function (_super) {
    __extends(InputValidationOptions, _super);
    function InputValidationOptions() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.necessity = Enums.InputValidationNecessity.Optional;
        return _this;
    }
    InputValidationOptions.prototype.getSchemaKey = function () {
        return "InputValidationOptions";
    };
    //#endregion
    InputValidationOptions.prototype.internalToJSON = function (target, context) {
        return this.hasAllDefaultValues() ? undefined : _super.prototype.internalToJSON.call(this, target, context);
    };
    InputValidationOptions.necessityProperty = new serialization_1.EnumProperty(serialization_1.Versions.vNext, "necessity", Enums.InputValidationNecessity, Enums.InputValidationNecessity.Optional);
    InputValidationOptions.errorMessageProperty = new serialization_1.StringProperty(serialization_1.Versions.vNext, "errorMessagwe");
    __decorate([
        serialization_1.property(InputValidationOptions.necessityProperty)
    ], InputValidationOptions.prototype, "necessity", void 0);
    __decorate([
        serialization_1.property(InputValidationOptions.errorMessageProperty)
    ], InputValidationOptions.prototype, "errorMessage", void 0);
    return InputValidationOptions;
}(serialization_1.SerializableObject));
exports.InputValidationOptions = InputValidationOptions;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        if (!shared_1.GlobalSettings.useBuiltInInputValidation) {
            schema.remove(Input.validationProperty);
        }
    };
    Object.defineProperty(Input.prototype, "validation", {
        get: function () {
            return this.getValue(Input.validationProperty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "isNullable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "renderedInputControlElement", {
        get: function () {
            return this._renderedInputControlElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "inputControlContainerElement", {
        get: function () {
            return this._inputControlContainerElement;
        },
        enumerable: true,
        configurable: true
    });
    Input.prototype.overrideInternalRender = function () {
        var hostConfig = this.hostConfig;
        this._outerContainerElement = document.createElement("div");
        this._outerContainerElement.style.display = "flex";
        this._outerContainerElement.style.flexDirection = "column";
        this._inputControlContainerElement = document.createElement("div");
        this._inputControlContainerElement.className = hostConfig.makeCssClassName("ac-input-container");
        this._inputControlContainerElement.style.display = "flex";
        var renderedInputControlElement = this.internalRender();
        if (renderedInputControlElement) {
            this._renderedInputControlElement = renderedInputControlElement;
            this._renderedInputControlElement.style.minWidth = "0px";
            if (shared_1.GlobalSettings.useBuiltInInputValidation && this.isNullable && this.validation.necessity == Enums.InputValidationNecessity.RequiredWithVisualCue) {
                this._renderedInputControlElement.classList.add(hostConfig.makeCssClassName("ac-input-required"));
            }
            this._inputControlContainerElement.appendChild(this._renderedInputControlElement);
            this._outerContainerElement.appendChild(this._inputControlContainerElement);
            return this._outerContainerElement;
        }
        return undefined;
    };
    Input.prototype.valueChanged = function () {
        this.resetValidationFailureCue();
        if (this.onValueChanged) {
            this.onValueChanged(this);
        }
        raiseInputValueChangedEvent(this);
    };
    Input.prototype.resetValidationFailureCue = function () {
        if (shared_1.GlobalSettings.useBuiltInInputValidation && this.renderedElement) {
            this._renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
            if (this._errorMessageElement) {
                this._outerContainerElement.removeChild(this._errorMessageElement);
                this._errorMessageElement = undefined;
            }
        }
    };
    Input.prototype.showValidationErrorMessage = function () {
        if (this.renderedElement && shared_1.GlobalSettings.useBuiltInInputValidation && shared_1.GlobalSettings.displayInputValidationErrors && this.validation.errorMessage) {
            this._errorMessageElement = document.createElement("span");
            this._errorMessageElement.className = this.hostConfig.makeCssClassName("ac-input-validation-error-message");
            this._errorMessageElement.textContent = this.validation.errorMessage;
            this._outerContainerElement.appendChild(this._errorMessageElement);
        }
    };
    Input.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.id) {
            context.addFailure(this, 8 /* PropertyCantBeNull */, "All inputs must have a unique Id");
        }
    };
    Input.prototype.validateValue = function () {
        if (shared_1.GlobalSettings.useBuiltInInputValidation) {
            this.resetValidationFailureCue();
            var result = this.validation.necessity != Enums.InputValidationNecessity.Optional ? this.isSet() : true;
            if (!result && this.renderedElement) {
                this._renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed"));
                this.showValidationErrorMessage();
            }
            return result;
        }
        else {
            return true;
        }
    };
    Input.prototype.getAllInputs = function () {
        return [this];
    };
    Object.defineProperty(Input.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    Input.validationProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.vNext, "validation", InputValidationOptions);
    __decorate([
        serialization_1.property(Input.validationProperty)
    ], Input.prototype, "validation", null);
    return Input;
}(CardElement));
exports.Input = Input;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiline = false;
        _this.style = Enums.InputTextStyle.Text;
        return _this;
    }
    //#endregion
    TextInput.prototype.setupInput = function (input) {
        var _this = this;
        input.style.flex = "1 1 auto";
        input.tabIndex = 0;
        if (this.placeholder) {
            input.placeholder = this.placeholder;
            input.setAttribute("aria-label", this.placeholder);
        }
        if (this.defaultValue) {
            input.value = this.defaultValue;
        }
        if (this.maxLength && this.maxLength > 0) {
            input.maxLength = this.maxLength;
        }
        input.oninput = function () { _this.valueChanged(); };
        input.onkeypress = function (e) {
            // Ctrl+Enter pressed
            if (e.keyCode == 10 && _this.inlineAction) {
                _this.inlineAction.execute();
            }
        };
    };
    TextInput.prototype.internalRender = function () {
        var result;
        if (this.isMultiline) {
            result = document.createElement("textarea");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput", "ac-multiline");
        }
        else {
            result = document.createElement("input");
            result.className = this.hostConfig.makeCssClassName("ac-input", "ac-textInput");
            result.type = Enums.InputTextStyle[this.style].toLowerCase();
        }
        this.setupInput(result);
        return result;
    };
    TextInput.prototype.overrideInternalRender = function () {
        var _this = this;
        var renderedInputControl = _super.prototype.overrideInternalRender.call(this);
        if (this.inlineAction) {
            var button_1 = document.createElement("button");
            button_1.className = this.hostConfig.makeCssClassName("ac-inlineActionButton");
            button_1.onclick = function (e) {
                e.preventDefault();
                e.cancelBubble = true;
                if (_this.inlineAction) {
                    _this.inlineAction.execute();
                }
            };
            if (this.inlineAction.iconUrl) {
                button_1.classList.add("iconOnly");
                var icon_1 = document.createElement("img");
                icon_1.style.height = "100%";
                // The below trick is necessary as a workaround in Chrome where the icon is initially displayed
                // at its native size then resized to 100% of the button's height. This cfreates an unpleasant
                // flicker. On top of that, Chrome's flex implementation fails to prperly re-layout the button
                // after the image has loaded and been gicven its final size. The below trick also fixes that.
                icon_1.style.display = "none";
                icon_1.onload = function () {
                    icon_1.style.removeProperty("display");
                };
                icon_1.onerror = function () {
                    button_1.removeChild(icon_1);
                    button_1.classList.remove("iconOnly");
                    button_1.classList.add("textOnly");
                    if (_this.inlineAction) {
                        button_1.textContent = _this.inlineAction.title ? _this.inlineAction.title : "Title";
                    }
                    else {
                        button_1.textContent = "Title";
                    }
                };
                icon_1.src = this.inlineAction.iconUrl;
                button_1.appendChild(icon_1);
                if (this.inlineAction.title) {
                    button_1.title = this.inlineAction.title;
                }
            }
            else {
                button_1.classList.add("textOnly");
                button_1.textContent = this.inlineAction.title ? this.inlineAction.title : "Title";
            }
            button_1.style.marginLeft = "8px";
            this.inputControlContainerElement.appendChild(button_1);
        }
        return renderedInputControl;
    };
    TextInput.prototype.getJsonTypeName = function () {
        return "Input.Text";
    };
    TextInput.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result && this.inlineAction) {
            result = this.inlineAction.getActionById(id);
        }
        return result;
    };
    TextInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    Object.defineProperty(TextInput.prototype, "value", {
        get: function () {
            if (this.renderedInputControlElement) {
                if (this.isMultiline) {
                    return this.renderedInputControlElement.value;
                }
                else {
                    return this.renderedInputControlElement.value;
                }
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    TextInput.maxLengthProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "maxLength");
    TextInput.isMultilineProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiline", false);
    TextInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    TextInput.styleProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_0, "style", Enums.InputTextStyle, Enums.InputTextStyle.Text);
    TextInput.inlineActionProperty = new ActionProperty(serialization_1.Versions.v1_0, "inlineAction", ["Action.ShowCard"]);
    __decorate([
        serialization_1.property(TextInput.valueProperty)
    ], TextInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(TextInput.maxLengthProperty)
    ], TextInput.prototype, "maxLength", void 0);
    __decorate([
        serialization_1.property(TextInput.isMultilineProperty)
    ], TextInput.prototype, "isMultiline", void 0);
    __decorate([
        serialization_1.property(TextInput.placeholderProperty)
    ], TextInput.prototype, "placeholder", void 0);
    __decorate([
        serialization_1.property(TextInput.styleProperty)
    ], TextInput.prototype, "style", void 0);
    __decorate([
        serialization_1.property(TextInput.inlineActionProperty)
    ], TextInput.prototype, "inlineAction", void 0);
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var ToggleInput = /** @class */ (function (_super) {
    __extends(ToggleInput, _super);
    function ToggleInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueOn = "true";
        _this.valueOff = "false";
        _this.wrap = false;
        return _this;
    }
    ToggleInput.prototype.internalRender = function () {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", "ac-toggleInput");
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        this._checkboxInputElement = document.createElement("input");
        this._checkboxInputElement.id = Utils.generateUniqueId();
        this._checkboxInputElement.type = "checkbox";
        this._checkboxInputElement.style.display = "inline-block";
        this._checkboxInputElement.style.verticalAlign = "middle";
        this._checkboxInputElement.style.margin = "0";
        this._checkboxInputElement.style.flex = "0 0 auto";
        if (this.title) {
            this._checkboxInputElement.setAttribute("aria-label", this.title);
        }
        this._checkboxInputElement.tabIndex = 0;
        if (this.defaultValue == this.valueOn) {
            this._checkboxInputElement.checked = true;
        }
        this._checkboxInputElement.onchange = function () { _this.valueChanged(); };
        Utils.appendChild(element, this._checkboxInputElement);
        if (this.title || this.isDesignMode()) {
            var label = new Label();
            label.setParent(this);
            label.forElementId = this._checkboxInputElement.id;
            label.hostConfig = this.hostConfig;
            label.text = !this.title ? this.getJsonTypeName() : this.title;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            if (labelElement) {
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                Utils.appendChild(element, spacerElement);
                Utils.appendChild(element, labelElement);
            }
        }
        return element;
    };
    Object.defineProperty(ToggleInput.prototype, "isNullable", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ToggleInput.prototype.getJsonTypeName = function () {
        return "Input.Toggle";
    };
    ToggleInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    Object.defineProperty(ToggleInput.prototype, "value", {
        get: function () {
            if (this._checkboxInputElement) {
                return this._checkboxInputElement.checked ? this.valueOn : this.valueOff;
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    ToggleInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    ToggleInput.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    ToggleInput.valueOnProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOn", true, undefined, "true", function (sender) { return "true"; });
    ToggleInput.valueOffProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "valueOff", true, undefined, "false", function (sender) { return "false"; });
    ToggleInput.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
    __decorate([
        serialization_1.property(ToggleInput.valueProperty)
    ], ToggleInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(ToggleInput.titleProperty)
    ], ToggleInput.prototype, "title", void 0);
    __decorate([
        serialization_1.property(ToggleInput.valueOnProperty)
    ], ToggleInput.prototype, "valueOn", void 0);
    __decorate([
        serialization_1.property(ToggleInput.valueOffProperty)
    ], ToggleInput.prototype, "valueOff", void 0);
    __decorate([
        serialization_1.property(ToggleInput.wrapProperty)
    ], ToggleInput.prototype, "wrap", void 0);
    return ToggleInput;
}(Input));
exports.ToggleInput = ToggleInput;
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    function Choice(title, value) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.value = value;
        return _this;
    }
    //#endregion
    Choice.prototype.getSchemaKey = function () {
        return "Choice";
    };
    //#region Schema
    Choice.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Choice.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        serialization_1.property(Choice.titleProperty)
    ], Choice.prototype, "title", void 0);
    __decorate([
        serialization_1.property(Choice.valueProperty)
    ], Choice.prototype, "value", void 0);
    return Choice;
}(serialization_1.SerializableObject));
exports.Choice = Choice;
var ChoiceSetInput = /** @class */ (function (_super) {
    __extends(ChoiceSetInput, _super);
    function ChoiceSetInput() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMultiSelect = false;
        _this.wrap = false;
        _this.choices = [];
        return _this;
    }
    Object.defineProperty(ChoiceSetInput.prototype, "isCompact", {
        get: function () {
            return this.style !== "expanded";
        },
        set: function (value) {
            this.style = value ? undefined : "expanded";
        },
        enumerable: true,
        configurable: true
    });
    ChoiceSetInput.getUniqueCategoryName = function () {
        var uniqueCwtegoryName = "__ac-category" + ChoiceSetInput.uniqueCategoryCounter;
        ChoiceSetInput.uniqueCategoryCounter++;
        return uniqueCwtegoryName;
    };
    ChoiceSetInput.prototype.renderCompundInput = function (cssClassName, type, defaultValues) {
        var _this = this;
        var element = document.createElement("div");
        element.className = this.hostConfig.makeCssClassName("ac-input", cssClassName);
        element.style.width = "100%";
        this._toggleInputs = [];
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            var input = document.createElement("input");
            input.id = Utils.generateUniqueId();
            input.type = type;
            input.style.margin = "0";
            input.style.display = "inline-block";
            input.style.verticalAlign = "middle";
            input.style.flex = "0 0 auto";
            input.name = this.id ? this.id : this._uniqueCategoryName;
            if (choice.value) {
                input.value = choice.value;
            }
            if (choice.title) {
                input.setAttribute("aria-label", choice.title);
            }
            if (defaultValues && choice.value) {
                if (defaultValues.indexOf(choice.value) >= 0) {
                    input.checked = true;
                }
            }
            input.onchange = function () { _this.valueChanged(); };
            this._toggleInputs.push(input);
            var compoundInput = document.createElement("div");
            compoundInput.style.display = "flex";
            compoundInput.style.alignItems = "center";
            Utils.appendChild(compoundInput, input);
            var label = new Label();
            label.setParent(this);
            label.forElementId = input.id;
            label.hostConfig = this.hostConfig;
            label.text = choice.title ? choice.title : "Choice " + this._toggleInputs.length;
            label.useMarkdown = shared_1.GlobalSettings.useMarkdownInRadioButtonAndCheckbox;
            label.wrap = this.wrap;
            var labelElement = label.render();
            if (labelElement) {
                labelElement.style.display = "inline-block";
                labelElement.style.flex = "1 1 auto";
                labelElement.style.marginLeft = "6px";
                labelElement.style.verticalAlign = "middle";
                var spacerElement = document.createElement("div");
                spacerElement.style.width = "6px";
                Utils.appendChild(compoundInput, spacerElement);
                Utils.appendChild(compoundInput, labelElement);
            }
            Utils.appendChild(element, compoundInput);
        }
        return element;
    };
    ChoiceSetInput.prototype.internalRender = function () {
        var _this = this;
        this._uniqueCategoryName = ChoiceSetInput.getUniqueCategoryName();
        if (this.isMultiSelect) {
            // Render as a list of toggle inputs
            return this.renderCompundInput("ac-choiceSetInput-multiSelect", "checkbox", this.defaultValue ? this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator) : undefined);
        }
        else {
            if (this.style === "expanded") {
                // Render as a series of radio buttons
                return this.renderCompundInput("ac-choiceSetInput-expanded", "radio", this.defaultValue ? [this.defaultValue] : undefined);
            }
            else {
                // Render as a combo box
                this._selectElement = document.createElement("select");
                this._selectElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-multichoiceInput", "ac-choiceSetInput-compact");
                this._selectElement.style.width = "100%";
                var option = document.createElement("option");
                option.selected = true;
                option.disabled = true;
                option.hidden = true;
                option.value = "";
                if (this.placeholder) {
                    option.text = this.placeholder;
                }
                Utils.appendChild(this._selectElement, option);
                for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
                    var choice = _a[_i];
                    var option_1 = document.createElement("option");
                    option_1.value = choice.value;
                    option_1.text = choice.title;
                    option_1.setAttribute("aria-label", choice.title);
                    if (choice.value == this.defaultValue) {
                        option_1.selected = true;
                    }
                    Utils.appendChild(this._selectElement, option_1);
                }
                this._selectElement.onchange = function () { _this.valueChanged(); };
                return this._selectElement;
            }
        }
    };
    ChoiceSetInput.prototype.getJsonTypeName = function () {
        return "Input.ChoiceSet";
    };
    ChoiceSetInput.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.choices.length == 0) {
            context.addFailure(this, 2 /* CollectionCantBeEmpty */, "An Input.ChoiceSet must have at least one choice defined.");
        }
        for (var _i = 0, _a = this.choices; _i < _a.length; _i++) {
            var choice = _a[_i];
            if (!choice.title || !choice.value) {
                context.addFailure(this, 8 /* PropertyCantBeNull */, "All choices in an Input.ChoiceSet must have their title and value properties set.");
            }
        }
    };
    ChoiceSetInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    Object.defineProperty(ChoiceSetInput.prototype, "value", {
        get: function () {
            if (!this.isMultiSelect) {
                if (this.isCompact) {
                    if (this._selectElement) {
                        return this._selectElement.selectedIndex > 0 ? this._selectElement.value : undefined;
                    }
                    return undefined;
                }
                else {
                    if (!this._toggleInputs || this._toggleInputs.length == 0) {
                        return undefined;
                    }
                    for (var _i = 0, _a = this._toggleInputs; _i < _a.length; _i++) {
                        var toggleInput = _a[_i];
                        if (toggleInput.checked) {
                            return toggleInput.value;
                        }
                    }
                    return undefined;
                }
            }
            else {
                if (!this._toggleInputs || this._toggleInputs.length == 0) {
                    return undefined;
                }
                var result = "";
                for (var _b = 0, _c = this._toggleInputs; _b < _c.length; _b++) {
                    var toggleInput = _c[_b];
                    if (toggleInput.checked) {
                        if (result != "") {
                            result += this.hostConfig.choiceSetInputValueSeparator;
                        }
                        result += toggleInput.value;
                    }
                }
                return result ? result : undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    ChoiceSetInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    ChoiceSetInput.choicesProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "choices", Choice);
    ChoiceSetInput.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_0, "style", [
        { value: "compact" },
        { value: "expanded" }
    ], "compact");
    ChoiceSetInput.isMultiSelectProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "isMultiSelect", false);
    ChoiceSetInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    ChoiceSetInput.wrapProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "wrap", false);
    //#endregion
    ChoiceSetInput.uniqueCategoryCounter = 0;
    __decorate([
        serialization_1.property(ChoiceSetInput.valueProperty)
    ], ChoiceSetInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(ChoiceSetInput.styleProperty)
    ], ChoiceSetInput.prototype, "style", void 0);
    __decorate([
        serialization_1.property(ChoiceSetInput.isMultiSelectProperty)
    ], ChoiceSetInput.prototype, "isMultiSelect", void 0);
    __decorate([
        serialization_1.property(ChoiceSetInput.placeholderProperty)
    ], ChoiceSetInput.prototype, "placeholder", void 0);
    __decorate([
        serialization_1.property(ChoiceSetInput.wrapProperty)
    ], ChoiceSetInput.prototype, "wrap", void 0);
    __decorate([
        serialization_1.property(ChoiceSetInput.choicesProperty)
    ], ChoiceSetInput.prototype, "choices", void 0);
    return ChoiceSetInput;
}(Input));
exports.ChoiceSetInput = ChoiceSetInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInput.prototype.internalRender = function () {
        var _this = this;
        this._numberInputElement = document.createElement("input");
        this._numberInputElement.setAttribute("type", "number");
        if (this.min) {
            this._numberInputElement.setAttribute("min", this.min.toString());
        }
        if (this.max) {
            this._numberInputElement.setAttribute("max", this.max.toString());
        }
        this._numberInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-numberInput");
        this._numberInputElement.style.width = "100%";
        this._numberInputElement.tabIndex = 0;
        if (this.defaultValue !== undefined) {
            this._numberInputElement.valueAsNumber = this.defaultValue;
        }
        if (this.placeholder) {
            this._numberInputElement.placeholder = this.placeholder;
            this._numberInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._numberInputElement.oninput = function () { _this.valueChanged(); };
        return this._numberInputElement;
    };
    NumberInput.prototype.getJsonTypeName = function () {
        return "Input.Number";
    };
    NumberInput.prototype.isSet = function () {
        return this.value !== undefined && !isNaN(this.value);
    };
    Object.defineProperty(NumberInput.prototype, "value", {
        get: function () {
            return this._numberInputElement ? this._numberInputElement.valueAsNumber : undefined;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    NumberInput.valueProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "value");
    NumberInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    NumberInput.minProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "min");
    NumberInput.maxProperty = new serialization_1.NumProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        serialization_1.property(NumberInput.valueProperty)
    ], NumberInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(NumberInput.minProperty)
    ], NumberInput.prototype, "min", void 0);
    __decorate([
        serialization_1.property(NumberInput.maxProperty)
    ], NumberInput.prototype, "max", void 0);
    __decorate([
        serialization_1.property(NumberInput.placeholderProperty)
    ], NumberInput.prototype, "placeholder", void 0);
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateInput.prototype.internalRender = function () {
        var _this = this;
        this._dateInputElement = document.createElement("input");
        this._dateInputElement.setAttribute("type", "date");
        if (this.min) {
            this._dateInputElement.setAttribute("min", this.min);
        }
        if (this.max) {
            this._dateInputElement.setAttribute("max", this.max);
        }
        if (this.placeholder) {
            this._dateInputElement.placeholder = this.placeholder;
            this._dateInputElement.setAttribute("aria-label", this.placeholder);
        }
        this._dateInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-dateInput");
        this._dateInputElement.style.width = "100%";
        this._dateInputElement.oninput = function () { _this.valueChanged(); };
        if (this.defaultValue) {
            this._dateInputElement.value = this.defaultValue;
        }
        return this._dateInputElement;
    };
    DateInput.prototype.getJsonTypeName = function () {
        return "Input.Date";
    };
    DateInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    Object.defineProperty(DateInput.prototype, "value", {
        get: function () {
            return this._dateInputElement ? this._dateInputElement.value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    DateInput.valueProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "value");
    DateInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    DateInput.minProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "min");
    DateInput.maxProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        serialization_1.property(DateInput.valueProperty)
    ], DateInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(DateInput.minProperty)
    ], DateInput.prototype, "min", void 0);
    __decorate([
        serialization_1.property(DateInput.maxProperty)
    ], DateInput.prototype, "max", void 0);
    __decorate([
        serialization_1.property(DateInput.placeholderProperty)
    ], DateInput.prototype, "placeholder", void 0);
    return DateInput;
}(Input));
exports.DateInput = DateInput;
var TimeProperty = /** @class */ (function (_super) {
    __extends(TimeProperty, _super);
    function TimeProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, function (sender, property, source, context) {
            var value = source[property.name];
            if (typeof value === "string" && value && /^[0-9]{2}:[0-9]{2}$/.test(value)) {
                return value;
            }
            return undefined;
        }, function (sender, property, target, value, context) {
            context.serializeValue(target, property.name, value);
        }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    return TimeProperty;
}(serialization_1.CustomProperty));
exports.TimeProperty = TimeProperty;
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.prototype.internalRender = function () {
        var _this = this;
        this._timeInputElement = document.createElement("input");
        this._timeInputElement.setAttribute("type", "time");
        this._timeInputElement.setAttribute("min", this.min);
        this._timeInputElement.setAttribute("max", this.max);
        this._timeInputElement.className = this.hostConfig.makeCssClassName("ac-input", "ac-timeInput");
        this._timeInputElement.style.width = "100%";
        this._timeInputElement.oninput = function () { _this.valueChanged(); };
        if (this.placeholder) {
            this._timeInputElement.placeholder = this.placeholder;
            this._timeInputElement.setAttribute("aria-label", this.placeholder);
        }
        if (this.defaultValue) {
            this._timeInputElement.value = this.defaultValue;
        }
        return this._timeInputElement;
    };
    TimeInput.prototype.getJsonTypeName = function () {
        return "Input.Time";
    };
    TimeInput.prototype.isSet = function () {
        return this.value ? true : false;
    };
    Object.defineProperty(TimeInput.prototype, "value", {
        get: function () {
            return this._timeInputElement ? this._timeInputElement.value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    TimeInput.valueProperty = new TimeProperty(serialization_1.Versions.v1_0, "value");
    TimeInput.placeholderProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "placeholder");
    TimeInput.minProperty = new TimeProperty(serialization_1.Versions.v1_0, "min");
    TimeInput.maxProperty = new TimeProperty(serialization_1.Versions.v1_0, "max");
    __decorate([
        serialization_1.property(TimeInput.valueProperty)
    ], TimeInput.prototype, "defaultValue", void 0);
    __decorate([
        serialization_1.property(TimeInput.minProperty)
    ], TimeInput.prototype, "min", void 0);
    __decorate([
        serialization_1.property(TimeInput.maxProperty)
    ], TimeInput.prototype, "max", void 0);
    __decorate([
        serialization_1.property(TimeInput.placeholderProperty)
    ], TimeInput.prototype, "placeholder", void 0);
    return TimeInput;
}(Input));
exports.TimeInput = TimeInput;
var ActionButton = /** @class */ (function () {
    function ActionButton(action, parentContainerStyle) {
        this._state = 0 /* Normal */;
        this.action = action;
        this._parentContainerStyle = parentContainerStyle;
    }
    ActionButton.prototype.updateCssStyle = function () {
        var _a, _b;
        if (this.action.parent && this.action.renderedElement) {
            var hostConfig = this.action.parent.hostConfig;
            this.action.renderedElement.className = hostConfig.makeCssClassName("ac-pushButton");
            if (this._parentContainerStyle) {
                this.action.renderedElement.classList.add("style-" + this._parentContainerStyle);
            }
            this.action.updateActionButtonCssStyle(this.action.renderedElement);
            this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("expanded"));
            this.action.renderedElement.classList.remove(hostConfig.makeCssClassName("subdued"));
            switch (this._state) {
                case 1 /* Expanded */:
                    this.action.renderedElement.classList.add(hostConfig.makeCssClassName("expanded"));
                    break;
                case 2 /* Subdued */:
                    this.action.renderedElement.classList.add(hostConfig.makeCssClassName("subdued"));
                    break;
            }
            if (this.action.style) {
                if (this.action.style === Enums.ActionStyle.Positive) {
                    (_a = this.action.renderedElement.classList).add.apply(_a, hostConfig.makeCssClassNames("primary", "style-positive"));
                }
                else {
                    (_b = this.action.renderedElement.classList).add.apply(_b, hostConfig.makeCssClassNames("style-" + this.action.style.toLowerCase()));
                }
            }
        }
    };
    ActionButton.prototype.render = function () {
        var _this = this;
        this.action.render();
        if (this.action.renderedElement) {
            this.action.renderedElement.onclick = function (e) {
                e.preventDefault();
                e.cancelBubble = true;
                _this.click();
            };
            this.updateCssStyle();
        }
    };
    ActionButton.prototype.click = function () {
        if (this.onClick !== undefined) {
            this.onClick(this);
        }
    };
    Object.defineProperty(ActionButton.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.updateCssStyle();
        },
        enumerable: true,
        configurable: true
    });
    return ActionButton;
}());
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = Enums.ActionStyle.Default;
        return _this;
    }
    Action.prototype.addCssClasses = function (element) {
        // Do nothing in base implementation
    };
    Action.prototype.internalGetReferencedInputs = function (allInputs) {
        return {};
    };
    Action.prototype.internalPrepareForExecution = function (inputs) {
        // Do nothing in base implementation
    };
    Action.prototype.internalValidateInputs = function (referencedInputs) {
        var result = [];
        if (shared_1.GlobalSettings.useBuiltInInputValidation && !this.ignoreInputValidation && referencedInputs) {
            for (var _i = 0, _a = Object.keys(referencedInputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = referencedInputs[key];
                if (!input.validateValue()) {
                    result.push(input);
                }
            }
        }
        return result;
    };
    Action.prototype.getHref = function () {
        return "";
    };
    Action.prototype.updateActionButtonCssStyle = function (actionButtonElement) {
        // Do nothing in base implementation
    };
    Action.prototype.parse = function (source, context) {
        return _super.prototype.parse.call(this, source, context ? context : new SerializationContext());
    };
    Action.prototype.toJSON = function (context) {
        return _super.prototype.toJSON.call(this, context ? context : new SerializationContext());
    };
    Action.prototype.render = function (baseCssClass) {
        if (baseCssClass === void 0) { baseCssClass = "ac-pushButton"; }
        // Cache hostConfig for perf
        var hostConfig = this.hostConfig;
        var buttonElement = document.createElement("button");
        this.addCssClasses(buttonElement);
        if (this.title) {
            buttonElement.setAttribute("aria-label", this.title);
        }
        buttonElement.type = "button";
        buttonElement.style.display = "flex";
        buttonElement.style.alignItems = "center";
        buttonElement.style.justifyContent = "center";
        var titleElement = document.createElement("div");
        titleElement.style.overflow = "hidden";
        titleElement.style.textOverflow = "ellipsis";
        if (!(hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle || hostConfig.actions.allowTitleToWrap)) {
            titleElement.style.whiteSpace = "nowrap";
        }
        if (this.title) {
            titleElement.innerText = this.title;
        }
        if (!this.iconUrl) {
            buttonElement.classList.add("noIcon");
            buttonElement.appendChild(titleElement);
        }
        else {
            var iconElement = document.createElement("img");
            iconElement.src = this.iconUrl;
            iconElement.style.width = hostConfig.actions.iconSize + "px";
            iconElement.style.height = hostConfig.actions.iconSize + "px";
            iconElement.style.flex = "0 0 auto";
            if (hostConfig.actions.iconPlacement == Enums.ActionIconPlacement.AboveTitle) {
                buttonElement.classList.add("iconAbove");
                buttonElement.style.flexDirection = "column";
                if (this.title) {
                    iconElement.style.marginBottom = "6px";
                }
            }
            else {
                buttonElement.classList.add("iconLeft");
                iconElement.style.maxHeight = "100%";
                if (this.title) {
                    iconElement.style.marginRight = "6px";
                }
            }
            buttonElement.appendChild(iconElement);
            buttonElement.appendChild(titleElement);
        }
        this._renderedElement = buttonElement;
    };
    Action.prototype.execute = function () {
        if (this.onExecute) {
            this.onExecute(this);
        }
        raiseExecuteActionEvent(this);
    };
    Action.prototype.prepareForExecution = function () {
        var referencedInputs = this.getReferencedInputs();
        if (this.internalValidateInputs(referencedInputs).length > 0) {
            return false;
        }
        this.internalPrepareForExecution(referencedInputs);
        return true;
    };
    ;
    Action.prototype.remove = function () {
        if (this._actionCollection) {
            return this._actionCollection.removeAction(this);
        }
        return false;
    };
    Action.prototype.getAllInputs = function () {
        return [];
    };
    Action.prototype.getResourceInformation = function () {
        return this.iconUrl ? [{ url: this.iconUrl, mimeType: "image" }] : [];
    };
    Action.prototype.getActionById = function (id) {
        return this.id === id ? this : undefined;
    };
    Action.prototype.getReferencedInputs = function () {
        return this.parent ? this.internalGetReferencedInputs(this.parent.getRootElement().getAllInputs()) : undefined;
    };
    Action.prototype.validateInputs = function () {
        return this.internalValidateInputs(this.getReferencedInputs());
    };
    Object.defineProperty(Action.prototype, "isPrimary", {
        get: function () {
            return this.style == Enums.ActionStyle.Positive;
        },
        set: function (value) {
            if (value) {
                this.style = Enums.ActionStyle.Positive;
            }
            else {
                if (this.style == Enums.ActionStyle.Positive) {
                    this.style = Enums.ActionStyle.Default;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "ignoreInputValidation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "hostConfig", {
        get: function () {
            return this.parent ? this.parent.hostConfig : host_config_1.defaultHostConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Action.titleProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "title");
    Action.iconUrlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_1, "iconUrl");
    Action.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_2, "style", [
        { value: Enums.ActionStyle.Default },
        { value: Enums.ActionStyle.Positive },
        { value: Enums.ActionStyle.Destructive }
    ], Enums.ActionStyle.Default);
    // TODO: Revise this when finalizing input validation
    Action.ignoreInputValidationProperty = new serialization_1.BoolProperty(serialization_1.Versions.vNext, "ignoreInputValidation", false);
    __decorate([
        serialization_1.property(Action.titleProperty)
    ], Action.prototype, "title", void 0);
    __decorate([
        serialization_1.property(Action.iconUrlProperty)
    ], Action.prototype, "iconUrl", void 0);
    __decorate([
        serialization_1.property(Action.styleProperty)
    ], Action.prototype, "style", void 0);
    return Action;
}(card_object_1.CardObject));
exports.Action = Action;
var SubmitAction = /** @class */ (function (_super) {
    __extends(SubmitAction, _super);
    function SubmitAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreInputValidation = false;
        _this._isPrepared = false;
        return _this;
    }
    SubmitAction.prototype.internalGetReferencedInputs = function (allInputs) {
        var result = {};
        for (var _i = 0, allInputs_1 = allInputs; _i < allInputs_1.length; _i++) {
            var input = allInputs_1[_i];
            if (input.id) {
                result[input.id] = input;
            }
        }
        return result;
    };
    SubmitAction.prototype.internalPrepareForExecution = function (inputs) {
        if (this._originalData) {
            this._processedData = JSON.parse(JSON.stringify(this._originalData));
        }
        else {
            this._processedData = {};
        }
        if (this._processedData && inputs) {
            for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var input = inputs[key];
                if (input.id) {
                    this._processedData[input.id] = input.value;
                }
            }
        }
        this._isPrepared = true;
    };
    SubmitAction.prototype.getJsonTypeName = function () {
        return SubmitAction.JsonTypeName;
    };
    Object.defineProperty(SubmitAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubmitAction.prototype, "data", {
        get: function () {
            return this._isPrepared ? this._processedData : this._originalData;
        },
        set: function (value) {
            this._originalData = value;
            this._isPrepared = false;
        },
        enumerable: true,
        configurable: true
    });
    SubmitAction.dataProperty = new serialization_1.PropertyDefinition(serialization_1.Versions.v1_0, "data");
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    SubmitAction.JsonTypeName = "Action.Submit";
    __decorate([
        serialization_1.property(SubmitAction.dataProperty)
    ], SubmitAction.prototype, "_originalData", void 0);
    __decorate([
        serialization_1.property(Action.ignoreInputValidationProperty)
    ], SubmitAction.prototype, "_ignoreInputValidation", void 0);
    return SubmitAction;
}(Action));
exports.SubmitAction = SubmitAction;
var OpenUrlAction = /** @class */ (function (_super) {
    __extends(OpenUrlAction, _super);
    function OpenUrlAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenUrlAction.prototype.getJsonTypeName = function () {
        return OpenUrlAction.JsonTypeName;
    };
    OpenUrlAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, 8 /* PropertyCantBeNull */, "An Action.OpenUrl must have its url property set.");
        }
    };
    OpenUrlAction.prototype.getHref = function () {
        return this.url;
    };
    //#region Schema
    OpenUrlAction.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    OpenUrlAction.JsonTypeName = "Action.OpenUrl";
    __decorate([
        serialization_1.property(OpenUrlAction.urlProperty)
    ], OpenUrlAction.prototype, "url", void 0);
    return OpenUrlAction;
}(Action));
exports.OpenUrlAction = OpenUrlAction;
var ToggleVisibilityAction = /** @class */ (function (_super) {
    __extends(ToggleVisibilityAction, _super);
    function ToggleVisibilityAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetElements = {};
        return _this;
    }
    ToggleVisibilityAction.prototype.getJsonTypeName = function () {
        return ToggleVisibilityAction.JsonTypeName;
    };
    ToggleVisibilityAction.prototype.execute = function () {
        if (this.parent) {
            for (var _i = 0, _a = Object.keys(this.targetElements); _i < _a.length; _i++) {
                var elementId = _a[_i];
                var targetElement = this.parent.getRootElement().getElementById(elementId);
                if (targetElement) {
                    if (typeof this.targetElements[elementId] === "boolean") {
                        targetElement.isVisible = this.targetElements[elementId];
                    }
                    else {
                        targetElement.isVisible = !targetElement.isVisible;
                    }
                }
            }
        }
    };
    ToggleVisibilityAction.prototype.addTargetElement = function (elementId, isVisible) {
        if (isVisible === void 0) { isVisible = undefined; }
        this.targetElements[elementId] = isVisible;
    };
    ToggleVisibilityAction.prototype.removeTargetElement = function (elementId) {
        delete this.targetElements[elementId];
    };
    ToggleVisibilityAction.targetElementsProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_2, "targetElements", function (sender, property, source, context) {
        var result = {};
        if (Array.isArray(source[property.name])) {
            for (var _i = 0, _a = source[property.name]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (typeof item === "string") {
                    result[item] = undefined;
                }
                else if (typeof item === "object") {
                    var elementId = item["elementId"];
                    if (typeof elementId === "string") {
                        result[elementId] = Utils.parseBool(item["isVisible"]);
                    }
                }
            }
        }
        return result;
    }, function (sender, property, target, value, context) {
        var targetElements = [];
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var id = _a[_i];
            if (typeof value[id] === "boolean") {
                targetElements.push({
                    elementId: id,
                    isVisible: value[id]
                });
            }
            else {
                targetElements.push(id);
            }
        }
        context.serializeArray(target, property.name, targetElements);
    }, {}, function (sender) { return {}; });
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ToggleVisibilityAction.JsonTypeName = "Action.ToggleVisibility";
    __decorate([
        serialization_1.property(ToggleVisibilityAction.targetElementsProperty)
    ], ToggleVisibilityAction.prototype, "targetElements", void 0);
    return ToggleVisibilityAction;
}(Action));
exports.ToggleVisibilityAction = ToggleVisibilityAction;
var StringWithSubstitutionProperty = /** @class */ (function (_super) {
    __extends(StringWithSubstitutionProperty, _super);
    function StringWithSubstitutionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined, function () { return new shared_1.StringWithSubstitutions(); }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    StringWithSubstitutionProperty.prototype.parse = function (sender, source, context) {
        var result = new shared_1.StringWithSubstitutions();
        result.set(Utils.parseString(source[this.name]));
        return result;
    };
    StringWithSubstitutionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value.getOriginal());
    };
    return StringWithSubstitutionProperty;
}(serialization_1.PropertyDefinition));
var HttpHeader = /** @class */ (function (_super) {
    __extends(HttpHeader, _super);
    //#endregion
    function HttpHeader(name, value) {
        if (name === void 0) { name = ""; }
        if (value === void 0) { value = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    HttpHeader.prototype.getSchemaKey = function () {
        return "HttpHeader";
    };
    HttpHeader.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        this._value.getReferencedInputs(inputs, referencedInputs);
    };
    HttpHeader.prototype.prepareForExecution = function (inputs) {
        this._value.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
    };
    Object.defineProperty(HttpHeader.prototype, "value", {
        get: function () {
            return this._value.get();
        },
        set: function (newValue) {
            this._value.set(newValue);
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    HttpHeader.nameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "name");
    HttpHeader.valueProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "value");
    __decorate([
        serialization_1.property(HttpHeader.nameProperty)
    ], HttpHeader.prototype, "name", void 0);
    __decorate([
        serialization_1.property(HttpHeader.valueProperty)
    ], HttpHeader.prototype, "_value", void 0);
    return HttpHeader;
}(serialization_1.SerializableObject));
exports.HttpHeader = HttpHeader;
var HttpAction = /** @class */ (function (_super) {
    __extends(HttpAction, _super);
    function HttpAction() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreInputValidation = false;
        return _this;
    }
    HttpAction.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.add(Action.ignoreInputValidationProperty);
    };
    HttpAction.prototype.internalGetReferencedInputs = function (allInputs) {
        var result = {};
        this._url.getReferencedInputs(allInputs, result);
        for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            header.getReferencedInputs(allInputs, result);
        }
        this._body.getReferencedInputs(allInputs, result);
        return result;
    };
    HttpAction.prototype.internalPrepareForExecution = function (inputs) {
        if (inputs) {
            this._url.substituteInputValues(inputs, shared_1.ContentTypes.applicationXWwwFormUrlencoded);
            var contentType = shared_1.ContentTypes.applicationJson;
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                header.prepareForExecution(inputs);
                if (header.name && header.name.toLowerCase() == "content-type") {
                    contentType = header.value;
                }
            }
            this._body.substituteInputValues(inputs, contentType);
        }
    };
    ;
    HttpAction.prototype.getJsonTypeName = function () {
        return HttpAction.JsonTypeName;
    };
    HttpAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (!this.url) {
            context.addFailure(this, 8 /* PropertyCantBeNull */, "An Action.Http must have its url property set.");
        }
        if (this.headers.length > 0) {
            for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                if (!header.name) {
                    context.addFailure(this, 8 /* PropertyCantBeNull */, "All headers of an Action.Http must have their name and value properties set.");
                }
            }
        }
    };
    Object.defineProperty(HttpAction.prototype, "ignoreInputValidation", {
        get: function () {
            return this._ignoreInputValidation;
        },
        set: function (value) {
            this._ignoreInputValidation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "url", {
        get: function () {
            return this._url.get();
        },
        set: function (value) {
            this._url.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpAction.prototype, "body", {
        get: function () {
            return this._body.get();
        },
        set: function (value) {
            this._body.set(value);
        },
        enumerable: true,
        configurable: true
    });
    HttpAction.urlProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "url");
    HttpAction.bodyProperty = new StringWithSubstitutionProperty(serialization_1.Versions.v1_0, "body");
    HttpAction.methodProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "method");
    HttpAction.headersProperty = new serialization_1.SerializableObjectCollectionProperty(serialization_1.Versions.v1_0, "headers", HttpHeader);
    //#endregion
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    HttpAction.JsonTypeName = "Action.Http";
    __decorate([
        serialization_1.property(HttpAction.urlProperty)
    ], HttpAction.prototype, "_url", void 0);
    __decorate([
        serialization_1.property(HttpAction.bodyProperty)
    ], HttpAction.prototype, "_body", void 0);
    __decorate([
        serialization_1.property(HttpAction.bodyProperty)
    ], HttpAction.prototype, "method", void 0);
    __decorate([
        serialization_1.property(HttpAction.headersProperty)
    ], HttpAction.prototype, "headers", void 0);
    __decorate([
        serialization_1.property(Action.ignoreInputValidationProperty)
    ], HttpAction.prototype, "_ignoreInputValidation", void 0);
    return HttpAction;
}(Action));
exports.HttpAction = HttpAction;
var ShowCardAction = /** @class */ (function (_super) {
    __extends(ShowCardAction, _super);
    function ShowCardAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = new InlineAdaptiveCard();
        return _this;
    }
    ShowCardAction.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        var jsonCard = source["card"];
        if (jsonCard) {
            this.card.parse(jsonCard, context);
        }
        else {
            context.logParseEvent(8 /* PropertyCantBeNull */, "An Action.ShowCard must have its \"card\" property set to a valid AdaptiveCard object.", this);
        }
    };
    ShowCardAction.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        if (this.card) {
            context.serializeValue(target, "card", this.card.toJSON(context));
        }
    };
    ShowCardAction.prototype.addCssClasses = function (element) {
        _super.prototype.addCssClasses.call(this, element);
        if (this.parent) {
            element.classList.add(this.parent.hostConfig.makeCssClassName("expandable"));
        }
    };
    ShowCardAction.prototype.getJsonTypeName = function () {
        return ShowCardAction.JsonTypeName;
    };
    ShowCardAction.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this.card.internalValidateProperties(context);
    };
    ShowCardAction.prototype.updateActionButtonCssStyle = function (actionButtonElement) {
        _super.prototype.updateActionButtonCssStyle.call(this, actionButtonElement);
        if (this.parent) {
            actionButtonElement.classList.add(this.parent.hostConfig.makeCssClassName("expandable"));
        }
    };
    ShowCardAction.prototype.setParent = function (value) {
        _super.prototype.setParent.call(this, value);
        this.card.setParent(value);
    };
    ShowCardAction.prototype.getAllInputs = function () {
        return this.card.getAllInputs();
    };
    ShowCardAction.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this.card.getResourceInformation());
    };
    ShowCardAction.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            result = this.card.getActionById(id);
        }
        return result;
    };
    // Note the "weird" way this field is declared is to work around a breaking
    // change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    ShowCardAction.JsonTypeName = "Action.ShowCard";
    return ShowCardAction;
}(Action));
exports.ShowCardAction = ShowCardAction;
var ActionCollection = /** @class */ (function () {
    function ActionCollection(owner) {
        this._renderedActionCount = 0;
        this.items = [];
        this.buttons = [];
        this._owner = owner;
    }
    ActionCollection.prototype.isActionAllowed = function (action) {
        var forbiddenTypes = this._owner.getForbiddenActionTypes();
        if (forbiddenTypes) {
            for (var _i = 0, forbiddenTypes_1 = forbiddenTypes; _i < forbiddenTypes_1.length; _i++) {
                var forbiddenType = forbiddenTypes_1[_i];
                if (action.constructor === forbiddenType) {
                    return false;
                }
            }
        }
        return true;
    };
    ActionCollection.prototype.refreshContainer = function () {
        this._actionCardContainer.innerHTML = "";
        if (!this._actionCard) {
            this._actionCardContainer.style.marginTop = "0px";
            return;
        }
        this._actionCardContainer.style.marginTop = this._renderedActionCount > 0 ? this._owner.hostConfig.actions.showCard.inlineTopMargin + "px" : "0px";
        var padding = this._owner.getEffectivePadding();
        this._owner.getImmediateSurroundingPadding(padding);
        var physicalPadding = this._owner.hostConfig.paddingDefinitionToSpacingDefinition(padding);
        if (this._actionCard) {
            this._actionCard.style.paddingLeft = physicalPadding.left + "px";
            this._actionCard.style.paddingRight = physicalPadding.right + "px";
            this._actionCard.style.marginLeft = "-" + physicalPadding.left + "px";
            this._actionCard.style.marginRight = "-" + physicalPadding.right + "px";
            if (physicalPadding.bottom != 0 && !this._owner.isDesignMode()) {
                this._actionCard.style.paddingBottom = physicalPadding.bottom + "px";
                this._actionCard.style.marginBottom = "-" + physicalPadding.bottom + "px";
            }
            Utils.appendChild(this._actionCardContainer, this._actionCard);
        }
    };
    ActionCollection.prototype.layoutChanged = function () {
        this._owner.getRootElement().updateLayout();
    };
    ActionCollection.prototype.hideActionCard = function () {
        var previouslyExpandedAction = this._expandedAction;
        this._expandedAction = undefined;
        this._actionCard = undefined;
        this.refreshContainer();
        if (previouslyExpandedAction) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(previouslyExpandedAction, false);
        }
    };
    ActionCollection.prototype.showActionCard = function (action, suppressStyle, raiseEvent) {
        if (suppressStyle === void 0) { suppressStyle = false; }
        if (raiseEvent === void 0) { raiseEvent = true; }
        action.card.suppressStyle = suppressStyle;
        // Always re-render a ShowCard action in design mode; reuse already rendered ShowCard (if available) otherwise
        var renderedCard = action.card.renderedElement && !this._owner.isDesignMode() ? action.card.renderedElement : action.card.render();
        this._actionCard = renderedCard;
        this._expandedAction = action;
        this.refreshContainer();
        if (raiseEvent) {
            this.layoutChanged();
            raiseInlineCardExpandedEvent(action, true);
        }
    };
    ActionCollection.prototype.collapseExpandedAction = function () {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            button.state = 0 /* Normal */;
        }
        this.hideActionCard();
    };
    ActionCollection.prototype.expandShowCardAction = function (action, raiseEvent) {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.action !== action) {
                button.state = 2 /* Subdued */;
            }
            else {
                button.state = 1 /* Expanded */;
            }
        }
        this.showActionCard(action, !(this._owner.isAtTheVeryLeft() && this._owner.isAtTheVeryRight()), raiseEvent);
    };
    ActionCollection.prototype.actionClicked = function (actionButton) {
        if (!(actionButton.action instanceof ShowCardAction)) {
            for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                button.state = 0 /* Normal */;
            }
            this.hideActionCard();
            actionButton.action.execute();
        }
        else {
            if (this._owner.hostConfig.actions.showCard.actionMode === Enums.ShowCardActionMode.Popup) {
                actionButton.action.execute();
            }
            else if (actionButton.action === this._expandedAction) {
                this.collapseExpandedAction();
            }
            else {
                this.expandShowCardAction(actionButton.action, true);
            }
        }
    };
    ActionCollection.prototype.getParentContainer = function () {
        if (this._owner instanceof Container) {
            return this._owner;
        }
        else {
            return this._owner.getParentContainer();
        }
    };
    ActionCollection.prototype.findActionButton = function (action) {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var actionButton = _a[_i];
            if (actionButton.action == action) {
                return actionButton;
            }
        }
        return undefined;
    };
    ActionCollection.prototype.parse = function (source, context) {
        this.clear();
        if (Array.isArray(source)) {
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var jsonAction = source_1[_i];
                var action = context.parseAction(this._owner, jsonAction, [], !this._owner.isDesignMode());
                if (action) {
                    this.addAction(action);
                }
            }
        }
    };
    ActionCollection.prototype.toJSON = function (target, propertyName, context) {
        context.serializeArray(target, propertyName, this.items);
    };
    ActionCollection.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            result = item.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    ActionCollection.prototype.validateProperties = function (context) {
        if (this._owner.hostConfig.actions.maxActions && this.items.length > this._owner.hostConfig.actions.maxActions) {
            context.addFailure(this._owner, 9 /* TooManyActions */, "A maximum of " + this._owner.hostConfig.actions.maxActions + " actions are allowed.");
        }
        if (this.items.length > 0 && !this._owner.hostConfig.supportsInteractivity) {
            context.addFailure(this._owner, 5 /* InteractivityNotAllowed */, "Interactivity is not allowed.");
        }
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!this.isActionAllowed(item)) {
                context.addFailure(this._owner, 1 /* ActionTypeNotAllowed */, "Actions of type " + item.getJsonTypeName() + " are not allowed in this context.");
            }
            item.internalValidateProperties(context);
        }
    };
    ActionCollection.prototype.render = function (orientation, isDesignMode) {
        var _this = this;
        // Cache hostConfig for better perf
        var hostConfig = this._owner.hostConfig;
        if (!hostConfig.supportsInteractivity) {
            return undefined;
        }
        var element = document.createElement("div");
        var maxActions = hostConfig.actions.maxActions ? Math.min(hostConfig.actions.maxActions, this.items.length) : this.items.length;
        this._actionCardContainer = document.createElement("div");
        this._renderedActionCount = 0;
        if (hostConfig.actions.preExpandSingleShowCardAction && maxActions == 1 && this.items[0] instanceof ShowCardAction && this.isActionAllowed(this.items[0])) {
            this.showActionCard(this.items[0], true);
            this._renderedActionCount = 1;
        }
        else {
            var buttonStrip = document.createElement("div");
            buttonStrip.className = hostConfig.makeCssClassName("ac-actionSet");
            buttonStrip.style.display = "flex";
            if (orientation == Enums.Orientation.Horizontal) {
                buttonStrip.style.flexDirection = "row";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.justifyContent = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.justifyContent = "flex-end";
                            break;
                        default:
                            buttonStrip.style.justifyContent = "flex-start";
                            break;
                    }
                }
            }
            else {
                buttonStrip.style.flexDirection = "column";
                if (this._owner.horizontalAlignment && hostConfig.actions.actionAlignment != Enums.ActionAlignment.Stretch) {
                    switch (this._owner.horizontalAlignment) {
                        case Enums.HorizontalAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.HorizontalAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
                else {
                    switch (hostConfig.actions.actionAlignment) {
                        case Enums.ActionAlignment.Center:
                            buttonStrip.style.alignItems = "center";
                            break;
                        case Enums.ActionAlignment.Right:
                            buttonStrip.style.alignItems = "flex-end";
                            break;
                        case Enums.ActionAlignment.Stretch:
                            buttonStrip.style.alignItems = "stretch";
                            break;
                        default:
                            buttonStrip.style.alignItems = "flex-start";
                            break;
                    }
                }
            }
            var parentContainer = this.getParentContainer();
            if (parentContainer) {
                var parentContainerStyle = parentContainer.getEffectiveStyle();
                for (var i = 0; i < this.items.length; i++) {
                    if (this.isActionAllowed(this.items[i])) {
                        var actionButton = this.findActionButton(this.items[i]);
                        if (!actionButton) {
                            actionButton = new ActionButton(this.items[i], parentContainerStyle);
                            actionButton.onClick = function (ab) { _this.actionClicked(ab); };
                            this.buttons.push(actionButton);
                        }
                        actionButton.render();
                        if (actionButton.action.renderedElement) {
                            if (hostConfig.actions.actionsOrientation == Enums.Orientation.Horizontal && hostConfig.actions.actionAlignment == Enums.ActionAlignment.Stretch) {
                                actionButton.action.renderedElement.style.flex = "0 1 100%";
                            }
                            else {
                                actionButton.action.renderedElement.style.flex = "0 1 auto";
                            }
                            buttonStrip.appendChild(actionButton.action.renderedElement);
                            this._renderedActionCount++;
                            if (this._renderedActionCount >= hostConfig.actions.maxActions || i == this.items.length - 1) {
                                break;
                            }
                            else if (hostConfig.actions.buttonSpacing > 0) {
                                var spacer = document.createElement("div");
                                if (orientation === Enums.Orientation.Horizontal) {
                                    spacer.style.flex = "0 0 auto";
                                    spacer.style.width = hostConfig.actions.buttonSpacing + "px";
                                }
                                else {
                                    spacer.style.height = hostConfig.actions.buttonSpacing + "px";
                                }
                                Utils.appendChild(buttonStrip, spacer);
                            }
                        }
                    }
                }
            }
            var buttonStripContainer = document.createElement("div");
            buttonStripContainer.style.overflow = "hidden";
            buttonStripContainer.appendChild(buttonStrip);
            Utils.appendChild(element, buttonStripContainer);
        }
        Utils.appendChild(element, this._actionCardContainer);
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            if (button.state == 1 /* Expanded */) {
                this.expandShowCardAction(button.action, false);
                break;
            }
        }
        return this._renderedActionCount > 0 ? element : undefined;
    };
    ActionCollection.prototype.addAction = function (action) {
        if (!action) {
            throw new Error("The action parameter cannot be null.");
        }
        if ((!action.parent || action.parent === this._owner) && this.items.indexOf(action) < 0) {
            this.items.push(action);
            if (!action.parent) {
                action.setParent(this._owner);
            }
            action["_actionCollection"] = this;
        }
        else {
            throw new Error("The action already belongs to another element.");
        }
    };
    ActionCollection.prototype.removeAction = function (action) {
        if (this.expandedAction && this._expandedAction == action) {
            this.collapseExpandedAction();
        }
        var actionIndex = this.items.indexOf(action);
        if (actionIndex >= 0) {
            this.items.splice(actionIndex, 1);
            action.setParent(undefined);
            action["_actionCollection"] = undefined;
            for (var i = 0; i < this.buttons.length; i++) {
                if (this.buttons[i].action == action) {
                    this.buttons.splice(i, 1);
                    break;
                }
            }
            return true;
        }
        return false;
    };
    ActionCollection.prototype.clear = function () {
        this.items = [];
        this.buttons = [];
        this._expandedAction = undefined;
        this._renderedActionCount = 0;
    };
    ActionCollection.prototype.getAllInputs = function () {
        var result = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var action = _a[_i];
            result = result.concat(action.getAllInputs());
        }
        return result;
    };
    ActionCollection.prototype.getResourceInformation = function () {
        var result = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var action = _a[_i];
            result = result.concat(action.getResourceInformation());
        }
        return result;
    };
    Object.defineProperty(ActionCollection.prototype, "renderedActionCount", {
        get: function () {
            return this._renderedActionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionCollection.prototype, "expandedAction", {
        get: function () {
            return this._expandedAction;
        },
        enumerable: true,
        configurable: true
    });
    return ActionCollection;
}());
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ActionSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._actionCollection.parse(source["actions"], context);
    };
    ActionSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ActionSet.prototype.internalRender = function () {
        return this._actionCollection.render(this.orientation !== undefined ? this.orientation : this.hostConfig.actions.actionsOrientation, this.isDesignMode());
    };
    ActionSet.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.items.length == 1) {
                return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    ActionSet.prototype.getJsonTypeName = function () {
        return "ActionSet";
    };
    ActionSet.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ActionSet.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ActionSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        this._actionCollection.validateProperties(context);
    };
    ActionSet.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ActionSet.prototype.getAllInputs = function () {
        return this._actionCollection.getAllInputs();
    };
    ActionSet.prototype.getResourceInformation = function () {
        return this._actionCollection.getResourceInformation();
    };
    Object.defineProperty(ActionSet.prototype, "isInteractive", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    ActionSet.orientationProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "orientation", Enums.Orientation);
    __decorate([
        serialization_1.property(ActionSet.orientationProperty)
    ], ActionSet.prototype, "orientation", void 0);
    return ActionSet;
}(CardElement));
exports.ActionSet = ActionSet;
var StylableCardElementContainer = /** @class */ (function (_super) {
    __extends(StylableCardElementContainer, _super);
    function StylableCardElementContainer() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bleed = false;
        return _this;
    }
    Object.defineProperty(StylableCardElementContainer.prototype, "style", {
        get: function () {
            if (this.allowCustomStyle) {
                var style = this.getValue(StylableCardElementContainer.styleProperty);
                if (style && this.hostConfig.containerStyles.getStyleByName(style)) {
                    return style;
                }
            }
            return undefined;
        },
        set: function (value) {
            this.setValue(StylableCardElementContainer.styleProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    StylableCardElementContainer.prototype.adjustRenderedElementSize = function (renderedElement) {
        _super.prototype.adjustRenderedElementSize.call(this, renderedElement);
        if (this.minPixelHeight) {
            renderedElement.style.minHeight = this.minPixelHeight + "px";
        }
    };
    StylableCardElementContainer.prototype.applyBackground = function () {
        if (this.renderedElement) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(this.style, this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));
            if (styleDefinition.backgroundColor) {
                this.renderedElement.style.backgroundColor = Utils.stringToCssColor(styleDefinition.backgroundColor);
            }
        }
    };
    StylableCardElementContainer.prototype.applyPadding = function () {
        _super.prototype.applyPadding.call(this);
        if (!this.renderedElement) {
            return;
        }
        var physicalPadding = new shared_1.SpacingDefinition();
        if (this.getEffectivePadding()) {
            physicalPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding());
        }
        this.renderedElement.style.paddingTop = physicalPadding.top + "px";
        this.renderedElement.style.paddingRight = physicalPadding.right + "px";
        this.renderedElement.style.paddingBottom = physicalPadding.bottom + "px";
        this.renderedElement.style.paddingLeft = physicalPadding.left + "px";
        if (this.isBleeding()) {
            // Bleed into the first parent that does have padding
            var padding = new shared_1.PaddingDefinition();
            this.getImmediateSurroundingPadding(padding);
            var surroundingPadding = this.hostConfig.paddingDefinitionToSpacingDefinition(padding);
            this.renderedElement.style.marginRight = "-" + surroundingPadding.right + "px";
            this.renderedElement.style.marginLeft = "-" + surroundingPadding.left + "px";
            if (!this.isDesignMode()) {
                this.renderedElement.style.marginTop = "-" + surroundingPadding.top + "px";
                this.renderedElement.style.marginBottom = "-" + surroundingPadding.bottom + "px";
            }
            if (this.separatorElement && this.separatorOrientation == Enums.Orientation.Horizontal) {
                this.separatorElement.style.marginLeft = "-" + surroundingPadding.left + "px";
                this.separatorElement.style.marginRight = "-" + surroundingPadding.right + "px";
            }
        }
        else {
            this.renderedElement.style.marginRight = "0";
            this.renderedElement.style.marginLeft = "0";
            this.renderedElement.style.marginTop = "0";
            this.renderedElement.style.marginBottom = "0";
            if (this.separatorElement) {
                this.separatorElement.style.marginRight = "0";
                this.separatorElement.style.marginLeft = "0";
            }
        }
    };
    StylableCardElementContainer.prototype.getHasBackground = function () {
        var currentElement = this.parent;
        while (currentElement) {
            var currentElementHasBackgroundImage = currentElement instanceof Container ? currentElement.backgroundImage.isValid() : false;
            if (currentElement instanceof StylableCardElementContainer) {
                if (this.hasExplicitStyle && (currentElement.getEffectiveStyle() != this.getEffectiveStyle() || currentElementHasBackgroundImage)) {
                    return true;
                }
            }
            currentElement = currentElement.parent;
        }
        return false;
    };
    StylableCardElementContainer.prototype.getDefaultPadding = function () {
        return this.getHasBackground() ?
            new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding) : _super.prototype.getDefaultPadding.call(this);
    };
    StylableCardElementContainer.prototype.getHasExpandedAction = function () {
        return false;
    };
    StylableCardElementContainer.prototype.getBleed = function () {
        return this._bleed;
    };
    StylableCardElementContainer.prototype.setBleed = function (value) {
        this._bleed = value;
    };
    Object.defineProperty(StylableCardElementContainer.prototype, "renderedActionCount", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "hasExplicitStyle", {
        get: function () {
            return this.getValue(StylableCardElementContainer.styleProperty) !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylableCardElementContainer.prototype, "allowCustomStyle", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    StylableCardElementContainer.prototype.isBleeding = function () {
        return (this.getHasBackground() || this.hostConfig.alwaysAllowBleed) && this.getBleed();
    };
    StylableCardElementContainer.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var explicitStyle = this.getValue(StylableCardElementContainer.styleProperty);
        if (explicitStyle !== undefined) {
            var styleDefinition = this.hostConfig.containerStyles.getStyleByName(explicitStyle);
            if (!styleDefinition) {
                context.addFailure(this, 6 /* InvalidPropertyValue */, "Unknown container style: " + explicitStyle);
            }
        }
    };
    StylableCardElementContainer.prototype.render = function () {
        var renderedElement = _super.prototype.render.call(this);
        if (renderedElement && this.getHasBackground()) {
            this.applyBackground();
        }
        return renderedElement;
    };
    StylableCardElementContainer.prototype.getEffectiveStyle = function () {
        var effectiveStyle = this.style;
        return effectiveStyle ? effectiveStyle : _super.prototype.getEffectiveStyle.call(this);
    };
    StylableCardElementContainer.styleProperty = new serialization_1.ValueSetProperty(serialization_1.Versions.v1_0, "style", [
        { value: Enums.ContainerStyle.Default },
        { value: Enums.ContainerStyle.Emphasis },
        { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Accent },
        { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Good },
        { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Attention },
        { targetVersion: serialization_1.Versions.v1_2, value: Enums.ContainerStyle.Warning }
    ]);
    StylableCardElementContainer.bleedProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_2, "bleed", false);
    StylableCardElementContainer.minHeightProperty = new serialization_1.PixelSizeProperty(serialization_1.Versions.v1_2, "minHeight");
    __decorate([
        serialization_1.property(StylableCardElementContainer.styleProperty)
    ], StylableCardElementContainer.prototype, "style", null);
    __decorate([
        serialization_1.property(StylableCardElementContainer.bleedProperty)
    ], StylableCardElementContainer.prototype, "_bleed", void 0);
    __decorate([
        serialization_1.property(StylableCardElementContainer.minHeightProperty)
    ], StylableCardElementContainer.prototype, "minPixelHeight", void 0);
    return StylableCardElementContainer;
}(CardElementContainer));
exports.StylableCardElementContainer = StylableCardElementContainer;
var BackgroundImage = /** @class */ (function (_super) {
    __extends(BackgroundImage, _super);
    function BackgroundImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    BackgroundImage.prototype.getSchemaKey = function () {
        return "BackgroundImage";
    };
    BackgroundImage.prototype.internalParse = function (source, context) {
        if (typeof source === "string") {
            this.resetDefaultValues();
            this.url = source;
        }
        else {
            return _super.prototype.internalParse.call(this, source, context);
        }
    };
    BackgroundImage.prototype.apply = function (element) {
        if (this.url && element.renderedElement) {
            element.renderedElement.style.backgroundImage = "url('" + element.preProcessPropertyValue(BackgroundImage.urlProperty, this.url) + "')";
            switch (this.fillMode) {
                case Enums.FillMode.Repeat:
                    element.renderedElement.style.backgroundRepeat = "repeat";
                    break;
                case Enums.FillMode.RepeatHorizontally:
                    element.renderedElement.style.backgroundRepeat = "repeat-x";
                    break;
                case Enums.FillMode.RepeatVertically:
                    element.renderedElement.style.backgroundRepeat = "repeat-y";
                    break;
                case Enums.FillMode.Cover:
                default:
                    element.renderedElement.style.backgroundRepeat = "no-repeat";
                    element.renderedElement.style.backgroundSize = "cover";
                    break;
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.renderedElement.style.backgroundPositionX = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.renderedElement.style.backgroundPositionX = "right";
                    break;
            }
            switch (this.verticalAlignment) {
                case Enums.VerticalAlignment.Center:
                    element.renderedElement.style.backgroundPositionY = "center";
                    break;
                case Enums.VerticalAlignment.Bottom:
                    element.renderedElement.style.backgroundPositionY = "bottom";
                    break;
            }
        }
    };
    BackgroundImage.prototype.isValid = function () {
        return this.url ? true : false;
    };
    //#region Schema
    BackgroundImage.urlProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "url");
    BackgroundImage.fillModeProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "fillMode", Enums.FillMode, Enums.FillMode.Cover);
    BackgroundImage.horizontalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "horizontalAlignment", Enums.HorizontalAlignment, Enums.HorizontalAlignment.Left);
    BackgroundImage.verticalAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_2, "verticalAlignment", Enums.VerticalAlignment, Enums.VerticalAlignment.Top);
    __decorate([
        serialization_1.property(BackgroundImage.urlProperty)
    ], BackgroundImage.prototype, "url", void 0);
    __decorate([
        serialization_1.property(BackgroundImage.fillModeProperty)
    ], BackgroundImage.prototype, "fillMode", void 0);
    __decorate([
        serialization_1.property(BackgroundImage.horizontalAlignmentProperty)
    ], BackgroundImage.prototype, "horizontalAlignment", void 0);
    __decorate([
        serialization_1.property(BackgroundImage.verticalAlignmentProperty)
    ], BackgroundImage.prototype, "verticalAlignment", void 0);
    return BackgroundImage;
}(serialization_1.SerializableObject));
exports.BackgroundImage = BackgroundImage;
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verticalContentAlignment = Enums.VerticalAlignment.Top;
        //#endregion
        _this._items = [];
        _this._renderedItems = [];
        return _this;
    }
    Object.defineProperty(Container.prototype, "backgroundImage", {
        get: function () {
            return this.getValue(Container.backgroundImageProperty);
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.insertItemAt = function (item, index, forceInsert) {
        if (!item.parent || forceInsert) {
            if (item.isStandalone) {
                if (index < 0 || index >= this._items.length) {
                    this._items.push(item);
                }
                else {
                    this._items.splice(index, 0, item);
                }
                item.setParent(this);
            }
            else {
                throw new Error("Elements of type " + item.getJsonTypeName() + " cannot be used as standalone elements.");
            }
        }
        else {
            throw new Error("The element already belongs to another container.");
        }
    };
    Container.prototype.supportsExcplitiHeight = function () {
        return true;
    };
    Container.prototype.getItemsCollectionPropertyName = function () {
        return "items";
    };
    Container.prototype.applyBackground = function () {
        if (this.backgroundImage.isValid() && this.renderedElement) {
            this.backgroundImage.apply(this);
        }
        _super.prototype.applyBackground.call(this);
    };
    Container.prototype.internalRender = function () {
        this._renderedItems = [];
        // Cache hostConfig to avoid walking the parent hierarchy several times
        var hostConfig = this.hostConfig;
        var element = document.createElement("div");
        if (this.rtl !== undefined && this.rtl) {
            element.dir = "rtl";
        }
        element.classList.add(hostConfig.makeCssClassName("ac-container"));
        element.style.display = "flex";
        element.style.flexDirection = "column";
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
            // Forces the container to be at least as tall as its content.
            //
            // Fixes a quirk in Chrome where, for nested flex elements, the
            // inner element's height would never exceed the outer element's
            // height. This caused overflow truncation to break -- containers
            // would always be measured as not overflowing, since their heights
            // were constrained by their parents as opposed to truly reflecting
            // the height of their content.
            //
            // See the "Browser Rendering Notes" section of this answer:
            // https://stackoverflow.com/questions/36247140/why-doesnt-flex-item-shrink-past-content-size
            element.style.minHeight = '-webkit-min-content';
        }
        switch (this.verticalContentAlignment) {
            case Enums.VerticalAlignment.Center:
                element.style.justifyContent = "center";
                break;
            case Enums.VerticalAlignment.Bottom:
                element.style.justifyContent = "flex-end";
                break;
            default:
                element.style.justifyContent = "flex-start";
                break;
        }
        if (this._items.length > 0) {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                var renderedItem = this.isElementAllowed(item) ? item.render() : undefined;
                if (renderedItem) {
                    if (this._renderedItems.length > 0 && item.separatorElement) {
                        item.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, item.separatorElement);
                    }
                    Utils.appendChild(element, renderedItem);
                    this._renderedItems.push(item);
                }
            }
        }
        else {
            if (this.isDesignMode()) {
                var placeholderElement = this.createPlaceholderElement();
                placeholderElement.style.width = "100%";
                placeholderElement.style.height = "100%";
                element.appendChild(placeholderElement);
            }
        }
        return element;
    };
    Container.prototype.truncateOverflow = function (maxHeight) {
        if (this.renderedElement) {
            // Add 1 to account for rounding differences between browsers
            var boundary_1 = this.renderedElement.offsetTop + maxHeight + 1;
            var handleElement_1 = function (cardElement) {
                var elt = cardElement.renderedElement;
                if (elt) {
                    switch (Utils.getFitStatus(elt, boundary_1)) {
                        case 0 /* FullyInContainer */:
                            var sizeChanged = cardElement['resetOverflow']();
                            // If the element's size changed after resetting content,
                            // we have to check if it still fits fully in the card
                            if (sizeChanged) {
                                handleElement_1(cardElement);
                            }
                            break;
                        case 1 /* Overflowing */:
                            var maxHeight_1 = boundary_1 - elt.offsetTop;
                            cardElement['handleOverflow'](maxHeight_1);
                            break;
                        case 2 /* FullyOutOfContainer */:
                            cardElement['handleOverflow'](0);
                            break;
                    }
                }
            };
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                handleElement_1(item);
            }
            return true;
        }
        return false;
    };
    Container.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            item['resetOverflow']();
        }
    };
    Container.prototype.getHasBackground = function () {
        return this.backgroundImage.isValid() || _super.prototype.getHasBackground.call(this);
    };
    Container.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this.clear();
        this.setShouldFallback(false);
        var jsonItems = source[this.getItemsCollectionPropertyName()];
        if (Array.isArray(jsonItems)) {
            for (var _i = 0, jsonItems_1 = jsonItems; _i < jsonItems_1.length; _i++) {
                var item = jsonItems_1[_i];
                var element = context.parseElement(this, item, !this.isDesignMode());
                if (element) {
                    this.insertItemAt(element, -1, true);
                }
            }
        }
    };
    Container.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, this.getItemsCollectionPropertyName(), this._items);
    };
    Object.defineProperty(Container.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.getItemCount = function () {
        return this._items.length;
    };
    Container.prototype.getItemAt = function (index) {
        return this._items[index];
    };
    Container.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var _i = 0, _a = this._renderedItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.isVisible) {
                    return item;
                }
            }
            ;
        }
        return undefined;
    };
    Container.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedItems && this._renderedItems.length > 0) {
            for (var i = this._renderedItems.length - 1; i >= 0; i--) {
                if (this._renderedItems[i].isVisible) {
                    return this._renderedItems[i];
                }
            }
        }
        return undefined;
    };
    Container.prototype.getJsonTypeName = function () {
        return "Container";
    };
    Container.prototype.isFirstElement = function (element) {
        var designMode = this.isDesignMode();
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isVisible || designMode) {
                return item == element;
            }
        }
        return false;
    };
    Container.prototype.isLastElement = function (element) {
        var designMode = this.isDesignMode();
        for (var i = this._items.length - 1; i >= 0; i--) {
            if (this._items[i].isVisible || designMode) {
                return this._items[i] == element;
            }
        }
        return false;
    };
    Container.prototype.isRtl = function () {
        if (this.rtl !== undefined) {
            return this.rtl;
        }
        else {
            var parentContainer = this.getParentContainer();
            return parentContainer ? parentContainer.isRtl() : false;
        }
    };
    Container.prototype.isBleedingAtTop = function () {
        var firstRenderedItem = this.getFirstVisibleRenderedItem();
        return this.isBleeding() || (firstRenderedItem ? firstRenderedItem.isBleedingAtTop() : false);
    };
    Container.prototype.isBleedingAtBottom = function () {
        var lastRenderedItem = this.getLastVisibleRenderedItem();
        return this.isBleeding() || (lastRenderedItem ? lastRenderedItem.isBleedingAtBottom() && lastRenderedItem.getEffectiveStyle() == this.getEffectiveStyle() : false);
    };
    Container.prototype.indexOf = function (cardElement) {
        return this._items.indexOf(cardElement);
    };
    Container.prototype.addItem = function (item) {
        this.insertItemAt(item, -1, false);
    };
    Container.prototype.insertItemBefore = function (item, insertBefore) {
        this.insertItemAt(item, this._items.indexOf(insertBefore), false);
    };
    Container.prototype.insertItemAfter = function (item, insertAfter) {
        this.insertItemAt(item, this._items.indexOf(insertAfter) + 1, false);
    };
    Container.prototype.removeItem = function (item) {
        var itemIndex = this._items.indexOf(item);
        if (itemIndex >= 0) {
            this._items.splice(itemIndex, 1);
            item.setParent(undefined);
            this.updateLayout();
            return true;
        }
        return false;
    };
    Container.prototype.clear = function () {
        this._items = [];
        this._renderedItems = [];
    };
    Container.prototype.getResourceInformation = function () {
        var result = _super.prototype.getResourceInformation.call(this);
        if (this.backgroundImage.isValid()) {
            result.push({
                url: this.backgroundImage.url,
                mimeType: "image"
            });
        }
        return result;
    };
    Container.prototype.getActionById = function (id) {
        var result = _super.prototype.getActionById.call(this, id);
        if (!result) {
            if (this.selectAction) {
                result = this.selectAction.getActionById(id);
            }
            if (!result) {
                for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result = item.getActionById(id);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    };
    Object.defineProperty(Container.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: true,
        configurable: true
    });
    Container.backgroundImageProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_0, "backgroundImage", BackgroundImage);
    Container.verticalContentAlignmentProperty = new serialization_1.EnumProperty(serialization_1.Versions.v1_1, "verticalContentAlignment", Enums.VerticalAlignment, Enums.VerticalAlignment.Top);
    Container.rtlProperty = new serialization_1.BoolProperty(serialization_1.Versions.v1_0, "rtl");
    __decorate([
        serialization_1.property(Container.backgroundImageProperty)
    ], Container.prototype, "backgroundImage", null);
    __decorate([
        serialization_1.property(Container.verticalContentAlignmentProperty)
    ], Container.prototype, "verticalContentAlignment", void 0);
    __decorate([
        serialization_1.property(Container.rtlProperty)
    ], Container.prototype, "rtl", void 0);
    return Container;
}(StylableCardElementContainer));
exports.Container = Container;
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(width) {
        if (width === void 0) { width = "stretch"; }
        var _this = _super.call(this) || this;
        _this.width = "stretch";
        //#endregion
        _this._computedWeight = 0;
        _this.width = width;
        return _this;
    }
    Column.prototype.adjustRenderedElementSize = function (renderedElement) {
        var minDesignTimeColumnHeight = 20;
        if (this.isDesignMode()) {
            renderedElement.style.minWidth = "20px";
            renderedElement.style.minHeight = (!this.minPixelHeight ? minDesignTimeColumnHeight : Math.max(this.minPixelHeight, minDesignTimeColumnHeight)) + "px";
        }
        else {
            renderedElement.style.minWidth = "0";
            if (this.minPixelHeight) {
                renderedElement.style.minHeight = this.minPixelHeight + "px";
            }
        }
        if (this.width === "auto") {
            renderedElement.style.flex = "0 1 auto";
        }
        else if (this.width === "stretch") {
            renderedElement.style.flex = "1 1 50px";
        }
        else if (this.width instanceof shared_1.SizeAndUnit) {
            if (this.width.unit == Enums.SizeUnit.Pixel) {
                renderedElement.style.flex = "0 0 auto";
                renderedElement.style.width = this.width.physicalSize + "px";
            }
            else {
                renderedElement.style.flex = "1 1 " + (this._computedWeight > 0 ? this._computedWeight : this.width.physicalSize) + "%";
            }
        }
    };
    Object.defineProperty(Column.prototype, "separatorOrientation", {
        get: function () {
            return Enums.Orientation.Vertical;
        },
        enumerable: true,
        configurable: true
    });
    Column.prototype.getJsonTypeName = function () {
        return "Column";
    };
    Object.defineProperty(Column.prototype, "hasVisibleSeparator", {
        get: function () {
            if (this.parent && this.parent instanceof ColumnSet) {
                return this.separatorElement !== undefined && !this.parent.isLeftMostElement(this);
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    //#region Schema
    Column.widthProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "width", function (sender, property, source, context) {
        var result = property.defaultValue;
        var value = source[property.name];
        var invalidWidth = false;
        if (typeof value === "number" && !isNaN(value)) {
            result = new shared_1.SizeAndUnit(value, Enums.SizeUnit.Weight);
        }
        else if (value === "auto" || value === "stretch") {
            result = value;
        }
        else if (typeof value === "string") {
            try {
                result = shared_1.SizeAndUnit.parse(value);
                if (result.unit === Enums.SizeUnit.Pixel && property.targetVersion.compareTo(context.targetVersion) > 0) {
                    invalidWidth = true;
                }
            }
            catch (e) {
                invalidWidth = true;
            }
        }
        else {
            invalidWidth = true;
        }
        if (invalidWidth) {
            context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid column width:" + value + " - defaulting to \"auto\"", sender);
            result = "auto";
        }
        return result;
    }, function (sender, property, target, value, context) {
        if (value instanceof shared_1.SizeAndUnit) {
            if (value.unit === Enums.SizeUnit.Pixel) {
                context.serializeValue(target, "width", value.physicalSize + "px");
            }
            else {
                context.serializeNumber(target, "width", value.physicalSize);
            }
        }
        else {
            context.serializeValue(target, "width", value);
        }
    }, "stretch");
    __decorate([
        serialization_1.property(Column.widthProperty)
    ], Column.prototype, "width", void 0);
    return Column;
}(Container));
exports.Column = Column;
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._columns = [];
        return _this;
    }
    ColumnSet.prototype.createColumnInstance = function (source, context) {
        return context.parseCardObject(this, source, [], // Forbidden types not supported for elements for now
        !this.isDesignMode(), function (typeName) {
            return !typeName || typeName === "Column" ? new Column() : undefined;
        }, function (typeName, errorType) {
            return {
                error: 4 /* ElementTypeNotAllowed */,
                message: "Invalid element type " + typeName + ". Only Column elements are allowed in a ColumnSet."
            };
        });
    };
    ColumnSet.prototype.internalRender = function () {
        this._renderedColumns = [];
        if (this._columns.length > 0) {
            // Cache hostConfig to avoid walking the parent hierarchy several times
            var hostConfig = this.hostConfig;
            var element = document.createElement("div");
            element.className = hostConfig.makeCssClassName("ac-columnSet");
            element.style.display = "flex";
            if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation) {
                // See comment in Container.internalRender()
                element.style.minHeight = '-webkit-min-content';
            }
            switch (this.horizontalAlignment) {
                case Enums.HorizontalAlignment.Center:
                    element.style.justifyContent = "center";
                    break;
                case Enums.HorizontalAlignment.Right:
                    element.style.justifyContent = "flex-end";
                    break;
                default:
                    element.style.justifyContent = "flex-start";
                    break;
            }
            var totalWeight = 0;
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.width instanceof shared_1.SizeAndUnit && (column.width.unit == Enums.SizeUnit.Weight)) {
                    totalWeight += column.width.physicalSize;
                }
            }
            for (var _b = 0, _c = this._columns; _b < _c.length; _b++) {
                var column = _c[_b];
                if (column.width instanceof shared_1.SizeAndUnit && column.width.unit == Enums.SizeUnit.Weight && totalWeight > 0) {
                    var computedWeight = 100 / totalWeight * column.width.physicalSize;
                    // Best way to emulate "internal" access I know of
                    column["_computedWeight"] = computedWeight;
                }
                var renderedColumn = column.render();
                if (renderedColumn) {
                    if (this._renderedColumns.length > 0 && column.separatorElement) {
                        column.separatorElement.style.flex = "0 0 auto";
                        Utils.appendChild(element, column.separatorElement);
                    }
                    Utils.appendChild(element, renderedColumn);
                    this._renderedColumns.push(column);
                }
            }
            return this._renderedColumns.length > 0 ? element : undefined;
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.truncateOverflow = function (maxHeight) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['handleOverflow'](maxHeight);
        }
        return true;
    };
    ColumnSet.prototype.undoOverflowTruncation = function () {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column['resetOverflow']();
        }
    };
    Object.defineProperty(ColumnSet.prototype, "isSelectable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ColumnSet.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._columns = [];
        this._renderedColumns = [];
        var jsonColumns = source["columns"];
        if (Array.isArray(jsonColumns)) {
            for (var _i = 0, jsonColumns_1 = jsonColumns; _i < jsonColumns_1.length; _i++) {
                var item = jsonColumns_1[_i];
                var column = this.createColumnInstance(item, context);
                if (column) {
                    this._columns.push(column);
                }
            }
        }
    };
    ColumnSet.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        context.serializeArray(target, "columns", this._columns);
    };
    ColumnSet.prototype.isFirstElement = function (element) {
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.isVisible) {
                return column == element;
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtTop = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtTop()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.isBleedingAtBottom = function () {
        if (this.isBleeding()) {
            return true;
        }
        if (this._renderedColumns && this._renderedColumns.length > 0) {
            for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.isBleedingAtBottom()) {
                    return true;
                }
            }
        }
        return false;
    };
    ColumnSet.prototype.getItemCount = function () {
        return this._columns.length;
    };
    ColumnSet.prototype.getFirstVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[0];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getLastVisibleRenderedItem = function () {
        if (this.renderedElement && this._renderedColumns && this._renderedColumns.length > 0) {
            return this._renderedColumns[this._renderedColumns.length - 1];
        }
        else {
            return undefined;
        }
    };
    ColumnSet.prototype.getColumnAt = function (index) {
        return this._columns[index];
    };
    ColumnSet.prototype.getItemAt = function (index) {
        return this.getColumnAt(index);
    };
    ColumnSet.prototype.getJsonTypeName = function () {
        return "ColumnSet";
    };
    ColumnSet.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        var weightedColumns = 0;
        var stretchedColumns = 0;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (typeof column.width === "number") {
                weightedColumns++;
            }
            else if (column.width === "stretch") {
                stretchedColumns++;
            }
        }
        if (weightedColumns > 0 && stretchedColumns > 0) {
            context.addFailure(this, 0 /* Hint */, "It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space.");
        }
    };
    ColumnSet.prototype.addColumn = function (column) {
        if (!column.parent) {
            this._columns.push(column);
            column.setParent(this);
        }
        else {
            throw new Error("This column already belongs to another ColumnSet.");
        }
    };
    ColumnSet.prototype.removeItem = function (item) {
        if (item instanceof Column) {
            var itemIndex = this._columns.indexOf(item);
            if (itemIndex >= 0) {
                this._columns.splice(itemIndex, 1);
                item.setParent(undefined);
                this.updateLayout();
                return true;
            }
        }
        return false;
    };
    ColumnSet.prototype.indexOf = function (cardElement) {
        return cardElement instanceof Column ? this._columns.indexOf(cardElement) : -1;
    };
    ColumnSet.prototype.isLeftMostElement = function (element) {
        return this._columns.indexOf(element) == 0;
    };
    ColumnSet.prototype.isRightMostElement = function (element) {
        return this._columns.indexOf(element) == this._columns.length - 1;
    };
    ColumnSet.prototype.isTopElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.isBottomElement = function (element) {
        return this._columns.indexOf(element) >= 0;
    };
    ColumnSet.prototype.getActionById = function (id) {
        var result = undefined;
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            result = column.getActionById(id);
            if (result) {
                break;
            }
        }
        return result;
    };
    Object.defineProperty(ColumnSet.prototype, "bleed", {
        get: function () {
            return this.getBleed();
        },
        set: function (value) {
            this.setBleed(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "padding", {
        get: function () {
            return this.getPadding();
        },
        set: function (value) {
            this.setPadding(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSet.prototype, "selectAction", {
        get: function () {
            return this._selectAction;
        },
        set: function (value) {
            this._selectAction = value;
        },
        enumerable: true,
        configurable: true
    });
    return ColumnSet;
}(StylableCardElementContainer));
exports.ColumnSet = ColumnSet;
function raiseImageLoadedEvent(image) {
    var card = image.getRootElement();
    var onImageLoadedHandler = (card && card.onImageLoaded) ? card.onImageLoaded : AdaptiveCard.onImageLoaded;
    if (onImageLoadedHandler) {
        onImageLoadedHandler(image);
    }
}
function raiseAnchorClickedEvent(element, anchor) {
    var card = element.getRootElement();
    var onAnchorClickedHandler = (card && card.onAnchorClicked) ? card.onAnchorClicked : AdaptiveCard.onAnchorClicked;
    return onAnchorClickedHandler !== undefined ? onAnchorClickedHandler(element, anchor) : false;
}
function raiseExecuteActionEvent(action) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onExecuteActionHandler = (card && card.onExecuteAction) ? card.onExecuteAction : AdaptiveCard.onExecuteAction;
    if (action.prepareForExecution() && onExecuteActionHandler) {
        onExecuteActionHandler(action);
    }
}
function raiseInlineCardExpandedEvent(action, isExpanded) {
    var card = action.parent ? action.parent.getRootElement() : undefined;
    var onInlineCardExpandedHandler = (card && card.onInlineCardExpanded) ? card.onInlineCardExpanded : AdaptiveCard.onInlineCardExpanded;
    if (onInlineCardExpandedHandler) {
        onInlineCardExpandedHandler(action, isExpanded);
    }
}
function raiseInputValueChangedEvent(input) {
    var card = input.getRootElement();
    var onInputValueChangedHandler = (card && card.onInputValueChanged) ? card.onInputValueChanged : AdaptiveCard.onInputValueChanged;
    if (onInputValueChangedHandler) {
        onInputValueChangedHandler(input);
    }
}
function raiseElementVisibilityChangedEvent(element, shouldUpdateLayout) {
    if (shouldUpdateLayout === void 0) { shouldUpdateLayout = true; }
    var rootElement = element.getRootElement();
    if (shouldUpdateLayout) {
        rootElement.updateLayout();
    }
    var card = rootElement;
    var onElementVisibilityChangedHandler = (card && card.onElementVisibilityChanged) ? card.onElementVisibilityChanged : AdaptiveCard.onElementVisibilityChanged;
    if (onElementVisibilityChangedHandler !== undefined) {
        onElementVisibilityChangedHandler(element);
    }
}
var ContainerWithActions = /** @class */ (function (_super) {
    __extends(ContainerWithActions, _super);
    function ContainerWithActions() {
        var _this = _super.call(this) || this;
        _this._actionCollection = new ActionCollection(_this);
        return _this;
    }
    ContainerWithActions.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        this._actionCollection.parse(source["actions"], context);
    };
    ContainerWithActions.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        this._actionCollection.toJSON(target, "actions", context);
    };
    ContainerWithActions.prototype.internalRender = function () {
        var element = _super.prototype.internalRender.call(this);
        if (element) {
            var renderedActions = this._actionCollection.render(this.hostConfig.actions.actionsOrientation, false);
            if (renderedActions) {
                Utils.appendChild(element, Utils.renderSeparation(this.hostConfig, {
                    spacing: this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)
                }, Enums.Orientation.Horizontal));
                Utils.appendChild(element, renderedActions);
            }
            if (this.renderIfEmpty) {
                return element;
            }
            else {
                return element.children.length > 0 ? element : undefined;
            }
        }
        else {
            return undefined;
        }
    };
    ContainerWithActions.prototype.getHasExpandedAction = function () {
        if (this.renderedActionCount == 0) {
            return false;
        }
        else if (this.renderedActionCount == 1) {
            return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
        }
        else {
            return this._actionCollection.expandedAction !== undefined;
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "renderedActionCount", {
        get: function () {
            return this._actionCollection.renderedActionCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerWithActions.prototype, "renderIfEmpty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ContainerWithActions.prototype.getActionCount = function () {
        return this._actionCollection.items.length;
    };
    ContainerWithActions.prototype.getActionAt = function (index) {
        if (index >= 0 && index < this.getActionCount()) {
            return this._actionCollection.items[index];
        }
        else {
            return _super.prototype.getActionAt.call(this, index);
        }
    };
    ContainerWithActions.prototype.getActionById = function (id) {
        var result = this._actionCollection.getActionById(id);
        return result ? result : _super.prototype.getActionById.call(this, id);
    };
    ContainerWithActions.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this._actionCollection) {
            this._actionCollection.validateProperties(context);
        }
    };
    ContainerWithActions.prototype.isLastElement = function (element) {
        return _super.prototype.isLastElement.call(this, element) && this._actionCollection.items.length == 0;
    };
    ContainerWithActions.prototype.addAction = function (action) {
        this._actionCollection.addAction(action);
    };
    ContainerWithActions.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._actionCollection.clear();
    };
    ContainerWithActions.prototype.getAllInputs = function () {
        return _super.prototype.getAllInputs.call(this).concat(this._actionCollection.getAllInputs());
    };
    ContainerWithActions.prototype.getResourceInformation = function () {
        return _super.prototype.getResourceInformation.call(this).concat(this._actionCollection.getResourceInformation());
    };
    ContainerWithActions.prototype.isBleedingAtBottom = function () {
        if (this._actionCollection.renderedActionCount == 0) {
            return _super.prototype.isBleedingAtBottom.call(this);
        }
        else {
            if (this._actionCollection.items.length == 1) {
                return this._actionCollection.expandedAction !== undefined && !this.hostConfig.actions.preExpandSingleShowCardAction;
            }
            else {
                return this._actionCollection.expandedAction !== undefined;
            }
        }
    };
    Object.defineProperty(ContainerWithActions.prototype, "isStandalone", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerWithActions;
}(Container));
exports.ContainerWithActions = ContainerWithActions;
// @dynamic
var AdaptiveCard = /** @class */ (function (_super) {
    __extends(AdaptiveCard, _super);
    function AdaptiveCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.designMode = false;
        return _this;
    }
    Object.defineProperty(AdaptiveCard, "processMarkdown", {
        get: function () {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        set: function (value) {
            throw new Error("The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead.");
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.applyMarkdown = function (text) {
        var result = {
            didProcess: false
        };
        if (AdaptiveCard.onProcessMarkdown) {
            AdaptiveCard.onProcessMarkdown(text, result);
        }
        else if (window.markdownit) {
            // Check for markdownit
            var markdownIt = window.markdownit;
            result.outputHtml = markdownIt().render(text);
            result.didProcess = true;
        }
        else {
            console.warn("Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown");
        }
        return result;
    };
    AdaptiveCard.prototype.isVersionSupported = function () {
        if (this.bypassVersionCheck) {
            return true;
        }
        else {
            var unsupportedVersion = !this.version ||
                !this.version.isValid ||
                (this.maxVersion.major < this.version.major) ||
                (this.maxVersion.major == this.version.major && this.maxVersion.minor < this.version.minor);
            return !unsupportedVersion;
        }
    };
    AdaptiveCard.prototype.getItemsCollectionPropertyName = function () {
        return "body";
    };
    AdaptiveCard.prototype.internalParse = function (source, context) {
        this._fallbackCard = undefined;
        var fallbackElement = context.parseElement(undefined, source["fallback"], !this.isDesignMode());
        if (fallbackElement) {
            this._fallbackCard = new AdaptiveCard();
            this._fallbackCard.addItem(fallbackElement);
        }
        _super.prototype.internalParse.call(this, source, context);
    };
    AdaptiveCard.prototype.internalToJSON = function (target, context) {
        this.setValue(AdaptiveCard.versionProperty, context.targetVersion);
        _super.prototype.internalToJSON.call(this, target, context);
    };
    AdaptiveCard.prototype.internalRender = function () {
        var renderedElement = _super.prototype.internalRender.call(this);
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && renderedElement) {
            // Unlike containers, the root card element should be allowed to
            // be shorter than its content (otherwise the overflow truncation
            // logic would never get triggered)
            renderedElement.style.removeProperty("minHeight");
        }
        return renderedElement;
    };
    AdaptiveCard.prototype.getHasBackground = function () {
        return true;
    };
    AdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition(Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    Object.defineProperty(AdaptiveCard.prototype, "renderIfEmpty", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "allowCustomStyle", {
        get: function () {
            return this.hostConfig.adaptiveCard && this.hostConfig.adaptiveCard.allowCustomStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdaptiveCard.prototype, "hasBackground", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.prototype.getJsonTypeName = function () {
        return "AdaptiveCard";
    };
    AdaptiveCard.prototype.internalValidateProperties = function (context) {
        _super.prototype.internalValidateProperties.call(this, context);
        if (this.getValue(CardElement.typeNameProperty) !== "AdaptiveCard") {
            context.addFailure(this, 7 /* MissingCardType */, "Invalid or missing card type. Make sure the card's type property is set to \"AdaptiveCard\".");
        }
        if (!this.bypassVersionCheck && !this.version) {
            context.addFailure(this, 8 /* PropertyCantBeNull */, "The version property must be specified.");
        }
        else if (!this.isVersionSupported()) {
            context.addFailure(this, 12 /* UnsupportedCardVersion */, "The specified card version (" + this.version.toString() + ") is not supported. The maximum supported card version is " + this.maxVersion.toString());
        }
    };
    AdaptiveCard.prototype.render = function (target) {
        var renderedCard;
        if (this.shouldFallback() && this._fallbackCard) {
            this._fallbackCard.hostConfig = this.hostConfig;
            renderedCard = this._fallbackCard.render();
        }
        else {
            renderedCard = _super.prototype.render.call(this);
            if (renderedCard) {
                renderedCard.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard"));
                renderedCard.tabIndex = 0;
                if (this.speak) {
                    renderedCard.setAttribute("aria-label", this.speak);
                }
            }
        }
        if (target) {
            Utils.appendChild(target, renderedCard);
            this.updateLayout();
        }
        return renderedCard;
    };
    AdaptiveCard.prototype.updateLayout = function (processChildren) {
        if (processChildren === void 0) { processChildren = true; }
        _super.prototype.updateLayout.call(this, processChildren);
        if (shared_1.GlobalSettings.useAdvancedCardBottomTruncation && this.isDisplayed()) {
            var padding = this.hostConfig.getEffectiveSpacing(Enums.Spacing.Default);
            this['handleOverflow'](this.renderedElement.offsetHeight - padding);
        }
    };
    AdaptiveCard.prototype.shouldFallback = function () {
        return _super.prototype.shouldFallback.call(this) || !this.isVersionSupported();
    };
    Object.defineProperty(AdaptiveCard.prototype, "hasVisibleSeparator", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveCard.schemaUrl = "http://adaptivecards.io/schemas/adaptive-card.json";
    //#region Schema
    AdaptiveCard.$schemaProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "$schema", function (sender, property, source, context) {
        return AdaptiveCard.schemaUrl;
    }, function (sender, property, target, value, context) {
        context.serializeValue(target, property.name, AdaptiveCard.schemaUrl);
    });
    AdaptiveCard.versionProperty = new serialization_1.CustomProperty(serialization_1.Versions.v1_0, "version", function (sender, property, source, context) {
        var version = serialization_1.Version.parse(source[property.name], context);
        if (version === undefined) {
            version = serialization_1.Versions.latest;
            context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid card version. Defaulting to latest version (" + version.toString() + ")");
        }
        return version;
    }, function (sender, property, target, value, context) {
        if (value !== undefined) {
            context.serializeValue(target, property.name, value.toString());
        }
    }, serialization_1.Versions.v1_0);
    AdaptiveCard.fallbackTextProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "fallbackText");
    AdaptiveCard.speakProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "speak");
    __decorate([
        serialization_1.property(AdaptiveCard.versionProperty)
    ], AdaptiveCard.prototype, "version", void 0);
    __decorate([
        serialization_1.property(AdaptiveCard.fallbackTextProperty)
    ], AdaptiveCard.prototype, "fallbackText", void 0);
    __decorate([
        serialization_1.property(AdaptiveCard.speakProperty)
    ], AdaptiveCard.prototype, "speak", void 0);
    return AdaptiveCard;
}(ContainerWithActions));
exports.AdaptiveCard = AdaptiveCard;
var InlineAdaptiveCard = /** @class */ (function (_super) {
    __extends(InlineAdaptiveCard, _super);
    function InlineAdaptiveCard() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suppressStyle = false;
        return _this;
    }
    InlineAdaptiveCard.prototype.getSchemaKey = function () {
        return "InlineAdaptiveCard";
    };
    InlineAdaptiveCard.prototype.populateSchema = function (schema) {
        _super.prototype.populateSchema.call(this, schema);
        schema.remove(AdaptiveCard.$schemaProperty, AdaptiveCard.versionProperty);
    };
    //#endregion
    InlineAdaptiveCard.prototype.getDefaultPadding = function () {
        return new shared_1.PaddingDefinition(this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding, this.suppressStyle ? Enums.Spacing.None : Enums.Spacing.Padding, Enums.Spacing.Padding);
    };
    Object.defineProperty(InlineAdaptiveCard.prototype, "bypassVersionCheck", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineAdaptiveCard.prototype, "defaultStyle", {
        get: function () {
            if (this.suppressStyle) {
                return Enums.ContainerStyle.Default;
            }
            else {
                return this.hostConfig.actions.showCard.style ? this.hostConfig.actions.showCard.style : Enums.ContainerStyle.Emphasis;
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineAdaptiveCard.prototype.render = function (target) {
        var renderedCard = _super.prototype.render.call(this, target);
        if (renderedCard) {
            renderedCard.setAttribute("aria-live", "polite");
            renderedCard.removeAttribute("tabindex");
        }
        return renderedCard;
    };
    InlineAdaptiveCard.prototype.getForbiddenActionTypes = function () {
        return [ShowCardAction];
    };
    return InlineAdaptiveCard;
}(AdaptiveCard));
var GlobalRegistry = /** @class */ (function () {
    function GlobalRegistry() {
    }
    GlobalRegistry.populateWithDefaultElements = function (registry) {
        registry.clear();
        registry.register("Container", Container);
        registry.register("TextBlock", TextBlock);
        registry.register("RichTextBlock", RichTextBlock, serialization_1.Versions.v1_2);
        registry.register("TextRun", TextRun, serialization_1.Versions.v1_2);
        registry.register("Image", Image);
        registry.register("ImageSet", ImageSet);
        registry.register("Media", Media, serialization_1.Versions.v1_1);
        registry.register("FactSet", FactSet);
        registry.register("ColumnSet", ColumnSet);
        registry.register("ActionSet", ActionSet, serialization_1.Versions.v1_2);
        registry.register("Input.Text", TextInput);
        registry.register("Input.Date", DateInput);
        registry.register("Input.Time", TimeInput);
        registry.register("Input.Number", NumberInput);
        registry.register("Input.ChoiceSet", ChoiceSetInput);
        registry.register("Input.Toggle", ToggleInput);
    };
    GlobalRegistry.populateWithDefaultActions = function (registry) {
        registry.clear();
        registry.register(OpenUrlAction.JsonTypeName, OpenUrlAction);
        registry.register(SubmitAction.JsonTypeName, SubmitAction);
        registry.register(ShowCardAction.JsonTypeName, ShowCardAction);
        registry.register(ToggleVisibilityAction.JsonTypeName, ToggleVisibilityAction, serialization_1.Versions.v1_2);
    };
    GlobalRegistry.reset = function () {
        GlobalRegistry.populateWithDefaultElements(GlobalRegistry.elements);
        GlobalRegistry.populateWithDefaultActions(GlobalRegistry.actions);
    };
    GlobalRegistry.elements = new registry_1.CardObjectRegistry();
    GlobalRegistry.actions = new registry_1.CardObjectRegistry();
    return GlobalRegistry;
}());
exports.GlobalRegistry = GlobalRegistry;
GlobalRegistry.reset();
var SerializationContext = /** @class */ (function (_super) {
    __extends(SerializationContext, _super);
    function SerializationContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SerializationContext.prototype.internalParseCardObject = function (parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent) {
        var result = undefined;
        if (source && typeof source === "object") {
            var tryToFallback = false;
            var typeName = Utils.parseString(source["type"]);
            if (typeName) {
                if (forbiddenTypeNames.indexOf(typeName) >= 0) {
                    logParseEvent(typeName, 1 /* ForbiddenType */);
                }
                else {
                    result = createInstanceCallback(typeName);
                    if (!result) {
                        tryToFallback = allowFallback;
                        logParseEvent(typeName, 0 /* UnknownType */);
                    }
                    else {
                        result.setParent(parent);
                        result.parse(source, this);
                        tryToFallback = result.shouldFallback() && allowFallback;
                    }
                    if (tryToFallback) {
                        var fallback = source["fallback"];
                        if (!fallback && parent) {
                            parent.setShouldFallback(true);
                        }
                        if (typeof fallback === "string" && fallback.toLowerCase() === "drop") {
                            result = undefined;
                        }
                        else if (typeof fallback === "object") {
                            result = this.internalParseCardObject(parent, fallback, forbiddenTypeNames, true, createInstanceCallback, logParseEvent);
                        }
                    }
                }
            }
        }
        return result;
    };
    SerializationContext.prototype.cardObjectParsed = function (o, source) {
        if (o instanceof Action && this.onParseAction) {
            this.onParseAction(o, source, this);
        }
        else if (o instanceof CardElement && this.onParseElement) {
            this.onParseElement(o, source, this);
        }
    };
    SerializationContext.prototype.shouldSerialize = function (o) {
        if (o instanceof Action) {
            return this.actionRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else if (o instanceof CardElement) {
            return this.elementRegistry.findByName(o.getJsonTypeName()) !== undefined;
        }
        else {
            return true;
        }
    };
    SerializationContext.prototype.parseCardObject = function (parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent) {
        var result = this.internalParseCardObject(parent, source, forbiddenTypeNames, allowFallback, createInstanceCallback, logParseEvent);
        if (result !== undefined) {
            this.cardObjectParsed(result, source);
        }
        return result;
    };
    SerializationContext.prototype.parseElement = function (parent, source, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, [], // Forbidden types not supported for elements for now
        allowFallback, function (typeName) {
            return _this.elementRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType === 0 /* UnknownType */) {
                _this.logParseEvent(11 /* UnknownElementType */, "Unknown element type: " + typeName + ". Fallback will be used if present.");
            }
            else {
                _this.logParseEvent(4 /* ElementTypeNotAllowed */, "Element type " + typeName + " is not allowed in this context.");
            }
        });
    };
    SerializationContext.prototype.parseAction = function (parent, source, forbiddenActionTypes, allowFallback) {
        var _this = this;
        return this.parseCardObject(parent, source, forbiddenActionTypes, allowFallback, function (typeName) {
            return _this.actionRegistry.createInstance(typeName, _this.targetVersion);
        }, function (typeName, errorType) {
            if (errorType == 0 /* UnknownType */) {
                return {
                    error: 10 /* UnknownActionType */,
                    message: "Unknown action type: " + typeName + ". Fallback will be used if present."
                };
            }
            else {
                return {
                    error: 1 /* ActionTypeNotAllowed */,
                    message: "Action type " + typeName + " is not allowed in this context."
                };
            }
        });
    };
    Object.defineProperty(SerializationContext.prototype, "elementRegistry", {
        get: function () {
            return this._elementRegistry ? this._elementRegistry : GlobalRegistry.elements;
        },
        enumerable: true,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setElementRegistry = function (value) {
        this._elementRegistry = value;
    };
    Object.defineProperty(SerializationContext.prototype, "actionRegistry", {
        get: function () {
            return this._actionRegistry ? this._actionRegistry : GlobalRegistry.actions;
        },
        enumerable: true,
        configurable: true
    });
    // Not using a property setter here because the setter should accept "undefined"
    // whereas the getter should never return undefined.
    SerializationContext.prototype.setActionRegistry = function (value) {
        this._actionRegistry = value;
    };
    return SerializationContext;
}(serialization_1.BaseSerializationContext));
exports.SerializationContext = SerializationContext;
//# sourceMappingURL=card-elements.js.map

/***/ }),

/***/ "../adaptivecards/lib/card-object.js":
/*!*******************************************!*\
  !*** ../adaptivecards/lib/card-object.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js");
var host_capabilities_1 = __webpack_require__(/*! ./host-capabilities */ "../adaptivecards/lib/host-capabilities.js");
var serialization_1 = __webpack_require__(/*! ./serialization */ "../adaptivecards/lib/serialization.js");
var ValidationResults = /** @class */ (function () {
    function ValidationResults() {
        this.allIds = {};
        this.validationEvents = [];
    }
    ValidationResults.prototype.addFailure = function (cardObject, event, message) {
        this.validationEvents.push({
            phase: 2 /* Validation */,
            source: cardObject,
            event: event,
            message: message
        });
    };
    return ValidationResults;
}());
exports.ValidationResults = ValidationResults;
var CardObject = /** @class */ (function (_super) {
    __extends(CardObject, _super);
    function CardObject() {
        //#region Schema
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion
        _this._shouldFallback = false;
        return _this;
    }
    CardObject.prototype.getSchemaKey = function () {
        return this.getJsonTypeName();
    };
    Object.defineProperty(CardObject.prototype, "requires", {
        get: function () {
            return this.getValue(CardObject.requiresProperty);
        },
        enumerable: true,
        configurable: true
    });
    CardObject.prototype.preProcessPropertyValue = function (property, propertyValue) {
        var value = propertyValue === undefined ? this.getValue(property) : propertyValue;
        if (shared_1.GlobalSettings.allowPreProcessingPropertyValues) {
            var currentObject = this;
            while (currentObject && !currentObject.onPreProcessPropertyValue) {
                currentObject = currentObject.parent;
            }
            if (currentObject && currentObject.onPreProcessPropertyValue) {
                return currentObject.onPreProcessPropertyValue(this, property, value);
            }
        }
        return value;
    };
    CardObject.prototype.setParent = function (value) {
        this._parent = value;
    };
    CardObject.prototype.setShouldFallback = function (value) {
        this._shouldFallback = value;
    };
    CardObject.prototype.shouldFallback = function () {
        return this._shouldFallback || !this.requires.areAllMet(this.hostConfig.hostCapabilities);
    };
    CardObject.prototype.getRootObject = function () {
        var rootObject = this;
        while (rootObject.parent) {
            rootObject = rootObject.parent;
        }
        return rootObject;
    };
    CardObject.prototype.internalValidateProperties = function (context) {
        if (this.id) {
            if (context.allIds.hasOwnProperty(this.id)) {
                if (context.allIds[this.id] == 1) {
                    context.addFailure(this, 13 /* DuplicateId */, "Duplicate Id: " + this.id);
                }
                context.allIds[this.id] += 1;
            }
            else {
                context.allIds[this.id] = 1;
            }
        }
    };
    CardObject.prototype.validateProperties = function () {
        var result = new ValidationResults();
        this.internalValidateProperties(result);
        return result;
    };
    Object.defineProperty(CardObject.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "renderedElement", {
        get: function () {
            return this._renderedElement;
        },
        enumerable: true,
        configurable: true
    });
    CardObject.typeNameProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "type", undefined, undefined, undefined, function (sender) {
        return sender.getJsonTypeName();
    });
    CardObject.idProperty = new serialization_1.StringProperty(serialization_1.Versions.v1_0, "id");
    CardObject.requiresProperty = new serialization_1.SerializableObjectProperty(serialization_1.Versions.v1_2, "requires", host_capabilities_1.HostCapabilities);
    __decorate([
        serialization_1.property(CardObject.idProperty)
    ], CardObject.prototype, "id", void 0);
    __decorate([
        serialization_1.property(CardObject.requiresProperty)
    ], CardObject.prototype, "requires", null);
    return CardObject;
}(serialization_1.SerializableObject));
exports.CardObject = CardObject;
//# sourceMappingURL=card-object.js.map

/***/ }),

/***/ "../adaptivecards/lib/enums.js":
/*!*************************************!*\
  !*** ../adaptivecards/lib/enums.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
// Note the "weird" way these readonly fields are declared is to work around
// a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
// and adopt this syntax for all other static readonly fields.
var ActionStyle = /** @class */ (function () {
    function ActionStyle() {
    }
    ActionStyle.Default = "default";
    ActionStyle.Positive = "positive";
    ActionStyle.Destructive = "destructive";
    return ActionStyle;
}());
exports.ActionStyle = ActionStyle;
var Size;
(function (Size) {
    Size[Size["Auto"] = 0] = "Auto";
    Size[Size["Stretch"] = 1] = "Stretch";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size = exports.Size || (exports.Size = {}));
var SizeUnit;
(function (SizeUnit) {
    SizeUnit[SizeUnit["Weight"] = 0] = "Weight";
    SizeUnit[SizeUnit["Pixel"] = 1] = "Pixel";
})(SizeUnit = exports.SizeUnit || (exports.SizeUnit = {}));
var TextSize;
(function (TextSize) {
    TextSize[TextSize["Small"] = 0] = "Small";
    TextSize[TextSize["Default"] = 1] = "Default";
    TextSize[TextSize["Medium"] = 2] = "Medium";
    TextSize[TextSize["Large"] = 3] = "Large";
    TextSize[TextSize["ExtraLarge"] = 4] = "ExtraLarge";
})(TextSize = exports.TextSize || (exports.TextSize = {}));
var TextWeight;
(function (TextWeight) {
    TextWeight[TextWeight["Lighter"] = 0] = "Lighter";
    TextWeight[TextWeight["Default"] = 1] = "Default";
    TextWeight[TextWeight["Bolder"] = 2] = "Bolder";
})(TextWeight = exports.TextWeight || (exports.TextWeight = {}));
var FontType;
(function (FontType) {
    FontType[FontType["Default"] = 0] = "Default";
    FontType[FontType["Monospace"] = 1] = "Monospace";
})(FontType = exports.FontType || (exports.FontType = {}));
var Spacing;
(function (Spacing) {
    Spacing[Spacing["None"] = 0] = "None";
    Spacing[Spacing["Small"] = 1] = "Small";
    Spacing[Spacing["Default"] = 2] = "Default";
    Spacing[Spacing["Medium"] = 3] = "Medium";
    Spacing[Spacing["Large"] = 4] = "Large";
    Spacing[Spacing["ExtraLarge"] = 5] = "ExtraLarge";
    Spacing[Spacing["Padding"] = 6] = "Padding";
})(Spacing = exports.Spacing || (exports.Spacing = {}));
var TextColor;
(function (TextColor) {
    TextColor[TextColor["Default"] = 0] = "Default";
    TextColor[TextColor["Dark"] = 1] = "Dark";
    TextColor[TextColor["Light"] = 2] = "Light";
    TextColor[TextColor["Accent"] = 3] = "Accent";
    TextColor[TextColor["Good"] = 4] = "Good";
    TextColor[TextColor["Warning"] = 5] = "Warning";
    TextColor[TextColor["Attention"] = 6] = "Attention";
})(TextColor = exports.TextColor || (exports.TextColor = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 0] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 1] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 2] = "Right";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var ActionAlignment;
(function (ActionAlignment) {
    ActionAlignment[ActionAlignment["Left"] = 0] = "Left";
    ActionAlignment[ActionAlignment["Center"] = 1] = "Center";
    ActionAlignment[ActionAlignment["Right"] = 2] = "Right";
    ActionAlignment[ActionAlignment["Stretch"] = 3] = "Stretch";
})(ActionAlignment = exports.ActionAlignment || (exports.ActionAlignment = {}));
var ImageStyle;
(function (ImageStyle) {
    ImageStyle[ImageStyle["Default"] = 0] = "Default";
    ImageStyle[ImageStyle["Person"] = 1] = "Person";
})(ImageStyle = exports.ImageStyle || (exports.ImageStyle = {}));
var ShowCardActionMode;
(function (ShowCardActionMode) {
    ShowCardActionMode[ShowCardActionMode["Inline"] = 0] = "Inline";
    ShowCardActionMode[ShowCardActionMode["Popup"] = 1] = "Popup";
})(ShowCardActionMode = exports.ShowCardActionMode || (exports.ShowCardActionMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var FillMode;
(function (FillMode) {
    FillMode[FillMode["Cover"] = 0] = "Cover";
    FillMode[FillMode["RepeatHorizontally"] = 1] = "RepeatHorizontally";
    FillMode[FillMode["RepeatVertically"] = 2] = "RepeatVertically";
    FillMode[FillMode["Repeat"] = 3] = "Repeat";
})(FillMode = exports.FillMode || (exports.FillMode = {}));
var ActionIconPlacement;
(function (ActionIconPlacement) {
    ActionIconPlacement[ActionIconPlacement["LeftOfTitle"] = 0] = "LeftOfTitle";
    ActionIconPlacement[ActionIconPlacement["AboveTitle"] = 1] = "AboveTitle";
})(ActionIconPlacement = exports.ActionIconPlacement || (exports.ActionIconPlacement = {}));
var InputTextStyle;
(function (InputTextStyle) {
    InputTextStyle[InputTextStyle["Text"] = 0] = "Text";
    InputTextStyle[InputTextStyle["Tel"] = 1] = "Tel";
    InputTextStyle[InputTextStyle["Url"] = 2] = "Url";
    InputTextStyle[InputTextStyle["Email"] = 3] = "Email";
})(InputTextStyle = exports.InputTextStyle || (exports.InputTextStyle = {}));
var InputValidationNecessity;
(function (InputValidationNecessity) {
    InputValidationNecessity[InputValidationNecessity["Optional"] = 0] = "Optional";
    InputValidationNecessity[InputValidationNecessity["Required"] = 1] = "Required";
    InputValidationNecessity[InputValidationNecessity["RequiredWithVisualCue"] = 2] = "RequiredWithVisualCue";
})(InputValidationNecessity = exports.InputValidationNecessity || (exports.InputValidationNecessity = {}));
/*
    This should really be a string enum, e.g.

        export enum ContainerStyle {
            Default = "default",
            Emphasis = "emphasis"
        }

    However, some hosts do not use a version of TypeScript
    recent enough to understand string enums. This is
    a compatible construct that does not require using
    a more recent version of TypeScript.

    Also note the "weird" way these readonly fields are declared is to work around
    a breaking change introduced in TS 3.1 wrt d.ts generation. DO NOT CHANGE
    and adopt this syntax for all other static readonly fields.
*/
var ContainerStyle = /** @class */ (function () {
    function ContainerStyle() {
    }
    ContainerStyle.Default = "default";
    ContainerStyle.Emphasis = "emphasis";
    ContainerStyle.Accent = "accent";
    ContainerStyle.Good = "good";
    ContainerStyle.Attention = "attention";
    ContainerStyle.Warning = "warning";
    return ContainerStyle;
}());
exports.ContainerStyle = ContainerStyle;
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "../adaptivecards/lib/host-capabilities.js":
/*!*************************************************!*\
  !*** ../adaptivecards/lib/host-capabilities.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var serialization_1 = __webpack_require__(/*! ./serialization */ "../adaptivecards/lib/serialization.js");
var HostCapabilities = /** @class */ (function (_super) {
    __extends(HostCapabilities, _super);
    function HostCapabilities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._capabilities = {};
        return _this;
    }
    HostCapabilities.prototype.getSchemaKey = function () {
        return "HostCapabilities";
    };
    HostCapabilities.prototype.internalParse = function (source, context) {
        _super.prototype.internalParse.call(this, source, context);
        if (source) {
            for (var name_1 in source) {
                var jsonVersion = source[name_1];
                if (typeof jsonVersion === "string") {
                    if (jsonVersion == "*") {
                        this.addCapability(name_1, "*");
                    }
                    else {
                        var version = serialization_1.Version.parse(jsonVersion, context);
                        if (version && version.isValid) {
                            this.addCapability(name_1, version);
                        }
                    }
                }
            }
        }
    };
    HostCapabilities.prototype.internalToJSON = function (target, context) {
        _super.prototype.internalToJSON.call(this, target, context);
        for (var key in this._capabilities) {
            target[key] = this._capabilities[key];
        }
    };
    HostCapabilities.prototype.addCapability = function (name, version) {
        this._capabilities[name] = version;
    };
    HostCapabilities.prototype.removeCapability = function (name) {
        delete this._capabilities[name];
    };
    HostCapabilities.prototype.clear = function () {
        this._capabilities = {};
    };
    HostCapabilities.prototype.hasCapability = function (name, version) {
        if (this._capabilities.hasOwnProperty(name)) {
            if (version == "*" || this._capabilities[name] == "*") {
                return true;
            }
            return version.compareTo(this._capabilities[name]) <= 0;
        }
        return false;
    };
    HostCapabilities.prototype.areAllMet = function (hostCapabilities) {
        for (var capabilityName in this._capabilities) {
            if (!hostCapabilities.hasCapability(capabilityName, this._capabilities[capabilityName])) {
                return false;
            }
        }
        return true;
    };
    return HostCapabilities;
}(serialization_1.SerializableObject));
exports.HostCapabilities = HostCapabilities;
//# sourceMappingURL=host-capabilities.js.map

/***/ }),

/***/ "../adaptivecards/lib/host-config.js":
/*!*******************************************!*\
  !*** ../adaptivecards/lib/host-config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js");
var Utils = __webpack_require__(/*! ./utils */ "../adaptivecards/lib/utils.js");
var Shared = __webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js");
var host_capabilities_1 = __webpack_require__(/*! ./host-capabilities */ "../adaptivecards/lib/host-capabilities.js");
function parseHostConfigEnum(targetEnum, value, defaultValue) {
    if (typeof value === "string") {
        var parsedValue = Utils.parseEnum(targetEnum, value, defaultValue);
        return parsedValue !== undefined ? parsedValue : defaultValue;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return defaultValue;
    }
}
var ColorDefinition = /** @class */ (function () {
    function ColorDefinition(defaultColor, subtleColor) {
        this.default = "#000000";
        this.subtle = "#666666";
        if (defaultColor) {
            this.default = defaultColor;
        }
        if (subtleColor) {
            this.subtle = subtleColor;
        }
    }
    ColorDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.default = obj["default"] || this.default;
            this.subtle = obj["subtle"] || this.subtle;
        }
    };
    return ColorDefinition;
}());
exports.ColorDefinition = ColorDefinition;
var TextColorDefinition = /** @class */ (function (_super) {
    __extends(TextColorDefinition, _super);
    function TextColorDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.highlightColors = new ColorDefinition("#22000000", "#11000000");
        return _this;
    }
    TextColorDefinition.prototype.parse = function (obj) {
        _super.prototype.parse.call(this, obj);
        if (obj) {
            this.highlightColors.parse(obj["highlightColors"]);
        }
    };
    return TextColorDefinition;
}(ColorDefinition));
exports.TextColorDefinition = TextColorDefinition;
var AdaptiveCardConfig = /** @class */ (function () {
    function AdaptiveCardConfig(obj) {
        this.allowCustomStyle = false;
        if (obj) {
            this.allowCustomStyle = obj["allowCustomStyle"] || this.allowCustomStyle;
        }
    }
    return AdaptiveCardConfig;
}());
exports.AdaptiveCardConfig = AdaptiveCardConfig;
var ImageSetConfig = /** @class */ (function () {
    function ImageSetConfig(obj) {
        this.imageSize = Enums.Size.Medium;
        this.maxImageHeight = 100;
        if (obj) {
            this.imageSize = obj["imageSize"] != null ? obj["imageSize"] : this.imageSize;
            this.maxImageHeight = Utils.parseNumber(obj["maxImageHeight"], 100);
        }
    }
    ImageSetConfig.prototype.toJSON = function () {
        return {
            imageSize: Enums.Size[this.imageSize],
            maxImageHeight: this.maxImageHeight
        };
    };
    return ImageSetConfig;
}());
exports.ImageSetConfig = ImageSetConfig;
var MediaConfig = /** @class */ (function () {
    function MediaConfig(obj) {
        this.allowInlinePlayback = true;
        if (obj) {
            this.defaultPoster = obj["defaultPoster"];
            this.allowInlinePlayback = obj["allowInlinePlayback"] || this.allowInlinePlayback;
        }
    }
    MediaConfig.prototype.toJSON = function () {
        return {
            defaultPoster: this.defaultPoster,
            allowInlinePlayback: this.allowInlinePlayback
        };
    };
    return MediaConfig;
}());
exports.MediaConfig = MediaConfig;
var FactTextDefinition = /** @class */ (function () {
    function FactTextDefinition(obj) {
        this.size = Enums.TextSize.Default;
        this.color = Enums.TextColor.Default;
        this.isSubtle = false;
        this.weight = Enums.TextWeight.Default;
        this.wrap = true;
        if (obj) {
            this.size = parseHostConfigEnum(Enums.TextSize, obj["size"], Enums.TextSize.Default);
            this.color = parseHostConfigEnum(Enums.TextColor, obj["color"], Enums.TextColor.Default);
            this.isSubtle = obj["isSubtle"] || this.isSubtle;
            this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], this.getDefaultWeight());
            this.wrap = obj["wrap"] != null ? obj["wrap"] : this.wrap;
        }
    }
    ;
    FactTextDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Default;
    };
    FactTextDefinition.prototype.toJSON = function () {
        return {
            size: Enums.TextSize[this.size],
            color: Enums.TextColor[this.color],
            isSubtle: this.isSubtle,
            weight: Enums.TextWeight[this.weight],
            wrap: this.wrap
        };
    };
    return FactTextDefinition;
}());
exports.FactTextDefinition = FactTextDefinition;
var FactTitleDefinition = /** @class */ (function (_super) {
    __extends(FactTitleDefinition, _super);
    function FactTitleDefinition(obj) {
        var _this = _super.call(this, obj) || this;
        _this.maxWidth = 150;
        _this.weight = Enums.TextWeight.Bolder;
        if (obj) {
            _this.maxWidth = obj["maxWidth"] != null ? obj["maxWidth"] : _this.maxWidth;
            _this.weight = parseHostConfigEnum(Enums.TextWeight, obj["weight"], Enums.TextWeight.Bolder);
        }
        return _this;
    }
    FactTitleDefinition.prototype.getDefaultWeight = function () {
        return Enums.TextWeight.Bolder;
    };
    return FactTitleDefinition;
}(FactTextDefinition));
exports.FactTitleDefinition = FactTitleDefinition;
var FactSetConfig = /** @class */ (function () {
    function FactSetConfig(obj) {
        this.title = new FactTitleDefinition();
        this.value = new FactTextDefinition();
        this.spacing = 10;
        if (obj) {
            this.title = new FactTitleDefinition(obj["title"]);
            this.value = new FactTextDefinition(obj["value"]);
            this.spacing = obj.spacing && obj.spacing != null ? obj.spacing && obj.spacing : this.spacing;
        }
    }
    return FactSetConfig;
}());
exports.FactSetConfig = FactSetConfig;
var ShowCardActionConfig = /** @class */ (function () {
    function ShowCardActionConfig(obj) {
        this.actionMode = Enums.ShowCardActionMode.Inline;
        this.inlineTopMargin = 16;
        this.style = Enums.ContainerStyle.Emphasis;
        if (obj) {
            this.actionMode = parseHostConfigEnum(Enums.ShowCardActionMode, obj["actionMode"], Enums.ShowCardActionMode.Inline);
            this.inlineTopMargin = obj["inlineTopMargin"] != null ? obj["inlineTopMargin"] : this.inlineTopMargin;
            this.style = obj["style"] && typeof obj["style"] === "string" ? obj["style"] : Enums.ContainerStyle.Emphasis;
        }
    }
    ShowCardActionConfig.prototype.toJSON = function () {
        return {
            actionMode: Enums.ShowCardActionMode[this.actionMode],
            inlineTopMargin: this.inlineTopMargin,
            style: this.style
        };
    };
    return ShowCardActionConfig;
}());
exports.ShowCardActionConfig = ShowCardActionConfig;
var ActionsConfig = /** @class */ (function () {
    function ActionsConfig(obj) {
        this.maxActions = 5;
        this.spacing = Enums.Spacing.Default;
        this.buttonSpacing = 20;
        this.showCard = new ShowCardActionConfig();
        this.preExpandSingleShowCardAction = false;
        this.actionsOrientation = Enums.Orientation.Horizontal;
        this.actionAlignment = Enums.ActionAlignment.Left;
        this.iconPlacement = Enums.ActionIconPlacement.LeftOfTitle;
        this.allowTitleToWrap = false;
        this.iconSize = 16;
        if (obj) {
            this.maxActions = obj["maxActions"] != null ? obj["maxActions"] : this.maxActions;
            this.spacing = parseHostConfigEnum(Enums.Spacing, obj.spacing && obj.spacing, Enums.Spacing.Default);
            this.buttonSpacing = obj["buttonSpacing"] != null ? obj["buttonSpacing"] : this.buttonSpacing;
            this.showCard = new ShowCardActionConfig(obj["showCard"]);
            this.preExpandSingleShowCardAction = Utils.parseBool(obj["preExpandSingleShowCardAction"], false);
            this.actionsOrientation = parseHostConfigEnum(Enums.Orientation, obj["actionsOrientation"], Enums.Orientation.Horizontal);
            this.actionAlignment = parseHostConfigEnum(Enums.ActionAlignment, obj["actionAlignment"], Enums.ActionAlignment.Left);
            this.iconPlacement = parseHostConfigEnum(Enums.ActionIconPlacement, obj["iconPlacement"], Enums.ActionIconPlacement.LeftOfTitle);
            this.allowTitleToWrap = obj["allowTitleToWrap"] != null ? obj["allowTitleToWrap"] : this.allowTitleToWrap;
            try {
                var sizeAndUnit = Shared.SizeAndUnit.parse(obj["iconSize"]);
                if (sizeAndUnit.unit == Enums.SizeUnit.Pixel) {
                    this.iconSize = sizeAndUnit.physicalSize;
                }
            }
            catch (e) {
                // Swallow this, keep default icon size
            }
        }
    }
    ActionsConfig.prototype.toJSON = function () {
        return {
            maxActions: this.maxActions,
            spacing: Enums.Spacing[this.spacing],
            buttonSpacing: this.buttonSpacing,
            showCard: this.showCard,
            preExpandSingleShowCardAction: this.preExpandSingleShowCardAction,
            actionsOrientation: Enums.Orientation[this.actionsOrientation],
            actionAlignment: Enums.ActionAlignment[this.actionAlignment]
        };
    };
    return ActionsConfig;
}());
exports.ActionsConfig = ActionsConfig;
var ColorSetDefinition = /** @class */ (function () {
    function ColorSetDefinition(obj) {
        this.default = new TextColorDefinition();
        this.dark = new TextColorDefinition();
        this.light = new TextColorDefinition();
        this.accent = new TextColorDefinition();
        this.good = new TextColorDefinition();
        this.warning = new TextColorDefinition();
        this.attention = new TextColorDefinition();
        this.parse(obj);
    }
    ColorSetDefinition.prototype.parseSingleColor = function (obj, propertyName) {
        if (obj) {
            this[propertyName].parse(obj[propertyName]);
        }
    };
    ColorSetDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.parseSingleColor(obj, "default");
            this.parseSingleColor(obj, "dark");
            this.parseSingleColor(obj, "light");
            this.parseSingleColor(obj, "accent");
            this.parseSingleColor(obj, "good");
            this.parseSingleColor(obj, "warning");
            this.parseSingleColor(obj, "attention");
        }
    };
    return ColorSetDefinition;
}());
exports.ColorSetDefinition = ColorSetDefinition;
var ContainerStyleDefinition = /** @class */ (function () {
    function ContainerStyleDefinition(obj) {
        this.foregroundColors = new ColorSetDefinition({
            "default": { default: "#333333", subtle: "#EE333333" },
            "dark": { default: "#000000", subtle: "#66000000" },
            "light": { default: "#FFFFFF", subtle: "#33000000" },
            "accent": { default: "#2E89FC", subtle: "#882E89FC" },
            "good": { default: "#54A254", subtle: "#DD54A254" },
            "warning": { default: "#E69500", subtle: "#DDE69500" },
            "attention": { default: "#CC3300", subtle: "#DDCC3300" }
        });
        this.parse(obj);
    }
    ContainerStyleDefinition.prototype.parse = function (obj) {
        if (obj) {
            this.backgroundColor = obj["backgroundColor"];
            this.foregroundColors.parse(obj["foregroundColors"]);
            this.highlightBackgroundColor = obj["highlightBackgroundColor"];
            this.highlightForegroundColor = obj["highlightForegroundColor"];
        }
    };
    Object.defineProperty(ContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleDefinition;
}());
exports.ContainerStyleDefinition = ContainerStyleDefinition;
var BuiltInContainerStyleDefinition = /** @class */ (function (_super) {
    __extends(BuiltInContainerStyleDefinition, _super);
    function BuiltInContainerStyleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuiltInContainerStyleDefinition.prototype, "isBuiltIn", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return BuiltInContainerStyleDefinition;
}(ContainerStyleDefinition));
var ContainerStyleSet = /** @class */ (function () {
    function ContainerStyleSet(obj) {
        this._allStyles = {};
        this._allStyles[Enums.ContainerStyle.Default] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Emphasis] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Accent] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Good] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Attention] = new BuiltInContainerStyleDefinition();
        this._allStyles[Enums.ContainerStyle.Warning] = new BuiltInContainerStyleDefinition();
        if (obj) {
            this._allStyles[Enums.ContainerStyle.Default].parse(obj[Enums.ContainerStyle.Default]);
            this._allStyles[Enums.ContainerStyle.Emphasis].parse(obj[Enums.ContainerStyle.Emphasis]);
            this._allStyles[Enums.ContainerStyle.Accent].parse(obj[Enums.ContainerStyle.Accent]);
            this._allStyles[Enums.ContainerStyle.Good].parse(obj[Enums.ContainerStyle.Good]);
            this._allStyles[Enums.ContainerStyle.Attention].parse(obj[Enums.ContainerStyle.Attention]);
            this._allStyles[Enums.ContainerStyle.Warning].parse(obj[Enums.ContainerStyle.Warning]);
            var customStyleArray = obj["customStyles"];
            if (customStyleArray && Array.isArray(customStyleArray)) {
                for (var _i = 0, customStyleArray_1 = customStyleArray; _i < customStyleArray_1.length; _i++) {
                    var customStyle = customStyleArray_1[_i];
                    if (customStyle) {
                        var styleName = customStyle["name"];
                        if (styleName && typeof styleName === "string") {
                            if (this._allStyles.hasOwnProperty(styleName)) {
                                this._allStyles[styleName].parse(customStyle["style"]);
                            }
                            else {
                                this._allStyles[styleName] = new ContainerStyleDefinition(customStyle["style"]);
                            }
                        }
                    }
                }
            }
        }
    }
    ContainerStyleSet.prototype.toJSON = function () {
        var _this = this;
        var customStyleArray = [];
        Object.keys(this._allStyles).forEach(function (key) {
            if (!_this._allStyles[key].isBuiltIn) {
                customStyleArray.push({
                    name: key,
                    style: _this._allStyles[key]
                });
            }
        });
        var result = {
            default: this.default,
            emphasis: this.emphasis
        };
        if (customStyleArray.length > 0) {
            result.customStyles = customStyleArray;
        }
        return result;
    };
    ContainerStyleSet.prototype.getStyleByName = function (name, defaultValue) {
        if (name && this._allStyles.hasOwnProperty(name)) {
            return this._allStyles[name];
        }
        else {
            return defaultValue ? defaultValue : this._allStyles[Enums.ContainerStyle.Default];
        }
    };
    Object.defineProperty(ContainerStyleSet.prototype, "default", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Default];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerStyleSet.prototype, "emphasis", {
        get: function () {
            return this._allStyles[Enums.ContainerStyle.Emphasis];
        },
        enumerable: true,
        configurable: true
    });
    return ContainerStyleSet;
}());
exports.ContainerStyleSet = ContainerStyleSet;
var FontTypeDefinition = /** @class */ (function () {
    function FontTypeDefinition(fontFamily) {
        this.fontFamily = "Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif";
        this.fontSizes = {
            small: 12,
            default: 14,
            medium: 17,
            large: 21,
            extraLarge: 26
        };
        this.fontWeights = {
            lighter: 200,
            default: 400,
            bolder: 600
        };
        if (fontFamily) {
            this.fontFamily = fontFamily;
        }
    }
    FontTypeDefinition.prototype.parse = function (obj) {
        this.fontFamily = obj["fontFamily"] || this.fontFamily;
        this.fontSizes = {
            small: obj.fontSizes && obj.fontSizes["small"] || this.fontSizes.small,
            default: obj.fontSizes && obj.fontSizes["default"] || this.fontSizes.default,
            medium: obj.fontSizes && obj.fontSizes["medium"] || this.fontSizes.medium,
            large: obj.fontSizes && obj.fontSizes["large"] || this.fontSizes.large,
            extraLarge: obj.fontSizes && obj.fontSizes["extraLarge"] || this.fontSizes.extraLarge
        };
        this.fontWeights = {
            lighter: obj.fontWeights && obj.fontWeights["lighter"] || this.fontWeights.lighter,
            default: obj.fontWeights && obj.fontWeights["default"] || this.fontWeights.default,
            bolder: obj.fontWeights && obj.fontWeights["bolder"] || this.fontWeights.bolder
        };
    };
    FontTypeDefinition.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
    return FontTypeDefinition;
}());
exports.FontTypeDefinition = FontTypeDefinition;
var FontTypeSet = /** @class */ (function () {
    function FontTypeSet(obj) {
        this.default = new FontTypeDefinition();
        this.monospace = new FontTypeDefinition("'Courier New', Courier, monospace");
        if (obj) {
            this.default.parse(obj["default"]);
            this.monospace.parse(obj["monospace"]);
        }
    }
    FontTypeSet.prototype.getStyleDefinition = function (style) {
        switch (style) {
            case Enums.FontType.Monospace:
                return this.monospace;
            case Enums.FontType.Default:
            default:
                return this.default;
        }
    };
    return FontTypeSet;
}());
exports.FontTypeSet = FontTypeSet;
var HostConfig = /** @class */ (function () {
    function HostConfig(obj) {
        this.hostCapabilities = new host_capabilities_1.HostCapabilities();
        this.choiceSetInputValueSeparator = ",";
        this.supportsInteractivity = true;
        this.spacing = {
            small: 3,
            default: 8,
            medium: 20,
            large: 30,
            extraLarge: 40,
            padding: 15
        };
        this.separator = {
            lineThickness: 1,
            lineColor: "#EEEEEE"
        };
        this.imageSizes = {
            small: 40,
            medium: 80,
            large: 160
        };
        this.containerStyles = new ContainerStyleSet();
        this.actions = new ActionsConfig();
        this.adaptiveCard = new AdaptiveCardConfig();
        this.imageSet = new ImageSetConfig();
        this.media = new MediaConfig();
        this.factSet = new FactSetConfig();
        this.alwaysAllowBleed = false;
        if (obj) {
            if (typeof obj === "string" || obj instanceof String) {
                obj = JSON.parse(obj);
            }
            this.choiceSetInputValueSeparator = (obj && typeof obj["choiceSetInputValueSeparator"] === "string") ? obj["choiceSetInputValueSeparator"] : this.choiceSetInputValueSeparator;
            this.supportsInteractivity = (obj && typeof obj["supportsInteractivity"] === "boolean") ? obj["supportsInteractivity"] : this.supportsInteractivity;
            this._legacyFontType = new FontTypeDefinition();
            this._legacyFontType.parse(obj);
            if (obj.fontTypes) {
                this.fontTypes = new FontTypeSet(obj.fontTypes);
            }
            if (obj.lineHeights) {
                this.lineHeights = {
                    small: obj.lineHeights["small"],
                    default: obj.lineHeights["default"],
                    medium: obj.lineHeights["medium"],
                    large: obj.lineHeights["large"],
                    extraLarge: obj.lineHeights["extraLarge"]
                };
            }
            ;
            this.imageSizes = {
                small: obj.imageSizes && obj.imageSizes["small"] || this.imageSizes.small,
                medium: obj.imageSizes && obj.imageSizes["medium"] || this.imageSizes.medium,
                large: obj.imageSizes && obj.imageSizes["large"] || this.imageSizes.large,
            };
            this.containerStyles = new ContainerStyleSet(obj["containerStyles"]);
            this.spacing = {
                small: obj.spacing && obj.spacing["small"] || this.spacing.small,
                default: obj.spacing && obj.spacing["default"] || this.spacing.default,
                medium: obj.spacing && obj.spacing["medium"] || this.spacing.medium,
                large: obj.spacing && obj.spacing["large"] || this.spacing.large,
                extraLarge: obj.spacing && obj.spacing["extraLarge"] || this.spacing.extraLarge,
                padding: obj.spacing && obj.spacing["padding"] || this.spacing.padding
            };
            this.separator = {
                lineThickness: obj.separator && obj.separator["lineThickness"] || this.separator.lineThickness,
                lineColor: obj.separator && obj.separator["lineColor"] || this.separator.lineColor
            };
            this.actions = new ActionsConfig(obj.actions || this.actions);
            this.adaptiveCard = new AdaptiveCardConfig(obj.adaptiveCard || this.adaptiveCard);
            this.imageSet = new ImageSetConfig(obj["imageSet"]);
            this.factSet = new FactSetConfig(obj["factSet"]);
        }
    }
    HostConfig.prototype.getFontTypeDefinition = function (style) {
        if (this.fontTypes) {
            return this.fontTypes.getStyleDefinition(style);
        }
        else {
            return style == Enums.FontType.Monospace ? FontTypeDefinition.monospace : this._legacyFontType;
        }
    };
    HostConfig.prototype.getEffectiveSpacing = function (spacing) {
        switch (spacing) {
            case Enums.Spacing.Small:
                return this.spacing.small;
            case Enums.Spacing.Default:
                return this.spacing.default;
            case Enums.Spacing.Medium:
                return this.spacing.medium;
            case Enums.Spacing.Large:
                return this.spacing.large;
            case Enums.Spacing.ExtraLarge:
                return this.spacing.extraLarge;
            case Enums.Spacing.Padding:
                return this.spacing.padding;
            default:
                return 0;
        }
    };
    HostConfig.prototype.paddingDefinitionToSpacingDefinition = function (paddingDefinition) {
        return new Shared.SpacingDefinition(this.getEffectiveSpacing(paddingDefinition.top), this.getEffectiveSpacing(paddingDefinition.right), this.getEffectiveSpacing(paddingDefinition.bottom), this.getEffectiveSpacing(paddingDefinition.left));
    };
    HostConfig.prototype.makeCssClassNames = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
            var className = classNames_1[_a];
            result.push((this.cssClassNamePrefix ? this.cssClassNamePrefix + "-" : "") + className);
        }
        return result;
    };
    HostConfig.prototype.makeCssClassName = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var result = this.makeCssClassNames.apply(this, classNames).join(" ");
        return result ? result : "";
    };
    Object.defineProperty(HostConfig.prototype, "fontFamily", {
        get: function () {
            return this._legacyFontType.fontFamily;
        },
        set: function (value) {
            this._legacyFontType.fontFamily = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontSizes", {
        get: function () {
            return this._legacyFontType.fontSizes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HostConfig.prototype, "fontWeights", {
        get: function () {
            return this._legacyFontType.fontWeights;
        },
        enumerable: true,
        configurable: true
    });
    return HostConfig;
}());
exports.HostConfig = HostConfig;
exports.defaultHostConfig = new HostConfig({
    supportsInteractivity: true,
    spacing: {
        small: 10,
        default: 20,
        medium: 30,
        large: 40,
        extraLarge: 50,
        padding: 20
    },
    separator: {
        lineThickness: 1,
        lineColor: "#EEEEEE"
    },
    fontTypes: {
        default: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        },
        monospace: {
            fontFamily: "'Courier New', Courier, monospace",
            fontSizes: {
                small: 12,
                default: 14,
                medium: 17,
                large: 21,
                extraLarge: 26
            },
            fontWeights: {
                lighter: 200,
                default: 400,
                bolder: 600
            }
        }
    },
    imageSizes: {
        small: 40,
        medium: 80,
        large: 160
    },
    containerStyles: {
        default: {
            backgroundColor: "#FFFFFF",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        emphasis: {
            backgroundColor: "#08000000",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        accent: {
            backgroundColor: "#C7DEF9",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        good: {
            backgroundColor: "#CCFFCC",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        attention: {
            backgroundColor: "#FFC5B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        },
        warning: {
            backgroundColor: "#FFE2B2",
            foregroundColors: {
                default: {
                    default: "#333333",
                    subtle: "#EE333333"
                },
                dark: {
                    default: "#000000",
                    subtle: "#66000000"
                },
                light: {
                    default: "#FFFFFF",
                    subtle: "#33000000"
                },
                accent: {
                    default: "#2E89FC",
                    subtle: "#882E89FC"
                },
                attention: {
                    default: "#cc3300",
                    subtle: "#DDcc3300"
                },
                good: {
                    default: "#54a254",
                    subtle: "#DD54a254"
                },
                warning: {
                    default: "#e69500",
                    subtle: "#DDe69500"
                }
            }
        }
    },
    actions: {
        maxActions: 5,
        spacing: Enums.Spacing.Default,
        buttonSpacing: 10,
        showCard: {
            actionMode: Enums.ShowCardActionMode.Inline,
            inlineTopMargin: 16
        },
        actionsOrientation: Enums.Orientation.Horizontal,
        actionAlignment: Enums.ActionAlignment.Left
    },
    adaptiveCard: {
        allowCustomStyle: false
    },
    imageSet: {
        imageSize: Enums.Size.Medium,
        maxImageHeight: 100
    },
    factSet: {
        title: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Bolder,
            wrap: true,
            maxWidth: 150,
        },
        value: {
            color: Enums.TextColor.Default,
            size: Enums.TextSize.Default,
            isSubtle: false,
            weight: Enums.TextWeight.Default,
            wrap: true,
        },
        spacing: 10
    }
});
//# sourceMappingURL=host-config.js.map

/***/ }),

/***/ "../adaptivecards/lib/registry.js":
/*!****************************************!*\
  !*** ../adaptivecards/lib/registry.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var serialization_1 = __webpack_require__(/*! ./serialization */ "../adaptivecards/lib/serialization.js");
var CardObjectRegistry = /** @class */ (function () {
    function CardObjectRegistry() {
        this._items = {};
    }
    CardObjectRegistry.prototype.findByName = function (typeName) {
        return this._items.hasOwnProperty(typeName) ? this._items[typeName] : undefined;
    };
    CardObjectRegistry.prototype.clear = function () {
        this._items = {};
    };
    CardObjectRegistry.prototype.register = function (typeName, objectType, schemaVersion) {
        if (schemaVersion === void 0) { schemaVersion = serialization_1.Versions.v1_0; }
        var registrationInfo = this.findByName(typeName);
        if (registrationInfo !== undefined) {
            registrationInfo.objectType = objectType;
        }
        else {
            registrationInfo = {
                typeName: typeName,
                objectType: objectType,
                schemaVersion: schemaVersion
            };
        }
        this._items[typeName] = registrationInfo;
    };
    CardObjectRegistry.prototype.unregister = function (typeName) {
        delete this._items[typeName];
    };
    CardObjectRegistry.prototype.createInstance = function (typeName, targetVersion) {
        var registrationInfo = this.findByName(typeName);
        return (registrationInfo && registrationInfo.schemaVersion.compareTo(targetVersion) <= 0) ? new registrationInfo.objectType() : undefined;
    };
    CardObjectRegistry.prototype.getItemCount = function () {
        return Object.keys(this._items).length;
    };
    CardObjectRegistry.prototype.getItemAt = function (index) {
        return Object.values(this._items)[index];
    };
    return CardObjectRegistry;
}());
exports.CardObjectRegistry = CardObjectRegistry;
//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "../adaptivecards/lib/serialization.js":
/*!*********************************************!*\
  !*** ../adaptivecards/lib/serialization.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var shared_1 = __webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js");
var Utils = __webpack_require__(/*! ./utils */ "../adaptivecards/lib/utils.js");
var Enums = __webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js");
var Version = /** @class */ (function () {
    function Version(major, minor, label) {
        if (major === void 0) { major = 1; }
        if (minor === void 0) { minor = 1; }
        this._isValid = true;
        this._major = major;
        this._minor = minor;
        this._label = label;
    }
    Version.parse = function (versionString, context) {
        if (!versionString) {
            return undefined;
        }
        var result = new Version();
        result._versionString = versionString;
        var regEx = /(\d+).(\d+)/gi;
        var matches = regEx.exec(versionString);
        if (matches != null && matches.length == 3) {
            result._major = parseInt(matches[1]);
            result._minor = parseInt(matches[2]);
        }
        else {
            result._isValid = false;
        }
        if (!result._isValid) {
            context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid version string: " + result._versionString);
        }
        return result;
    };
    Version.prototype.toString = function () {
        return !this._isValid ? this._versionString : this._major + "." + this._minor;
    };
    Version.prototype.toJSON = function () {
        return this.toString();
    };
    Version.prototype.compareTo = function (otherVersion) {
        if (!this.isValid || !otherVersion.isValid) {
            throw new Error("Cannot compare invalid version.");
        }
        if (this.major > otherVersion.major) {
            return 1;
        }
        else if (this.major < otherVersion.major) {
            return -1;
        }
        else if (this.minor > otherVersion.minor) {
            return 1;
        }
        else if (this.minor < otherVersion.minor) {
            return -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "label", {
        get: function () {
            return this._label ? this._label : this.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    return Version;
}());
exports.Version = Version;
var Versions = /** @class */ (function () {
    function Versions() {
    }
    Versions.v1_0 = new Version(1, 0);
    Versions.v1_1 = new Version(1, 1);
    Versions.v1_2 = new Version(1, 2);
    Versions.latest = Versions.v1_2;
    Versions.vNext = new Version(1000, 0, "vNext");
    return Versions;
}());
exports.Versions = Versions;
function isVersionLessOrEqual(version, targetVersion) {
    if (version instanceof Version) {
        if (targetVersion instanceof Version) {
            return targetVersion.compareTo(version) >= 0;
        }
        else {
            // Target version is *
            return true;
        }
    }
    else {
        // Version is *
        return true;
    }
}
exports.isVersionLessOrEqual = isVersionLessOrEqual;
var BaseSerializationContext = /** @class */ (function () {
    function BaseSerializationContext(targetVersion) {
        if (targetVersion === void 0) { targetVersion = Versions.latest; }
        this.targetVersion = targetVersion;
        this._validationEvents = [];
    }
    BaseSerializationContext.prototype.serializeValue = function (target, propertyName, propertyValue, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeNumber = function (target, propertyName, propertyValue, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (propertyValue === null || propertyValue === undefined || propertyValue === defaultValue || isNaN(propertyValue)) {
            delete target[propertyName];
        }
        else {
            target[propertyName] = propertyValue;
        }
    };
    BaseSerializationContext.prototype.serializeEnum = function (enumType, target, propertyName, propertyValue, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        var targetValue = target[propertyName];
        var canDeleteTarget = targetValue == undefined ? true : enumType[targetValue] !== undefined;
        if (propertyValue == defaultValue) {
            if (canDeleteTarget) {
                delete target[propertyName];
            }
        }
        else {
            if (propertyValue == undefined) {
                if (canDeleteTarget) {
                    delete target[propertyName];
                }
            }
            else {
                target[propertyName] = enumType[propertyValue];
            }
        }
    };
    BaseSerializationContext.prototype.serializeArray = function (target, propertyName, propertyValue) {
        var items = [];
        if (propertyValue) {
            for (var _i = 0, propertyValue_1 = propertyValue; _i < propertyValue_1.length; _i++) {
                var item = propertyValue_1[_i];
                var serializedItem = undefined;
                if (item instanceof SerializableObject) {
                    serializedItem = item.toJSON(this);
                }
                else if (item.toJSON) {
                    serializedItem = item.toJSON();
                }
                else {
                    serializedItem = item;
                }
                if (serializedItem !== undefined) {
                    items.push(serializedItem);
                }
            }
        }
        if (items.length == 0) {
            if (target.hasOwnProperty(propertyName) && Array.isArray(target[propertyName])) {
                delete target[propertyName];
            }
        }
        else {
            this.serializeValue(target, propertyName, items);
        }
    };
    BaseSerializationContext.prototype.clearEvents = function () {
        this._validationEvents = [];
    };
    BaseSerializationContext.prototype.logEvent = function (phase, event, message, source) {
        this._validationEvents.push({
            phase: phase,
            event: event,
            message: message
        });
    };
    BaseSerializationContext.prototype.logParseEvent = function (event, message, source) {
        this.logEvent(0 /* Parse */, event, message, source);
    };
    BaseSerializationContext.prototype.getEventAt = function (index) {
        return this._validationEvents[index];
    };
    BaseSerializationContext.prototype.shouldSerialize = function (o) {
        return true;
    };
    Object.defineProperty(BaseSerializationContext.prototype, "eventCount", {
        get: function () {
            return this._validationEvents.length;
        },
        enumerable: true,
        configurable: true
    });
    return BaseSerializationContext;
}());
exports.BaseSerializationContext = BaseSerializationContext;
var SimpleSerializationContext = /** @class */ (function (_super) {
    __extends(SimpleSerializationContext, _super);
    function SimpleSerializationContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SimpleSerializationContext;
}(BaseSerializationContext));
var PropertyDefinition = /** @class */ (function () {
    function PropertyDefinition(targetVersion, name, defaultValue, onGetInitialValue) {
        this.targetVersion = targetVersion;
        this.name = name;
        this.defaultValue = defaultValue;
        this.onGetInitialValue = onGetInitialValue;
    }
    PropertyDefinition.prototype.getInternalName = function () {
        return this.name;
    };
    PropertyDefinition.prototype.parse = function (sender, source, context) {
        return source[this.name];
    };
    PropertyDefinition.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value, this.defaultValue);
    };
    return PropertyDefinition;
}());
exports.PropertyDefinition = PropertyDefinition;
var StringProperty = /** @class */ (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty(targetVersion, name, treatEmptyAsUndefined, regEx, defaultValue, onGetInitialValue) {
        if (treatEmptyAsUndefined === void 0) { treatEmptyAsUndefined = true; }
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.treatEmptyAsUndefined = treatEmptyAsUndefined;
        _this.regEx = regEx;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringProperty.prototype.parse = function (sender, source, context) {
        var parsedValue = Utils.parseString(source[this.name], this.defaultValue);
        var isUndefined = parsedValue === undefined || (parsedValue === "" && this.treatEmptyAsUndefined);
        if (!isUndefined && this.regEx !== undefined) {
            var matches = this.regEx.exec(parsedValue);
            if (!matches) {
                context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid \"" + this.name + "\" value \"" + parsedValue + "\"", sender);
                return undefined;
            }
        }
        return parsedValue;
    };
    StringProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value === "" && this.treatEmptyAsUndefined ? undefined : value, this.defaultValue);
    };
    return StringProperty;
}(PropertyDefinition));
exports.StringProperty = StringProperty;
var BoolProperty = /** @class */ (function (_super) {
    __extends(BoolProperty, _super);
    function BoolProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolProperty.prototype.parse = function (sender, source, context) {
        return Utils.parseBool(source[this.name], this.defaultValue);
    };
    BoolProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value, this.defaultValue);
    };
    return BoolProperty;
}(PropertyDefinition));
exports.BoolProperty = BoolProperty;
var NumProperty = /** @class */ (function (_super) {
    __extends(NumProperty, _super);
    function NumProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumProperty.prototype.parse = function (sender, source, context) {
        return Utils.parseNumber(source[this.name], this.defaultValue);
    };
    NumProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeNumber(target, this.name, value, this.defaultValue);
    };
    return NumProperty;
}(PropertyDefinition));
exports.NumProperty = NumProperty;
var PixelSizeProperty = /** @class */ (function (_super) {
    __extends(PixelSizeProperty, _super);
    function PixelSizeProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PixelSizeProperty.prototype.parse = function (sender, source, context) {
        var result = undefined;
        var value = source[this.name];
        if (typeof value === "string") {
            var isValid = false;
            try {
                var size = shared_1.SizeAndUnit.parse(value, true);
                if (size.unit == Enums.SizeUnit.Pixel) {
                    result = size.physicalSize;
                    isValid = true;
                }
            }
            catch (_a) {
                // Do nothing. A parse error is emitted below
            }
            if (!isValid) {
                context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid \"minHeight\" value: " + source[this.name], sender);
            }
        }
        return result;
    };
    PixelSizeProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, typeof value === "number" && !isNaN(value) ? value + "px" : undefined);
    };
    return PixelSizeProperty;
}(PropertyDefinition));
exports.PixelSizeProperty = PixelSizeProperty;
var StringArrayProperty = /** @class */ (function (_super) {
    __extends(StringArrayProperty, _super);
    function StringArrayProperty(targetVersion, name, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    StringArrayProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined || !Array.isArray(sourceValue)) {
            return this.defaultValue;
        }
        var result = [];
        for (var _i = 0, sourceValue_1 = sourceValue; _i < sourceValue_1.length; _i++) {
            var value = sourceValue_1[_i];
            if (typeof value === "string") {
                result.push(value);
            }
            else {
                context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid array value \"" + value + "\" of type \"" + typeof value + "\" ignored for \"" + this.name + "\".", sender);
            }
        }
        return result;
    };
    StringArrayProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return StringArrayProperty;
}(PropertyDefinition));
exports.StringArrayProperty = StringArrayProperty;
var ValueSetProperty = /** @class */ (function (_super) {
    __extends(ValueSetProperty, _super);
    function ValueSetProperty(targetVersion, name, values, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.values = values;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        return _this;
    }
    ValueSetProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.defaultValue;
        }
        if (typeof sourceValue === "string") {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (sourceValue.toLowerCase() === versionedValue.value.toLowerCase()) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return versionedValue.value;
                    }
                    else {
                        context.logParseEvent(6 /* InvalidPropertyValue */, "\"" + this.name + "\" value \"" + sourceValue + "\" is supported in version " + targetVersion.toString() + ", but you are using version " + context.targetVersion.toString(), sender);
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid \"" + this.name + "\" value \"" + sourceValue + "\"", sender);
        return this.defaultValue;
    };
    ValueSetProperty.prototype.toJSON = function (sender, target, value, context) {
        var valueFound = false;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var versionedValue = _a[_i];
            if (versionedValue.value === value) {
                var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                if (targetVersion.compareTo(context.targetVersion) <= 0) {
                    valueFound = true;
                    break;
                }
                else {
                    context.logEvent(1 /* ToJSON */, 6 /* InvalidPropertyValue */, "\"" + this.name + "\" value \"" + value + "\" is supported in version " + targetVersion.toString() + ", but you are using version " + context.targetVersion.toString(), sender);
                }
            }
        }
        context.serializeValue(target, this.name, valueFound ? value : undefined, this.defaultValue);
    };
    return ValueSetProperty;
}(PropertyDefinition));
exports.ValueSetProperty = ValueSetProperty;
var EnumProperty = /** @class */ (function (_super) {
    __extends(EnumProperty, _super);
    function EnumProperty(targetVersion, name, enumType, defaultValue, values, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.enumType = enumType;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        _this._values = [];
        if (!values) {
            for (var key in enumType) {
                var keyAsNumber = parseInt(key, 10);
                if (keyAsNumber >= 0) {
                    _this._values.push({ value: keyAsNumber });
                }
            }
        }
        else {
            _this._values = values;
        }
        return _this;
    }
    EnumProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (typeof sourceValue !== "string") {
            return this.defaultValue;
        }
        var enumValue = Utils.getEnumValueByName(this.enumType, sourceValue);
        if (enumValue !== undefined) {
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === enumValue) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        return enumValue;
                    }
                    else {
                        context.logParseEvent(6 /* InvalidPropertyValue */, "\"" + this.name + "\" value \"" + sourceValue + "\" is supported in version " + targetVersion.toString() + ", but you are using version " + context.targetVersion.toString(), sender);
                        return this.defaultValue;
                    }
                }
            }
        }
        context.logParseEvent(6 /* InvalidPropertyValue */, "Invalid \"" + this.name + "\" value \"" + sourceValue + "\"", sender);
        return this.defaultValue;
    };
    EnumProperty.prototype.toJSON = function (sender, target, value, context) {
        if (value !== undefined) {
            var valueFound = false;
            for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                var versionedValue = _a[_i];
                if (versionedValue.value === value) {
                    var targetVersion = versionedValue.targetVersion ? versionedValue.targetVersion : this.targetVersion;
                    if (targetVersion.compareTo(context.targetVersion) <= 0) {
                        valueFound = true;
                        break;
                    }
                    else {
                        context.logEvent(1 /* ToJSON */, 6 /* InvalidPropertyValue */, "Invalid \"" + this.name + "\" value \"" + value + "\"", sender);
                    }
                }
            }
            if (valueFound) {
                context.serializeEnum(this.enumType, target, this.name, value, this.defaultValue);
            }
        }
    };
    Object.defineProperty(EnumProperty.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    return EnumProperty;
}(PropertyDefinition));
exports.EnumProperty = EnumProperty;
var SerializableObjectProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectProperty, _super);
    function SerializableObjectProperty(targetVersion, name, objectType, nullable) {
        if (nullable === void 0) { nullable = false; }
        var _this = _super.call(this, targetVersion, name, undefined, function (sender) { return _this.nullable ? undefined : new _this.objectType(); }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.nullable = nullable;
        return _this;
    }
    SerializableObjectProperty.prototype.parse = function (sender, source, context) {
        var sourceValue = source[this.name];
        if (sourceValue === undefined) {
            return this.onGetInitialValue ? this.onGetInitialValue(sender) : this.defaultValue;
        }
        var result = new this.objectType();
        result.parse(sourceValue, context);
        return result;
    };
    SerializableObjectProperty.prototype.toJSON = function (sender, target, value, context) {
        var serializedValue = value !== undefined ? value.toJSON(context) : value;
        if (typeof serializedValue === "object" && Object.keys(serializedValue).length === 0) {
            serializedValue = undefined;
        }
        _super.prototype.toJSON.call(this, sender, target, serializedValue, context);
    };
    return SerializableObjectProperty;
}(PropertyDefinition));
exports.SerializableObjectProperty = SerializableObjectProperty;
var SerializableObjectCollectionProperty = /** @class */ (function (_super) {
    __extends(SerializableObjectCollectionProperty, _super);
    function SerializableObjectCollectionProperty(targetVersion, name, objectType, onItemAdded) {
        var _this = _super.call(this, targetVersion, name, undefined, function (sender) { return []; }) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.objectType = objectType;
        _this.onItemAdded = onItemAdded;
        return _this;
    }
    SerializableObjectCollectionProperty.prototype.parse = function (sender, source, context) {
        var result = [];
        var sourceCollection = source[this.name];
        if (Array.isArray(sourceCollection)) {
            for (var _i = 0, sourceCollection_1 = sourceCollection; _i < sourceCollection_1.length; _i++) {
                var sourceItem = sourceCollection_1[_i];
                var item = new this.objectType();
                item.parse(sourceItem, context);
                result.push(item);
                if (this.onItemAdded) {
                    this.onItemAdded(sender, item);
                }
            }
        }
        return result.length > 0 ? result : (this.onGetInitialValue ? this.onGetInitialValue(sender) : undefined);
    };
    SerializableObjectCollectionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeArray(target, this.name, value);
    };
    return SerializableObjectCollectionProperty;
}(PropertyDefinition));
exports.SerializableObjectCollectionProperty = SerializableObjectCollectionProperty;
var CustomProperty = /** @class */ (function (_super) {
    __extends(CustomProperty, _super);
    function CustomProperty(targetVersion, name, onParse, onToJSON, defaultValue, onGetInitialValue) {
        var _this = _super.call(this, targetVersion, name, defaultValue, onGetInitialValue) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        _this.onParse = onParse;
        _this.onToJSON = onToJSON;
        _this.defaultValue = defaultValue;
        _this.onGetInitialValue = onGetInitialValue;
        if (!_this.onParse) {
            throw new Error("CustomPropertyDefinition instances must have an onParse handler.");
        }
        if (!_this.onToJSON) {
            throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");
        }
        return _this;
    }
    CustomProperty.prototype.parse = function (sender, source, context) {
        return this.onParse(sender, this, source, context);
    };
    CustomProperty.prototype.toJSON = function (sender, target, value, context) {
        this.onToJSON(sender, this, target, value, context);
    };
    return CustomProperty;
}(PropertyDefinition));
exports.CustomProperty = CustomProperty;
var SerializableObjectSchema = /** @class */ (function () {
    function SerializableObjectSchema() {
        this._properties = [];
    }
    SerializableObjectSchema.prototype.indexOf = function (property) {
        for (var i = 0; i < this._properties.length; i++) {
            if (this._properties[i] === property) {
                return i;
            }
        }
        return -1;
    };
    SerializableObjectSchema.prototype.add = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var i = 0; i < properties.length; i++) {
            if (this.indexOf(properties[i]) === -1) {
                this._properties.push(properties[i]);
            }
        }
    };
    SerializableObjectSchema.prototype.remove = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var property_1 = properties_1[_a];
            while (true) {
                var index = this.indexOf(property_1);
                if (index >= 0) {
                    this._properties.splice(index, 1);
                }
                else {
                    break;
                }
            }
        }
    };
    SerializableObjectSchema.prototype.getItemAt = function (index) {
        return this._properties[index];
    };
    SerializableObjectSchema.prototype.getCount = function () {
        return this._properties.length;
    };
    return SerializableObjectSchema;
}());
exports.SerializableObjectSchema = SerializableObjectSchema;
// This is a decorator function, used to map SerializableObject descendant class members to
// schema properties
function property(property) {
    return function (target, propertyKey) {
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (!descriptor.get && !descriptor.set) {
            descriptor.get = function () { return this.getValue(property); };
            descriptor.set = function (value) { this.setValue(property, value); };
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}
exports.property = property;
var SerializableObject = /** @class */ (function () {
    function SerializableObject() {
        this._propertyBag = {};
        this._rawProperties = {};
        this.maxVersion = Versions.latest;
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_2 = s.getItemAt(i);
            if (property_2.onGetInitialValue) {
                this.setValue(property_2, property_2.onGetInitialValue(this));
            }
        }
    }
    SerializableObject.prototype.populateSchema = function (schema) {
        var ctor = this.constructor;
        for (var propertyName in ctor) {
            try {
                var propertyValue = ctor[propertyName];
                if (propertyValue instanceof PropertyDefinition) {
                    schema.add(propertyValue);
                }
            }
            catch (_a) {
                // If a property happens to have a getter function and
                // it throws an exception, we need to catch it here
            }
        }
        if (SerializableObject.onRegisterCustomProperties) {
            SerializableObject.onRegisterCustomProperties(this, schema);
        }
    };
    SerializableObject.prototype.getValue = function (property) {
        return this._propertyBag.hasOwnProperty(property.getInternalName()) ? this._propertyBag[property.getInternalName()] : property.defaultValue;
    };
    SerializableObject.prototype.setValue = function (property, value) {
        if (value === undefined || value === null) {
            delete this._propertyBag[property.getInternalName()];
        }
        else {
            this._propertyBag[property.getInternalName()] = value;
        }
    };
    SerializableObject.prototype.internalParse = function (source, context) {
        this._propertyBag = {};
        this._rawProperties = shared_1.GlobalSettings.enableFullJsonRoundTrip ? (source ? source : {}) : {};
        if (source) {
            var s = this.getSchema();
            for (var i = 0; i < s.getCount(); i++) {
                var property_3 = s.getItemAt(i);
                var propertyValue = property_3.onGetInitialValue ? property_3.onGetInitialValue(this) : undefined;
                if (source.hasOwnProperty(property_3.name)) {
                    if (property_3.targetVersion.compareTo(context.targetVersion) <= 0) {
                        propertyValue = property_3.parse(this, source, context);
                    }
                    else {
                        context.logParseEvent(14 /* UnsupportedProperty */, "Property \"" + property_3.name + "\" is supported in version " + property_3.targetVersion.toString() + ", but you are using version " + context.targetVersion.toString(), this);
                    }
                }
                this.setValue(property_3, propertyValue);
            }
        }
        else {
            this.resetDefaultValues();
        }
    };
    SerializableObject.prototype.internalToJSON = function (target, context) {
        var s = this.getSchema();
        var serializedProperties = [];
        for (var i = 0; i < s.getCount(); i++) {
            var property_4 = s.getItemAt(i);
            // Avoid serializing the same property multiple times. This is necessary
            // because some property definitions map to the same underlying schema
            // property
            if (property_4.targetVersion.compareTo(context.targetVersion) <= 0 && serializedProperties.indexOf(property_4.name) === -1) {
                property_4.toJSON(this, target, this.getValue(property_4), context);
                serializedProperties.push(property_4.name);
            }
        }
    };
    SerializableObject.prototype.parse = function (source, context) {
        this.internalParse(source, context ? context : new SimpleSerializationContext());
    };
    SerializableObject.prototype.toJSON = function (context) {
        var effectiveContext = context ? context : new SimpleSerializationContext();
        if (effectiveContext.shouldSerialize(this)) {
            var result = void 0;
            if (shared_1.GlobalSettings.enableFullJsonRoundTrip && this._rawProperties && typeof this._rawProperties === "object") {
                result = this._rawProperties;
            }
            else {
                result = {};
            }
            this.internalToJSON(result, effectiveContext);
            return result;
        }
        else {
            return undefined;
        }
    };
    SerializableObject.prototype.hasDefaultValue = function (property) {
        return this.getValue(property) === property.defaultValue;
    };
    SerializableObject.prototype.hasAllDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_5 = s.getItemAt(i);
            if (!this.hasDefaultValue(property_5)) {
                return false;
            }
        }
        return true;
    };
    SerializableObject.prototype.resetDefaultValues = function () {
        var s = this.getSchema();
        for (var i = 0; i < s.getCount(); i++) {
            var property_6 = s.getItemAt(i);
            this.setValue(property_6, property_6.defaultValue);
        }
    };
    SerializableObject.prototype.setCustomProperty = function (name, value) {
        var shouldDeleteProperty = (typeof value === "string" && !value) || value === undefined || value === null;
        if (shouldDeleteProperty) {
            delete this._rawProperties[name];
        }
        else {
            this._rawProperties[name] = value;
        }
    };
    SerializableObject.prototype.getCustomProperty = function (name) {
        return this._rawProperties[name];
    };
    SerializableObject.prototype.getSchema = function () {
        var schema = SerializableObject._schemaCache[this.getSchemaKey()];
        if (!schema) {
            schema = new SerializableObjectSchema();
            this.populateSchema(schema);
            SerializableObject._schemaCache[this.getSchemaKey()] = schema;
        }
        return schema;
    };
    SerializableObject._schemaCache = {};
    return SerializableObject;
}());
exports.SerializableObject = SerializableObject;
//# sourceMappingURL=serialization.js.map

/***/ }),

/***/ "../adaptivecards/lib/shared.js":
/*!**************************************!*\
  !*** ../adaptivecards/lib/shared.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js");
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.useAdvancedTextBlockTruncation = true;
    GlobalSettings.useAdvancedCardBottomTruncation = false;
    GlobalSettings.useMarkdownInRadioButtonAndCheckbox = true;
    GlobalSettings.allowMarkForTextHighlighting = false;
    GlobalSettings.alwaysBleedSeparators = false;
    GlobalSettings.enableFullJsonRoundTrip = false;
    GlobalSettings.useBuiltInInputValidation = true;
    GlobalSettings.displayInputValidationErrors = true;
    GlobalSettings.allowPreProcessingPropertyValues = false;
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
exports.ContentTypes = {
    applicationJson: "application/json",
    applicationXWwwFormUrlencoded: "application/x-www-form-urlencoded"
};
var StringWithSubstitutions = /** @class */ (function () {
    function StringWithSubstitutions() {
        this._isProcessed = false;
    }
    StringWithSubstitutions.prototype.getReferencedInputs = function (inputs, referencedInputs) {
        if (!referencedInputs) {
            throw new Error("The referencedInputs parameter cannot be null.");
        }
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var matches = new RegExp("\\{{2}(" + input.id + ").value\\}{2}", "gi").exec(this._original);
            if (matches != null && input.id) {
                referencedInputs[input.id] = input;
            }
        }
    };
    StringWithSubstitutions.prototype.substituteInputValues = function (inputs, contentType) {
        this._processed = this._original;
        if (this._original) {
            var regEx = /\{{2}([a-z0-9_$@]+).value\}{2}/gi;
            var matches = void 0;
            while ((matches = regEx.exec(this._original)) !== null) {
                for (var _i = 0, _a = Object.keys(inputs); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (key.toLowerCase() == matches[1].toLowerCase()) {
                        var matchedInput = inputs[key];
                        var valueForReplace = "";
                        if (matchedInput.value) {
                            valueForReplace = matchedInput.value;
                        }
                        if (contentType === exports.ContentTypes.applicationJson) {
                            valueForReplace = JSON.stringify(valueForReplace);
                            valueForReplace = valueForReplace.slice(1, -1);
                        }
                        else if (contentType === exports.ContentTypes.applicationXWwwFormUrlencoded) {
                            valueForReplace = encodeURIComponent(valueForReplace);
                        }
                        this._processed = this._processed.replace(matches[0], valueForReplace);
                        break;
                    }
                }
            }
        }
        this._isProcessed = true;
    };
    StringWithSubstitutions.prototype.getOriginal = function () {
        return this._original;
    };
    StringWithSubstitutions.prototype.get = function () {
        if (!this._isProcessed) {
            return this._original;
        }
        else {
            return this._processed;
        }
    };
    StringWithSubstitutions.prototype.set = function (value) {
        this._original = value;
        this._isProcessed = false;
    };
    return StringWithSubstitutions;
}());
exports.StringWithSubstitutions = StringWithSubstitutions;
var SpacingDefinition = /** @class */ (function () {
    function SpacingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return SpacingDefinition;
}());
exports.SpacingDefinition = SpacingDefinition;
var PaddingDefinition = /** @class */ (function () {
    function PaddingDefinition(top, right, bottom, left) {
        if (top === void 0) { top = Enums.Spacing.None; }
        if (right === void 0) { right = Enums.Spacing.None; }
        if (bottom === void 0) { bottom = Enums.Spacing.None; }
        if (left === void 0) { left = Enums.Spacing.None; }
        this.top = Enums.Spacing.None;
        this.right = Enums.Spacing.None;
        this.bottom = Enums.Spacing.None;
        this.left = Enums.Spacing.None;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
    return PaddingDefinition;
}());
exports.PaddingDefinition = PaddingDefinition;
var SizeAndUnit = /** @class */ (function () {
    function SizeAndUnit(physicalSize, unit) {
        this.physicalSize = physicalSize;
        this.unit = unit;
    }
    SizeAndUnit.parse = function (input, requireUnitSpecifier) {
        if (requireUnitSpecifier === void 0) { requireUnitSpecifier = false; }
        var result = new SizeAndUnit(0, Enums.SizeUnit.Weight);
        if (typeof input === "number") {
            result.physicalSize = input;
            return result;
        }
        else if (typeof input === "string") {
            var regExp = /^([0-9]+)(px|\*)?$/g;
            var matches = regExp.exec(input);
            var expectedMatchCount = requireUnitSpecifier ? 3 : 2;
            if (matches && matches.length >= expectedMatchCount) {
                result.physicalSize = parseInt(matches[1]);
                if (matches.length == 3) {
                    if (matches[2] == "px") {
                        result.unit = Enums.SizeUnit.Pixel;
                    }
                }
                return result;
            }
        }
        throw new Error("Invalid size: " + input);
    };
    return SizeAndUnit;
}());
exports.SizeAndUnit = SizeAndUnit;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.generate = function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
        return UUID.lut[d0 & 0xff] + UUID.lut[d0 >> 8 & 0xff] + UUID.lut[d0 >> 16 & 0xff] + UUID.lut[d0 >> 24 & 0xff] + '-' +
            UUID.lut[d1 & 0xff] + UUID.lut[d1 >> 8 & 0xff] + '-' + UUID.lut[d1 >> 16 & 0x0f | 0x40] + UUID.lut[d1 >> 24 & 0xff] + '-' +
            UUID.lut[d2 & 0x3f | 0x80] + UUID.lut[d2 >> 8 & 0xff] + '-' + UUID.lut[d2 >> 16 & 0xff] + UUID.lut[d2 >> 24 & 0xff] +
            UUID.lut[d3 & 0xff] + UUID.lut[d3 >> 8 & 0xff] + UUID.lut[d3 >> 16 & 0xff] + UUID.lut[d3 >> 24 & 0xff];
    };
    UUID.initialize = function () {
        for (var i = 0; i < 256; i++) {
            UUID.lut[i] = (i < 16 ? '0' : '') + i.toString(16);
        }
    };
    UUID.lut = [];
    return UUID;
}());
exports.UUID = UUID;
UUID.initialize();
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "../adaptivecards/lib/text-formatters.js":
/*!***********************************************!*\
  !*** ../adaptivecards/lib/text-formatters.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var AbstractTextFormatter = /** @class */ (function () {
    function AbstractTextFormatter(regularExpression) {
        this._regularExpression = regularExpression;
    }
    AbstractTextFormatter.prototype.format = function (lang, input) {
        var matches;
        if (input) {
            var result = input;
            while ((matches = this._regularExpression.exec(input)) != null) {
                result = result.replace(matches[0], this.internalFormat(lang, matches));
            }
            ;
            return result;
        }
        else {
            return input;
        }
    };
    return AbstractTextFormatter;
}());
var DateFormatter = /** @class */ (function (_super) {
    __extends(DateFormatter, _super);
    function DateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        var format = matches[2] != undefined ? matches[2].toLowerCase() : "compact";
        if (format != "compact") {
            return date.toLocaleDateString(lang, { day: "numeric", weekday: format, month: format, year: "numeric" });
        }
        else {
            return date.toLocaleDateString();
        }
    };
    return DateFormatter;
}(AbstractTextFormatter));
var TimeFormatter = /** @class */ (function (_super) {
    __extends(TimeFormatter, _super);
    function TimeFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeFormatter.prototype.internalFormat = function (lang, matches) {
        var date = new Date(Date.parse(matches[1]));
        return date.toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit' });
    };
    return TimeFormatter;
}(AbstractTextFormatter));
function formatText(lang, text) {
    var formatters = [
        new DateFormatter(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),
        new TimeFormatter(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)
    ];
    var result = text;
    for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
        var formatter = formatters_1[_i];
        result = formatter.format(lang, result);
    }
    return result;
}
exports.formatText = formatText;
//# sourceMappingURL=text-formatters.js.map

/***/ }),

/***/ "../adaptivecards/lib/utils.js":
/*!*************************************!*\
  !*** ../adaptivecards/lib/utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var Enums = __webpack_require__(/*! ./enums */ "../adaptivecards/lib/enums.js");
var Shared = __webpack_require__(/*! ./shared */ "../adaptivecards/lib/shared.js");
function generateUniqueId() {
    return "__ac-" + Shared.UUID.generate();
}
exports.generateUniqueId = generateUniqueId;
function appendChild(node, child) {
    if (child) {
        node.appendChild(child);
    }
}
exports.appendChild = appendChild;
function parseString(obj, defaultValue) {
    return typeof obj === "string" ? obj : defaultValue;
}
exports.parseString = parseString;
function parseNumber(obj, defaultValue) {
    return typeof obj === "number" ? obj : defaultValue;
}
exports.parseNumber = parseNumber;
function parseBool(value, defaultValue) {
    if (typeof value === "boolean") {
        return value;
    }
    else if (typeof value === "string") {
        switch (value.toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                return defaultValue;
        }
    }
    return defaultValue;
}
exports.parseBool = parseBool;
function getEnumValueByName(enumType, name) {
    for (var key in enumType) {
        var keyAsNumber = parseInt(key, 10);
        if (keyAsNumber >= 0) {
            var value = enumType[key];
            if (value && typeof value === "string" && value.toLowerCase() === name.toLowerCase()) {
                return keyAsNumber;
            }
        }
    }
    return undefined;
}
exports.getEnumValueByName = getEnumValueByName;
function parseEnum(enumType, name, defaultValue) {
    if (!name) {
        return defaultValue;
    }
    var enumValue = getEnumValueByName(enumType, name);
    return enumValue !== undefined ? enumValue : defaultValue;
}
exports.parseEnum = parseEnum;
function renderSeparation(hostConfig, separationDefinition, orientation) {
    if (separationDefinition.spacing > 0 || (separationDefinition.lineThickness && separationDefinition.lineThickness > 0)) {
        var separator = document.createElement("div");
        separator.className = hostConfig.makeCssClassName("ac-" + (orientation == Enums.Orientation.Horizontal ? "horizontal" : "vertical") + "-separator");
        var color = separationDefinition.lineColor ? stringToCssColor(separationDefinition.lineColor) : "";
        if (orientation == Enums.Orientation.Horizontal) {
            if (separationDefinition.lineThickness) {
                separator.style.paddingTop = (separationDefinition.spacing / 2) + "px";
                separator.style.marginBottom = (separationDefinition.spacing / 2) + "px";
                separator.style.borderBottom = separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.height = separationDefinition.spacing + "px";
            }
        }
        else {
            if (separationDefinition.lineThickness) {
                separator.style.paddingLeft = (separationDefinition.spacing / 2) + "px";
                separator.style.marginRight = (separationDefinition.spacing / 2) + "px";
                separator.style.borderRight = separationDefinition.lineThickness + "px solid " + color;
            }
            else {
                separator.style.width = separationDefinition.spacing + "px";
            }
        }
        separator.style.overflow = "hidden";
        separator.style.flex = "0 0 auto";
        return separator;
    }
    else {
        return undefined;
    }
}
exports.renderSeparation = renderSeparation;
function stringToCssColor(color) {
    if (color) {
        var regEx = /#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi;
        var matches = regEx.exec(color);
        if (matches && matches[4]) {
            var a = parseInt(matches[1], 16) / 255;
            var r = parseInt(matches[2], 16);
            var g = parseInt(matches[3], 16);
            var b = parseInt(matches[4], 16);
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        }
    }
    return color;
}
exports.stringToCssColor = stringToCssColor;
function truncate(element, maxHeight, lineHeight) {
    var fits = function () {
        // Allow a one pixel overflow to account for rounding differences
        // between browsers
        return maxHeight - element.scrollHeight >= -1.0;
    };
    if (fits())
        return;
    var fullText = element.innerHTML;
    var truncateAt = function (idx) {
        element.innerHTML = fullText.substring(0, idx) + '...';
    };
    var breakableIndices = findBreakableIndices(fullText);
    var lo = 0;
    var hi = breakableIndices.length;
    var bestBreakIdx = 0;
    // Do a binary search for the longest string that fits
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        truncateAt(breakableIndices[mid]);
        if (fits()) {
            bestBreakIdx = breakableIndices[mid];
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    truncateAt(bestBreakIdx);
    // If we have extra room, try to expand the string letter by letter
    // (covers the case where we have to break in the middle of a long word)
    if (lineHeight && maxHeight - element.scrollHeight >= lineHeight - 1.0) {
        var idx = findNextCharacter(fullText, bestBreakIdx);
        while (idx < fullText.length) {
            truncateAt(idx);
            if (fits()) {
                bestBreakIdx = idx;
                idx = findNextCharacter(fullText, idx);
            }
            else {
                break;
            }
        }
        truncateAt(bestBreakIdx);
    }
}
exports.truncate = truncate;
function findBreakableIndices(html) {
    var results = [];
    var idx = findNextCharacter(html, -1);
    while (idx < html.length) {
        if (html[idx] == ' ') {
            results.push(idx);
        }
        idx = findNextCharacter(html, idx);
    }
    return results;
}
function findNextCharacter(html, currIdx) {
    currIdx += 1;
    // If we found the start of an HTML tag, keep advancing until we get
    // past it, so we don't end up truncating in the middle of the tag
    while (currIdx < html.length && html[currIdx] == '<') {
        while (currIdx < html.length && html[currIdx++] != '>')
            ;
    }
    return currIdx;
}
function getFitStatus(element, containerEnd) {
    var start = element.offsetTop;
    var end = start + element.clientHeight;
    if (end <= containerEnd) {
        return 0 /* FullyInContainer */;
    }
    else if (start < containerEnd) {
        return 1 /* Overflowing */;
    }
    else {
        return 2 /* FullyOutOfContainer */;
    }
}
exports.getFitStatus = getFitStatus;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/adaptivecards-templating/lib/adaptivecards-templating.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/adaptivecards-templating/lib/adaptivecards-templating.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__export(__webpack_require__(/*! ./expression-parser */ "./node_modules/adaptivecards-templating/lib/expression-parser.js"));
__export(__webpack_require__(/*! ./template-engine */ "./node_modules/adaptivecards-templating/lib/template-engine.js"));
//# sourceMappingURL=adaptivecards-templating.js.map

/***/ }),

/***/ "./node_modules/adaptivecards-templating/lib/expression-parser.js":
/*!************************************************************************!*\
  !*** ./node_modules/adaptivecards-templating/lib/expression-parser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var orderedOperators = [
    "/",
    "*",
    "-",
    "+",
    "==",
    "!=",
    "<",
    "<=",
    ">",
    ">="
];
var literals = [
    "identifier",
    "string",
    "number",
    "boolean"
];
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
    }
    Tokenizer.init = function () {
        Tokenizer.rules.push({ tokenType: undefined, regEx: /^\s/ }, { tokenType: "{", regEx: /^{/ }, { tokenType: "?#", regEx: /^\?#/ }, { tokenType: "}", regEx: /^}/ }, { tokenType: "[", regEx: /^\[/ }, { tokenType: "]", regEx: /^\]/ }, { tokenType: "(", regEx: /^\(/ }, { tokenType: ")", regEx: /^\)/ }, { tokenType: "boolean", regEx: /^true|^false/ }, { tokenType: "identifier", regEx: /^[$a-z_]+/i }, { tokenType: ".", regEx: /^\./ }, { tokenType: ",", regEx: /^,/ }, { tokenType: "+", regEx: /^\+/ }, { tokenType: "-", regEx: /^-/ }, { tokenType: "*", regEx: /^\*/ }, { tokenType: "/", regEx: /^\// }, { tokenType: "==", regEx: /^==/ }, { tokenType: "!=", regEx: /^!=/ }, { tokenType: "<=", regEx: /^<=/ }, { tokenType: "<", regEx: /^</ }, { tokenType: ">=", regEx: /^>=/ }, { tokenType: ">", regEx: /^>/ }, { tokenType: "string", regEx: /^"([^"]*)"/ }, { tokenType: "string", regEx: /^'([^']*)'/ }, { tokenType: "number", regEx: /^\d*\.?\d+/ });
    };
    Tokenizer.parse = function (expression) {
        var result = [];
        var i = 0;
        while (i < expression.length) {
            var subExpression = expression.substring(i);
            var matchFound = false;
            for (var _i = 0, _a = Tokenizer.rules; _i < _a.length; _i++) {
                var rule = _a[_i];
                var matches = rule.regEx.exec(subExpression);
                if (matches) {
                    if (matches.length > 2) {
                        throw new Error("A tokenizer rule matched more than one group.");
                    }
                    if (rule.tokenType != undefined) {
                        result.push({
                            type: rule.tokenType,
                            value: matches[matches.length == 1 ? 0 : 1],
                            originalPosition: i
                        });
                    }
                    i += matches[0].length;
                    matchFound = true;
                    break;
                }
            }
            if (!matchFound) {
                throw new Error("Unexpected character " + subExpression[0] + " at position " + i);
            }
        }
        return result;
    };
    Tokenizer.rules = [];
    return Tokenizer;
}());
Tokenizer.init();
function ensureValueType(value) {
    if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
        return value;
    }
    throw new Error("Invalid value type: " + typeof value);
}
var EvaluationContext = /** @class */ (function () {
    function EvaluationContext() {
        this._functions = {};
        this._stateStack = [];
    }
    EvaluationContext.init = function () {
        EvaluationContext._builtInFunctions["substr"] = function (s, index, count) {
            if (typeof s === "string" && typeof index === "number" && typeof count === "number") {
                return (s.substr(index, count));
            }
            else {
                return "";
            }
        };
        EvaluationContext._builtInFunctions["JSON.parse"] = function (input) {
            return JSON.parse(input);
        };
        EvaluationContext._builtInFunctions["if"] = function (condition, ifTrue, ifFalse) {
            return condition ? ifTrue : ifFalse;
        };
        EvaluationContext._builtInFunctions["toUpper"] = function (input) {
            return typeof input === "string" ? input.toUpperCase() : input;
        };
        EvaluationContext._builtInFunctions["toLower"] = function (input) {
            return typeof input === "string" ? input.toLowerCase() : input;
        };
        EvaluationContext._builtInFunctions["Date.format"] = function (input, format) {
            var acceptedFormats = ["long", "short", "compact"];
            var inputAsNumber;
            if (typeof input === "string") {
                inputAsNumber = Date.parse(input);
            }
            else if (typeof input === "number") {
                inputAsNumber = input;
            }
            else {
                return input;
            }
            var date = new Date(inputAsNumber);
            var effectiveFormat = "compact";
            if (typeof format === "string") {
                effectiveFormat = format.toLowerCase();
                if (acceptedFormats.indexOf(effectiveFormat) < 0) {
                    effectiveFormat = "compact";
                }
            }
            return effectiveFormat === "compact" ? date.toLocaleDateString() : date.toLocaleDateString(undefined, { day: "numeric", weekday: effectiveFormat, month: effectiveFormat, year: "numeric" });
        };
        EvaluationContext._builtInFunctions["Time.format"] = function (input) {
            var inputAsNumber;
            if (typeof input === "string") {
                inputAsNumber = Date.parse(input);
            }
            else if (typeof input === "number") {
                inputAsNumber = input;
            }
            else {
                return input;
            }
            var date = new Date(inputAsNumber);
            return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
        };
    };
    EvaluationContext.prototype.registerFunction = function (name, callback) {
        this._functions[name] = callback;
    };
    EvaluationContext.prototype.unregisterFunction = function (name) {
        delete this._functions[name];
    };
    EvaluationContext.prototype.getFunction = function (name) {
        var result = this._functions[name];
        if (result == undefined) {
            result = EvaluationContext._builtInFunctions[name];
        }
        return result;
    };
    EvaluationContext.prototype.isReservedField = function (name) {
        return EvaluationContext._reservedFields.indexOf(name) >= 0;
    };
    EvaluationContext.prototype.saveState = function () {
        this._stateStack.push({ $data: this.$data, $index: this.$index });
    };
    EvaluationContext.prototype.restoreLastState = function () {
        if (this._stateStack.length == 0) {
            throw new Error("There is no evaluation context state to restore.");
        }
        var savedContext = this._stateStack.pop();
        this.$data = savedContext.$data;
        this.$index = savedContext.$index;
    };
    Object.defineProperty(EvaluationContext.prototype, "currentDataContext", {
        get: function () {
            return this.$data != undefined ? this.$data : this.$root;
        },
        enumerable: true,
        configurable: true
    });
    EvaluationContext._reservedFields = ["$data", "$root", "$index"];
    EvaluationContext._builtInFunctions = {};
    return EvaluationContext;
}());
exports.EvaluationContext = EvaluationContext;
EvaluationContext.init();
var EvaluationNode = /** @class */ (function () {
    function EvaluationNode() {
    }
    return EvaluationNode;
}());
var ExpressionNode = /** @class */ (function (_super) {
    __extends(ExpressionNode, _super);
    function ExpressionNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodes = [];
        _this.allowNull = true;
        return _this;
    }
    ExpressionNode.prototype.evaluate = function (context) {
        var operatorPriorityGroups = [
            ["/", "*"],
            ["-", "+"],
            ["==", "!=", "<", "<=", ">", ">="]
        ];
        var nodesCopy = this.nodes;
        for (var _i = 0, operatorPriorityGroups_1 = operatorPriorityGroups; _i < operatorPriorityGroups_1.length; _i++) {
            var priorityGroup = operatorPriorityGroups_1[_i];
            var i = 0;
            while (i < nodesCopy.length) {
                var node = nodesCopy[i];
                if (node instanceof OperatorNode && priorityGroup.indexOf(node.operator) >= 0) {
                    var left = ensureValueType(nodesCopy[i - 1].evaluate(context));
                    var right = ensureValueType(nodesCopy[i + 1].evaluate(context));
                    if (typeof left !== typeof right) {
                        throw new Error("Incompatible operands " + left + " and " + right + " for operator " + node.operator);
                    }
                    var result = void 0;
                    if (typeof left === "number" && typeof right === "number") {
                        switch (node.operator) {
                            case "/":
                                result = left / right;
                                break;
                            case "*":
                                result = left * right;
                                break;
                            case "-":
                                result = left - right;
                                break;
                            case "+":
                                result = left + right;
                                break;
                        }
                    }
                    if (typeof left === "string" && typeof right === "string") {
                        switch (node.operator) {
                            case "+":
                                result = left + right;
                                break;
                        }
                    }
                    switch (node.operator) {
                        case "==":
                            result = left == right;
                            break;
                        case "!=":
                            result = left != right;
                            break;
                        case "<":
                            result = left < right;
                            break;
                        case "<=":
                            result = left <= right;
                            break;
                        case ">":
                            result = left > right;
                            break;
                        case ">=":
                            result = left >= right;
                            break;
                        default:
                        // This should never happen
                    }
                    nodesCopy.splice(i - 1, 3, new LiteralNode(result));
                    i--;
                }
                i++;
            }
            ;
        }
        return nodesCopy[0].evaluate(context);
    };
    return ExpressionNode;
}(EvaluationNode));
var IdentifierNode = /** @class */ (function (_super) {
    __extends(IdentifierNode, _super);
    function IdentifierNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierNode.prototype.evaluate = function (context) {
        return this.identifier;
    };
    return IdentifierNode;
}(EvaluationNode));
var IndexerNode = /** @class */ (function (_super) {
    __extends(IndexerNode, _super);
    function IndexerNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexerNode.prototype.evaluate = function (context) {
        return this.index.evaluate(context);
    };
    return IndexerNode;
}(EvaluationNode));
var FunctionCallNode = /** @class */ (function (_super) {
    __extends(FunctionCallNode, _super);
    function FunctionCallNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.functionName = null;
        _this.parameters = [];
        return _this;
    }
    FunctionCallNode.prototype.evaluate = function (context) {
        var callback = context.getFunction(this.functionName);
        if (callback != undefined) {
            var evaluatedParams = [];
            for (var _i = 0, _a = this.parameters; _i < _a.length; _i++) {
                var param = _a[_i];
                evaluatedParams.push(param.evaluate(context));
            }
            return callback.apply(void 0, evaluatedParams);
        }
        throw new Error("Undefined function: " + this.functionName);
    };
    return FunctionCallNode;
}(EvaluationNode));
var LiteralNode = /** @class */ (function (_super) {
    __extends(LiteralNode, _super);
    function LiteralNode(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    LiteralNode.prototype.evaluate = function (context) {
        return this.value;
    };
    return LiteralNode;
}(EvaluationNode));
var OperatorNode = /** @class */ (function (_super) {
    __extends(OperatorNode, _super);
    function OperatorNode(operator) {
        var _this = _super.call(this) || this;
        _this.operator = operator;
        return _this;
    }
    OperatorNode.prototype.evaluate = function (context) {
        throw new Error("An operator cannot be evaluated on its own.");
    };
    return OperatorNode;
}(EvaluationNode));
var PathNode = /** @class */ (function (_super) {
    __extends(PathNode, _super);
    function PathNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parts = [];
        return _this;
    }
    PathNode.prototype.evaluate = function (context) {
        var result = undefined;
        var index = 0;
        while (index < this.parts.length) {
            var part = this.parts[index];
            try {
                if (part instanceof IdentifierNode && index == 0) {
                    switch (part.identifier) {
                        case "$root":
                            result = context.$root;
                            break;
                        case "$data":
                            result = context.currentDataContext;
                            break;
                        case "$index":
                            result = context.$index;
                            break;
                        default:
                            result = context.currentDataContext[part.identifier];
                            break;
                    }
                }
                else {
                    var partValue = part.evaluate(context);
                    if (index == 0) {
                        result = partValue;
                    }
                    else {
                        result = typeof partValue !== "boolean" ? result[partValue] : result[partValue.toString()];
                    }
                }
            }
            catch (e) {
                return undefined;
            }
            index++;
        }
        return result;
    };
    return PathNode;
}(EvaluationNode));
var ExpressionParser = /** @class */ (function () {
    function ExpressionParser(tokens) {
        this._index = 0;
        this._tokens = tokens;
    }
    ExpressionParser.prototype.unexpectedToken = function () {
        throw new Error("Unexpected token " + this.current.value + " at position " + this.current.originalPosition + ".");
    };
    ExpressionParser.prototype.unexpectedEoe = function () {
        throw new Error("Unexpected end of expression.");
    };
    ExpressionParser.prototype.moveNext = function () {
        this._index++;
    };
    ExpressionParser.prototype.parseToken = function () {
        var expectedTokenTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedTokenTypes[_i] = arguments[_i];
        }
        if (this.eoe) {
            this.unexpectedEoe();
        }
        var currentToken = this.current;
        if (expectedTokenTypes.indexOf(this.current.type) < 0) {
            this.unexpectedToken();
        }
        this.moveNext();
        return currentToken;
    };
    ExpressionParser.prototype.parseOptionalToken = function () {
        var expectedTokenTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectedTokenTypes[_i] = arguments[_i];
        }
        if (this.eoe) {
            this.unexpectedEoe();
        }
        else if (expectedTokenTypes.indexOf(this.current.type) < 0) {
            return false;
        }
        else {
            this.moveNext();
            return true;
        }
    };
    ExpressionParser.prototype.parseFunctionCall = function (functionName) {
        var result = new FunctionCallNode();
        result.functionName = functionName;
        this.parseToken("(");
        var firstParameter = this.parseExpression();
        var moreParameters = false;
        if (firstParameter) {
            result.parameters.push(firstParameter);
            do {
                moreParameters = this.parseOptionalToken(",");
                if (moreParameters) {
                    var parameter = this.parseExpression();
                    result.parameters.push(parameter);
                }
            } while (moreParameters);
        }
        this.parseToken(")");
        return result;
    };
    ExpressionParser.prototype.parseIdentifier = function () {
        var result = new IdentifierNode();
        result.identifier = this.current.value;
        this.moveNext();
        return result;
    };
    ExpressionParser.prototype.parseIndexer = function () {
        var result = new IndexerNode();
        this.parseToken("[");
        result.index = this.parseExpression();
        this.parseToken("]");
        return result;
    };
    ExpressionParser.prototype.parsePath = function () {
        var result = new PathNode();
        var expectedNextTokenTypes = ["identifier", "("];
        while (!this.eoe) {
            if (expectedNextTokenTypes.indexOf(this.current.type) < 0) {
                return result;
            }
            switch (this.current.type) {
                case "(":
                    if (result.parts.length == 0) {
                        this.moveNext();
                        result.parts.push(this.parseExpression());
                        this.parseToken(")");
                    }
                    else {
                        var functionName = "";
                        for (var _i = 0, _a = result.parts; _i < _a.length; _i++) {
                            var part = _a[_i];
                            if (!(part instanceof IdentifierNode)) {
                                this.unexpectedToken();
                            }
                            if (functionName != "") {
                                functionName += ".";
                            }
                            functionName += part.identifier;
                        }
                        result.parts = [];
                        result.parts.push(this.parseFunctionCall(functionName));
                    }
                    expectedNextTokenTypes = [".", "["];
                    break;
                case "[":
                    result.parts.push(this.parseIndexer());
                    expectedNextTokenTypes = [".", "(", "["];
                    break;
                case "identifier":
                    result.parts.push(this.parseIdentifier());
                    expectedNextTokenTypes = [".", "(", "["];
                    break;
                case ".":
                    this.moveNext();
                    expectedNextTokenTypes = ["identifier"];
                    break;
                default:
                    expectedNextTokenTypes = [];
                    break;
            }
        }
    };
    ExpressionParser.prototype.parseExpression = function () {
        var result = new ExpressionNode();
        var expectedNextTokenTypes = literals.concat("(", "+", "-");
        while (!this.eoe) {
            if (expectedNextTokenTypes.indexOf(this.current.type) < 0) {
                if (result.nodes.length == 0) {
                    this.unexpectedToken();
                }
                return result;
            }
            switch (this.current.type) {
                case "(":
                case "identifier":
                    result.nodes.push(this.parsePath());
                    expectedNextTokenTypes = orderedOperators;
                    break;
                case "string":
                case "number":
                case "boolean":
                    if (this.current.type == "string") {
                        result.nodes.push(new LiteralNode(this.current.value));
                    }
                    else if (this.current.type == "number") {
                        result.nodes.push(new LiteralNode(parseFloat(this.current.value)));
                    }
                    else {
                        result.nodes.push(new LiteralNode(this.current.value === "true"));
                    }
                    this.moveNext();
                    expectedNextTokenTypes = orderedOperators;
                    break;
                case "-":
                    if (result.nodes.length == 0) {
                        result.nodes.push(new LiteralNode(-1));
                        result.nodes.push(new OperatorNode("*"));
                        expectedNextTokenTypes = ["identifier", "number", "("];
                    }
                    else {
                        result.nodes.push(new OperatorNode(this.current.type));
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    this.moveNext();
                    break;
                case "+":
                    if (result.nodes.length == 0) {
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    else {
                        result.nodes.push(new OperatorNode(this.current.type));
                        expectedNextTokenTypes = literals.concat("(");
                    }
                    this.moveNext();
                    break;
                case "*":
                case "/":
                case "==":
                case "!=":
                case "<":
                case "<=":
                case ">":
                case ">=":
                    result.nodes.push(new OperatorNode(this.current.type));
                    this.moveNext();
                    expectedNextTokenTypes = literals.concat("(");
                    break;
                default:
                    expectedNextTokenTypes = [];
                    break;
            }
        }
    };
    Object.defineProperty(ExpressionParser.prototype, "eoe", {
        get: function () {
            return this._index >= this._tokens.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpressionParser.prototype, "current", {
        get: function () {
            return this._tokens[this._index];
        },
        enumerable: true,
        configurable: true
    });
    ExpressionParser.parseBinding = function (bindingExpression) {
        var parser = new ExpressionParser(Tokenizer.parse(bindingExpression));
        parser.parseToken("{");
        var allowNull = !parser.parseOptionalToken("?#");
        var expression = parser.parseExpression();
        parser.parseToken("}");
        return new Binding(expression, allowNull);
    };
    return ExpressionParser;
}());
exports.ExpressionParser = ExpressionParser;
var Binding = /** @class */ (function () {
    function Binding(expression, allowNull) {
        if (allowNull === void 0) { allowNull = true; }
        this.expression = expression;
        this.allowNull = allowNull;
    }
    Binding.prototype.evaluate = function (context) {
        return this.expression.evaluate(context);
    };
    return Binding;
}());
exports.Binding = Binding;
//# sourceMappingURL=expression-parser.js.map

/***/ }),

/***/ "./node_modules/adaptivecards-templating/lib/template-engine.js":
/*!**********************************************************************!*\
  !*** ./node_modules/adaptivecards-templating/lib/template-engine.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var expression_parser_1 = __webpack_require__(/*! ./expression-parser */ "./node_modules/adaptivecards-templating/lib/expression-parser.js");
var TemplatizedString = /** @class */ (function () {
    function TemplatizedString() {
        this._parts = [];
        this._shouldDropOwner = false;
    }
    TemplatizedString.parse = function (s) {
        var result = new TemplatizedString();
        var i = 0;
        do {
            var expressionFound = false;
            var start = i;
            var loop = void 0;
            do {
                loop = false;
                start = s.indexOf("{", start);
                if (start >= 0) {
                    if (start + 1 < s.length && s[start + 1] == "{") {
                        start += 2;
                        loop = true;
                    }
                }
            } while (loop);
            if (start >= 0) {
                var end = s.indexOf("}", start);
                if (end >= 0) {
                    expressionFound = true;
                    if (start > i) {
                        result._parts.push(s.substring(i, start));
                    }
                    var bindngExpression = s.substring(start, end + 1);
                    var part = void 0;
                    try {
                        part = expression_parser_1.ExpressionParser.parseBinding(bindngExpression);
                    }
                    catch (e) {
                        part = bindngExpression;
                    }
                    result._parts.push(part);
                    i = end + 1;
                }
            }
            if (!expressionFound) {
                result._parts.push(s.substr(i));
                break;
            }
        } while (i < s.length);
        if (result._parts.length == 1 && typeof result._parts[0] === "string") {
            return result._parts[0];
        }
        else {
            return result;
        }
    };
    TemplatizedString.prototype.evalExpression = function (bindingExpression, context) {
        var result = bindingExpression.evaluate(context);
        if (result == undefined) {
            this._shouldDropOwner = this._shouldDropOwner || !bindingExpression.allowNull;
        }
        return result;
    };
    TemplatizedString.prototype.internalEvaluate = function (context) {
        if (this._parts.length == 0) {
            return undefined;
        }
        else if (this._parts.length == 1) {
            if (typeof this._parts[0] === "string") {
                return this._parts[0];
            }
            else {
                return this.evalExpression(this._parts[0], context);
            }
        }
        else {
            var s = "";
            for (var _i = 0, _a = this._parts; _i < _a.length; _i++) {
                var part = _a[_i];
                if (typeof part === "string") {
                    s += part;
                }
                else {
                    s += this.evalExpression(part, context);
                }
            }
            return s;
        }
    };
    TemplatizedString.prototype.evaluate = function (context) {
        this._shouldDropOwner = false;
        return this.internalEvaluate(context);
    };
    Object.defineProperty(TemplatizedString.prototype, "shouldDropOwner", {
        get: function () {
            return this._shouldDropOwner;
        },
        enumerable: true,
        configurable: true
    });
    return TemplatizedString;
}());
exports.TemplatizedString = TemplatizedString;
var Template = /** @class */ (function () {
    function Template(payload) {
        this.preparedPayload = Template.prepare(payload);
    }
    Template.prepare = function (node) {
        if (typeof node === "string") {
            return TemplatizedString.parse(node);
        }
        else if (typeof node === "object" && node != null) {
            if (Array.isArray(node)) {
                var result = [];
                for (var _i = 0, node_1 = node; _i < node_1.length; _i++) {
                    var item = node_1[_i];
                    result.push(Template.prepare(item));
                }
                return result;
            }
            else {
                var keys = Object.keys(node);
                var result = {};
                for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                    var key = keys_1[_a];
                    result[key] = Template.prepare(node[key]);
                }
                return result;
            }
        }
        else {
            return node;
        }
    };
    Template.prototype.expandSingleObject = function (node) {
        var result = {};
        var keys = Object.keys(node);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (!this._context.isReservedField(key)) {
                var value = this.internalExpand(node[key]);
                if (value != undefined) {
                    result[key] = value;
                }
            }
        }
        return result;
    };
    Template.prototype.internalExpand = function (node) {
        var result;
        this._context.saveState();
        if (Array.isArray(node)) {
            var itemArray = [];
            for (var _i = 0, node_2 = node; _i < node_2.length; _i++) {
                var item = node_2[_i];
                var expandedItem = this.internalExpand(item);
                if (expandedItem != null) {
                    if (Array.isArray(expandedItem)) {
                        itemArray = itemArray.concat(expandedItem);
                    }
                    else {
                        itemArray.push(expandedItem);
                    }
                }
            }
            result = itemArray;
        }
        else if (node instanceof TemplatizedString) {
            result = node.evaluate(this._context);
            if (node.shouldDropOwner) {
                result = null;
            }
        }
        else if (typeof node === "object" && node != null) {
            var dropObject = false;
            var when = node["$when"];
            if (when instanceof TemplatizedString) {
                var whenValue = when.evaluate(this._context);
                if (typeof whenValue === "boolean") {
                    dropObject = !whenValue;
                }
            }
            if (!dropObject) {
                var dataContext = node["$data"];
                if (dataContext != undefined) {
                    if (dataContext instanceof TemplatizedString) {
                        dataContext = dataContext.evaluate(this._context);
                    }
                    if (Array.isArray(dataContext)) {
                        result = [];
                        for (var i = 0; i < dataContext.length; i++) {
                            this._context.$data = dataContext[i];
                            this._context.$index = i;
                            var expandedObject = this.expandSingleObject(node);
                            if (expandedObject != null) {
                                result.push(expandedObject);
                            }
                        }
                    }
                    else {
                        this._context.$data = dataContext;
                        result = this.expandSingleObject(node);
                    }
                }
                else {
                    result = this.expandSingleObject(node);
                }
            }
            else {
                result = null;
            }
        }
        else {
            result = node;
        }
        this._context.restoreLastState();
        return result;
    };
    Template.prototype.expand = function (context) {
        this._context = context;
        return this.internalExpand(this.preparedPayload);
    };
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=template-engine.js.map

/***/ }),

/***/ "./src/aaf.ts":
/*!********************!*\
  !*** ./src/aaf.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core */ "./src/core.ts"));
__export(__webpack_require__(/*! ./channel-adapter */ "./src/channel-adapter.ts"));
__export(__webpack_require__(/*! ./http-channel-adapter */ "./src/http-channel-adapter.ts"));
__export(__webpack_require__(/*! ./invoke-activity */ "./src/invoke-activity.ts"));


/***/ }),

/***/ "./src/channel-adapter.ts":
/*!********************************!*\
  !*** ./src/channel-adapter.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelAdapter = /** @class */ (function () {
    function ChannelAdapter() {
    }
    return ChannelAdapter;
}());
exports.ChannelAdapter = ChannelAdapter;


/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Adaptive = __webpack_require__(/*! adaptivecards */ "../adaptivecards/lib/adaptivecards.js");
var Templating = __webpack_require__(/*! adaptivecards-templating */ "./node_modules/adaptivecards-templating/lib/adaptivecards-templating.js");
var invoke_activity_1 = __webpack_require__(/*! ./invoke-activity */ "./src/invoke-activity.ts");
var ExecuteAction = /** @class */ (function (_super) {
    __extends(ExecuteAction, _super);
    function ExecuteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //#endregion
    ExecuteAction.prototype.getJsonTypeName = function () {
        return "Action.Execute";
    };
    //#region Schema
    ExecuteAction.verbProperty = new Adaptive.StringProperty(Adaptive.Versions.v1_2, "verb");
    __decorate([
        Adaptive.property(ExecuteAction.verbProperty)
    ], ExecuteAction.prototype, "verb", void 0);
    return ExecuteAction;
}(Adaptive.SubmitAction));
exports.ExecuteAction = ExecuteAction;
var AutoRefreshActionProperty = /** @class */ (function (_super) {
    __extends(AutoRefreshActionProperty, _super);
    function AutoRefreshActionProperty(targetVersion, name) {
        var _this = _super.call(this, targetVersion, name, undefined) || this;
        _this.targetVersion = targetVersion;
        _this.name = name;
        return _this;
    }
    AutoRefreshActionProperty.prototype.parse = function (sender, source, context) {
        var action = context.parseAction(sender.parent, source[this.name], [], false);
        if (action && action instanceof ExecuteAction) {
            return action;
        }
        else {
            context.logParseEvent(1 /* ActionTypeNotAllowed */, "\"autoRefresh\" must have its \"action\" property defined as an Action.Execute object", sender);
            return undefined;
        }
    };
    AutoRefreshActionProperty.prototype.toJSON = function (sender, target, value, context) {
        context.serializeValue(target, this.name, value ? value.toJSON(context) : undefined);
    };
    return AutoRefreshActionProperty;
}(Adaptive.PropertyDefinition));
exports.AutoRefreshActionProperty = AutoRefreshActionProperty;
var AutoRefreshDefinition = /** @class */ (function (_super) {
    __extends(AutoRefreshDefinition, _super);
    function AutoRefreshDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AutoRefreshDefinition.prototype, "action", {
        get: function () {
            return this.getValue(AutoRefreshDefinition.actionProperty);
        },
        set: function (value) {
            this.setValue(AutoRefreshDefinition.actionProperty, value);
            if (value) {
                value.setParent(this.parent);
            }
        },
        enumerable: true,
        configurable: true
    });
    AutoRefreshDefinition.prototype.getSchemaKey = function () {
        return "AutoRefreshDefinition";
    };
    //#region Schema
    AutoRefreshDefinition.userIdsProperty = new Adaptive.StringArrayProperty(Adaptive.Versions.v1_0, "userIds");
    AutoRefreshDefinition.displayCurrentCardWhileRefreshingProperty = new Adaptive.BoolProperty(Adaptive.Versions.v1_0, "displayCurrentCardWhileRefreshing", true);
    AutoRefreshDefinition.actionProperty = new AutoRefreshActionProperty(Adaptive.Versions.v1_0, "action");
    __decorate([
        Adaptive.property(AutoRefreshDefinition.userIdsProperty)
    ], AutoRefreshDefinition.prototype, "userIds", void 0);
    __decorate([
        Adaptive.property(AutoRefreshDefinition.displayCurrentCardWhileRefreshingProperty)
    ], AutoRefreshDefinition.prototype, "displayCurrentCardWhileRefreshing", void 0);
    __decorate([
        Adaptive.property(AutoRefreshDefinition.actionProperty)
    ], AutoRefreshDefinition.prototype, "action", null);
    return AutoRefreshDefinition;
}(Adaptive.SerializableObject));
exports.AutoRefreshDefinition = AutoRefreshDefinition;
var AdaptiveAppletCard = /** @class */ (function (_super) {
    __extends(AdaptiveAppletCard, _super);
    function AdaptiveAppletCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AdaptiveAppletCard.prototype, "autoRefresh", {
        get: function () {
            return this.getValue(AdaptiveAppletCard.autoRefreshProperty);
        },
        set: function (value) {
            this.setValue(AdaptiveAppletCard.autoRefreshProperty, value);
            if (value) {
                value.parent = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveAppletCard.prototype.getSchemaKey = function () {
        return "AdaptiveAppletCard";
    };
    //#region Schema
    AdaptiveAppletCard.appIdProperty = new Adaptive.StringProperty(Adaptive.Versions.v1_0, "appId", true);
    AdaptiveAppletCard.autoRefreshProperty = new Adaptive.SerializableObjectProperty(Adaptive.Versions.v1_0, "autoRefresh", AutoRefreshDefinition, true);
    __decorate([
        Adaptive.property(AdaptiveAppletCard.appIdProperty)
    ], AdaptiveAppletCard.prototype, "appId", void 0);
    __decorate([
        Adaptive.property(AdaptiveAppletCard.autoRefreshProperty)
    ], AdaptiveAppletCard.prototype, "autoRefresh", null);
    return AdaptiveAppletCard;
}(Adaptive.AdaptiveCard));
exports.AdaptiveAppletCard = AdaptiveAppletCard;
var AdaptiveApplet = /** @class */ (function () {
    function AdaptiveApplet() {
        this.channelAdapter = undefined;
        this.renderedElement = document.createElement("div");
        this.renderedElement.style.position = "relative";
    }
    AdaptiveApplet.initialize = function () {
        Adaptive.GlobalRegistry.populateWithDefaultElements(AdaptiveApplet._elementsRegistry);
        Adaptive.GlobalRegistry.populateWithDefaultActions(AdaptiveApplet._actionsRegistry);
        AdaptiveApplet._actionsRegistry.unregister("Action.Submit");
        AdaptiveApplet._actionsRegistry.register("Action.Execute", ExecuteAction, Adaptive.Versions.v1_2);
    };
    AdaptiveApplet.prototype.displayCard = function (card) {
        if (card.renderedElement) {
            while (this.renderedElement.firstChild) {
                this.renderedElement.removeChild(this.renderedElement.firstChild);
            }
            this.renderedElement.appendChild(card.renderedElement);
        }
        else {
            throw new Error("displayCard: undefined card.");
        }
    };
    AdaptiveApplet.prototype.createActivityRequest = function (action, context) {
        if (this.card) {
            var request = {
                context: context,
                activity: {
                    type: "invoke",
                    name: "adaptiveCard/action",
                    appId: this.card.appId,
                    localTimezone: "",
                    localTimestamp: "",
                    value: {
                        action: {
                            type: "Action.Execute",
                            id: action.id,
                            verb: action.verb,
                            data: action.data
                        }
                    }
                },
                attemptNumber: 0
            };
            var cancel = this.onPrepareActivityRequest ? !this.onPrepareActivityRequest(this, action, request) : false;
            return cancel ? undefined : request;
        }
        else {
            throw new Error("createActivityRequest: no card has been set.");
        }
    };
    AdaptiveApplet.prototype.createMagicCodeInputCard = function (attemptNumber) {
        var payload = {
            type: "AdaptiveCard",
            version: "1.0",
            body: [
                {
                    type: "TextBlock",
                    color: "attention",
                    text: attemptNumber === 0 ? undefined : "That didn't work... let's try again.",
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "TextBlock",
                    text: "Please login in the popup. You will obtain a magic code. Paste that code below and select \"Submit\"",
                    wrap: true,
                    horizontalAlignment: "center"
                },
                {
                    type: "Input.Text",
                    id: "magicCode",
                    placeholder: "Enter magic code"
                },
                {
                    type: "ActionSet",
                    horizontalAlignment: "center",
                    actions: [
                        {
                            type: "Action.Submit",
                            id: "submitMagicCode",
                            title: "Submit"
                        },
                        {
                            type: "Action.Submit",
                            id: "cancel",
                            title: "Cancel"
                        },
                        {
                            type: "Action.Submit",
                            id: "wontWork",
                            title: "This won't work"
                        }
                    ]
                }
            ]
        };
        var card = new Adaptive.AdaptiveCard();
        card.parse(payload);
        return card;
    };
    AdaptiveApplet.prototype.internalExecuteAction = function (action, context) {
        if (this.channelAdapter) {
            if (action instanceof ExecuteAction) {
                var request = this.createActivityRequest(action, context);
                if (request) {
                    this.internalSendActivityRequestAsync(request);
                }
            }
            else {
                throw new Error("internalExecuteAction: Unsupported action type.");
            }
        }
        else {
            throw new Error("internalExecuteAction: No channel adapter set.");
        }
    };
    AdaptiveApplet.prototype.internalSendActivityRequestAsync = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var overlay, done, _loop_1, this_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.channelAdapter) {
                            throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");
                        }
                        overlay = this.createProgressOverlay(request.context);
                        this.renderedElement.appendChild(overlay);
                        done = false;
                        _loop_1 = function () {
                            var response, error_1, _a, parsedResult, loginUrl, magicCodeInputCard, left, top_1, retryIn_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        response = undefined;
                                        if (request.attemptNumber === 0) {
                                            console.log("Sending activity request to channel (attempt " + (request.attemptNumber + 1) + ")");
                                        }
                                        else {
                                            console.log("Re-sending activity request to channel (attempt " + (request.attemptNumber + 1) + ")");
                                        }
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_1.channelAdapter.sendRequestAsync(request)];
                                    case 2:
                                        response = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _b.sent();
                                        console.error("Activity request failed: " + error_1);
                                        this_1.renderedElement.removeChild(overlay);
                                        done = true;
                                        alert("Something went wrong: " + error_1);
                                        return [3 /*break*/, 4];
                                    case 4:
                                        if (!response) return [3 /*break*/, 10];
                                        _a = response.status;
                                        switch (_a) {
                                            case invoke_activity_1.ActivityStatus.Success: return [3 /*break*/, 5];
                                            case invoke_activity_1.ActivityStatus.Failure: return [3 /*break*/, 6];
                                        }
                                        return [3 /*break*/, 6];
                                    case 5:
                                        this_1.renderedElement.removeChild(overlay);
                                        parsedResult = undefined;
                                        try {
                                            parsedResult = JSON.parse(response.content);
                                        }
                                        catch (_c) {
                                            parsedResult = response.content;
                                        }
                                        if (typeof parsedResult === "string") {
                                            console.log("The activity request returned a string after " + (request.attemptNumber + 1) + " attempt(s).");
                                            alert(parsedResult);
                                        }
                                        else if (typeof parsedResult === "object") {
                                            switch (parsedResult["type"]) {
                                                case "AdaptiveCard":
                                                    console.log("The activity request returned an Adaptive Card after " + (request.attemptNumber + 1) + " attempt(s).");
                                                    this_1.setCard(parsedResult);
                                                    break;
                                                case "Activity.InvocationError.Unauthorized":
                                                    console.log("The activity request returned Activity.InvocationError.Unauthorized after " + (request.attemptNumber + 1) + " attempt(s).");
                                                    if ((request.attemptNumber + 1) <= AdaptiveApplet.maximumRequestAttempts) {
                                                        loginUrl = void 0;
                                                        try {
                                                            loginUrl = new URL(parsedResult["loginUrl"]);
                                                        }
                                                        catch (e) {
                                                            console.error("Invalid loginUrl: " + parsedResult["loginUrl"]);
                                                            throw e;
                                                        }
                                                        console.log("Login required at " + loginUrl.toString());
                                                        magicCodeInputCard = this_1.createMagicCodeInputCard(request.attemptNumber);
                                                        magicCodeInputCard.render();
                                                        magicCodeInputCard.onExecuteAction = function (submitMagicCodeAction) {
                                                            if (_this.card && submitMagicCodeAction instanceof Adaptive.SubmitAction) {
                                                                switch (submitMagicCodeAction.id) {
                                                                    case "submitMagicCode":
                                                                        var magicCode = undefined;
                                                                        if (submitMagicCodeAction.data && typeof submitMagicCodeAction.data["magicCode"] === "string") {
                                                                            magicCode = submitMagicCodeAction.data["magicCode"];
                                                                        }
                                                                        if (magicCode) {
                                                                            _this.displayCard(_this.card);
                                                                            request.activity.value.magicCode = magicCode;
                                                                            request.attemptNumber++;
                                                                            _this.internalSendActivityRequestAsync(request);
                                                                        }
                                                                        else {
                                                                            alert("Please enter the magic code you received.");
                                                                        }
                                                                        break;
                                                                    case "cancel":
                                                                        console.warn("Authentication cancelled by user.");
                                                                        _this.displayCard(_this.card);
                                                                        break;
                                                                    default:
                                                                        console.error("Unespected action taken from magic code input card (id = " + submitMagicCodeAction.id + ")");
                                                                        alert("Something went wrong. This action can't be handled.");
                                                                        break;
                                                                }
                                                            }
                                                        };
                                                        this_1.displayCard(magicCodeInputCard);
                                                        left = window.screenX + (window.outerWidth - AdaptiveApplet.authPromptWidth) / 2;
                                                        top_1 = window.screenY + (window.outerHeight - AdaptiveApplet.authPromptHeight) / 2;
                                                        window.open(loginUrl.toString(), "Login", "width=" + AdaptiveApplet.authPromptWidth + ",height=" + AdaptiveApplet.authPromptHeight + ",left=" + left + ",top=" + top_1);
                                                    }
                                                    else {
                                                        console.error("Authentication failed. Giving up after " + (request.attemptNumber + 1) + " attempt(s)");
                                                        alert("Authentication failed.");
                                                    }
                                                    break;
                                                default:
                                                    throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type (" + typeof parsedResult + ")");
                                            }
                                        }
                                        else {
                                            throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type (" + typeof parsedResult + ")");
                                        }
                                        done = true;
                                        return [3 /*break*/, 10];
                                    case 6:
                                        retryIn_1 = this_1.onActivityRequestCompleted ? this_1.onActivityRequestCompleted(this_1, response) : AdaptiveApplet.defaultTimeBetweenAttempts;
                                        if (!(retryIn_1 >= 0 && (request.attemptNumber + 1) < AdaptiveApplet.maximumRequestAttempts)) return [3 /*break*/, 8];
                                        console.warn("Activity request failed. Retrying in " + retryIn_1 + "ms");
                                        request.attemptNumber++;
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                window.setTimeout(function () { resolve(); }, retryIn_1);
                                            })];
                                    case 7:
                                        _b.sent();
                                        return [3 /*break*/, 9];
                                    case 8:
                                        console.error("Activity request failed. Giving up after " + (request.attemptNumber + 1) + " attempt(s)");
                                        this_1.renderedElement.removeChild(overlay);
                                        done = true;
                                        alert(response.content);
                                        _b.label = 9;
                                    case 9: return [3 /*break*/, 10];
                                    case 10: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!!done) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdaptiveApplet.prototype.createProgressOverlay = function (context) {
        var overlay = undefined;
        if (this.onCreateProgressOverlay) {
            overlay = this.onCreateProgressOverlay(this, context);
        }
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "aaf-progress-overlay";
            var spinner = document.createElement("div");
            spinner.className = "aaf-spinner";
            spinner.style.width = "28px";
            spinner.style.height = "28px";
            overlay.appendChild(spinner);
        }
        return overlay;
    };
    AdaptiveApplet.prototype.setCard = function (payload) {
        var _this = this;
        if (typeof payload === "object") {
            if (payload["type"] === "AdaptiveCard") {
                if (payload["$data"] !== undefined) {
                    this._cardData = payload["$data"];
                    delete payload["$data"];
                }
                this._cardPayload = payload;
            }
            else {
                this._cardData = payload;
            }
        }
        if (this._cardPayload) {
            try {
                var card = new AdaptiveAppletCard();
                var serializationContext = new Adaptive.SerializationContext();
                serializationContext.setElementRegistry(AdaptiveApplet._elementsRegistry);
                serializationContext.setActionRegistry(AdaptiveApplet._actionsRegistry);
                if (this._cardData) {
                    var evaluationContext = new Templating.EvaluationContext();
                    evaluationContext.$root = this._cardData;
                    var template = new Templating.Template(this._cardPayload);
                    var expandedCardPayload = template.expand(evaluationContext);
                    card.parse(expandedCardPayload, serializationContext);
                }
                else {
                    card.parse(this._cardPayload, serializationContext);
                }
                if (!card.appId) {
                    throw new Error("Invalid card payload. The appId property is missing.");
                }
                var doChangeCard = this.onCardChanging ? this.onCardChanging(this, this._cardPayload) : true;
                if (doChangeCard) {
                    this._card = card;
                    this._card.onExecuteAction = function (action) {
                        _this.internalExecuteAction(action, invoke_activity_1.ActivityInvocationContext.UserInteraction);
                    };
                    this._card.render();
                    if (this._card.renderedElement) {
                        this.displayCard(this._card);
                        if (this.onCardChanged) {
                            this.onCardChanged(this);
                        }
                        if (this._card.autoRefresh) {
                            this.internalExecuteAction(this._card.autoRefresh.action, invoke_activity_1.ActivityInvocationContext.AutoRefresh);
                        }
                    }
                }
            }
            catch (error) {
                // Ignore all errors
                console.error("setCard: " + error);
            }
        }
    };
    Object.defineProperty(AdaptiveApplet.prototype, "card", {
        get: function () {
            return this._card;
        },
        enumerable: true,
        configurable: true
    });
    AdaptiveApplet._elementsRegistry = new Adaptive.CardObjectRegistry();
    AdaptiveApplet._actionsRegistry = new Adaptive.CardObjectRegistry();
    AdaptiveApplet.maximumRequestAttempts = 3;
    AdaptiveApplet.defaultTimeBetweenAttempts = 3000; // 3 seconds
    AdaptiveApplet.authPromptWidth = 400;
    AdaptiveApplet.authPromptHeight = 600;
    return AdaptiveApplet;
}());
exports.AdaptiveApplet = AdaptiveApplet;
AdaptiveApplet.initialize();


/***/ }),

/***/ "./src/http-channel-adapter.ts":
/*!*************************************!*\
  !*** ./src/http-channel-adapter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var channel_adapter_1 = __webpack_require__(/*! ./channel-adapter */ "./src/channel-adapter.ts");
var invoke_activity_1 = __webpack_require__(/*! ./invoke-activity */ "./src/invoke-activity.ts");
var HttpChannelAdapter = /** @class */ (function (_super) {
    __extends(HttpChannelAdapter, _super);
    function HttpChannelAdapter(url) {
        var _this = _super.call(this) || this;
        _this.url = url;
        return _this;
    }
    HttpChannelAdapter.prototype.sendRequestAsync = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(request.activity)
                        })];
                    case 1:
                        response = _b.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        _a = {
                            request: request,
                            status: invoke_activity_1.ActivityStatus.Success
                        };
                        return [4 /*yield*/, response.text()];
                    case 2: return [2 /*return*/, (_a.content = _b.sent(),
                            _a)];
                    case 3: return [2 /*return*/, {
                            request: request,
                            status: invoke_activity_1.ActivityStatus.Failure,
                            content: response.statusText
                        }];
                }
            });
        });
    };
    return HttpChannelAdapter;
}(channel_adapter_1.ChannelAdapter));
exports.HttpChannelAdapter = HttpChannelAdapter;


/***/ }),

/***/ "./src/invoke-activity.ts":
/*!********************************!*\
  !*** ./src/invoke-activity.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ActivityInvocationContext;
(function (ActivityInvocationContext) {
    ActivityInvocationContext[ActivityInvocationContext["AutoRefresh"] = 0] = "AutoRefresh";
    ActivityInvocationContext[ActivityInvocationContext["UserInteraction"] = 1] = "UserInteraction";
})(ActivityInvocationContext = exports.ActivityInvocationContext || (exports.ActivityInvocationContext = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus[ActivityStatus["Success"] = 0] = "Success";
    ActivityStatus[ActivityStatus["Failure"] = 1] = "Failure";
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));


/***/ })

/******/ });
});