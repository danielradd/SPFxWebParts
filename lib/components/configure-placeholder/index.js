import * as React from "react";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
export function ConfigurePlaceholder(_a) {
    var context = _a.context, description = _a.description, iconText = _a.iconText, buttonLabel = _a.buttonLabel;
    function onConfigure() {
        context.propertyPane.open();
    }
    return (React.createElement(Placeholder, { description: description, iconName: "Edit", iconText: iconText, buttonLabel: buttonLabel, onConfigure: onConfigure }));
}
//# sourceMappingURL=index.js.map