// DEBUT DU SCRIPT

import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    nom: string; // Correspond à "nom" dans le formulaire
    email: string; // Correspond à "email"
    objet: string; // Correspond à "objet"
    message: string; // Correspond à "message"
  };

  // Envoie une requête au webhook avec les données du formulaire
  await fetch(
    "https://cloud.activepieces.com/api/v1/webhooks/sZI6jX26G0QRtfTTlGW0U",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Incluez ici d'autres en-têtes nécessaires pour votre webhook ActivePieces
      },
      body: JSON.stringify({
        parameters: {
          nom: requestBody.nom,
          email: requestBody.email,
          objet: requestBody.objet,
          message: requestBody.message,
        },
      }),
    },
  );

  return {
    statusCode: 200,
    body: JSON.stringify("Message envoyé"),
  };
};

export { handler };

// FIN DU SCRIPT