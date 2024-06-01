[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [endpoint/definitions/system/BaseEndpoint](../../README.md) / BaseRequirements

# Namespace: BaseRequirements

## Variables

### BindingServer

> `const` **BindingServer**: *typeof* [`BindingServer`](../../../../../../behavior/definitions/binding/export/classes/BindingServer.md) = `BaseBindingServer`

The Binding cluster is optional per the Matter specification

We provide this alias to the default implementation [BindingServer](README.md#bindingserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L19)

***

### FixedLabelServer

> `const` **FixedLabelServer**: *typeof* [`FixedLabelServer`](../../../../../../behavior/definitions/fixed-label/export/classes/FixedLabelServer.md) = `BaseFixedLabelServer`

The FixedLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [FixedLabelServer](README.md#fixedlabelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L26)

***

### UserLabelServer

> `const` **UserLabelServer**: *typeof* [`UserLabelServer`](../../../../../../behavior/definitions/user-label/export/classes/UserLabelServer.md) = `BaseUserLabelServer`

The UserLabel cluster is optional per the Matter specification

We provide this alias to the default implementation [UserLabelServer](README.md#userlabelserver) for convenience.

#### Source

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L33)

***

### server

> `const` **server**: `object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

##### mandatory

> **mandatory**: `object` = `{}`

##### optional

> **optional**: `object`

##### optional.Binding

> **Binding**: *typeof* [`BindingServer`](../../../../../../behavior/definitions/binding/export/classes/BindingServer.md) = `BindingServer`

##### optional.FixedLabel

> **FixedLabel**: *typeof* [`FixedLabelServer`](../../../../../../behavior/definitions/fixed-label/export/classes/FixedLabelServer.md) = `FixedLabelServer`

##### optional.UserLabel

> **UserLabel**: *typeof* [`UserLabelServer`](../../../../../../behavior/definitions/user-label/export/classes/UserLabelServer.md) = `UserLabelServer`

#### Source

[packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/definitions/system/BaseEndpoint.ts#L38)
