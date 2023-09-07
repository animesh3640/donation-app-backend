const Donation = require("../models/Donation")

const createDonation = async (req, res) => {
    const { date, amount, donationNumber } = req.body;
    const donationObj = new Donation({
        date,
        amount,
        donationNumber
    })
    try {
        await donationObj.save();
        res.status(201).send({ status: 201, message: "Donation Successfully Created !" })
    } catch (err) {
        res.status(400).send({ status: 400, message: "Donation Creation Failed !" })
    }
}

const getDonations = async (req, res) => {
    try {
         const donationData = await Donation.find().maxTimeMS(20000)
        res.status(200).send({
            status: 200, message: "Donation Data Fetached Successfully !", data: donationData
        })
    } catch (err) {
        console.log("Error = ", err);
        res.status(400).send({ status: 400, message: "Failed to get Donation Data !" })
    }
}

const getMessage = async (req, res) => {
    var numberOfDonations = 0;
    try {
        const donationData = await Donation.find()
        numberOfDonations = donationData.length;
    } catch (err) {
        console.log("Error = ", err);
        res.status(400).send({ status: 400, message: "Failed to get Donation Data !" })
    }
    if (numberOfDonations >= 2) {
        res.status(200).send({
            status: 200,
            message: `
            Dear Donar,
            We wanted to take a moment to express our sincere appreciation for your incredible support. 
            Your multiple donations have made a significant impact on our cause. 
            Your generosity inspires us and helps us continue our mission. 
            Thank you for being such an essential part of our journey!
            Warm regards,
            [Animesh Karne]
            [AK and company]
            `
        })
    } else {
        res.status(200).send({ status: 200, 
            message: `
            Dear Donor,
            Your recent donation means the world to us! 
            Your support has already made an impact, and we hope you'll consider helping us again in the future. 
            Together, we can do even more.
            With gratitude,
            [Animesh Karne]
            [AK and Company]
            ` 
        })

    }
}

module.exports = { createDonation, getDonations, getMessage };
