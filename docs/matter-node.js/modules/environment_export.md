[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / environment/export

# Module: environment/export

## Table of contents

### Modules

- [\<internal\>](environment_export._internal_.md)

### Functions

- [NodeJsEnvironment](environment_export.md#nodejsenvironment)
- [getDefaults](environment_export.md#getdefaults)
- [loadConfigFile](environment_export.md#loadconfigfile)

## Functions

### NodeJsEnvironment

▸ **NodeJsEnvironment**(): [`Environment`](../classes/environment_export._internal_.Environment.md)

This is the default environment implementation for Node.js:

  - Sets variables using rudimentary command line, environment and configuration file parsers.

  - Processes UNIX-style signals and sets process exit codes via ProcessManager

  - Creates a default storage pool using the loaded configuration.

You can modify this behavior:

  - Via configuration

  - By modifying Environment.default

  - By providing an [Environment](../classes/environment_export._internal_.Environment.md) to your components other than Environment.default

The settings are applied in this order (the higher numbers overwrite lower numbers):
1. Some internal Defaults (mainly Loglevel and such)
2. Config file
3. Environment variables (MATTER_*)
4. Command line parameters

The following variables are defined by this class additionally to [Environment](../classes/environment_export._internal_.Environment.md):
* `environment` - Name of the environment, Default "default"
* `path.root` - Path considered as root for any files to store, Fallback: ".", Default: APPDATA/.matter (Windows), HOME/.matter else (or .matter-<envname>)
* `path.config` - Path to config file, Default: "config.json"
* `trace.path` - Path of the trace file to write, Default: "trace.jsonl" relative to path.root
* `trace.enable` - Enable writing a trace file
* `storage.path` - Where to store storage files, Default: "path.root"
* `storage.clear` - Clear storage on start? Default: false
* `runtime.signals` - By default register SIGINT and SIGUSR2 (diag) handlers, set to false if not wanted
* `runtime.exitcode` - by default we set the process.exitcode to 0 (ok) or 1 (crash), set to false if not wanted

#### Returns

[`Environment`](../classes/environment_export._internal_.Environment.md)

#### Defined in

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L52)

___

### getDefaults

▸ **getDefaults**(`vars`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | [`VariableService`](../classes/environment_export._internal_.VariableService-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `environment` | ``"default"`` |
| `path` | \{ `config`: `string` = configPath; `root`: `string` = rootPath } |
| `path.config` | `string` |
| `path.root` | `string` |
| `runtime` | \{ `exitcode`: `boolean` = true; `signals`: `boolean` = true } |
| `runtime.exitcode` | `boolean` |
| `runtime.signals` | `boolean` |

#### Defined in

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L146)

___

### loadConfigFile

▸ **loadConfigFile**(`vars`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vars` | [`VariableService`](../classes/environment_export._internal_.VariableService-1.md) |

#### Returns

`any`

#### Defined in

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L107)
