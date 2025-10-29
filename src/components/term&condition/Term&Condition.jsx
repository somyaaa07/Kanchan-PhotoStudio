import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Shield } from "lucide-react";

export default function TermsAndConditions() {
  const [agreed, setAgreed] = useState(false);

  // SEO Meta
  useEffect(() => {
    document.title = "Terms & Conditions | Blu Kings Liquor | Premium Spirits Store";
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Read the official Terms & Conditions of Blu Kings Liquor – your trusted destination to buy premium whisky, rum, gin, vodka, and other fine spirits online. Learn about our policies, age restrictions, and responsible drinking commitment.";
    document.head.appendChild(metaDesc);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the Blu Kings Liquor website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part, please discontinue using our services immediately.",
    },
    {
      title: "2. Product Information & Availability",
      content:
        "We strive to maintain accurate and updated information on our website regarding our range of premium alcoholic beverages. However, product details, images, and pricing may vary slightly due to supplier updates or availability. Blu Kings Liquor reserves the right to modify or discontinue products at any time without notice.",
    },
    {
      title: "3. Orders and Payment",
      content:
        "All orders placed through our website are subject to acceptance and availability. We accept secure online payment methods. Blu Kings Liquor reserves the right to refuse or cancel any order for reasons such as suspected fraud, incorrect pricing, or legal restrictions.",
    },
    {
      title: "4. Shipping & Delivery Policy",
      content:
        "Delivery is available only in regions where alcohol delivery is legally permitted. A valid government-issued ID confirming legal drinking age is required upon delivery. While we aim to deliver within estimated timelines, Blu Kings Liquor is not responsible for delays caused by courier services or unforeseen events.",
    },
    {
      title: "5. Returns, Cancellations & Refunds",
      content:
        "Due to the nature of alcoholic beverages, returns are accepted only if the product is defective, damaged, or incorrect. Refunds, where applicable, will be processed within 7–10 business days. Cancellation requests must be made before dispatch.",
    },
    {
      title: "6. Responsible Consumption of Alcohol",
      content:
        "Blu Kings Liquor promotes responsible drinking. We strictly advise against underage drinking and encourage moderation. Please never drink and drive. If you or someone you know struggles with alcohol dependency, seek professional assistance immediately.",
    },
    {
      title: "7. User Conduct",
      content:
        "You agree to use the Blu Kings Liquor website lawfully and refrain from any fraudulent, abusive, or unauthorized activities that may harm the website, its users, or the brand.",
    },
    {
      title: "8. Intellectual Property Rights",
      content:
        "All trademarks, logos, product images, website design, and written content are the exclusive property of Blu Kings Liquor. Any unauthorized reproduction, modification, or redistribution is strictly prohibited.",
    },
    {
      title: "9. Privacy & Data Protection",
      content:
        "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your data. By using our website, you consent to our privacy practices.",
    },
    {
      title: "10. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Blu Kings Liquor shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or purchase of our products.",
    },
    {
      title: "11. Updates & Modifications",
      content:
        "We may modify these Terms and Conditions at any time. Continued use of our website after updates constitutes acceptance of the revised terms. Please review this page periodically.",
    },
    {
      title: "12. Governing Law & Jurisdiction",
      content:
        "These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in New Delhi.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
    

      {/* Title Section */}
      <section className="bg-gradient-to-r from-Blu-700 to-Blu-900 w-full px-6 sm:px-10 py-14 text-white text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
          <Shield className="w-10 h-10 text-Blu-200" />
          <h2 className="text-4xl sm:text-5xl font-bold">
            Terms & Conditions
          </h2>
        </div>
        <p className="text-Blu-200 text-sm tracking-wide">
          Last Updated: October 21, 2025
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10 leading-relaxed">
        {/* Age Verification */}
        <section>
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Age Verification
              </h3>
              <p className="text-gray-700">
                By accessing Blu Kings Liquor, you confirm that you are of
                legal drinking age in your region. We may request valid proof of
                age at any time before processing or delivering an order.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        {sections.map((item, index) => (
          <section key={index}>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.content}</p>
          </section>
        ))}

        {/* Contact Info */}
        <section className="bg-Blu-50 rounded-xl p-6 border border-Blu-200 shadow-sm">
          <h3 className="text-2xl font-bold text-Blu-900 mb-3">Contact Us</h3>
          <p className="text-gray-700 mb-2">
            Have questions or concerns about our Terms and Conditions or your
            order? Reach out to our support team:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:support@Blukingsliquor.com"
                className="font-medium text-Blu-700 hover:underline"
              >
                support@Blukingsliquor.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:1800BluKING"
                className="font-medium text-Blu-700 hover:underline"
              >
                1-800-Blu-KING
              </a>
            </li>
            <li>
              Address: 123 Spirits Avenue, New Delhi, India - 110001
            </li>
          </ul>
        </section>

        {/* Agreement Checkbox */}
        <div className="border-t border-gray-200 pt-8">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 mt-1 text-Blu-600 rounded focus:ring-2 focus:ring-Blu-500"
            />
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
              I have read and agree to the Terms and Conditions of Blu Kings
              Liquor and confirm that I am of legal drinking age in my
              jurisdiction.
            </span>
          </label>

          {agreed && (
            <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 rounded-lg px-4 py-3 border border-green-200">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                Thank you for agreeing to our terms.
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-Blu-900 mt-12 text-sm">
          <p>© 2025 Blu Kings Liquor. All Rights Reserved.</p>
          <p className="mt-1 italic">
            Buy premium liquor online responsibly. Drink smart, stay safe.
          </p>
        </footer>
      </main>
    </div>
  );
}
