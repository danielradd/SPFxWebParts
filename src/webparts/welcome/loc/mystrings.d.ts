declare interface IWelcomeWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  MorningMessageLabel: string;
  AfternoonMessageLabel: string,
  EveningMessageLabel: string,
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  UnknownEnvironment: string;
}

declare module 'WelcomeWebPartStrings' {
  const strings: IWelcomeWebPartStrings;
  export = strings;
}
