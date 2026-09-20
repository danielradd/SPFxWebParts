import * as React from "react";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { WebPartContext } from "@microsoft/sp-webpart-base";

interface ConfigurePlaceholderProps {
  context: WebPartContext;
  description: string;
  iconText: string;
  buttonLabel: string;
}

export function ConfigurePlaceholder({
  context,
  description,
  iconText,
  buttonLabel,
}: ConfigurePlaceholderProps): React.ReactElement {
  function onConfigure(): void {
    context.propertyPane.open();
  }

  return (
    <Placeholder
      description={description}
      iconName="Edit"
      iconText={iconText}
      buttonLabel={buttonLabel}
      onConfigure={onConfigure}
    />
  );
}
