# 🖥️ 服务端部署

本文档详细介绍 ChaNa 注册中心的服务端部署方式。

---

## 📦 部署方式

### 方式一：Jar包部署

编译完成后，在 `chanaserver/target/` 目录下找到 `chanaserver-1.0.0.jar`

```bash
java -jar chanaserver-1.0.0.jar
```

### 方式二：Docker部署

**1. 创建 Dockerfile**

```bash
FROM openjdk:17-slim
COPY target/chanaserver-1.0.0.jar /app/app.jar
EXPOSE 9998 9999
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```

**2. 构建并运行**

```bash
# 构建镜像
docker build -t chana-registry .

# 运行容器
docker run -d -p 9998:9998 -p 9999:9999 chana-registry
```

---

## ⚙️ 配置说明

### application.yml 完整配置

```yaml
chana:
  netty:
    port: 9999              # Netty长连接端口
    bossThreads: 4          # Boss线程数
    workerThreads: 16       # Worker线程数
  http:
    port: 9998              # HTTP API端口
  registry:
    cache:
      l1-ttl: 5000          # L1缓存TTL(ms)
      l2-ttl: 30000         # L2缓存TTL(ms)
    health:
      check-interval: 30000 # 健康检查间隔(ms)
      max-miss: 3           # 最大心跳丢失次数
```

---

## 🔌 端口说明

| 端口 | 说明 | 协议 |
| :--- | :--- | :--- |
| 9998 | HTTP API端口 | HTTP |
| 9999 | Netty长连接端口 | TCP |

---

## ⚡ JVM调优建议

```bash
java -server \
  -XX:+UseZGC \
  -XX:+ZGenerational \
  -XX:MaxGCPauseMillis=5 \
  -XX:+AlwaysPreTouch \
  -Xms4g -Xmx4g \
  -XX:MaxGCPauseMillis=5 \
  -XX:MaxDirectMemorySize=4g \
  -jar chanaserver-1.0.0.jar
```

::: tip 推荐配置
- 堆内存：4GB
- 直接内存：4GB
- 使用 ZGC 获得最低延迟
:::
