[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/operational-credentials/export](../README.md) / OperationalCredentialsServer

# Class: OperationalCredentialsServer

This is the default server implementation of OperationalCredentialsBehavior.

TODO - currently "source of truth" for fabric data is persisted by FabricManager.  If we remove some legacy code
paths we can move source of truth to here.  Right now we just sync fabrics with MatterDevice.  This sync is only as
comprehensive as required by current use cases.  If fabrics are mutated directly on MatterDevice then this code will
require update.

## Extends

- [`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md)

## Constructors

### new OperationalCredentialsServer()

> **new OperationalCredentialsServer**(`agent`, `backing`): [`OperationalCredentialsServer`](OperationalCredentialsServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `agent` | [`Agent`](../../../../../endpoint/export/classes/Agent.md) |
| `backing` | [`BehaviorBacking`](../../../../cluster/export/-internal-/classes/BehaviorBacking.md) |

#### Returns

[`OperationalCredentialsServer`](OperationalCredentialsServer.md)

#### Inherited from

`OperationalCredentialsBehavior.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`#agent`](../interfaces/OperationalCredentialsBehavior.md##agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`[reference]`](../interfaces/OperationalCredentialsBehavior.md#%5Breference%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`agent`](../interfaces/OperationalCredentialsBehavior.md#agent)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`cluster`](../interfaces/OperationalCredentialsBehavior.md#cluster)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`context`](../interfaces/OperationalCredentialsBehavior.md#context)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`endpoint`](../interfaces/OperationalCredentialsBehavior.md#endpoint)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### commissionedFabrics$Changing

> **commissionedFabrics$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentFabricIndex$Changing

> **currentFabricIndex$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`FabricIndex`](../../../../../datatype/export/README.md#fabricindex), `any`\>\>

##### fabrics$Changing

> **fabrics$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### nocs$Changing

> **nocs$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### supportedFabrics$Changing

> **supportedFabrics$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### trustedRootCertificates$Changing

> **trustedRootCertificates$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`Uint8Array`[], `any`\>\>

#### Type declaration

##### commissionedFabrics$Changed

> **commissionedFabrics$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`number`, `any`\>\>

##### currentFabricIndex$Changed

> **currentFabricIndex$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<[`FabricIndex`](../../../../../datatype/export/README.md#fabricindex), `any`\>\>

##### fabrics$Changed

> **fabrics$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### nocs$Changed

> **nocs$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### supportedFabrics$Changed

> **supportedFabrics$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### trustedRootCertificates$Changed

> **trustedRootCertificates$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`Attribute`](../../../../../cluster/export/interfaces/Attribute.md)\<`Uint8Array`[], `any`\>\>

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`events`](../interfaces/OperationalCredentialsBehavior.md#events)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`features`](../interfaces/OperationalCredentialsBehavior.md#features)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### internal

> **internal**: [`Internal`](../namespaces/OperationalCredentialsServer/classes/Internal.md)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L83)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`session`](../interfaces/OperationalCredentialsBehavior.md#session)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> **state**: [`State`](../namespaces/OperationalCredentialsServer/classes/State.md)

Access the behavior's state.

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`state`](../interfaces/OperationalCredentialsBehavior.md#state)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L84)

***

### Events

> `static` `readonly` **Events**: [`Type`](../../../../cluster/export/namespaces/ClusterEvents/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/OperationalCredentials/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`OperationalCredentialsInterface`](../README.md#operationalcredentialsinterface)\>\>

#### Inherited from

`OperationalCredentialsBehavior.Events`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

***

### ExtensionInterface

> `static` `readonly` **ExtensionInterface**: `object`

#### Inherited from

`OperationalCredentialsBehavior.ExtensionInterface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

***

### Interface

> `static` `readonly` **Interface**: [`OperationalCredentialsInterface`](../README.md#operationalcredentialsinterface)

#### Inherited from

`OperationalCredentialsBehavior.Interface`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

***

### cluster

> `static` `readonly` **cluster**: [`Cluster`](../../../../../cluster/export/namespaces/OperationalCredentials/interfaces/Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

`OperationalCredentialsBehavior.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

***

### defaults

> `static` `readonly` **defaults**: [`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Cluster`](../../../../../cluster/export/namespaces/OperationalCredentials/interfaces/Cluster.md), [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md), [`OperationalCredentialsInterface`](../README.md#operationalcredentialsinterface)\>\>

#### Inherited from

`OperationalCredentialsBehavior.defaults`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

***

### dependencies?

> `static` `optional` `readonly` **dependencies**: `Iterable`\<[`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md)\>

#### Inherited from

`OperationalCredentialsBehavior.dependencies`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

***

### early

> `static` `readonly` **early**: `boolean`

#### Inherited from

`OperationalCredentialsBehavior.early`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

***

### id

> `static` `readonly` **id**: `"operationalCredentials"`

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

`OperationalCredentialsBehavior.id`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

***

### name

> `static` `readonly` **name**: `string`

#### Inherited from

`OperationalCredentialsBehavior.name`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

***

### schema?

> `static` `optional` `readonly` **schema**: [`Schema`](../../../../cluster/export/-internal-/README.md#schema)

#### Inherited from

`OperationalCredentialsBehavior.schema`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

***

### supervisor

> `static` `readonly` **supervisor**: [`RootSupervisor`](../../../../cluster/export/-internal-/classes/RootSupervisor.md)

#### Inherited from

`OperationalCredentialsBehavior.supervisor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

***

### supports()

> `static` **supports**: (`other`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `other` | [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`boolean`

#### Inherited from

`OperationalCredentialsBehavior.supports`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #handleAddedFabric()

> `private` **#handleAddedFabric**(`__namedParameters`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:462](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L462)

***

### #handleRemovedFabric()

> `private` **#handleRemovedFabric**(`__namedParameters`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L472)

***

### #handleUpdatedFabric()

> `private` **#handleUpdatedFabric**(`__namedParameters`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L467)

***

### #mapNocErrors()

> `private` **#mapNocErrors**(`error`): [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

##### debugText

> **debugText**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
contents may go into logs or crash reports.

###### See

MatterSpecification.v11.Core § 11.17.6.10.3

##### fabricIndex

> **fabricIndex**: [`OptionalFieldType`](../../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)\>

This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
Index of the Fabric last added, removed or updated.

###### See

MatterSpecification.v11.Core § 11.17.6.10.2

##### statusCode

> **statusCode**: [`FieldType`](../../../../../tlv/export/interfaces/FieldType.md)\<[`NodeOperationalCertStatus`](../../../../../cluster/export/namespaces/OperationalCredentials/enumerations/NodeOperationalCertStatus.md)\>

This field shall contain an NOCStatus value representing the status of an operation involving a NOC.

###### See

MatterSpecification.v11.Core § 11.17.6.10.1

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L160)

***

### #nodeOnline()

> `private` **#nodeOnline**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:477](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L477)

***

### #updateFabrics()

> `private` **#updateFabrics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:424](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L424)

***

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`[asyncDispose]`](../interfaces/OperationalCredentialsBehavior.md#%5Basyncdispose%5D)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### addNoc()

> **addNoc**(`__namedParameters`): `Promise`\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command shall add a new NOC chain to the device and commission a new Fabric association upon successful
validation of all arguments and preconditions.

The new value shall immediately be reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`addNoc`](../interfaces/OperationalCredentialsBehavior.md#addnoc)

#### See

MatterSpecification.v11.Core § 11.17.6.8

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:194](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L194)

***

### addTrustedRootCertificate()

> **addTrustedRootCertificate**(`__namedParameters`): `void`

This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC command
executed uses the provided certificate as its root of trust.

If the certificate from the RootCACertificate field is already installed, based on exact byte-for-byte
equality, then this command shall succeed with no change to the list.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
which would cause the new invocation to add a second root certificate within a given fail- safe timer
period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
value, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator.

Note that the only method of removing a trusted root is by removing the Fabric that uses it as its root of
trust using the RemoveFabric command.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`addTrustedRootCertificate`](../interfaces/OperationalCredentialsBehavior.md#addtrustedrootcertificate)

#### See

MatterSpecification.v11.Core § 11.17.6.13

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:392](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L392)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`asAdmin`](../interfaces/OperationalCredentialsBehavior.md#asadmin)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`assertAttributeEnabled`](../interfaces/OperationalCredentialsBehavior.md#assertattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### attestationRequest()

> **attestationRequest**(`__namedParameters`): `Promise`\<`object`\>

This command shall be generated to request the Attestation Information, in the form of an
AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a

recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall be
used in the computation of the Attestation Information.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### attestationElements

> **attestationElements**: `Uint8Array` = `elements`

##### attestationSignature

> **attestationSignature**: `Uint8Array`

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`attestationRequest`](../interfaces/OperationalCredentialsBehavior.md#attestationrequest)

#### See

MatterSpecification.v11.Core § 11.17.6.1

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L96)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`callback`](../interfaces/OperationalCredentialsBehavior.md#callback)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### certificateChainRequest()

> **certificateChainRequest**(`__namedParameters`): `Promise`\<`object`\>

If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail with a
Status Code of INVALID_COMMAND.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### certificate

> **certificate**: `Uint8Array` = `certification.certificate`

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`certificateChainRequest`](../interfaces/OperationalCredentialsBehavior.md#certificatechainrequest)

#### See

MatterSpecification.v11.Core § 11.17.6.3

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L144)

***

### csrRequest()

> **csrRequest**(`__namedParameters`): `Promise`\<`object`\>

This command shall be generated to execute the Node Operational CSR Procedure and subsequently return the
NOCSR Information, in the form of a CSRResponse Command.

The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is malformed,
then this command shall fail with an INVALID_COMMAND status code.

If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE session,
the command shall fail with an INVALID_COMMAND status code, as it would never be possible to use a resulting
subsequent certificate issued from the CSR with the UpdateNOC command, which is forbidden over PASE sessions.

If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated keypair
shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR shall be tagged
as being for a subsequent AddNOC. See Section 11.17.6.8, “AddNOC Command” and Section 11.17.6.9, “UpdateNOC
Command” for details about the processing.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is found
to collide with an existing key pair already previously generated and installed, and that check had been
executed, then this command shall fail with a FAILURE status code sent back to the initiator.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### attestationSignature

> **attestationSignature**: `Uint8Array`

##### nocsrElements

> **nocsrElements**: `Uint8Array`

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`csrRequest`](../interfaces/OperationalCredentialsBehavior.md#csrrequest)

#### See

MatterSpecification.v11.Core § 11.17.6.5

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L114)

***

### getCertification()

> **getCertification**(): `Promise`\<[`DeviceCertification`](../-internal-/classes/DeviceCertification.md)\>

#### Returns

`Promise`\<[`DeviceCertification`](../-internal-/classes/DeviceCertification.md)\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:448](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L448)

***

### initialize()

> **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`initialize`](../interfaces/OperationalCredentialsBehavior.md#initialize)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L86)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`reactTo`](../interfaces/OperationalCredentialsBehavior.md#reactto)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### removeFabric()

> **removeFabric**(`__namedParameters`): `Promise`\<`object` \| `object`\>

This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped data.

If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate stored in
the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed.

WARNING

This command, if referring to an already existing Fabric not under the control of the invoking
Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some method
executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ as much data
as possible about the existing Fabric associations within the Fabrics list, so that likelihood is as small
as possible of a user removing a Fabric unwittingly. If a method exists for an Administrator or Commissioner
to convey Fabric Removal to an entity related to that Fabric, whether in-band or out-of-band, then this
method SHOULD be used to notify the other Administrative Domain’s party of the removal. Otherwise, users may
only observe the removal of a Fabric association as persistently failing attempts to reach a Node
operationally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object` \| `object`\>

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`removeFabric`](../interfaces/OperationalCredentialsBehavior.md#removefabric)

#### See

MatterSpecification.v11.Core § 11.17.6.12

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:371](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L371)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`requireAttributeEnabled`](../interfaces/OperationalCredentialsBehavior.md#requireattributeenabled)

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`toString`](../interfaces/OperationalCredentialsBehavior.md#tostring)

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)

***

### updateFabricLabel()

> **updateFabricLabel**(`__namedParameters`): `Promise`\<`object` \| `object`\>

This command shall be used by an Administrator to set the user-visible Label field for a given Fabric, as
reflected by entries in the Fabrics attribute.

The Label SHOULD be used by Administrators to provide additional per-fabric context when operations such as
RemoveFabric are used.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object` \| `object`\>

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`updateFabricLabel`](../interfaces/OperationalCredentialsBehavior.md#updatefabriclabel)

#### See

MatterSpecification.v11.Core § 11.17.6.11

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L351)

***

### updateNoc()

> **updateNoc**(`__namedParameters`): `Promise`\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command shall replace the NOC and optional associated ICAC (if present) scoped under the accessing
fabric upon successful validation of all arguments and preconditions. The new value shall immediately be
reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

Effect When Received

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, since the only
valid following logical operation is invoking the AddNOC command.

If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as false, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If any of the following conditions arise, the Node shall process an error by responding with an NOCResponse
with a StatusCode of InvalidNOC as described in Section 11.17.6.7.2, “Handling Errors”:

  • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with the
    accessing fabric.

  • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not match the
    FabricID associated with the accessing fabric.

Otherwise, the command is considered an update of existing credentials for a given Fabric, and the following
shall apply:

  1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated to match
     the incoming NOCValue and ICACValue (if present), such that the Node’s Operational Identifier within
     the Fabric immediately changes.

    a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the
       prior CSRRequest command, shall be committed to permanent storage, for subsequent use during CASE.

    b. The operational discovery service record shall immediately reflect the new Operational Identifier.

    c. All internal data reflecting the prior operational identifier of the Node within the Fabric shall be
       revoked and removed, to an outcome equivalent to the disappearance of the prior Node, except for the
       ongoing CASE session context, which shall temporarily remain valid until the NOCResponse has been
       successfully delivered or until the next transport-layer error, so that the response can be received
       by the Administrator invoking the command.

Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
matching the FabricIndex under which the updated NOC is scoped.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Overrides

[`OperationalCredentialsBehavior`](../interfaces/OperationalCredentialsBehavior.md).[`updateNoc`](../interfaces/OperationalCredentialsBehavior.md#updatenoc)

#### See

MatterSpecification.v11.Core § 11.17.6.9

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:295](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L295)

***

### alter()

> `static` **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `AlterationsT` *extends* [`Alterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#alterationsoriginalt)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], `AlterationsT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`OperationalCredentialsBehavior.alter`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

***

### enable()

> `static` **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FlagsT` *extends* [`ElementFlags`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagsclustert)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#withalterationstalterationst)\<`This`\[`"cluster"`\], [`ElementFlagAlterations`](../../../../../cluster/export/namespaces/ElementModifier/README.md#elementflagalterationst)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`OperationalCredentialsBehavior.enable`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

***

### for()

> `static` **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema`?): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `ClusterT` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema`? | [`Schema`](../../../../cluster/export/-internal-/README.md#schema) |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`OperationalCredentialsBehavior.for`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

***

### set()

> `static` **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<`InstanceType`\<`This`\[`"State"`\]\>\>\> |

#### Returns

`This`

#### Inherited from

`OperationalCredentialsBehavior.set`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

***

### with()

> `static` **with**\<`This`, `FeaturesT`\>(`this`, ...`features`): [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md), [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md), [`ClusterInterface`](../../../../cluster/export/README.md#clusterinterfacef)\<`object`\>\> |
| `FeaturesT` *extends* [`FeatureSelection`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#featureselectiont)\<`This`\[`"cluster"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| ...`features` | `FeaturesT` |

#### Returns

[`Type`](../../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`WithFeatures`](../../../../../cluster/export/namespaces/ClusterComposer/README.md#withfeaturesclustertfeaturest)\<`This`\[`"cluster"`\], `FeaturesT`\>, `This`, [`InterfaceOf`](../../../../cluster/export/namespaces/ClusterInterface/README.md#interfaceofb)\<`This`\>\>

#### Inherited from

`OperationalCredentialsBehavior.with`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
