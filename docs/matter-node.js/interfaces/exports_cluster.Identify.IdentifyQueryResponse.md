[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Identify](../modules/exports_cluster.Identify.md) / IdentifyQueryResponse

# Interface: IdentifyQueryResponse

[exports/cluster](../modules/exports_cluster.md).[Identify](../modules/exports_cluster.Identify.md).IdentifyQueryResponse

This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery Command, in the
case that the device is currently identifying itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvIdentifyQueryResponse`](../modules/exports_cluster.Identify.md#tlvidentifyqueryresponse)\>

  ↳ **`IdentifyQueryResponse`**

## Table of contents

### Properties

- [timeout](exports_cluster.Identify.IdentifyQueryResponse.md#timeout)

## Properties

### timeout

• **timeout**: `number`

This field contains the current value of the IdentifyTime attribute, and specifies the length of time, in
seconds, that the device will continue to identify itself.

**`See`**

MatterSpecification.v11.Cluster § 1.2.6.4.1

#### Inherited from

TypeFromSchema.timeout

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/IdentifyCluster.d.ts:26
