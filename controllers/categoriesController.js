const db = require('../config/firebase')
const Category = require('../models/Category')

class categoriesController{

    async create(phoneNumber){
        try {
            await db.collection('category').doc(phoneNumber).set({ phoneNumber });
            return { status: 201, message: 'category created successfully' };
        } catch (error) {
            
        }
    }

    async index(req, res) {
        try {
            const snapshot = await db.collection('category').get();
            const category = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return res.status(200).send({status:200, message: 'Successfull get all data', data: {category}});
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch category: ${error.message}` });
        }
    }

    async show(req, res) {
        const { phoneNumber } = req.params;
        try {
            const categoryDoc = await db.collection('category').doc(phoneNumber).get();
            (!categoryDoc.exists) && res.status(404).send({ status: 404, message: 'category not found' });

            return res.status(200).send({ status: 200, message: 'Successfull', data:{ id: categoryDoc.id, ...categoryDoc.data() } });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to fetch category: ${error.message}` });
        }
    }

    async update(req, res) {
        const { documentId } = req.params;
        const updates = req.body;
        try {
            const categoryDoc = await db.collection('category').doc(documentId).get();
            (!categoryDoc.exists) && res.status(404).send({ status: 404, message: 'category not found' });
            
            await db.collection('category').doc(documentId).update(updates);
            return res.status(200).send({ status: 200, message: 'category updated successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to update category: ${error.message}` });
        }
    }

    async delete(req, res) {
        const { documentId } = req.params;
        try {
            const categoryDoc = await db.collection('category').doc(phoneNumber).get();
            (!categoryDoc.exists) && res.status(404).send({ status: 404, message: 'category not found' });
            
            await db.collection('category').doc(documentId).delete();
            return res.status(200).send({ status: 200, message: 'category deleted successfully' });
        } catch (error) {
            return res.status(500).send({ status: 500, message: `Failed to delete category: ${error.message}` });
        }
    }
}

module.exports = new categoriesController