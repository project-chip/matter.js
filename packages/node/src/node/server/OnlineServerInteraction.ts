import { OnlineContext } from "#behavior/index.js";
import { NotImplementedError } from "#general";
import {
    Interactable,
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

export class OnlineServerInteraction implements Interactable<OnlineContext.Options> {
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

    invoke<T extends Invoke>(_request: T, _context: OnlineContext.Options): InvokeResult<T> {
        throw new NotImplementedError("invoke not implemented");
    }
}
