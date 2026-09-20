import { useEffect, useState } from "react";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { FaqService, IFaqItem } from "../../../services/faq.service";

export function useFaqItems(
  context: WebPartContext,
  listId: string
): { items: IFaqItem[]; loading: boolean; error: string | null } {
  const hasList = !!listId && listId.trim().length > 0;
  const [items, setItems] = useState<IFaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(hasList);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchItems(): Promise<void> {
      if (!listId || listId.trim().length === 0) {
        if (isMounted) {
          setItems([]);
          setLoading(false);
          setError(null);
        }
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const faqService = new FaqService(context);
        const data = await faqService.getItems(listId);

        if (isMounted) {
          setItems(data);
        }
      } catch (e: unknown) {
        if (isMounted) {
          const message = e instanceof Error ? e.message : String(e);
          setError(message || "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchItems().catch((err) => {
      console.error("FetchItems failed", err);
    });

    return () => {
      isMounted = false;
    };
  }, [context, listId]);

  return { items, loading, error };
}
