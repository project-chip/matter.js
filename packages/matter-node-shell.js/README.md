# MATTER NODE SHELL

STATUS: Work In Progress (WIP)

This project provides a light-weight node.js implementation of a Matter Node shell application:
https://github.com/project-chip/connectedhomeip

## Install Dependencies

```
npm install
```

## Build

Because TypeScript is used, the project needs to be built before it can be run.

```
npm run build
```
## Run

There are three ways to start matter-node-shell. The `nodenum` parameter provides a unique identifier for the matter-node-shell process mainly to allocate a unique port number. If `nodenum` is not passed, it will default to `0`. 
The shell currently just supports Controller side and so the port is not used and the node is always by default a "controller".

```
npm shell <nodenum>
```

## General usage

The shell offers and interactive prompt that can execute commands. If you just enter the command name that has sub commands (with or without followed by "help"), it will display the command options. If you enter the command name followed by the options, it will execute the command, with "help" after the command name it will show the detailed help for this command.

e.g. `commission` or `commission help` will display the commissioning command options

### help

Display a list of all top-level commands supported and a brief description.

```
matter-node> help
  commission                               Handle device commissioning
  config                                   Manage global configuration
  lock <command> [node-id] [endpoint-id]   Operate lock cluster
  session                                  Manage session
  nodes                                    Manage nodes
  onoff <command> [node-id] [endpoint-id]  Operate OnOff Cluster. Execute on one node or endpoint, else all onoff clusters will be controlled
  subscribe                                Handle attribute and event subscriptions
  identify [time] [node-id] [endpoint-id]  Trigger Identify command ith given time (default 10s). Execute on one node or endpoint, else all onoff clusters will be controlled
  exit                                     Exit

```

### Example for help: config

Display all node configuration in persistant store.

```
> config
  config loglevel             Manage LogLevel
  config ble-hci              Manage BLE HCI ID (Linux)
  config wifi-credentials     Manage Wi-Fi credentials used in commissioning process
  config thread-credentials   Manage Thread credentials used in commissioning process

Done
```

### exit

Exit the shell terminal.

```
> exit
Goodbye
```


# Running multiple instances

`matter-node-shell` uses the `node-localstorage` package to persistently store configuration data of each node on disk. In order to run multiple nodes on one machine, start each node with their own `nodenum` so each will create and use their own `.matter-shell-#` directory and use different ports for communication where `#` is the `nodenum` passed from the commandline.

```
# From matter-node-shell top-level
npm shell 1

# In different terminal
npm shell 2
```

To delete node state, i.e. factory reset, just delete the `.matter-shell-#` directory of the node:

```
rm -fr .matter-shell-2
```

The contents of the `.matter-shell-#` directory are human-readable, where each field in the key/value store is a separate file in ascii format:

```
$ ls .matter-shell-1
0.MatterController.fabric			0.SessionManager.resumptionRecords
0.MatterController.fabricCommissioned		Node.discriminator
0.MatterController.operationalIpServerAddress	Node.ip
0.RootCertificateManager.nextCertificateId	Node.longDiscriminator
0.RootCertificateManager.rootCertBytes		Node.pin
0.RootCertificateManager.rootCertId		Node.port
0.RootCertificateManager.rootKeyIdentifier	Node.shortDiscriminator
0.RootCertificateManager.rootKeyPair

$ more .matter-shell-1/Node.ip 
"fe80::148d:9bd8:5006:243%en0"
```

```
          █
          █
      ▄   █   ▄
      ▀▀█████▀▀
    ▀█▄       ▄█▀
      ▀█▄   ▄█▀
   ▄██▀▀█   █▀▀██▄
  ▀▀    █   █    ▀▀
```
