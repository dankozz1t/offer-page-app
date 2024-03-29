import { defineStore } from 'pinia';
import IConfigWLP from '~/config/IConfigWLP.ts';

const companies = ['planetlearn', 'smartstudy'];

export const useCompanyStore = defineStore('company', {
  state: () => ({
    companySlug: '',
    currentCompany: {} as IConfigWLP,
  }),

  getters: {
    getCompany: (state) => state.currentCompany,
    getComponent: (state) => state.currentCompany.components,
  },

  actions: {
    async setCompany() {
      const router = useRouter();

      const abTest = router.currentRoute.value.query.abtest;

      if (router.currentRoute.value.name === 'offer-page') {
        this.companySlug = localStorage.getItem('companySlug') || '';
        if (this.companySlug) {
          return await this.loadCompany();
        }
      }

      switch (abTest) {
        case 'var1':
          await this.setCompanySlugAndLoad('planetlearn');
          router.push({ path: '/offer-page' });
          break;

        case 'var2':
          await this.setCompanySlugAndLoad('smartstudy');
          router.push({ path: '/offer-page' });
          break;

        default:
          await this.setCompanySlugAndLoad(companies[Math.floor(Math.random() * companies.length)]);
          localStorage.removeItem('timeLeft');
          router.push({ path: '/offer-page' });
          break;
      }
    },

    setCompanySlugAndLoad(slug: string) {
      this.companySlug = slug;
      localStorage.setItem('companySlug', this.companySlug);
      return this.loadCompany();
    },

    async loadCompany() {
      await this.loadCompanyModule();
      await this.loadCompanyColors();

      document.title = this.currentCompany.companyName.join('');
    },

    async loadCompanyModule() {
      const companyModule = await import(
        `~/config/companies/${this.companySlug}/${this.companySlug}.ts`
      );
      this.currentCompany = companyModule.default;
    },

    async loadCompanyColors() {
      Object.keys(this.currentCompany.colors).map((key) => {
        const color = { key: key, value: this.currentCompany.colors[key] };

        document.documentElement.style.setProperty(color.key, color.value);
      });
    },
  },
});
