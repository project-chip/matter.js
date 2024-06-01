[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [environment/export](../../../README.md) / [Environmental](../README.md) / Service

# Interface: Service

An "environmental service" is an object available via [Environment.get](../../../classes/Environment.md#get).

Any object may be an environmental service.  This methods in this interface are optional.

## Properties

### \[asyncDispose\]()?

> `optional` **\[asyncDispose\]**: () => `Promise`\<`any`\>

Asynchronous destruction.  Invoked by the environment when it is destroyed.

#### Returns

`Promise`\<`any`\>

#### Source

[packages/matter.js/src/environment/Environmental.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L28)

***

### \[presentation\]?

> `optional` **\[presentation\]**: [`Presentation`](../../../../../log/export/namespaces/Diagnostic/enumerations/Presentation.md)

Standard diagnostic presentation.

#### Source

[packages/matter.js/src/environment/Environmental.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L33)

***

### \[value\]?

> `optional` **\[value\]**: `unknown`

Standard diagnostic value.

#### Source

[packages/matter.js/src/environment/Environmental.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L38)

***

### construction?

> `optional` **construction**: `Promise`\<`any`\>

Asynchronous construction, respected by [Environment.load](../../../classes/Environment.md#load).

#### Source

[packages/matter.js/src/environment/Environmental.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L23)
