'use client'; 

import { useState } from 'react';

export default function CheckoutPage() {
  // 1. Estado para capturar todos los datos 
  const [formData, setFormData] = useState({
    // Datos de Identidad
    customerFirstName: '',
    customerLastName: '',
    customerEmail: '',
    customerDocType: 'DNI',
    customerDocNum: '',
    // Datos de Envío 
    contactPhone: '',
    addressLine: '',
    department: '',
    province: '',
    district: '',
    reference: '',
  });

  // 2. Función para actualizar el estado automáticamente
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Función para procesar el envío
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos listos para enviar a la DB:', formData);
    alert('Revisa la consola (F12) para ver los datos capturados.');
  };

  return (
    <div className="max-w-[80rem] mx-auto px-6 py-16 font-sans text-[#09090b]">
      <header className="mb-12">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tighter text-primary">Finalizar Pedido</h1>
      </header>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          {/* SECCIÓN 1: IDENTIDAD */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-neutral-200 pb-2">
              <span className="text-sm font-bold bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">1</span>
              <h2 className="font-display text-xl uppercase font-semibold">Identidad del Cliente</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Nombres</label>
                <input name="customerFirstName" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Apellidos</label>
                <input name="customerLastName" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Correo Electrónico</label>
                <input name="customerEmail" onChange={handleChange} type="email" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Tipo de Doc.</label>
                <select name="customerDocType" onChange={handleChange} className="p-3 border border-neutral-200 rounded-sm bg-white outline-none">
                  <option value="DNI">DNI</option>
                  <option value="CE">Pasaporte</option>
                  <option value="RUC">RUC</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Nro. de Doc.</label>
                <input name="customerDocNum" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none" />
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: ENVÍO */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 border-b border-neutral-200 pb-2">
              <span className="text-sm font-bold bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">2</span>
              <h2 className="font-display text-xl uppercase font-semibold">Dirección de Entrega</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Teléfono de Contacto</label>
                <input name="contactPhone" onChange={handleChange} type="tel" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Dirección (Calle/Número)</label>
                <input name="addressLine" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Departamento</label>
                <input name="department" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Provincia</label>
                <input name="province" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Distrito</label>
                <input name="district" onChange={handleChange} type="text" required className="p-3 border border-neutral-200 rounded-sm focus:border-black" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-neutral-600">Referencia</label>
                <input name="reference" onChange={handleChange} type="text" className="p-3 border border-neutral-200 rounded-sm focus:border-black" />
              </div>
            </div>
          </section>
        </div>

        {/* RESUMEN LATERAL */}
        <aside className="lg:col-span-4">
          <div className="sticky top-8 bg-neutral-50 border border-black p-8 rounded-sm">
            <h2 className="font-display text-lg uppercase font-bold mb-6 border-b border-neutral-200 pb-4">Resumen</h2>
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>S/. 0.00</span></div>
              <div className="flex justify-between font-bold text-lg border-t border-black pt-4"><span>Total</span><span>S/. 0.00</span></div>
            </div>
            <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:opacity-hover transition-recio">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </aside>
      </form>
    </div>
  );
}