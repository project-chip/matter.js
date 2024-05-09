[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).Cluster

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

MatterSpecification.v11.Core § 11.11

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.GeneralDiagnostics.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.GeneralDiagnostics.Cluster.md#attributes)
- [base](exports_cluster.GeneralDiagnostics.Cluster.md#base)
- [commands](exports_cluster.GeneralDiagnostics.Cluster.md#commands)
- [events](exports_cluster.GeneralDiagnostics.Cluster.md#events)
- [extensions](exports_cluster.GeneralDiagnostics.Cluster.md#extensions)
- [features](exports_cluster.GeneralDiagnostics.Cluster.md#features)
- [id](exports_cluster.GeneralDiagnostics.Cluster.md#id)
- [name](exports_cluster.GeneralDiagnostics.Cluster.md#name)
- [revision](exports_cluster.GeneralDiagnostics.Cluster.md#revision)
- [supportedFeatures](exports_cluster.GeneralDiagnostics.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.GeneralDiagnostics.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.GeneralDiagnostics.Cluster.md#alter)
- [enable](exports_cluster.GeneralDiagnostics.Cluster.md#enable)
- [set](exports_cluster.GeneralDiagnostics.Cluster.md#set)
- [with](exports_cluster.GeneralDiagnostics.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `testEventTrigger` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> | This command shall be supported to provide a means for certification tests to trigger some test- plan-specific events, necessary to assist in automation of device interactions for some certification test cases. This command shall NOT cause any changes to the state of the device that persist after the last fabric is removed. The fields for the TestEventTrigger command are as follows: **`See`** MatterSpecification.v11.Core § 11.11.7.1 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bootReason` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> | The BootReason Event shall indicate the reason that caused the device to start-up. **`See`** MatterSpecification.v11.Core § 11.11.8.4 |
| `hardwareFaultChange` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> | The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected by the Node. **`See`** MatterSpecification.v11.Core § 11.11.8.1 |
| `networkFaultChange` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> | The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by the Node. This field shall represent the set of faults currently detected, as per Section 11.11.4.3, “NetworkFaultEnum”. This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.3, “NetworkFaultEnum”. **`See`** MatterSpecification.v11.Core § 11.11.8.3 |
| `radioFaultChange` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\> | The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the Node. This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”. This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2, “RadioFaultEnum”. **`See`** MatterSpecification.v11.Core § 11.11.8.2 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``51``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"GeneralDiagnostics"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`InterfaceType`](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `enableKey`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](exports_tlv.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `bootReason`: [`FieldType`](exports_tlv.FieldType.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `current`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](exports_tlv.FieldType.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
