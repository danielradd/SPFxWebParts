import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  type IPropertyPaneConfiguration
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from "@pnp/spfx-property-controls";

import * as strings from "FaqWebPartStrings";
import { App } from "./App";
import { IProps } from "./components/props";

export interface IFaqWebPartProps {
  listId: string;
}

export default class FaqWebPart extends BaseClientSideWebPart<IFaqWebPartProps> {

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    const element: React.ReactElement<IProps> = React.createElement(App, {
      context: this.context,
      ...this.properties
    });

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then();
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = "";
          switch (context.app.host.name) {
            case "Office":
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case "Outlook":
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case "Teams":
            case "TeamsModern":
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
      this.domElement.style.setProperty("--link", semanticColors.link || null);
      this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldListPicker("listId", {
                  label: strings.ListTitleFieldLabel,
                  selectedList: this.properties.listId,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  multiSelect: false,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: undefined,
                  deferredValidationTime: 0,
                  key: "listIdUnique"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
