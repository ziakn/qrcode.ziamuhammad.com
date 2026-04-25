"use client";

import { useEffect } from "react";
import { useQRStore } from "@/lib/store";
import { Trash2, Clock, ExternalLink } from "lucide-react";

export function QRHistory() {
  const { history, loadHistory, removeFromHistory, setField, setSetting } = useQRStore();

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  if (history.length === 0) return null;

  return (
    <div className="history-section">
      <div className="history-header">
        <div className="history-title">
          <Clock size={14} />
          <span>Recent History</span>
        </div>
      </div>
      <div className="history-grid">
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <div className="history-preview">
              <img src={item.preview} alt="QR Preview" />
              <div className="history-item-actions">
                <button 
                  onClick={() => {
                    // Restore this QR
                    Object.entries(item.data).forEach(([key, val]) => setField(key as any, val));
                    Object.entries(item.settings).forEach(([key, val]) => setSetting(key as any, val));
                  }}
                  className="history-action-btn"
                  title="Restore this QR"
                >
                  <ExternalLink size={12} />
                </button>
                <button 
                  onClick={() => removeFromHistory(item.id)}
                  className="history-action-btn delete"
                  title="Remove from history"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
            <div className="history-info">
              <span className="history-type">{item.data.type}</span>
              <span className="history-date">
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
