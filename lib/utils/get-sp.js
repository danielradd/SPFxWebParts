import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { spfi, SPFx } from "@pnp/sp";
export function getSP(context, siteUrl) {
    return spfi(siteUrl).using(SPFx(context));
}
//# sourceMappingURL=get-sp.js.map