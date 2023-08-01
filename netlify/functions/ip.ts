
import os from "os";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";


const getIpAddress = ()=>{
return os.networkInterfaces();
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", ip: getIpAddress() }),
  };
};

export { handler };