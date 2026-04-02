# 🚀 快速开始

本指南将帮助你快速搭建 ChaNa 注册中心。

## 📋 环境要求

| 要求 | 版本 |
| :--- | :--- |
| 🖥️ **Java** | 17+ |
| 📦 **Maven** | 3.6+ |

---

## 🛠️ 快速部署

### 1️⃣ 克隆项目

```bash
git clone https://github.com/xiaoheizi8/ChaNa.git
cd ChaNa
```

### 2️⃣ 编译项目

```bash
mvn clean install -DskipTests
```

### 3️⃣ 启动服务端

::: info 提示
编译完成后，在 `chanaserver/target/` 目录下找到 `chanaserver-1.0.0.jar`
:::

**方式一：jar包启动**

```bash
java -jar chanaserver/target/chanaserver-1.0.0.jar
```

**方式二：Spring Boot启动**

```java
@SpringBootApplication
@EnableChaNaServer
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
```

**配置文件 `application.yml`**

```yaml
chana:
  netty:
    port: 9999      # Netty端口
  http:
    port: 9998      # HTTP端口
```

### 4️⃣ 服务验证

::: tip 提示
启动成功后，访问管理界面 `http://localhost:9998` 查看
:::

---

## 📖 下一步

- [→ 服务端部署指南](./server)
- [→ 客户端集成指南](./client)
