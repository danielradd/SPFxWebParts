import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IWeb } from "@pnp/sp/webs";
import { SPFI } from "@pnp/sp";
export declare class BaseService {
    protected readonly _context: WebPartContext;
    protected _web: IWeb;
    protected _sp: SPFI;
    constructor(_context: WebPartContext);
}
//# sourceMappingURL=base.service.d.ts.map