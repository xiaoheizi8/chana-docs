---
title: ChaNa Registry - 超高性能服务注册中心
---

<div align="center">

<img src="./.vitepress/public/logo.svg" alt="ChaNa" width="120">

# ChaNa Registry

## 超高性能服务注册中心

> 💫 一次心跳、每一次注册与发现，都发生在一个个精准的"刹那"之间

</div>

---

## 核心特性

| 特性 | 说明 |
|------|------|
| ⚡ **O(1) 注册发现** | 分层索引实现常数时间复杂度，支持100K+服务实例 |
| 🔌 **50K+ 长连接** | 基于Netty EPOLL，高性能网络通信 |
| 🗃️ **三级缓存架构** | L1本地/L2进程/L3注册表，极致性能 |
| ❤️ **健康检查** | 滑动窗口算法，防止网络抖动误剔除 |
| 🏢 **多租户** | Namespace命名空间隔离，支持100+租户 |
| 🔄 **增量同步** | 版本控制，变更延迟<50ms |

---

## 技术栈

<div align="center">

| | | | |
|:---:|:---:|:---:|:---:|
| <img src="https://img.shields.io/badge/Java-17+-green?style=flat&logo=openjdk" width="80"> | <img src="https://img.shields.io/badge/Netty-4.1-orange?style=flat&logo=netty" width="80"> | <img src="https://img.shields.io/badge/SpringBoot-3.2-blue?style=flat&logo=spring" width="100"> | <img src="https://img.shields.io/badge/ZGC-red?style=flat&logo=java" width="80"> |

</div>

---

## 性能指标

| 指标 | ChaNa | Consul | Zookeeper | Nacos | Eureka |
|------|------:|-------:|----------:|------:|-------:|
| 写入QPS | **50,000+** | 5,000 | 8,000 | 10,000 | 3,000 |
| 读取QPS | **100,000+** | 15,000 | 20,000 | 30,000 | 10,000 |
| P99延迟 | **< 1ms** | 5ms | 3ms | 2ms | 10ms |
| 最大连接 | **50,000+** | 10,000 | 15,000 | 20,000 | 8,000 |
| 实例容量 | **100,000+** | 50,000 | 30,000 | 60,000 | 20,000 |
| 变更延迟 | **< 50ms** | 500ms | 100ms | 200ms | 30,000ms |

---

## 相关链接

- 📚 **源码**: [GitHub](https://github.com/xiaoheizi8/ChaNa)
- 📦 **Starter**: [Gitee](https://gitee.com/winterFly/chana-springboot3-starters)

---

## 快速开始

```bash
# 克隆项目
git clone https://github.com/xiaoheizi8/ChaNa.git

# 编译
mvn clean install -DskipTests

# 启动
java -jar chanaserver/target/chanaserver-1.0.0.jar
```

访问管理界面：(启动服务后访问配置的HTTP端口)
