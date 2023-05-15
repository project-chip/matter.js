[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / device

# Module: device

## Table of contents

### Enumerations

- [DeviceClasses](../enums/device.DeviceClasses.md)

### Classes

- [Aggregator](../classes/device.Aggregator.md)
- [ComposedDevice](../classes/device.ComposedDevice.md)
- [Device](../classes/device.Device.md)
- [Endpoint](../classes/device.Endpoint.md)
- [OnOffLightDevice](../classes/device.OnOffLightDevice.md)
- [OnOffPluginUnitDevice](../classes/device.OnOffPluginUnitDevice.md)
- [PairedDevice](../classes/device.PairedDevice.md)
- [RootEndpoint](../classes/device.RootEndpoint.md)

### Interfaces

- [DeviceTypeDefinition](../interfaces/device.DeviceTypeDefinition.md)

### Variables

- [DeviceTypes](device.md#devicetypes)

### Functions

- [DeviceTypeDefinition](device.md#devicetypedefinition)
- [getDeviceTypeDefinitionByCode](device.md#getdevicetypedefinitionbycode)

## Variables

### DeviceTypes

• `Const` **DeviceTypes**: `Object`

#### Index signature

▪ [key: `string`]: [`DeviceTypeDefinition`](device.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L107)

## Functions

### DeviceTypeDefinition

▸ **DeviceTypeDefinition**(`«destructured»`): [`DeviceTypeDefinition`](device.md#devicetypedefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `code` | `number` |
| › `deviceClass` | [`DeviceClasses`](../enums/device.DeviceClasses.md) |
| › `name` | `string` |
| › `optionalClientClusters?` | `number`[] |
| › `optionalServerClusters?` | `number`[] |
| › `requiredClientClusters?` | `number`[] |
| › `requiredServerClusters?` | `number`[] |
| › `revision` | `number` |
| › `superSet?` | `string` |

#### Returns

[`DeviceTypeDefinition`](device.md#devicetypedefinition)

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L75)

___

### getDeviceTypeDefinitionByCode

▸ **getDeviceTypeDefinitionByCode**(`code`): [`DeviceTypeDefinition`](device.md#devicetypedefinition) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`DeviceTypeDefinition`](device.md#devicetypedefinition) \| `undefined`

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:1060](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L1060)
