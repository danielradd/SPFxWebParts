declare interface IFaqWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
  ListTitleFieldLabel: string;
  Title: string;
  Loading: string;
  NoItemsFound: string;
  ErrorPrefix: string;
  PlaceholderDescription: string;
  PlaceholderIconText: string;
  PlaceholderButtonLabel: string;
}

declare module 'FaqWebPartStrings' {
  const strings: IFaqWebPartStrings;
  export = strings;
}
