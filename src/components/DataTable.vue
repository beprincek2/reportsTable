<template><div class="table-container">
  <div v-if="reports">
    <h1>Records Table</h1>
    
    <div class="nnn">
    <EButton label="Export to PDF" :onClick="exportToPDF" type="pdf"/>
    <EButton label="Export to Excel" :onClick="exportToExcel" type="excel"/>
    <EButton label="Export to CSV" :onClick="exportToCSV" type="csv"/>


    <SearchField @search="handleSearch"  /></div>
    <v-data-table
      :headers="headers"
      :items="filteredReports"
      :items-per-page="-1"
      hide-default-footer 
      class="elevation-25"
    ></v-data-table>
  </div>
  <div v-else>
    <p>Loading data, please wait...</p>
  </div>
</div>
</template>

<script>

import { VDataTable } from 'vuetify/lib/components/index.mjs';
import getAllReports from '@/services/api';
import SearchField from './SearchField.vue';
import { computed, ref } from 'vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'
import EButton from './EButton.vue';
export default {
  components: {
    VDataTable,
    SearchField,
    EButton
  },

  setup() {
    const { reports, error, load } = getAllReports();
    const searchFilter = ref('')
    load();

    const filteredReports = computed(() => {
      if (searchFilter.value.trim() !== '') {
        return (reports.value || []).filter((item) =>
          item.accountHolderName
            .toLowerCase()
            .includes(searchFilter.value.toLowerCase()) ||
            item.transactionType.toLowerCase().includes(searchFilter.value.toLowerCase())
        );
      }
      return reports.value || [];
    });

    const handleSearch = (search) =>{
      searchFilter.value = search;
    }

    const exportToPDF = () => {
      const doc = new jsPDF();

      doc.text('Records Table', 14, 20);

      doc.autoTable({
        head: [
          [
            'TRANSACTION ID',
            'TRANSACTION DATE',
            'ACCOUNT HOLDER',
            'TRANSACTION TYPE',
            'AMOUNT',
            'ACCOUNT BALANCE'
          ]
        ],
        body: filteredReports.value.map((item) => [
          item.transactionId,
          item.date,
          item.accountHolderName,
          item.transactionType,
          item.amount,
          item.accountBalance,
        ]),
        startY: 30,
      })

      doc.save('Records_Table.pdf');
    }

    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(filteredReports.value);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,ws,'Records');
      XLSX.writeFile(wb, 'Records_Table.xlsx');
    }

    const exportToCSV = () =>{
      const ws = XLSX.utils.json_to_sheet(filteredReports.value);
      const csv = XLSX.utils.sheet_to_csv(ws);

      const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'Records_Table.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click()
      document.body.removeChild(link);
    }

    return {
      reports,
      error,
      searchFilter,
      filteredReports,
      handleSearch,
      exportToPDF,
      exportToExcel,
      exportToCSV,
      headers: [
        {
          title: 'TRANSACTION ID',
          align: 'center',
          sortable: false,
          key: 'transactionId',
        },
        {
          title: 'TRANSACTION DATE',
          align: 'center',
          sortable: false,
          key: 'date',
        },
        {
          title: 'ACCOUNT HOLDER',
          align: 'center',
          sortable: false,
          key: 'accountHolderName',
        },
        {
          title: 'TRANSACTION TYPE',
          align: 'center',
          sortable: false,
          key: 'transactionType',
        },
        {
          title: 'AMOUNT',
          align: 'center',
          sortable: false,
          key: 'amount',
        },
        {
          title: 'ACCOUNT BALANCE',
          align: 'center',
          sortable: false,
          key: 'accountBalance',
        },
      ],
    };

    
  },
};



    
</script>

<style>
.nnn{
  margin-left:200px ;
}
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
h1 {
  text-align: center;
  margin-left: 200px;
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 900;
}

.v-data-table {
  width: 100%;
  margin-left: 100px;
}

.v-data-table thead th,
.v-data-table tbody td {
  border: 1px solid #ccc;
}

.v-data-table thead th {
  font-weight: bolder;
  font-size: 20px;
  padding: 20px 16px;
  background-color: rgb(223, 217, 217);
}
</style>

  

   <!--

 ||the pinia code below



   <template>
    <div class="table-container">
      <div v-if="filteredReports.length">
        <div class="nnn">
          <h1>Records Table</h1>
          <EButton label="Export to PDF" :onClick="exportToPDF" type="pdf" />
          <EButton label="Export to Excel" :onClick="exportToExcel" type="excel" />
          <EButton label="Export to CSV" :onClick="exportToCSV" type="csv" />
        </div>
        <SearchField @search="setSearchFilter" />
        <v-data-table
          :headers="headers"
          :items="filteredReports"
          :items-per-page="-1"
          hide-default-footer
          class="elevation-20"
        ></v-data-table>
      </div>
      <div v-else>
        <p>Loading data...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { VDataTable } from 'vuetify/lib/components/index.mjs';
  import { useReportsStore } from '@/stores/reports';
  import EButton from './EButton.vue';
  import SearchField from './SearchField.vue';
  import jsPDF from 'jspdf';
  import 'jspdf-autotable';
  import * as XLSX from 'xlsx';
  
  export default {
    components: {
      VDataTable,
      EButton,
      SearchField,
    },
    setup() {
      const store = useReportsStore();
      store.loadReports();
  
      const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text('Records Table', 14, 20);
        doc.autoTable({
          head: [
            [
              'TRANSACTION ID',
              'TRANSACTION DATE',
              'ACCOUNT HOLDER',
              'TRANSACTION TYPE',
              'AMOUNT',
              'ACCOUNT BALANCE',
            ],
          ],
          body: store.filteredReports.map((item) => [
            item.transactionId,
            item.date,
            item.accountHolderName,
            item.transactionType,
            item.amount,
            item.accountBalance,
          ]),
          startY: 30,
        });
        doc.save('Records_Table.pdf');
      };
  
      const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(store.filteredReports);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Records');
        XLSX.writeFile(wb, 'Records_Table.xlsx');
      };
  
      const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(store.filteredReports);
        const csv = XLSX.utils.sheet_to_csv(ws);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'Records_Table.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  
      return {
        store,
        headers: [
          { title: 'TRANSACTION ID', align: 'center', sortable: false, key: 'transactionId' },
          { title: 'TRANSACTION DATE', align: 'center', sortable: false, key: 'date' },
          { title: 'ACCOUNT HOLDER', align: 'center', sortable: false, key: 'accountHolderName' },
          { title: 'TRANSACTION TYPE', align: 'center', sortable: false, key: 'transactionType' },
          { title: 'AMOUNT', align: 'center', sortable: false, key: 'amount' },
          { title: 'ACCOUNT BALANCE', align: 'center', sortable: false, key: 'accountBalance' },
        ],
        exportToPDF,
        exportToExcel,
        exportToCSV,
        setSearchFilter: store.setSearchFilter,
        filteredReports: store.filteredReports,
      };
    },
  };
  </script>
  

  <style >
.nnn{
  margin-left:200px ;
}
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
h1 {
  text-align: center;
  margin-left: 200px;
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 900;
}

.v-data-table {
  width: 100%;
  margin-left: 100px;
}

.v-data-table thead th,
.v-data-table tbody td {
  border: 1px solid #ccc;
}

.v-data-table thead th {
  font-weight: bolder;
  font-size: 20px;
  padding: 20px 16px;
  background-color: rgb(223, 217, 217);
}
</style> -->