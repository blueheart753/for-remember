import requests
from bs4 import BeautifulSoup

url = "https://encykorea.aks.ac.kr/Article/E0042143"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "html.parser")

text = soup.get_text()
char_count = len(text)  # 텍스트의 글자 수를 세기 위해 len 함수를 사용합니다.
print("Character count:", char_count)  # 글자 수를 출력합니다.
