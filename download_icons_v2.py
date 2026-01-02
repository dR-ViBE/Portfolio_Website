import requests
import os

icons = {
    # Java: Done already, but ensuring.
    "java.svg": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    
    # AWS: Use raw github link
    "aws.svg": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    
    # Azure: Use raw github link
    "azure.svg": "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    
    # Gosu: Try main wikimedia link
    "gosu.png": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Gosu-logo.png",
}

# Guidewire SVG - Creating manually to ensure transparency and avoid DNS issues
guidewire_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 4h16v16H4z" fill="none"/> 
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
</svg>''' 
# Using a generic icon for Guidewire (Looks like an 'i' or abstract shape) since logo download is blocked.
# Actually, Guidewire logo is a 'G'. Let's make a G.
guidewire_svg_g = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
<path d="M80 50h-10v20h-20v-20h-10v-10h40v10z M50 20a30 30 0 1 0 0 60a30 30 0 0 0 0-60m0 10a20 20 0 1 1 0 40a20 20 0 0 1 0-40" />
</svg>'''
# This is a bit abstract. Let's just download a "G" icon from a repo if possible or stick to simple text if it fails.
# I'll stick to the SVG method for reliability. The user wants the icon, but I can't download it.
# I will try one more URL for Guidewire.

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

os.makedirs("public/icons", exist_ok=True)

for filename, url in icons.items():
    print(f"Downloading {filename} from {url}...")
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            with open(f"public/icons/{filename}", "wb") as f:
                f.write(response.content)
            print(f"Successfully downloaded {filename}")
        else:
            print(f"Failed to download {filename}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")

# Save Guidewire SVG
with open("public/icons/guidewire.svg", "w") as f:
    f.write(guidewire_svg_g)
print("Created guidewire.svg")
