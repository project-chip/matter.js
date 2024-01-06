import { Val } from "../../../behavior/state/managed/Val.js";
import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { PartStore } from "../../../endpoint/storage/PartStore.js";
import { logger } from "./ServerStore.js";
import { DatasourceStore } from "../../../endpoint/storage/DatasourceStore.js";
import { Datasource } from "../../../behavior/state/managed/Datasource.js";
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
    #isNew: boolean;

    // TODO - see corresponding comment in ServicePartStoreService
    #knownBehaviors = new Set<string>();

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

        this.#number = number;
    }

    get isNew() {
        return this.#isNew;
    }

    constructor(partId: string, storage: StorageContext, isNew: boolean) {
        this.#storage = storage.createContext(partId);
        this.#isNew = isNew;

        this.#construction = AsyncConstruction(
            this,
            () => {
                if (isNew) {
                    return;
                }
                return this.#load(partId);
            }
        )
    }

    async #load(partId: string) {
        this.#knownBehaviors = new Set(this.#storage.get(KNOWN_KEY, Array<string>()));

        for (const behaviorId of this.#knownBehaviors) {
            const behaviorValues = this.#initialValues[behaviorId] = {} as Val.Struct;
            const behaviorStorage = this.#storage.createContext(behaviorId);

            for (const key of behaviorStorage.keys()) {
                behaviorValues[key] = behaviorStorage.get(key);
            }
        }

        const number = this.#storage.get(NUMBER_KEY, -1) as number | undefined;
        if (number !== -1) {
            this.#number = number;
        } else {
            logger.warn(`Part ${partId} has persisted state but no endpoint number, will reassign`);
        }
    }

    storeForBehavior(behaviorId: string): Datasource.Store {
        this.#construction.assert();

        return DatasourceStore(this, behaviorId);
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
            this.#storage.set(KNOWN_KEY, [ ...this.#knownBehaviors ]);
        }
    }

    async delete() {
        await this.#construction;

        this.#storage.clearAll();
    }
}
