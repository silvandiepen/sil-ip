import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const getIpAddress = (event: HandlerEvent) => {
  return (
    event.headers["x-forwarded-for"] ||
    event.headers["x-nf-client-connection-ip"] ||
    "0.0.0.0"
  );
};
const getIpCountry = (event: HandlerEvent) => {
  return (
    event.headers["x-country"] || event.multiValueHeaders["X-Country"] || "-"
  );
};

const getIpOS = (event: HandlerEvent) => {
  return (
    event.headers["sec-ch-ua-platform"] ||
    event.multiValueHeaders["Sec-Ch-Ua-Platform"] ||
    "-"
  );
};

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ip: getIpAddress(event),
      country: getIpCountry(event),
      os: getIpOS(event),
    }),
  };
};

export { handler };
