let body = $response.body;

try {
  let obj = JSON.parse(body); // Assuming the original body needs to be parsed
    
  // Define the models data to be injected or replaced 
  let newData = {
    "default_models": {
      "chat": "openai-gpt-3.5-turbo",
      "quick_ai": "openai-gpt-3.5-turbo",
      "api": "openai-gpt-3.5-turbo-instruct",
      "commands": "openai-gpt-3.5-turbo-instruct",
      "emoji_search": "openai-gpt-3.5-turbo-instruct"
    },
    "models": [
      {
        "id": "openai-gpt-3.5-turbo-instruct",
        "name": "GPT-3.5 Turbo Instruct",
        "description": "",
        "availability": "deprecated",
        "status": "deprecated",
        "features": ["commands", "api", "emoji_search"],
        "suggestions": [],
        "capabilities": {},
        "abilities": {},
        "in_better_ai_subscription": true,
        "model": "gpt-3.5-turbo-instruct",
        "provider": "openai",
        "provider_name": "OpenAI",
        "provider_brand": "openai",
        "speed": 3,
        "intelligence": 3,
        "requires_better_ai": true,
        "context": 4
      },
      // More models can be added here following the above format
    ]
  };

  // Merge the new data with the existing data
  obj = { ...obj, ...newData };

  // Update the response body
  $response.body = JSON.stringify(obj);
} catch (error) {
  console.error("Error modifying response body:", error);
}

$done({ body: $response.body });
