import { NextApiRequest, NextApiResponse } from "next";

const sendResponse = (
  response: NextApiResponse,
  status: number,
  body: string = ""
) => response.status(status).send(body);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.file) {
    await import(`../../commons/${req.body.file}.common.txt`)
      .then((response) => sendResponse(res, 200, response.default))
      .catch(() => sendResponse(res, 404));
  } else {
    sendResponse(res, 404);
  }
};
