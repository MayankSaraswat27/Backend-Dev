import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  department: { type: String, required: true },
  basicSalary: { type: Number, required: true },
  joiningDate: { type: Date, required: true },
  profile: String
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);