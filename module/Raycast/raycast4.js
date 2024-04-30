var modifiedHeaders = $request.headers;
modifiedHeaders['Authorization'] = 'Bearer KcSjcbx0Qs0mAK6-9QPBp6hGWl_F4zn_nzLmkU0-UIQ';

// Ensure the method reflects what you require, this is just an example using POST
if ($request.method == "POST") {
    $httpClient.post({
        url: $request.url,
        headers: modifiedHeaders,
        body: $request.body
    }, function(error, response, data) {
        if (error) {
            $done({error: error});
        } else {
            $done({response: {
                status: response.status,
                headers: response.headers,
                body: data  // This is the response body from the new request
            }});
        }
    });
} else {
    // If not POST, you can send the original request or handle it differently
    $done({});
}
