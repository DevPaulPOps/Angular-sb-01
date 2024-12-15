# Angular-sb-01 🅰️

Application web moderne développée avec Angular pour apprendre et explorer les fonctionnalités du framework.

## ✨ Fonctionnalités

- **Architecture Modulaire**

  - Routing Angular optimisé
  - Composants réutilisables
  - Services injectables

- **Composants Principaux**
  - Hello Component avec interactions dynamiques
  - Service de gestion des données
  - Routage intelligent

## 🛠️ Stack Technique

- **Framework**: Angular
- **Language**: TypeScript
- **Styles**: CSS natif
- **Tests**: Jasmine & Karma
- **Outils**: Angular CLI

## 📂 Structure du Projet

```sh
src/
├── app/                    # Composants et modules principaux
│   ├── hello/             # Composant Hello
│   │   ├── hello.component.ts
│   │   ├── hello.component.html
│   │   └── hello.component.css
│   └── hello.service.ts   # Service de données
├── assets/                # Ressources statiques
└── styles.css             # Styles globaux
```

## 🚀 Installation

1. **Prérequis**

   ```bash
   npm install -g @angular/cli
   ```

2. **Cloner le projet**

   ```bash
   git clone git@github.com:DevPaulPOps/Angular-sb-01.git
   cd Angular-sb-01
   ```

3. **Installer les dépendances**

   ```bash
   npm install
   ```

4. **Démarrer le serveur de développement**

   ```bash
   ng serve
   ```

   L'application sera accessible sur [http://localhost:4200/](http://localhost:4200/)

## 🧪 Tests

- **Tests unitaires**

  ```bash
  ng test
  ```

- **Tests end-to-end**

  ```bash
  ng e2e
  ```

## 📚 Documentation

### Composants Principaux

#### Hello Component

- Gestion des interactions utilisateur
- Intégration avec le service de données
- Mise à jour dynamique du contenu

#### Hello Service

- Communication avec le backend
- Gestion de l'état de l'application
- Injection de dépendances

## 🛠️ Scripts Disponibles

- `ng serve`: Lance le serveur de développement
- `ng build`: Compile l'application
- `ng test`: Lance les tests unitaires
- `ng lint`: Vérifie le code
- `ng e2e`: Lance les tests end-to-end

## 👥 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork du projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit des changements (`git commit -m 'feat: Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

_Développé avec ❤️ pour explorer les capacités d'Angular_
