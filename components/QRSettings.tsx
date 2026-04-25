"use client";

import { useQRStore, ErrorCorrection } from "@/lib/store";
import { Sliders, Upload, X } from "lucide-react";
import { useState, useRef } from "react";

const ERROR_LEVELS: { value: ErrorCorrection; label: string; desc: string }[] = [
  { value: "L", label: "L", desc: "Low (7%)" },
  { value: "M", label: "M", desc: "Medium (15%)" },
  { value: "Q", label: "Q", desc: "High (25%)" },
  { value: "H", label: "H", desc: "Max (30%)" },
];

export function QRSettings() {
  const { data, setField, settings, setSetting } = useQRStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="settings-panel">
      <button
        id="btn-settings-toggle"
        className="settings-toggle"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <Sliders size={14} />
        Advanced options
        <span className={`chevron${open ? " open" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="settings-body">
          {/* Size */}
          <div className="setting-row">
            <label className="field-label" htmlFor="setting-size">
              Size <span className="setting-value">{settings.size}px</span>
            </label>
            <input
              id="setting-size"
              type="range"
              min={128}
              max={600}
              step={8}
              value={settings.size}
              onChange={(e) => setSetting("size", Number(e.target.value))}
              className="range-input"
            />
          </div>

          {/* Margin */}
          <div className="setting-row">
            <label className="field-label" htmlFor="setting-margin">
              Quiet zone <span className="setting-value">{settings.margin}</span>
            </label>
            <input
              id="setting-margin"
              type="range"
              min={0}
              max={6}
              step={1}
              value={settings.margin}
              onChange={(e) => setSetting("margin", Number(e.target.value))}
              className="range-input"
            />
          </div>

          {/* Colors */}
          <div className="color-row">
            <div className="color-field">
              <label className="field-label" htmlFor="setting-fg">Foreground</label>
              <div className="color-input-wrap">
                <input
                  id="setting-fg"
                  type="color"
                  value={settings.fgColor}
                  onChange={(e) => setSetting("fgColor", e.target.value)}
                  className="color-input"
                />
                <span className="color-hex">{settings.fgColor}</span>
              </div>
            </div>
            <div className="color-field">
              <label className="field-label" htmlFor="setting-bg">Background</label>
              <div className="color-input-wrap">
                <input
                  id="setting-bg"
                  type="color"
                  value={settings.bgColor}
                  onChange={(e) => setSetting("bgColor", e.target.value)}
                  className="color-input"
                />
                <span className="color-hex">{settings.bgColor}</span>
              </div>
            </div>
          </div>

          {/* Dots Type */}
          <div className="setting-row">
            <span className="field-label">Dots Style</span>
            <div className="segmented-control">
              {[
                { value: "square", label: "Square" },
                { value: "dots", label: "Dots" },
                { value: "rounded", label: "Rounded" },
                { value: "classy", label: "Classy" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  className={`seg-btn${settings.dotsType === opt.value ? " active" : ""}`}
                  onClick={() => setSetting("dotsType", opt.value as any)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Corners Type */}
          <div className="setting-row">
            <span className="field-label">Corner Style</span>
            <div className="segmented-control">
              {[
                { value: "square", label: "Square" },
                { value: "dot", label: "Dot" },
                { value: "extra-rounded", label: "Round" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  className={`seg-btn${settings.cornersSquareType === opt.value ? " active" : ""}`}
                  onClick={() => setSetting("cornersSquareType", opt.value as any)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error correction */}
          <div className="setting-row">
            <span className="field-label">Error correction</span>
            <div className="segmented-control">
              {ERROR_LEVELS.map((ec) => (
                <button
                  key={ec.value}
                  id={`ec-${ec.value}`}
                  type="button"
                  onClick={() => setSetting("errorCorrection", ec.value)}
                  className={`seg-btn${settings.errorCorrection === ec.value ? " active" : ""}`}
                  title={ec.desc}
                >
                  {ec.label}
                </button>
              ))}
            </div>
          </div>

          {/* Logo Upload */}
          <div className="setting-row">
            <span className="field-label">Logo / Image</span>
            <div className="logo-upload-wrap">
              {data.logo ? (
                <div className="logo-preview-wrap">
                  <img src={data.logo} alt="Logo preview" className="logo-thumb" />
                  <button 
                    onClick={() => setField("logo", undefined)}
                    className="logo-clear-btn"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <label className="logo-upload-btn btn-secondary">
                  <Upload size={14} />
                  <span>Upload Logo</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => setField("logo", ev.target?.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
