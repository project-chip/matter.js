import { OnlineContext } from "#behavior/index.js";
import { NotImplementedError } from "#general";
import {
    Invoke,
    InvokeResult,
    NodeProtocol,
    Read,
    ReadResult,
    ServerInteraction,
    Subscribe,
    SubscribeResult,
    Write,
    WriteResult,
} from "#protocol";

export class OnlineServerInteraction /*implements Interactable<OnlineContext.Options>*/ {
    readonly #interaction: ServerInteraction;

    constructor(node: NodeProtocol) {
        this.#interaction = new ServerInteraction(node);
    }

    async *read(request: Read, context: OnlineContext.Options): ReadResult {
        const session = OnlineContext(context).beginReadOnly();
        try {
            for await (const report of this.#interaction.read(request, session)) {
                yield report;
            }
        } finally {
            session[Symbol.dispose]();
        }
    }

    subscribe(_request: Subscribe, _context: OnlineContext.Options): SubscribeResult {
        throw new NotImplementedError("invoke not implemented");
    }

    async write<T extends Write>(request: T, context: OnlineContext.Options): WriteResult<T> {
        return OnlineContext(context).act(session => this.#interaction.write(request, session));
    }

    // TODO: Find a way howe OnlineContext.act does not destroy the AsyncIterator returned here, then we can also
    //  adjust the commented out "implements" for the class
    invoke(
        request: Invoke,
        context: OnlineContext.Options,
        responseData?: (chunk: InvokeResult.Chunk) => Promise<void>,
    ) {
        return OnlineContext({ ...context, command: true }).act(async session => {
            if (request.suppressResponse) {
                return this.#interaction.invoke(request, session) as unknown as Promise<void>;
            } else {
                for await (const chunk of this.#interaction.invoke(request, session)) {
                    if (responseData !== undefined) {
                        await responseData(chunk);
                    }
                }
            }
        });
    }
}
