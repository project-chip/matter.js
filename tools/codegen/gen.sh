#!/usr/bin/env bash

"$MATTER_SDK"/scripts/codegen.py --generator custom:.:matter_idl_plugin "$MATTER_SDK"/src/controller/data_model/controller-clusters.matter
