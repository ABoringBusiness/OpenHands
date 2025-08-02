# OpenHands Helm Chart

This Helm chart deploys OpenHands, an AI assistant that can interact with a computer to solve tasks.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- PV provisioner support in the underlying infrastructure (if persistence is enabled)

## Installing the Chart

To install the chart with the release name `my-openhands`:

```bash
helm install my-openhands ./charts/openhands
```

The command deploys OpenHands on the Kubernetes cluster with default configuration. The [Parameters](#parameters) section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `my-openhands` deployment:

```bash
helm delete my-openhands
```

## Parameters

### Global parameters

| Name                      | Description                                     | Value           |
| ------------------------- | ----------------------------------------------- | --------------- |
| `image.repository`        | OpenHands image repository                      | `openhands`     |
| `image.tag`               | OpenHands image tag                             | `latest`        |
| `image.pullPolicy`        | OpenHands image pull policy                     | `IfNotPresent`  |
| `replicaCount`            | Number of OpenHands replicas to deploy          | `1`             |
| `imagePullSecrets`        | OpenHands image pull secrets                    | `[]`            |
| `nameOverride`            | String to partially override openhands.fullname | `""`            |
| `fullnameOverride`        | String to fully override openhands.fullname     | `""`            |

### OpenHands Configuration parameters

| Name                                    | Description                                                                 | Value                                                      |
| --------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `openhands.env.SANDBOX_RUNTIME_CONTAINER_IMAGE` | Container image for the sandbox runtime                            | `docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik` |
| `openhands.env.SANDBOX_USER_ID`         | User ID for the sandbox                                                     | `0`                                                        |
| `openhands.env.RUN_AS_OPENHANDS`        | Run as OpenHands user                                                       | `true`                                                     |
| `openhands.env.FILE_STORE`              | File store type                                                             | `local`                                                    |
| `openhands.env.FILE_STORE_PATH`         | Path for file store                                                         | `/.openhands`                                              |
| `openhands.env.INIT_GIT_IN_EMPTY_WORKSPACE` | Initialize git in empty workspace                                       | `1`                                                        |
| `openhands.env.USE_HOST_NETWORK`        | Use host network                                                            | `false`                                                    |

### Persistence parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `openhands.persistence.enabled`         | Enable persistence for OpenHands data                                       | `true`          |
| `openhands.persistence.storageClass`    | PVC Storage Class for OpenHands data volume                                 | `""`            |
| `openhands.persistence.size`            | PVC Storage Request for OpenHands data volume                               | `10Gi`          |
| `openhands.persistence.accessMode`      | PVC Access Mode for OpenHands data volume                                   | `ReadWriteOnce` |
| `openhands.persistence.annotations`     | Annotations for the PVC                                                     | `{}`            |

### Workspace parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `openhands.workspace.enabled`           | Enable persistence for OpenHands workspace                                  | `true`          |
| `openhands.workspace.mountPath`         | Path to mount the workspace in the container                                | `/opt/workspace_base` |
| `openhands.workspace.storageClass`      | PVC Storage Class for OpenHands workspace volume                            | `""`            |
| `openhands.workspace.size`              | PVC Storage Request for OpenHands workspace volume                          | `20Gi`          |
| `openhands.workspace.accessMode`        | PVC Access Mode for OpenHands workspace volume                              | `ReadWriteOnce` |
| `openhands.workspace.annotations`       | Annotations for the workspace PVC                                           | `{}`            |

### Docker socket parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `openhands.dockerSocket.enabled`        | Mount the Docker socket from the host                                       | `false`         |
| `openhands.dockerSocket.hostPath`       | Path to the Docker socket on the host                                       | `/var/run/docker.sock` |
| `openhands.dockerSocket.mountPath`      | Path to mount the Docker socket in the container                            | `/var/run/docker.sock` |

### Service parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `service.type`                          | OpenHands service type                                                      | `ClusterIP`     |
| `service.port`                          | OpenHands service port                                                      | `3000`          |

### Ingress parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `ingress.enabled`                       | Enable ingress record generation for OpenHands                              | `false`         |
| `ingress.className`                     | IngressClass that will be used to implement the Ingress                     | `""`            |
| `ingress.annotations`                   | Additional annotations for the Ingress resource                             | `{}`            |
| `ingress.hosts`                         | An array with hosts and paths for the Ingress                               | See values.yaml |
| `ingress.tls`                           | TLS configuration for the Ingress                                           | `[]`            |

### Other parameters

| Name                                    | Description                                                                 | Value           |
| --------------------------------------- | --------------------------------------------------------------------------- | --------------- |
| `serviceAccount.create`                 | Enable creation of ServiceAccount for OpenHands pod                         | `true`          |
| `serviceAccount.annotations`            | Additional custom annotations for the ServiceAccount                        | `{}`            |
| `serviceAccount.name`                   | The name of the ServiceAccount to use                                       | `""`            |
| `podAnnotations`                        | Annotations for OpenHands pods                                              | `{}`            |
| `podSecurityContext`                    | OpenHands pods' Security Context                                            | `{}`            |
| `securityContext`                       | OpenHands containers' Security Context                                      | `{}`            |
| `resources`                             | The resources to allocate for OpenHands container                           | `{}`            |
| `nodeSelector`                          | Node labels for pod assignment                                              | `{}`            |
| `tolerations`                           | Tolerations for pod assignment                                              | `[]`            |
| `affinity`                              | Affinity for pod assignment                                                 | `{}`            |