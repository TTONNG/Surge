let parsedBody = JSON.parse($response.body); 
const fieldsToSetTrue = [
    'admin', 'eligible_for_pro_features', 'eligible_for_ai', 'eligible_for_gpt4',
    'eligible_for_bext', 'eligible_for_file_search_beta', 'eligible_for_ai_beta_features',
    'can_use_referral_codes', 'eligible_for_cloud_sync', 'eligible_for_application_settings',
    'can_manage_billing', 'has_running_subscription', 'has_active_subscription',
    'can_cancel_subscription', 'can_view_billing', 'can_modify_subscription_interval',
    'any_organization_has_active_subscription', 'any_organization_has_running_subscription',
    'any_organization_has_better_ai', 'has_pro_features', 'has_better_ai', 'has_developer_extensions',
    'publishing_bot'
];
fieldsToSetTrue.forEach(field => { parsedBody[field] = true; });

Object.assign(parsedBody, {
    id: "45ec6a50-8cbe-4e3e-b0a8-e63355a3428b",
    stripe_subscription_status: "active",
    location: "USA",
    initials: "TS",
    username: "raycast",
    stripe_subscription_id: "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S",
    name: "raycast"
});

parsedBody.subscription = {
    id: "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S",
    can_cancel: true,
    can_update_interval: false,
    interval: "year",
    running: true,
    current_period_end: 1913897013,
    can_upgrade_to_better_ai: false,
    canceled_at: null,
    can_downgrade_from_better_ai: true,
    can_update: true,
    status: "active",
    has_better_ai: true
};

let modifyResponseBody = JSON.stringify(parsedBody);

$done({response: { body: modifyResponseBody }});
