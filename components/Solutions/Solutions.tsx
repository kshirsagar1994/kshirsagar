"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "GST BILLING",
    features: ["Invoices", "GST Calculations", "Customers", "Products", "Reports", "PDF Generation"],
  },
  {
    title: "CRM",
    features: ["Lead Management", "Sales Pipeline", "Email Integration", "Analytics", "Task Tracking", "Client Portal"],
  },
  {
    title: "ERP",
    features: ["Finance", "Supply Chain", "Manufacturing", "Operations", "Reporting", "Dashboards"],
  },
  {
    title: "INVENTORY",
    features: ["Stock Tracking", "Purchase Orders", "Barcode Scanning", "Low Stock Alerts", "Supplier Management"],
  },
  {
    title: "POS",
    features: ["Fast Checkout", "Receipts", "Cash Management", "Multi-Store", "Discounts & Offers"],
  },
  {
    title: "HR & PAYROLL",
    features: ["Attendance Tracking", "Leave Management", "Salary Slips", "Tax Deductions", "Employee Records"],
  },
  {
    title: "EDUCATION",
    features: ["Student Portal", "Fee Management", "Online Exams", "Attendance", "Progress Reports"],
  },
  {
    title: "HEALTHCARE",
    features: ["Patient Records", "Appointments", "Prescriptions", "Billing", "Pharmacy Inventory"],
  },
  {
    title: "RESTAURANT",
    features: ["Table Management", "Kitchen Display System", "Online Orders", "Menu Management", "Inventory"],
  },
  {
    title: "CUSTOM SOFTWARE",
    features: ["Tailored Workflows", "API Integrations", "Legacy Modernization", "Scalable Architecture"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Business Softwares
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-medium mb-20 max-w-2xl">
          Pre-built core modules customized to your exact requirements, ensuring fast deployment and perfect operational fit.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-48 rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Default State (Title Centered) */}
              <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold tracking-widest text-white text-center">
                  {solution.title}
                </h3>
              </div>

              {/* Hover State (Slide Up Overlay) */}
              <div className="absolute inset-0 bg-accent/90 backdrop-blur-sm p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="text-white/90 text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 text-white font-medium text-sm group/link mt-4">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
