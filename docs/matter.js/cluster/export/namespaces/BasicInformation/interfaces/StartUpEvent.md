[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [BasicInformation](../README.md) / StartUpEvent

# Interface: StartUpEvent

Body of the BasicInformation startUp event

## See

MatterSpecification.v11.Core § 11.1.6.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvStartUpEvent`](../README.md#tlvstartupevent)\>

## Properties

### softwareVersion

> **softwareVersion**: `number`

This field shall be set to the same value as the one available in the Software Version attribute of the
Basic Information Cluster.

#### See

MatterSpecification.v11.Core § 11.1.6.1.1

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BasicInformationCluster.ts#L122)
