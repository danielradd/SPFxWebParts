import * as React from "react";
import * as strings from "FaqWebPartStrings";
import { ConfigurePlaceholder } from "../../../components";
import { useFaqItems } from "../hooks/use-faq-items";
import { FaqItem } from "./faq-item";
import { IProps } from "./props";
import styles from "./styles.module.scss";

export function Faq({ context, listId }: IProps): React.ReactElement {
  const { items, loading, error } = useFaqItems(context, listId);
  const hasTeamsContext = !!context.sdks.microsoftTeams;

  return (
    <section className={`${styles.faq} ${hasTeamsContext ? styles.teams : ""}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{strings.Title}</h2>
        {!listId && (
          <ConfigurePlaceholder
            context={context}
            description={strings.PlaceholderDescription}
            iconText={strings.PlaceholderIconText}
            buttonLabel={strings.PlaceholderButtonLabel}
          />
        )}
        {loading && <div>{strings.Loading}</div>}
        {error && (
          <div role="alert">
            {strings.ErrorPrefix} {error}
          </div>
        )}
        {!loading && !error && items.length > 0 && (
          <>
            {items.map((item) => (
              <FaqItem key={item.Id} title={item.Title} body={item.Body} />
            ))}
          </>
        )}
        {!loading && !error && listId && items.length === 0 && (
          <div>{strings.NoItemsFound}</div>
        )}
      </div>
    </section>
  );
}
