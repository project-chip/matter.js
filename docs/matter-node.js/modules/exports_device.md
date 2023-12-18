[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/device

# Module: exports/device

## Table of contents

### Enumerations

- [DeviceClasses](../enums/exports_device.DeviceClasses.md)
- [NodeStateInformation](../enums/exports_device.NodeStateInformation.md)

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
- [PairedNode](../classes/exports_device.PairedNode.md)
- [RootEndpoint](../classes/exports_device.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/exports_device.DeviceTypeDefinition.md)
- [EndpointOptions](../interfaces/exports_device.EndpointOptions.md)

### Type Aliases

- [CommissioningControllerNodeOptions](exports_device.md#commissioningcontrollernodeoptions)
- [EndpointLoggingOptions](exports_device.md#endpointloggingoptions)

### Variables

- [DeviceTypes](exports_device.md#devicetypes)

### Functions

- [DeviceTypeDefinition](exports_device.md#devicetypedefinition)
- [UnknownDeviceType](exports_device.md#unknowndevicetype)
- [WrapCommandHandler](exports_device.md#wrapcommandhandler)
- [getClusterInitialAttributeValues](exports_device.md#getclusterinitialattributevalues)
- [getDeviceTypeDefinitionByCode](exports_device.md#getdevicetypedefinitionbycode)
- [logEndpoint](exports_device.md#logendpoint)

## Type Aliases

### CommissioningControllerNodeOptions

Ƭ **CommissioningControllerNodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeChangedCallback?` | (`nodeId`: [`NodeId`](exports_datatype.md#nodeid), `data`: [`DecodedAttributeReportValue`](exports_interaction.md#decodedattributereportvalue)\<`any`\>) => `void` | Optional additional callback method which is called for each Attribute change reported by the device. Use this if subscribing to all relevant attributes is too much effort. |
| `autoSubscribe?` | `boolean` | Unless set to false all events and attributes are subscribed and value changes are reflected in the ClusterClient instances. With this reading attributes values is mostly looked up in the locally cached data. Additionally more features like reaction on shutdown event or endpoint structure changes (for bridges) are done internally automatically. |
| `eventTriggeredCallback?` | (`nodeId`: [`NodeId`](exports_datatype.md#nodeid), `data`: [`DecodedEventReportValue`](exports_interaction.md#decodedeventreportvalue)\<`any`\>) => `void` | Optional additional callback method which is called for each Event reported by the device. Use this if subscribing to all relevant events is too much effort. |
| `stateInformationCallback?` | (`nodeId`: [`NodeId`](exports_datatype.md#nodeid), `state`: [`NodeStateInformation`](../enums/exports_device.NodeStateInformation.md)) => `void` | Optional callback method which is called when the state of the node changes. This can be used to detect when the node goes offline or comes back online. |
| `subscribeMaxIntervalCeilingSeconds?` | `number` | Maximum subscription interval when values are changed. This is also used as a keepalive mechanism to validate that the device is still available. Default it is set to 30s. |
| `subscribeMinIntervalFloorSeconds?` | `number` | Minimum subscription interval when values are changed. Default it is set to 0s. |

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:43

___

### EndpointLoggingOptions

Ƭ **EndpointLoggingOptions**: `Object`

Options for logging endpoint structure. The default is that anything is logged beside "Non Supported" attributes and
events on ClusterClients. The Filter methods can be used to filter out specific endpoints or clusters if wanted.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clusterClientFilter?` | (`endpoint`: [`Endpoint`](../classes/exports_device.Endpoint.md), `cluster`: [`ClusterClientObj`](exports_cluster.md#clusterclientobj)\<`any`, `any`, `any`, `any`\>) => `boolean` |
| `clusterServerFilter?` | (`endpoint`: [`Endpoint`](../classes/exports_device.Endpoint.md), `cluster`: [`ClusterServerObj`](exports_cluster.md#clusterserverobj)\<`any`, `any`\>) => `boolean` |
| `endpointFilter?` | (`endpoint`: [`Endpoint`](../classes/exports_device.Endpoint.md)) => `boolean` |
| `logAttributeObjectValues?` | `boolean` |
| `logAttributePrimitiveValues?` | `boolean` |
| `logChildEndpoints?` | `boolean` |
| `logClusterAttributes?` | `boolean` |
| `logClusterClients?` | `boolean` |
| `logClusterCommands?` | `boolean` |
| `logClusterEvents?` | `boolean` |
| `logClusterGlobalAttributes?` | `boolean` |
| `logClusterServers?` | `boolean` |
| `logNotSupportedClusterAttributes?` | `boolean` |
| `logNotSupportedClusterCommands?` | `boolean` |
| `logNotSupportedClusterEvents?` | `boolean` |

#### Defined in

packages/matter.js/dist/esm/device/EndpointStructureLogger.d.ts:13

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:74

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

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:62

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

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:77

___

### WrapCommandHandler

▸ **WrapCommandHandler**\<`C`\>(`handler`, `commandHandler?`): [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<`C`\>

Utility function to wrap externally registered command handlers into the internal command handler and make sure
the custom ones are used if defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](exports_cluster.md#cluster)\<`any`, `any`, `any`, `any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<`C`\> | Internal handlers instance to wrap the external handler into |
| `commandHandler?` | [`NamedHandler`](../classes/util_export.NamedHandler.md)\<`any`\> | Command handler instance with the registered handlers |

#### Returns

[`ClusterServerHandlers`](exports_cluster.md#clusterserverhandlers)\<`C`\>

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:23

___

### getClusterInitialAttributeValues

▸ **getClusterInitialAttributeValues**\<`F`, `SF`, `A`, `C`, `E`\>(`attributeInitialValues`, `cluster`): [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)\<`A`\> \| `undefined`

Utility function to get the initial attribute values for a cluster out of an object with initial attribute values
for multiple clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues` | `undefined` \| \{ `[key: ClusterId]`: [`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)\<`any`\>;  } | Object with initial attribute values for automatically added clusters |
| `cluster` | [`Cluster`](exports_cluster.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> | Cluster to get the initial attribute values for |

#### Returns

[`AttributeInitialValues`](exports_cluster.md#attributeinitialvalues)\<`A`\> \| `undefined`

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:27

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

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:78

___

### logEndpoint

▸ **logEndpoint**(`endpoint`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../classes/exports_device.Endpoint.md) |
| `options?` | [`EndpointLoggingOptions`](exports_device.md#endpointloggingoptions) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/EndpointStructureLogger.d.ts:30
