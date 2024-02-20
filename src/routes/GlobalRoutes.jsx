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
import CreateAccount from "../components/bankmanager/CreateAccount";
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
import ManageBeneficiary from "../components/pages/Customer/manageBeneficiary/ManageBeneficiary";
import AddBeneficiary from "../components/pages/Customer/manageBeneficiary/AddBeneficiary";
import PassBook from "../components/pages/Customer/PassBook";
import UpdateBeneficiary from "../components/pages/Customer/manageBeneficiary/UpdateBeneficiary";
import ViewBeneficiary from "../components/pages/Customer/manageBeneficiary/ViewBeneficiary";
import AccountDetails from "../components/pages/Customer/AccountDetails";
import UploadProfile from "../components/navbar/UploadProfile";
import CommingSoon from "../components/pages/admin/CommingSoon";
import RestingPage from "../components/bankmanager/RestingPage";
import CustomerDashBoard from "../components/pages/Customer/CustomerDashBoard";
import BMDashboard from "./../components/bankmanager/bankManagerDashboard/BMDashboard";
import RestingComp from "../components/pages/Customer/RestingComp";

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
          {
            path: "/adminlayout/uploadProfile",
            element: <UploadProfile />,
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
          {
            path: "/mdlayout/uploadProfile",
            element: <UploadProfile />,
          },
          {
            path: "/mdlayout/comingSoon",
            element: <CommingSoon />,
          },
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
            element: <BMDashboard name="Bank Manager DashBoard" />,
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
            path: "/bankmanager/Create Account",
            element: <CreateAccount />,
            children: [
              {
                index: true,
                element: <PersonalDetails />,
              },
              {
                path: "/bankmanager/Create Account/PersonalDetails",
                element: <PersonalDetails />,
              },

              {
                path: "/bankmanager/Create Account/ServiceDetails",
                element: <ServiceSection />,
              },
              {
                path: "/bankmanager/Create Account/DocumentSection",
                element: <DocumentSection />,
              },
            ],
          },
          {
            path: "/bankmanager/All Accounts",
            element: <BranchAllAccounts />,
          },
          {
            path: "/bankmanager/Rest",
            element: <RestingPage />,
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
          {
            path: "/bankmanager/uploadProfile",
            element: <UploadProfile />,
          },
          {
            path: "/bankmanager/comingSoon",
            element: <CommingSoon />,
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
            element: <CustomerDashBoard name="Customer DashBoard" />,
          },
          {
            path: "/customer/Manage Beneficiary",
            element: <ManageBeneficiary />,
            children: [
              {
                path: "/customer/Manage Beneficiary/add Beneficiary",
                element: <AddBeneficiary />,
              },
            ],
          },
          {
            path: "/customer/Manage Beneficiary",
            element: <ManageBeneficiary />,
            children: [
              {
                index: true,
                element: <AddBeneficiary />,
              },
              {
                path: "/customer/Manage Beneficiary/add Beneficiary",
                element: <AddBeneficiary />,
              },

              {
                path: "/customer/Manage Beneficiary/Modify Beneficiary/:beneficiaryId",
                element: <UpdateBeneficiary />,
              },
              {
                path: "/customer/Manage Beneficiary/Delete Beneficiary",
                element: <DocumentSection />,
              },
              {
                path: "/customer/Manage Beneficiary/View Beneficiary",
                element: <ViewBeneficiary />,
              },
            ],
          },
          {
            path: "/customer/dashboard",
            element: <CustomerDashBoard name="Customer DashBoard" />,
          },
          {
            path: "/customer/Amount Transfer",
            element: <AmountTransfer />,
          },
          {
            path: "/customer/RestComp",
            element: <RestingComp />,
          },

          {
            path: "/customer/Passbook",
            element: <PassBook />,
          },
          {
            path: "/customer/Account Statement",
            element: <AccountStatement />,
          },

          {
            path: "/customer/Account Details",
            element: <AccountDetails />,
          },
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
          {
            path: "/customer/comingSoon",
            element: <CommingSoon />,
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
