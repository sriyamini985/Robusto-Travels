import https from 'https';
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const BASE = path.join(root, 'public', 'images', 'countries', 'maldives');
const UA = 'RobustoTravelsBot/1.0 (contact@robusto.travel)';

const MAPPING = {
  '': {
    'hero-v3.jpg': 'photo-1514282401047-d79a71a590e8',
    'gallery-1-v3.jpg': 'photo-1439066615861-d1af74d74000',
    'gallery-2-v3.jpg': 'photo-1507525428034-b723cf961d3e',
    'gallery-3-v3.jpg': 'photo-1544735716-392fe2489ffa'
  },
  'ari-atoll': {
    'hero-v3.jpg': 'photo-1560272564-c83b66b1ad12',
    'gallery-1-v3.jpg': 'photo-1544551763-46a013bb70d5',
    'gallery-2-v3.jpg': 'photo-1582967788606-a171c1080cb0',
    'gallery-3-v3.jpg': 'photo-1506929562872-bb421503ef21'
  },
  'baa-atoll': {
    'hero-v3.jpg': 'photo-1582967788606-a171c1080cb0',
    'gallery-1-v3.jpg': 'photo-1560272564-c83b66b1ad12',
    'gallery-2-v3.jpg': 'photo-1544551763-46a013bb70d5',
    'gallery-3-v3.jpg': 'photo-1519046904884-53103b34b206'
  },
  'male-city': {
    'hero-v3.jpg': 'photo-1597466599360-3b97758f97be',
    'gallery-1-v3.jpg': 'photo-1590001155093-a3c66ab0c3ff',
    'gallery-2-v3.jpg': 'photo-1512453979798-5ea266f8880c',
    'gallery-3-v3.jpg': 'photo-1534447677768-be436bb09401'
  },
  'vaadhoo-bioluminescence': {
    'hero-v3.jpg': 'photo-1490730141103-6cac27aaab94',
    'gallery-1-v3.jpg': 'photo-1507525428034-b723cf961d3e',
    'gallery-2-v3.jpg': 'photo-1519046904884-53103b34b206',
    'gallery-3-v3.jpg': 'photo-1540206395-68808572332f'
  },
  'maafushi-island': {
    'hero-v3.jpg': 'photo-1537996194471-e657df975ab4',
    'gallery-1-v3.jpg': 'photo-1506929562872-bb421503ef21',
    'gallery-2-v3.jpg': 'photo-1505118380757-91f5f5632de0',
    'gallery-3-v3.jpg': 'photo-1544735716-392fe2489ffa'
  },
  'baros-resort': {
    'hero-v3.jpg': 'photo-1573843981267-be1999ff37cd',
    'gallery-1-v3.jpg': 'photo-1514282401047-d79a71a590e8',
    'gallery-2-v3.jpg': 'photo-1439066615861-d1af74d74000',
    'gallery-3-v3.jpg': 'photo-1507525428034-b723cf961d3e'
  },
  'hulhumale-beach': {
    'hero-v3.jpg': 'photo-1505118380757-91f5f5632de0',
    'gallery-1-v3.jpg': 'photo-1506929562872-bb421503ef21',
    'gallery-2-v3.jpg': 'photo-1544735716-392fe2489ffa',
    'gallery-3-v3.jpg': 'photo-1519046904884-53103b34b206'
  },
  'sun-island-lagoon': {
    'hero-v3.jpg': 'photo-1540206395-68808572332f',
    'gallery-1-v3.jpg': 'photo-1439066615861-d1af74d74000',
    'gallery-2-v3.jpg': 'photo-1507525428034-b723cf961d3e',
    'gallery-3-v3.jpg': 'photo-1514282401047-d79a71a590e8'
  },
  'veligandu-island': {
    'hero-v3.jpg': 'photo-1519046904884-53103b34b206',
    'gallery-1-v3.jpg': 'photo-1537996194471-e657df975ab4',
    'gallery-2-v3.jpg': 'photo-1506929562872-bb421503ef21',
    'gallery-3-v3.jpg': 'photo-1507525428034-b723cf961d3e'
  },
  'dhaalu-atoll': {
    'hero-v3.jpg': 'photo-1544551763-46a013bb70d5',
    'gallery-1-v3.jpg': 'photo-1582967788606-a171c1080cb0',
    'gallery-2-v3.jpg': 'photo-1560272564-c83b66b1ad12',
    'gallery-3-v3.jpg': 'photo-1514282401047-d79a71a590e8'
  }
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          resolve();
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading accurate, premium Maldives travel images...');
  for (const [subDir, files] of Object.entries(MAPPING)) {
    const targetDir = path.join(BASE, subDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    for (const [filename, unsplashId] of Object.entries(files)) {
      const dest = path.join(targetDir, filename);
      const url = `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop&q=80&w=1200`;
      console.log(`Downloading ${unsplashId} -> ${path.join('maldives', subDir, filename)}`);
      try {
        await download(url, dest);
        console.log(`✅ Success!`);
      } catch (e) {
        console.error(`❌ Failed for ${unsplashId}: ${e.message}`);
      }
    }
  }
  console.log('🎉 Maldives images successfully updated!');
}

run();
