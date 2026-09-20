import { BaseService } from "./base/base.service";

export interface IFaqItem {
  Id: number;
  Title: string;
  Body: string;
}

export class FaqService extends BaseService {
  public async getItems(listId: string): Promise<IFaqItem[]> {
    if (!listId || listId.trim().length === 0) {
      return [];
    }

    const items = await this._web.lists
      .getById(listId)
      .items.select("Id", "Title", "Body")
      .top(50)();

    return items as IFaqItem[];
  }
}
