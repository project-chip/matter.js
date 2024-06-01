[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [KeypadInput](../README.md) / SendKeyRequest

# Interface: SendKeyRequest

Input to the KeypadInput sendKey command

## See

MatterSpecification.v11.Cluster § 6.8.3.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSendKeyRequest`](../README.md#tlvsendkeyrequest)\>

## Properties

### keyCode

> **keyCode**: [`CecKeyCode`](../enumerations/CecKeyCode.md)

This shall indicate the key code to process.

#### See

MatterSpecification.v11.Cluster § 6.8.3.1.1

#### Inherited from

`TypeFromSchema.keyCode`

#### Source

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L119)
