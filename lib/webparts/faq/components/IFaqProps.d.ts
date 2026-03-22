import { SPHttpClient } from '@microsoft/sp-http';
import { SPFI } from "@pnp/sp";
import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IFaqProps {
    description: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
    listId: string;
    sp: SPFI;
    spHttpClient: SPHttpClient;
    siteUrl: string;
    context: WebPartContext;
}
//# sourceMappingURL=IFaqProps.d.ts.map