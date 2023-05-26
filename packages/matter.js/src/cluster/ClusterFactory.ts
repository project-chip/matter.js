import { MatterError } from "../common/MatterError.js";
import { Cluster } from "./Cluster.js";
import { ClusterIdentifier } from "./ClusterIdentifier.js";
import { BitSchema, BitmapSchema } from "../schema/BitmapSchema.js"

// Ensure all clusters are registered before access
import "./cluster.js";

export class ClusterFactory {
    private static clusterVariants = new Map<
        ClusterIdentifier,
        {
            featureSchema: ReturnType<typeof BitmapSchema>,
            clusters: Map<number, Cluster<any, any, any, any, any>>
        }
    >();

    static get(clusterId: ClusterIdentifier, features?: BitSchema) {
        const variants = this.clusterVariants.get(clusterId);

        if (!variants) {
            throw new MatterError(`No definition for cluster 0x${clusterId.toString(16).padStart(4, "0")}`);
        }

        if (features) {
            const cluster = variants.clusters.get(variants.featureSchema.encode(features));
            if (cluster) {
                return cluster;
            }
        }

        return variants.clusters.values().next().value;
    }
}
