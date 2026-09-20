import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import * as strings from "WelcomeWebPartStrings";
import { ConfigurePlaceholder } from "../../../components";
import { useGreeting } from "../hooks/use-greeting";
import { IProps } from "./props";
import styles from "./styles.module.scss";

export function Welcome({
  context,
  userDisplayName,
  morningMessage,
  afternoonMessage,
  eveningMessage
}: IProps): React.ReactElement {
  const message = useGreeting({
    morningMessage,
    afternoonMessage,
    eveningMessage
  });
  const hasTeamsContext = !!context.sdks.microsoftTeams;

  if (!message.trim()) {
    return (
      <ConfigurePlaceholder
        context={context}
        description={strings.PlaceholderDescription}
        iconText={strings.PlaceholderIconText}
        buttonLabel={strings.PlaceholderButtonLabel}
      />
    );
  }

  return (
    <section className={`${styles.welcome} ${hasTeamsContext ? styles.teams : ""}`}>
      <h2 className={styles.title}>
        {message}, {escape(userDisplayName)}!
      </h2>
    </section>
  );
}
