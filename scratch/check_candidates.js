import https from 'https';
import fs from 'fs';

const url = 'https://unsplash.com/s/photos/charminar-hyderabad';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fetchPage() {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching Unsplash search page...');
  const html = await fetchPage();
  
  // Save HTML to scratch so we can inspect it if needed.
  fs.writeFileSync('scratch/search.html', html);
  console.log('HTML saved to scratch/search.html');
  
  // Let's print any words that contain "images.unsplash.com"
  const regex = /images\.unsplash\.com\/([a-zA-Z0-9_\-\/\?\&\=\;\.\,\%]+)/g;
  const urls = new Set();
  let match;
  while ((match = regex.exec(html)) !== null) {
    urls.add(match[0]);
  }
  
  console.log(`Found ${urls.size} Unsplash URLs. Here are first 15:`);
  console.log(Array.from(urls).slice(0, 15));
}

run().catch(console.error);
