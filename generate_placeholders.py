import os
from PIL import Image, ImageDraw, ImageFont
import sys

def create_placeholder(filename, text, color=(50, 50, 50), text_color=(255, 255, 255)):
    # Create directory if not exists
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # Create a new image with a solid color
    width, height = 800, 600
    img = Image.new('RGB', (width, height), color=color)
    
    d = ImageDraw.Draw(img)
    
    # Simple text centering (approximation as we might not have fonts)
    # Using default font which is very small, so we might need a workaround or just big text
    # valid entry.
    # We'll try to load a font, or fallback to default
    
    try:
        # Try to use arial or similar
        font = ImageFont.truetype("arial.ttf", 60)
    except IOError:
        print("Default font used")
        font = ImageFont.load_default()

    # Get text position
    # text_width = d.textlength(text, font=font) # newer pillow
    # For compatibility/older pillow
    bbox = d.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) / 2
    y = (height - text_height) / 2
    
    d.text((x, y), text, fill=text_color, font=font)
    
    img.save(filename)
    print(f"Created {filename}")

if __name__ == "__main__":
    # Ensure assets dir exists
    dest_dir = "qdla-web/src/assets"
    
    images = [
        ("smaeccan.png", "Smaeccan\nLuxury Wines", (20, 0, 0)),
        ("irumfoods.png", "Irum Foods\nOrganic", (34, 139, 34)),
        ("haninchicken.png", "Hanin Chicken\nFresh", (200, 0, 0)),
        ("fmstudio.png", "FM Studio\nSalon", (255, 182, 193)),
        ("luxavia.png", "Luxavia\nScarves", (218, 165, 32)),
        ("krochetcraft.png", "Krochet Craft\nHandmade", (245, 245, 220)),
        ("burger82.png", "Burger 82\nGourmet", (255, 140, 0)),
        ("carrtelvintage.png", "Carrtel Vintage\nApparel", (139, 69, 19)),
        ("koheehaus.png", "Koheehaus\nCoffee", (101, 67, 33))
    ]

    for name, text, bg in images:
        create_placeholder(os.path.join(dest_dir, name), text, color=bg)
