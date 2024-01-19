/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterType } from "../../cluster/ClusterType.js";
import { ClusterComposer } from "../../cluster/mutation/ClusterComposer.js";
import { ElementModifier } from "../../cluster/mutation/ElementModifier.js";
import { ImplementationError } from "../../common/MatterError.js";
import type { Agent } from "../../endpoint/Agent.js";
import { MaybePromise } from "../../util/Promises.js";
import { Behavior } from "../Behavior.js";
import type { BehaviorBacking } from "../BehaviorBacking.js";
import type { RootSupervisor } from "../supervision/RootSupervisor.js";
import { Schema } from "../supervision/Schema.js";
import { createType, type ClusterOf } from "./ClusterBehaviorUtil.js";
import type { ClusterEvents } from "./ClusterEvents.js";
import { ClusterInterface } from "./ClusterInterface.js";
import type { ClusterState } from "./ClusterState.js";

/**
 * A {@link Behavior} with specialization for a specific cluster.
 *
 * To implement cluster functionality you should use a subclass provided by {@link ClusterBehavior.for} with the
 * {@link ClusterType} you are implementing.  Most commonly you would use one of the predefined implementations
 * matter.js includes.
 *
 * Subclasses can be modified using the static builder methods or extended like a normal class.
 *
 * Behaviors should store all mutable state in their {@link Behavior.state} property.  Other fields will be transient
 * and may not be retained across invocations.
 *
 * TODO - currently ClusterBehaviors may be instantiated with unsupported mandatory commands and attributes.  Currently
 * this is a runtime error but not a build-time error.  Should we generate abstract methods etc. for this, make the
 * edits by hand as we implement "standard" behaviors, or just leave as a runtime error?
 */
export class ClusterBehavior extends Behavior {
    #cluster: ClusterType;

    /**
     * The ID of ClusterBehavior implementations is the uncapitalized cluster name.
     */
    static override id: Uncapitalize<string>;

    /**
     * TODO - this disables lazy loading of behaviors.  This is desirable for small-scale nodes but for large nodes lazy
     * init may be useful.  However this requires refactor of InteractionEndpointStructure which eagerly caches the
     * entire node structure.  Refactoring there is desirable anyway so maintenance of that cache is less expensive;
     * revisit this when that refactoring is complete.
     */
    static override readonly immediate = true;

    /**
     * Cluster data must be versioned.
     */
    static override readonly versioning = true;

    /**
     * The cluster implemented by this behavior.
     */
    get cluster() {
        return this.#cluster;
    }

    /**
     * Supported features as a flag object.
     */
    get features() {
        return this.cluster.supportedFeatures;
    }

    /**
     * Every cluster behavior has an associated ClusterType defined statically.
     */
    static readonly cluster = ClusterType.Unknown;

    /**
     * Method definitions.
     */
    static readonly Interface = ClusterInterface.Empty;

    constructor(agent: Agent, backing: BehaviorBacking) {
        super(agent, backing);

        const cluster = (this.constructor as typeof ClusterBehavior).cluster;
        if (!cluster) {
            throw new ImplementationError("ClusterBehavior class has no cluster defined");
        }
        this.#cluster = cluster;
    }

    /**
     * Create a new behavior for a specific {@link ClusterType}.
     *
     * If you invoke directly on {@link ClusterBehavior} you will receive a new implementation that reports all commands
     * as unimplemented.
     *
     * If you invoke on an existing subclass, you will receive a new implementation with the cluster in the subclass
     * replaced.  You should generally only do this with a {@link ClusterType} with the same ID.
     */
    static for<This extends ClusterBehavior.Type, const ClusterT extends ClusterType>(
        this: This,
        cluster: ClusterT,
        schema?: Schema,
    ) {
        return createType(cluster, this, schema) as ClusterBehavior.Type<ClusterT, This>;
    }

    /**
     * Create a new behavior with different cluster features.
     */
    static with<
        This extends ClusterBehavior.Type,
        const FeaturesT extends ClusterComposer.FeatureSelection<This["cluster"]>,
    >(this: This, ...features: FeaturesT) {
        const newCluster = new ClusterComposer(this.cluster).compose(features) as ClusterComposer.WithFeatures<This["cluster"], FeaturesT>;
        return this.for(newCluster);
    }

    /**
     * Create a new behavior with modified cluster elements.
     */
    static alter<
        This extends ClusterBehavior.Type,
        const AlterationsT extends ElementModifier.Alterations<This["cluster"]>,
    >(this: This, alterations: AlterationsT) {
        return this.for(new ElementModifier(this.cluster).alter(alterations));
    }

    /**
     * Create a new behavior with additional cluster features marked "mandatory".
     *
     * This informs matter.js that an application supports these elements.
     */
    static enable<
        This extends ClusterBehavior.Type,
        const FlagsT extends ElementModifier.ElementFlags<This["cluster"]>,
    >(this: This, flags: FlagsT) {
        return this.for(new ElementModifier(this.cluster).enable(flags));
    }

    /**
     * Create a ClusterBehavior like this one with different interface methods.
     *
     * The Interface "property" is type-only.  We define a method however to keep the API consistent.  At runtime the
     * method is a no-op.
     */
    static withInterface<const I extends ClusterInterface>() {
        return this as unknown as ClusterBehavior.Type<typeof ClusterType.Unknown, typeof ClusterBehavior, I>;
    }

    static override supports(other: Behavior.Type) {
        if (!Behavior.supports.call(this, other)) {
            return false;
        }

        const otherCluster = (other as { cluster?: ClusterType }).cluster;
        if (!otherCluster) {
            return false;
        }

        const otherFeatures = otherCluster.supportedFeatures;
        const myFeatures = this.cluster.supportedFeatures;
        for (const name in otherFeatures) {
            if (otherFeatures[name] && !(myFeatures as Record<string, boolean>)[name]) {
                return false;
            }
        }

        return true;
    }
}

export namespace ClusterBehavior {
    /**
     * A ClusterBehavior specialized for a specific Cluster.
     */
    export interface Type<
        C extends ClusterType = ClusterType,
        B extends Behavior.Type = Behavior.Type,
        I extends ClusterInterface = ClusterInterface.InterfaceOf<B>,
    > {
        new (agent: Agent, backing: BehaviorBacking): Instance<C, B, I>;

        readonly name: string;

        /**
         * The behavior ID for ClusterBehaviors is the name of the cluster.
         */
        readonly id: Uncapitalize<C["name"]>;

        /**
         * Base cluster state include all attribute values but may be extended by subclasses.
         */
        readonly cluster: C;

        readonly Events: ClusterEvents.Type<C, B>;
        readonly State: new () => ClusterState.Type<C, B>;
        readonly InternalState: B["InternalState"];
        readonly Interface: I;

        readonly schema?: Schema;
        readonly immediate: boolean;
        readonly versioning: boolean;
        readonly defaults: ClusterState.Type<C, B>;
        readonly supervisor: RootSupervisor;
        supports: typeof ClusterBehavior.supports;

        // Prior to TS 5.4 could do this.  Sadly typing no longer carries through on these...  This["cluster"] reverts
        // to ClusterType).  So we have to define the long way.
        //
        // This also means intellisense doesn't work unless we copy comments here (or move here and cast ClusterBehavior
        // to ClusterBehavior.Type).
        //
        // - for: typeof ClusterBehavior.for;
        // - with: typeof ClusterBehavior.with;
        // - alter: typeof ClusterBehavior.alter;
        // - set: typeof ClusterBehavior.set;
        // - enable: typeof ClusterBehavior.enable;

        for<
            This extends ClusterBehavior.Type,
            const ClusterT extends ClusterType
        >(this: This, cluster: ClusterT, schema?: Schema):
            ClusterBehavior.Type<ClusterT, This>;

        with<
            This extends ClusterBehavior.Type,
            const FeaturesT extends ClusterComposer.FeatureSelection<This["cluster"]>,
        >(this: This, ...features: FeaturesT):
            ClusterBehavior.Type<ClusterComposer.WithFeatures<This["cluster"], FeaturesT>, This>;

        alter<
            This extends ClusterBehavior.Type,
            const AlterationsT extends ElementModifier.Alterations<This["cluster"]>,
        >(this: This, alterations: AlterationsT):
            ClusterBehavior.Type<ElementModifier.WithAlterations<This["cluster"], AlterationsT>, This>;
        
        set<This extends Behavior.Type>(this: This, defaults: Behavior.InputStateOf<This>):
            This;

        enable<
            This extends ClusterBehavior.Type,
            const FlagsT extends ElementModifier.ElementFlags<This["cluster"]>,
        >(this: This, flags: FlagsT):
            ClusterBehavior.Type<ElementModifier.WithAlterations<This["cluster"], ElementModifier.ElementFlagAlterations<FlagsT>>, This>;
    }

    /**
     * A fully-typed ClusterBehavior.  This type is derived by combining properties of the base type with properties
     * contributed by the cluster.
     */
    export type Instance<C extends ClusterType, B extends Behavior.Type, I extends ClusterInterface> =
        // Base class
        & ClusterBehavior

        // Bring extensions of old class forward
        & Omit<
            InstanceType<B>,
            | "cluster"
            | "state"
            | "events"
            | "initialize"

            // Typescript 5.3 gets confused and thinks this is an instance property if we don't omit and then add (as
            // we do below)
            | typeof Symbol.asyncDispose

            // Omit command methods of old cluster
            | keyof ClusterInterface.MethodsOf<ClusterInterface.InterfaceOf<B>, ClusterOf<B>>
        >

        // Add command methods
        & ClusterInterface.MethodsOf<I, C>
        
        // Cluster-specific members
        & {
            /**
             * The implemented cluster.
             */
            cluster: C;

            /**
             * State values for the behavior.
             */
            state: ClusterState<C, B>;

            /**
             * Observables for cluster events and attribute changes.
             */
            events: ClusterEvents<C, B>;

            /**
             * Supported features as a flag object.
             */
            features: C["supportedFeatures"],

            [Symbol.asyncDispose](): MaybePromise<void>;
        };
}
