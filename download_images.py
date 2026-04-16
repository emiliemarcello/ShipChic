from duckduckgo_search import DDGS
import requests
import os

os.makedirs('assets', exist_ok=True)

queries = {
  "hero.jpg": "beautiful digital lavender runway fashion high resolution editorial",
  "lavender.jpg": "digital lavender clothing fashion model high resolution",
  "cyber.jpg": "cyber y2k jacket fashion street photography high resolution",
  "metal.jpg": "liquid metal silver slip dress high fashion editorial photography",
  "gothic.jpg": "neo gothic corset leather high fashion dark aesthetic",
  "denim.jpg": "deconstructed avant-garde denim blazer streetwear fashion",
  "velvet.jpg": "velvet wide leg trousers retro aesthetic fashion",
  "organza.jpg": "sheer organza trench coat high fashion layering",
  "knit.jpg": "chunky knit balaclava avant garde winter fashion",
  "cargo.jpg": "cargo maxi skirt utility y2k fashion streetwear",
  "summer.jpg": "summer fashion trends editorial aesthetic outdoors",
  "denim_text.jpg": "denim texture fabric close up macro high resolution",
  "neon.jpg": "neon punk clothing street fashion cyberpunk glow night",
  "minimalist.jpg": "minimalist aesthetic workspace clean modern white elegant"
}

with DDGS() as ddgs:
    for filename, query in queries.items():
        try:
            results = ddgs.images(query, max_results=3, type_image='photo')
            for res_meta in results:
                img_url = res_meta['image']
                try:
                    res = requests.get(img_url, timeout=5)
                    if res.status_code == 200:
                        with open(f"assets/{filename}", 'wb') as f:
                            f.write(res.content)
                        print(f"Downloaded {filename}")
                        break
                except:
                    continue
        except Exception as e:
            print(f"Error {filename}: {e}")
