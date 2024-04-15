[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/system/OtaRequestorEndpoint

# Module: endpoint/definitions/system/OtaRequestorEndpoint

## Table of contents

### Namespaces

- [OtaRequestorRequirements](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md)

### Interfaces

- [OtaRequestorEndpoint](../interfaces/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md)

### Variables

- [OtaRequestorEndpoint](endpoint_definitions_system_OtaRequestorEndpoint.md#otarequestorendpoint)
- [OtaRequestorEndpointDefinition](endpoint_definitions_system_OtaRequestorEndpoint.md#otarequestorendpointdefinition)

## Variables

### OtaRequestorEndpoint

• **OtaRequestorEndpoint**: [`OtaRequestorEndpoint`](../interfaces/endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorEndpoint.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L25)

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L62)

___

### OtaRequestorEndpointDefinition

• `Const` **OtaRequestorEndpointDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``18`` = 0x12; `name`: ``"OtaRequestor"`` = "OtaRequestor"; `requirements`: typeof [`OtaRequestorRequirements`](endpoint_definitions_system_OtaRequestorEndpoint.OtaRequestorRequirements.md) = OtaRequestorRequirements }\>, \{ `otaSoftwareUpdateRequestor`: typeof [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaRequestorEndpoint.ts#L53)
