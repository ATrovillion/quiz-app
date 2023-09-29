import {groq} from "next-sanity";
import client from "@/sanity/sanity.client";

export async function getItems() {
  return await client.fetch(
        groq`*[_type== "item"]{

            _id,
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            explanation,
            
        }`
    )
};