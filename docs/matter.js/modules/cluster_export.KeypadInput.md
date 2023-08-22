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

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.KeypadInput.md#base), `SF`\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:261](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L261)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag-1) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`Attributes`](../interfaces/cluster_export.Attributes.md), { `sendKey`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all KeypadInput clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L190)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag-1) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag-1) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag-1) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `sendKey`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.KeypadInput.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `locationKeys`: [`BitFlag`](schema_export.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](schema_export.md#bitflag-1) ; `numberKeys`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:243](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L243)

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `keyCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>

Input to the KeypadInput sendKey command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.1

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:116](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L116)

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>

This command shall be generated in response to a SendKey command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.3.2

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:150](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L150)
