let body = JSON.parse($response.body);
// Ensure `models` array is present in the body
if (body.models) {
    body.models.forEach((model) => {
        model.in_better_ai_subscription = true;
        model.requires_better_ai = true;
    });
}
$done({ body: JSON.stringify(body) });
