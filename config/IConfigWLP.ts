export default interface IConfigWLP {
  slug: string;
  companyName: Array<string>;

  colors: {
    '--black-color': string;
    '--white-color': string;
    '--gray-color': string;
    '--first-accent-color': string;
    '--second-accent-color': string;
    '--second-accent-hover-color': string;
    '--third-accent-color': string;
    '--fourth-accent-color': string;
  };

  classes: {
    trial?: string;
    background: string;
  };

  components: {
    iconLogo: string;
  };
}
