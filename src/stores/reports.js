import { defineStore } from 'pinia';
import getAllReports from '@/services/api';

export const useReportsStore = defineStore('reports', {
  state: () => ({
    reports: [],
    error: null,
    searchFilter: '',
  }),
  actions: {
    async loadReports() {
      try {
        const { reports, load } = getAllReports();
        await load();
        this.reports = reports.value || [];
      } catch (err) {
        this.error = 'Failed to load reports';
        console.error(err);
      }
    },
    setSearchFilter(filter) {
      this.searchFilter = filter;
    },
  },
  getters: {
    filteredReports(state) {
      if (state.searchFilter.trim() !== '') {
        const query = state.searchFilter.toLowerCase();
        return state.reports.filter(
          (item) =>
            item.accountHolderName.toLowerCase().includes(query) ||
            item.transactionType.toLowerCase().includes(query)
        );
      }
      return state.reports;
    },
  },
});
