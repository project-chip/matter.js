[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [KeypadInput](../README.md) / SendKeyResponse

# Interface: SendKeyResponse

This command shall be generated in response to a SendKey command.

## See

MatterSpecification.v11.Cluster § 6.8.3.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSendKeyResponse`](../README.md#tlvsendkeyresponse)\>

## Properties

### status

> **status**: [`Status`](../enumerations/Status.md)

This shall indicate the of the command.

#### See

MatterSpecification.v11.Cluster § 6.8.3.2.1

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L160)
