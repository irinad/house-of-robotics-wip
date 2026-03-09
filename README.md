# Sibiu Robotics - Fundraiser Landing Page

A modern, animated landing page for the Sibiu Robotics Club fundraiser to attend an international competition in Long Beach, California.

## Features

### 🎯 Progress Tracking
- **Distance Progress**: Tracks the journey from Sibiu, Romania to Long Beach, California (10,000 km)
- **Plane Building Progress**: Visual representation of plane construction progress (0-100%)
- **Component Tracking**: Monitor sponsorship of gears, engine, and wings

### 💰 Sponsorship Packages

#### Company Packages
- **Gear Package** (€500): Essential gears sponsorship
- **Engine Package** (€1,500): Most popular package
- **Wing Package** (€2,500): Premium sponsorship tier

#### Individual Sponsorship
- **Buy Kilometers**: €1 per kilometer contribution

### 📱 Sections
- **Home**: Hero section with animated plane
- **Progress**: Real-time progress tracking with animated bars
- **Sponsor**: Detailed sponsorship package information
- **Team**: Team presentation and statistics
- **Outreach**: Community engagement activities
- **Events**: Fundraising events calendar

## Setup Instructions

1. Open the `index.html` file in a web browser
2. No build process required - pure HTML, CSS, and JavaScript

## Customization

### Update Progress Data

To update the fundraising progress, edit the `progressData` object in `script.js`:

```javascript
let progressData = {
    distanceKm: 2500,      // Current distance raised (out of 10,000)
    planePercent: 35,      // Plane building progress (0-100%)
    gearsComplete: false,  // Set to true when gears are sponsored
    engineComplete: false, // Set to true when engine is sponsored
    wingComplete: false    // Set to true when wings are sponsored
};
```

### Real-time Updates

You can update progress dynamically using the browser console:

```javascript
window.updateProgressData({ 
    distanceKm: 5000, 
    planePercent: 60, 
    gearsComplete: true 
});
```

### Colors and Styling

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00a8ff;
    --secondary-color: #ff6b6b;
    --accent-color: #ffd93d;
    /* ... more colors */
}
```

## File Structure

```
robotics-fundraiser/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Features to Add

Consider extending the page with:

1. **Admin Panel**: Create a simple form to update progress without editing code
2. **Payment Integration**: Add Stripe or PayPal for direct donations
3. **Photo Gallery**: Add team photos, robot images, and event pictures
4. **Blog Section**: Share updates about the journey and robot building
5. **Newsletter Signup**: Collect emails for updates
6. **Testimonials**: Add sponsor testimonials
7. **Multi-language Support**: Add Romanian/English toggle
8. **Social Media Feed**: Embed Instagram or Facebook feed

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Mobile Responsive

The page is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Contact Information

Update the contact details in the footer section of `index.html`:

```html
<p>📧 contact@sibiurobotics.ro</p>
<p>📱 +40 123 456 789</p>
<p>📍 Sibiu, Romania</p>
```

## License

Free to use for the Sibiu Robotics Club fundraising campaign.

---

**Good luck with your fundraising! 🤖✈️**
