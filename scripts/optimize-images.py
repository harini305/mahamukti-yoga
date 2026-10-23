"""Create resized WebP derivatives of the original photos used by the site.

Originals stay untouched in assets-source/originals/ (not served).
Output: public/images/<key>-<width>.webp and lib/images.json (dimensions + srcset data).
Run with: npm run images
"""
import json
import os
import shutil

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets-source", "originals")
OUT = os.path.join(ROOT, "public", "images")
WIDTHS = [480, 800, 1200, 1600]
QUALITY = 72

selection = json.load(open(os.path.join(ROOT, "scripts", "images.json"), encoding="utf-8"))
os.makedirs(OUT, exist_ok=True)
manifest = {}

for key, item in selection.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, item["src"]))).convert("RGB")
    w, h = im.size
    widths = [x for x in WIDTHS if x < w] + [min(w, WIDTHS[-1])]
    widths = sorted(set(widths))
    for tw in widths:
        th = round(h * tw / w)
        im.resize((tw, th), Image.LANCZOS).save(
            os.path.join(OUT, f"{key}-{tw}.webp"), "WEBP", quality=QUALITY, method=6
        )
    manifest[key] = {"alt": item["alt"], "width": w, "height": h, "widths": widths, "source": item["src"]}

# Logos are small PNGs; copy them unchanged.
for logo in ("mahamukti-yoga-bali-logo.png", "footer-logo.png"):
    shutil.copyfile(os.path.join(SRC, logo), os.path.join(OUT, logo))

with open(os.path.join(ROOT, "lib", "images.json"), "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

total = sum(os.path.getsize(os.path.join(OUT, n)) for n in os.listdir(OUT))
print(f"{len(manifest)} images, {len(os.listdir(OUT))} files, {total // 1024} KB total")
