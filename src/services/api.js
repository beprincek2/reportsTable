import { ref } from "vue";

const getAllReports = () => {
  const reports = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      
      const data = [
        {
          transactionId: "TX12345",
          date: "2020-01-12",
          accountHolderName: "Kisolo Prince",
          transactionType: "Deposit",
          amount: 1000000,
          accountBalance: 2000000,
        },
        {
          transactionId: "TX12346",
          date: "2020-02-29",
          accountHolderName: "Ochaka Samuel",
          transactionType: "Deposit",
          amount: 50000000,
          accountBalance: 100000000,
        },
        {
          transactionId: "TX12347",
          date: "2020-05-03",
          accountHolderName: "Odoch Ambrose",
          transactionType: "Loan Payment",
          amount: 100000,
          accountBalance: 200000,
        },
        {
          transactionId: "TX12348",
          date: "2020-01-01",
          accountHolderName: "Serena Nassozi",
          transactionType: "Withdraw",
          amount: 300000,
          accountBalance: 500000,
        },
      ];


      await new Promise((resolve) => setTimeout(resolve, 500));

      reports.value = data;
    } catch (err) {
      error.value = "Failed to load data";
      console.log(error.value);
    }
  };

  return { reports, error, load };
};

export default getAllReports;
