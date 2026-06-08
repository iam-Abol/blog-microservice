# Microservices Event-Driven Blog Platform (Kubernetes + React)

A scalable microservices-based blogging application built using **Node.js, React, Kubernetes, and an event-driven architecture (CQRS pattern)**.  
Services communicate asynchronously through an **Event Bus**, simulating a real-world distributed system.

---

## 🧠 Architecture Overview

This project is built using an **event-driven microservices architecture**:

- Each service is independent
- Communication happens via an Event Bus
- Each service maintains its own data model (CQRS pattern)

### 🔁 Event Flow

1. Client creates a post or comment
2. Service emits an event to the Event Bus
3. Event Bus broadcasts the event to all services
4. Each service updates its own state accordingly

---

## 🧩 Services

### 🖥 Client (React)

- Create posts
- View posts
- Add comments
- View moderation status

---

### 📝 Posts Service (Port 4000)

- Stores posts in memory
- Emits `PostCreated` event
- Handles incoming events

---

### 💬 Comments Service (Port 4001)

- Stores comments per post
- Emits `CommentCreated`
- Handles moderation updates

---

### 🔍 Query Service (Port 4002)

- Builds optimized read model
- Combines posts + comments
- Handles:
  - `PostCreated`
  - `CommentCreated`
  - `CommentUpdated`

---

### ⚖️ Moderation Service (Port 4003)

- Automatically moderates comments
- Rejects comments containing the word **"orange"**
- Emits `CommentModerated`

---

### 📡 Event Bus (Port 4005)

- Central event hub
- Receives all events
- Broadcasts to all services
- Stores event history (in-memory)

---

## ☸️ Kubernetes Setup

All services are deployed using Kubernetes:

- Each service has a `Deployment`
- Internal communication via `ClusterIP`
- External routing via `Ingress NGINX`

---

## 🌐 Ingress Routing

| Route                 | Service          |
| --------------------- | ---------------- |
| `/posts/create`       | Posts Service    |
| `/posts`              | Query Service    |
| `/posts/:id/comments` | Comments Service |
| `/*`                  | React Client     |

---

## 🔄 Event Types

| Event              | Description                    |
| ------------------ | ------------------------------ |
| `PostCreated`      | A new post is created          |
| `CommentCreated`   | A new comment is created       |
| `CommentModerated` | Comment is approved/rejected   |
| `CommentUpdated`   | Updated comment status/content |

---

## 🛠 Tech Stack

- React
- Node.js + Express
- Axios
- Docker
- Kubernetes
- Skaffold
- NGINX Ingress Controller

---

## 🚀 How to Run Locally

### 1. Prerequisites

- Docker
- Kubernetes (Minikube or Docker Desktop Kubernetes)
- Skaffold
- NGINX Ingress Controller

---

### 2. Apply Kubernetes configs

```bash
kubectl apply -f infra/k8s/
```

## 3. Start Development with Skaffold

```bash
skaffold dev
```

### 4. Add Local Domain

Add this to your /etc/hosts file:

```bash
127.0.0.1 posts.com
```

### 5. Open the App

Open in your browser:

```bash
http://posts.com
```

## 🧠 Key Concepts Learned

- Microservices architecture
- Event-driven systems
- Kubernetes deployments & services
- Ingress routing
- Async communication via events
- Containerized development workflow

## 📦 Services Summary

- client
- posts
- comments
- query
- moderation
- event-bus

## ⚠️ Notes

- Data is stored in memory (no database)
- Event bus is not persistent (dev-only)
- This project is for learning distributed systems concepts

## 👨‍💻 Author

- Microservices learning project built with Kubernetes and event-driven architecture.

---

## 🌐 Useful Link for Users in Iran

If you are in Iran, this guide may help when downloading dependencies and setting up NGINX:

👉 [Bypassing restrictions for Kubernetes & NGINX setup (Virgool)](https://virgool.io/@ahmadidev/%D8%B1%D9%88%D8%B4-%D9%87%D8%A7%DB%8C-%D8%AF%D9%88%D8%B1-%D8%B2%D8%AF%D9%86-%D8%AA%D8%AD%D8%B1%DB%8C%D9%85-%DA%A9%D9%88%D8%A8%D8%B1%D9%86%DB%8C%D8%AA%DB%8C%D8%B2-%D9%88-%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D9%85%DB%8C%D8%B1%D9%88%D8%B1-%DA%A9%D9%84%D8%A7%D8%AF-%D8%B9%D9%84%DB%8C-%D8%A8%D8%A7%D8%A8%D8%A7-wgbqm5mtbzik)
