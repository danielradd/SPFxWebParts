import * as React from "react";
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import styles from "./styles.module.scss";
export function FaqItem(_a) {
    var title = _a.title, body = _a.body;
    return (React.createElement(Accordion, { defaultCollapsed: true, title: title },
        React.createElement("p", { className: styles.body }, body)));
}
//# sourceMappingURL=index.js.map