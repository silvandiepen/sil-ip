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

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      ip: getIpAddress(event),
      country: getIpCountry(event),
      event,
      context,
      test: "test",
    }),
  };
};

export { handler };
