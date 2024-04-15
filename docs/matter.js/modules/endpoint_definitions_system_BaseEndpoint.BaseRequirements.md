[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/BaseEndpoint](endpoint_definitions_system_BaseEndpoint.md) / BaseRequirements

# Namespace: BaseRequirements

[endpoint/definitions/system/BaseEndpoint](endpoint_definitions_system_BaseEndpoint.md).BaseRequirements

## Table of contents

### Variables

- [BindingServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#bindingserver)
- [FixedLabelServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#fixedlabelserver)
- [UserLabelServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#userlabelserver)
- [server](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#server)

## Variables

### BindingServer

• `Const` **BindingServer**: typeof [`BindingServer`](../classes/behavior_definitions_binding_export.BindingServer.md) = `BaseBindingServer`

The Binding cluster is optional per the Matter specification

We provide this alias to the default implementation [BindingServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#bindingserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L19)

___

### FixedLabelServer

• `Const` **FixedLabelServer**: typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) = `BaseFixedLabelServer`

The FixedLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [FixedLabelServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#fixedlabelserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L26)

___

### UserLabelServer

• `Const` **UserLabelServer**: typeof [`UserLabelServer`](../classes/behavior_definitions_user_label_export.UserLabelServer.md) = `BaseUserLabelServer`

The UserLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [UserLabelServer](endpoint_definitions_system_BaseEndpoint.BaseRequirements.md#userlabelserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L33)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | {} |
| `optional` | \{ `Binding`: typeof [`BindingServer`](../classes/behavior_definitions_binding_export.BindingServer.md) = BindingServer; `FixedLabel`: typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) = FixedLabelServer; `UserLabel`: typeof [`UserLabelServer`](../classes/behavior_definitions_user_label_export.UserLabelServer.md) = UserLabelServer } |
| `optional.Binding` | typeof [`BindingServer`](../classes/behavior_definitions_binding_export.BindingServer.md) |
| `optional.FixedLabel` | typeof [`FixedLabelServer`](../classes/behavior_definitions_fixed_label_export.FixedLabelServer.md) |
| `optional.UserLabel` | typeof [`UserLabelServer`](../classes/behavior_definitions_user_label_export.UserLabelServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L38)
