import urllib.request
import os

images = {
  "hero.jpg": "photo-1483985988355-763728e1935b",
  "lavender.jpg": "photo-1512436991641-6745cdb1723f",
  "cyber.jpg": "photo-1495385794356-15371f348c31",
  "metal.jpg": "photo-1509319117193-57bab727e09d",
  "gothic.jpg": "photo-1515886657613-9f3515b0c78f",
  "denim.jpg": "photo-1485968579580-b6d095142e6e",
  "velvet.jpg": "photo-1550614000-4b95d4ebfa88",
  "organza.jpg": "photo-1445205170230-053b83016050",
  "knit.jpg": "photo-1532453288672-3a27e9be9efd",
  "cargo.jpg": "photo-1469334031218-e382a71b716b",
  "summer.jpg": "photo-1551028719-00167b16eac5",
  "denim_text.jpg": "photo-1544022613-e87ca75a784a",
  "neon.jpg": "photo-1566174053879-31528523f8ae",
  "minimalist.jpg": "photo-1604644401890-0bd678c83788"
}

os.makedirs('assets', exist_ok=True)
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')]
urllib.request.install_opener(opener)

for name, pid in images.items():
    url = f"https://images.unsplash.com/{pid}?q=80&w=1000&auto=format&fit=crop"
    try:
        urllib.request.urlretrieve(url, f"assets/{name}")
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
