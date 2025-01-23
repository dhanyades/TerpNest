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
    images = soup.find_all('img', class_='mx-auto w-full h-full absolute inset-0 object-cover cursor-pointer')
    addresses = soup.find_all('address', class_= 'copy-row address-container')
    prices = soup.find_all('span', class_= 'border-left')
    beds = soup.find_all('span', class_= 'price-range')
    
    # Create lists to hold all information
    titles_list = [title.get_text(strip=True) for title in property_titles]
    images_list = [image.get('src') for image in images]
    address_list = [address.get_text(strip=True) for address in addresses]
    price_list = [price.get_text(strip=True) for price in prices]
    bed_list = [bed.get_text(strip=True) for bed in beds]
    
    all_listings = []
    idx = 0
    while idx in range(0, len(address_list)):
        title = titles_list[idx] if idx < len(titles_list) else 'N/A'
        image = images_list[idx] if idx < len(images_list) else 'N/A'
        address = address_list[idx] 
        price = price_list[idx] if idx < len(price_list) else 'N/A'
        beds = bed_list[idx] if idx < len(bed_list) else 'N/A'

        all_listings.append({
            'title': title,
            'image': image,
            'address': address,
            'price': price,
            'beds': beds
        })
        idx +=1

    # listings file
    with open('listings.json', 'w') as f:
        json.dump(all_listings, f)
        
else:
    print(f"Failed to retrieve data: Status code {response.status_code}")