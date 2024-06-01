[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / environment/export

# environment/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

## Functions

### NodeJsEnvironment()

> **NodeJsEnvironment**(): [`Environment`](-internal-/classes/Environment.md)

This is the default environment implementation for Node.js:

  - Sets variables using rudimentary command line, environment and configuration file parsers.

  - Processes UNIX-style signals and sets process exit codes via ProcessManager

  - Creates a default storage pool using the loaded configuration.

You can modify this behavior:

  - Via configuration

  - By modifying Environment.default

  - By providing an [Environment](-internal-/classes/Environment.md) to your components other than Environment.default

The settings are applied in this order (the higher numbers overwrite lower numbers):
1. Some internal Defaults (mainly Loglevel and such)
2. Config file
3. Environment variables (MATTER_*)
4. Command line parameters

The following variables are defined by this class additionally to [Environment](-internal-/classes/Environment.md):
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

[`Environment`](-internal-/classes/Environment.md)

#### Source

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L52)

***

### getDefaults()

> **getDefaults**(`vars`): `object`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | [`VariableService`](-internal-/classes/VariableService.md) |

#### Returns

`object`

##### environment

> **environment**: `"default"` = `envName`

##### path

> **path**: `object`

##### path.config

> **config**: `string` = `configPath`

##### path.root

> **root**: `string` = `rootPath`

##### runtime

> **runtime**: `object`

##### runtime.exitcode

> **exitcode**: `boolean` = `true`

##### runtime.signals

> **signals**: `boolean` = `true`

#### Source

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L150)

***

### loadConfigFile()

> **loadConfigFile**(`vars`): `any`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vars` | [`VariableService`](-internal-/classes/VariableService.md) |

#### Returns

`any`

#### Source

[packages/matter-node.js/src/environment/NodeJsEnvironment.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node.js/src/environment/NodeJsEnvironment.ts#L111)
