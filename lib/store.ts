import { create } from "zustand";

export type QRType = 
  | "URL" | "Text" | "WiFi" | "Email" | "Phone" | "vCard" 
  | "WhatsApp" | "Social" | "Payment" | "AppStore" | "Location" | "Meeting";
export type ErrorCorrection = "L" | "M" | "Q" | "H";
export type WifiSecurity = "WPA" | "WEP" | "nopass";

export interface QRData {
  type: QRType;
  url?: string;
  text?: string;
  // WiFi
  ssid?: string;
  password?: string;
  security: WifiSecurity;
  hidden: boolean;
  // Email
  emailTo: string;
  emailSubject: string;
  emailBody: string;
  // Contact
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  org?: string;
  jobTitle?: string;
  vcardEmail?: string;
  vcardPhone?: string;
  vcardUrl?: string;
  // Specialized
  whatsappNumber?: string;
  whatsappMessage?: string;
  socialHandle?: string;
  socialPlatform?: string;
  paymentUser?: string;
  paymentAmount?: string;
  paymentNote?: string;
  locationLat?: string;
  locationLng?: string;
  meetingUrl?: string;
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
  dotsType: "square" | "dots" | "rounded" | "extra-rounded" | "classy" | "classy-rounded";
  cornersSquareType: "square" | "dot" | "extra-rounded";
  cornersDotType: "square" | "dot";
}

interface QRStore {
  data: QRData;
  settings: QRSettings;
  history: QRHistoryItem[];
  qrDataUrl: string | null;
  isGenerating: boolean;
  isDark: boolean;
  setField: <K extends keyof QRData>(key: K, value: QRData[K]) => void;
  setFields: (data: Partial<QRData>) => void;
  setSetting: <K extends keyof QRSettings>(key: K, value: QRSettings[K]) => void;
  setSettings: (settings: Partial<QRSettings>) => void;
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
  type: "URL",
  url: "",
  text: "",
  ssid: "",
  password: "",
  security: "WPA",
  hidden: false,
  emailTo: "",
  emailSubject: "",
  emailBody: "",
};

const DEFAULT_SETTINGS: QRSettings = {
  size: 300,
  fgColor: "#0F172A",
  bgColor: "#FFFFFF",
  errorCorrection: "M",
  margin: 2,
  dotsType: "square",
  cornersSquareType: "square",
  cornersDotType: "square",
};

function buildContent(data: QRData): string {
  const safeStr = (str?: string) => str || "";

  switch (data.type) {
    case "URL":
      return safeStr(data.url) || "https://example.com";
    case "Text":
      return safeStr(data.text) || "Hello, World!";
    case "WiFi":
      const escapeWifi = (str?: string) => safeStr(str).replace(/([\\;:,])/g, '\\$1');
      return `WIFI:T:${data.security};S:${escapeWifi(data.ssid)};P:${escapeWifi(data.password)};H:${data.hidden ? "true" : "false"};;`;
    case "Email":
      return `mailto:${safeStr(data.emailTo)}?subject=${encodeURIComponent(safeStr(data.emailSubject))}&body=${encodeURIComponent(safeStr(data.emailBody))}`;
    case "Phone":
      return `tel:${safeStr(data.phone)}`;
    case "vCard":
      const fn = safeStr(data.firstName);
      const ln = safeStr(data.lastName);
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${fn} ${ln}`.trim() || "Contact",
        `N:${ln};${fn};;;`,
        data.org ? `ORG:${data.org}` : "",
        data.jobTitle ? `TITLE:${data.jobTitle}` : "",
        data.vcardEmail ? `EMAIL:${data.vcardEmail}` : "",
        data.vcardPhone ? `TEL:${data.vcardPhone}` : "",
        data.vcardUrl ? `URL:${data.vcardUrl}` : "",
        "END:VCARD",
      ]
        .filter(Boolean)
        .join("\n");
    case "WhatsApp":
      const waNum = safeStr(data.whatsappNumber).replace(/\D/g, "");
      const waMsg = encodeURIComponent(safeStr(data.whatsappMessage));
      return `https://wa.me/${waNum}${waMsg ? `?text=${waMsg}` : ""}`;
    case "Social":
      const handle = safeStr(data.socialHandle).replace(/^@+/, "");
      if (!handle) return safeStr(data.url);
      if (data.socialPlatform === "Instagram") return `https://instagram.com/${handle}`;
      if (data.socialPlatform === "Twitter") return `https://twitter.com/${handle}`;
      if (data.socialPlatform === "LinkedIn") return `https://linkedin.com/in/${handle}`;
      if (data.socialPlatform === "Facebook") return `https://facebook.com/${handle}`;
      return safeStr(data.url);
    case "Payment":
      const user = safeStr(data.paymentUser);
      return user ? `https://paypal.me/${user}/${safeStr(data.paymentAmount)}` : "";
    case "Location":
      return `https://www.google.com/maps/search/?api=1&query=${safeStr(data.locationLat)},${safeStr(data.locationLng)}`;
    case "Meeting":
    case "AppStore":
    default:
      return safeStr(data.url);
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

  setFields: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  setSetting: (key, value) =>
    set((state) => ({ settings: { ...state.settings, [key]: value } })),

  setSettings: (newSettings) =>
    set((state) => ({ settings: { ...state.settings, ...newSettings } })),

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
