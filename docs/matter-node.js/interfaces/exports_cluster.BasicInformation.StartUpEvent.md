[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BasicInformation](../modules/exports_cluster.BasicInformation.md) / StartUpEvent

# Interface: StartUpEvent

[exports/cluster](../modules/exports_cluster.md).[BasicInformation](../modules/exports_cluster.BasicInformation.md).StartUpEvent

Body of the BasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 11.1.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStartUpEvent`](../modules/exports_cluster.BasicInformation.md#tlvstartupevent)\>

  ↳ **`StartUpEvent`**

## Table of contents

### Properties

- [softwareVersion](exports_cluster.BasicInformation.StartUpEvent.md#softwareversion)

## Properties

### softwareVersion

• **softwareVersion**: `number`

This field shall be set to the same value as the one available in the Software Version attribute of the
Basic Information Cluster.

**`See`**

MatterSpecification.v11.Core § 11.1.6.1.1

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:96
