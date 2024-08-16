'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ApplicationForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <Input
          id="companyName"
          name="companyName"
          type="text"
          required
          className="mt-1 block w-full"
          placeholder="Enter the company name"
        />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <Select id="position" name="position" required className="mt-1 block w-full">
          <option value="">Select a position</option>
          <option value="software_engineer">Software Engineer</option>
          <option value="product_manager">Product Manager</option>
          {/* Add more options as needed */}
        </Select>
      </div>

      <div>
        <label htmlFor="applicationDate" className="block text-sm font-medium text-gray-700">
          Application Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          className="mt-1 block w-full border rounded p-2"
          placeholderText="Pick a date"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          className="mt-1 block w-full"
          placeholder="Enter any notes about the application"
        />
      </div>

      <div className="flex items-center">
        <Checkbox id="interviewScheduled" name="interviewScheduled" />
        <label htmlFor="interviewScheduled" className="ml-2 block text-sm text-gray-900">
          Interview Scheduled
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
