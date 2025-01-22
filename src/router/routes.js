const routes = [
  {
    path: '/',
    component: () => import('components/BasePrincipal.vue'),
    children: [
      { path: '', component: () => import('components/SobreMim.vue'), meta: { title: 'Sobre Mim' } },
      { path: 'projetos', component: () => import('components/MeusProjetos.vue'), meta: { title: 'Meus Projetos' } },
    ],
  },

  // Rota de erro para páginas não encontradas
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
