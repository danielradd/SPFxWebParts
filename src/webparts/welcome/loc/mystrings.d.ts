declare interface IWelcomeWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  MorningMessageLabel: string;
  AfternoonMessageLabel: string;
  EveningMessageLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
  PlaceholderDescription: string;
  PlaceholderIconText: string;
  PlaceholderButtonLabel: string;
}

declare module 'WelcomeWebPartStrings' {
  const strings: IWelcomeWebPartStrings;
  export = strings;
}
