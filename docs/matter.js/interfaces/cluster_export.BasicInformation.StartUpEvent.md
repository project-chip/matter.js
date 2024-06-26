[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [BasicInformation](../modules/cluster_export.BasicInformation.md) / StartUpEvent

# Interface: StartUpEvent

[cluster/export](../modules/cluster_export.md).[BasicInformation](../modules/cluster_export.BasicInformation.md).StartUpEvent

Body of the BasicInformation startUp event

**`See`**

MatterSpecification.v11.Core § 11.1.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStartUpEvent`](../modules/cluster_export.BasicInformation.md#tlvstartupevent)\>

  ↳ **`StartUpEvent`**

## Table of contents

### Properties

- [softwareVersion](cluster_export.BasicInformation.StartUpEvent.md#softwareversion)

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

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:122](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L122)
