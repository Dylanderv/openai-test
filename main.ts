import { Configuration, OpenAIApi, CreateImageRequest } from "npm:openai";

const apiKey = Deno.env.get("OpenAI_ApiKey");

const configuration = new Configuration({
    organization: "org-9Ckug91OvCBtTvOq73ffAD3P",
    apiKey
})

const openAi = new OpenAIApi(configuration);

const response = await openAi.createImage({
    prompt: "",
    n: 1,
    size: "1024x1024"
})

console.log(response.data.data[0].url);
