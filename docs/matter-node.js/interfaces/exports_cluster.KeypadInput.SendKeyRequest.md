[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [KeypadInput](../modules/exports_cluster.KeypadInput.md) / SendKeyRequest

# Interface: SendKeyRequest

[exports/cluster](../modules/exports_cluster.md).[KeypadInput](../modules/exports_cluster.KeypadInput.md).SendKeyRequest

Input to the KeypadInput sendKey command

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSendKeyRequest`](../modules/exports_cluster.KeypadInput.md#tlvsendkeyrequest)\>

  ↳ **`SendKeyRequest`**

## Table of contents

### Properties

- [keyCode](exports_cluster.KeypadInput.SendKeyRequest.md#keycode)

## Properties

### keyCode

• **keyCode**: [`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)

This shall indicate the key code to process.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1.1

#### Inherited from

TypeFromSchema.keyCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:112
