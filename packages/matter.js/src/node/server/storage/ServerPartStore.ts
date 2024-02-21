import { Val } from "../../../behavior/state/Val.js";
import { Datasource } from "../../../behavior/state/managed/Datasource.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { DatasourceStore } from "../../../endpoint/storage/DatasourceStore.js";
import { PartStore } from "../../../endpoint/storage/PartStore.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { AsyncConstruction } from "../../../util/AsyncConstruction.js";

const NUMBER_KEY = "__number__";
const KNOWN_KEY = "__known__";

/**
 * The server implementation of {@link PartStore}.
 *
 * Manages storage for a specific endpoint.
 */
export class ServerPartStore implements PartStore {
    #storage: StorageContext;
    #initialValues = {} as Record<string, Val.Struct>;
    #number: number | undefined;
    #construction: AsyncConstruction<PartStore>;

    #childStorage: StorageContext;
    #childStores = {} as Record<string, ServerPartStore>;

    // TODO - this is a temporary kludge, don't think it's possible right now to query for sub-contexts?  Instead we
    // maintain this persistent list of all parts
    #knownParts = new Set<string>();

    // TODO - same issue here
    #knownBehaviors = new Set<string>();

    toString() {
        return `storage:${this.#storage.contexts.join(".")}`;
    }

    get construction() {
        return this.#construction;
    }

    get initialValues() {
        return this.#initialValues;
    }

    get number() {
        this.#construction.assert();

        return this.#number;
    }

    set number(number: number | undefined) {
        this.#construction.assert();

        if (this.#number !== number) {
            this.#number = number;
        }
    }

    constructor(storage: StorageContext, load = true) {
        this.#storage = storage;
        this.#childStorage = storage.createContext("parts");

        this.#construction = AsyncConstruction(this, () => {
            // Load is false when the store was not pre-loaded, which means it does not yet exist on disk and we can
            // avoid async I/O
            if (!load) {
                return;
            }

            return this.#load();
        });
    }

    async #load() {
        this.#knownBehaviors = new Set(this.#storage.get(KNOWN_KEY, Array<string>()));

        for (const behaviorId of this.#knownBehaviors) {
            const behaviorValues = (this.#initialValues[behaviorId] = {} as Val.Struct);
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key of behaviorStorage.keys()) {
                behaviorValues[key] = behaviorStorage.get(key);
            }
        }

        const number = this.#storage.get(NUMBER_KEY, -1) as number | undefined;
        if (number !== -1) {
            this.#number = number;
        }

        await this.#loadSubparts();
    }

    storeForBehavior(behaviorId: string): Datasource.Store {
        this.#construction.assert();

        return DatasourceStore(this, behaviorId);
    }

    childStoreFor(endpoint: Endpoint): ServerPartStore {
        if (!endpoint.lifecycle.hasId) {
            throw new ImplementationError("Cannot access endpoint storage because endpoint has no assigned ID");
        }
        return this.#storeForPartId(endpoint.id);
    }

    #storeForPartId(partId: string) {
        this.#construction.assert();

        let store = this.#childStores[partId];
        if (store === undefined) {
            store = this.#childStores[partId] = new ServerPartStore(this.#childStorage.createContext(partId), false);

            if (!this.#knownParts.has(partId)) {
                this.#knownParts.add(partId);
                this.#childStorage.set(KNOWN_KEY, [...this.#knownParts]);
            }
        }

        return store;
    }

    async saveNumber() {
        await this.#construction;

        this.#storage.set(NUMBER_KEY, this.number);
    }

    async set(values: Record<string, undefined | Val.Struct>) {
        await this.#construction;

        let persistKnown = false;

        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.#storage.createContext(behaviorId);

            if (behaviorValues === undefined) {
                if (this.#knownBehaviors.has(behaviorId)) {
                    behaviorStorage.clearAll();
                    this.#knownBehaviors.delete(behaviorId);
                    persistKnown = true;
                }
                continue;
            }

            if (!this.#knownBehaviors.has(behaviorId)) {
                this.#knownBehaviors.add(behaviorId);
                persistKnown = true;
            }

            for (const key in behaviorValues) {
                const value = behaviorValues[key];
                if (value === undefined) {
                    behaviorStorage.delete(key);
                } else {
                    behaviorStorage.set(key, behaviorValues[key] as SupportedStorageTypes);
                }
            }
        }

        if (persistKnown) {
            this.#storage.set(KNOWN_KEY, [...this.#knownBehaviors]);
        }
    }

    async delete() {
        await this.#construction;

        this.#storage.clearAll();
    }

    async #loadSubparts() {
        this.#knownParts = new Set(this.#childStorage.get(KNOWN_KEY, Array<string>()));

        for (const partId of this.#knownParts) {
            await this.#loadKnownChildStores(partId);
        }
    }

    async #loadKnownChildStores(partId: string) {
        const partStore = new ServerPartStore(this.#childStorage.createContext(partId));
        this.#childStores[partId] = partStore;
        await partStore.construction;
    }
}
