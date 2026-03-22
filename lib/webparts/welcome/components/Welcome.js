import * as React from 'react';
import styles from './Welcome.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
var Welcome = function (props) {
    var hasTeamsContext = props.hasTeamsContext, userDisplayName = props.userDisplayName, morningMessage = props.morningMessage, afternoonMessage = props.afternoonMessage, eveningMessage = props.eveningMessage;
    var now = new Date();
    var hour = now.getHours();
    //const message = hour < 12 ? morningMessage : hour >= 12 && hour < 18 ? afternoonMessage : eveningMessage
    var message = hour < 12
        ? (morningMessage || '')
        : hour < 18
            ? (afternoonMessage || '')
            : (eveningMessage || '');
    if (!message.trim()) {
        return React.createElement(Placeholder, { description: 'Please add messages', iconName: 'Edit', iconText: 'Setup Webpart' });
    }
    return (React.createElement("section", { className: "".concat(styles.welcome, " ").concat(hasTeamsContext ? styles.teams : '') },
        React.createElement("div", { className: styles.welcome },
            React.createElement("h2", null,
                message,
                ", ",
                escape(userDisplayName),
                "!"))));
};
export default Welcome;
//# sourceMappingURL=Welcome.js.map