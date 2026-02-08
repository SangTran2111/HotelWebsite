
import { GoogleGenAI } from "@google/genai";
import { HOTEL_INFO } from "../constants";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY || process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.warn("Failed to initialize GoogleGenAI:", e);
}

export const getConciergeResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  if (!ai) return "I'm sorry, the concierge service is currently unavailable. Please call us directly for assistance.";
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `You are the world-class concierge for Phu Quoc Star Hotel. 
      Your name is Starlet. Be warm, professional, and persuasive. 
      Promote the hotel using this information: ${HOTEL_INFO}. 
      You are multilingual (English, Vietnamese, Korean). Respond in the guest's language.
      Encourage guests to book by calling +84 98 101 99 66 for exclusive offers.
      Focus on the upscale experience, the heartfelt hospitality, and the serene retreat atmosphere.`,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
  });

  const response = await model;
  return response.text || "I'm sorry, I'm having trouble connecting to the desk. How can I help?";
};

export const searchPhuQuocInfo = async (query: string) => {
  if (!ai) return { text: "Search is currently unavailable.", links: [] };
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return {
      text,
      links: groundingChunks
        .filter((chunk: any) => chunk.web)
        .map((chunk: any) => ({
          uri: chunk.web.uri,
          title: chunk.web.title
        }))
    };
  } catch (error) {
    console.error("Search failed:", error);
    return { text: "Failed to search online info.", links: [] };
  }
};

export const generateHotelFrontView = async () => {
  if (!ai) return null;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'Real architectural photo of a white boutique hotel street in Phu Quoc Waterfront. The building features several identical white vertical blocks standing in a row side by side. Each block has beautiful Indochine style balconies with white stone balusters. On the ground floor, there is a prominent wide arched opening with dark-framed glass doors. Lush green tropical trees and leafy plants are visible in the foreground, partially framing the building facade. Bright sunny daylight, high-quality professional photography.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        }
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    // If quota is exhausted or other error, we log it and let the component use its fallback
    console.error("Failed to generate hotel image (likely quota exceeded):", error);
    return null;
  }
};
