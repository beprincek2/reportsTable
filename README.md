# Report Display Application

A simple report display application built using **Vue.js 3** and **Vuetify** to demonstrate report management features.
---

## Demo(Desktop version only)

https://reports-table.vercel.app/

## Features

### Report Display
- Displays a list of financial reports with the following columns:
  - **Transaction ID**
  - **Date**
  - **Account Holder Name**
  - **Transaction Type** (e.g., Deposit, Withdrawal, Loan Payment)
  - **Amount**
  - **Account Balance**

### Search and Filter
- Search functionality to filter reports by:
  - **Transaction Type**
  - **Account Holder Name**

### Export Functionality
- Export the report data in the following formats:
  - **CSV**
  - **PDF**
  - **Excel**

### Additional Features
- **State Management**: Implemented using Pinia for efficient state management(not fully integrated).

---

## Tech Stack

- **Vue.js 3**: Frontend framework
- **Vuetify**: UI library for Material Design components
- **Pinia**: State management library
- **JavaScript**: Language 

---

## Installation and Setup

Follow the steps below to run the application locally:

### Prerequisites
- [Node.js](https://nodejs.org/) installed (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager installed

### Clone the Repository
```bash
git clone https://github.com/beprincek2/reportsTable.git
cd records
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Usage

1. Start the application and navigate to the local development server (e.g., `http://localhost:5173`).
2. View the financial reports displayed in the table.
3. Use the search bar to filter reports by transaction type or account holder name.
4. Click on the export buttons to download the report data in **CSV**, **PDF**, or **Excel** formats.

## Project Structure

```
src/
├── components/       # Vue components (e.g., DataTable, SearchField, ExportButton)
├── services/         # API mock service for fetching reports
├── store/            # Pinia state management setup
├── assets/           # Static assets
├── App.vue           # Main application component
├── main.js           # Application entry point
```

## API Data

Sample data is returned as a static JSON array for demonstration purposes.

## Enhancements and Additional Features

- Used **Pinia** for state management.
- Applied **Material Design Icons** for an intuitive user interface.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Developed by **Kisolo Benjamin Prince**  
For inquiries, contact me at [benjaminkisolo266@gmail.com](mailto:benjaminkisolo266@gmail.com).
