[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BasicInformation](../modules/cluster_export.BasicInformation.md) / CapabilityMinimaStruct

# Interface: CapabilityMinimaStruct

[cluster/export](../modules/cluster_export.md).[BasicInformation](../modules/cluster_export.BasicInformation.md).CapabilityMinimaStruct

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.1.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCapabilityMinimaStruct`](../modules/cluster_export.BasicInformation.md#tlvcapabilityminimastruct)\>

  ↳ **`CapabilityMinimaStruct`**

## Table of contents

### Properties

- [caseSessionsPerFabric](cluster_export.BasicInformation.CapabilityMinimaStruct.md#casesessionsperfabric)
- [subscriptionsPerFabric](cluster_export.BasicInformation.CapabilityMinimaStruct.md#subscriptionsperfabric)

## Properties

### caseSessionsPerFabric

• **caseSessionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.1.4.1.1

#### Inherited from

TypeFromSchema.caseSessionsPerFabric

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:51](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L51)

___

### subscriptionsPerFabric

• **subscriptionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.1.4.1.2

#### Inherited from

TypeFromSchema.subscriptionsPerFabric

#### Defined in

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:61](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L61)
