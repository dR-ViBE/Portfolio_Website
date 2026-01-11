import os
from PIL import Image

# Directory containing the GIFs
public_dir = os.path.join(os.getcwd(), 'public')

# List of GIFs to process and their target static names
gifs = {
    'permit GIF.gif': 'permit_static.png',
    'Skills.gif': 'skills_static.png',
    'work experience.gif': 'experience_static.png',
    'Certificates.gif': 'certificates_static.png',
    'Projects.gif': 'projects_static.png',
    'Contact.gif': 'contact_static.png'
}

print(f"Starting frame extraction in {public_dir}...")

for gif_name, static_name in gifs.items():
    gif_path = os.path.join(public_dir, gif_name)
    static_path = os.path.join(public_dir, static_name)
    
    if os.path.exists(gif_path):
        try:
            with Image.open(gif_path) as img:
                # Seek to the first frame
                img.seek(0)
                # Save as PNG
                img.save(static_path, 'PNG')
                print(f"Generated: {static_name} from {gif_name}")
        except Exception as e:
            print(f"Error processing {gif_name}: {e}")
    else:
        print(f"File not found: {gif_name}")

print("Extraction complete.")
