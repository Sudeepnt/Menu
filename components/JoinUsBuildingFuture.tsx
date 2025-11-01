"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Rocket, X, Check } from "lucide-react";
import { Card } from "./ui/card";
import { supabase } from "@/lib/supabase";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function JoinUsBuildingFuture() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const { data, error } = await supabase
      .from('Customers')  // ← CHANGE THIS TO 'Customers'
      .insert([
        {
          Full_Name: formData.name,
          Email: formData.email,
          Phone_number: formData.phone,
        }
      ]);

    if (error) {
      console.error('Supabase error:', error);
      console.error('Error details:', error.message);
      alert(`Failed to submit form: ${error.message}`);
      return;
    }

    console.log("Form submitted successfully:", data);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 2000);
  } catch (error) {
    console.error('Catch error:', error);
    alert('An error occurred. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitted(false);
  };

  return (
    <section id="join-us-section" className="container py-24">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Join Us in Building the Future
        </span>
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Co-Creation Partnerships Card */}
        <motion.div variants={itemVariants}>
          <Card className="h-full p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gray-50 p-3">
                <Handshake className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Co-Creation Partnerships
                </h3>
                <p className="text-sm text-gray-600">Equity-Based Collaboration</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              We partner with exceptional founders to co-build AI-native products that
              couldn't exist any other way.
            </p>

            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                <span className="text-sm text-gray-600">Shared ownership & upside</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                <span className="text-sm text-gray-600">AI-native from day one</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                <span className="text-sm text-gray-600">Combined expertise & vision</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-gray-700" />
                <span className="text-sm text-gray-600">Built for breakthrough success</span>
              </div>
            </div>

            <p className="mb-6 text-sm italic text-gray-600">
              We're selective. We partner with visionaries, not just anyone with an idea.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Partner with Us
              <span>→</span>
            </button>
          </Card>
        </motion.div>

        {/* Experience Intelligence Card */}
        <motion.div variants={itemVariants}>
          <Card className="h-full p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
            <div className="mb-6 rounded-lg bg-gray-50 p-3">
              <Rocket className="h-6 w-6 text-gray-700" strokeWidth={1.5} />
            </div>

            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Experience Intelligence
            </h3>

            <p className="mb-2 text-sm text-gray-600">Don't just read about AI-native products.</p>
            <p className="mb-8 text-sm font-semibold text-gray-900">Use them.</p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md rounded-lg bg-white shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Contact details:
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Thank You!
                </h3>
                <p className="text-sm text-gray-600">
                  We've received your application and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
