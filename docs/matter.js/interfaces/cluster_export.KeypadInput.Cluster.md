[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).Cluster

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 6.8

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.KeypadInput.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.KeypadInput.Cluster.md#attributes)
- [base](cluster_export.KeypadInput.Cluster.md#base)
- [commands](cluster_export.KeypadInput.Cluster.md#commands)
- [events](cluster_export.KeypadInput.Cluster.md#events)
- [extensions](cluster_export.KeypadInput.Cluster.md#extensions)
- [features](cluster_export.KeypadInput.Cluster.md#features)
- [id](cluster_export.KeypadInput.Cluster.md#id)
- [name](cluster_export.KeypadInput.Cluster.md#name)
- [revision](cluster_export.KeypadInput.Cluster.md#revision)
- [supportedFeatures](cluster_export.KeypadInput.Cluster.md#supportedfeatures)
- [unknown](cluster_export.KeypadInput.Cluster.md#unknown)

### Methods

- [alter](cluster_export.KeypadInput.Cluster.md#alter)
- [enable](cluster_export.KeypadInput.Cluster.md#enable)
- [set](cluster_export.KeypadInput.Cluster.md#set)
- [with](cluster_export.KeypadInput.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sendKey` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\> | Upon receipt, this shall process a keycode as input to the media device. If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the endpoint will consider the last key press to be a release. **`See`** MatterSpecification.v11.Cluster § 6.8.3.1 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly []

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `locationKeys` | [`BitFlag`](../modules/schema_export.md#bitflag) | LocationKeys Supports CEC keys 0x0A (Settings) and 0x09 (Home) |
| `navigationKeyCodes` | [`BitFlag`](../modules/schema_export.md#bitflag) | NavigationKeyCodes Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU |
| `numberKeys` | [`BitFlag`](../modules/schema_export.md#bitflag) | NumberKeys Supports numeric input 0..9 |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1289``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"KeypadInput"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `keyCode`: [`FieldType`](tlv_export.FieldType.md)\<[`CecKeyCode`](../enums/cluster_export.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1289`` = 0x509; `name`: ``"KeypadInput"`` = "KeypadInput"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
