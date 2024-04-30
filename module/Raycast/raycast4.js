var modifyRequestHeaders = function(request) {
    // Retrieve existing headers
    var headers = request.headers;

    // Set new Cookie header
    headers['cookie'] = '__raycast_session=d5d306ff08dc68a398a41ac44825510a';

    // Set new Authorization header
    headers['authorization'] = 'Bearer KcSjcbx0Qs0mAK6-9QPBp6hGWl_F4zn_nzLmkU0-UIQ';

    // Log modifications -- useful for debugging
    console.log('Modified headers:', headers);

    // Return modified request
    return { headers: headers };
}

$done(modifyRequestHeaders($request));
