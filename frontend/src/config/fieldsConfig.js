export const fieldsConfig = [
  { name: "applicationId", label: "Application ID", type: "text", optional: true },
  { name: "agentId", label: "Agent ID", type: "text", optional: true },
  { name: "applName", label: "Application Name", type: "text", required: true },
  { name: "city", label: "City", type: "text", required: true },
  { name: "firm", label: "Firm", type: "text", required: true },
  { name: "Dba", label: "Dba", type: "text", optional: true },
  { name: "businessType", label: "Business Type", type: "select", required: true, options: [
    { value: "Proprietorship", label: "Proprietorship" },
    { value: "PartnershipFirm", label: "Partnership Firm" },
    { value: "Trust", label: "Trust" },
    { value: "PrivateLimitedLLP", label: "Private Limited/LLP" }
  ] },
  { name: "contactPerson", label: "Contact Person", type: "text", required: true },
  { name: "mobile", label: "Mobile", type: "text", required: true },
  { name: "instAddr1", label: "Address Line 1", type: "text", required: true },
  { name: "instAddr2", label: "Address Line 2", type: "text", optional: true },
  { name: "instAddr3", label: "Address Line 3", type: "text", optional: true },
  { name: "instLocality", label: "Locality", type: "text", required: true },
  { name: "instPincode", label: "Pincode", type: "text", required: true },
  { name: "mcc", label: "MCC", type: "select", required: true, options: [
    { value: "5411", label: "5411 - Grocery Stores" },
    { value: "5812", label: "5812 - Eating Places/Restaurants" },
    { value: "5999", label: "5999 - Miscellaneous Retail" },
    { value: "7011", label: "7011 - Hotels/Motels" }
  ] },
  { name: "pan", label: "PAN", type: "text", required: true },
  { name: "panDob", label: "PAN Date of Birth", type: "date", required: true },
  { name: "meAcType", label: "Account Type", type: "select", required: true, options: [
    { value: "Savings", label: "Savings" },
    { value: "Current", label: "Current" },
    { value: "Salary", label: "Salary" }
  ] },
  { name: "meName", label: "Account Holder Name", type: "text", required: true },
  { name: "meIfsc", label: "IFSC", type: "text", required: true },
  { name: "meAcNo", label: "Account Number", type: "text", required: true },
  { name: "qrBoombox", label: "QR Boombox", type: "select", required: true, options: [
    { value: "ENABLED", label: "ENABLED" },
    { value: "DISABLED", label: "DISABLED" }
  ] }
];
