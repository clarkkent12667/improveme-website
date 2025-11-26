import requests
from bs4 import BeautifulSoup
import json
from urllib.parse import urljoin, urlparse

class WebsiteScraper:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def get_page_content(self, url):
        """Fetch and parse a page"""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            return BeautifulSoup(response.content, 'html.parser')
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return None
    
    def extract_text_structure(self, soup):
        """Extract structured text content from page"""
        structure = {
            'title': '',
            'meta_description': '',
            'headings': [],
            'paragraphs': [],
            'lists': [],
            'links': [],
            'images': [],
            'sections': []
        }
        
        # Title
        title_tag = soup.find('title')
        if title_tag:
            structure['title'] = title_tag.get_text(strip=True)
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            structure['meta_description'] = meta_desc.get('content', '')
        
        # Headings
        for level in range(1, 7):
            for heading in soup.find_all(f'h{level}'):
                text = heading.get_text(strip=True)
                if text:
                    structure['headings'].append({
                        'level': level,
                        'text': text,
                        'tag': f'h{level}'
                    })
        
        # Paragraphs
        for p in soup.find_all('p'):
            text = p.get_text(strip=True)
            if text and len(text) > 10:  # Filter out very short paragraphs
                structure['paragraphs'].append(text)
        
        # Lists
        for ul in soup.find_all(['ul', 'ol']):
            list_items = []
            for li in ul.find_all('li', recursive=False):
                text = li.get_text(strip=True)
                if text:
                    list_items.append(text)
            if list_items:
                structure['lists'].append({
                    'type': ul.name,
                    'items': list_items
                })
        
        # Links
        for a in soup.find_all('a', href=True):
            text = a.get_text(strip=True)
            href = a['href']
            if text and href:
                structure['links'].append({
                    'text': text,
                    'href': href,
                    'is_internal': href.startswith('/') or self.base_url in href
                })
        
        # Images
        for img in soup.find_all('img'):
            src = img.get('src', '')
            alt = img.get('alt', '')
            if src:
                structure['images'].append({
                    'src': urljoin(self.base_url, src),
                    'alt': alt
                })
        
        return structure
    
    def extract_contact_info(self, soup):
        """Extract contact information"""
        contact = {
            'phones': [],
            'emails': [],
            'addresses': [],
            'social_media': []
        }
        
        # Phone numbers
        for a in soup.find_all('a', href=lambda x: x and x.startswith('tel:')):
            phone = a.get_text(strip=True)
            if phone:
                contact['phones'].append(phone)
        
        # Emails
        for a in soup.find_all('a', href=lambda x: x and x.startswith('mailto:')):
            email = a.get_text(strip=True)
            if email:
                contact['emails'].append(email)
        
        # Social media
        social_platforms = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube']
        for a in soup.find_all('a', href=True):
            href = a['href'].lower()
            for platform in social_platforms:
                if platform in href:
                    contact['social_media'].append({
                        'platform': platform,
                        'url': a['href']
                    })
        
        return contact
    
    def scrape_page(self, url, page_name):
        """Scrape a single page and return structured data"""
        print(f"Scraping {page_name}: {url}")
        soup = self.get_page_content(url)
        
        if not soup:
            return None
        
        page_data = {
            'url': url,
            'name': page_name,
            'structure': self.extract_text_structure(soup),
            'contact_info': self.extract_contact_info(soup)
        }
        
        return page_data
    
    def scrape_website(self, pages):
        """Scrape multiple pages"""
        website_data = {
            'base_url': self.base_url,
            'pages': {}
        }
        
        for page_name, page_path in pages.items():
            url = urljoin(self.base_url, page_path)
            page_data = self.scrape_page(url, page_name)
            if page_data:
                website_data['pages'][page_name] = page_data
        
        return website_data


def main():
    # Define the website and pages to scrape
    base_url = "https://improvemeinstitute.com"
    pages = {
        'home': '/',
        'about': '/about',
        'contact': '/contact',
        'our_courses': '/our-courses',
        'primary_math': '/primary-mathematics-tutoring',
        'secondary_math': '/secondary-mathematics-tutoring',
        'primary_english': '/primary-english-tutoring',
        'secondary_english': '/secondary-english-language-tutoring',
        'physics': '/secondary-physics-tutoring',
        'chemistry': '/secondary-chemistry-tutoring',
        'biology': '/secondary-biology-tutoring',
        'business': '/secondary-business-studies-tutoring',
        'economics': '/secondary-economics-tutoring',
        'science': '/primary-science-tutoring',
    }
    
    # Create scraper and scrape website
    scraper = WebsiteScraper(base_url)
    website_data = scraper.scrape_website(pages)
    
    # Save to JSON file
    output_file = 'improveme_website_content.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(website_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Scraping complete! Data saved to {output_file}")
    
    # Print summary
    print(f"\n📊 Summary:")
    print(f"Total pages scraped: {len(website_data['pages'])}")
    for page_name, page_data in website_data['pages'].items():
        structure = page_data['structure']
        print(f"\n{page_name.upper()}:")
        print(f"  - Headings: {len(structure['headings'])}")
        print(f"  - Paragraphs: {len(structure['paragraphs'])}")
        print(f"  - Lists: {len(structure['lists'])}")
        print(f"  - Images: {len(structure['images'])}")
        print(f"  - Links: {len(structure['links'])}")


if __name__ == "__main__":
    main()
