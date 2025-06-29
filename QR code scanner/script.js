document.getElementById('qr-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('qr-file');
    const file = fileInput.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://api.qrserver.com/v1/read-qr-code/', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        // Extract text from the response
        const qrText = result[0]?.symbol[0]?.data || 'No data found or invalid QR code.';


        document.getElementById('result').innerText = `QR Code Content:\n${qrText}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error reading QR code.';
        console.error('Error:', error);
    }
});