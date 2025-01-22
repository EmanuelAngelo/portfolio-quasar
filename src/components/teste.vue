<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" style="min-height: 100vh" class="shadow-2 rounded-borders">
      <!-- Barra fixa -->
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <!-- Gaveta lateral -->
      <q-drawer v-model="drawer" show-if-above :width="225" :breakpoint="400">
        <q-scroll-area
          style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
        >
          <q-list padding>
            <q-item clickable v-ripple @click="goToPage('/')">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
              <q-item-section> Sobre </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToPage('/projetos')">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>
              <q-item-section> Projetos </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-img
          class="absolute-top"
          src="https://images8.alphacoders.com/137/thumb-1920-1377841.png"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://avatars.githubusercontent.com/u/23459929?v=4" />
            </q-avatar>
            <div class="text-weight-bold">Emanuel Angelo</div>
            <div>emanuelangelo@outlook.com.br</div>
          </div>
        </q-img>
      </q-drawer>

      <!-- Conteúdo principal -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const drawer = ref(false)
    const route = useRoute()
    const router = useRouter()

    // Obtém o título da página atual a partir das metas das rotas
    const pageTitle = computed(() => route.meta.title || 'Menu')

    // Navegação entre páginas
    const goToPage = (path) => {
      router.push(path)
      drawer.value = false // Fecha o drawer ao navegar
    }

    return {
      drawer,
      pageTitle,
      goToPage,
    }
  },
}
</script>