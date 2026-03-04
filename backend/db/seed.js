require('dotenv').config();
const mongoose = require('mongoose');
const Professional = require('./professionalModel');
const connectDB = require('./index');

const seedProfessional = async () => {
  try {
    await connectDB();

    // Delete any existing data
    await Professional.deleteMany({});

    // Insert initial data
    const prof = new Professional({
      professionalName: "John Doe",
      base64Image: "<BASE64_IMAGE_HERE>",  // Replace with your actual base64 string
      nameLink: { firstName: "John", url: "https://example.com" },
      primaryDescription: "Full Stack Developer",
      workDescription1: "Worked on amazing projects.",
      workDescription2: "Loves clean code.",
      linkTitleText: "Connect with me",
      linkedInLink: { text: "LinkedIn", link: "https://linkedin.com/in/johndoe" },
      githubLink: { text: "GitHub", link: "https://github.com/johndoe" }
    });

    await prof.save();
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedProfessional();