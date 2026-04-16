import os
os.makedirs('assets', exist_ok=True)
svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}"><rect width="100%" height="100%" fill="{bg}"/><text x="50%" y="50%" fill="#ffffff" font-family="system-ui, sans-serif" font-size="{s}" font-weight="bold" text-anchor="middle" dominant-baseline="middle">{text}</text></svg>"""
files = {
  "hero.svg": (1400, 600, "#8B5CF6", "Digital Lavender", 64),
  "lavender.svg": (600, 800, "#111827", "Digital Lavender", 48),
  "cyber.svg": (400, 500, "#374151", "Cyber-Y2K", 32),
  "metal.svg": (400, 500, "#4B5563", "Liquid Metal", 32),
  "gothic.svg": (400, 500, "#1F2937", "Neo-Gothic", 32),
  "denim.svg": (1000, 1200, "#1F2937", "Denim Blazer", 48),
  "velvet.svg": (1000, 1200, "#6B7280", "Velvet Trousers", 48),
  "organza.svg": (1000, 1200, "#9CA3AF", "Organza Trench", 48),
  "knit.svg": (1000, 1200, "#F472B6", "Knit Balaclava", 48),
  "cargo.svg": (1000, 1200, "#4B5563", "Cargo Skirt", 48),
  "summer.svg": (800, 600, "#FBBF24", "Summer 2026", 48),
  "denim_text.svg": (800, 600, "#60A5FA", "Denim Textures", 48),
  "neon.svg": (800, 600, "#EC4899", "Neon Punk", 48),
  "minimalist.svg": (800, 600, "#9CA3AF", "Minimalist Workspace", 48)
}
for name, (w, h, bg, text, s) in files.items():
  with open(f"assets/{name}", "w", encoding="utf-8") as f:
    f.write(svg_template.format(w=w, h=h, bg=bg, text=text, s=s))
