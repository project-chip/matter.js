import { MatterError } from "../../common/MatterError.js";
import { StatusCode } from "./InteractionProtocol.js";

/** Error base Class for all errors related to the status response messages. */
export class StatusResponseError extends MatterError {
    public constructor(
        message: string,
        public readonly code: StatusCode
    ) {
        super();

        this.message = `(${code}) ${message}`;
    }
}
