import { Cluster } from "../Cluster.js";
import { Device } from "../../device/Device.js";

type Constructor = new (...args: any[]) => Device;

function ClusterIfaceImpl<Interface>() {
    const MixedConstructor = function <BaseT extends Constructor>(Base: BaseT): BaseT & Interface {
        // This type guard informs TypeScript that we implement the cluster interface
        function addInterface(instance: BaseT): instance is BaseT & Interface {
            return true;
        }

        // Initially Typescript just thinks we have an instance of the base class
        const instance = class ClientImpl extends Base { }

        // This call is a no-op that convinces TypeScript that instance also implements Interface
        if (addInterface(instance))
            // TS now knows that instance is a BaseT that implements Interface
            return instance;

        // Typescript is not smart enough to realize addInterface is always true
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
