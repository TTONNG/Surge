/**
 * Paddle activation
 * @url https://v3.paddleapi.com/3.2/license/activate
 */
function paddleActivate() {
    const body = $request.body;
    if (!body) {
        return ResponseDone({
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: {
                success: false,
                response: {
                    error: '[Surge] Activator: No body found',
                },
            },
        });
    }
    
    const params = new URLSearchParams(body);
    const product_id = params.get("product_id") || '';

    return ResponseDone({
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            success: true,
            response: {
                product_id,
                activation_id: '',
                type: 'activate',
                expires: 1,
                expiry_date: 1999999999999,
            },
            signature: '',
        },
    });
}

/**
 * Paddle verification
 * @url https://v3.paddleapi.com/3.2/license/verify
 */
function paddleVerify() {
    return ResponseDone({
        body: {
            success: true,
            response: {
                type: 'personal',
                expires: 1,
                expiry_date: 1999999999999,
            },
            signature: '',
        },
    });
}

function ResponseDone(props) {
    if (props.body){
        props.body = JSON.stringify(props.body);
    }
    return {
        response: {
            ...props,
        },
    };
}

// If used within a framework that requires a done callback
if (typeof $done !== 'undefined') {
    $done({ response: ResponseDone({/* example props here */}) });
}
