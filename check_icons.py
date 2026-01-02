import requests

urls = {
    "Gosu": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Gosu-logo.png",
    "Guidewire_Clearbit": "https://logo.clearbit.com/guidewire.com",
    "Guidewire_Brandfetch": "https://asset.brandfetch.io/guidewire.com/icon",
    "Java_Devicon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
}

for name, url in urls.items():
    try:
        r = requests.head(url, timeout=5)
        print(f"{name}: {r.status_code}")
    except Exception as e:
        print(f"{name}: Error {e}")
