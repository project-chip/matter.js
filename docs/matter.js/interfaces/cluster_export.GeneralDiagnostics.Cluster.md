[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).Cluster

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

MatterSpecification.v11.Core § 11.11

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.GeneralDiagnostics.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.GeneralDiagnostics.Cluster.md#attributes)
- [base](cluster_export.GeneralDiagnostics.Cluster.md#base)
- [commands](cluster_export.GeneralDiagnostics.Cluster.md#commands)
- [events](cluster_export.GeneralDiagnostics.Cluster.md#events)
- [extensions](cluster_export.GeneralDiagnostics.Cluster.md#extensions)
- [features](cluster_export.GeneralDiagnostics.Cluster.md#features)
- [id](cluster_export.GeneralDiagnostics.Cluster.md#id)
- [name](cluster_export.GeneralDiagnostics.Cluster.md#name)
- [revision](cluster_export.GeneralDiagnostics.Cluster.md#revision)
- [supportedFeatures](cluster_export.GeneralDiagnostics.Cluster.md#supportedfeatures)
- [unknown](cluster_export.GeneralDiagnostics.Cluster.md#unknown)

### Methods

- [alter](cluster_export.GeneralDiagnostics.Cluster.md#alter)
- [enable](cluster_export.GeneralDiagnostics.Cluster.md#enable)
- [set](cluster_export.GeneralDiagnostics.Cluster.md#set)
- [with](cluster_export.GeneralDiagnostics.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `testEventTrigger` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> | This command shall be supported to provide a means for certification tests to trigger some test- plan-specific events, necessary to assist in automation of device interactions for some certification test cases. This command shall NOT cause any changes to the state of the device that persist after the last fabric is removed. The fields for the TestEventTrigger command are as follows: **`See`** MatterSpecification.v11.Core § 11.11.7.1 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bootReason` | [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> | The BootReason Event shall indicate the reason that caused the device to start-up. **`See`** MatterSpecification.v11.Core § 11.11.8.4 |
| `hardwareFaultChange` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> | The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected by the Node. **`See`** MatterSpecification.v11.Core § 11.11.8.1 |
| `networkFaultChange` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> | The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by the Node. This field shall represent the set of faults currently detected, as per Section 11.11.4.3, “NetworkFaultEnum”. This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.3, “NetworkFaultEnum”. **`See`** MatterSpecification.v11.Core § 11.11.8.3 |
| `radioFaultChange` | [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\> | The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the Node. This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”. This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2, “RadioFaultEnum”. **`See`** MatterSpecification.v11.Core § 11.11.8.2 |

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``51``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"GeneralDiagnostics"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
