[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [AccessControl](../README.md) / Cluster

# Interface: Cluster

Access Control

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which codifies the
rules used to manage and enforce Access Control for the Node’s endpoints and their associated cluster instances.
Access to this Access Control Cluster itself requires a special Administer privilege level, such that only Nodes
granted such privilege (hereafter termed "Administrators") can manage the Access Control Cluster.

The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be present on
any other Endpoint of any Node.

## See

MatterSpecification.v11.Core § 9.10

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`ClusterInstance`](../README.md#clusterinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Type declaration

##### accessControlEntriesPerFabric

> `readonly` **accessControlEntriesPerFabric**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.7

##### acl

> `readonly` **acl**: [`WritableFabricScopedAttribute`](../../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

###### See

MatterSpecification.v11.Core § 9.10.5.3

##### extension

> `readonly` **extension**: [`OptionalWritableFabricScopedAttribute`](../../../interfaces/OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

###### See

MatterSpecification.v11.Core § 9.10.5.4

##### subjectsPerAccessControlEntry

> `readonly` **subjectsPerAccessControlEntry**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.5

##### targetsPerAccessControlEntry

> `readonly` **targetsPerAccessControlEntry**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.6

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

#### accessControlEntryChanged

> `readonly` **accessControlEntryChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
Administrator.

  • Each added entry shall generate an event with ChangeType Added.

  • Each changed entry shall generate an event with ChangeType Changed.

  • Each removed entry shall generate an event with ChangeType Removed.

##### See

MatterSpecification.v11.Core § 9.10.7.1

#### accessControlExtensionChanged

> `readonly` **accessControlExtensionChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
changed by an Administrator.

  • Each added extension shall generate an event with ChangeType Added.

  • Each changed extension shall generate an event with ChangeType Changed.

  • Each removed extension shall generate an event with ChangeType Removed.

##### See

MatterSpecification.v11.Core § 9.10.7.2

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

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`31`, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

***

### name

> **name**: `"AccessControl"`

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

##### attributes.accessControlEntriesPerFabric

> `readonly` **accessControlEntriesPerFabric**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.7

##### attributes.acl

> `readonly` **acl**: [`WritableFabricScopedAttribute`](../../../interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

###### See

MatterSpecification.v11.Core § 9.10.5.3

##### attributes.extension

> `readonly` **extension**: [`OptionalWritableFabricScopedAttribute`](../../../interfaces/OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[], `any`\>

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

###### See

MatterSpecification.v11.Core § 9.10.5.4

##### attributes.subjectsPerAccessControlEntry

> `readonly` **subjectsPerAccessControlEntry**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.5

##### attributes.targetsPerAccessControlEntry

> `readonly` **targetsPerAccessControlEntry**: [`FixedAttribute`](../../../interfaces/FixedAttribute.md)\<`number`, `any`\>

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.6

##### events

> `readonly` **events**: `object`

##### events.accessControlEntryChanged

> `readonly` **accessControlEntryChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
Administrator.

  • Each added entry shall generate an event with ChangeType Added.

  • Each changed entry shall generate an event with ChangeType Changed.

  • Each removed entry shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.1

##### events.accessControlExtensionChanged

> `readonly` **accessControlExtensionChanged**: [`Event`](../../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>, `any`\>

The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
changed by an Administrator.

  • Each added extension shall generate an event with ChangeType Added.

  • Each changed extension shall generate an event with ChangeType Changed.

  • Each removed extension shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.2

##### id

> `readonly` **id**: `31`

##### name

> `readonly` **name**: `"AccessControl"`

##### revision

> `readonly` **revision**: `1`

#### Inherited from

`Identity.with`

#### Source

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
