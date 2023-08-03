import requests
from bs4 import BeautifulSoup

url = "https://encykorea.aks.ac.kr/Article/E0042143"

res = requests.get(url)
res.raise_for_status()
soup = BeautifulSoup(res.text,"html")
title = soup.find(attrs={"id":"section-4"})
content = title.next_sibling
print()