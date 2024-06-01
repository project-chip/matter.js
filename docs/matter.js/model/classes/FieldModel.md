[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [model](../README.md) / FieldModel

# Class: FieldModel

A field element defines a field in a list, struct, enum or bitmap.

## Extends

- [`PropertyModel`](PropertyModel.md)

## Implements

- [`FieldElement`](../interfaces/FieldElement.md)

## Constructors

### new FieldModel()

> **new FieldModel**(`definition`): [`FieldModel`](FieldModel.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](../namespaces/FieldElement/README.md#properties) |

#### Returns

[`FieldModel`](FieldModel.md)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`constructor`](PropertyModel.md#constructors)

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L19)

## Properties

### #children?

> `private` `optional` **#children**: [`Children`](../-internal-/interfaces/Children.md)\<[`Model`](Model.md), [`AnyElement`](../README.md#anyelement)\>

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`#children`](PropertyModel.md##children)

#### Source

[packages/matter.js/src/model/models/Model.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L45)

***

### #id?

> `private` `optional` **#id**: `number` = `undefined`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`#id`](PropertyModel.md##id)

#### Source

[packages/matter.js/src/model/models/Model.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L27)

***

### #name

> `private` **#name**: `string`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`#name`](PropertyModel.md##name)

#### Source

[packages/matter.js/src/model/models/Model.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L28)

***

### #parent?

> `private` `optional` **#parent**: [`Model`](Model.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`#parent`](PropertyModel.md##parent)

#### Source

[packages/matter.js/src/model/models/Model.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L46)

***

### byteSize?

> `optional` **byteSize**: [`Size`](../namespaces/ValueElement/README.md#size)

Applies to numeric types.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`byteSize`](../interfaces/FieldElement.md#bytesize)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`byteSize`](PropertyModel.md#bytesize)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L31)

***

### default?

> `optional` **default**: [`FieldValue`](../README.md#fieldvalue)

The default value for the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`default`](../interfaces/FieldElement.md#default)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`default`](PropertyModel.md#default)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L32)

***

### description?

> `optional` **description**: `string`

A short summary of the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`description`](../interfaces/FieldElement.md#description)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`description`](PropertyModel.md#description)

#### Source

[packages/matter.js/src/model/models/Model.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L20)

***

### details?

> `optional` **details**: `string`

A paragraph summary of the element.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`details`](../interfaces/FieldElement.md#details)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`details`](PropertyModel.md#details)

#### Source

[packages/matter.js/src/model/models/Model.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L21)

***

### errors?

> `optional` **errors**: [`DefinitionError`](../README.md#definitionerror)[]

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`errors`](PropertyModel.md#errors)

#### Source

[packages/matter.js/src/model/models/Model.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L23)

***

### global?

> `optional` **global**: `boolean`

Flag set on elements loaded from Globals.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`global`](../interfaces/FieldElement.md#global)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`global`](PropertyModel.md#global)

#### Source

[packages/matter.js/src/model/models/Model.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L33)

***

### id?

> `optional` **id**: `number`

Fields must have IDs but they may be implied by the field's position
in its parent.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`id`](../interfaces/FieldElement.md#id)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`id`](PropertyModel.md#id)

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L16)

***

### isGlobalAttribute?

> `optional` **isGlobalAttribute**: `boolean`

#### Overrides

[`PropertyModel`](PropertyModel.md).[`isGlobalAttribute`](PropertyModel.md#isglobalattribute)

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L17)

***

### isType?

> `optional` **isType**: `boolean` = `true`

Indicates that an element defines a datatype.

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`isType`](PropertyModel.md#istype)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L34)

***

### isTypeScope?

> `optional` **isTypeScope**: `boolean`

Indicates that an element may have type definitions as children.

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`isTypeScope`](PropertyModel.md#istypescope)

#### Source

[packages/matter.js/src/model/models/Model.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L38)

***

### metatype?

> `optional` **metatype**: [`Metatype`](../enumerations/Metatype.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`metatype`](PropertyModel.md#metatype)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L33)

***

### name

> **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`name`](../interfaces/FieldElement.md#name)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`name`](PropertyModel.md#name)

#### Source

[packages/matter.js/src/model/models/Model.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L25)

***

### tag

> **tag**: [`Field`](../enumerations/ElementTag.md#field) = `FieldElement.Tag`

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`tag`](../interfaces/FieldElement.md#tag)

#### Overrides

[`PropertyModel`](PropertyModel.md).[`tag`](PropertyModel.md#tag)

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L15)

***

### type?

> `optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`type`](../interfaces/FieldElement.md#type)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`type`](PropertyModel.md#type)

#### Source

[packages/matter.js/src/model/models/Model.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L19)

***

### xref?

> `optional` **xref**: [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

Reference to Matter specification document.

#### Implementation of

[`FieldElement`](../interfaces/FieldElement.md).[`xref`](../interfaces/FieldElement.md#xref)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`xref`](PropertyModel.md#xref)

#### Source

[packages/matter.js/src/model/models/Model.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L22)

***

### types

> `static` **types**: `object`

Factory support.  Populated by derivatives upon definition.

#### Index signature

 \[`type`: `string`\]: (`definition`) => [`Model`](Model.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`types`](PropertyModel.md#types)

#### Source

[packages/matter.js/src/model/models/Model.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L199)

## Accessors

### access

> `get` **access**(): [`Access`](Access.md)

Authorization limits.

> `set` **access**(`definition`): `void`

Authorization limits.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Access`](Access.md) \| [`Definition`](../namespaces/Access/README.md#definition) |

#### Returns

[`Access`](Access.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L64)

***

### allowedBaseTags

> `get` **allowedBaseTags**(): [`ElementTag`](../enumerations/ElementTag.md)[]

ValueModels may derive from models of the same type or from generic
Datatype models.

#### Returns

[`ElementTag`](../enumerations/ElementTag.md)[]

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:181](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L181)

***

### base

> `get` **base**(): `undefined` \| [`ValueModel`](ValueModel.md)

ValueModels may only derive from ValueModels.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L173)

***

### children

> `get` **children**(): [`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

Children of models are always models.

> `set` **children**(`children`): `void`

Children can be added as models or elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `children` | ([`FieldElement`](../interfaces/FieldElement.md) \| [`FieldModel`](FieldModel.md))[] |

#### Returns

[`Children`](../-internal-/interfaces/Children.md)\<[`FieldModel`](FieldModel.md), [`FieldElement`](../interfaces/FieldElement.md)\>

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L36)

***

### conformance

> `get` **conformance**(): [`Conformance`](Conformance.md)

Optionality control.

> `set` **conformance**(`definition`): `void`

Optionality control.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Conformance/README.md#definition) \| [`Conformance`](Conformance.md) |

#### Returns

[`Conformance`](Conformance.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L54)

***

### constraint

> `get` **constraint**(): [`Constraint`](Constraint.md)

Limits on values.

> `set` **constraint**(`definition`): `void`

Limits on values.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Constraint/README.md#definition) \| [`Constraint`](Constraint.md) |

#### Returns

[`Constraint`](Constraint.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L44)

***

### definingModel

> `get` **definingModel**(): `undefined` \| [`ValueModel`](ValueModel.md)

Get the first derived ancestor with children, if any.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L159)

***

### directMetatype

> `get` **directMetatype**(): `undefined` \| [`Metatype`](../enumerations/Metatype.md)

The metatype for this model's type, ignoring inheritance.

#### Returns

`undefined` \| [`Metatype`](../enumerations/Metatype.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L150)

***

### disallowed

> `get` **disallowed**(): `boolean`

Is this model disallowed?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L230)

***

### discriminator

> `get` **discriminator**(): `undefined` \| `string`

Obtain a discriminator that differentiates different models with the same name

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/Model.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L148)

***

### effectiveAccess

> `get` **effectiveAccess**(): [`Access`](Access.md)

#### Returns

[`Access`](Access.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L70)

***

### effectiveConformance

> `get` **effectiveConformance**(): [`Conformance`](Conformance.md)

#### Returns

[`Conformance`](Conformance.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L60)

***

### effectiveConstraint

> `get` **effectiveConstraint**(): [`Constraint`](Constraint.md)

#### Returns

[`Constraint`](Constraint.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L50)

***

### effectiveDefault

> `get` **effectiveDefault**(): `any`

The value to use as a default.  The "default" field has a manually
supplied value but this property decodes the default and/or generates
a default from subfields.

#### Returns

`any`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L143)

***

### effectiveId

> `get` **effectiveId**(): `undefined` \| `number`

Fields may omit their ID.  In this case we use their index within the parent as the ID.

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L26)

***

### effectiveMetatype

> `get` **effectiveMetatype**(): `undefined` \| [`Metatype`](../enumerations/Metatype.md)

The working metatype for this object.

#### Returns

`undefined` \| [`Metatype`](../enumerations/Metatype.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L131)

***

### effectiveQuality

> `get` **effectiveQuality**(): [`Quality`](Quality.md)

#### Returns

[`Quality`](Quality.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L80)

***

### effectiveType

> `get` **effectiveType**(): `undefined` \| `string`

The "effective type" may be inferred from context.

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L120)

***

### effectiveXref

> `get` **effectiveXref**(): `undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

A local or parent xref.

#### Returns

`undefined` \| [`CrossReference`](../namespaces/Model/classes/CrossReference.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L234)

***

### elements

> `get` **elements**(): [`AnyElement`](../README.md#anyelement)[]

Element view of children.  For TypeScript this allows children to be added as elements.  For JavaScript this is
identical to children().

#### Returns

[`AnyElement`](../README.md#anyelement)[]

#### Source

[packages/matter.js/src/model/models/Model.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L115)

***

### globalBase

> `get` **globalBase**(): `undefined` \| [`Model`](Model.md)

Get the first global base type.  This may have semantic meaning more specific than the base primitive type.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L227)

***

### isDeprecated

> `get` **isDeprecated**(): `boolean`

Is this model deprecated?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L223)

***

### key

> `get` **key**(): `undefined` \| `string`

The key for bitmap fields is actually the constraint which defines the bit range.  All other datatypes use the
default key.

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/model/models/FieldModel.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/FieldModel.ts#L42)

***

### listEntry

> `get` **listEntry**(): `undefined` \| [`FieldModel`](FieldModel.md)

Get the entry type for lists, if any.

#### Returns

`undefined` \| [`FieldModel`](FieldModel.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L166)

***

### mandatory

> `get` **mandatory**(): `boolean`

Is the model mandatory?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L244)

***

### members

> `get` **members**(): [`FieldModel`](FieldModel.md)[]

Retrieve all datatype members.

#### Returns

[`FieldModel`](FieldModel.md)[]

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:193](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L193)

***

### metabase

> `get` **metabase**(): `undefined` \| [`ValueModel`](ValueModel.md)

Metatype is only present on global types with specific semantic meaning.
This model is significant because it gives us information about how to
manipulate the data.  This accessor retrieves this model.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L89)

***

### nullable

> `get` **nullable**(): `boolean`

Can this model be omitted?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L237)

***

### overridesShadow

> `get` **overridesShadow**(): `undefined` \| `true`

Determine whether this element overrides key properties of its shadow.

#### Returns

`undefined` \| `true`

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L251)

***

### parent

> `get` **parent**(): `undefined` \| [`Model`](Model.md)

The structural parent.  This is the model for the element that contains this element's definition.

> `set` **parent**(`parent`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `parent` | `undefined` \| [`Model`](Model.md) |

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L88)

***

### path

> `get` **path**(): `string`

The path ("." delimited) in the Matter tree.

This is informational and generally tries to adhere to JS API conventions.

#### Returns

`string`

#### Source

[packages/matter.js/src/model/models/Model.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L60)

***

### primitiveBase

> `get` **primitiveBase**(): `undefined` \| [`ValueModel`](ValueModel.md)

Get the primitive type for this value model.  This is an integer type
for enums and bitmaps.  Otherwise it's the metabase.

#### Returns

`undefined` \| [`ValueModel`](ValueModel.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L97)

***

### quality

> `get` **quality**(): [`Quality`](Quality.md)

Other qualities not covered by conformance or access.

> `set` **quality**(`definition`): `void`

Other qualities not covered by conformance or access.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](../namespaces/Quality/README.md#definition) \| [`Quality`](Quality.md) |

#### Returns

[`Quality`](Quality.md)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L74)

***

### shadow

> `get` **shadow**(): `undefined` \| [`Model`](Model.md)

Get shadow model, if any.  A "shadow" is an element in my parent's inheritance hierarchy that I override.

#### Returns

`undefined` \| [`Model`](Model.md)

#### Source

[packages/matter.js/src/model/models/Model.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L220)

***

### valid

> `get` **valid**(): `boolean`

Did validation find errors?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/model/models/Model.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L51)

***

### validationAspects

> `get` **validationAspects**(): [`Aspect`](Aspect.md)\<`any`\>[]

Collect constraints and conformance for this type and all base types.

#### Returns

[`Aspect`](Aspect.md)\<`any`\>[]

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:200](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L200)

## Methods

### add()

> **add**(...`children`): `void`

Add a child.  children.push works too but only accepts models.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`children` | ([`AnyElement`](../README.md#anyelement) \| [`Model`](Model.md))[] |

#### Returns

`void`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`add`](PropertyModel.md#add)

#### Source

[packages/matter.js/src/model/models/Model.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L248)

***

### all()

> **all**\<`T`\>(`constructor`): `T`[]

Retrieve all models of a specific element type from local scope.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `constructor` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> | model class or a predicate object |

#### Returns

`T`[]

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`all`](PropertyModel.md#all)

#### Source

[packages/matter.js/src/model/models/Model.ts:272](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L272)

***

### bitDefinition()

> **bitDefinition**(`bit`): `undefined` \| [`FieldModel`](FieldModel.md)

Search the inheritance chain for a bitmap field defining a specific bit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bit` | `number` |

#### Returns

`undefined` \| [`FieldModel`](FieldModel.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`bitDefinition`](PropertyModel.md#bitdefinition)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L277)

***

### clone()

> **clone**\<`This`\>(`this`): `This`

Clone the model.  This deep copies all descendant child models but not other properties.

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |

#### Returns

`This`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`clone`](PropertyModel.md#clone)

#### Source

[packages/matter.js/src/model/models/Model.ts:370](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L370)

***

### error()

> **error**(`code`, `message`): `void`

Record a validation error for this model.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`error`](PropertyModel.md#error)

#### Source

[packages/matter.js/src/model/models/Model.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L296)

***

### get()

> **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

Retrieve a specific model by ID or name.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`get`](PropertyModel.md#get)

#### Source

[packages/matter.js/src/model/models/Model.ts:279](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L279)

***

### instanceOf()

> **instanceOf**(`other`): `boolean`

Does this model derive from another?

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`AnyElement`](../README.md#anyelement) \| [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`instanceOf`](PropertyModel.md#instanceof)

#### Source

[packages/matter.js/src/model/models/Model.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L363)

***

### member()

> **member**(`key`, `allowedTags`): `undefined` \| [`Model`](Model.md)

Search the inheritance chain for a child property.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | [`Selector`](../-internal-/namespaces/Children/README.md#selector) |
| `allowedTags` | [`ElementTag`](../enumerations/ElementTag.md)[] |

#### Returns

`undefined` \| [`Model`](Model.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`member`](PropertyModel.md#member)

#### Source

[packages/matter.js/src/model/models/Model.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L356)

***

### owner()

> **owner**\<`T`\>(`constructor`): `undefined` \| `T`

Retrieve a model of a specific type from the ownership hierarchy.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Model`](Model.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `constructor` | [`Type`](../namespaces/Model/README.md#typet)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`owner`](PropertyModel.md#owner)

#### Source

[packages/matter.js/src/model/models/Model.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L289)

***

### references()

> **references**(`type`): [`Model`](Model.md)[]

Find all children that reference a specific type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Model`](Model.md) |

#### Returns

[`Model`](Model.md)[]

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`references`](PropertyModel.md#references)

#### Source

[packages/matter.js/src/model/models/Model.ts:349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L349)

***

### toJSON()

> **toJSON**(): [`AnyElement`](../README.md#anyelement)

Convert model to JSON.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`toJSON`](PropertyModel.md#tojson)

#### Source

[packages/matter.js/src/model/models/Model.ts:312](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L312)

***

### valueOf()

> **valueOf**(): [`AnyElement`](../README.md#anyelement)

Convert to non-class structure.

#### Returns

[`AnyElement`](../README.md#anyelement)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`valueOf`](PropertyModel.md#valueof)

#### Source

[packages/matter.js/src/model/models/ValueModel.ts:281](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/ValueModel.ts#L281)

***

### visit()

> **visit**(`visitor`): `undefined` \| `boolean`

Apply a function to all tree elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `visitor` | (`model`) => `boolean` \| `void` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`visit`](PropertyModel.md#visit)

#### Source

[packages/matter.js/src/model/models/Model.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L342)

***

### create()

> `static` **create**(`definition`): [`Model`](Model.md)

Create a model for an element.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`AnyElement`](../README.md#anyelement) |

#### Returns

[`Model`](Model.md)

#### Inherited from

[`PropertyModel`](PropertyModel.md).[`create`](PropertyModel.md#create)

#### Source

[packages/matter.js/src/model/models/Model.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/models/Model.ts#L255)
