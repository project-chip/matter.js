[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BasicInformation](../modules/exports_cluster.BasicInformation.md) / CapabilityMinimaStruct

# Interface: CapabilityMinimaStruct

[exports/cluster](../modules/exports_cluster.md).[BasicInformation](../modules/exports_cluster.BasicInformation.md).CapabilityMinimaStruct

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

MatterSpecification.v11.Core § 11.1.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCapabilityMinimaStruct`](../modules/exports_cluster.BasicInformation.md#tlvcapabilityminimastruct)\>

  ↳ **`CapabilityMinimaStruct`**

## Table of contents

### Properties

- [caseSessionsPerFabric](exports_cluster.BasicInformation.CapabilityMinimaStruct.md#casesessionsperfabric)
- [subscriptionsPerFabric](exports_cluster.BasicInformation.CapabilityMinimaStruct.md#subscriptionsperfabric)

## Properties

### caseSessionsPerFabric

• **caseSessionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

**`See`**

MatterSpecification.v11.Core § 11.1.4.1.1

#### Inherited from

TypeFromSchema.caseSessionsPerFabric

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:28

___

### subscriptionsPerFabric

• **subscriptionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

**`See`**

MatterSpecification.v11.Core § 11.1.4.1.2

#### Inherited from

TypeFromSchema.subscriptionsPerFabric

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:37
