[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ApplicationBasic](../README.md) / Cluster

# Interface: Cluster

Application Basic

This cluster provides information about a Content App running on a Video Player device which is represented as
an endpoint (see Device Type Library document).

## See

MatterSpecification.v11.Cluster § 6.3

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### allowedVendorList

> `readonly` **allowedVendorList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid)[], `any`\>

This is a list of vendor IDs. Each entry is a vendor-id.

###### See

MatterSpecification.v11.Cluster § 6.3.3.8

##### application

> `readonly` **application**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify a Content App which consists of an Application ID using a specified catalog.

###### See

MatterSpecification.v11.Cluster § 6.3.3.5

##### applicationName

> `readonly` **applicationName**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the Content App assigned by the
vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.3

##### applicationVersion

> `readonly` **applicationVersion**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) version of the Content App assigned by the
vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.7

##### productId

> `readonly` **productId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
this would be the Product ID as specified by the vendor for the certification.

###### See

MatterSpecification.v11.Cluster § 6.3.3.4

##### status

> `readonly` **status**: [`Attribute`](../../../interfaces/Attribute.md)\<[`ApplicationStatus`](../enumerations/ApplicationStatus.md), `any`\>

This attribute shall specify the current running status of the application.

###### See

MatterSpecification.v11.Cluster § 6.3.3.6

##### vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid), `any`\>

This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.2

##### vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the vendor for the Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.1

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`1293`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"ApplicationBasic"`

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

##### attributes.allowedVendorList

> `readonly` **allowedVendorList**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid)[], `any`\>

This is a list of vendor IDs. Each entry is a vendor-id.

###### See

MatterSpecification.v11.Cluster § 6.3.3.8

##### attributes.application

> `readonly` **application**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

This attribute shall specify a Content App which consists of an Application ID using a specified catalog.

###### See

MatterSpecification.v11.Cluster § 6.3.3.5

##### attributes.applicationName

> `readonly` **applicationName**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the Content App assigned by the
vendor. For example, "NPR On Demand". The maximum length of the ApplicationName attribute is 256 bytes
of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.3

##### attributes.applicationVersion

> `readonly` **applicationVersion**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) version of the Content App assigned by the
vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.

###### See

MatterSpecification.v11.Cluster § 6.3.3.7

##### attributes.productId

> `readonly` **productId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific
Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then
this would be the Product ID as specified by the vendor for the certification.

###### See

MatterSpecification.v11.Cluster § 6.3.3.4

##### attributes.status

> `readonly` **status**: [`Attribute`](../../../interfaces/Attribute.md)\<[`ApplicationStatus`](../enumerations/ApplicationStatus.md), `any`\>

This attribute shall specify the current running status of the application.

###### See

MatterSpecification.v11.Cluster § 6.3.3.6

##### attributes.vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/README.md#vendorid), `any`\>

This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for the
Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.2

##### attributes.vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

This attribute shall specify a human readable (displayable) name of the vendor for the Content App.

###### See

MatterSpecification.v11.Cluster § 6.3.3.1

##### id

> `readonly` **id**: `1293`

##### name

> `readonly` **name**: `"ApplicationBasic"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
