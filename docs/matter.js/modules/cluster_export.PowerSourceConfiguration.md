[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PowerSourceConfiguration

# Namespace: PowerSourceConfiguration

[cluster/export](cluster_export.md).PowerSourceConfiguration

## Table of contents

### Variables

- [Cluster](cluster_export.PowerSourceConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `sources`: [`Attribute`](cluster_export.md#attribute)<[`EndpointNumber`](datatype_export.md#endpointnumber)[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Power Source Configuration

This cluster is used to describe the configuration and capabilities of a Device’s power system. It provides an
ordering overview as well as linking to the one or more endpoints each supporting a Power Source cluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.6

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L23)
