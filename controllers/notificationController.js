const db = require('../config/firebase')
const Notification = require('../models/Notification')

class notificationController{

    async create(phoneNumber){
        try {
            await db.collection('notification').doc(phoneNumber).set({ phoneNumber });
            return { status: 201, message: 'notification created successfully' };
        } catch (error) {
            
        }
    }

    async index(req, res) {
        try {
            const snapshot = await db.collection('notification').get();
            const notification = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return res.status(200).send({status:200, message: 'Successfull get all data', data: {notification}});
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch notification: ${error.message}` });
        }
    }

    async show(req, res) {
        const { phoneNumber } = req.params;
        try {
            const notificationDoc = await db.collection('notification').doc(phoneNumber).get();
            (!notificationDoc.exists) && res.status(404).send({ status: 404, message: 'notification not found' });

            return res.status(200).send({ status: 200, message: 'Successfull', data:{ id: notificationDoc.id, ...notificationDoc.data() } });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch notification: ${error.message}` });
        }
    }

    async update(req, res) {
        const { documentId } = req.params;
        const updates = req.body;
        try {
            const notificationDoc = await db.collection('notification').doc(documentId).get();
            (!notificationDoc.exists) && res.status(404).send({ status: 404, message: 'notification not found' });
            
            await db.collection('notification').doc(documentId).update(updates);
            return res.status(200).send({ status: 200, message: 'notification updated successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to update notification: ${error.message}` });
        }
    }

    async delete(req, res) {
        const { documentId } = req.params;
        try {
            const notificationDoc = await db.collection('notification').doc(phoneNumber).get();
            (!notificationDoc.exists) && res.status(404).send({ status: 404, message: 'notification not found' });
            
            await db.collection('notification').doc(documentId).delete();
            return res.status(200).send({ status: 200, message: 'notification deleted successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to delete notification: ${error.message}` });
        }
    }
}

module.exports = new notificationController