(function() {
    let responseBody = $response.body;

    // 安全地解析JSON，以避免可能的错误
    try {
        let parsedBody = JSON.parse(responseBody);

        // 为parsedBody对象赋值新属性
        Object.assign(parsedBody, {
            email: "",
            username: "",
            admin: true,
            any_organization_has_better_ai: true,
            any_organization_has_running_subscription: true,
            any_organization_has_active_subscription: true,
            has_developer_extensions: true,
            publishing_bot: true,
            eligible_for_cloud_sync: true,
            eligible_for_application_settings: true,
            eligible_for_ai_beta_features: true,
            eligible_for_file_search_beta: true,
            eligible_for_ai: true,
            eligible_for_bext: true,
            broken_raycast_client: true,
            stripe_subscription_current_period_end: 2746090662
        });

        // 设置具体subscription细节
        parsedBody.subscription = {
            id: "sub_1PBZBqGdsJ8jfw5X1XOtiZVE",
            status: "active",
            interval: "year",
            running: true,
            has_better_ai: true,
            canceled_at: null,
            current_period_end: 2746090662,
            can_update: true,
            can_cancel: true,
            can_update_interval: true,
            can_upgrade_to_better_ai: false,
            can_downgrade_from_better_ai: true
        };

        // 将修改后的对象重新转换为字符串
        responseBody = JSON.stringify(parsedBody);
        $done({ body: responseBody });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        $done({ body: responseBody }); // 返回未修改的原始响应体
    }
})();
