'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders');

  return (
    <div className="max-w-(--width-container-max) mx-auto px-(--spacing-container) py-(--spacing-section) font-sans text-foreground">
      <header className="mb-12 border-b border-(--color-border-strong) pb-8">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tighter">Mi Cuenta</h1>
        <nav className="flex gap-8 mt-8">
          <button
            onClick={() => setActiveTab('orders')}
            className={`text-xs font-bold uppercase tracking-widest pb-2 transition-all ${activeTab === 'orders' ? 'border-b-2 border-black' : 'text-neutral-400'}`}
          >
            Mis Pedidos
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`text-xs font-bold uppercase tracking-widest pb-2 transition-all ${activeTab === 'settings' ? 'border-b-2 border-black' : 'text-neutral-400'}`}
          >
            Configuración
          </button>
        </nav>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {activeTab === 'orders' ? (
          <section className="lg:col-span-12 space-y-4">
            <div className="border border-(--color-border) p-6 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 transition-(--transition-recio)">
              <div className="text-left w-full">
                <p className="text-[10px] font-bold text-neutral-400) uppercase">Orden #REC-1002</p>
                <p className="font-bold text-lg uppercase tracking-tight">En Camino</p>
              </div>
              <div className="flex gap-8 w-full justify-end items-center">
                <p className="text-sm font-display">24 ABR 2026</p>
                <p className="font-bold font-display">S/. 240.00</p>
                <button className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-hover)">
                  Detalles
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Formulario de Datos Personales */}
            <section className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-xl font-bold uppercase border-b border-(--color-border) pb-2">
                Información Personal
              </h2>
              <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-600">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="p-3 border border-(--color-border) rounded-(--radius-sm) focus:border-black outline-none transition-all"
                    placeholder="Juan"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-600">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="p-3 border border-(--color-border) rounded-(--radius-sm) focus:border-black outline-none transition-all"
                    placeholder="Pérez"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-[10px] font-bold uppercase text-neutral-600">
                    Documento (DNI/RUC)
                  </label>
                  <input
                    type="text"
                    className="p-3 border border-(--color-border) rounded-(--radius-sm) focus:border-black outline-none transition-all"
                    placeholder="72123456"
                  />
                </div>
                <button className="col-span-2 bg-black text-white py-4 font-bold uppercase tracking-widest text-xs mt-4 hover:opacity-hover) transition-(--transition-recio)">
                  Guardar Cambios
                </button>
              </form>
            </section>

            {/* Gestión de Direcciones */}
            <section className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-xl font-bold uppercase border-b border-(--color-border) pb-2">
                Direcciones Guardadas
              </h2>
              <div className="border border-(--color-border-strong) p-6 bg-neutral-50">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase">
                    Principal
                  </span>
                  <button className="text-[10px] font-bold uppercase underline">Editar</button>
                </div>
                <p className="text-sm font-bold uppercase">Av. Las Camelias 123</p>
                <p className="text-xs text-neutral-600">San Isidro, Lima, Lima </p>
                <p className="text-xs text-color-neutral-600 mt-2">Ref: Cerca al parque</p>
              </div>
              <button className="w-full border border-(--color-border-strong) py-4 font-bold uppercase tracking-widest text-xs hover:bg-(--color-neutral-100) transition-(--transition-recio)">
                + Agregar Nueva Dirección
              </button>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
