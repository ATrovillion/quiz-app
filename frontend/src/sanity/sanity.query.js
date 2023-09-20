import {groq} from "next-sanity";
import client from "./sanity.client";

export async function getItems() {
    return client.fetch(
        groq`*[_type== "item"]{

            _id,
            question,
            answer,
            explanation,
            
        }`
    );
}