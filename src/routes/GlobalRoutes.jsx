import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import Home from "../components/Home/Admin/AdminHome";
import CreateBank from "../components/pages/admin/bank/CreateBank";
import AllBank from "../components/pages/admin/bank/AllBank";
import CreateMD from "../components/pages/admin/managingDirector/CreateMD";
import AllMD from "./../components/pages/admin/managingDirector/AllMD";
import Register from "./../components/auth/Register";
import Login from "../components/auth/Login";
import AdminDashboard from "../components/pages/admin/AdminDashboard/AdminDashboard";
import ForgotPassword from "../components/auth/ForgotPassword";
// import PublicRoute from "../helpers/PublicRoutes";
import UpdateBank from "../components/pages/admin/bank/UpdateBank";
import UpdateMd from "../components/pages/admin/managingDirector/UpdateMd";
import Landingpage from "../components/Landingpage/Landingpage";

import ManagingDirectorHome from "../components/Home/Md/ManagingDirectorHome";
import CreateBranch from "../components/pages/md/Branch/CreateBranch";
import AllBranches from "../components/pages/md/Branch/AllBranches";
import CreateBranchManager from "../components/pages/md/BranchManager/CreateBranchManager";
import AllBranchManager from "../components/pages/md/BranchManager/AllBranchManager";
import ManagingDirectorDashboard from "../components/pages/md/MdDashboard/ManagingDirectorDashboard";
import Bhome from "../components/BankManager/Bhome";
import CreateAccount from "../components/BankManager/CreateAccount";
import PersonalDetails from "../components/BankManager/PersonalDetails";
import ServiceSection from "../components/BankManager/ServiceSection";
import DocumentSection from "../components/bankmanager/DocumentSection";

import LoanAccount from "../components/BankManager/LoanAccount";
import UpdateBranch from "../components/pages/md/Branch/UpdateBranch";
import UpdateBranchManager from "./../components/pages/md/BranchManager/UpdateBranchManager";
// import LoanApprovals from "./../components/pages/md/Approvals/LoanApprovals";
// import CardApprovals from "./../components/pages/md/Approvals/CardApprovals";
import CurrentAccounts from "../components/pages/md/Accounts/CurrentAccounts";
import SavingsAccounts from "../components/pages/md/Accounts/SavingsAccounts";
import AllAccount from "../components/pages/md/Accounts/AllAccounts";
// import LoanAccounts from "../components/pages/md/Accounts/LoanAccount";
import Chome from "./../components/pages/Customer/Home";
import AmountTransfer from "./../components/pages/Customer/AmountTransfer";
import AccountStatement from "./../components/pages/Customer/AccountStatement";
import DebitCard from "./../components/pages/Customer/DebitCard";
import ApplyCreditCard from "./../components/pages/Customer/ApplyCreditCard";
import UpdateAccount from "./../components/pages/md/Accounts/UpdateAcccount";
import UpdateBAccount from "../components/bankmanager/UpdateBAccount";
import BAllAccounts from "../components/pages/md/Accounts/AllAccounts";
import BSavingsAccounts from "../components/pages/md/Accounts/SavingsAccounts";
import BCurrentAccounts from "../components/pages/md/Accounts/CurrentAccounts";
import BranchAllAccounts from "../components/bankmanager/BranchAllAccounts";
import BranchSavingsAccount from "../components/bankmanager/BranchSavingsAccount";
import BranchCurrentAccount from "../components/bankmanager/CurrentAccount";
// import LoanAccounts from './../components/pages/md/Accounts/LoanAccount';

const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  {
    path: "/adminlayout",
    element: <AdminLayout />,
    children: [
      {
        path: "/adminlayout",
        element: <Home />,
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path: "/adminlayout/create-bank",
            element: <CreateBank />,
          },
          {
            path: "/adminlayout/update-bank/:bankId",
            element: <UpdateBank />,
          },
          {
            path: "/adminlayout/all-bank",
            element: <AllBank />,
          },
          {
            path: "/adminlayout/create-md",
            element: <CreateMD />,
          },
          {
            path: "/adminlayout/update-md/:employeeId",
            element: <UpdateMd />,
          },
          {
            path: "/adminlayout/all-md",
            element: <AllMD />,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  {
    path: "/mdlayout",
    element: <AdminLayout />,
    children: [
      {
        path: "/mdlayout",
        element: <ManagingDirectorHome />,
        children: [
          {
            index: true,
            element: <ManagingDirectorDashboard name="managing director" />,
          },
          {
            path: "/mdlayout/create-branch",
            element: <CreateBranch />,
          },
          {
            path: "/mdlayout/update-branch/:branchId",
            element: <UpdateBranch />,
          },
          {
            path: "/mdlayout/all-branches",
            element: <AllBranches />,
          },
          {
            path: "/mdlayout/create-branchManager",
            element: <CreateBranchManager />,
          },
          {
            path: "/mdlayout/branchManager/update/:employeeId",
            element: <UpdateBranchManager />,
          },
          {
            path: "/mdlayout/all-branchManager",
            element: <AllBranchManager />,
          },
          // {
          //   path: "/mdlayout/loan-approvals",
          //   element: <LoanApprovals />,
          // },
          // {
          //   path: "/mdlayout/card-approvals",
          //   element: <CardApprovals />,
          // },
          {
            path: "/mdlayout/all-branchManager",
            element: <AllBranchManager />,
          },
          {
            path: "/mdlayout/all-accounts",
            element: <AllAccount />,
          },
          {
            path: "/mdlayout/account/update/:accountNumber",
            element: <UpdateAccount />,
          },
          {
            path: "/mdlayout/savings-accounts",
            element: <SavingsAccounts />,
          },
          {
            path: "/mdlayout/current-accounts",
            element: <CurrentAccounts />,
          },
          // {
          //   path: "/mdlayout/loan-accounts",
          //   element: <LoanAccounts />,
          // },
        ],
      },
    ],
  },
  {
    path: "/bankmanager",
    element: <AdminLayout />,
    children: [
      {
        path: "/bankmanager",
        element: <Bhome />,

        children: [
          {
            index: true,
            element: (
              <ManagingDirectorDashboard name="Bank Manager DashBoard" />
            ),
          },
          {
            path: "/bankmanager/create-account",
            element: <CreateAccount />,
            children: [
              {
                index: true,
                element: <PersonalDetails />,
              },
              {
                path: "/bankmanager/create-account/PersonalDetails",
                element: <PersonalDetails />,
              },

              {
                path: "/bankmanager/create-account/ServiceDetails",
                element: <ServiceSection />,
              },
              {
                path: "/bankmanager/create-account/DocumentSection",
                element: <DocumentSection />,
              },
            ],
          },
          {
            path: "/bankmanager/All Accounts",
            element: <BranchAllAccounts />,
          },
          {
            path: "/bankmanager/Savings Accounts",
            element: <BranchSavingsAccount />,
          },
          {
            path: "/bankmanager/Current Accounts",
            element: <BranchCurrentAccount />,
          },
          {
            path: "/bankmanager/Loan Accounts",
            element: <LoanAccount />,
          },
          {
            path: "/bankmanager/account/update/:accountNumber",
            element: <UpdateBAccount />,
          },
          {
            path: "/bankmanager/create-account",
            element: <AllBank />,
          },
          {
            path: "/bankmanager/create-md",
            element: <CreateMD />,
          },
          {
            path: "/bankmanager/all-md",
            element: <AllMD />,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  {
    path: "/customer",
    element: <AdminLayout />,
    children: [
      {
        path: "/customer",
        element: <Chome />,

        children: [
          {
            index: true,
            element: <AdminDashboard name="Customer DashBoard" />,
          },
          {
            path: "/customer/Manage Beneficiary",
            element: <PersonalDetails />,
          },
          {
            path: "/customer/Amount Transfer",
            element: <AmountTransfer />,
          },

          {
            path: "/customer/Passbook",
            element: <ServiceSection />,
          },
          {
            path: "/customer/Account Statement",
            element: <AccountStatement />,
          },

          // {
          //   path: "/customer/Account Details",
          //   element: <AccountDetails />,
          // },
          // {
          //   path: "/customer/Apply Loans",
          //   element: <SavingsAccount />,
          // },
          // {
          //   path: "/customer/My Loans",
          //   element: <CurrentAccount />,
          // },
          {
            path: "/customer/Credit Cards",
            element: <ApplyCreditCard />,
          },
          {
            path: "/customer/Debit Cards",
            element: <DebitCard />,
          },
        ],
      },

      { path: "*", element: <h1>Page not found</h1> },
    ],
  },
  {
    path: "/register",
    element: (
      // <PublicRoute>
      <Register />
      // </PublicRoute>
    ),
  },

  { path: "/customer/login", element: <Login name="customer" /> },
  { path: "/employee/login", element: <Login name="employee" /> },

  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;
