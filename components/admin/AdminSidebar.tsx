"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/chamados", label: "Chamados", icon: "support_agent" },
  { href: "/admin/catalogo", label: "Catálogo", icon: "inventory_2" },
  { href: "/admin/newsletter", label: "Newsletter", icon: "mail" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-6">
      <div className="mb-10">
        <span className="text-xl font-black text-white tracking-tighter">Círculo Verde</span>
        <p className="text-gray-500 text-xs mt-0.5">Admin</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-emerald-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined text-[20px]">logout</span>
        Sair
      </button>
    </aside>
  );
}
