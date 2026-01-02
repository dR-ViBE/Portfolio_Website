import requests
import os

icons = {
    "java.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "aws.svg": "https://cdn.simpleicons.org/amazonwebservices",
    "azure.svg": "https://cdn.simpleicons.org/microsoftazure",
    "gosu.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gosu-logo.png/200px-Gosu-logo.png",
    "guidewire.png": "https://logo.clearbit.com/guidewire.com"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
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
