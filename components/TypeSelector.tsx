"use client";

import { Link2, Type, Wifi, Mail, Phone, User } from "lucide-react";
import { useQRStore, QRType } from "@/lib/store";

const TYPES: { id: QRType; label: string; icon: React.ReactNode }[] = [
  { id: "url", label: "URL", icon: <Link2 size={14} /> },
  { id: "text", label: "Text", icon: <Type size={14} /> },
  { id: "wifi", label: "WiFi", icon: <Wifi size={14} /> },
  { id: "email", label: "Email", icon: <Mail size={14} /> },
  { id: "phone", label: "Phone", icon: <Phone size={14} /> },
  { id: "vcard", label: "vCard", icon: <User size={14} /> },
];

export function TypeSelector() {
  const { data, setField } = useQRStore();

  return (
    <div className="type-selector">
      {TYPES.map((t) => (
        <button
          key={t.id}
          id={`type-${t.id}`}
          onClick={() => setField("type", t.id)}
          className={`type-btn${data.type === t.id ? " active" : ""}`}
          aria-pressed={data.type === t.id}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
