import _a, { sep } from 'path';
import require$$0 from 'util';
import _b from 'fs';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

const callsites = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

var callsites_1 = callsites;
// TODO: Remove this for the next major release
var _default = callsites;
callsites_1.default = _default;

var callerCallsite = ({depth = 0} = {}) => {
	const callers = [];
	const callerFileSet = new Set();

	for (const callsite of callsites_1()) {
		const fileName = callsite.getFileName();
		const hasReceiver = callsite.getTypeName() !== null && fileName !== null;

		if (!callerFileSet.has(fileName)) {
			callerFileSet.add(fileName);
			callers.unshift(callsite);
		}

		if (hasReceiver) {
			return callers[depth];
		}
	}
};

function getPackageName() {
    var callerPath = callerCallsite().getFileName();
    var packageDirPaths = atom.packages.getPackageDirPaths();
    var intersection = packageDirPaths.filter(function (packageDirPath) {
        return callerPath.startsWith(packageDirPath);
    });
    if (intersection === null || intersection === void 0 ? void 0 : intersection.length) {
        return callerPath
            .replace(intersection[0], '')
            .split(sep)
            .filter(function (fragment) { return fragment; })[0] || '';
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

const callsites$1 = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

var callsites_1$1 = callsites$1;
// TODO: Remove this for the next major release
var _default$1 = callsites$1;
callsites_1$1.default = _default$1;

var callerCallsite$1 = ({depth = 0} = {}) => {
	const callers = [];
	const callerFileSet = new Set();

	for (const callsite of callsites_1$1()) {
		const fileName = callsite.getFileName();
		const hasReceiver = callsite.getTypeName() !== null && fileName !== null;

		if (!callerFileSet.has(fileName)) {
			callerFileSet.add(fileName);
			callers.unshift(callsite);
		}

		if (hasReceiver) {
			return callers[depth];
		}
	}
};

var lib = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
var resolve = _a.resolve, sep = _a.sep;
var promisify = require$$0.promisify;
var readFile = _b.readFile, readFileSync = _b.readFileSync;

var readFileAsync = promisify(readFile);
function readManifest(packageName) {
    if (packageName === void 0) { packageName = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var filePath, fileContents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = resolveFilePath(packageName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, readFileAsync(filePath, 'utf8')];
                case 2:
                    fileContents = _a.sent();
                    return [2 /*return*/, JSON.parse(fileContents)];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.readManifest = readManifest;
function readManifestSync(packageName) {
    if (packageName === void 0) { packageName = ''; }
    var filePath = resolveFilePath(packageName);
    try {
        var fileContents = readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    }
    catch (err) {
        return null;
    }
}
exports.readManifestSync = readManifestSync;
function resolveFilePath(packageName) {
    packageName = (packageName === null || packageName === void 0 ? void 0 : packageName.length) ? packageName : getPackageName();
    var packagePath = atom.packages.resolvePackagePath(packageName);
    var filePath = resolve(packagePath, 'package.json');
    return filePath;
}
function getPackageName() {
    var callerPath = callerCallsite$1().getFileName();
    var packageDirPaths = atom.packages.getPackageDirPaths();
    var intersection = packageDirPaths.filter(function (packageDirPath) {
        return callerPath.startsWith(packageDirPath);
    });
    if (intersection === null || intersection === void 0 ? void 0 : intersection.length) {
        return callerPath
            .replace(intersection[0], '')
            .split(sep)
            .filter(function (fragment) { return fragment; })[0] || '';
    }
}

});

var lib$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

const meta = lib.readManifestSync();
const unsupportedTypes = [
    'table'
];
function _console(type, ...args) {
    var _a;
    if ((_a = atom) === null || _a === void 0 ? void 0 : _a.inDevMode()) {
        if (!unsupportedTypes.includes(type)) {
            args.unshift(`[${meta['name']}]`);
        }
        return commonjsGlobal.console[type](...args);
    }
}
function assert(...args) {
    return _console('assert', ...args);
}
exports.assert = assert;
function clear(...args) {
    return _console('clear', ...args);
}
exports.clear = clear;
function context(...args) {
    return _console('context', ...args);
}
exports.context = context;
function count(...args) {
    return _console('count', ...args);
}
exports.count = count;
function countReset(...args) {
    return _console('countReset', ...args);
}
exports.countReset = countReset;
function debug(...args) {
    return _console('debug', ...args);
}
exports.debug = debug;
function dir(...args) {
    return _console('dir', ...args);
}
exports.dir = dir;
function dirxml(...args) {
    return _console('dirxml', ...args);
}
exports.dirxml = dirxml;
function error(...args) {
    return _console('error', ...args);
}
exports.error = error;
function group(...args) {
    return _console('group', ...args);
}
exports.group = group;
function groupCollapsed(...args) {
    return _console('groupCollapsed', ...args);
}
exports.groupCollapsed = groupCollapsed;
function groupEnd(...args) {
    return _console('groupEnd', ...args);
}
exports.groupEnd = groupEnd;
function info(...args) {
    return _console('info', ...args);
}
exports.info = info;
function log(...args) {
    return _console('log', ...args);
}
exports.log = log;
function profile(...args) {
    return _console('profile', ...args);
}
exports.profile = profile;
function profileEnd(...args) {
    return _console('profileEnd', ...args);
}
exports.profileEnd = profileEnd;
function table(...args) {
    return _console('table', ...args);
}
exports.table = table;
function time(...args) {
    return _console('time', ...args);
}
exports.time = time;
function timeEnd(...args) {
    return _console('timeEnd', ...args);
}
exports.timeEnd = timeEnd;
function timeLog(...args) {
    return _console('timeLog', ...args);
}
exports.timeLog = timeLog;
function timeStamp(...args) {
    return _console('timeStamp', ...args);
}
exports.timeStamp = timeStamp;
function trace(...args) {
    return _console('trace', ...args);
}
exports.trace = trace;
function warn(...args) {
    return _console('warn', ...args);
}
exports.warn = warn;

});

function openPackageSettings(userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    var options = __assign({ pending: true, searchAllPanes: true }, userOptions);
    var packageName = getPackageName();
    if (!packageName) {
        lib$1.error('Package name not found');
    }
    atom.workspace.open("atom://config/packages/" + packageName, options);
}

export { openPackageSettings };
