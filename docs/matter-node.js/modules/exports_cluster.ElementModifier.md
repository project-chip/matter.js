[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ElementModifier

# Namespace: ElementModifier

[exports/cluster](exports_cluster.md).ElementModifier

## Table of contents

### Interfaces

- [AttributeAlteration](../interfaces/exports_cluster.ElementModifier.AttributeAlteration.md)
- [ElementAlteration](../interfaces/exports_cluster.ElementModifier.ElementAlteration.md)

### Type Aliases

- [Alterations](exports_cluster.ElementModifier.md#alterations)
- [AlteredElements](exports_cluster.ElementModifier.md#alteredelements)
- [AttributeValueAlterations](exports_cluster.ElementModifier.md#attributevaluealterations)
- [ElementFlagAlterations](exports_cluster.ElementModifier.md#elementflagalterations)
- [ElementFlags](exports_cluster.ElementModifier.md#elementflags)
- [ElementSetAlterations](exports_cluster.ElementModifier.md#elementsetalterations)
- [ElementSetFlagAlterations](exports_cluster.ElementModifier.md#elementsetflagalterations)
- [ElementSetFlags](exports_cluster.ElementModifier.md#elementsetflags)
- [Extender](exports_cluster.ElementModifier.md#extender)
- [WithAlterations](exports_cluster.ElementModifier.md#withalterations)
- [WithFlags](exports_cluster.ElementModifier.md#withflags)
- [WithValues](exports_cluster.ElementModifier.md#withvalues)

## Type Aliases

### Alterations

Ƭ **Alterations**\<`OriginalT`\>: `Object`

A set of modifications to a cluster's elements.

Note - cannot specify ElementsT as extending ClusterElements because it
triggers a bug in TS 5.2 declaration generation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OriginalT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | [`ElementSetAlterations`](exports_cluster.ElementModifier.md#elementsetalterations)\<[`AttributeAlteration`](../interfaces/exports_cluster.ElementModifier.AttributeAlteration.md), `OriginalT`[``"attributes"``]\> |
| `commands?` | [`ElementSetAlterations`](exports_cluster.ElementModifier.md#elementsetalterations)\<[`ElementAlteration`](../interfaces/exports_cluster.ElementModifier.ElementAlteration.md), `OriginalT`[``"commands"``]\> |
| `events?` | [`ElementSetAlterations`](exports_cluster.ElementModifier.md#elementsetalterations)\<[`ElementAlteration`](../interfaces/exports_cluster.ElementModifier.ElementAlteration.md), `OriginalT`[``"events"``]\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:53

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

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:61

___

### AttributeValueAlterations

Ƭ **AttributeValueAlterations**\<`ValuesT`\>: `Object`

Alterations implied by AttributeValues.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Partial`\<[`InputAttributeValues`](exports_cluster.ClusterType.md#inputattributevalues)\<`any`\>\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ [K in keyof ValuesT]: Object } |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:89

___

### ElementFlagAlterations

Ƭ **ElementFlagAlterations**\<`T`\>: \{ [K in keyof T]: T[K] extends ElementSetFlags\<any\> ? ElementSetFlagAlterations\<T[K]\> : never }

Alterations implied by ElementFlags.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementFlags`](exports_cluster.ElementModifier.md#elementflags)\<`any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:115

___

### ElementFlags

Ƭ **ElementFlags**\<`ClusterT`\>: `Object`

Flags indicating elements to enable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | [`ElementSetFlags`](exports_cluster.ElementModifier.md#elementsetflags)\<[`AttributesOf`](exports_cluster.ClusterType.md#attributesof)\<`ClusterT`\>\> |
| `commands?` | [`ElementSetFlags`](exports_cluster.ElementModifier.md#elementsetflags)\<[`CommandsOf`](exports_cluster.ClusterType.md#commandsof)\<`ClusterT`\>\> |
| `events?` | [`ElementSetFlags`](exports_cluster.ElementModifier.md#elementsetflags)\<[`EventsOf`](exports_cluster.ClusterType.md#eventsof)\<`ClusterT`\>\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:102

___

### ElementSetAlterations

Ƭ **ElementSetAlterations**\<`AlterationT`, `ElementSetT`\>: \{ [name in keyof ElementSetT]?: AlterationT }

A set of modifications to cluster elements of a specific type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationT` | extends [`ElementAlteration`](../interfaces/exports_cluster.ElementModifier.ElementAlteration.md) |
| `ElementSetT` | `ElementSetT` |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:36

___

### ElementSetFlagAlterations

Ƭ **ElementSetFlagAlterations**\<`ElementsT`\>: `ElementsT` extends {} ? \{ [key in keyof ElementsT]: Object } : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementsT` | extends [`ElementSetFlags`](exports_cluster.ElementModifier.md#elementsetflags)\<`any`\> \| `undefined` |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:107

___

### ElementSetFlags

Ƭ **ElementSetFlags**\<`ElementsT`\>: \{ [key in keyof ElementsT]?: boolean }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementsT` | extends [`ElementSet`](exports_cluster.ClusterType.md#elementset)\<`any`\> \| `undefined` |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:96

___

### Extender

Ƭ **Extender**: (...`features`: `any`) => [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md)

An "extender" is a function that creates a cluster with specific
features enabled.

#### Type declaration

▸ (`...features`): [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...features` | `any` |

##### Returns

[`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md)

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:122

___

### WithAlterations

Ƭ **WithAlterations**\<`T`, `AlterationsT`\>: `Omit`\<`T`, ``"attributes"`` \| ``"commands"`` \| ``"events"``\> & \{ `attributes`: [`AlteredElements`](exports_cluster.ElementModifier.md#alteredelements)\<`T`[``"attributes"``], [`Attribute`](exports_cluster.ClusterType.md#attribute), `AlterationsT`[``"attributes"``]\> ; `commands`: [`AlteredElements`](exports_cluster.ElementModifier.md#alteredelements)\<`T`[``"commands"``], [`Command`](exports_cluster.ClusterType.md#command), `AlterationsT`[``"commands"``]\> ; `events`: [`AlteredElements`](exports_cluster.ElementModifier.md#alteredelements)\<`T`[``"events"``], [`Event`](exports_cluster.ClusterType.md#event), `AlterationsT`[``"events"``]\>  }

A definition with alterations applied.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `AlterationsT` | extends [`Alterations`](exports_cluster.ElementModifier.md#alterations)\<`any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:73

___

### WithFlags

Ƭ **WithFlags**\<`T`, `FlagsT`\>: [`WithAlterations`](exports_cluster.ElementModifier.md#withalterations)\<`T`, [`ElementFlagAlterations`](exports_cluster.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>

A definition with elements enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `FlagsT` | extends [`ElementFlags`](exports_cluster.ElementModifier.md#elementflags)\<`T`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:85

___

### WithValues

Ƭ **WithValues**\<`T`, `ValuesT`\>: [`WithAlterations`](exports_cluster.ElementModifier.md#withalterations)\<`T`, [`AttributeValueAlterations`](exports_cluster.ElementModifier.md#attributevaluealterations)\<`ValuesT`\>\>

A definition with attribute defaults updated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |
| `ValuesT` | extends `Partial`\<[`InputAttributeValues`](exports_cluster.ClusterType.md#inputattributevalues)\<`T`\>\> |

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/ElementModifier.d.ts:81
