import { createClient } from "next-sanity";

const config = {
    projectId: "82nqazch",
    dataset: "production",
    apiVersion: "2023-09-20",
    useCdn: false
};

const client = createClient(config)

export default client;