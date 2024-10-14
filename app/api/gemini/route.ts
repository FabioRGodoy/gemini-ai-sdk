import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST(req: Request) {
  const { message } = await req.json();

  const { text } = await generateText({
    model: google("gemini-1.5-flash-latest"),
    prompt: message,
  });

  const data = {
    response: text,
  };

  console.log(data);

  return Response.json(data);
}

// import { google } from "@ai-sdk/google";
// import { streamText } from "ai";

// export async function POST(req: Request) {
//   const { message } = await req.json();

//   const { textStream } = await streamText({
//     model: google("gemini-1.5-flash-latest"),
//     prompt: message,
//   });

//   for await (const textPart of textStream) {
//     console.log(textPart);
//   }
//   const data = {
//     response: textStream,
//   };

//   console.log(data);

//   return Response.json(data);
// }
