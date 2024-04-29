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
        "description": "",
        "features": [
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "openai",
        "speed": 3,
        "intelligence": 3,
        "provider_name": "OpenAI",
        "provider_brand": "openai",
        "requires_better_ai": true,
        "context": 4,
        "capabilities": {},
        "availability": "deprecated",
        "suggestions": [],
        "in_better_ai_subscription": true,
        "abilities": {},
        "model": "gpt-3.5-turbo-instruct",
        "name": "GPT-3.5 Turbo Instruct",
        "status": "deprecated"
    },
    {
        "id": "openai-gpt-3.5-turbo",
        "description": "GPT-3.5 Turbo is OpenAI’s fastest model, making it ideal for tasks that require quick response times with basic language processing capabilities.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "openai",
        "speed": 3,
        "intelligence": 3,
        "provider_name": "OpenAI",
        "provider_brand": "openai",
        "requires_better_ai": true,
        "context": 16,
        "capabilities": {
            "image_generation": "full",
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [
            "chat",
            "quick_ai",
            "commands"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "image_generation": {
                "model": "dall-e-2"
            },
            "web_search": {
                "toggleable": true
            }
        },
        "model": "gpt-3.5-turbo",
        "name": "GPT-3.5 Turbo",
        "status": null
    },
    {
        "id": "openai-gpt-4",
        "description": "GPT-4 is OpenAI’s most capable model with broad general knowledge, allowing it to follow complex instructions and solve difficult problems.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "openai",
        "speed": 1,
        "intelligence": 4,
        "provider_name": "OpenAI",
        "provider_brand": "openai",
        "requires_better_ai": true,
        "context": 8,
        "capabilities": {
            "image_generation": "full",
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [
            "chat"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "image_generation": {
                "model": "dall-e-3"
            },
            "web_search": {
                "toggleable": true
            }
        },
        "model": "gpt-4",
        "name": "GPT-4",
        "status": null
    },
    {
        "id": "openai-gpt-4-turbo",
        "description": "GPT-4 Turbo from OpenAI has a big context window that fits hundreds of pages of text, making it a great choice for workloads that involve longer prompts.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "openai",
        "speed": 2,
        "intelligence": 5,
        "provider_name": "OpenAI",
        "provider_brand": "openai",
        "requires_better_ai": true,
        "context": 127,
        "capabilities": {
            "image_generation": "full",
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [],
        "in_better_ai_subscription": true,
        "abilities": {
            "image_generation": {
                "model": "dall-e-3"
            },
            "web_search": {
                "toggleable": true
            }
        },
        "model": "gpt-4-turbo",
        "name": "GPT-4 Turbo",
        "status": "beta"
    },
    {
        "id": "anthropic-claude-haiku",
        "description": "Claude 3 Haiku is Anthropic's fastest model, with a large context window that makes it ideal for analyzing code, documents, or large amounts of text.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api"
        ],
        "provider": "anthropic",
        "speed": 3,
        "intelligence": 3,
        "provider_name": "Anthropic",
        "provider_brand": "anthropic",
        "requires_better_ai": true,
        "context": 200,
        "capabilities": {
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [
            "quick_ai"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "web_search": {
                "toggleable": true
            }
        },
        "model": "claude-3-haiku-20240307",
        "name": "Claude 3 Haiku",
        "status": null
    },
    {
        "id": "anthropic-claude-sonnet",
        "description": "Claude 3 Sonnet from Anthropic strikes a balance between speed and intelligence, making it an ideal assistant for daily tasks like coding and copywriting.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api"
        ],
        "provider": "anthropic",
        "speed": 2,
        "intelligence": 4,
        "provider_name": "Anthropic",
        "provider_brand": "anthropic",
        "requires_better_ai": true,
        "context": 200,
        "capabilities": {
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [
            "commands"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "web_search": {
                "toggleable": true
            }
        },
        "model": "claude-3-sonnet-20240229",
        "name": "Claude 3 Sonnet",
        "status": null
    },
    {
        "id": "anthropic-claude-opus",
        "description": "Claude 3 Opus is Anthropic's most intelligent model, with best-in-market performance on highly complex tasks. It stands out for remarkable fluency.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api"
        ],
        "provider": "anthropic",
        "speed": 1,
        "intelligence": 5,
        "provider_name": "Anthropic",
        "provider_brand": "anthropic",
        "requires_better_ai": true,
        "context": 200,
        "capabilities": {
            "web_search": "full"
        },
        "availability": "public",
        "suggestions": [
            "chat"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "web_search": {
                "toggleable": true
            }
        },
        "model": "claude-3-opus-20240229",
        "name": "Claude 3 Opus",
        "status": null
    },
    {
        "id": "perplexity-sonar-small-online",
        "description": "Perplexity's Sonar Small is built for speed. It quickly gives you helpful answers using the latest internet knowledge while minimizing hallucinations.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "perplexity",
        "speed": 3,
        "intelligence": 1,
        "provider_name": "Perplexity",
        "provider_brand": "perplexity",
        "requires_better_ai": true,
        "context": 12,
        "capabilities": {
            "web_search": "always_on"
        },
        "availability": "public",
        "suggestions": [
            "quick_ai"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "web_search": {
                "toggleable": false
            }
        },
        "model": "sonar-small-online",
        "name": "Sonar Small",
        "status": null
    },
    {
        "id": "perplexity-sonar-medium-online",
        "description": "Perplexity's most advanced model, Sonar Medium, can handle complex questions. It considers current web knowledge to provide well-reasoned, in-depth answers.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "perplexity",
        "speed": 2,
        "intelligence": 2,
        "provider_name": "Perplexity",
        "provider_brand": "perplexity",
        "requires_better_ai": true,
        "context": 12,
        "capabilities": {
            "web_search": "always_on"
        },
        "availability": "public",
        "suggestions": [
            "quick_ai"
        ],
        "in_better_ai_subscription": true,
        "abilities": {
            "web_search": {
                "toggleable": false
            }
        },
        "model": "sonar-medium-online",
        "name": "Sonar Medium",
        "status": null
    },
    {
        "id": "groq-llama2-70b-4096",
        "description": "Llama 2 70B from Meta is a popular open-source model optimized for dialogues, which can serve as a tool for various text-related tasks. Powered by Groq.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "groq",
        "speed": 4,
        "intelligence": 2,
        "provider_name": "Meta",
        "provider_brand": "meta",
        "requires_better_ai": true,
        "context": 4,
        "capabilities": {},
        "availability": "deprecated",
        "suggestions": [],
        "in_better_ai_subscription": true,
        "abilities": {},
        "model": "llama2-70b-4096",
        "name": "Llama 2 70B",
        "status": null
    },
    {
        "id": "groq-llama3-70b-8192",
        "description": "Llama 3 70B from Meta is the most capable openly available LLM which can serve as a tool for various text-related tasks. Powered by Groq.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "groq",
        "speed": 5,
        "intelligence": 4,
        "provider_name": "Meta",
        "provider_brand": "meta",
        "requires_better_ai": true,
        "context": 8,
        "capabilities": {},
        "availability": "public",
        "suggestions": [
            "commands"
        ],
        "in_better_ai_subscription": true,
        "abilities": {},
        "model": "llama3-70b-8192",
        "name": "Llama 3 70B",
        "status": null
    },
    {
        "id": "perplexity-codellama-70b-instruct",
        "description": "Code Llama 70B from Meta is an open-source model designed to enhance and speed up coding tasks, making developer workflows faster and more efficient.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "perplexity",
        "speed": 2,
        "intelligence": 3,
        "provider_name": "Meta",
        "provider_brand": "meta",
        "requires_better_ai": true,
        "context": 16,
        "capabilities": {},
        "availability": "public",
        "suggestions": [
            "commands"
        ],
        "in_better_ai_subscription": true,
        "abilities": {},
        "model": "codellama-70b-instruct",
        "name": "Code Llama 70B",
        "status": null
    },
    {
        "id": "groq-mixtral-8x7b-32768",
        "description": "Mixtral 8x7B from Mistral is an open-source model that demonstrates high performance in generating code and text at an impressive speed. Powered by Groq.\n",
        "features": [
            "chat",
            "quick_ai",
            "commands",
            "api",
            "emoji_search"
        ],
        "provider": "groq",
        "speed": 5,
        "intelligence": 3,
        "provider_name": "Mistral",
        "provider_brand": "mistral",
        "requires_better_ai": true,
        "context": 32,
        "capabilities": {},
        "availability": "public",
        "suggestions": [],
        "in_better_ai_subscription": true,
        "abilities": {},
        "model": "mixtral-8x7b-32768",
        "name": "Mixtral 8x7B",
        "status": null
    }
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
