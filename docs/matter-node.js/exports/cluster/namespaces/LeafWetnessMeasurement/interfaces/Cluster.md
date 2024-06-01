[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [LeafWetnessMeasurement](../README.md) / Cluster

# Interface: Cluster

This is a base cluster. The server cluster provides an interface to water content measurement functionality. The
measurement is reportable and may be configured for reporting. Water content measurements include, but are not
limited to, leaf wetness, relative humidity, and soil moisture.

## See

MatterSpecification.v11.Cluster § 2.6

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.3

##### measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

###### See

MatterSpecification.v11.Cluster § 2.6.4.1

##### minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.2

##### tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.6.4.4

#### Inherited from

`Identity.attributes`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

***

### commands

> **commands**: `object`

#### Inherited from

`Identity.commands`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

***

### features

> **features**: `object`

#### Inherited from

`Identity.features`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1031`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"LeafWetnessMeasurement"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `3`

#### Inherited from

`Identity.revision`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: `object`

##### attributes.maxMeasuredValue

> `readonly` **maxMeasuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.3

##### attributes.measuredValue

> `readonly` **measuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

MeasuredValue represents the water content in % as follows:

MeasuredValue = 100 x water content

Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
maximum resolution this format allows is 0.01%.

MinMeasuredValue and MaxMeasuredValue define the range of the sensor.

The null value indicates that the measurement is unknown, otherwise the range shall be as described in
Measured Value.

MeasuredValue is updated continuously as new measurements are made.

###### See

MatterSpecification.v11.Cluster § 2.6.4.1

##### attributes.minMeasuredValue

> `readonly` **minMeasuredValue**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| `number`, `any`\>

The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
null value means this attribute is not defined. See Measured Value for more details.

###### See

MatterSpecification.v11.Cluster § 2.6.4.2

##### attributes.tolerance

> `readonly` **tolerance**: [`OptionalAttribute`](../../../interfaces/OptionalAttribute.md)\<`number`, `any`\>

See Measured Value.

###### See

MatterSpecification.v11.Cluster § 2.6.4.4

##### id

> `readonly` **id**: `1031`

##### name

> `readonly` **name**: `"LeafWetnessMeasurement"`

##### revision

> `readonly` **revision**: `3`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
