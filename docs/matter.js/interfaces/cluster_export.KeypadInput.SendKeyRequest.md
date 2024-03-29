[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / SendKeyRequest

# Interface: SendKeyRequest

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).SendKeyRequest

Input to the KeypadInput sendKey command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSendKeyRequest`](../modules/cluster_export.KeypadInput.md#tlvsendkeyrequest)\>

  ↳ **`SendKeyRequest`**

## Table of contents

### Properties

- [keyCode](cluster_export.KeypadInput.SendKeyRequest.md#keycode)

## Properties

### keyCode

• **keyCode**: [`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)

This shall indicate the key code to process.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.1.1

#### Inherited from

TypeFromSchema.keyCode

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:120](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L120)
