[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [KeypadInput](../modules/exports_cluster.KeypadInput.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[KeypadInput](../modules/exports_cluster.KeypadInput.md).Cluster

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

MatterSpecification.v11.Cluster § 6.8

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.KeypadInput.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.KeypadInput.Cluster.md#attributes)
- [base](exports_cluster.KeypadInput.Cluster.md#base)
- [commands](exports_cluster.KeypadInput.Cluster.md#commands)
- [events](exports_cluster.KeypadInput.Cluster.md#events)
- [extensions](exports_cluster.KeypadInput.Cluster.md#extensions)
- [features](exports_cluster.KeypadInput.Cluster.md#features)
- [id](exports_cluster.KeypadInput.Cluster.md#id)
- [name](exports_cluster.KeypadInput.Cluster.md#name)
- [revision](exports_cluster.KeypadInput.Cluster.md#revision)
- [supportedFeatures](exports_cluster.KeypadInput.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.KeypadInput.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.KeypadInput.Cluster.md#alter)
- [enable](exports_cluster.KeypadInput.Cluster.md#enable)
- [set](exports_cluster.KeypadInput.Cluster.md#set)
- [with](exports_cluster.KeypadInput.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sendKey` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\> | Upon receipt, this shall process a keycode as input to the media device. If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the endpoint will consider the last key press to be a release. **`See`** MatterSpecification.v11.Cluster § 6.8.3.1 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly []

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `locationKeys` | [`BitFlag`](../modules/exports_schema.md#bitflag) | LocationKeys Supports CEC keys 0x0A (Settings) and 0x09 (Home) |
| `navigationKeyCodes` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NavigationKeyCodes Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU |
| `numberKeys` | [`BitFlag`](../modules/exports_schema.md#bitflag) | NumberKeys Supports numeric input 0..9 |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1289``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"KeypadInput"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `sendKey`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `keyCode`: [`FieldType`](exports_tlv.FieldType.md)\<[`CecKeyCode`](../enums/exports_cluster.KeypadInput.CecKeyCode.md)\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.KeypadInput.Status.md)\>  }\>, `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
