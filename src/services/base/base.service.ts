import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IWeb } from "@pnp/sp/webs";
import { SPFI } from "@pnp/sp";
import { getSP } from "../../utils/get-sp";

export class BaseService {
  protected _web: IWeb;
  protected _sp: SPFI;

  constructor(protected readonly _context: WebPartContext) {
    this._sp = getSP(this._context);
    this._web = this._sp.web;
  }
}
