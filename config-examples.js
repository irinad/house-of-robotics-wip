// ==========================================
// EXAMPLE CONFIGURATION FILE
// ==========================================
// This is an EXAMPLE showing how to fill in config.js
// Copy the parts you need to your actual config.js file

// Example of a campaign that has raised 5,000 EUR with some sponsors
const EXAMPLE_CONFIG = {
    // Current amount raised (in EUR)
    amountRaised: 5000,  // Example: You've raised 5,000 EUR so far
    
    // Total goal (in EUR)
    totalGoal: 35000,
    
    // Bank Details for Individual Donations
    bankDetails: {
        beneficiary: "House of Robotics",
        iban: "RO49 BTRL 0000 0000 0000 AB12",  // Example IBAN (REPLACE WITH REAL!)
        bank: "Banca Transilvania",               // Example bank name
        details: "Donație robo DIEM - Long Beach"
    },
    
    // Show/Hide Events Section
    showEvents: true,  // Set to true to show events
    
    // Team Photo (replace with actual photo path)
    teamPhotoPath: "team-photo.jpg",  // Your actual team photo
    
    // Donors/Sponsors List
    // Example with 3 sponsors at different tiers
    donors: [
        {
            name: "TechSoft Solutions SRL",
            tier: "Tier 4 - Partener Cockpit",
            logoPath: "logos/techsoft.png"  // Optional: path to company logo
        },
        {
            name: "AutoParts Industries",
            tier: "Tier 2 - Aripi",
            logoPath: "logos/autoparts.png"
        },
        {
            name: "Café Central Sibiu",
            tier: "Tier 1 - Primele Roți Dințate"
            // No logo provided - that's OK!
        }
    ],
    
    // Events List
    // Example with 2 upcoming events
    events: [
        {
            day: "20",
            month: "MAR",
            title: "Demonstrație Public Robotică",
            description: "Demonstrație de robotică și prezentarea proiectului - Piața Mare Sibiu, ora 14:00"
        },
        {
            day: "5",
            month: "APR",
            title: "Workshop Robotică pentru Copii",
            description: "Workshop gratuit de robotică pentru copii 6-12 ani - House of Robotics, ora 10:00"
        },
        {
            day: "15",
            month: "APR",
            title: "Tombola Fundraising",
            description: "Tombola cu premii donate de sponsori - Mall Promenada, ora 12:00-18:00"
        }
    ]
};

// ==========================================
// DIFFERENT EXAMPLE SCENARIOS
// ==========================================

// SCENARIO 1: Just started, no sponsors yet
const JUST_STARTED = {
    amountRaised: 0,
    totalGoal: 35000,
    bankDetails: { /* your bank details */ },
    showEvents: false,
    teamPhotoPath: "team-placeholder.svg",
    donors: [],  // Empty - no sponsors yet
    events: []   // Empty - no events yet
};

// SCENARIO 2: Campaign almost complete!
const NEARLY_THERE = {
    amountRaised: 32500,  // So close!
    totalGoal: 35000,
    bankDetails: { /* your bank details */ },
    showEvents: true,
    teamPhotoPath: "team-photo.jpg",
    donors: [
        { name: "Main Sponsor SRL", tier: "Tier 4 - Partener Cockpit", logoPath: "logos/main.png" },
        { name: "Wings Sponsor", tier: "Tier 3 - Motoare", logoPath: "logos/wings.png" },
        { name: "Small Sponsor 1", tier: "Tier 1 - Primele Roți Dințate" },
        { name: "Small Sponsor 2", tier: "Tier 1 - Primele Roți Dințate" },
    ],
    events: [
        {
            day: "25",
            month: "MAI",
            title: "Eveniment Final Fundraising",
            description: "Sărbătorim atingerea obiectivului! Event de mulțumire pentru comunitate"
        }
    ]
};

// SCENARIO 3: Goal reached! 🎉
const GOAL_REACHED = {
    amountRaised: 35000,  // WE DID IT!
    totalGoal: 35000,
    // At 100%, the plane will be at Long Beach!
    // ... rest of config
};

// ==========================================
// TIPS:
// ==========================================
/*

1. Update amountRaised regularly (weekly is good!)
2. Add sponsors as soon as they confirm
3. Keep events updated (remove past events)
4. If you exceed the goal, you can keep the same totalGoal
   or increase it if you have stretch goals

5. Tier names MUST be exactly:
   - "Tier 1 - Primele Roți Dințate"
   - "Tier 2 - Aripi"
   - "Tier 3 - Motoare"
   - "Tier 4 - Partener Cockpit"

6. For company logos:
   - Create a "logos" folder
   - Save logos as PNG or JPG
   - Use relative paths: "logos/company.png"

7. For events:
   - Month should be 3 uppercase letters: "IAN", "FEB", "MAR", "APR", "MAI", "IUN", "IUL", "AUG", "SEP", "OCT", "NOI", "DEC"
   - Day should be 1-2 digits: "5", "15", "25"

*/
