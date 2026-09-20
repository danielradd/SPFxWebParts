import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

import { spfi, SPFx, SPFI } from "@pnp/sp";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export function getSP(context: WebPartContext, siteUrl?: string): SPFI {
  return spfi(siteUrl).using(SPFx(context));
}
