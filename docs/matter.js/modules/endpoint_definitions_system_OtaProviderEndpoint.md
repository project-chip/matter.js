[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/system/OtaProviderEndpoint

# Module: endpoint/definitions/system/OtaProviderEndpoint

## Table of contents

### Namespaces

- [OtaProviderRequirements](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md)

### Interfaces

- [OtaProviderEndpoint](../interfaces/endpoint_definitions_system_OtaProviderEndpoint.OtaProviderEndpoint.md)

### Variables

- [OtaProviderEndpoint](endpoint_definitions_system_OtaProviderEndpoint.md#otaproviderendpoint)
- [OtaProviderEndpointDefinition](endpoint_definitions_system_OtaProviderEndpoint.md#otaproviderendpointdefinition)

## Variables

### OtaProviderEndpoint

• **OtaProviderEndpoint**: [`OtaProviderEndpoint`](../interfaces/endpoint_definitions_system_OtaProviderEndpoint.OtaProviderEndpoint.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L25)

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L65)

___

### OtaProviderEndpointDefinition

• `Const` **OtaProviderEndpointDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `otaSoftwareUpdateProvider`: typeof [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)  } ; `deviceClass`: [`Utility`](../enums/device_export.DeviceClasses.md#utility) = DeviceClasses.Utility; `deviceRevision`: ``1`` = 1; `deviceType`: ``20`` = 0x14; `name`: ``"OtaProvider"`` = "OtaProvider"; `requirements`: typeof [`OtaProviderRequirements`](endpoint_definitions_system_OtaProviderEndpoint.OtaProviderRequirements.md) = OtaProviderRequirements }\>, \{ `otaSoftwareUpdateProvider`: typeof [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/OtaProviderEndpoint.ts#L56)
