import { Cluster } from "../Cluster.js";

// Note - these mixins are generic but implementation would target a specific
// class such as Device.  Part of this exercise is for me to understand if
// targeting Device would be appropriate and/or desireable.
//
// Usage as implemented for Device implementers would look like:
//
//     class OnOffBaseDevice extends IdentifyImpl(
//                                   GroupsImpl(
//                                   ScenesImpl(
//                                   OnOffImpl(\
//                                   Device)))) {
//     }
//
// Mixins in TS are a bit ugly but this approach leads to a fairly ideallic outcome:
//
//     - OnOffBaseDevice is a proper TS class that supports all cluster functionality
//     - The cluster interface fully types attribute, command and event arguments
//     - ClientCluster/ServerCluster gets added automatically for each cluster
//     - OnOffBaseDevice may contain hand-coded convenience functions
//
// Note also - I originally thought that Proxy or Object.defineProperty would be
// necessary to do this but that turned out to be silly.  We can just install
// the appropriate implementation onto TargetDevice.prototype.  The result is
// a "real" class in both the JS and TS sense

type Constructor = new (...args: any[]) => {};

function ClusterIfaceImpl<Interface>() {
    // This type guard informs TypeScript that we implement the cluster interface
    function addInterface(instance: Constructor): instance is Constructor & Interface {
        return true;
    }

    const MixedConstructor = function <BaseT extends new (...args: any[]) => Constructor>(Base: BaseT): Constructor & Interface {
        // Initially Typescript just thinks we have an instance of the base class
        const instance = class ClientImpl extends Base {}

        // This call is a no-op that convinces TypeScript that instance also implements Interface
        if (addInterface(instance))
            // TS now knows that instance is a BaseT that implements Interface
            return instance;

        // Typescript is not smart enough to realize that addInterface is always true
        throw new Error("Never happens");
    }

    return MixedConstructor;
}

/**
 * Create a new class that extends another class with an automatic
 * client implementation of a cluster interface.
 */
export function ClientIfaceImpl<Interface>(clusterDef: Cluster<any, any, any, any, any>) {
    const Mixed = ClusterIfaceImpl<Interface>();

    // TODO - install client implementation of Interface dynamically onto
    // Mixed.prototype by introspecting clusterDef similarly (well, exactly)
    // to how it's done in generate.sh

    // Note that if this is targeting Device then the implementation should
    // include adding the appropriate ClusterClient to the Device

    clusterDef;

    return Mixed;
}

/**
 * Create a new class that extends another class with an automatic
 * server implementation of a cluster interface.
 */
export function ServerIfaceImpl<Interface>(clusterDef: Cluster<any, any, any, any, any>) {
    const Mixed = ClusterIfaceImpl<Interface>();

    // TODO - install server implementation
    clusterDef;

    return Mixed;
}
