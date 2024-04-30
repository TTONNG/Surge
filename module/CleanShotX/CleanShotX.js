let body = $response.body;
let data = JSON.parse(body);
if (data && data.data && data.data.user && data.data.user.storage) {
    data.data.user.storage.limit_bytes = 21073741824;
    data.data.user.storage.limit_readable = "100 TB";
    data.data.user.team.billing_plan.abilities.can_upload_original_media = true;
    data.data.user.team.billing_plan.abilities.can_copy_direct_link = true;
    data.data.user.team.billing_plan.abilities.can_set_expire_after = true;
    data.data.user.team.billing_plan.abilities.can_set_media_password = true;
    data.data.user.team.remove_cleanshot_branding = true;
    data.data.user.team.billing_plan.readable_name = "admin";
    data.data.user.team.billing_plan.is_paid = true;
    data.data.user.email_verified = true;
    data.data.user.updated_at = "2099-01-11T11:36:16.000000Z";
} else {
    console.error("Unexpected JSON structure: ", data);
}
body = JSON.stringify(data);
$done({ body });
