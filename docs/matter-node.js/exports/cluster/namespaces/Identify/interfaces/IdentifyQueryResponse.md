[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Identify](../README.md) / IdentifyQueryResponse

# Interface: IdentifyQueryResponse

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

## See

MatterSpecification.v11.Cluster § 1.2.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvIdentifyQueryResponse`](../README.md#tlvidentifyqueryresponse)\>

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

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:26
