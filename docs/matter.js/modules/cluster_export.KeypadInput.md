[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / KeypadInput

# Namespace: KeypadInput

[cluster/export](cluster_export.md).KeypadInput

## Table of contents

### Enumerations

- [CecKeyCode](../enums/cluster_export.KeypadInput.CecKeyCode.md)
- [Feature](../enums/cluster_export.KeypadInput.Feature.md)
- [Status](../enums/cluster_export.KeypadInput.Status.md)

### Type Aliases

- [Extension](cluster_export.KeypadInput.md#extension)

### Variables

- [Base](cluster_export.KeypadInput.md#base)
- [Cluster](cluster_export.KeypadInput.md#cluster)
- [TlvSendKeyRequest](cluster_export.KeypadInput.md#tlvsendkeyrequest)
- [TlvSendKeyResponse](cluster_export.KeypadInput.md#tlvsendkeyresponse)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.KeypadInput.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:259](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L259)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all KeypadInput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:185](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L185)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<{}, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `sendKey`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `events`: {} ; `features`: \{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``1289`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"KeypadInput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `features`: \{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.KeypadInput.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:238](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L238)

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>

Input to the KeypadInput sendKey command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.1

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:111](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L111)

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>

This command shall be generated in response to a SendKey command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:145](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L145)
