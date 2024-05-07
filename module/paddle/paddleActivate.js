function paddleActivate() {
    // Check if the request body is present
    if (!validateRequestBody($request.body)) {
        return createErrorResponse('No request body found');
    }

    const params = parseRequestParams($request.body);
    const product_id = params.get("product_id");

    // Ensure a product_id is present
    if (!product_id) {
        console.log('[paddleActivate] Product ID is missing.');
        return createErrorResponse('Product ID is required');
    }

    // Construct a response object based on actual server handling logic
    const activationDetails = {
        product_id: product_id,
        activation_id: generateUniqueId(),
        type: 'activate',
        expires: 1,
        expiry_date: '2099-01-01T00:00:00Z',
        signature: generateSignature(product_id)
    };

    console.log('[paddleActivate] Activation processed successfully.');
    return ResponseDone({
        status: 200,
        body: activationDetails
    });
}

function validateRequestBody(body) {
    return body && body.trim() !== '';
}

function parseRequestParams(body) {
    return new URLSearchParams(body);
}

function generateUniqueId() {
    // Implement your logic to generate a unique identifier here, this is a placeholder:
    return 'unique-activation-id';
}

function generateSignature(product_id) {
    // Implement your actual cryptographic signature logic here:
    return 'example-signature';
}

function createErrorResponse(message) {
    console.error(`[paddleActivate] Error: ${message}`);
    return ResponseDone({
        status: 400,
        body: {
            success: false,
            error: message
        }
    });
}

function ResponseDone({ status, body }) {
    return $done({
        response: {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            status: status
        }
    });
}
