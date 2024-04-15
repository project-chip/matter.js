[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / KeypadInput

# Namespace: KeypadInput

[cluster/export](cluster_export.md).KeypadInput

## Table of contents

### Enumerations

- [CecKeyCode](../enums/cluster_export.KeypadInput.CecKeyCode.md)
- [Feature](../enums/cluster_export.KeypadInput.Feature.md)
- [Status](../enums/cluster_export.KeypadInput.Status.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.KeypadInput.Cluster.md)
- [SendKeyRequest](../interfaces/cluster_export.KeypadInput.SendKeyRequest.md)
- [SendKeyResponse](../interfaces/cluster_export.KeypadInput.SendKeyResponse.md)

### Variables

- [Base](cluster_export.KeypadInput.md#base)
- [Cluster](cluster_export.KeypadInput.md#cluster)
- [ClusterInstance](cluster_export.KeypadInput.md#clusterinstance)
- [Complete](cluster_export.KeypadInput.md#complete)
- [TlvSendKeyRequest](cluster_export.KeypadInput.md#tlvsendkeyrequest)
- [TlvSendKeyResponse](cluster_export.KeypadInput.md#tlvsendkeyresponse)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all KeypadInput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | \{ `sendKey`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } | - |
| `commands.sendKey` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\> | Upon receipt, this shall process a keycode as input to the media device. If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the endpoint will consider the last key press to be a release. **`See`** MatterSpecification.v11.Cluster § 6.8.3.1 |
| `extensions` | readonly [] | This metadata controls which KeypadInputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.locationKeys` | [`BitFlag`](schema_export.md#bitflag) | LocationKeys Supports CEC keys 0x0A (Settings) and 0x09 (Home) |
| `features.navigationKeyCodes` | [`BitFlag`](schema_export.md#bitflag) | NavigationKeyCodes Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU |
| `features.numberKeys` | [`BitFlag`](schema_export.md#bitflag) | NumberKeys Supports numeric input 0..9 |
| `id` | ``1289`` | - |
| `name` | ``"KeypadInput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L201)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:265](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L265)

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:267](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L267)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.KeypadInput.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:252](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L252)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.KeypadInput.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:268](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L268)

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>

Input to the KeypadInput sendKey command

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L113)

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>

This command shall be generated in response to a SendKey command.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L154)
