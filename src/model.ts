import { CloudflareWorkersAI } from "@langchain/cloudflare";

const model = new CloudflareWorkersAI({
  model: "@cf/meta/llama-3-8b-instruct",
  cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
  cloudflareApiToken: process.env.CLOUDFLARE_API_TOKEN,
  baseUrl: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run`,
});

export { model };
