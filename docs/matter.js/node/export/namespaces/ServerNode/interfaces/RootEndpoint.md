[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [node/export](../../../README.md) / [ServerNode](../README.md) / RootEndpoint

# Interface: RootEndpoint

An identity type.

You can't do:

    interface Foo extends typeof Bar {}

But you can do:

    interface Foo extends Identity<typeof Bar> {}

Without this type you'd have to do:

    interface FooType = typeof Bar;
    interface Foo extends FooType {};

We have to do this a lot because we generate complex objects with detailed
type information.  When exported, TS (as of 5.2) inlines the type of these
objects in declarations which makes our declarations massive.  To avoid this
we create an interface from the type then cast to the interface for export.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`RootEndpoint`](../README.md#rootendpoint)\>

## Properties

### behaviors

> **behaviors**: `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `Omit`\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, `"network"` \| `"sessions"` \| `"commissioning"` \| `"productDescription"`\> & `object` & `object` & `object` & `object`

#### Type declaration

##### parts

> **parts**: *typeof* [`PartsBehavior`](../../../-internal-/classes/PartsBehavior.md)

#### Type declaration

##### index

> **index**: *typeof* [`IndexBehavior`](../../../-internal-/namespaces/IndexBehavior/README.md)

#### Type declaration

##### basicInformation

> **basicInformation**: *typeof* [`BasicInformationServer`](../../../../../behavior/definitions/basic-information/export/namespaces/BasicInformationServer/README.md)

#### Type declaration

##### accessControl

> **accessControl**: *typeof* [`AccessControlServer`](../../../../../behavior/definitions/access-control/export/namespaces/AccessControlServer/README.md)

#### Type declaration

##### groupKeyManagement

> **groupKeyManagement**: *typeof* [`GroupKeyManagementServer`](../../../../../behavior/definitions/group-key-management/export/classes/GroupKeyManagementServer.md)

#### Type declaration

##### generalCommissioning

> **generalCommissioning**: *typeof* [`GeneralCommissioningServer`](../../../../../behavior/definitions/general-commissioning/export/namespaces/GeneralCommissioningServer/README.md)

#### Type declaration

##### administratorCommissioning

> **administratorCommissioning**: *typeof* [`AdministratorCommissioningServer`](../../../../../behavior/definitions/administrator-commissioning/export/namespaces/AdministratorCommissioningServer/README.md)

#### Type declaration

##### operationalCredentials

> **operationalCredentials**: *typeof* [`OperationalCredentialsServer`](../../../../../behavior/definitions/operational-credentials/export/namespaces/OperationalCredentialsServer/README.md)

#### Type declaration

##### generalDiagnostics

> **generalDiagnostics**: *typeof* [`GeneralDiagnosticsServer`](../../../../../behavior/definitions/general-diagnostics/export/namespaces/GeneralDiagnosticsServer/README.md)

#### Type declaration

##### commissioning

> **commissioning**: *typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md)

#### Type declaration

##### network

> **network**: *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md)

#### Type declaration

##### productDescription

> **productDescription**: *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md)

#### Type declaration

##### sessions

> **sessions**: *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)

#### Inherited from

`Identity.behaviors`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

***

### defaults

> **defaults**: [`StateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#stateofsb)\<[`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>\>

Access default state values.

#### Inherited from

`Identity.defaults`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L89)

***

### deviceClass

> **deviceClass**: [`DeviceClasses`](../../../../../device/export/enumerations/DeviceClasses.md)

#### Inherited from

`Identity.deviceClass`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L51)

***

### deviceRevision

> **deviceRevision**: `number`

#### Inherited from

`Identity.deviceRevision`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L50)

***

### deviceType

> **deviceType**: [`DeviceTypeId`](../../../../../datatype/export/README.md#devicetypeid)

#### Inherited from

`Identity.deviceType`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L49)

***

### name

> **name**: `"RootNode"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

***

### requirements

> **requirements**: *typeof* [`RootRequirements`](../../../../../endpoint/definitions/system/RootEndpoint/namespaces/RootRequirements/README.md)

#### Inherited from

`Identity.requirements`

#### Source

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set()

> **set**(`defaults`): [`With`](../../../-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#inputstateofsb)\<[`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>\> |

#### Returns

[`With`](../../../-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

***

### with()

> **with**\<`BL`\>(...`behaviors`): [`With`](../../../-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<[`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>, `BL`\>\>

Define an endpoint like this one with additional and/or replacement server behaviors.

#### Type parameters

| Type parameter |
| :------ |
| `BL` *extends* [`List`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#list) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`behaviors` | `BL` |

#### Returns

[`With`](../../../-internal-/README.md#withbsb)\<[`For`](../../../../../behavior/cluster/export/-internal-/namespaces/EndpointType/README.md#fort)\<`object`\>, [`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<[`With`](../../../../../behavior/cluster/export/-internal-/namespaces/SupportedBehaviors/README.md#withcurrenttnewt)\<`object` & `object` & `object` & `object` & `object` & `object` & `object` & `object` & `object`, readonly [*typeof* [`CommissioningBehavior`](../../../-internal-/namespaces/CommissioningBehavior/README.md), *typeof* [`NetworkServer`](../../../-internal-/namespaces/NetworkServer/README.md), *typeof* [`ProductDescriptionServer`](../../../-internal-/namespaces/ProductDescriptionServer/README.md), *typeof* [`SessionsBehavior`](../../../-internal-/namespaces/SessionsBehavior/README.md)]\>, `BL`\>\>

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
