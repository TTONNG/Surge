let modifyResponseBody = $response.body;
let parsedBody = JSON.parse(modifyResponseBody);

// Fields that should be universally set to true
const trueFields = [
    'admin', 'eligible_for_ai_beta_features', 'can_use_referral_codes',
    'eligible_for_cloud_sync', 'has_active_subscription', 'eligible_for_bext',
    'eligible_for_file_search_beta', 'any_organization_has_better_ai',
    'any_organization_has_active_subscription', 'eligible_for_application_settings',
    'has_developer_extensions', 'eligible_for_ai', 'any_organization_has_running_subscription',
    'publishing_bot'
];

trueFields.forEach(field => {
    parsedBody[field] = true;
});

// Specific field updates
parsedBody.stripe_subscription_current_period_end = 1913897013;
parsedBody.stripe_subscription_interval = "year";
parsedBody.stripe_subscription_status = "active";
parsedBody.email = "hello@raycast.com";
parsedBody.avatar = "https://svgl.app/library/raycast.svg";
parsedBody.handle = "raycast";
parsedBody.id = "45ec6a50-8cbe-4e3e-b0a8-e63355a3428b";
parsedBody.username = "raycast";

// Update subscription object
parsedBody.subscription = {
    id: "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S",
    status: "active",
    interval: "year",
    running: true,
    has_better_ai: true,
    current_period_end: 1913897013,
    can_update: true,
    can_cancel: true,
    can_update_interval: false,
    can_upgrade_to_better_ai: false,
    can_downgrade_from_better_ai: true
};

// Serialize the modified object back to JSON
modifyResponseBody = JSON.stringify(parsedBody);
$done({ body: modifyResponseBody });
