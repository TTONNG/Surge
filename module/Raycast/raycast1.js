let body = $response.body;
try {
  let obj = JSON.parse(body);
  obj.id = "45ec6a50-8cbe-4e3e-b0a8-e63355a3428b";
  obj.name = "raycast";
  obj.handle = "raycast";
  obj.bio = "";
  obj.twitter_handle = "";
  obj.github_handle =   "";
  obj.location = "USA";
  obj.initials = "t_";
  obj.avatar_placeholder_color = "#D64854";
  obj.avatar = "https://svgl.app/library/raycast.svg";
  obj.client_flags = {"pro_plan_walkthrough_shown": true};
  obj.eligible_for_pro_features = true;
  obj.eligible_for_ai = true;
  obj.eligible_for_gpt4 = true;
  obj.stripe_subscription_status = "active";
  obj.eligible_for_developer_hub = true;
  obj.eligible_for_bext = true;
  obj.eligible_for_file_search_beta = true;
  obj.eligible_for_ai_beta_features = true;
  obj.can_use_referral_codes = true;
  obj.can_cancel_subscription = true;
  obj.eligible_for_ai_citations = true;
  obj.eligible_for_cloud_sync = true;
  obj.eligible_for_application_settings = true;
  obj.can_upgrade_to_pro = false;
  obj.can_manage_billing = true;
  obj.has_better_ai = true;
  obj.has_running_subscription = true;
  obj.better_ai_subscription_ids =  [
    "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S"
  ];
  
  obj.subscription = {
    "id": "sub_1OxZKbGdsJ8jfw5XKdbtvQ8S",
    "status": "active",
    "interval": "year",
    "running": true,
    "has_better_ai": true,
    "canceled_at": null,
    "current_period_end": 1913897013,
    "can_update": true,
    "can_cancel": true,
    "can_update_interval": false,
    "can_upgrade_to_better_ai": false,
    "can_downgrade_from_better_ai": true
  };
  obj.has_pro_features = true;
  obj.email = "hello@raycast.com";
  $response.body = JSON.stringify(obj);
} catch (error) {
  console.log("Error modifying response body:", error);
}

$done({
  body: $response.body
});
