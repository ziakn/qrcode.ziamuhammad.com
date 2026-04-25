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
  value: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value || ""}
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
  value: string | undefined;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      id={id}
      value={value || ""}
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
  value: string | undefined;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      id={id}
      value={value || ""}
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

  if (data.type === "URL") {
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

  if (data.type === "Text") {
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

  if (data.type === "WiFi") {
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
          <div className="segmented-control">
            {[
              { value: "WPA", label: "WPA/WPA2" },
              { value: "WEP", label: "WEP" },
              { value: "nopass", label: "No Pass" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`seg-btn${data.security === opt.value ? " active" : ""}`}
                onClick={() => setField("security", opt.value as any)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Field>
      </div>
    );
  }

  if (data.type === "Email") {
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

  if (data.type === "Phone") {
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

  if (data.type === "vCard") {
    return (
      <div className="form-fields">
        <Field label="First Name">
          <Input id="qr-fn" value={data.firstName} onChange={(v) => setField("firstName", v)} placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input id="qr-ln" value={data.lastName} onChange={(v) => setField("lastName", v)} placeholder="Doe" />
        </Field>
        <Field label="Organization">
          <Input id="qr-org" value={data.org} onChange={(v) => setField("org", v)} placeholder="Acme Corp" />
        </Field>
        <Field label="Email">
          <Input id="qr-v-email" value={data.vcardEmail} onChange={(v) => setField("vcardEmail", v)} placeholder="john@example.com" type="email" />
        </Field>
      </div>
    );
  }

  if (data.type === "WhatsApp") {
    return (
      <div className="form-fields">
        <Field label="Phone Number">
          <Input id="qr-wa-num" value={data.whatsappNumber} onChange={(v) => setField("whatsappNumber", v)} placeholder="+1234567890" type="tel" />
        </Field>
        <Field label="Pre-filled Message">
          <Input id="qr-wa-msg" value={data.whatsappMessage} onChange={(v) => setField("whatsappMessage", v)} placeholder="I'm interested..." />
        </Field>
      </div>
    );
  }

  if (data.type === "Social") {
    return (
      <div className="form-fields" data-platform={data.socialPlatform}>
        <Field label="Platform">
          <div className="segmented-control brand-selector">
            {[
              { value: "Instagram", label: "Instagram" },
              { value: "Twitter", label: "X / Twitter" },
              { value: "LinkedIn", label: "LinkedIn" },
              { value: "Facebook", label: "Facebook" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`seg-btn${data.socialPlatform === opt.value ? " active" : ""}`}
                onClick={() => setField("socialPlatform", opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Username">
          <Input id="qr-soc-hand" value={data.socialHandle} onChange={(v) => setField("socialHandle", v)} placeholder="@username" />
        </Field>
      </div>
    );
  }

  if (data.type === "Payment") {
    return (
      <div className="form-fields">
        <Field label="PayPal Username">
          <Input id="qr-pay-user" value={data.paymentUser} onChange={(v) => setField("paymentUser", v)} placeholder="username" />
        </Field>
        <Field label="Amount">
          <Input id="qr-pay-amt" value={data.paymentAmount} onChange={(v) => setField("paymentAmount", v)} placeholder="10.00" />
        </Field>
      </div>
    );
  }

  if (data.type === "Location") {
    return (
      <div className="form-fields">
        <Field label="Latitude">
          <Input id="qr-lat" value={data.locationLat} onChange={(v) => setField("locationLat", v)} placeholder="40.7128" />
        </Field>
        <Field label="Longitude">
          <Input id="qr-lng" value={data.locationLng} onChange={(v) => setField("locationLng", v)} placeholder="-74.0060" />
        </Field>
      </div>
    );
  }

  if (data.type === "AppStore" || data.type === "Meeting") {
    return (
      <div className="form-fields">
        <Field label="URL">
          <Input id="qr-gen-url" value={data.url} onChange={(v) => setField("url", v)} placeholder="https://..." type="url" />
        </Field>
      </div>
    );
  }

  return null;
}
