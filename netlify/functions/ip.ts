import ip from "ip";

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const getIpAddress = () => {
  return ip.address();
};

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", ip: getIpAddress() }),
  };
};

export { handler };
