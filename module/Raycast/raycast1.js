let modifyResponseBody = $response.body;
let parsedBody = JSON.parse(modifyResponseBody);
parsedBody.stripe_subscription_current_period_end = 1913897013;
parsedBody.stripe_subscription_interval = "year";
parsedBody.admin = true;
parsedBody.eligible_for_ai_beta_features = true;
parsedBody.can_use_referral_codes = true;
parsedBody.eligible_for_cloud_sync = true;
parsedBody.has_active_subscription = true;
parsedBody.stripe_subscription_status = "active";
parsedBody.email = "hello@raycast.com";
parsedBody.eligible_for_bext = true;
parsedBody.eligible_for_file_search_beta = true;
parsedBody.any_organization_has_better_ai = true;
parsedBody.any_organization_has_active_subscription = true;
parsedBody.eligible_for_application_settings = true;
parsedBody.has_developer_extensions = true;
parsedBody.eligible_for_ai = true;
parsedBody.any_organization_has_running_subscription = true;
parsedBody.avatar = "https://svgl.app/library/raycast.svg";
parsedBody.handle = "raycast";
parsedBody.id = "45ec6a50-8cbe-4e3e-b0a8-e63355a3428b";
parsedBody.username = "raycast";
parsedBody.subscription= {
    "id": "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S",
    "status": "active",
    "interval": "year",
    "running": true,
    "has_better_ai": true,
    "current_period_end": 1913897013,
    "can_update": true,
    "can_cancel": true,
    "can_update_interval": false,
    "can_upgrade_to_better_ai": false,
    "can_downgrade_from_better_ai": true
  };
parsedBody.publishing_bot = true;
modifyResponseBody = JSON.stringify(parsedBody);
$done({ body: modifyResponseBody });
