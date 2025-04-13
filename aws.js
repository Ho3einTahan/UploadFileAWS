const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS S3 with access credentials and necessary parameters
const s3 = new AWS.S3({
    accessKeyId: 'YOUR ACCESS KEY ID',        // AWS Access Key ID
    secretAccessKey: 'YOUR SECRET ACCESS KEY',// AWS Secret Access Key
    endpoint: 'YOUR_URL',                     // URL to connect to the service
    region: 'ir-thr-at1',                     // AWS region for the service
    s3ForcePathStyle: true,                   // Force path-style access for S3
    signatureVersion: 'v4',                   // S3 signature version
});

// File upload settings
const params = {
    Bucket: 'pooyeshtest',  // Name of the S3 bucket
    Key: 'backup1.sql',     // File name that will be saved in S3
    Body: fs.createReadStream('./timeAttendance'), // Path to the file you want to upload
};

// Upload file to S3
s3.upload(params, (err, data) => {
    if (err) {
        console.error('Error during upload:', err); // Log error if upload fails
    } else {
        console.log('File uploaded successfully:', data.Location); // Log the URL of the uploaded file
    }
});