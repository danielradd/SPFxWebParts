import { BaseService } from "./base/base.service";
export interface IFaqItem {
    Id: number;
    Title: string;
    Body: string;
}
export declare class FaqService extends BaseService {
    getItems(listId: string): Promise<IFaqItem[]>;
}
//# sourceMappingURL=faq.service.d.ts.map