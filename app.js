"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTestClass = void 0;
function SimpleLogger(constructor) {
    // Add your code here
    console.log("Class is instantiated");
}
function ReadOnly(func, context) {
    console.log(func);
    console.log(context);
}
function LogMethod(func, context) {
    console.log(context.name);
}
// Add your code throughout the following class
var MyTestClass = function () {
    var _classDecorators = [SimpleLogger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _get_prop1_decorators;
    var _method1_decorators;
    var MyTestClass = _classThis = /** @class */ (function () {
        function MyTestClass_1(property1, property2) {
            this.property1 = __runInitializers(this, _instanceExtraInitializers);
            this.property1 = property1;
            this.property2 = property2;
        }
        Object.defineProperty(MyTestClass_1.prototype, "prop1", {
            get: function () {
                var proto = Object.getPrototypeOf(this);
                return this.property1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MyTestClass_1.prototype, "prop2", {
            get: function () {
                return this.property2;
            },
            enumerable: false,
            configurable: true
        });
        MyTestClass_1.prototype.method1 = function () {
        };
        MyTestClass_1.prototype.method2 = function () {
        };
        return MyTestClass_1;
    }());
    __setFunctionName(_classThis, "MyTestClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _get_prop1_decorators = [ReadOnly];
        _method1_decorators = [LogMethod];
        __esDecorate(_classThis, null, _get_prop1_decorators, { kind: "getter", name: "prop1", static: false, private: false, access: { has: function (obj) { return "prop1" in obj; }, get: function (obj) { return obj.prop1; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _method1_decorators, { kind: "method", name: "method1", static: false, private: false, access: { has: function (obj) { return "method1" in obj; }, get: function (obj) { return obj.method1; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyTestClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyTestClass = _classThis;
}();
exports.MyTestClass = MyTestClass;
var myInstance = new MyTestClass('propertyValue', 123);
myInstance.method1();
myInstance.method2();
