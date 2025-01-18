import requests
from bs4 import BeautifulSoup
import json

url = 'https://ochdatabase.umd.edu/housing'
headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36'
}
response = requests.get(url, headers = headers)
    
# Check if request was successful
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract property titles, addresses, prices, and number of beds
    property_titles = soup.find_all('h2', class_='order-2 property-title ellipsis h-auto')
    addresses = soup.find_all('address', class_= 'copy-row address-container')
    prices = soup.find_all('span', class_= 'border-left')
    beds = soup.find_all('span', class_= 'price-range')
    
    # Create lists to hold all information
    titles_list = [title.get_text(strip=True) for title in property_titles]
    address_list = [address.get_text(strip=True) for address in addresses]
    price_list = [price.get_text(strip=True) for price in prices]
    bed_list = [bed.get_text(strip=True) for bed in beds]
    
    # Title file
    with open('titles.txt', 'w') as f:
        json.dump(titles_list, f)
        
    # Address file
    with open('addresses.txt', 'w') as f:
        json.dump(address_list, f)
    
    # Price file
    with open('prices.txt', 'w') as f:
        json.dump(price_list, f)
    
     # Bed file
    with open('beds.txt', 'w') as f:
        json.dump(bed_list, f)
else:
    print(f"Failed to retrieve data: Status code {response.status_code}")