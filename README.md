This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Price Tracker Project

## Contexte du projet

EcomData est une startup spécialisée dans les solutions e-commerce. Nous recherchons un développeur fullstack pour développer une application web basée sur le business model freemium. Cette application permettra aux utilisateurs de suivre les baisses de prix de produits spécifiques sur divers sites de e-commerce.

Les utilisateurs pourront s'inscrire, ajouter un nombre limité de produits à suivre gratuitement, recevoir des notifications par email lorsqu'une baisse de prix est détectée, afficher les historiques de prix pour chaque produit suivi, et accéder à des fonctionnalités premium (nombre illimité de produits, absence de publicité). Cela vise à attirer un large nombre d'utilisateurs et construire une base solide avant de contacter des investisseurs pour financer la croissance.

L'application doit être extensible, c'est-à-dire créer une application fermée à la modification et ouverte à l'extension, en ajoutant des plateformes de e-commerce sans modifications majeures du code source.

## Fonctionnalités principales

- **Inscription et authentification des utilisateurs**
- **Possibilité d'ajouter de nouveaux produits à suivre**
- **Affichage des historiques de prix pour chaque produit suivi**
- **Notification de baisse de prix**
- **Implémentation du modèle freemium**

## Design

- **Créer la charte graphique**
- **Créer des prototypes haute fidélité** (maquettes interactives proches de l'application finale)

## Frontend

- Créer les pages avec Next.js: inscription, connexion, Accueil, mise à niveau (passage de gratuit à premium), dashboard, ajout de produit
- Utiliser le framework TailwindCSS
- Utiliser un framework de composants de votre choix

## Backend

- Intégrer NextAuth pour l'authentification et la gestion des sessions
- Configurer l'API avec Next.js API routes
- Web scraping des sites e-commerce pour récupérer régulièrement les prix des produits
- Utiliser Prisma ou Mongoose pour les opérations de base de données avec MySQL ou MongoDB
- Modéliser et créer la base de données

## Technologies à utiliser

- **Next.js**: framework pour le rendu côté serveur basé sur React
- **Langage de programmation**: TypeScript
- **NextAuth**: solution complète pour l'authentification dans les apps Next.js (900k téléchargements hebdomadaires)
- **Validation des données** avec Zod (10M téléchargements hebdomadaires)
- **react-hook-form**: fournit des hooks pour gérer l'état du formulaire et intégrer facilement des validateurs de données (5M téléchargements hebdomadaires)
- **Prisma ou Mongoose**: ORM et ODM pour interagir avec la base de données MySQL ou MongoDB
- **Base de données**: MySQL ou MongoDB
- **TailwindCSS**: framework pour le design et le style des pages (utiliser l'annotation `@apply` pour utiliser les classes utilitaires prédéfinies de TailwindCSS directement dans les fichiers SCSS)
- **Sass**: préprocesseur CSS pour ajouter des fonctionnalités avancées comme les variables, les imbrications et mixins

## BONUS

- Écrire les tests unitaires.
- Rendre l'application extensible pour ajouter de nouveaux sites e-commerce à scraper.
- L'utilisation du préprocesseur Sass est optionnelle.
