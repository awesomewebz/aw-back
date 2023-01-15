import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const Contact = mongoose.model("contact", contactSchema);
export default Contact;