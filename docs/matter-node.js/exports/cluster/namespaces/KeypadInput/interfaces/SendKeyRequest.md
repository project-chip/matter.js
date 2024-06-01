[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [KeypadInput](../README.md) / SendKeyRequest

# Interface: SendKeyRequest

Input to the KeypadInput sendKey command

## See

MatterSpecification.v11.Cluster § 6.8.3.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSendKeyRequest`](../README.md#tlvsendkeyrequest)\>

## Properties

### keyCode

> **keyCode**: [`CecKeyCode`](../enumerations/CecKeyCode.md)

This shall indicate the key code to process.

#### See

MatterSpecification.v11.Cluster § 6.8.3.1.1

#### Inherited from

`TypeFromSchema.keyCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:112
