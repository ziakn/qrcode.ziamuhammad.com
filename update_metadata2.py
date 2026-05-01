import os
import re

metadata_updates = {
    "app/page.tsx": {
        "title": "Free QR Code Generator — Create High-Quality Custom QR Codes",
        "desc": "Generate professional, custom QR codes for free with QR Forge. Support for WiFi, vCard, Social Media, and more. No accounts required, high-resolution downloads.",
        "slug": "/"
    },
    "app/qr-code-for-wifi/page.tsx": {
        "title": "WiFi QR Code Generator — Connect Instantly",
        "desc": "Create a free WiFi QR code to let guests connect to your network instantly without typing the password. Supports WPA, WEP, and hidden networks securely.",
        "slug": "/qr-code-for-wifi"
    },
    "app/qr-code-for-restaurant-menu/page.tsx": {
        "title": "Restaurant Menu QR Code Generator — Free & Simple",
        "desc": "Create a touchless digital menu for your restaurant for free. Generate a custom QR code that links directly to your PDF or online menu in seconds.",
        "slug": "/qr-code-for-restaurant-menu"
    },
    "app/qr-code-size-guide/page.tsx": {
        "title": "QR Code Size Guide — Dimensions for Print & Digital",
        "desc": "Learn the technical standards for QR code sizing. A complete guide on minimum dimensions, optimal scanning distance, and high-quality print resolutions.",
        "slug": "/qr-code-size-guide"
    },
    "app/privacy-policy/page.tsx": {
        "title": "Privacy Policy — QR Forge Security & Data Practices",
        "desc": "Learn how QR Forge protects your privacy. Read our comprehensive policy on data collection, local QR code generation, and robust user security measures.",
        "slug": "/privacy-policy"
    },
    "app/qr-code-for-whatsapp/page.tsx": {
        "title": "WhatsApp QR Code Generator — Start Chats Instantly",
        "desc": "Create a free QR code for WhatsApp. Let customers or friends start a chat with you instantly without saving your phone number. Fast and highly reliable.",
        "slug": "/qr-code-for-whatsapp"
    },
    "app/terms/page.tsx": {
        "title": "Terms of Service — QR Forge Guidelines & Agreements",
        "desc": "Read the QR Forge terms of service. Discover the guidelines for using our premium QR code generation tool, legal agreements, and accepted usage policies.",
        "slug": "/terms"
    },
    "app/qr-code-for-business-card/page.tsx": {
        "title": "Digital Business Card QR Code — Free vCard Generator",
        "desc": "Generate a custom vCard QR code for your business cards. Allow clients to save your professional contact details directly to any smartphone with one scan.",
        "slug": "/qr-code-for-business-card"
    },
    "app/how-to-create-a-qr-code/page.tsx": {
        "title": "How to Create a QR Code — Step-by-Step Guide 2024",
        "desc": "Learn how to make a high-quality QR code for free. This comprehensive guide covers choosing a type, customizing the design, and downloading for print.",
        "slug": "/how-to-create-a-qr-code"
    },
    "app/qr-code-types/page.tsx": {
        "title": "QR Code Types — Explore 20+ Supported Formats",
        "desc": "Explore all supported QR code types including URL, WiFi, vCard, and Social Media. Discover the absolute best format for your personal or business needs.",
        "slug": "/qr-code-types"
    },
    "app/how-to-scan-qr-code/page.tsx": {
        "title": "How to Scan a QR Code — Definitive iOS & Android Guide",
        "desc": "Learn how to effortlessly scan QR codes using your smartphone. Detailed, step-by-step instructions for iPhone and Android users using built-in cameras.",
        "slug": "/how-to-scan-qr-code"
    },
    "app/templates/page.tsx": {
        "title": "QR Code Templates — Professional Custom Designs",
        "desc": "Browse 20+ professional custom QR code templates. Find ready-to-use designs for restaurants, real estate, social media profiles, and business cards.",
        "slug": "/templates"
    },
    "app/qr-code-best-practices/page.tsx": {
        "title": "QR Code Best Practices — Design & Scanning Guide",
        "desc": "Learn how to create high-fidelity QR codes that work perfectly every time. Discover essential tips on ideal sizing, color contrast, and proper placement.",
        "slug": "/qr-code-best-practices"
    }
}

for filepath, data in metadata_updates.items():
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, "r") as f:
        content = f.read()

    new_metadata = f"""export const metadata: Metadata = {{
  title: "{data['title']}",
  description: "{data['desc']}",
  alternates: {{ canonical: "{data['slug']}" }},
}};"""

    start_idx = content.find("export const metadata: Metadata = {")
    if start_idx != -1:
        open_braces = 0
        end_idx = -1
        search_start = start_idx + len("export const metadata: Metadata = ")
        
        # if the syntax is slightly different, let's just do a simpler search
        # find the first {
        first_brace = content.find("{", start_idx)
        if first_brace != -1:
            open_braces = 0
            for i in range(first_brace, len(content)):
                if content[i] == '{':
                    open_braces += 1
                elif content[i] == '}':
                    open_braces -= 1
                    if open_braces == 0:
                        end_idx = i
                        break
            
            if end_idx != -1:
                if end_idx + 1 < len(content) and content[end_idx+1] == ';':
                    end_idx += 1
                content = content[:start_idx] + new_metadata + content[end_idx+1:]
    else:
        # Look for export const metadata: Metadata =
        # Try to insert after imports
        imports = list(re.finditer(r'^import .*\n', content, flags=re.MULTILINE))
        if imports:
            last_import = imports[-1]
            insert_pos = last_import.end()
            content = content[:insert_pos] + "\n" + new_metadata + "\n" + content[insert_pos:]
        else:
            content = new_metadata + "\n" + content
            
    if "import { Metadata }" not in content and "import type { Metadata }" not in content:
        content = 'import { Metadata } from "next";\n' + content
        
    with open(filepath, "w") as f:
        f.write(content)

