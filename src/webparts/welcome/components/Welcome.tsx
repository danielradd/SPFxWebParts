import * as React from 'react';
import styles from './Welcome.module.scss';
import type { IWelcomeProps } from './IWelcomeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";

const Welcome: React.FC<IWelcomeProps> = (props) => {

   const {
      hasTeamsContext,
      userDisplayName,
      morningMessage,
      afternoonMessage,
      eveningMessage
    } = props;

    const now = new Date();
    const hour = now.getHours();

    //const message = hour < 12 ? morningMessage : hour >= 12 && hour < 18 ? afternoonMessage : eveningMessage

    const message =
  hour < 12
    ? (morningMessage || '')
    : hour < 18
      ? (afternoonMessage || '')
      : (eveningMessage || '');

    if (!message.trim()) {
      return <Placeholder description={'Please add messages'} iconName={'Edit'} iconText={'Setup Webpart'} />   
    }

    return (
      <section className={`${styles.welcome} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>{message}, {escape(userDisplayName)}!</h2>
         </div>
        
      </section>
    );
}

export default Welcome
