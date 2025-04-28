const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const FormData = require('form-data');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static('dist'));

app.post('/api/submit-form', async (req, res) => {
    try {
        const formData = new FormData();
        
        // Get form data from request
        const { formType, name, email, subject, pdf } = req.body;
        
        // Get the appropriate form ID based on form type
        const formId = formType === 'residential' 
            ? '240387727172057' 
            : '240397250346052';
        
        // Prepare form data for JotForm
        formData.append('submission[1]', name);
        formData.append('submission[2]', email);
        formData.append('submission[3]', subject);
        formData.append('submission[4]', pdf);
        
        // Submit to JotForm
        const response = await fetch(`https://api.jotform.com/form/${formId}/submissions`, {
            method: 'POST',
            headers: {
                'APIKEY': '30c2dfbd02cf45f78be32c0ad1c90960'
            },
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit to JotForm');
        }
        
        res.json({ success: true });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 