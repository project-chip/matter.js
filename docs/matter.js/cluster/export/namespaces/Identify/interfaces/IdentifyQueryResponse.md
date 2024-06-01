[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Identify](../README.md) / IdentifyQueryResponse

# Interface: IdentifyQueryResponse

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

## See

MatterSpecification.v11.Cluster § 1.2.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvIdentifyQueryResponse`](../README.md#tlvidentifyqueryresponse)\>

## Properties

### timeout

> **timeout**: `number`

This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
seconds, that the device will continue to identify itself.

#### See

MatterSpecification.v11.Cluster § 1.2.6.4.1

#### Inherited from

`TypeFromSchema.timeout`

#### Source

[packages/matter.js/src/cluster/definitions/IdentifyCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/IdentifyCluster.ts#L40)
