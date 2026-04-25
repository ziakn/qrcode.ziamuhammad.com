"use client";

import { useQRStore } from "@/lib/store";
import { ChevronDown, Palette, Layout, Settings2, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

export function QRSettings() {
  const { settings, setSettings } = useQRStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="settings-panel-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="settings-toggle-bar"
        type="button"
        aria-expanded={isOpen}
      >
        <div className="toggle-label-wrap">
          <Settings2 size={18} />
          <span>Advanced Design Options</span>
        </div>
        <div className={`chevron-wrap ${isOpen ? "is-open" : ""}`}>
          <ChevronDown size={18} />
        </div>
      </button>

      {isOpen && (
        <div className="settings-content-area">
          {/* Section: Colors */}
          <div className="settings-section">
            <div className="settings-section-header">
              <Palette size={14} />
              <span>Color Palette</span>
            </div>
            <div className="settings-grid-2col">
              <div className="field">
                <label className="field-label">Foreground</label>
                <div className="color-control">
                  <input
                    type="color"
                    value={settings.fgColor}
                    onChange={(e) => setSettings({ fgColor: e.target.value })}
                    className="color-swatch"
                  />
                  <input 
                    type="text" 
                    value={settings.fgColor} 
                    onChange={(e) => setSettings({ fgColor: e.target.value })}
                    className="input mono-font"
                  />
                </div>
              </div>
              <div className="field">
                <label className="field-label">Background</label>
                <div className="color-control">
                  <input
                    type="color"
                    value={settings.bgColor}
                    onChange={(e) => setSettings({ bgColor: e.target.value })}
                    className="color-swatch"
                  />
                  <input 
                    type="text" 
                    value={settings.bgColor} 
                    onChange={(e) => setSettings({ bgColor: e.target.value })}
                    className="input mono-font"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Patterns */}
          <div className="settings-section">
            <div className="settings-section-header">
              <Layout size={14} />
              <span>Module & Eye Styles</span>
            </div>
            <div className="settings-grid-2col">
              <div className="field">
                <label className="field-label">Body Pattern</label>
                <div className="segmented-control">
                  {["square", "dots", "rounded"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSettings({ dotsType: t as any })}
                      className={`seg-btn ${settings.dotsType === t ? "active" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label className="field-label">Eye Shape</label>
                <div className="segmented-control">
                  {["square", "extra-rounded", "dot"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSettings({ cornersSquareType: t as any })}
                      className={`seg-btn ${settings.cornersSquareType === t ? "active" : ""}`}
                    >
                      {t.split("-")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Branding */}
          <div className="settings-section">
            <div className="settings-section-header">
              <ImageIcon size={14} />
              <span>Brand Logo Overlay</span>
            </div>
            <div className="branding-upload-area">
              <input
                type="file"
                accept="image/*"
                id="brand-logo-file"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => setSettings({ logo: ev.target?.result as string });
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <label htmlFor="brand-logo-file" className="premium-upload-btn">
                {settings.logo ? "Replace Current Logo" : "Choose Logo Image"}
              </label>
              
              {settings.logo && (
                <div className="logo-preview-strip">
                  <div className="logo-mini-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={settings.logo} alt="Logo preview" />
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setSettings({ logo: undefined })}
                    className="logo-remove-action"
                  >
                    <X size={14} /> Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
