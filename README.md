# robo DIEM - Website Campanie Fundraising

Website pentru campania de fundraising a echipei robo DIEM pentru participarea la competiția internațională Western Edge FLL Explore de la Long Beach, California.

## 📁 Structura Proiectului

```
robotics-fundraiser/
├── backend/
│   ├── server.js          # Backend server
│   ├── package.json       # Backend dependencies
│   └── .gitignore         # Backend git ignore
├── index.html              # Main website
├── style.css              # Styling
├── script.js              # Frontend JavaScript
├── config.js              # Configuration (MODIFY HERE!)
├── logo-robo-diem.jpeg    # Logo echipă
├── logo-house-of-robotics.jpeg  # Logo club
├── favicon-robo-diem.jpg  # Favicon
├── team-placeholder.svg   # Fotografie echipă (înlocuiește cu fotografia reală)
├── sponsors.txt           # Fișier pentru date sponsori
├── config-examples.js     # Exemple de configurare
├── QUICK-START.md         # Ghid rapid de utilizare
└── README.md              # Acest fișier
```

## 🚀 Cum să folosești website-ul

### Opțiunea 1: Client-Side Only (Simplu)

**Pentru prototipare rapidă sau hosting static:**

Deschide `index.html` direct în browser. Formularul de sponsor va descărca fișiere .txt local.

### Opțiunea 2: Cu Backend Server (Recomandat)

**Pentru funcționalitate completă cu salvare automată pe server:**

#### Quick Start (Windows):
Dublu-click pe `start-server.bat` și urmează instrucțiunile!

#### Manual Start:
```powershell
cd backend
npm install
npm start
```

Apoi deschide: http://localhost:3000

📚 **Ghid complet:** Vezi [BACKEND-SETUP.md](BACKEND-SETUP.md)

### 1. Deschide website-ul

Simplu deschide fișierul `index.html` într-un browser web (Chrome, Firefox, Edge, etc.)

### 2. Actualizează progresul campaniei

**IMPORTANT:** Actualizează valoarea strânsă în fișierul `config.js`

Deschide `config.js` și modifică:

```javascript
const CONFIG = {
    // Current amount raised (in EUR)
    amountRaised: 0,  // ← MODIFICĂ AICI! Pune suma strânsă până acum
    
    // Total goal (in EUR)
    totalGoal: 35000,
    ...
}
```

Avionul se va deplasa automat de la Sibiu spre Long Beach pe măsură ce progresezi!

### 3. Adaugă fotografia echipei

- Înlocuiește fișierul `team-placeholder.jpg` cu o fotografie reală a echipei
- SAU modifică în `config.js`:

```javascript
teamPhotoPath: "calea/catre/fotografie.jpg",
```

### 4. Actualizează detaliile bancare

În `config.js`, secțiunea `bankDetails`:

```javascript
bankDetails: {
    beneficiary: "House of Robotics",
    iban: "RO00 XXXX 0000 0000 0000 0000",  // ← IBAN-ul real
    bank: "[Numele Băncii]",                 // ← Numele băncii
    details: "Donație robo DIEM - Long Beach"
},
```

### 5. Adaugă sponsori/donatori

În `config.js`, secțiunea `donors`:

```javascript
donors: [
    {
        name: "Nume Companie",
        tier: "Tier 1 - Primele Roți Dințate",
        logoPath: "path/to/company-logo.png"  // opțional
    },
    {
        name: "Alta Companie SRL",
        tier: "Tier 2 - Aripi",
        logoPath: "logos/company2.png"
    }
    // Adaugă mai mulți sponsori aici
],
```

### 6. Adaugă evenimente

#### Activează secțiunea evenimente:

```javascript
showEvents: true,  // ← Schimbă la true pentru a afișa evenimente
```

#### Adaugă evenimente în listă:

```javascript
events: [
    {
        day: "20",
        month: "MAR",
        title: "Demonstrație Publică",
        description: "Demonstrație de robotică - Piața Mare Sibiu, ora 14:00"
    },
    {
        day: "5",
        month: "APR",
        title: "Workshop Robotică",
        description: "Workshop pentru copii - House of Robotics"
    }
    // Adaugă mai multe evenimente aici
],
```

## 📝 Cum funcționează formularele de contact

### Donații individuale
Când cineva apasă "Donează Acum" la donații individuale, va vedea detaliile bancare pentru transfer.

### Sponsorizări corporate

#### Cu Backend (Recomandat):
1. Compania completează formularul
2. Datele sunt salvate automat în `sponsors.txt` pe server
3. Primești datele în fișier, organizate și ușor de accesat
4. (Opțional) Poți configura notificări email automate

#### Fără Backend:
1. Când o companie completează formularul
2. Browser-ul descarcă automat un fișier .txt cu datele
3. Salvează fișierele descărcate pentru evidență

📚 **Pentru configurare backend:** Vezi [BACKEND-SETUP.md](BACKEND-SETUP.md)

## 🎨 Personalizare

### Culori
Culorile echipei sunt definite în `style.css`:
- Primară: #639B9A
- Secundară: #99CCCD
- Întunecată: #333333

### Modifică textul
- Textul principal este în `index.html`
- Slogan-ul: caută "Un parc arheologic..."
- Informații despre echipă: caută secțiunea `about-section`

## 🌐 Publicare Online

Pentru a pune website-ul online (hosting gratuit):

### Opțiunea 1: GitHub Pages
1. Creează un repository pe GitHub
2. Încarcă toate fișierele
3. Activează GitHub Pages din Settings
4. Website-ul va fi disponibil la `username.github.io/repo-name`

### Opțiunea 2: Netlify
1. Du-te pe [netlify.com](https://www.netlify.com)
2. Drag & drop folderul cu fișierele
3. Primești un URL instant gratuit

### Opțiunea 3: Hosting propriu
Încarcă toate fișierele pe un server web (Apache, Nginx, etc.)

## 📱 Responsive Design

Website-ul este optimizat pentru:
- 💻 Desktop
- 📱 Telefon mobil
- 📲 Tabletă

## ⚙️ Update Quick Reference

| Ce vrei să modifici | Unde modifici |
|---------------------|---------------|
| Suma strânsă | `config.js` → `amountRaised` |
| Fotografie echipă | Înlocuiește `team-placeholder.jpg` |
| Detalii bancare | `config.js` → `bankDetails` |
| Sponsori | `config.js` → `donors` |
| Evenimente | `config.js` → `events` și `showEvents: true` |
| Text despre echipă | `index.html` → secțiunea `about-section` |

## 🆘 Suport

Pentru probleme sau întrebări:
- Email: robotics.sibiu@gmail.com
- Tel: +40 744 39 22 82 (Monica Medeșan)

## 📄 Licență

© 2026 robo DIEM - House of Robotics. Toate drepturile rezervate.

---

**Mult succes în campania de fundraising! 🚀✈️**
