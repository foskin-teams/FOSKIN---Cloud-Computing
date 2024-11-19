const db = require('../config/firebase')
const { v4: uuidv4 } = require('uuid');

class UserController{

    async create(phoneNumber){
        try {
            await db.collection('users').doc(phoneNumber).set({ uuid:uuidv4(), phoneNumber, createdAt: new Date() });
            return { status: 201, message: 'User created successfully' };
        } catch (error) {
            
        }
    }

    async index(req, res) {
        try {
            const snapshot = await db.collection('users').get();
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return res.status(200).send({status:200, message: 'Successfull get all data', data: {users}});
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch users: ${error.message}` });
        }
    }

    async show(req, res) {
        const { phoneNumber } = req.params;
        try {
            const userDoc = await db.collection('users').doc(phoneNumber).get();
            (!userDoc.exists) && res.status(404).send({ status: 404, message: 'User not found' });

            return res.status(200).send({ status: 200, message: 'Successfull', data:{ id: userDoc.id, ...userDoc.data() } });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch user: ${error.message}` });
        }
    }

    async update(req, res) {
        const { uuid } = req.params;
        const updates = req.body;
        try {
            const userDoc = await db.collection('users').doc(uuid).get();
            (!userDoc.exists) && res.status(404).send({ status: 404, message: 'User not found' });
            
            await db.collection('users').doc(uuid).update(updates);
            return res.status(200).send({ status: 200, message: 'User updated successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to update user: ${error.message}` });
        }
    }

    async delete(req, res) {
        const { uuid } = req.params;
        try {
            const userDoc = await db.collection('users').doc(phoneNumber).get();
            (!userDoc.exists) && res.status(404).send({ status: 404, message: 'User not found' });
            
            await db.collection('users').doc(uuid).delete();
            return res.status(200).send({ status: 200, message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to delete user: ${error.message}` });
        }
    }
}

module.exports = new UserController