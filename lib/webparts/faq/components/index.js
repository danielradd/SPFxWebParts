import * as React from "react";
import * as strings from "FaqWebPartStrings";
import { ConfigurePlaceholder } from "../../../components";
import { useFaqItems } from "../hooks/use-faq-items";
import { FaqItem } from "./faq-item";
import styles from "./styles.module.scss";
export function Faq(_a) {
    var context = _a.context, listId = _a.listId;
    var _b = useFaqItems(context, listId), items = _b.items, loading = _b.loading, error = _b.error;
    var hasTeamsContext = !!context.sdks.microsoftTeams;
    return (React.createElement("section", { className: "".concat(styles.faq, " ").concat(hasTeamsContext ? styles.teams : "") },
        React.createElement("div", { className: styles.content },
            React.createElement("h2", { className: styles.title }, strings.Title),
            !listId && (React.createElement(ConfigurePlaceholder, { context: context, description: strings.PlaceholderDescription, iconText: strings.PlaceholderIconText, buttonLabel: strings.PlaceholderButtonLabel })),
            loading && React.createElement("div", null, strings.Loading),
            error && (React.createElement("div", { role: "alert" },
                strings.ErrorPrefix,
                " ",
                error)),
            !loading && !error && items.length > 0 && (React.createElement(React.Fragment, null, items.map(function (item) { return (React.createElement(FaqItem, { key: item.Id, title: item.Title, body: item.Body })); }))),
            !loading && !error && listId && items.length === 0 && (React.createElement("div", null, strings.NoItemsFound)))));
}
//# sourceMappingURL=index.js.map