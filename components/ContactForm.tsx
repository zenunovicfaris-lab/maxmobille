"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = `Novo upita sa web stranice:\n\nIme: ${form.ime}\nEmail: ${form.email}\nTelefon: ${form.telefon}\n\nPoruka:\n${form.poruka}`;
    window.open(`https://wa.me/38761797777?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <CheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Hvala na upitu!
        </h3>
        <p className="text-gray-600">
          Vaša poruka je proslijeđena na WhatsApp. Odgovorimo u roku od 24 sata.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pošaljite upit</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ime i prezime *
          </label>
          <input
            type="text"
            required
            value={form.ime}
            onChange={(e) => setForm({ ...form, ime: e.target.value })}
            placeholder="Vaše ime"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email adresa *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="vas@email.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            value={form.telefon}
            onChange={(e) => setForm({ ...form, telefon: e.target.value })}
            placeholder="+387 ..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Poruka *
          </label>
          <textarea
            required
            rows={5}
            value={form.poruka}
            onChange={(e) => setForm({ ...form, poruka: e.target.value })}
            placeholder="Opišite šta trebate uvesti – proizvod, količinu, budžet..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-lg transition-colors"
        >
          <Send size={18} />
          Pošalji poruku
        </button>
      </form>
    </div>
  );
}
