import { getSP } from "../../utils/get-sp";
var BaseService = /** @class */ (function () {
    function BaseService(_context) {
        this._context = _context;
        this._sp = getSP(this._context);
        this._web = this._sp.web;
    }
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=base.service.js.map