import * as React from 'react';
import styles from './Faq.module.scss';
import type { IFaqProps } from './IFaqProps';
import { useEffect, useState } from 'react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";

// import { SPHttpClientResponse, SPHttpClient } from '@microsoft/sp-http';

type ListItem = {
  Id: number,
  Title: string,
  Body: string
}
const Faq: React.FC<IFaqProps> = (props) => {

  const [items, setItems] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    hasTeamsContext,
    listId,
    siteUrl,
    spHttpClient,
    sp,
    context } = props

  useEffect(() => {
    let isMounted = true; // guard against unmount

    const fetchItems = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const safeId = encodeURIComponent(listId || ''); // allow empty -> will 404
        // const url =
        //   `${siteUrl}/_api/web/lists/getbytitle('${safeTitle}')/items?$select=Id,Title,Body&$top=50`;

        // const res: SPHttpClientResponse = await spHttpClient.get(url, SPHttpClient.configurations.v1);
        // if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

        // const data = await res.json();

        const data = await sp.web.lists.getById(safeId).items.select("Id", "Title", "Body").top(50)();
        // if (isMounted) setItems(data.value as ListItem[]);
        if (isMounted) setItems(data as ListItem[]);

      } catch (e: unknown) {
        if (isMounted) {
          const message = e instanceof Error ? e.message : String(e);
          setError(message || 'Unknown error');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (listId && listId.trim().length > 0) {
      (async () => {
        await fetchItems();
      })().catch(err => {
        // Optional: handle unexpected errors outside fetchItems()
        console.error('FetchItems failed', err);
      });
    } else {
      setItems([]);
      setLoading(false);
    }

    return () => { isMounted = false; };

  }, [spHttpClient, siteUrl, listId])

  const _onConfigure = (): void => {
    // Context of the web part
    context.propertyPane.open();
  };

  return (
    <section className={`${styles.faq} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <h2>FAQ</h2>
        {!listId && <Placeholder description={'Please configure the list'} iconName={'Edit'} iconText={'Setup Required'} buttonLabel='Configure' onConfigure={_onConfigure} />}
        {loading && <div>Loading…</div>}
        {error && <div role="alert">Error: {error}</div>}
        {!loading && !error && items.length > 0 && (
          <>
            {items.map(i => <Accordion defaultCollapsed={true} key={i.Id} title={i.Title}><p>{i.Body}</p></Accordion>)}
          </>
        )}
        {!loading && !error && listId && items.length === 0 && (
          <div>No items found.</div>
        )}
      </div>

    </section>
  );
}



export default Faq
