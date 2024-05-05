(function processResponse() {
    try {
        let data = JSON.parse($response.body);
        if (!data || !data.data || !data.data.user || !data.data.user.storage || !data.data.user.team) {
            console.error("Incomplete data structure or missing required fields:", data);
            return $done({body: $response.body});
        }

        // Define a convenience variable for easier access to nested properties
        let user = data.data.user;
        let team = user.team;
        let billingPlan = team.billing_plan;
        let abilities = billingPlan.abilities;
        let storage = user.storage;

        // Update storage related fields
        storage.limit_bytes = 21073741824;
        storage.limit_readable = "100 TB";

        // Set billing plan features
        abilities.can_upload_original_media = true;
        abilities.can_copy_direct_link = true;
        abilities.can_set_expire_after = true;
        abilities.can_set_media_password = true;

        // Additional team settings
        team.remove_cleanshot_branding = true;
        billingPlan.readable_name = "admin";
        billingPlan.is_paid = true;

        // User-specific fields
        user.email_verified = true;
        user.updated_at = "2099-01-11T11:36:16.000000Z";

        $done({ body: JSON.stringify(data) });
    } catch (error) {
        console.error("Failed to parse response body as JSON:", error);
        $done({body: $response.body});
    }
})();
