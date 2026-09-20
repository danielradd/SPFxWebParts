import * as React from "react";
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import styles from "./styles.module.scss";

interface FaqItemProps {
  title: string;
  body: string;
}

export function FaqItem({ title, body }: FaqItemProps): React.ReactElement {
  return (
    <Accordion defaultCollapsed={true} title={title}>
      <p className={styles.body}>{body}</p>
    </Accordion>
  );
}
