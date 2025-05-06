group "default" {
    targets = ["chip"]
}

variable "VERSION" {}
variable "CHIP_COMMIT" {}
variable "TMPDIR" { default = "/tmp" }

target "chip" {
    dockerfile = "Dockerfile"
    target = "chip"

    labels = {
        "org.opencontainers.image.name" = "matter.js-chip"
        "org.opencontainers.image.version" = "${VERSION}"
        "org.opencontainers.image.revision" = "${CHIP_COMMIT}"
    }

    args = {
        "CHIP_COMMIT" = "${CHIP_COMMIT}"
    }

    tags = [
        "ghcr.io/matter-js/chip"
    ]

    output = [
        {
            type = "docker"
        }
    ]

    #cache-from = [
    #    {
    #        type = "registry"
    #        ref = "ghcr.io/matter-js/chip-cache:cache"
    #        mode = "max"
    #    }
    #]

    #cache-to = [
    #    {
    #        type = "registry"
    #        ref = "ghcr.io/matter-js/chip-cache:cache"
    #        mode = "max"
    #        ignore-error = true
    #    }
    #]
}

target "chip-artifact" {
    inherits = [ "chip" ]
    output = [
        {
            type = "docker"
            dest = "${TMPDIR}/chip.tar"
        }
    ]
}

target "chip-apps" {
    inherits = [ "chip" ]
    target = "chip-apps"

    labels = {
        "org.opencontainers.image.name" = "matter.js-chip-apps"
        "org.opencontainers.image.version" = "${VERSION}"
        "org.opencontainers.image.revision" = "${CHIP_COMMIT}"
    }
}

target "base" {
    inherits = [ "chip" ]
    target = "base"

    tags = [
        "ghcr.io/matter-js/chip-base"
    ]
}

target "build" {
    inherits = [ "chip" ]
    target = "build"

    tags = [
        "ghcr.io/matter-js/chip-build"
    ]
}

target "source" {
    inherits = [ "chip" ]
    target = "source"

    tags = [
        "ghcr.io/matter-js/chip-source"
    ]
}

target "bins" {
    inherits = [ "chip" ]
    target = "bins"

    tags = [
        "ghcr.io/matter-js/chip-bins"
    ]
}

target "install" {
    inherits = [ "chip" ]
    target = "install"

    tags = [
        "ghcr.io/matter-js/chip-install"
    ]
}
