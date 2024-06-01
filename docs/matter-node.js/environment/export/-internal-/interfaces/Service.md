[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / Service

# Interface: Service

An "environmental service" is an object available via [Environment.get](../classes/Environment.md#get).

Any object may be an environmental service.  This methods in this interface are optional.

## Properties

### \[asyncDispose\]()?

> `optional` **\[asyncDispose\]**: () => `Promise`\<`any`\>

Asynchronous destruction.  Invoked by the environment when it is destroyed.

#### Returns

`Promise`\<`any`\>

#### Source

packages/matter.js/dist/esm/environment/Environmental.d.ts:24

***

### \[presentation\]?

> `optional` **\[presentation\]**: [`Presentation`](../../../../log/export/namespaces/Diagnostic/enumerations/Presentation.md)

Standard diagnostic presentation.

#### Source

packages/matter.js/dist/esm/environment/Environmental.d.ts:28

***

### \[value\]?

> `optional` **\[value\]**: `unknown`

Standard diagnostic value.

#### Source

packages/matter.js/dist/esm/environment/Environmental.d.ts:32

***

### construction?

> `optional` **construction**: `Promise`\<`any`\>

Asynchronous construction, respected by [Environment.load](../classes/Environment.md#load).

#### Source

packages/matter.js/dist/esm/environment/Environmental.d.ts:20
