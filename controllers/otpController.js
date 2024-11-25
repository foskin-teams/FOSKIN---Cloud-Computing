const db = require('../config/firebase')
const Otp = require('../models/Otp')

class otpController{

    async create(phoneNumber){
        try {
            await db.collection('otps').doc(phoneNumber).set({ phoneNumber });
            return { status: 201, message: 'otp created successfully' };
        } catch (error) {
            
        }
    }

    async index(req, res) {
        try {
            const snapshot = await db.collection('otps').get();
            const otps = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return res.status(200).send({status:200, message: 'Successfull get all data', data: {otps}});
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch otps: ${error.message}` });
        }
    }

    async show(req, res) {
        const { phoneNumber } = req.params;
        try {
            const otpDoc = await db.collection('otps').doc(phoneNumber).get();
            (!otpDoc.exists) && res.status(404).send({ status: 404, message: 'otp not found' });

            return res.status(200).send({ status: 200, message: 'Successfull', data:{ id: otpDoc.id, ...otpDoc.data() } });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch otp: ${error.message}` });
        }
    }

    async update(req, res) {
        const { documentId } = req.params;
        const updates = req.body;
        try {
            const otpDoc = await db.collection('otps').doc(documentId).get();
            (!otpDoc.exists) && res.status(404).send({ status: 404, message: 'otp not found' });
            
            await db.collection('otps').doc(documentId).update(updates);
            return res.status(200).send({ status: 200, message: 'otp updated successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to update otp: ${error.message}` });
        }
    }
}

module.exports = new otpController