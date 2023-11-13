[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / PowerSourceConfiguration

# Namespace: PowerSourceConfiguration

[cluster/export](cluster_export.md).PowerSourceConfiguration

## Table of contents

### Variables

- [Cluster](cluster_export.PowerSourceConfiguration.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `sources`: [`Attribute`](cluster_export.md#attribute)<[`EndpointNumber`](datatype_export.md#endpointnumber)[], `any`\>  } ; `id`: ``46`` = 0x2e; `name`: ``"PowerSourceConfiguration"`` = "PowerSourceConfiguration"; `revision`: ``1`` = 1 }\>

Power Source Configuration

This cluster is used to describe the configuration and capabilities of a Device’s power system. It provides an
ordering overview as well as linking to the one or more endpoints each supporting a Power Source cluster.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.6

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:24](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L24)
