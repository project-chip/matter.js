import { OnlineContext } from "#behavior/context/server/OnlineContext.js";
import { NotImplementedError } from "#general";
import {
    Interactable,
    Invoke,
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

    async *invoke(request: Invoke, context: OnlineContext.Options) {
        const session = OnlineContext({ ...context, command: true }).open();
        try {
            for await (const chunk of this.#interaction.invoke(request, session)) {
                yield chunk;
            }
        } catch (error) {
            session.reject(error);
        }
        return session.resolve(undefined);
    }
}
