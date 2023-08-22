[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / device/export

# Module: device/export

## Table of contents

### Enumerations

- [DeviceClasses](../enums/device_export.DeviceClasses.md)

### Classes

- [Aggregator](../classes/device_export.Aggregator.md)
- [ComposedDevice](../classes/device_export.ComposedDevice.md)
- [Device](../classes/device_export.Device.md)
- [DimmableLightDevice](../classes/device_export.DimmableLightDevice.md)
- [DimmablePluginUnitDevice](../classes/device_export.DimmablePluginUnitDevice.md)
- [Endpoint](../classes/device_export.Endpoint.md)
- [OnOffBaseDevice](../classes/device_export.OnOffBaseDevice.md)
- [OnOffLightDevice](../classes/device_export.OnOffLightDevice.md)
- [OnOffPluginUnitDevice](../classes/device_export.OnOffPluginUnitDevice.md)
- [PairedDevice](../classes/device_export.PairedDevice.md)
- [RootEndpoint](../classes/device_export.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/device_export.DeviceTypeDefinition.md)
- [EndpointOptions](../interfaces/device_export.EndpointOptions.md)

### Variables

- [DeviceTypes](device_export.md#devicetypes)

### Functions

- [DeviceTypeDefinition](device_export.md#devicetypedefinition)
- [UnknownDeviceType](device_export.md#unknowndevicetype)
- [WrapCommandHandler](device_export.md#wrapcommandhandler)
- [getClusterInitialAttributeValues](device_export.md#getclusterinitialattributevalues)
- [getDeviceTypeDefinitionByCode](device_export.md#getdevicetypedefinitionbycode)

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L113)

## Functions

### DeviceTypeDefinition

▸ **DeviceTypeDefinition**(`«destructured»`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code` | `number` |
| › `deviceClass` | [`DeviceClasses`](../enums/device_export.DeviceClasses.md) |
| › `name` | `string` |
| › `optionalClientClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `optionalServerClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `requiredClientClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `requiredServerClusters?` | [`ClusterId`](datatype_export.md#clusterid)[] |
| › `revision` | `number` |
| › `superSet?` | `string` |
| › `unknown?` | `boolean` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L78)

___

### UnknownDeviceType

▸ **UnknownDeviceType**(`code`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:974](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L974)

___

### WrapCommandHandler

▸ **WrapCommandHandler**<`C`\>(`handler`, `commandHandler?`): [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)<`C`\>

Utility function to wrap externally registered command handlers into the internal command handler and make sure
the custom ones are used if defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`, `C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)<`C`\> | Internal handlers instance to wrap the external handler into |
| `commandHandler?` | [`NamedHandler`](../classes/export._internal_.NamedHandler.md)<`any`\> | Command handler instance with the registered handlers |

#### Returns

[`ClusterServerHandlers`](cluster_export.md#clusterserverhandlers)<`C`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L28)

___

### getClusterInitialAttributeValues

▸ **getClusterInitialAttributeValues**<`F`, `SF`, `A`, `C`, `E`\>(`attributeInitialValues`, `cluster`): [`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)<`A`\> \| `undefined`

Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
for multiple clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues` | `undefined` \| { `[key: ClusterId]`: [`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)<`any`\>;  } | Object with initial attribute values for automatically added clusters |
| `cluster` | [`Cluster`](cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | Cluster to get the initial attribute values for |

#### Returns

[`AttributeInitialValues`](cluster_export.md#attributeinitialvalues)<`A`\> \| `undefined`

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L36)

___

### getDeviceTypeDefinitionByCode

▸ **getDeviceTypeDefinitionByCode**(`code`): [`DeviceTypeDefinition`](device_export.md#devicetypedefinition) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](device_export.md#devicetypedefinition) \| `undefined`

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:983](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L983)
