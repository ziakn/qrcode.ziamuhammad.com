import { create } from "zustand";

export type QRType = "url" | "text" | "wifi" | "email" | "phone" | "vcard";
export type ErrorCorrection = "L" | "M" | "Q" | "H";
export type WifiSecurity = "WPA" | "WEP" | "nopass";

export interface QRData {
  type: QRType;
  // URL / Text
  url: string;
  text: string;
  // WiFi
  ssid: string;
  password: string;
  security: WifiSecurity;
  hidden: boolean;
  // Email
  emailTo: string;
  emailSubject: string;
  emailBody: string;
  // Phone
  phone: string;
  // vCard
  firstName: string;
  lastName: string;
  org: string;
  jobTitle: string;
  vcardEmail: string;
  vcardPhone: string;
  vcardUrl: string;
  // Logo
  logo?: string; // Data URL
}

interface QRHistoryItem {
  id: string;
  timestamp: number;
  data: QRData;
  settings: QRSettings;
  preview: string;
}

interface QRSettings {
  size: number;
  fgColor: string;
  bgColor: string;
  errorCorrection: ErrorCorrection;
  margin: number;
}

interface QRStore {
  data: QRData;
  settings: QRSettings;
  history: QRHistoryItem[];
  qrDataUrl: string | null;
  isGenerating: boolean;
  isDark: boolean;
  setField: <K extends keyof QRData>(key: K, value: QRData[K]) => void;
  setSetting: <K extends keyof QRSettings>(key: K, value: QRSettings[K]) => void;
  setQRDataUrl: (url: string | null) => void;
  setIsGenerating: (val: boolean) => void;
  toggleDark: () => void;
  reset: () => void;
  addToHistory: (preview: string) => void;
  removeFromHistory: (id: string) => void;
  loadHistory: () => void;
  buildQRContent: () => string;
}

const DEFAULT_DATA: QRData = {
  type: "url",
  url: "",
  text: "",
  ssid: "",
  password: "",
  security: "WPA",
  hidden: false,
  emailTo: "",
  emailSubject: "",
  emailBody: "",
  phone: "",
  firstName: "",
  lastName: "",
  org: "",
  jobTitle: "",
  vcardEmail: "",
  vcardPhone: "",
  vcardUrl: "",
};

const DEFAULT_SETTINGS: QRSettings = {
  size: 300,
  fgColor: "#0F172A",
  bgColor: "#FFFFFF",
  errorCorrection: "M",
  margin: 2,
};

function buildContent(data: QRData): string {
  switch (data.type) {
    case "url":
      return data.url || "https://example.com";
    case "text":
      return data.text || "Hello, World!";
    case "wifi":
      return `WIFI:T:${data.security};S:${data.ssid};P:${data.password};H:${data.hidden ? "true" : "false"};;`;
    case "email":
      return `mailto:${data.emailTo}?subject=${encodeURIComponent(data.emailSubject)}&body=${encodeURIComponent(data.emailBody)}`;
    case "phone":
      return `tel:${data.phone}`;
    case "vcard":
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${data.firstName} ${data.lastName}`.trim(),
        `N:${data.lastName};${data.firstName};;;`,
        data.org ? `ORG:${data.org}` : "",
        data.jobTitle ? `TITLE:${data.jobTitle}` : "",
        data.vcardEmail ? `EMAIL:${data.vcardEmail}` : "",
        data.vcardPhone ? `TEL:${data.vcardPhone}` : "",
        data.vcardUrl ? `URL:${data.vcardUrl}` : "",
        "END:VCARD",
      ]
        .filter(Boolean)
        .join("\n");
    default:
      return "";
  }
}

export const useQRStore = create<QRStore>((set, get) => ({
  data: DEFAULT_DATA,
  settings: DEFAULT_SETTINGS,
  history: [],
  qrDataUrl: null,
  isGenerating: false,
  isDark: false,

  setField: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),

  setSetting: (key, value) =>
    set((state) => ({ settings: { ...state.settings, [key]: value } })),

  setQRDataUrl: (url) => set({ qrDataUrl: url }),
  setIsGenerating: (val) => set({ isGenerating: val }),

  toggleDark: () =>
    set((state) => {
      const next = !state.isDark;
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      return { isDark: next };
    }),

  reset: () =>
    set({
      data: DEFAULT_DATA,
      settings: DEFAULT_SETTINGS,
      qrDataUrl: null,
    }),

  addToHistory: (preview: string) => {
    const newItem: QRHistoryItem = {
      id: Math.random().toString(36).substring(7),
      timestamp: Date.now(),
      data: { ...get().data },
      settings: { ...get().settings },
      preview,
    };
    set((state) => {
      const newHistory = [newItem, ...state.history].slice(0, 10);
      localStorage.setItem("qr_history", JSON.stringify(newHistory));
      return { history: newHistory };
    });
  },

  removeFromHistory: (id) => {
    set((state) => {
      const newHistory = state.history.filter((item) => item.id !== id);
      localStorage.setItem("qr_history", JSON.stringify(newHistory));
      return { history: newHistory };
    });
  },

  loadHistory: () => {
    const saved = localStorage.getItem("qr_history");
    if (saved) {
      try {
        set({ history: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  },

  buildQRContent: () => buildContent(get().data),
}));
