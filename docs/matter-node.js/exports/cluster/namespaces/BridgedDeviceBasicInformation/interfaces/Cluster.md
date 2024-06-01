[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [BridgedDeviceBasicInformation](../README.md) / Cluster

# Interface: Cluster

Bridged Device Basic Information

This Cluster serves two purposes towards a Node communicating with a Bridge:

  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a
    non-Matter technology, and

  • Provide a centralized collection of attributes that the Node may collect to aid in conveying information
    regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.

This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When the
functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall only be exposed on
the Endpoint which is at the top of the hierarchy for the functionality of that Bridged Device.

This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an endpoint
with an Aggregator device type.

This cluster has been derived from the Basic Information Cluster, and provides generic information about the
Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant for a Bridged Device
(e.g. ProductID since it is not a Matter device). For other attributes, the information which is listed as
Mandatory for the Basic Information Cluster, may not be available when the Bridged Device does not provide it to
the Bridge, and the Bridge has no other means to determine it. For such cases where the information for a
particular attribute is not available, the Bridge SHOULD NOT include the attribute in the cluster for this
Bridged Device. See below for Conformance details.

## See

MatterSpecification.v11.Core § 9.13

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### hardwareVersion

> `readonly` **hardwareVersion**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### hardwareVersionString

> `readonly` **hardwareVersionString**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### manufacturingDate

> `readonly` **manufacturingDate**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### nodeLabel

> `readonly` **nodeLabel**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### partNumber

> `readonly` **partNumber**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### productAppearance

> `readonly` **productAppearance**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### productLabel

> `readonly` **productLabel**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### productName

> `readonly` **productName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### productUrl

> `readonly` **productUrl**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### reachable

> `readonly` **reachable**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### serialNumber

> `readonly` **serialNumber**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### softwareVersion

> `readonly` **softwareVersion**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### softwareVersionString

> `readonly` **softwareVersionString**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### uniqueId

> `readonly` **uniqueId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid), `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

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

#### leave

> `readonly` **leave**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Core § 9.13.5

#### reachableChanged

> `readonly` **reachableChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is a change in the Reachable attribute. Its purpose is to
provide an indication towards interested parties that the reachability of a bridged device (over the
non-Matter network) has changed, so they may take appropriate action.

After (re)start of a bridge this event may be generated.

##### See

MatterSpecification.v11.Core § 9.13.5.1

#### shutDown

> `readonly` **shutDown**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

##### See

MatterSpecification.v11.Core § 9.13.5

#### startUp

> `readonly` **startUp**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### See

MatterSpecification.v11.Core § 9.13.5

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`57`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"BridgedDeviceBasicInformation"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `2`

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

##### attributes.hardwareVersion

> `readonly` **hardwareVersion**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.hardwareVersionString

> `readonly` **hardwareVersionString**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.manufacturingDate

> `readonly` **manufacturingDate**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.nodeLabel

> `readonly` **nodeLabel**: [`OptionalWritableAttribute`](../../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.partNumber

> `readonly` **partNumber**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productAppearance

> `readonly` **productAppearance**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.productLabel

> `readonly` **productLabel**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productName

> `readonly` **productName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productUrl

> `readonly` **productUrl**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.reachable

> `readonly` **reachable**: [`Attribute`](../../../interfaces/Attribute.md)\<`boolean`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.serialNumber

> `readonly` **serialNumber**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.softwareVersion

> `readonly` **softwareVersion**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.softwareVersionString

> `readonly` **softwareVersionString**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.uniqueId

> `readonly` **uniqueId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid), `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### events

> `readonly` **events**: `object`

##### events.leave

> `readonly` **leave**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### events.reachableChanged

> `readonly` **reachableChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is a change in the Reachable attribute. Its purpose is to
provide an indication towards interested parties that the reachability of a bridged device (over the
non-Matter network) has changed, so they may take appropriate action.

After (re)start of a bridge this event may be generated.

###### See

MatterSpecification.v11.Core § 9.13.5.1

##### events.shutDown

> `readonly` **shutDown**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### events.startUp

> `readonly` **startUp**: [`OptionalEvent`](../../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### id

> `readonly` **id**: `57`

##### name

> `readonly` **name**: `"BridgedDeviceBasicInformation"`

##### revision

> `readonly` **revision**: `2`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
