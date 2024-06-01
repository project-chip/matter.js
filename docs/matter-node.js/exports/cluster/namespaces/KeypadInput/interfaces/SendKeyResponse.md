[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [KeypadInput](../README.md) / SendKeyResponse

# Interface: SendKeyResponse

This command shall be generated in response to a SendKey command.

## See

MatterSpecification.v11.Cluster § 6.8.3.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSendKeyResponse`](../README.md#tlvsendkeyresponse)\>

## Properties

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the of the command.

#### See

MatterSpecification.v11.Cluster § 6.8.3.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:149
