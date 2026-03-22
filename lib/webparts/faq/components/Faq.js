var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import * as React from 'react';
import styles from './Faq.module.scss';
import { useEffect, useState } from 'react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
var Faq = function (props) {
    var _a = useState([]), items = _a[0], setItems = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var hasTeamsContext = props.hasTeamsContext, listId = props.listId, siteUrl = props.siteUrl, spHttpClient = props.spHttpClient, sp = props.sp, context = props.context;
    useEffect(function () {
        var isMounted = true; // guard against unmount
        var fetchItems = function () { return __awaiter(void 0, void 0, void 0, function () {
            var safeId, data, e_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        setError(null);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        safeId = encodeURIComponent(listId || '');
                        return [4 /*yield*/, sp.web.lists.getById(safeId).items.select("Id", "Title", "Body").top(50)()];
                    case 2:
                        data = _a.sent();
                        // if (isMounted) setItems(data.value as ListItem[]);
                        if (isMounted)
                            setItems(data);
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        if (isMounted) {
                            message = e_1 instanceof Error ? e_1.message : String(e_1);
                            setError(message || 'Unknown error');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (isMounted)
                            setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        if (listId && listId.trim().length > 0) {
            (function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetchItems()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })().catch(function (err) {
                // Optional: handle unexpected errors outside fetchItems()
                console.error('FetchItems failed', err);
            });
        }
        else {
            setItems([]);
            setLoading(false);
        }
        return function () { isMounted = false; };
    }, [spHttpClient, siteUrl, listId]);
    var _onConfigure = function () {
        // Context of the web part
        context.propertyPane.open();
    };
    return (React.createElement("section", { className: "".concat(styles.faq, " ").concat(hasTeamsContext ? styles.teams : '') },
        React.createElement("div", { className: styles.welcome },
            React.createElement("h2", null, "FAQ"),
            !listId && React.createElement(Placeholder, { description: 'Please configure the list', iconName: 'Edit', iconText: 'Setup Required', buttonLabel: 'Configure', onConfigure: _onConfigure }),
            loading && React.createElement("div", null, "Loading\u2026"),
            error && React.createElement("div", { role: "alert" },
                "Error: ",
                error),
            !loading && !error && items.length > 0 && (React.createElement(React.Fragment, null, items.map(function (i) { return React.createElement(Accordion, { defaultCollapsed: true, key: i.Id, title: i.Title },
                React.createElement("p", null, i.Body)); }))),
            !loading && !error && listId && items.length === 0 && (React.createElement("div", null, "No items found.")))));
};
export default Faq;
//# sourceMappingURL=Faq.js.map