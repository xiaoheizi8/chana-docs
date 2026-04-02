# 🔧 客户端集成

ChaNa 提供 Spring Boot Starter，简化客户端集成。

---

## 📥 引入依赖

```xml
<dependency>
    <groupId>com.chanacode</groupId>
    <artifactId>chana-discovery-spring-boot3-starter</artifactId>
    <version>3.0.0</version>
</dependency>
```

::: info Maven 仓库
Starter 发布在 Gitee: [https://gitee.com/winterFly/chana-springboot3-starters](https://gitee.com/winterFly/chana-springboot3-starters)
:::

---

## ⚙️ 配置客户端

### application.yml 配置

```yaml
chana:
  discovery:
    server-host: localhost     # 注册中心地址
    server-port: 9999          # 注册中心端口
    auto-register: true       # 自动注册
    namespace: default        # 命名空间
    group: DEFAULT_GROUP      # 分组
    heartbeat-interval: 5000  # 心跳间隔(ms)
```

### 配置项说明

| 配置项 | 说明 | 默认值 |
| :--- | :--- | :--- |
| server-host | 注册中心地址 | localhost |
| server-port | 注册中心端口 | 9999 |
| auto-register | 自动注册 | true |
| namespace | 命名空间 | default |
| group | 服务分组 | DEFAULT_GROUP |
| heartbeat-interval | 心跳间隔(ms) | 5000 |

---

## ▶️ 启用服务发现

### 1. 启动类添加注解

```java
@EnableChaNaDiscovery
@SpringBootApplication
public class OrderApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}
```

### 2. 服务注册

使用 `@ChaNaService` 注解自动注册服务：

```java
@ChaNaService(name = "order-service", version = "1.0.0")
public class OrderServiceImpl implements OrderService {
    // ...
}
```

### 完整示例

```java
// 启动类
@EnableChaNaDiscovery
@SpringBootApplication
public class OrderApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}

// 服务实现类
@ChaNaService(name = "order-service", version = "1.0.0", group = "production")
public class OrderServiceImpl implements OrderService {
    @Override
    public String createOrder(Order order) {
        // ...
        return "order-created";
    }
}
```

---

## 📚 相关资源

- **Starter源码**: [https://gitee.com/winterFly/chana-springboot3-starters](https://gitee.com/winterFly/chana-springboot3-starters)
- **官方源码**: [https://github.com/xiaoheizi8/ChaNa](https://github.com/xiaoheizi8/ChaNa)
