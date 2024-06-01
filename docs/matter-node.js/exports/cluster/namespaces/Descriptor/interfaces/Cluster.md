[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Descriptor](../README.md) / Cluster

# Interface: Cluster

Descriptor

NOTE The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for describing a
node, its endpoints and clusters.

This cluster describes an endpoint instance on the node, independently from other endpoints, but also allows
composition of endpoints to conform to complex device type patterns.

This cluster supports a list of one or more device type identifiers that represent conformance to device type
specifications.

The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a composed device
type.

## See

MatterSpecification.v11.Core § 9.5

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### clientList

> `readonly` **clientList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.3

##### deviceTypeList

> `readonly` **deviceTypeList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

###### See

MatterSpecification.v11.Core § 9.5.5.1

##### partsList

> `readonly` **partsList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EndpointNumber`](../../../../datatype/README.md#endpointnumber)[], `any`\>

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

###### See

MatterSpecification.v11.Core § 9.5.5.4

##### serverList

> `readonly` **serverList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.2

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`29`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"Descriptor"`

#### Inherited from

`Identity.name`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

***

### revision

> **revision**: `1`

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

##### attributes.clientList

> `readonly` **clientList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the client clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.3

##### attributes.deviceTypeList

> `readonly` **deviceTypeList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

This is a list of device types and corresponding revisions declaring endpoint conformance (see
DeviceTypeStruct). At least one device type entry shall be present.

An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that is
in common for more than one device type in the DeviceTypeList shall be supported as a shared cluster
instance on the endpoint.

###### See

MatterSpecification.v11.Core § 9.5.5.1

##### attributes.partsList

> `readonly` **partsList**: [`Attribute`](../../../interfaces/Attribute.md)\<[`EndpointNumber`](../../../../datatype/README.md#endpointnumber)[], `any`\>

This attribute indicates composition of the device type instance. Device type instance composition shall
include the endpoints in this list. See Endpoint Composition for more information which endpoints to
include in this list.

###### See

MatterSpecification.v11.Core § 9.5.5.4

##### attributes.serverList

> `readonly` **serverList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`ClusterId`](../../../../datatype/README.md#clusterid)[], `any`\>

This attribute shall list each cluster ID for the server clusters present on the endpoint instance.

###### See

MatterSpecification.v11.Core § 9.5.5.2

##### id

> `readonly` **id**: `29`

##### name

> `readonly` **name**: `"Descriptor"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
