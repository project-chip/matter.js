[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/device

# Module: exports/device

## Table of contents

### Enumerations

- [DeviceClasses](../enums/exports_device.DeviceClasses.md)

### Classes

- [Aggregator](../classes/exports_device.Aggregator.md)
- [ComposedDevice](../classes/exports_device.ComposedDevice.md)
- [Device](../classes/exports_device.Device.md)
- [Endpoint](../classes/exports_device.Endpoint.md)
- [OnOffLightDevice](../classes/exports_device.OnOffLightDevice.md)
- [OnOffPluginUnitDevice](../classes/exports_device.OnOffPluginUnitDevice.md)
- [PairedDevice](../classes/exports_device.PairedDevice.md)
- [RootEndpoint](../classes/exports_device.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/exports_device.DeviceTypeDefinition.md)

### Variables

- [DeviceTypes](exports_device.md#devicetypes)

### Functions

- [DeviceTypeDefinition](exports_device.md#devicetypedefinition)
- [getDeviceTypeDefinitionByCode](exports_device.md#getdevicetypedefinitionbycode)

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:70

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
| › `optionalClientClusters?` | `number`[] |
| › `optionalServerClusters?` | `number`[] |
| › `requiredClientClusters?` | `number`[] |
| › `requiredServerClusters?` | `number`[] |
| › `revision` | `number` |
| › `superSet?` | `string` |

#### Returns

[`DeviceTypeDefinition`](exports_device.md#devicetypedefinition)

#### Defined in

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:59

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

packages/matter.js/dist/cjs/device/DeviceTypes.d.ts:73
