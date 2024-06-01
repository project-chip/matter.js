[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ElementModifier

# Namespace: ElementModifier

## Index

### Interfaces

- [AttributeAlteration](interfaces/AttributeAlteration.md)
- [ElementAlteration](interfaces/ElementAlteration.md)

## Type Aliases

### Alterations\<OriginalT\>

> **Alterations**\<`OriginalT`\>: `object`

A set of modifications to a cluster's elements.

Note - cannot specify ElementsT as extending ClusterElements because it
triggers a bug in TS 5.2 declaration generation

#### Type parameters

| Type parameter |
| :------ |
| `OriginalT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |

#### Type declaration

##### attributes?

> `optional` **attributes**: [`ElementSetAlterations`](README.md#elementsetalterationsalterationtelementsett)\<[`AttributeAlteration`](interfaces/AttributeAlteration.md), `OriginalT`\[`"attributes"`\]\>

##### commands?

> `optional` **commands**: [`ElementSetAlterations`](README.md#elementsetalterationsalterationtelementsett)\<[`ElementAlteration`](interfaces/ElementAlteration.md), `OriginalT`\[`"commands"`\]\>

##### events?

> `optional` **events**: [`ElementSetAlterations`](README.md#elementsetalterationsalterationtelementsett)\<[`ElementAlteration`](interfaces/ElementAlteration.md), `OriginalT`\[`"events"`\]\>

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L79)

***

### AlteredElements\<OriginalT, ElementT, AlterationT\>

> **AlteredElements**\<`OriginalT`, `ElementT`, `AlterationT`\>: `{ [name in keyof OriginalT]: OriginalT[name] extends infer OrigT extends ElementT ? AlterationT extends { [n in name]: Object } ? Omit<OrigT, "optional"> & Object : OrigT : never }`

Alterations applied to a specific element set, element or element field.

#### Type parameters

| Type parameter |
| :------ |
| `OriginalT` |
| `ElementT` |
| `AlterationT` |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L88)

***

### AttributeValueAlterations\<ValuesT\>

> **AttributeValueAlterations**\<`ValuesT`\>: `object`

Alterations implied by AttributeValues.

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `Partial`\<[`InputAttributeValues`](../ClusterType/README.md#inputattributevaluest)\<`any`\>\> |

#### Type declaration

##### attributes

> **attributes**: `{ [K in keyof ValuesT]: Object }`

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L127)

***

### ElementFlagAlterations\<T\>

> **ElementFlagAlterations**\<`T`\>: `{ [K in keyof T]: T[K] extends ElementSetFlags<any> ? ElementSetFlagAlterations<T[K]> : never }`

Alterations implied by ElementFlags.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ElementFlags`](README.md#elementflagsclustert)\<`any`\> |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L153)

***

### ElementFlags\<ClusterT\>

> **ElementFlags**\<`ClusterT`\>: `object`

Flags indicating elements to enable.

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |

#### Type declaration

##### attributes?

> `optional` **attributes**: [`ElementSetFlags`](README.md#elementsetflagselementst)\<[`AttributesOf`](../ClusterType/README.md#attributesofc)\<`ClusterT`\>\>

##### commands?

> `optional` **commands**: [`ElementSetFlags`](README.md#elementsetflagselementst)\<[`CommandsOf`](../ClusterType/README.md#commandsofc)\<`ClusterT`\>\>

##### events?

> `optional` **events**: [`ElementSetFlags`](README.md#elementsetflagselementst)\<[`EventsOf`](../ClusterType/README.md#eventsofc)\<`ClusterT`\>\>

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L140)

***

### ElementSetAlterations\<AlterationT, ElementSetT\>

> **ElementSetAlterations**\<`AlterationT`, `ElementSetT`\>: `{ [name in keyof ElementSetT]?: AlterationT }`

A set of modifications to cluster elements of a specific type.

#### Type parameters

| Type parameter |
| :------ |
| `AlterationT` *extends* [`ElementAlteration`](interfaces/ElementAlteration.md) |
| `ElementSetT` |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L59)

***

### ElementSetFlagAlterations\<ElementsT\>

> **ElementSetFlagAlterations**\<`ElementsT`\>: `ElementsT` *extends* `object` ? `{ [key in keyof ElementsT]: Object }` : `undefined`

#### Type parameters

| Type parameter |
| :------ |
| `ElementsT` *extends* [`ElementSetFlags`](README.md#elementsetflagselementst)\<`any`\> \| `undefined` |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L146)

***

### ElementSetFlags\<ElementsT\>

> **ElementSetFlags**\<`ElementsT`\>: `{ [key in keyof ElementsT]?: boolean }`

#### Type parameters

| Type parameter |
| :------ |
| `ElementsT` *extends* [`ElementSet`](../ClusterType/README.md#elementsett)\<`any`\> \| `undefined` |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L133)

***

### Extender()

> **Extender**: (...`features`) => [`ClusterType`](../../interfaces/ClusterType.md)

An "extender" is a function that creates a cluster with specific
features enabled.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`features` | `any` |

#### Returns

[`ClusterType`](../../interfaces/ClusterType.md)

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L161)

***

### WithAlterations\<T, AlterationsT\>

> **WithAlterations**\<`T`, `AlterationsT`\>: `Omit`\<`T`, `"attributes"` \| `"commands"` \| `"events"`\> & `object`

A definition with alterations applied.

#### Type declaration

##### attributes

> **attributes**: [`AlteredElements`](README.md#alteredelementsoriginaltelementtalterationt)\<`T`\[`"attributes"`\], [`Attribute`](../ClusterType/README.md#attribute), `AlterationsT`\[`"attributes"`\]\>

##### commands

> **commands**: [`AlteredElements`](README.md#alteredelementsoriginaltelementtalterationt)\<`T`\[`"commands"`\], [`Command`](../ClusterType/README.md#command), `AlterationsT`\[`"commands"`\]\>

##### events

> **events**: [`AlteredElements`](README.md#alteredelementsoriginaltelementtalterationt)\<`T`\[`"events"`\], [`Event`](../ClusterType/README.md#event), `AlterationsT`\[`"events"`\]\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `AlterationsT` *extends* [`Alterations`](README.md#alterationsoriginalt)\<`any`\> |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L99)

***

### WithFlags\<T, FlagsT\>

> **WithFlags**\<`T`, `FlagsT`\>: [`WithAlterations`](README.md#withalterationstalterationst)\<`T`, [`ElementFlagAlterations`](README.md#elementflagalterationst)\<`FlagsT`\>\>

A definition with elements enabled.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `FlagsT` *extends* [`ElementFlags`](README.md#elementflagsclustert)\<`T`\> |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L119)

***

### WithValues\<T, ValuesT\>

> **WithValues**\<`T`, `ValuesT`\>: [`WithAlterations`](README.md#withalterationstalterationst)\<`T`, [`AttributeValueAlterations`](README.md#attributevaluealterationsvaluest)\<`ValuesT`\>\>

A definition with attribute defaults updated.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |
| `ValuesT` *extends* `Partial`\<[`InputAttributeValues`](../ClusterType/README.md#inputattributevaluest)\<`T`\>\> |

#### Source

[packages/matter.js/src/cluster/mutation/ElementModifier.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/ElementModifier.ts#L111)
