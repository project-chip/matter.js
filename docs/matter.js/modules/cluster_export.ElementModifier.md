[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ElementModifier

# Namespace: ElementModifier

[cluster/export](cluster_export.md).ElementModifier

## Table of contents

### Interfaces

- [AttributeAlteration](../interfaces/cluster_export.ElementModifier.AttributeAlteration.md)
- [ElementAlteration](../interfaces/cluster_export.ElementModifier.ElementAlteration.md)

### Type Aliases

- [Alterations](cluster_export.ElementModifier.md#alterations)
- [AlteredElements](cluster_export.ElementModifier.md#alteredelements)
- [AttributeValueAlterations](cluster_export.ElementModifier.md#attributevaluealterations)
- [ElementFlagAlterations](cluster_export.ElementModifier.md#elementflagalterations)
- [ElementFlags](cluster_export.ElementModifier.md#elementflags)
- [ElementSetAlterations](cluster_export.ElementModifier.md#elementsetalterations)
- [ElementSetFlagAlterations](cluster_export.ElementModifier.md#elementsetflagalterations)
- [ElementSetFlags](cluster_export.ElementModifier.md#elementsetflags)
- [Extender](cluster_export.ElementModifier.md#extender)
- [WithAlterations](cluster_export.ElementModifier.md#withalterations)
- [WithFlags](cluster_export.ElementModifier.md#withflags)
- [WithValues](cluster_export.ElementModifier.md#withvalues)

## Type Aliases

### Alterations

Ƭ **Alterations**\<`OriginalT`\>: `Object`

A set of modifications to a cluster's elements.

Note - cannot specify ElementsT as extending ClusterElements because it
triggers a bug in TS 5.2 declaration generation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OriginalT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | [`ElementSetAlterations`](cluster_export.ElementModifier.md#elementsetalterations)\<[`AttributeAlteration`](../interfaces/cluster_export.ElementModifier.AttributeAlteration.md), `OriginalT`[``"attributes"``]\> |
| `commands?` | [`ElementSetAlterations`](cluster_export.ElementModifier.md#elementsetalterations)\<[`ElementAlteration`](../interfaces/cluster_export.ElementModifier.ElementAlteration.md), `OriginalT`[``"commands"``]\> |
| `events?` | [`ElementSetAlterations`](cluster_export.ElementModifier.md#elementsetalterations)\<[`ElementAlteration`](../interfaces/cluster_export.ElementModifier.ElementAlteration.md), `OriginalT`[``"events"``]\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L79)

___

### AlteredElements

Ƭ **AlteredElements**\<`OriginalT`, `ElementT`, `AlterationT`\>: \{ [name in keyof OriginalT]: OriginalT[name] extends infer OrigT extends ElementT ? AlterationT extends \{ [n in name]: Object } ? Omit\<OrigT, "optional"\> & Object : OrigT : never }

Alterations applied to a specific element set, element or element field.

#### Type parameters

| Name |
| :------ |
| `OriginalT` |
| `ElementT` |
| `AlterationT` |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L88)

___

### AttributeValueAlterations

Ƭ **AttributeValueAlterations**\<`ValuesT`\>: `Object`

Alterations implied by AttributeValues.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Partial`\<[`InputAttributeValues`](cluster_export.ClusterType.md#inputattributevalues)\<`any`\>\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ [K in keyof ValuesT]: Object } |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L127)

___

### ElementFlagAlterations

Ƭ **ElementFlagAlterations**\<`T`\>: \{ [K in keyof T]: T[K] extends ElementSetFlags\<any\> ? ElementSetFlagAlterations\<T[K]\> : never }

Alterations implied by ElementFlags.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementFlags`](cluster_export.ElementModifier.md#elementflags)\<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L153)

___

### ElementFlags

Ƭ **ElementFlags**\<`ClusterT`\>: `Object`

Flags indicating elements to enable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | [`ElementSetFlags`](cluster_export.ElementModifier.md#elementsetflags)\<[`AttributesOf`](cluster_export.ClusterType.md#attributesof)\<`ClusterT`\>\> |
| `commands?` | [`ElementSetFlags`](cluster_export.ElementModifier.md#elementsetflags)\<[`CommandsOf`](cluster_export.ClusterType.md#commandsof)\<`ClusterT`\>\> |
| `events?` | [`ElementSetFlags`](cluster_export.ElementModifier.md#elementsetflags)\<[`EventsOf`](cluster_export.ClusterType.md#eventsof)\<`ClusterT`\>\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L140)

___

### ElementSetAlterations

Ƭ **ElementSetAlterations**\<`AlterationT`, `ElementSetT`\>: \{ [name in keyof ElementSetT]?: AlterationT }

A set of modifications to cluster elements of a specific type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationT` | extends [`ElementAlteration`](../interfaces/cluster_export.ElementModifier.ElementAlteration.md) |
| `ElementSetT` | `ElementSetT` |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L59)

___

### ElementSetFlagAlterations

Ƭ **ElementSetFlagAlterations**\<`ElementsT`\>: `ElementsT` extends {} ? \{ [key in keyof ElementsT]: Object } : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementsT` | extends [`ElementSetFlags`](cluster_export.ElementModifier.md#elementsetflags)\<`any`\> \| `undefined` |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L146)

___

### ElementSetFlags

Ƭ **ElementSetFlags**\<`ElementsT`\>: \{ [key in keyof ElementsT]?: boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementsT` | extends [`ElementSet`](cluster_export.ClusterType.md#elementset)\<`any`\> \| `undefined` |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L133)

___

### Extender

Ƭ **Extender**: (...`features`: `any`) => [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)

An "extender" is a function that creates a cluster with specific
features enabled.

#### Type declaration

▸ (`...features`): [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...features` | `any` |

##### Returns

[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L161)

___

### WithAlterations

Ƭ **WithAlterations**\<`T`, `AlterationsT`\>: `Omit`\<`T`, ``"attributes"`` \| ``"commands"`` \| ``"events"``\> & \{ `attributes`: [`AlteredElements`](cluster_export.ElementModifier.md#alteredelements)\<`T`[``"attributes"``], [`Attribute`](cluster_export.ClusterType.md#attribute), `AlterationsT`[``"attributes"``]\> ; `commands`: [`AlteredElements`](cluster_export.ElementModifier.md#alteredelements)\<`T`[``"commands"``], [`Command`](cluster_export.ClusterType.md#command), `AlterationsT`[``"commands"``]\> ; `events`: [`AlteredElements`](cluster_export.ElementModifier.md#alteredelements)\<`T`[``"events"``], [`Event`](cluster_export.ClusterType.md#event), `AlterationsT`[``"events"``]\>  }

A definition with alterations applied.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `AlterationsT` | extends [`Alterations`](cluster_export.ElementModifier.md#alterations)\<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L99)

___

### WithFlags

Ƭ **WithFlags**\<`T`, `FlagsT`\>: [`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

A definition with elements enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `FlagsT` | extends [`ElementFlags`](cluster_export.ElementModifier.md#elementflags)\<`T`\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L119)

___

### WithValues

Ƭ **WithValues**\<`T`, `ValuesT`\>: [`WithAlterations`](cluster_export.ElementModifier.md#withalterations)\<`T`, [`AttributeValueAlterations`](cluster_export.ElementModifier.md#attributevaluealterations)\<`ValuesT`\>\>

A definition with attribute defaults updated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |
| `ValuesT` | extends `Partial`\<[`InputAttributeValues`](cluster_export.ClusterType.md#inputattributevalues)\<`T`\>\> |

#### Defined in

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L111)
