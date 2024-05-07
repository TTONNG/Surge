function paddleActivate() {
    // Ensure there is a body in the HTTP request
    if (!$request.body) { 
        console.error('[paddleActivate] No body found in the request.');
        return respondWith({
            success: false,
            error: 'No request body found'
        });
    }
    
    try {
        const params = new URLSearchParams($request.body);  // Parse the body as URL encoded
        const product_id = params.get("product_id"); // Retrieve the product_id from the request

        if (!product_id) {
            console.error('[paddleActivate] Product ID is missing.');
            return respondWith({
                success: false,
                error: 'Product ID is required'
            });
        }

        return respondWith({
            success: true,
            response: {
                product_id,
                activation_id: 'unique-activation-id', // example: generate or define an activation ID
                type: 'activate',
                expires: 1, // Define based on your business logic
                expiry_date: '2099-01-01T00:00:00Z', // Future date of expiry, change as required
            }
        });
    } catch (error) {
        console.error('[paddleActivate] Error processing the request:', error);
        return respondWith({
            success: false,
            error: 'Error processing the request'
        });
    }
}

function respondWith(data) {
    return ResponseDone({
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // Ensure the body is a string
        status: data.success ? 200 : 400  // HTTP status based on success flag
    });
}
