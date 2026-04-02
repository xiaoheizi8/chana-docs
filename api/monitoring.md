# 📊 监控管理API

ChaNa 提供监控相关的 REST API 用于获取系统状态和指标。

---

## 🌐 基础信息

- **基础路径**: `http://localhost:9998/api`
- **Content-Type**: `application/json`

---

## 📈 核心指标

### GET /api/metrics

获取核心性能指标

**响应:**

```json
{
  "code": 200,
  "data": {
    "serviceCount": 100,
    "instanceCount": 500,
    "totalRegistrations": 10000,
    "totalDiscovers": 50000,
    "qps": 50000,
    "p50Latency": 0.5,
    "p99Latency": 1.0
  }
}
```

**返回字段说明:**

| 字段 | 说明 |
| :--- | :--- |
| serviceCount | 服务数量 |
| instanceCount | 实例数量 |
| totalRegistrations | 总注册次数 |
| totalDiscovers | 总发现次数 |
| qps | 当前QPS |
| p50Latency | P50延迟(ms) |
| p99Latency | P99延迟(ms) |

---

## ❤️ 健康状态

### GET /api/health

获取健康状态

**响应:**

```json
{
  "code": 200,
  "data": {
    "status": "UP",
    "uptime": 3600000,
    "healthyInstances": 450,
    "unhealthyInstances": 50
  }
}
```

**返回字段说明:**

| 字段 | 说明 |
| :--- | :--- |
| status | 系统状态 (UP/DOWN) |
| uptime | 运行时间(ms) |
| healthyInstances | 健康实例数 |
| unhealthyInstances | 不健康实例数 |

---

## 📊 统计数据

### GET /api/stats

获取统计数据

**响应:**

```json
{
  "code": 200,
  "data": {
    "totalRequests": 100000,
    "successRate": 99.9,
    "avgLatency": 0.8
  }
}
```

---

## 🏢 命名空间

### GET /api/namespaces

获取命名空间列表

**响应:**

```json
{
  "code": 200,
  "data": [
    {
      "name": "default",
      "serviceCount": 80,
      "instanceCount": 400
    },
    {
      "name": "production",
      "serviceCount": 20,
      "instanceCount": 100
    }
  ]
}
```

---

## 📋 API 速查表

| 方法 | 路径 | 描述 |
| :--- | :--- | :--- |
| GET | `/api/metrics` | 获取核心性能指标 |
| GET | `/api/health` | 获取健康状态 |
| GET | `/api/stats` | 获取统计数据 |
| GET | `/api/namespaces` | 获取命名空间列表 |
