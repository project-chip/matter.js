import { Datasource } from "../../../behavior/state/managed/Datasource.js";
import { Val } from "../../../behavior/state/managed/Val.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { Part } from "../../../endpoint/Part.js";
import { DatasourceStore } from "../../../endpoint/storage/DatasourceStore.js";
import { PartStore } from "../../../endpoint/storage/PartStore.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { AsyncConstruction } from "../../../util/AsyncConstruction.js";
import { logger } from "./ServerStore.js";

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
    #isNew: boolean;

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

    get isNew() {
        return this.#isNew;
    }

    constructor(partId: string, storage: StorageContext, isNew: boolean) {
        this.#storage = storage;
        this.#childStorage = storage.createContext("parts");
        this.#isNew = isNew;

        this.#construction = AsyncConstruction(this, () => {
            if (isNew) {
                return;
            }
            return this.#load(partId);
        });
    }

    async #load(partId: string) {
        this.#knownBehaviors = new Set(await this.#storage.get(KNOWN_KEY, Array<string>()));

        for (const behaviorId of this.#knownBehaviors) {
            const behaviorValues = (this.#initialValues[behaviorId] = {} as Val.Struct);
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key of await behaviorStorage.keys()) {
                behaviorValues[key] = await behaviorStorage.get(key);
            }
        }

        const number = (await this.#storage.get(NUMBER_KEY, -1)) as number | undefined;
        if (number !== -1) {
            this.#number = number;
        } else {
            logger.warn(`Part ${partId} has persisted state but no endpoint number, will reassign`);
        }

        await this.#loadSubparts();
    }

    storeForBehavior(behaviorId: string): Datasource.Store {
        this.#construction.assert();

        return DatasourceStore(this, behaviorId);
    }

    childStoreFor(part: Part): ServerPartStore {
        if (!part.lifecycle.hasId) {
            throw new ImplementationError("Cannot access part storage because part has no assigned ID");
        }
        return this.#storeForPartId(part.id);
    }

    #storeForPartId(partId: string) {
        this.#construction.assert();

        let store = this.#childStores[partId];
        if (store === undefined) {
            store = this.#childStores[partId] = new ServerPartStore(
                partId,
                this.#childStorage.createContext(partId),
                true,
            );

            if (!this.#knownParts.has(partId)) {
                this.#knownParts.add(partId);
                this.#childStorage.set(KNOWN_KEY, [...this.#knownParts]);
            }
        }

        return store;
    }

    async saveNumber() {
        await this.#construction;

        await this.#storage.set(NUMBER_KEY, this.number);
    }

    async set(values: Record<string, undefined | Val.Struct>) {
        await this.#construction;

        let persistKnown = false;

        for (const behaviorId in values) {
            const behaviorValues = values[behaviorId];
            const behaviorStorage = this.#storage.createContext(behaviorId);

            if (behaviorValues === undefined) {
                if (this.#knownBehaviors.has(behaviorId)) {
                    await behaviorStorage.clearAll();
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
                    await behaviorStorage.delete(key);
                } else {
                    await behaviorStorage.set(key, behaviorValues[key] as SupportedStorageTypes);
                }
            }
        }

        if (persistKnown) {
            await this.#storage.set(KNOWN_KEY, [...this.#knownBehaviors]);
        }
    }

    async delete() {
        await this.#construction;

        await this.#storage.clearAll();
    }

    async #loadSubparts() {
        this.#knownParts = new Set(await this.#childStorage.get(KNOWN_KEY, Array<string>()));

        for (const partId of this.#knownParts) {
            await this.#loadKnownChildStores(partId);
        }
    }

    async #loadKnownChildStores(partId: string) {
        const partStore = new ServerPartStore(partId, this.#childStorage.createContext(partId), false);
        this.#childStores[partId] = partStore;
        await partStore.construction;
    }
}
