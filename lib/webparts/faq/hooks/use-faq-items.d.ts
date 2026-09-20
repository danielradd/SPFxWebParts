import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IFaqItem } from "../../../services/faq.service";
export declare function useFaqItems(context: WebPartContext, listId: string): {
    items: IFaqItem[];
    loading: boolean;
    error: string | null;
};
//# sourceMappingURL=use-faq-items.d.ts.map