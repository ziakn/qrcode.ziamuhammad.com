"use client";

import { useQRStore } from "@/lib/store";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

function Input({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input"
      autoComplete="off"
      spellCheck={false}
    />
  );
}

function Textarea({
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="input textarea"
    />
  );
}

function Select({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input select"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function QRForm() {
  const { data, setField } = useQRStore();

  if (data.type === "url") {
    return (
      <div className="form-fields">
        <Field label="Website URL">
          <Input
            id="qr-url"
            value={data.url}
            onChange={(v) => setField("url", v)}
            placeholder="https://example.com"
            type="url"
          />
        </Field>
      </div>
    );
  }

  if (data.type === "text") {
    return (
      <div className="form-fields">
        <Field label="Text Content">
          <Textarea
            id="qr-text"
            value={data.text}
            onChange={(v) => setField("text", v)}
            placeholder="Enter any text..."
          />
        </Field>
      </div>
    );
  }

  if (data.type === "wifi") {
    return (
      <div className="form-fields">
        <Field label="Network Name (SSID)">
          <Input
            id="qr-ssid"
            value={data.ssid}
            onChange={(v) => setField("ssid", v)}
            placeholder="My WiFi Network"
          />
        </Field>
        <Field label="Password">
          <Input
            id="qr-wifi-password"
            value={data.password}
            onChange={(v) => setField("password", v)}
            placeholder="••••••••"
            type="password"
          />
        </Field>
        <Field label="Security Type">
          <Select
            id="qr-security"
            value={data.security}
            onChange={(v) => setField("security", v as "WPA" | "WEP" | "nopass")}
            options={[
              { value: "WPA", label: "WPA/WPA2" },
              { value: "WEP", label: "WEP" },
              { value: "nopass", label: "No Password" },
            ]}
          />
        </Field>
        <div className="toggle-row">
          <span className="field-label">Hidden Network</span>
          <button
            id="qr-hidden-toggle"
            role="switch"
            aria-checked={data.hidden}
            onClick={() => setField("hidden", !data.hidden)}
            className={`toggle${data.hidden ? " on" : ""}`}
          >
            <span className="toggle-thumb" />
          </button>
        </div>
      </div>
    );
  }

  if (data.type === "email") {
    return (
      <div className="form-fields">
        <Field label="To">
          <Input
            id="qr-email-to"
            value={data.emailTo}
            onChange={(v) => setField("emailTo", v)}
            placeholder="recipient@example.com"
            type="email"
          />
        </Field>
        <Field label="Subject">
          <Input
            id="qr-email-subject"
            value={data.emailSubject}
            onChange={(v) => setField("emailSubject", v)}
            placeholder="Hello!"
          />
        </Field>
        <Field label="Body">
          <Textarea
            id="qr-email-body"
            value={data.emailBody}
            onChange={(v) => setField("emailBody", v)}
            placeholder="Email body..."
            rows={3}
          />
        </Field>
      </div>
    );
  }

  if (data.type === "phone") {
    return (
      <div className="form-fields">
        <Field label="Phone Number">
          <Input
            id="qr-phone"
            value={data.phone}
            onChange={(v) => setField("phone", v)}
            placeholder="+1 234 567 8900"
            type="tel"
          />
        </Field>
      </div>
    );
  }

  if (data.type === "vcard") {
    return (
      <div className="form-fields">
        <div className="field-row">
          <Field label="First Name">
            <Input
              id="qr-first-name"
              value={data.firstName}
              onChange={(v) => setField("firstName", v)}
              placeholder="John"
            />
          </Field>
          <Field label="Last Name">
            <Input
              id="qr-last-name"
              value={data.lastName}
              onChange={(v) => setField("lastName", v)}
              placeholder="Doe"
            />
          </Field>
        </div>
        <Field label="Organization">
          <Input
            id="qr-org"
            value={data.org}
            onChange={(v) => setField("org", v)}
            placeholder="Acme Corp"
          />
        </Field>
        <Field label="Job Title">
          <Input
            id="qr-job-title"
            value={data.jobTitle}
            onChange={(v) => setField("jobTitle", v)}
            placeholder="Software Engineer"
          />
        </Field>
        <Field label="Email">
          <Input
            id="qr-vcard-email"
            value={data.vcardEmail}
            onChange={(v) => setField("vcardEmail", v)}
            placeholder="john@example.com"
            type="email"
          />
        </Field>
        <Field label="Phone">
          <Input
            id="qr-vcard-phone"
            value={data.vcardPhone}
            onChange={(v) => setField("vcardPhone", v)}
            placeholder="+1 234 567 8900"
            type="tel"
          />
        </Field>
        <Field label="Website">
          <Input
            id="qr-vcard-url"
            value={data.vcardUrl}
            onChange={(v) => setField("vcardUrl", v)}
            placeholder="https://johndoe.com"
            type="url"
          />
        </Field>
      </div>
    );
  }

  return null;
}
