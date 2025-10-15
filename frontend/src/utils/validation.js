export const validateForm = (formData) => {
  const errors = {};

  if (!formData.applName || formData.applName.trim().length < 3)
    errors.applName = "Application name must be at least 3 characters";

  if (!formData.city) errors.city = "City is required";
  if (!formData.firm) errors.firm = "Firm is required";

  if (!formData.contactPerson || !/^[A-Za-z\s]+$/.test(formData.contactPerson))
    errors.contactPerson =
      "Contact person name must contain only letters and spaces";

  if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
    errors.mobile = "Mobile number must be exactly 10 digits";

  if (!formData.instAddr1) errors.instAddr1 = "Address 1 is required";
  if (!formData.instLocality) errors.instLocality = "Locality is required";

  if (!formData.instPincode || !/^\d{6}$/.test(formData.instPincode))
    errors.instPincode = "Pincode must be 6 digits";

  if (!formData.mcc) errors.mcc = "MCC is required";

  if (!formData.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan))
    errors.pan = "Invalid PAN format (e.g., RTGHP2345G)";

  if (!formData.panDob) errors.panDob = "PAN Date of Birth is required";
  else {
    const date = new Date(formData.panDob);
    if (isNaN(date.getTime())) errors.panDob = "Invalid date format";
  }

  if (!formData.meAcType) errors.meAcType = "Account type is required";

  if (!formData.meName || !/^[A-Za-z\s]+$/.test(formData.meName))
    errors.meName = "Account holder name must contain only letters and spaces";

  if (!formData.meIfsc || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.meIfsc))
    errors.meIfsc = "Invalid IFSC format (e.g., SBIN0001458)";

  if (!formData.meAcNo || !/^\d{10,18}$/.test(formData.meAcNo))
    errors.meAcNo = "Account number must be 10–18 digits";

  if (!formData.qrBoombox)
    errors.qrBoombox = "QR Boombox selection is required";

  return errors;
};
