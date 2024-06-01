[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [BasicInformation](../README.md) / StartUpEvent

# Interface: StartUpEvent

Body of the BasicInformation startUp event

## See

MatterSpecification.v11.Core § 11.1.6.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvStartUpEvent`](../README.md#tlvstartupevent)\>

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

packages/matter.js/dist/esm/cluster/definitions/BasicInformationCluster.d.ts:96
