[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/client-monitoring/export](../modules/behavior_definitions_client_monitoring_export.md) / [ClientMonitoringInterface](../modules/behavior_definitions_client_monitoring_export.ClientMonitoringInterface.md) / Base

# Interface: Base

[behavior/definitions/client-monitoring/export](../modules/behavior_definitions_client_monitoring_export.md).[ClientMonitoringInterface](../modules/behavior_definitions_client_monitoring_export.ClientMonitoringInterface.md).Base

## Table of contents

### Methods

- [registerClientMonitoring](behavior_definitions_client_monitoring_export.ClientMonitoringInterface.Base.md#registerclientmonitoring)
- [stayAwakeRequest](behavior_definitions_client_monitoring_export.ClientMonitoringInterface.Base.md#stayawakerequest)
- [unregisterClientMonitoring](behavior_definitions_client_monitoring_export.ClientMonitoringInterface.Base.md#unregisterclientmonitoring)

## Methods

### registerClientMonitoring

▸ **registerClientMonitoring**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:18](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L18)

___

### stayAwakeRequest

▸ **stayAwakeRequest**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:20](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L20)

___

### unregisterClientMonitoring

▸ **unregisterClientMonitoring**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Defined in

[packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts:19](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/client-monitoring/ClientMonitoringInterface.ts#L19)
