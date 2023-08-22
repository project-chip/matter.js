[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/device

# Module: exports/device

## Table of contents

### Enumerations

- [DeviceClasses](../enums/exports_device.DeviceClasses.md)

### Classes

- [Aggregator](../classes/exports_device.Aggregator.md)
- [ComposedDevice](../classes/exports_device.ComposedDevice.md)
- [Device](../classes/exports_device.Device.md)
- [DimmableLightDevice](../classes/exports_device.DimmableLightDevice.md)
- [DimmablePluginUnitDevice](../classes/exports_device.DimmablePluginUnitDevice.md)
- [Endpoint](../classes/exports_device.Endpoint.md)
- [OnOffBaseDevice](../classes/exports_device.OnOffBaseDevice.md)
- [OnOffLightDevice](../classes/exports_device.OnOffLightDevice.md)
- [OnOffPluginUnitDevice](../classes/exports_device.OnOffPluginUnitDevice.md)
- [PairedDevice](../classes/exports_device.PairedDevice.md)
- [RootEndpoint](../classes/exports_device.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/exports_device.DeviceTypeDefinition.md)
- [EndpointOptions](../interfaces/exports_device.EndpointOptions.md)

### Variables

- [DeviceTypes](exports_device.md#devicetypes)

### Functions

- [DeviceTypeDefinition](exports_device.md#devicetypedefinition)
- [UnknownDeviceType](exports_device.md#unknowndevicetype)
- [WrapCommandHandler](exports_device.md#wrapcommandhandler)
- [getClusterInitialAttributeValues](exports_device.md#getclusterinitialattributevalues)
- [getDeviceTypeDefinitionByCode](exports_device.md#getdevicetypedefinitionbycode)

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:74

## Functions

### DeviceTypeDefinition

▸ **DeviceTypeDefinition**(`«destructured»`): [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code` | `number` |
| › `deviceClass` | [`DeviceClasses`](../enums/exports_device.DeviceClasses.md) |
| › `name` | `string` |
| › `optionalClientClusters?` | [`ClusterId`](exports_datatype.md#clusterid)[] |
| › `optionalServerClusters?` | [`ClusterId`](exports_datatype.md#clusterid)[] |
| › `requiredClientClusters?` | [`ClusterId`](exports_datatype.md#clusterid)[] |
| › `requiredServerClusters?` | [`ClusterId`](exports_datatype.md#clusterid)[] |
| › `revision` | `number` |
| › `superSet?` | `string` |
| › `unknown?` | `boolean` |

#### Returns

[`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:62

___

### UnknownDeviceType

▸ **UnknownDeviceType**(`code`): [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:77

___

### WrapCommandHandler

▸ **WrapCommandHandler**<`C`\>(`handler`, `commandHandler?`): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<`C`\>

Utility function to wrap externally registered command handlers into the internal command handler and make sure
the custom ones are used if defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](exports_cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`, `C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<`C`\> | Internal handlers instance to wrap the external handler into |
| `commandHandler?` | [`NamedHandler`](../classes/export._internal_.NamedHandler.md)<`any`\> | Command handler instance with the registered handlers |

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)<`C`\>

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:23

___

### getClusterInitialAttributeValues

▸ **getClusterInitialAttributeValues**<`F`, `SF`, `A`, `C`, `E`\>(`attributeInitialValues`, `cluster`): [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)<`A`\> \| `undefined`

Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
for multiple clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues` | `undefined` \| { `[key: ClusterId]`: [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)<`any`\>;  } | Object with initial attribute values for automatically added clusters |
| `cluster` | [`Cluster`](exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | Cluster to get the initial attribute values for |

#### Returns

[`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)<`A`\> \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:27

___

### getDeviceTypeDefinitionByCode

▸ **getDeviceTypeDefinitionByCode**(`code`): [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](exports_device.md#devicetypedefinition) \| `undefined`

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:78
