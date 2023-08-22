[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GeneralDiagnostics

# Namespace: GeneralDiagnostics

[cluster/export](cluster_export.md).GeneralDiagnostics

## Table of contents

### Enumerations

- [BootReason](../enums/cluster_export.GeneralDiagnostics.BootReason.md)
- [HardwareFault](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)
- [InterfaceType](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)
- [NetworkFault](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)
- [RadioFault](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)

### Variables

- [Cluster](cluster_export.GeneralDiagnostics.md#cluster)
- [TlvBootReasonEvent](cluster_export.GeneralDiagnostics.md#tlvbootreasonevent)
- [TlvHardwareFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)
- [TlvNetworkFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvNetworkInterface](cluster_export.GeneralDiagnostics.md#tlvnetworkinterface)
- [TlvRadioFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvradiofaultchangeevent)
- [TlvTestEventTriggerRequest](cluster_export.GeneralDiagnostics.md#tlvtesteventtriggerrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `activeHardwareFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](cluster_export.md#attribute)<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number` \| `bigint`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `testEventTrigger`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  }, { `bootReason`: [`Event`](cluster_export.md#event)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](cluster_export.md#optionalevent)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  }\>

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:418](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L418)

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>

Body of the GeneralDiagnostics bootReason event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:399](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L399)

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:355](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L355)

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:389](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L389)

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:64](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L64)

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:379](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L379)

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:302](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L302)
