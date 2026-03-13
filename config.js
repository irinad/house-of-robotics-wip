// ==========================================
// CONFIGURATION FILE
// ==========================================
// Update this file to change campaign progress and settings

// Campaign Settings
const CONFIG = {
    // Current amount raised (in EUR)
    amountRaised: 1000,
    
    // Total goal (in EUR)
    totalGoal: 35000,
    
    // Bank Details for Individual Donations
    bankDetails: {
        beneficiary: "House of Robotics",
        iban: "RO00 XXXX 0000 0000 0000 0000",
        bank: "[Numele Băncii]",
        details: "Donație robo DIEM - Long Beach"
    },
    
    // Show/Hide Events Section
    showEvents: true,
    
    // Team Photo (replace with actual photo path)
    teamPhotoPath: "roboDIEM.jpg",
    
    // Donors/Sponsors List
    // Add company sponsors here
    donors: [
        // Example:
        // {
        //     name: "Company Name",
        //     tier: "Nivel 1 - Primele Roțițe",
        //     logoPath: "path/to/logo.png"
        // }
    ],
    
    // Events List
    // Add events here
    events: [
        {
            day: "15",
            month: "APR",
            title: "Ziua Porților Deschise la Robo DIEM",
            description: "Vino să ne vizitezi la sediul nostru din Sibiu și să vezi cum lucrăm la proiectul nostru pentru competiția FIRST LEGO League! <br/>Location: Strada Robotului nr. 10, Sibiu"
        }
        // Example:
        // {
        //     day: "15",
        //     month: "APR",
        //     title: "Exemplu Eveniment",
        //     description: "Descriere eveniment - Location"
        // }
    ]
};
