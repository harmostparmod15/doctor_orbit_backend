"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("doctors", [
      {
        name: "Dr. Manjeet Chillar",
        speciality: "Surgeon",
        fees: 400,
        description:
          "Dr. Ashok Seth is one of the famous  Surgeons of India. Internationally He is famous for his contribution to the interventional cardiology field. ",
        rating: 3,
        address:
          "Shop No. 6255/1, 1st Floor, Dev Nagar, Karol Bagh, Delhi - 110092",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Ashok Neelam",
        speciality: "Cardiologist",
        isPromoted:true,
        fees: 500,
        description:
          "Dr. Ashok Neelam is one of India’s most skilled and experienced cardiac bypass surgeons and is considered among the top 10 cardiologists in India.",
        rating: 4,
        address: "Shop No. 455/1, 3rd Floor, Hari Nagar, Delhi - 110092",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Gangu Chaudhary",
        speciality: "Neurologist",
        fees: 800,
        description:
          "Dr. Gangu Chaudhary is now affiliated with Fortis Memorial Research Institute in Gurgaon as Director and Unit Head of Neurology. He is a well-known Neurologist in India.",
        rating: 2,
        address:
          "Shop No. 225, Ground Floor, Allahabad, Uttar Pradesh - 143092",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Amitabh Rawat",
        speciality: "Dermatologist",
        fees: 1200,
        description:
          "Dr. Amitabh Rawat's areas of expertise include dermato-cosmetology, platelet rich plasma therapy, micropigmentation, skin grafting, and melanocyte transplantation for the treatment of vitiligo, hair management, allergy management",
        rating: 5,
        address:
          " 29-7-33, 1st Floor, Vishnuvardhanarao Street, Suryaraopet, Vijayawada, Andhra Pradesh -  520002,",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Sushant Rai",
        speciality: "Endocrinologist",
        isPromoted:true,
        fees: 1200,
        description:
          "Dr. Sushant Rai is a Endocrinologist (Diabetologist) and a General Physician with a vast experience of 48 years.He was awarded the Seva Ratna Award in 2011 and the Best Doctor Award by Tamil Nadu M G R Medical University in 2002. ",
        rating: 3,
        address:
          " 294/2,  3rd Floor, Subhash Chownk, Moti Tiba, Dalhousie, Himachal Pradesh - 176304",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Rahul Sharma",
        speciality: "Gastroenterologists",
        fees: 1000,
        description:
          "Dr. Rahul Sharma is formerly the Director of the Fortis Memorial Research Institute’s Department of Gastroenterology and Hepatobiliary Sciences in Gurgaon. ",
        rating: 4,
        address: " 294/2, 2nd Floor, Moti Chownk, Channi, Jammu - 180001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Virender Kumar",
        speciality: "Urologist",
        fees: 2000,
        description:
          "Dr. Virender Kumar is a renowned Urologist, Uro-Oncologist, Uro-Gynaecologist, and Andrologist, Transplant, and Robotic Surgeon with over three decades of diverse surgical practice",
        rating: 5,
        address:
          " 2922,  2nd Floor, 	Dilbaar Chownk, Lucknow, Uttar Pradesh - 282001",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Bharat Gupta",
        speciality: "Rheumatologist",
        fees: 600,
        description:
          " Dr. Bharat Gupta is an eminent Rheumatologist and has a distinguished service with the Indian Armed Forces. Has an expertise in intra-articular injections for providing relief to arthritis patients.",
        rating: 2,
        address: "30 a/ Nusser House, M Parmanand Marg, Srinagar - 400004,",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Ashok KD",
        speciality: "Pulmonologist",
        isPromoted:true,
        fees: 900,
        description:
          "Dr. Ashok KD has 37 years of expertise as a pulmonologist, and specializes in Respiratory Diseases, Sleep Medicine, Tuberculosis, and Interventional Pulmonology.",
        rating: 3,
        address:
          " 184, 3rd floor, Sree Raghavendra complex 3rd Cross Road Bengaluru , 560003",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dr. Rajesh Mishra",
        speciality: "Podiatrists",
        fees: 300,
        description:
          "Dr. Rajesh Mishra has considerable experience and technical skills in Foot & Ankle Surgical and Podiatry Care. He has had a broad national and international practice in Foot and Ankle. ",
        rating: 5,
        address: " 319, avnrdblr- Avenue Road, Jaipur - 560002",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
