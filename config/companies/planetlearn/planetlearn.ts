import IConfigWLP from '../../IConfigWLP';

const company: IConfigWLP = {
  slug: 'planetlearn',
  companyName: ['Planet', 'Learn'],

  colors: {
    '--black-color': '#000000',
    '--white-color': '#ffffff',
    '--gray-color': '#e1e1e1',
    '--first-accent-color': '#ff8d24',
    '--second-accent-color': '#fec538',
    '--second-accent-hover-color': '#ffda80',
    '--third-accent-color': '#01c120',
    '--fourth-accent-color': '#d2d2d2',
  },

  classes: {
    trial: 'trial--planetlearn',
    background: 'background--planetlearn',
  },

  components: {
    iconLogo: 'IconPlanet',
  },
};

export default company;
