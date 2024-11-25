const db = require('../config/firebase');
const UserController = require('./userController');

const login = async(req, res) => {
    const { phoneNumber } = req.body

    phoneNumber == null && res.status(400).send({
        status: 400,
        message: 'Phone nummber is required'
    })

    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        
        await db.collection('otps').doc('phoneNumber').set({ otp, createAt: new Date() })
        res.status(200).send({ status: 200, message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).send({ status: 500, message: `Failed to send OTP: ${error.message}` });
    }
}

const verifyOTP = async(req,res) =>{
    const { phoneNumber, otp } = req.body

    (!phoneNumber || !otp) && res.status(400).send({status: 400, message: 'Phone number and OTP are required'})

    try {
        const otpDoc = await db.collection('otps').doc(phoneNumber).get();
        
        !otpDoc.exists && res.status(400).send({ status:400, message: 'OTP not found or expired' });

        (parseInt(otp) !== otpDoc.data().otp) && res.status(400).send({ statusbar: 400, message: 'Invalid OTP Number' });

        await db.collection('otps').doc(phoneNumber).delete();

        userDoc = await db.collection('users').doc(phoneNumber).get();
        !userDoc.exists && await UserController.create(phoneNumber)

        const token = jwt.sign({ phoneNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({ status: 200, message: 'OTP verified successfully', token });
    } catch (error) {
        res.status(500).send({ status: 500, message: `Failed to verify OTP: ${error.message}` });
    }
}

module.exports = {login,  verifyOTP}