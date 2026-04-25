"use client";

import { useQRStore, QRType } from "@/lib/store";
import { 
  Link2, Type, Wifi, Mail, Phone, User, 
  MessageSquare, Share2, DollarSign, Download, MapPin, Video 
} from "lucide-react";

interface TypeOption {
  type: QRType;
  label: string;
  icon: React.ReactNode;
}

const TYPES: TypeOption[] = [
  { type: "URL", label: "Website", icon: <Link2 size={16} /> },
  { type: "WiFi", label: "WiFi", icon: <Wifi size={16} /> },
  { type: "vCard", label: "vCard", icon: <User size={16} /> },
  { type: "WhatsApp", label: "WhatsApp", icon: <MessageSquare size={16} /> },
  { type: "Text", label: "Text", icon: <Type size={16} /> },
  { type: "Email", label: "Email", icon: <Mail size={16} /> },
  { type: "Phone", label: "Phone", icon: <Phone size={16} /> },
  { type: "Social", label: "Social", icon: <Share2 size={16} /> },
  { type: "Payment", label: "Payment", icon: <DollarSign size={16} /> },
  { type: "AppStore", label: "App", icon: <Download size={16} /> },
  { type: "Location", label: "Location", icon: <MapPin size={16} /> },
  { type: "Meeting", label: "Meeting", icon: <Video size={16} /> },
];

export function TypeSelector() {
  const { data, setField } = useQRStore();

  return (
    <div className="type-selector-wrap">
      <div className="type-selector">
        {TYPES.map((t) => (
          <button
            key={t.type}
            id={`type-${t.type}`}
            onClick={() => setField("type", t.type)}
            className={`type-btn${data.type === t.type ? " active" : ""}`}
            aria-selected={data.type === t.type}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
