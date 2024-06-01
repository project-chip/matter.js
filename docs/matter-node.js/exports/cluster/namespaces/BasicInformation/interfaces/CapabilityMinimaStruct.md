[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [BasicInformation](../README.md) / CapabilityMinimaStruct

# Interface: CapabilityMinimaStruct

This structure provides constant values related to overall global capabilities of this Node, that are not
cluster-specific.

## See

MatterSpecification.v11.Core § 11.1.4.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCapabilityMinimaStruct`](../README.md#tlvcapabilityminimastruct)\>

## Properties

### caseSessionsPerFabric

> **caseSessionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent CASE sessions that are supported per
fabric.

This value shall NOT be smaller than the required minimum indicated in Section 4.13.2.8, “Minimal Number of
CASE Sessions”.

#### See

MatterSpecification.v11.Core § 11.1.4.1.1

#### Inherited from

`TypeFromSchema.caseSessionsPerFabric`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:28

***

### subscriptionsPerFabric

> **subscriptionsPerFabric**: `number`

This field shall indicate the actual minimum number of concurrent subscriptions supported per fabric.

This value shall NOT be smaller than the required minimum indicated in Section 8.5.1, “Subscribe
Transaction”.

#### See

MatterSpecification.v11.Core § 11.1.4.1.2

#### Inherited from

`TypeFromSchema.subscriptionsPerFabric`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:37
