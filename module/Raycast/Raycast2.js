let body = JSON.parse($response.body);

// Update has_more flag
body.has_more = true;

body.data.forEach((price) => {
    // Update recurring.interval to "year" where applicable
    if (price.recurring && price.recurring.interval) {
        price.recurring.interval = "year";
    }
    // Update unit_amount and unit_amount_decimal to 990000
    price.unit_amount = 990000;
    price.unit_amount_decimal = "990000";

    // Update created timestamp to 1913897013
    price.created = 1913897013;
});

$done({ body: JSON.stringify(body) });
