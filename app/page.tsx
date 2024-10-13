"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<{ response: string } | null>(null);

  const onSubtmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const iaResponse = await axios.post(`/api/gemini`, { message: message });
      setResponse(iaResponse.data);

      console.log(iaResponse.data, ">>>>>>");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={onSubtmit}
        className="w-[70%] flex flex-col gap-4 p-10 justify-center items-center"
      >
        {response && <p>{response.response}</p>}
        <input
          className="text-black"
          type="text"
          placeholder="teste"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
