# 📡 服务管理API

ChaNa 提供完整的 REST API 用于服务注册与发现。

---

## 🌐 基础信息

- **基础路径**: `http://localhost:9998/api`
- **Content-Type**: `application/json`

---

## 📝 服务注册

### POST /api/services

注册服务实例

**请求体:**

```json
{
  "instanceId": "instance-001",
  "serviceName": "order-service",
  "host": "192.168.1.100",
  "port": 8080,
  "namespace": "default",
  "weight": 100,
  "version": "1.0.0"
}
```

**响应:**

```json
{
  "code": 200,
  "msg": "success"
}
```

---

### POST /api/services/register

注册服务实例（兼容写法）

### POST /api/services/deregister

注销服务实例

**请求体:**

```json
{
  "instanceId": "instance-001",
  "serviceName": "order-service",
  "namespace": "default"
}
```

---

## 🔍 服务发现

### GET /api/services

获取服务列表

**响应:**

```json
{
  "code": 200,
  "data": [
    {
      "name": "order-service",
      "instanceCount": 3
    }
  ]
}
```

---

### GET /api/services/{name}?namespace=xxx

获取服务详情

**参数:**

| 参数 | 说明 | 必填 |
| :--- | :--- | :--- |
| name | 服务名称 | ✅ |
| namespace | 命名空间 | ❌ |

**响应:**

```json
{
  "code": 200,
  "data": {
    "serviceName": "order-service",
    "instances": [
      {
        "instanceId": "instance-001",
        "host": "192.168.1.100",
        "port": 8080,
        "healthy": true,
        "weight": 100
      }
    ]
  }
}
```

---

## 💓 心跳

### POST /api/heartbeat

发送心跳

**请求体:**

```json
{
  "instanceId": "instance-001",
  "serviceName": "order-service",
  "namespace": "default"
}
```

---

## 📋 API 速查表

| 方法 | 路径 | 描述 |
| :--- | :--- | :--- |
| GET | `/api/services` | 获取服务列表 |
| GET | `/api/services/{name}` | 获取服务详情 |
| POST | `/api/services` | 注册服务实例 |
| POST | `/api/services/register` | 注册服务实例 |
| POST | `/api/services/deregister` | 注销服务实例 |
| POST | `/api/heartbeat` | 发送心跳 |
