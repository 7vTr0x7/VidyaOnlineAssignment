import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { validateForm } from "@/utils/validation";
import { fieldsConfig } from "@/config/fieldsConfig";
import { API_URL } from "@/constants/api";

const InputField = React.lazy(() => import("./InputField"));
const SelectField = React.lazy(() => import("./SelectField"));

export default function ApplicationForm() {
  const initialState = fieldsConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0)
      return toast.error("Please fix validation errors");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData(initialState);
      } else toast.error("Submission failed");
    } catch {
      toast.error("Network error");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow">
      <Toaster />
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Application Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <React.Suspense fallback={<p>Loading fields...</p>}>
          {fieldsConfig.map((field) =>
            field.type === "select" ? (
              <SelectField
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ) : (
              <InputField
                key={field.name}
                {...field}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            )
          )}
        </React.Suspense>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
          Submit
        </Button>
      </form>
    </div>
  );
}
