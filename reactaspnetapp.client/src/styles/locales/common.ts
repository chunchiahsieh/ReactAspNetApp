import _ from "lodash";
import { recursiveChangeValueToKey } from "utils/recursiveChangeValueToKey";

const localeCommon = {
  confirm: "Confirm",
  delete2: "Delete",
  save_and_close: "Save & Close",
  return2: "Return",
  cancel: "Cancel",
  confirm_and_delete: "Confirm & Delete",
  confirm_and_discard: "Confirm & Discard",
  signin: "Sign In",
  forgetpassword: "Forget Password",
  signout: "Sign Out",
  close: "Close",
  resetpassword: "Reset Password",
  confirmSelection: "Confirm Selection",
  account: "Account",
  password: "Password",
  selected: "Selected",
  totalRecords: "Total Records",
  page: "Page",
  ask_delete_record: "Do you want to delete the selected record?",
  ask_discard_record: "Do you want to discard the filled-out record?",
  just_can_select_one_entry:
    "This operation allows selecting only one data entry.",
  just_one_row: "This operation can only select one piece of data",
  at_least_one_row: "Please select at least one piece of data",
  missing_required_field:
    "Some required fields are not filled in. Please complete them before submitting.",
  ask_for_account: "Please enter your account.",
  no_info_need_to_reenter: "No information found, please re-enter.",
  send_passwd_reset_email:
    "The password reset has been sent to the user's email.",
  be_used_cannot_removed:
    "The deleted item contains associated data and cannot be removed",
  only_one_unit_per_unit_library:
    "Error: Only one IsBaseUnit allowed per Unit Library.",
  i18n: "internationalization",
  email: "Email",
  login: "Login",
  logout: "Logout",
  bdc_management: "Basic Data Configuration Management",
  platform_name: "Gudeng Sustainablility Platform",
  login_page: {
    fail_login: "Login failed, please try again.",
    not_all_filled: "Not all fields are filled in.",
  },
  forget_password_page: {
    title:
      "Please contact your company's administrator to reset your password. His/her contact information is as follows:",
    stCompany: "Company",
    stAdminName: "Administrator",
    stAdminEmail: "Email",
    stFieldEmpty: "Cannot find this information",
    stEnterCompanyID: "Please enter your company ID",
    stCannotFindCompany: "Please reenter the company ID",
    stSubmit: "Get The Information",
  },
  page_main: {
    title: "Please select the module function you want to enter",
    system_management: "System Management",
    oghg_management: "OGHG Management",
    pcf_management: "PCF Management",
    spm_management: "SPM Management",
  },
  main_ribbon: {
    new: "New",
    refresh: "Refresh",
    check: "Check",
    edit: "Edit",
    delete: "Delete",
    export_file: "Export File",
    download_template: "Download Template",
    upload_file: "Upload File",
    drop_file_here: "Drop file here",
    file_has_been_uploaded: "File has been uploaded",
  },
  esg_table: {
    num_of_selected: "Number of selected",
    filter: "Filter",
    edit_column_view: "Edit Column View",
  },
  backdrop: {
    error_try_again:
      "An error has occurred. Please try again later or contact the system administrator.",
    link_not_found:
      "The link cannot be found. The page or record may have been removed.",
    access_denied:
      "You do not have access to the page for this feature. Please contact the system administrator.",
  },
};

recursiveChangeValueToKey(localeCommon, "common:");
// _(localeCommon).forEach((_, key) => {localeCommon[key as keyof typeof localeCommon] = key});
export default localeCommon;
