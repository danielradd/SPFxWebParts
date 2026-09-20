import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import * as strings from "WelcomeWebPartStrings";
import { ConfigurePlaceholder } from "../../../components";
import { useGreeting } from "../hooks/use-greeting";
import styles from "./styles.module.scss";
export function Welcome(_a) {
    var context = _a.context, userDisplayName = _a.userDisplayName, morningMessage = _a.morningMessage, afternoonMessage = _a.afternoonMessage, eveningMessage = _a.eveningMessage;
    var message = useGreeting({
        morningMessage: morningMessage,
        afternoonMessage: afternoonMessage,
        eveningMessage: eveningMessage
    });
    var hasTeamsContext = !!context.sdks.microsoftTeams;
    if (!message.trim()) {
        return (React.createElement(ConfigurePlaceholder, { context: context, description: strings.PlaceholderDescription, iconText: strings.PlaceholderIconText, buttonLabel: strings.PlaceholderButtonLabel }));
    }
    return (React.createElement("section", { className: "".concat(styles.welcome, " ").concat(hasTeamsContext ? styles.teams : "") },
        React.createElement("h2", { className: styles.title },
            message,
            ", ",
            escape(userDisplayName),
            "!")));
}
//# sourceMappingURL=index.js.map